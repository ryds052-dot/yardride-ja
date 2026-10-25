from datetime import datetime, timezone
from math import asin, cos, radians, sin, sqrt
from threading import RLock
from time import time
from uuid import uuid4
import random

from flask import Flask, jsonify, render_template, request, send_from_directory

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False

KINGSTON = {"lat": 18.0179, "lng": -76.8099}
LANDMARKS = [
    {"name": "Sovereign Centre North", "lat": 18.0096, "lng": -76.7677},
    {"name": "New Kingston", "lat": 18.0058, "lng": -76.7871},
    {"name": "Half-Way-Tree", "lat": 18.0128, "lng": -76.7982},
    {"name": "UWI Mona Campus", "lat": 18.0053, "lng": -76.7474},
    {"name": "NMIA Airport", "lat": 17.9357, "lng": -76.7875},
    {"name": "Devon House", "lat": 18.0112, "lng": -76.7934},
    {"name": "Papine", "lat": 18.0170, "lng": -76.7435},
    {"name": "Ocho Rios Highway Drop", "lat": 18.4074, "lng": -77.1047},
]
TIERS = {
    "express": {"name": "Express Charter", "base": 350, "per_km": 115, "per_min": 8},
    "executive": {"name": "Executive PPV Gold", "base": 550, "per_km": 155, "per_min": 10},
    "island": {"name": "7-Seater Island Cruiser", "base": 900, "per_km": 210, "per_min": 12},
}
PAYMENT_METHODS = [
    "Cash (JMD)", "Cash (USD)", "Lynk / NCB Instant Transfer", "Card on File",
]

lock = RLock()
drivers = [
    {"id": "drv-01", "name": "Dwayne Campbell", "vehicle": "Toyota Axio", "plate": "PPV 4829 JA", "rating": 4.9, "lat": 18.0120, "lng": -76.7980, "available": True},
    {"id": "drv-02", "name": "Kemar Brown", "vehicle": "Honda Fit Shuttle", "plate": "PPV 7316 JA", "rating": 4.8, "lat": 18.0040, "lng": -76.7810, "available": True},
    {"id": "drv-03", "name": "Shanice Williams", "vehicle": "2018 Subaru Crossover 7", "plate": "PPV 2054 JA", "rating": 5.0, "lat": 18.0190, "lng": -76.8070, "available": True},
    {"id": "drv-04", "name": "Andre Morgan", "vehicle": "Nissan Note", "plate": "PPV 6642 JA", "rating": 4.9, "lat": 17.9980, "lng": -76.8010, "available": True},
    {"id": "drv-05", "name": "Tameka Reid", "vehicle": "Toyota Rush", "plate": "PPV 9183 JA", "rating": 4.9, "lat": 18.0080, "lng": -76.7620, "available": True},
]
rides = {}
dispatch_state = {"drivers": drivers, "rides": rides, "revision": 0}
COUNTER_DRIVERS = [
    {"id": "drv-01", "name": "Dwayne Campbell", "vehicle": "Toyota Axio PPV", "plate": "PPV 4829 JA", "rating": 4.9, "eta_minutes": 4, "lat": 18.0120, "lng": -76.7980},
    {"id": "drv-02", "name": "Kemar Brown", "vehicle": "Honda Fit Shuttle", "plate": "PPV 7316 JA", "rating": 4.8, "eta_minutes": 6, "lat": 18.0040, "lng": -76.7810},
    {"id": "drv-03", "name": "Shanice Williams", "vehicle": "2018 Subaru Crossover 7", "plate": "PPV 2054 JA", "rating": 5.0, "eta_minutes": 3, "lat": 18.0190, "lng": -76.8070},
]


def utc_now():
    return datetime.now(timezone.utc).isoformat()


def haversine_km(a_lat, a_lng, b_lat, b_lng):
    earth_radius_km = 6371.0088
    d_lat = radians(b_lat - a_lat)
    d_lng = radians(b_lng - a_lng)
    value = sin(d_lat / 2) ** 2 + cos(radians(a_lat)) * cos(radians(b_lat)) * sin(d_lng / 2) ** 2
    return earth_radius_km * 2 * asin(sqrt(value))


def quote_for(distance_km, tier_key, minutes=None):
    tier = TIERS[tier_key]
    minutes = max(4, minutes) if minutes else max(4, round(distance_km / 0.42))
    fare = round(tier["base"] + distance_km * tier["per_km"] + minutes * tier["per_min"])
    return {"distance_km": round(distance_km, 1), "minutes": minutes, "fare_jmd": fare, "fare_usd": round(fare / 158, 2)}


def _ride_state(status):
    return {
        "searching": "searching",
        "negotiating": "bid_broadcasted",
        "assigned": "driver_assigned",
        "arrived": "arrived",
        "in_transit": "in_transit",
        "completed": "completed",
        "cancelled": "cancelled",
    }.get(status, status)


def _set_ride_status(ride, status):
    ride["status"] = status
    ride["state"] = _ride_state(status)
    ride["updated_at"] = utc_now()


def _bump_state_revision():
    dispatch_state["revision"] += 1


def _dashboard_data(current_rides):
    completed = [ride for ride in current_rides if ride["status"] == "completed"]
    gross = sum(ride["fare_jmd"] for ride in completed)
    commission = sum(ride["commission_jmd"] for ride in completed)
    return {
        "gross_jmd": gross,
        "gross_usd": round(gross / 158, 2),
        "commission_jmd": commission,
        "commission_usd": round(commission / 158, 2),
        "active_drivers": sum(1 for driver in drivers if not driver["available"]),
        "fleet_size": len(drivers),
    }


def json_error(message, status):
    return jsonify({"error": message}), status


@app.errorhandler(404)
def api_not_found(error):
    if request.path.startswith("/api/"):
        return json_error("API endpoint not found.", 404)
    return error


@app.errorhandler(405)
def api_method_not_allowed(error):
    if request.path.startswith("/api/"):
        return json_error("HTTP method is not allowed for this API endpoint.", 405)
    return error


@app.errorhandler(500)
def api_internal_error(error):
    if request.path.startswith("/api/"):
        return json_error("The API could not complete the request.", 500)
    return error


def get_ride(ride_id):
    ride = rides.get(ride_id)
    if ride is None:
        return None
    return ride


def _make_counter_offers(fare_jmd):
    adjustments = (
        max(100, round(fare_jmd * 0.04 / 100) * 100),
        max(200, round(fare_jmd * 0.08 / 100) * 100),
        max(300, round(fare_jmd * 0.14 / 100) * 100),
    )
    offers = []
    for driver, increase in zip(COUNTER_DRIVERS, adjustments):
        offer = dict(driver)
        offer["fare_jmd"] = fare_jmd + increase
        offer["fare_usd"] = round(offer["fare_jmd"] / 158, 2)
        offer["ice_cold_ac"] = True
        offers.append(offer)
    return offers


def _create_ride(payload, mode="instant"):
    if not isinstance(payload, dict):
        return None, ("A JSON request body is required.", 400)
    try:
        pickup = {"lat": float(payload["pickup"]["lat"]), "lng": float(payload["pickup"]["lng"]), "label": str(payload["pickup"]["label"]).strip()}
        dropoff = {"lat": float(payload["dropoff"]["lat"]), "lng": float(payload["dropoff"]["lng"]), "label": str(payload["dropoff"]["label"]).strip()}
    except (KeyError, TypeError, ValueError, AttributeError):
        return None, ("Pickup and drop-off must include valid coordinates and labels.", 400)
    for point in (pickup, dropoff):
        if not -90 <= point["lat"] <= 90 or not -180 <= point["lng"] <= 180 or not point["label"] or len(point["label"]) > 120:
            return None, ("Pickup/drop-off coordinates or labels are invalid.", 400)

    tier_key = payload.get("tier", "express")
    payment = payload.get("payment", PAYMENT_METHODS[0])
    passenger = str(payload.get("passenger", "Island Rider")).strip()[:80] or "Island Rider"
    notes = payload.get("notes", [])
    if tier_key not in TIERS:
        return None, ("Choose a valid ride tier.", 400)
    if payment not in PAYMENT_METHODS:
        return None, ("Choose a valid payment method.", 400)
    if not isinstance(notes, list) or any(note not in ("At the Sovereign gate", "By the security booth", "Have luggage", "Call outside") for note in notes):
        return None, ("Pickup notes contain an unsupported selection.", 400)
    try:
        distance = float(payload.get("distance_km", 0))
        minutes = int(payload.get("minutes", 0))
        requested_fare = int(payload.get("fare_jmd", 0))
        party_size = int(payload.get("party_size", 1))
    except (TypeError, ValueError):
        return None, ("Distance, ETA, fare, and party size must be valid numbers.", 400)
    if not 0 < distance <= 1000 or not 0 <= minutes <= 3000:
        return None, ("Distance or estimated minutes are outside valid bounds.", 400)
    if party_size not in (1, 2, 3, 4):
        return None, ("Party size must be between 1 and 4.", 400)

    quote = quote_for(distance, tier_key, minutes or None)
    instant_fare = quote["fare_jmd"]
    if mode == "negotiate":
        if not 100 <= requested_fare <= 1000000:
            return None, ("Negotiated fare must be between JMD $100 and $1,000,000.", 400)
        fare = requested_fare
        status = "negotiating"
    else:
        fare = instant_fare
        status = "searching"
    now = utc_now()
    ride = {
        "id": uuid4().hex[:10],
        "status": status,
        "state": _ride_state(status),
        "mode": mode,
        "pickup": pickup,
        "dropoff": dropoff,
        "tier": tier_key,
        "tier_name": TIERS[tier_key]["name"],
        "payment": payment,
        "passenger": passenger,
        "notes": notes,
        "party_size": party_size,
        "pin": f"{random.SystemRandom().randint(0, 9999):04d}",
        **quote,
        "fare_jmd": fare,
        "fare_usd": round(fare / 158, 2),
        "fare_per_person_jmd": round(fare / party_size),
        "fare_per_person_usd": round(fare / party_size / 158, 2),
        "instant_fare_jmd": instant_fare,
        "commission_jmd": round(fare * 0.15),
        "driver": None,
        "counter_offers": _make_counter_offers(fare) if mode == "negotiate" else [],
        "created_at": now,
        "updated_at": now,
    }
    with lock:
        rides[ride["id"]] = ride
        _bump_state_revision()
    return ride, None


def _assign_driver(ride, driver_data, fare_jmd=None):
    driver_id = driver_data["id"]
    fleet_driver = next((driver for driver in drivers if driver["id"] == driver_id), None)
    if not fleet_driver or not fleet_driver["available"]:
        return False
    fleet_driver["available"] = False
    ride["driver"] = {key: fleet_driver[key] for key in ("id", "name", "vehicle", "plate", "rating", "lat", "lng")}
    ride["driver"]["verified"] = True
    ride["driver"]["ice_cold_ac"] = True
    ride["driver"]["eta_minutes"] = next(
        (offer["eta_minutes"] for offer in ride.get("counter_offers", []) if offer["id"] == driver_id),
        5,
    )
    _set_ride_status(ride, "assigned")
    ride["assigned_at"] = utc_now()
    if fare_jmd is not None:
        ride["fare_jmd"] = fare_jmd
        ride["fare_usd"] = round(fare_jmd / 158, 2)
        ride["fare_per_person_jmd"] = round(fare_jmd / ride["party_size"])
        ride["fare_per_person_usd"] = round(fare_jmd / ride["party_size"] / 158, 2)
        ride["commission_jmd"] = round(fare_jmd * 0.15)
    return True


def _apply_ride_action(ride, payload):
    action = payload.get("action")
    if action == "accept":
        if ride["status"] not in ("searching", "negotiating"):
            return "This ride is no longer available to accept.", 409
        assigned = next((driver for driver in drivers if driver["available"]), None)
        agreed_fare = ride["fare_jmd"] if ride["mode"] == "negotiate" else None
        if assigned is None or not _assign_driver(ride, assigned, agreed_fare):
            return "No PPV drivers are currently available.", 409
    elif action == "arrive":
        if ride["status"] != "assigned":
            return "Only an assigned driver can mark arrival.", 409
        _set_ride_status(ride, "arrived")
    elif action == "start":
        if ride["status"] != "arrived":
            return "Only a driver who has arrived can start the trip.", 409
        _set_ride_status(ride, "in_transit")
    elif action == "complete":
        if ride["status"] != "in_transit":
            return "A ride must be in transit before completion.", 409
        _set_ride_status(ride, "completed")
        driver = next((item for item in drivers if item["id"] == ride["driver"]["id"]), None)
        if driver:
            driver["available"] = True
    elif action == "cancel":
        if ride["status"] not in ("searching", "negotiating", "assigned", "arrived", "in_transit"):
            return "This ride can no longer be cancelled.", 409
        _set_ride_status(ride, "cancelled")
        driver = next((item for item in drivers if ride.get("driver") and item["id"] == ride["driver"]["id"]), None)
        if driver:
            driver["available"] = True
    elif action == "accept_match":
        if ride["status"] != "negotiating":
            return "This ride is no longer accepting matches.", 409
        offer = next((item for item in ride["counter_offers"] if item["id"] == payload.get("driver_id")), None)
        if not offer:
            return "That driver offer is not available.", 404
        if not _assign_driver(ride, offer, offer["fare_jmd"]):
            return "That PPV driver is no longer available.", 409
        ride["accepted_offer"] = offer["id"]
    elif action == "counter_bid":
        if ride["status"] != "negotiating":
            return "This ride is no longer accepting counter-bids.", 409
        offer = next((item for item in ride["counter_offers"] if item["id"] == payload.get("driver_id")), None)
        try:
            fare = int(payload.get("fare_jmd", 0))
        except (TypeError, ValueError):
            return "Counter-bid must be a valid JMD amount.", 400
        if not offer or not ride["fare_jmd"] <= fare <= offer["fare_jmd"]:
            return "Counter-bid must meet the selected driver's offer and stay below JMD $1,000,000.", 400
        offer["fare_jmd"] = fare
        offer["fare_usd"] = round(fare / 158, 2)
        offer["countered"] = True
        _set_ride_status(ride, ride["status"])
    else:
        return "Action must be accept, arrive, start, complete, cancel, accept_match, or counter_bid.", 400
    return None


@app.context_processor
def shared_template_data():
    return {"landmarks": LANDMARKS, "tiers": TIERS, "payment_methods": PAYMENT_METHODS}


@app.get("/")
@app.get("/rider")
def rider_page():
    return render_template("app.html", page="app")


@app.get("/driver")
def driver_page():
    return render_template("app.html", page="app")


@app.get("/admin")
def admin_page():
    return render_template("app.html", page="app")


@app.get("/sw.js")
def service_worker():
    response = send_from_directory(f"{app.static_folder}/js", "sw.js", mimetype="application/javascript")
    response.headers["Service-Worker-Allowed"] = "/"
    return response


@app.get("/api/drivers")
def list_drivers():
    elapsed = time()
    result = []
    with lock:
        for index, driver in enumerate(drivers):
            item = dict(driver)
            # Small deterministic drift keeps the demo fleet visibly live without external GPS.
            phase = elapsed / 18 + index * 1.7
            item["lat"] = round(driver["lat"] + sin(phase) * 0.0008, 6)
            item["lng"] = round(driver["lng"] + cos(phase) * 0.0010, 6)
            result.append(item)
    return jsonify({"drivers": result})


@app.get("/api/state")
def api_state():
    with lock:
        current_drivers = []
        for index, driver in enumerate(drivers):
            item = dict(driver)
            phase = time() / 18 + index * 1.7
            item["lat"] = round(driver["lat"] + sin(phase) * 0.0008, 6)
            item["lng"] = round(driver["lng"] + cos(phase) * 0.0010, 6)
            current_drivers.append(item)
        current_rides = sorted(rides.values(), key=lambda ride: ride["created_at"], reverse=True)
        return jsonify({
            "revision": dispatch_state["revision"],
            "drivers": current_drivers,
            "rides": current_rides,
            "dashboard": _dashboard_data(current_rides),
        })


@app.get("/api/rides")
def list_rides():
    with lock:
        items = sorted(rides.values(), key=lambda ride: ride["created_at"], reverse=True)
        return jsonify({"rides": items})


@app.post("/api/rides/request")
def request_ride():
    payload = request.get_json(silent=True)
    mode = payload.get("mode", "instant") if isinstance(payload, dict) else "instant"
    if mode not in ("instant", "negotiate"):
        return json_error("Mode must be instant or negotiate.", 400)
    ride, error = _create_ride(payload, mode)
    if error:
        return json_error(*error)
    return jsonify({"ride": ride}), 201


@app.post("/api/rides/bid")
def bid_on_ride():
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict) or not payload.get("ride_id"):
        return json_error("A ride_id and bid action are required.", 400)
    with lock:
        ride = get_ride(str(payload["ride_id"]))
        if ride is None:
            return json_error("Ride not found.", 404)
        error = _apply_ride_action(ride, payload)
        if error:
            return json_error(*error)
        _bump_state_revision()
        return jsonify({"ride": ride})


@app.post("/api/rides/create")
def create_ride():
    ride, error = _create_ride(request.get_json(silent=True))
    if error:
        return json_error(*error)
    return jsonify({"ride": ride}), 201


@app.route("/api/rides/<ride_id>/action", methods=["POST"])
def ride_action(ride_id):
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return json_error("A JSON action body is required.", 400)
    with lock:
        ride = get_ride(ride_id)
        if ride is None:
            return json_error("Ride not found.", 404)
        error = _apply_ride_action(ride, payload)
        if error:
            return json_error(*error)
        _bump_state_revision()
        return jsonify({"ride": ride})


@app.route("/api/rides/<ride_id>/status", methods=["GET", "PATCH"])
def ride_status(ride_id):
    with lock:
        ride = get_ride(ride_id)
        if ride is None:
            return json_error("Ride not found.", 404)
        if request.method == "GET":
            return jsonify({"ride": ride})

        payload = request.get_json(silent=True)
        if not isinstance(payload, dict):
            return json_error("A JSON action body is required.", 400)
        error = _apply_ride_action(ride, payload)
        if error:
            return json_error(*error)
        _bump_state_revision()
        return jsonify({"ride": ride})


@app.get("/api/dashboard")
def dashboard():
    with lock:
        all_rides = list(rides.values())
        return jsonify({
            **_dashboard_data(all_rides),
            "revision": dispatch_state["revision"],
            "rides": sorted(all_rides, key=lambda ride: ride["created_at"], reverse=True),
        })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
