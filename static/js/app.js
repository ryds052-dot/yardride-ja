/* ==========================================================================
   YARDRIDE ARGON GRAPHICS ENGINE (3D RHODIUM CARS + LASER ROUTE + RADAR PINS)
   ========================================================================== */
(function installYardRideArgonEngine() {
  const SUPERCAR_SVG_INNER = `
    <defs>
      <filter id="yrDropShadow" x="-50%" y="-30%" width="200%" height="160%">
        <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#000000" flood-opacity="0.9"/>
      </filter>
      <!-- Cool Ice-White Xenon Laser Headlight Beams -->
      <linearGradient id="yrXenonBeam" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.65"/>
        <stop offset="40%" stop-color="#38BDF8" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
      </linearGradient>
      <!-- Liquid Rhodium & Brushed Platinum Fuselage -->
      <linearGradient id="yrRhodiumBody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="18%" stop-color="#94A3B8"/>
        <stop offset="50%" stop-color="#334155"/>
        <stop offset="82%" stop-color="#E2E8F0"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <linearGradient id="yrHoodSculpt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F8FAFC" stop-opacity="0.45"/>
        <stop offset="45%" stop-color="#0F172A" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#020617" stop-opacity="0.85"/>
      </linearGradient>
      <linearGradient id="yrObsidianGlass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#020617"/>
        <stop offset="45%" stop-color="#0F172A"/>
        <stop offset="55%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
    </defs>

    <!-- 1. Feathered Ice-Xenon Projector Headlight Cones -->
    <path d="M 22,42 L 6,0 L 32,0 L 29,42 Z" fill="url(#yrXenonBeam)" />
    <path d="M 51,42 L 48,0 L 74,0 L 58,42 Z" fill="url(#yrXenonBeam)" />

    <!-- 2. 3D Rhodium Chassis Group -->
    <g filter="url(#yrDropShadow)">
      <!-- Folded Aero Mirrors with Ice-Cyan Turn Repeaters -->
      <path d="M 18,68 L 9,71 C 7,72 7,75 10,75 L 18,74 Z" fill="#64748B" stroke="#0F172A" stroke-width="0.8"/>
      <path d="M 62,68 L 71,71 C 73,72 73,75 70,75 L 62,74 Z" fill="#64748B" stroke="#0F172A" stroke-width="0.8"/>
      <line x1="9" y1="72" x2="14" y2="71" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="71" y1="72" x2="66" y2="71" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Widebody Sculpted Fuselage -->
      <path d="M 40,36
               C 52,36 60,41 62,52
               C 63,61 60,68 60,79
               C 60,95 63,106 63,121
               C 63,135 57,145 48,147
               C 43,148 37,148 32,147
               C 23,145 17,135 17,121
               C 17,106 20,95 20,79
               C 20,68 17,61 18,52
               C 20,41 28,36 40,36 Z"
            fill="url(#yrRhodiumBody)" stroke="#475569" stroke-width="1.1"/>

      <!-- Longitudinal 3D Contour Shading -->
      <path d="M 40,36
               C 52,36 60,41 62,52
               C 63,61 60,68 60,79
               C 60,95 63,106 63,121
               C 63,135 57,145 48,147
               C 43,148 37,148 32,147
               C 23,145 17,135 17,121
               C 17,106 20,95 20,79
               C 20,68 17,61 18,52
               C 20,41 28,36 40,36 Z"
            fill="url(#yrHoodSculpt)"/>

      <!-- Brushed Champagne-Platinum Front Aero Splitter -->
      <path d="M 24,39 Q 40,35 56,39" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round"/>

      <!-- Hood Crease Specular Lines -->
      <path d="M 28,42 L 25,64" stroke="#E2E8F0" stroke-width="1.1" stroke-opacity="0.55" stroke-linecap="round"/>
      <path d="M 52,42 L 55,64" stroke="#E2E8F0" stroke-width="1.1" stroke-opacity="0.55" stroke-linecap="round"/>

      <!-- Panoramic Obsidian Glasshouse -->
      <path d="M 40,61
               C 49,61 55,65 56,72
               L 55,123
               C 54,130 48,134 40,134
               C 32,134 26,130 25,123
               L 24,72
               C 25,65 31,61 40,61 Z"
            fill="url(#yrObsidianGlass)" stroke="#0F172A" stroke-width="1.5"/>

      <!-- Sapphire Sky Reflection on Windshield -->
      <path d="M 26,71 C 32,68 48,68 54,71 L 51,82 C 45,79 35,79 29,82 Z"
            fill="#7DD3FC" fill-opacity="0.22"/>
      <path d="M 28,84 L 46,66 L 51,68 L 33,86 Z" fill="#FFFFFF" fill-opacity="0.16"/>

      <!-- Roof Bows -->
      <path d="M 25,83 Q 40,80 55,83" fill="none" stroke="#64748B" stroke-width="1.5" stroke-opacity="0.75"/>
      <path d="M 26,113 Q 40,115 54,113" fill="none" stroke="#64748B" stroke-width="1.5" stroke-opacity="0.75"/>

      <!-- Ice-White Matrix LED Headlight Blades -->
      <path d="M 19,49 Q 22,42 29,40" fill="none" stroke="#F0F9FF" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M 61,49 Q 58,42 51,40" fill="none" stroke="#F0F9FF" stroke-width="3.2" stroke-linecap="round"/>

      <!-- Continuous Crimson Rear Lightbar -->
      <path d="M 22,143 Q 40,147 58,143" fill="none" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
      <path d="M 26,143 Q 40,146 54,143" fill="none" stroke="#FECACA" stroke-width="1.2" stroke-linecap="round"/>
    </g>
  `;

  const BEACON_PIN_SVG = `
    <div class="yr-radar-beacon">
      <span class="yr-radar-ring yr-ring-1"></span>
      <span class="yr-radar-ring yr-ring-2"></span>
      <span class="yr-radar-core"></span>
    </div>
  `;

  function patchLeafletEngine() {
    if (!window.L || window.L.__yrArgonPatched) return false;

    // 1. Intercept DivIcons (3D Cars + Luxury Radar Pickup/Dropoff Pins)
    const origDivIcon = window.L.divIcon.bind(window.L);
    window.L.divIcon = function (options = {}) {
      const sig = ((options.className || '') + ' ' + (options.html || '')).toLowerCase();
      const isVehicle =
        /car|driver|vehicle|ppv|cruiser|charter|rotate\(|heading|bearing|<svg/.test(sig) &&
        !/pickup|dropoff|destination|origin|pin-dot/.test(sig);

      if (isVehicle && options.html) {
        const temp = document.createElement('div');
        temp.innerHTML = options.html.trim();
        const rotTarget = temp.querySelector('[style*="rotate"], [style*="heading"]') || temp.firstElementChild;
        const svgMarkup = `<svg class="yr-3d-supercar" viewBox="0 0 80 160" width="44" height="88" xmlns="http://www.w3.org/2000/svg">${SUPERCAR_SVG_INNER}</svg>`;

        if (rotTarget) {
          if (rotTarget.tagName.toLowerCase() === 'svg') {
            const styleAttr = rotTarget.getAttribute('style') || '';
            const classAttr = rotTarget.getAttribute('class') || '';
            options.html = `<div class="${classAttr} yr-car-rotator" style="${styleAttr}">${svgMarkup}</div>`;
          } else {
            rotTarget.classList.add('yr-car-rotator');
            rotTarget.innerHTML = svgMarkup;
            options.html = temp.innerHTML;
          }
        } else {
          options.html = `<div class="yr-car-rotator">${svgMarkup}</div>`;
        }
        options.className = (options.className || '') + ' yr-clean-marker-shell';
        options.iconSize = [44, 88];
        options.iconAnchor = [22, 44];
      } else {
        // Upgrade Pickup / Destination Pins into Pulsing Luxury Telemetry Beacons
        options.html = BEACON_PIN_SVG;
        options.className = 'yr-clean-marker-shell yr-beacon-wrapper';
        options.iconSize = [36, 36];
        options.iconAnchor = [18, 18];
      }
      return origDivIcon(options);
    };

    // 2. Intercept Route Polylines (Replace Dashed Yellow Line with Glowing Laser Beam)
    if (window.L.polyline) {
      const origPolyline = window.L.polyline.bind(window.L);
      window.L.polyline = function (latlngs, options = {}) {
        const luxuryOptions = Object.assign({}, options, {
          color: '#E2E8F0',
          weight: 4,
          opacity: 0.95,
          dashArray: null,
          lineCap: 'round',
          lineJoin: 'round',
          className: ((options && options.className) || '') + ' yr-luxury-route-beam'
        });
        return origPolyline(latlngs, luxuryOptions);
      };
    }

    window.L.__yrArgonPatched = true;
    return true;
  }

  if (!patchLeafletEngine()) {
    const timer = setInterval(() => {
      if (patchLeafletEngine()) clearInterval(timer);
    }, 10);
    window.addEventListener('DOMContentLoaded', patchLeafletEngine);
  }
})();
(() => {
  "use strict";

  const config = window.YARDRIDE_CONFIG || { landmarks: [], tiers: {}, payments: [] };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat("en-JM", { maximumFractionDigits: 0 }).format(value);
  const localRidesStorageKey = "yardride-local-rides";
  let toastTimer;
  let localApiMode = !navigator.onLine;
  let sharedState = null;
  let statePollInFlight = false;
  let statePollRequested = false;
  let lastStateRevision = null;
  const compactPlaceName = name => name.startsWith("Sovereign Centre") ? "Sovereign Centre" : name;
  const localDrivers = [
    { id: "drv-01", name: "Dwayne Campbell", vehicle: "Toyota Axio", plate: "PPV 4829 JA", rating: 4.9, lat: 18.012, lng: -76.798, available: true },
    { id: "drv-02", name: "Kemar Brown", vehicle: "Honda Fit Shuttle", plate: "PPV 7316 JA", rating: 4.8, lat: 18.004, lng: -76.781, available: true },
    { id: "drv-03", name: "Shanice Williams", vehicle: "2018 Subaru Crossover 7", plate: "PPV 2054 JA", rating: 5, lat: 18.019, lng: -76.807, available: true },
    { id: "drv-04", name: "Andre Morgan", vehicle: "Nissan Note", plate: "PPV 6642 JA", rating: 4.9, lat: 17.998, lng: -76.801, available: true },
    { id: "drv-05", name: "Tameka Reid", vehicle: "Toyota Rush", plate: "PPV 9183 JA", rating: 4.9, lat: 18.008, lng: -76.762, available: true },
  ];
  const localCounterDrivers = [
    { ...localDrivers[0], vehicle: "Toyota Axio PPV", eta_minutes: 4 },
    { ...localDrivers[1], vehicle: "Honda Fit Shuttle", eta_minutes: 6 },
    { ...localDrivers[2], vehicle: "2018 Subaru Crossover 7", eta_minutes: 3 },
  ];

  function toast(message) {
    const element = $("#toast");
    if (!element) return;
    element.textContent = message;
    element.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove("visible"), 3200);
  }

  async function api(url, options = {}) {
    let bodyRideId;
    if (options.body) {
      try {
        bodyRideId = JSON.parse(options.body).ride_id;
      } catch {
        bodyRideId = null;
      }
    }
    if (localRideForUrl(url) || (bodyRideId?.startsWith("local-") && readLocalState().rides.some(ride => ride.id === bodyRideId))) {
      return localApi(url, options);
    }
    if (localApiMode) return localApi(url, options);
    let response;
    try {
      response = await fetch(url, {
        headers: { "Content-Type": "application/json", ...(options.headers || {}) },
        ...options,
      });
    } catch {
      localApiMode = true;
      return localApi(url, options);
    }
    let data;
    try {
      data = await response.json();
    } catch {
      localApiMode = true;
      return localApi(url, options);
    }
    if (!data || typeof data !== "object") {
      localApiMode = true;
      return localApi(url, options);
    }
    if (!response.ok) {
      if (response.status >= 500) {
        localApiMode = true;
        return localApi(url, options);
      }
      if (response.status === 404 && options.method !== "POST" && localRideForUrl(url)) return localApi(url, options);
      throw new Error(data.error || `Request failed (${response.status})`);
    }
    cacheApiResponse(url, data);
    return data;
  }
  window.addEventListener("offline", () => { localApiMode = true; });

  function readLocalState() {
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem("yardride-api-fallback") || "null");
    } catch (error) {
      console.warn("Could not read the saved local ride state:", error.message);
    }
    if (!saved || !Array.isArray(saved.rides) || !Array.isArray(saved.drivers)) {
      saved = { rides: [], drivers: localDrivers.map(driver => ({ ...driver })), dashboard: null };
    }
    try {
      const localRides = JSON.parse(localStorage.getItem(localRidesStorageKey) || "[]");
      if (Array.isArray(localRides)) {
        const ridesById = new Map(saved.rides.map(ride => [ride.id, ride]));
        localRides.forEach(ride => {
          if (ride && typeof ride.id === "string" && ride.id.startsWith("local-")) ridesById.set(ride.id, ride);
        });
        saved.rides = [...ridesById.values()];
      }
    } catch (error) {
      console.warn("Could not read locally created rides:", error.message);
    }
    return saved;
  }

  function saveLocalState(state) {
    const localRides = state.rides.filter(ride => ride.id.startsWith("local-"));
    try {
      localStorage.setItem(localRidesStorageKey, JSON.stringify(localRides));
    } catch (error) {
      console.warn("Could not save locally created rides:", error.message);
    }
    try {
      localStorage.setItem("yardride-api-fallback", JSON.stringify(state));
    } catch (error) {
      console.warn("Could not save the local ride state:", error.message);
    }
  }

  function cacheApiResponse(url, data) {
    const state = readLocalState();
    if (Number.isInteger(data.revision)) state.revision = data.revision;
    if (Array.isArray(data.rides)) {
      const serverIds = new Set(data.rides.map(ride => ride.id));
      const pendingLocalRides = state.rides.filter(ride => ride.id.startsWith("local-") && !serverIds.has(ride.id));
      state.rides = [...data.rides, ...pendingLocalRides];
    }
    if (Array.isArray(data.drivers)) state.drivers = data.drivers;
    if (data.dashboard) state.dashboard = data.dashboard;
    if (data.ride) {
      const index = state.rides.findIndex(ride => ride.id === data.ride.id);
      if (index < 0) state.rides.unshift(data.ride);
      else state.rides[index] = data.ride;
      if (data.ride.driver) {
        const driver = state.drivers.find(item => item.id === data.ride.driver.id);
        if (driver) driver.available = ["completed", "cancelled"].includes(data.ride.status);
      }
    }
    saveLocalState(state);
  }

  function localRideForUrl(url) {
    const match = new URL(url, location.origin).pathname.match(/^\/api\/rides\/([^/]+)(?:\/(?:status|action))?$/);
    return match ? match[1].startsWith("local-") && readLocalState().rides.some(ride => ride.id === match[1]) : false;
  }

  function localApi(url, options) {
    const path = new URL(url, location.origin).pathname;
    const method = (options.method || "GET").toUpperCase();
    const state = readLocalState();
    const body = options.body ? JSON.parse(options.body) : {};
    const now = new Date().toISOString();
    const findRide = id => state.rides.find(ride => ride.id === id);
    const dashboard = () => {
      const completed = state.rides.filter(ride => ride.status === "completed");
      const gross = completed.reduce((sum, ride) => sum + ride.fare_jmd, 0);
      const commission = completed.reduce((sum, ride) => sum + ride.commission_jmd, 0);
      return {
        gross_jmd: gross, gross_usd: Number((gross / 158).toFixed(2)),
        commission_jmd: commission, commission_usd: Number((commission / 158).toFixed(2)),
        active_drivers: state.drivers.filter(driver => !driver.available).length,
        fleet_size: state.drivers.length,
      };
    };
    const assign = (ride, driver, fare) => {
      if (!driver) throw new Error("No PPV drivers are available in local mode.");
      const fleetDriver = state.drivers.find(item => item.id === driver.id) || driver;
      fleetDriver.available = false;
      ride.driver = { ...fleetDriver, verified: true, ice_cold_ac: true, eta_minutes: driver.eta_minutes || 5 };
      ride.status = "assigned";
      ride.state = "driver_assigned";
      ride.assigned_at = now;
      if (fare !== undefined) {
        ride.fare_jmd = fare;
        ride.fare_usd = Number((fare / 158).toFixed(2));
        ride.fare_per_person_jmd = Math.round(fare / ride.party_size);
        ride.fare_per_person_usd = Number((fare / ride.party_size / 158).toFixed(2));
        ride.commission_jmd = Math.round(fare * 0.15);
      }
      ride.updated_at = now;
      return ride;
    };
    let result;

    if (path === "/api/state" && method === "GET") {
      result = { revision: state.revision || 0, drivers: state.drivers, rides: state.rides, dashboard: dashboard() };
    } else if (path === "/api/drivers" && method === "GET") {
      result = { drivers: state.drivers };
    } else if (path === "/api/rides" && method === "GET") {
      result = { rides: state.rides };
    } else if (path === "/api/dashboard" && method === "GET") {
      result = { ...dashboard(), rides: state.rides };
    } else if (path === "/api/rides/request" && method === "POST") {
      const tier = config.tiers[body.tier] || config.tiers.express;
      const fare = Number(body.fare_jmd) || 0;
      const ride = {
        id: `local-${Date.now().toString(36)}`,
        status: body.mode === "negotiate" ? "negotiating" : "searching",
        state: body.mode === "negotiate" ? "bid_broadcasted" : "searching",
        mode: body.mode || "instant", pickup: body.pickup, dropoff: body.dropoff,
        tier: body.tier || "express", tier_name: tier.name, payment: body.payment || "Cash (JMD)",
        passenger: body.passenger || "Island Rider", notes: body.notes || [], party_size: Number(body.party_size) || 1,
        pin: String(Math.floor(Math.random() * 10000)).padStart(4, "0"),
        distance_km: Number(body.distance_km) || 0, minutes: Number(body.minutes) || 0,
        fare_jmd: fare, fare_usd: Number((fare / 158).toFixed(2)),
        fare_per_person_jmd: Math.round(fare / (Number(body.party_size) || 1)),
        fare_per_person_usd: Number((fare / (Number(body.party_size) || 1) / 158).toFixed(2)),
        commission_jmd: Math.round(fare * 0.15), driver: null,
        created_at: now, updated_at: now,
        counter_offers: body.mode === "negotiate" ? localCounterDrivers.map((driver, index) => {
          const offerFare = fare + Math.max(100, Math.round(fare * (index + 1) * 0.04 / 100) * 100);
          return { ...driver, fare_jmd: offerFare, fare_usd: Number((offerFare / 158).toFixed(2)), ice_cold_ac: true, countered: false };
        }) : [],
      };
      state.rides.unshift(ride);
      result = { ride };
    } else if (path === "/api/rides/bid" && method === "POST") {
      const ride = findRide(body.ride_id);
      if (!ride) throw new Error("That ride is not available in local mode.");
      if (body.action === "accept_match") {
        const offer = ride.counter_offers.find(item => item.id === body.driver_id);
        if (!offer) throw new Error("The driver offer is no longer available.");
        result = { ride: assign(ride, offer, offer.fare_jmd) };
      } else if (body.action === "counter_bid") {
        const offer = ride.counter_offers.find(item => item.id === body.driver_id);
        if (!offer) throw new Error("The driver offer is no longer available.");
        offer.fare_jmd = Number(body.fare_jmd);
        offer.fare_usd = Number((offer.fare_jmd / 158).toFixed(2));
        offer.countered = true;
        ride.updated_at = now;
        result = { ride };
      } else {
        throw new Error("That bid action is not available in local mode.");
      }
    } else if (/^\/api\/rides\/[^/]+\/action$/.test(path) && method === "POST") {
      const rideId = path.split("/")[3];
      const ride = findRide(rideId);
      if (!ride) throw new Error("That ride is not available in local mode.");
      if (body.action === "cancel" && ["searching", "negotiating", "assigned", "arrived", "in_transit"].includes(ride.status)) {
        ride.status = "cancelled";
        ride.state = "cancelled";
        ride.updated_at = now;
        const driver = state.drivers.find(item => item.id === ride.driver?.id);
        if (driver) driver.available = true;
        result = { ride };
      } else if (body.action === "accept") result = { ride: assign(ride, state.drivers.find(driver => driver.available), ride.mode === "negotiate" ? ride.fare_jmd : undefined) };
      else if (body.action === "arrive" && ride.status === "assigned") { ride.status = "arrived"; ride.state = "arrived"; ride.updated_at = now; result = { ride }; }
      else if (body.action === "start" && ride.status === "arrived") { ride.status = "in_transit"; ride.state = "in_transit"; ride.updated_at = now; result = { ride }; }
      else if (body.action === "complete" && ride.status === "in_transit") {
        ride.status = "completed"; ride.state = "completed"; ride.updated_at = now;
        const driver = state.drivers.find(item => item.id === ride.driver?.id);
        if (driver) driver.available = true;
        result = { ride };
      } else throw new Error("That ride action is not available in local mode.");
    } else if (/^\/api\/rides\/[^/]+\/status$/.test(path) && method === "GET") {
      const ride = findRide(path.split("/")[3]);
      if (!ride) throw new Error("That ride is not available in local mode.");
      result = { ride };
    } else {
      throw new Error("YARDRIDE is offline. Reconnect to submit this action.");
    }
    if (method !== "GET") state.revision = (state.revision || 0) + 1;
    saveLocalState(state);
    return result;
  }

  function haversine(a, b) {
    const rad = deg => deg * Math.PI / 180;
    const dLat = rad(b.lat - a.lat);
    const dLng = rad(b.lng - a.lng);
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 6371.0088 * 2 * Math.asin(Math.sqrt(x));
  }

  const statusLabels = {
    searching: "Searching for PPV Driver",
    negotiating: "Driver offers incoming",
    assigned: "Driver Assigned & En Route",
    arrived: "Arrived at Pickup",
    in_transit: "In Transit",
    cancelled: "Ride Cancelled",
    completed: "Completed",
  };

  async function pollSharedState() {
    if (statePollInFlight) {
      statePollRequested = true;
      return;
    }
    statePollInFlight = true;
    try {
      sharedState = await api("/api/state");
      const revision = Number.isInteger(sharedState.revision) ? sharedState.revision : null;
      if (lastStateRevision !== revision) {
        lastStateRevision = revision;
        window.dispatchEvent(new CustomEvent("yardride:state", { detail: sharedState }));
      }
      window.dispatchEvent(new CustomEvent("yardride:telemetry", { detail: sharedState }));
    } catch (error) {
      console.warn("Could not synchronize dispatch state:", error.message);
    } finally {
      statePollInFlight = false;
      if (statePollRequested) {
        statePollRequested = false;
        pollSharedState();
      }
    }
  }

  initTabs();
  initRider();
  initDriver();
  initAdmin();
  initActivity();
  initFounderTracker();
  updateStatusClock();
  setInterval(updateStatusClock, 60000);
  pollSharedState();
  setInterval(pollSharedState, 1000);

  function updateStatusClock() {
    const clock = $("#status-time");
    if (clock) clock.textContent = new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(new Date());
  }

  function initTabs() {
    const tabs = $$(".tab-button");
    const views = $$(".tab-view");
    const indicator = $(".tab-active-indicator");
    const moveIndicator = button => {
      if (!button || !indicator) return;
      const nav = button.parentElement;
      const navBounds = nav.getBoundingClientRect();
      const bounds = button.getBoundingClientRect();
      indicator.style.width = `${bounds.width}px`;
      indicator.style.transform = `translateX(${bounds.left - navBounds.left}px)`;
    };
    const chooseTab = (requested, updateLocation) => {
      const tab = views.some(view => view.dataset.view === requested) ? requested : "ride";
      tabs.forEach(button => {
        const active = button.dataset.tab === tab;
        button.classList.toggle("active", active);
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
        if (active) moveIndicator(button);
      });
      views.forEach(view => {
        const active = view.dataset.view === tab;
        view.classList.toggle("active", active);
        view.setAttribute("aria-hidden", String(!active));
      });
      if (updateLocation) history.pushState({ tab }, "", `#${tab}`);
      if (tab === "activity") window.dispatchEvent(new Event("yardride:activity-refresh"));
      if (tab === "founder") window.dispatchEvent(new Event("yardride:founder-refresh"));
      if (tab === "drive") window.dispatchEvent(new Event("yardride:dispatch-refresh"));
      if (tab === "ride" && window.yardrideMap) {
        setTimeout(() => window.yardrideMap.invalidateSize(), 80);
      }
    };
    let initialTab = location.hash.slice(1);
    if (!initialTab && location.pathname === "/driver") initialTab = "drive";
    if (!initialTab && location.pathname === "/admin") initialTab = "founder";
    chooseTab(initialTab || "ride", false);
    tabs.forEach(button => button.addEventListener("click", () => chooseTab(button.dataset.tab, true)));
    $$("[data-jump]").forEach(button => button.addEventListener("click", () => chooseTab(button.dataset.jump, true)));
    $("#dynamic-island")?.addEventListener("click", () => chooseTab("ride", true));
    window.addEventListener("resize", () => moveIndicator(tabs.find(button => button.classList.contains("active"))));
    window.addEventListener("popstate", () => chooseTab(location.hash.slice(1), false));
  }

  function initRider() {
    const map = L.map("map", { zoomControl: false, attributionControl: true }).setView([18.0179, -76.8099], 13);
    window.yardrideMap = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abc",
      maxZoom: 20,
    }).addTo(map);

    const pickup = { ...config.landmarks.find(item => item.name.startsWith("Sovereign Centre")) };
    const dropoff = { ...config.landmarks.find(item => item.name === "Devon House") };
    let selecting = null;
    let selectedTier = "express";
    let bookingMode = "instant";
    let currency = "JMD";
    let routeDistance = haversine(pickup, dropoff) * 1.28;
    let routeMinutes = Math.max(4, Math.round(routeDistance / 0.42));
    let routeRequest = 0;
    let currentRideId = localStorage.getItem("yardride-current-ride");
    let currentRideStatus = null;
    let routeLayer;
    let routeGlowLayer;
    let pickupMarker;
    let dropoffMarker;
    let vehicleIconSequence = 0;
    let requestedFare = 0;
    let offersSignature = "";
    let partySize = 1;
    const selectedNotes = new Set();
    const driverMarkers = new Map();
    const driverFrames = new Map();
    const modeButtons = $$(".booking-mode [data-mode]");

    const icon = (className, html) => L.divIcon({ className: "", html: `<span class="${className}">${html}</span>`, iconSize: [31, 31], iconAnchor: [15, 15] });
    const carIcon = bearing => {
      const id = `yardride-car-${vehicleIconSequence++}`;
      return L.divIcon({
        className: "",
        html: `<span class="vehicle-vector" style="--bearing:${bearing}deg"><svg viewBox="0 0 40 48" aria-hidden="true"><defs><linearGradient id="${id}-body" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#fff0bc"/><stop offset=".32" stop-color="#fbbf24"/><stop offset="1" stop-color="#b45309"/></linearGradient><linearGradient id="${id}-glass" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#a5f3fc"/><stop offset=".55" stop-color="#334155"/><stop offset="1" stop-color="#0f172a"/></linearGradient><linearGradient id="${id}-beam" x1="0" x2="0" y1="1" y2="0"><stop stop-color="#fbbf24" stop-opacity=".48"/><stop offset="1" stop-color="#fbbf24" stop-opacity="0"/></linearGradient></defs><path class="vehicle-beam" d="M11 7 -8 -30 14 -2zM29 7 48 -30 26 -2z" fill="url(#${id}-beam)"/><path d="M12 5 20 1l8 4 7 11v23l-5 7H10l-5-7V16z" fill="url(#${id}-body)" stroke="#fff0c2" stroke-width="1.8"/><path d="m13 10 7-4 7 4 3 9H10z" fill="url(#${id}-glass)" stroke="#dbeafe" stroke-opacity=".5"/><path d="M10 25h20v10H10z" fill="#20242b" stroke="#fff2c6" stroke-opacity=".35"/><path d="M8 38h5m14 0h5" stroke="#fff0b3" stroke-width="3" stroke-linecap="round"/><path d="M7 13 3 16m30-3 4 3" stroke="#fff8d6" stroke-width="2" stroke-linecap="round" class="vehicle-headlights"/></svg></span>`,
        iconSize: [35, 42],
        iconAnchor: [17, 21],
      });
    };
    pickupMarker = L.marker([pickup.lat, pickup.lng], { icon: icon("pickup-pin", "●"), draggable: true }).addTo(map);
    dropoffMarker = L.marker([dropoff.lat, dropoff.lng], { icon: icon("dropoff-pin", "◆"), draggable: true }).addTo(map);
    pickupMarker.on("dragend", event => setPoint("pickup", event.target.getLatLng()));
    dropoffMarker.on("dragend", event => setPoint("dropoff", event.target.getLatLng()));

    function setPoint(type, coordinates, label) {
      const point = type === "pickup" ? pickup : dropoff;
      point.lat = coordinates.lat;
      point.lng = coordinates.lng;
      if (label) point.name = label;
      else point.name = `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`;
      const input = $(`#${type}-label`);
      input.value = point.name;
      (type === "pickup" ? pickupMarker : dropoffMarker).setLatLng([point.lat, point.lng]);
      updateRoute();
    }

    function estimateQuote(distance, tierKey) {
      const tier = config.tiers[tierKey];
      return Math.round(tier.base + distance * tier.per_km + routeMinutes * tier.per_min);
    }

    function updateQuote() {
      $("#route-distance").textContent = `${routeDistance.toFixed(1)} km`;
      $("#route-time").textContent = `${routeMinutes} min`;
      $("#route-summary").textContent = `${pickup.name} → ${dropoff.name}`;
      $("#route-pill-summary").textContent = `${compactPlaceName(pickup.name)} → ${compactPlaceName(dropoff.name)}`;
      $("#route-pill-distance").textContent = `${routeDistance.toFixed(1)} KM · ${routeMinutes} MIN · KINGSTON`;
      Object.keys(config.tiers).forEach(key => {
        const fare = estimateQuote(routeDistance, key);
        $(`[data-tier-price="${key}"]`).textContent = `$${money(fare)} JMD`;
        $(`[data-tier-usd="${key}"]`).textContent = `US$${(fare / 158).toFixed(2)}`;
      });
      const fare = estimateQuote(routeDistance, selectedTier);
      if (!requestedFare || bookingMode === "instant") requestedFare = fare;
      const shownFare = bookingMode === "negotiate" ? requestedFare : fare;
      $("#selected-fare").textContent = `$${money(shownFare)} JMD`;
      $("#book-label").textContent = bookingMode === "instant" ? "REQUEST RIDE" : "BROADCAST OFFER";
      $(".ride-sheet").dataset.mode = bookingMode;
      $("#booking-title").textContent = bookingMode === "instant" ? "Choose a vehicle" : "Make an offer";
      $("#selected-tier-label").textContent = config.tiers[selectedTier]?.name || "Selected vehicle";
      updateMatchGauge();
      updateSplitSummary(shownFare);
    }

    async function updateRoute() {
      const requestId = ++routeRequest;
      const from = [pickup.lat, pickup.lng];
      const to = [dropoff.lat, dropoff.lng];
      const directFallback = () => {
        if (requestId !== routeRequest) return;
        routeDistance = Math.max(0.2, haversine(pickup, dropoff) * 1.28);
        routeMinutes = Math.max(4, Math.round(routeDistance / 0.42));
        if (routeLayer) map.removeLayer(routeLayer);
        drawRoute([from, to]);
        updateQuote();
      };
      try {
        const coords = `${pickup.lng},${pickup.lat};${dropoff.lng},${dropoff.lat}`;
        const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`, { signal: AbortSignal.timeout(5000) });
        if (!response.ok) throw new Error("Routing service unavailable");
        const data = await response.json();
        if (!data.routes?.length) throw new Error("No route found");
        const route = data.routes[0];
        if (requestId !== routeRequest) return;
        routeDistance = route.distance / 1000;
        routeMinutes = Math.max(4, Math.round(route.duration / 60));
        if (routeLayer) map.removeLayer(routeLayer);
        drawRoute(route.geometry.coordinates.map(point => [point[1], point[0]]));
        updateQuote();
      } catch {
        directFallback();
      }
    }

    function drawRoute(points) {
      if (routeLayer) map.removeLayer(routeLayer);
      if (routeGlowLayer) map.removeLayer(routeGlowLayer);
      routeGlowLayer = L.polyline(points, { color: "#F59E0B", weight: 10, opacity: 0.25, className: "route-aura", lineCap: "round", lineJoin: "round" }).addTo(map);
      routeLayer = L.polyline(points, { color: "#FBBF24", weight: 4, opacity: 1, className: "route-glow", dashArray: "10 7", lineCap: "round", lineJoin: "round" }).addTo(map);
    }

    function bearingBetween(from, to) {
      const radians = value => value * Math.PI / 180;
      const degrees = value => (value * 180 / Math.PI + 360) % 360;
      const y = Math.sin(radians(to.lng - from.lng)) * Math.cos(radians(to.lat));
      const x = Math.cos(radians(from.lat)) * Math.sin(radians(to.lat)) -
        Math.sin(radians(from.lat)) * Math.cos(radians(to.lat)) * Math.cos(radians(to.lng - from.lng));
      return degrees(Math.atan2(y, x));
    }

    function updateIsland(ride) {
      const island = $("#dynamic-island");
      const eta = $("#island-eta");
      const plate = $("#island-plate");
      const avatar = $("#island-avatar");
      const pin = $("#island-pin");
      const pinValue = $("#island-pin-value");
      const idleCopy = $(".island-idle");
      const liveCopy = $(".island-copy");
      if (!island || !eta || !plate) return;
      const active = ride && ["searching", "negotiating", "assigned", "arrived", "in_transit"].includes(ride.status);
      island.classList.toggle("expanded", Boolean(active));
      island.classList.toggle("island-negotiating", ride?.status === "negotiating");
      if (idleCopy) idleCopy.setAttribute("aria-hidden", String(Boolean(active)));
      if (liveCopy) liveCopy.setAttribute("aria-hidden", String(!active));
      if (!active) {
        eta.textContent = "SEARCHING";
        plate.textContent = "PPV DISPATCH";
        if (avatar) avatar.textContent = "YR";
        if (pin) pin.classList.add("hidden");
        return;
      }
      if (avatar) avatar.textContent = ride.driver?.name?.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toUpperCase() || "YR";
      if (pin) pin.classList.toggle("hidden", !ride.pin || !ride.driver);
      if (pinValue) pinValue.textContent = ride.pin || "----";
      let remainingMinutes = ride.driver?.eta_minutes || 5;
      if (ride.assigned_at) {
        const elapsed = Math.max(0, (Date.now() - Date.parse(ride.assigned_at)) / 60000);
        remainingMinutes = Math.max(0, remainingMinutes - elapsed);
      }
      if (ride.driver) {
        eta.textContent = `${Math.ceil(remainingMinutes)} min ETA`;
      } else {
        eta.textContent = ride.status === "negotiating" ? "BROADCASTING OFFER" : "SEARCHING";
      }
      plate.textContent = ride.driver?.plate || (ride.status === "negotiating" ? "3 PPV DRIVERS VIEWING..." : "PPV DISPATCH");
    }

    function updateMatchGauge() {
      const baseFare = estimateQuote(routeDistance, selectedTier);
      const percent = Math.max(18, Math.min(96, Math.round(96 - Math.max(0, baseFare - requestedFare) / baseFare * 125)));
      $("#match-percent").textContent = `${percent}%`;
      $("#match-label").textContent = percent >= 78 ? `${percent}% Instant Match` : "Low Bid · Slower Match";
      $("#match-fill").style.width = `${percent}%`;
      $("#match-fill").parentElement.classList.toggle("low", percent < 55);
      $("#bid-fare").textContent = `$${money(requestedFare)}`;
    }

    function updateSplitSummary(fare) {
      const count = Number($("#party-size").value);
      partySize = count;
      const amount = Math.round(fare / count);
      $("#split-summary").classList.toggle("hidden", count < 2);
      $("#split-amount").textContent = currency === "JMD" ? `$${money(amount)} JMD / US$${(amount / 158).toFixed(2)}` : `US$${(amount / 158).toFixed(2)} / $${money(amount)} JMD`;
      const share = $("#share-split");
      share.dataset.shareText = `YARDRIDE squad fare split: ${count} riders, $${money(fare)} JMD total (${currency === "JMD" ? `$${money(amount)} JMD` : `US$${(amount / 158).toFixed(2)}`} each). ${pickup.name} to ${dropoff.name}. Pay your share with Lynk or Cash.`;
    }

    function refreshDrivers(drivers = []) {
      drivers.forEach(driver => {
        const point = [driver.lat, driver.lng];
        const existing = driverMarkers.get(driver.id);
        if (existing) {
          if (driver.id !== movingDriver) {
            const origin = existing.getLatLng();
            const target = L.latLng(point);
            const vector = existing.getElement()?.querySelector(".vehicle-vector");
            if (vector) vector.style.setProperty("--bearing", `${bearingBetween(origin, target)}deg`);
            const previousFrame = driverFrames.get(driver.id);
            if (previousFrame) cancelAnimationFrame(previousFrame);
            const started = performance.now();
            const duration = 900;
            const animate = now => {
              const progress = Math.min(1, (now - started) / duration);
              const eased = 1 - (1 - progress) ** 3;
              existing.setLatLng([
                origin.lat + (target.lat - origin.lat) * eased,
                origin.lng + (target.lng - origin.lng) * eased,
              ]);
              if (progress < 1) {
                driverFrames.set(driver.id, requestAnimationFrame(animate));
              } else {
                driverFrames.delete(driver.id);
                existing._yardridePosition = { lat: target.lat, lng: target.lng };
              }
            };
            driverFrames.set(driver.id, requestAnimationFrame(animate));
          }
        } else {
          const marker = L.marker(point, { icon: carIcon(0) }).bindPopup(`<b>${driver.plate}</b><br>${driver.vehicle} · ★ ${driver.rating} · Ice Cold A/C ✓`).addTo(map);
          marker._yardridePosition = { lat: driver.lat, lng: driver.lng };
          driverMarkers.set(driver.id, marker);
        }
      });
    }

    function showRide(ride) {
      currentRideStatus = ride.status;
      if (ride.mode === "negotiate") {
        bookingMode = "negotiate";
        requestedFare = ride.fare_jmd;
        modeButtons.forEach(button => button.classList.toggle("selected", button.dataset.mode === bookingMode));
        updateQuote();
      }
      const sheet = $(".ride-sheet");
      sheet.dataset.stage = "active";
      sheet.dataset.status = ride.status;
      if ($("#booking-controls").contains(document.activeElement)) document.activeElement.blur();
      $("#booking-controls").setAttribute("aria-hidden", "true");
      $("#ride-live").setAttribute("aria-hidden", "false");
      $("#ride-status-kicker").textContent = ride.status === "completed" ? "TRIP COMPLETE" : (ride.status === "cancelled" ? "RIDE CANCELLED" : "LIVE CHARTER");
      $("#active-pickup").textContent = ride.pickup.label;
      $("#active-dropoff").textContent = ride.dropoff.label;
      $("#ride-status-text").textContent = statusLabels[ride.status] || ride.status;
      const canStartAnother = ["completed", "cancelled"].includes(ride.status);
      $("#book-another").classList.toggle("hidden", !canStartAnother);
      $("#book-another").textContent = ride.status === "cancelled" ? "PLAN ANOTHER RIDE" : "NEW RIDE";
      $("#cancel-ride").classList.toggle("hidden", !["searching", "negotiating", "assigned", "arrived", "in_transit"].includes(ride.status));
      updateIsland(ride);
      if (ride.status === "negotiating") renderCounterOffers(ride);
      else {
        offersSignature = "";
        $("#counter-offers").classList.remove("is-visible");
        $("#counter-offers").setAttribute("aria-hidden", "true");
      }
      const card = $("#assigned-driver");
      const pinCard = $("#pin-card");
      const share = $("#share-trip");
      if (ride.driver && ride.status !== "cancelled") {
        const driver = ride.driver;
        card.classList.remove("hidden");
        const initials = driver.name.split(/\s+/).map(part => part[0]).slice(0, 2).join("");
        card.innerHTML = `<div class="active-driver"><span class="active-driver-avatar">${escapeHtml(initials)}</span><span class="active-driver-copy"><b>${escapeHtml(driver.name)} <i class="verified-shield">✓</i></b><small>${escapeHtml(driver.vehicle)} · ★ ${driver.rating}</small></span><span class="active-plate">${escapeHtml(driver.plate)}</span></div>`;
        pinCard.classList.remove("hidden");
        pinCard.innerHTML = `<span>RIDER SAFETY PIN</span><span class="pin-value">${escapeHtml(ride.pin)}</span>`;
        share.classList.toggle("hidden", !["assigned", "arrived", "in_transit"].includes(ride.status));
        const text = `My YARDRIDE trip: ${ride.pickup.label} to ${ride.dropoff.label}. Driver ${driver.name}, ${driver.plate}. Rider PIN ${ride.pin}.`;
        share.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
        if (ride.status === "assigned") animateDriver(driver, ride.pickup, ride.id);
        if (ride.status === "arrived" || ride.status === "completed") {
          if (moveFrame) cancelAnimationFrame(moveFrame);
          moveFrame = null;
          if (ride.status === "completed") {
            movingDriver = null;
            movingRideId = null;
          }
          if (ride.status === "arrived" && driverMarkers.has(driver.id)) {
            driverMarkers.get(driver.id).setLatLng([ride.pickup.lat, ride.pickup.lng]);
          }
        }
      } else {
        card.classList.add("hidden");
        pinCard.classList.add("hidden");
        share.classList.add("hidden");
      }
      if (ride.status === "completed") updateIsland(null);
    }

    function renderCounterOffers(ride) {
      const container = $("#counter-offers");
      if (!ride.counter_offers?.length || ride.status !== "negotiating") {
        container.classList.remove("is-visible");
        container.setAttribute("aria-hidden", "true");
        return;
      }
      const signature = JSON.stringify(ride.counter_offers.map(offer => [offer.id, offer.fare_jmd, offer.countered]));
      if (signature === offersSignature) return;
      offersSignature = signature;
      container.innerHTML = ride.counter_offers.map(offer => `
        <article class="counter-card glass">
          <div class="counter-driver"><span class="counter-avatar">${escapeHtml(offer.name.split(" ").map(part => part[0]).slice(0, 2).join(""))}</span><span><b>${escapeHtml(offer.name)} <i class="verified-shield">✓</i></b><small>${escapeHtml(offer.plate)} · ★ ${offer.rating} · ${offer.eta_minutes} min</small></span><b class="counter-fare">$${money(offer.fare_jmd)}</b></div>
          <div class="counter-vehicle">${escapeHtml(offer.vehicle)} <span>ICE COLD A/C ✓</span></div>
          <div class="counter-actions"><button class="counter-secondary" data-bid-action="counter_bid" data-driver="${offer.id}" data-fare="${offer.fare_jmd}">COUNTER −$100</button><button class="counter-accept" data-bid-action="accept_match" data-driver="${offer.id}">LOCK MATCH</button></div>
          <div class="counter-timer" aria-hidden="true"><i></i></div>
        </article>`).join("");
      container.setAttribute("aria-hidden", "false");
      container.classList.add("is-visible");
    }

    let movingDriver;
    let movingRideId;
    let moveFrame;
    function animateDriver(driver, target, rideId) {
      if (movingDriver === driver.id && movingRideId === rideId) return;
      if (!driverMarkers.has(driver.id)) {
        const marker = L.marker([driver.lat, driver.lng], { icon: carIcon(bearingBetween(driver, target)) }).addTo(map);
        driverMarkers.set(driver.id, marker);
      }
      const marker = driverMarkers.get(driver.id);
      marker.setIcon(carIcon(bearingBetween(driver, target)));
      if (moveFrame) cancelAnimationFrame(moveFrame);
      if (movingDriver !== driver.id) marker.setLatLng([driver.lat, driver.lng]);
      movingDriver = driver.id;
      movingRideId = rideId;
      const origin = marker.getLatLng();
      const started = performance.now();
      const duration = 18000;
      const animate = now => {
        const progress = Math.min(1, (now - started) / duration);
        marker.setLatLng([origin.lat + (target.lat - origin.lat) * progress, origin.lng + (target.lng - origin.lng) * progress]);
        if (progress < 1) moveFrame = requestAnimationFrame(animate);
      };
      moveFrame = requestAnimationFrame(animate);
    }

    let completedRideNotified = null;
    function syncRiderState(state) {
      if (!state) return;
      refreshDrivers(state.drivers);
      const rides = state.rides || [];
      let ride = rides.find(item => item.id === currentRideId);
      const activeRide = rides.find(item => ["searching", "negotiating", "assigned", "arrived", "in_transit"].includes(item.status));
      if (activeRide && (!ride || ["completed", "cancelled"].includes(ride.status))) ride = activeRide;
      if (!ride) return;
      currentRideId = ride.id;
      currentRideStatus = ride.status;
      localStorage.setItem("yardride-current-ride", ride.id);
      showRide(ride);
      if (ride.status === "completed" && completedRideNotified !== ride.id) {
        completedRideNotified = ride.id;
        toast("Trip complete. Thanks for riding with YARDRIDE.");
      }
    }
    window.addEventListener("yardride:state", event => syncRiderState(event.detail));
    window.addEventListener("yardride:telemetry", event => {
      refreshDrivers(event.detail?.drivers);
      const current = event.detail?.rides?.find(ride => ride.id === currentRideId);
      if (current) updateIsland(current);
    });

    const routeControl = $(".route-map-control");
    const routePicker = $("#route-picker");
    $("#route-pill").addEventListener("click", () => {
      const open = routeControl.classList.toggle("route-picker-open");
      $("#route-pill").setAttribute("aria-expanded", String(open));
      routePicker.setAttribute("aria-hidden", String(!open));
    });
    $$(".pin-select").forEach(button => button.addEventListener("click", () => {
      selecting = button.dataset.select;
      $("#map-selection-target").textContent = selecting;
      $("#map-selection-banner").classList.remove("hidden");
      toast(`Tap the map to set your ${selecting}.`);
    }));
    ["pickup", "dropoff"].forEach(type => {
      $(`#${type}-label`).addEventListener("input", event => {
        (type === "pickup" ? pickup : dropoff).name = event.target.value.trim();
        updateQuote();
      });
    });
    $("#cancel-map-select").addEventListener("click", () => {
      selecting = null;
      $("#map-selection-banner").classList.add("hidden");
    });
    map.on("click", event => {
      if (!selecting) return;
      setPoint(selecting, event.latlng);
      selecting = null;
      $("#map-selection-banner").classList.add("hidden");
      routeControl.classList.remove("route-picker-open");
      $("#route-pill").setAttribute("aria-expanded", "false");
      routePicker.setAttribute("aria-hidden", "true");
    });
    $$(".landmark-chip").forEach(button => button.addEventListener("click", () => {
      const landmark = config.landmarks.find(item => item.name === button.dataset.landmark);
      if (!landmark) return;
      const target = selecting || "dropoff";
      setPoint(target, landmark, landmark.name);
      selecting = null;
      $("#map-selection-banner").classList.add("hidden");
      routeControl.classList.remove("route-picker-open");
      $("#route-pill").setAttribute("aria-expanded", "false");
      routePicker.setAttribute("aria-hidden", "true");
      map.flyTo([landmark.lat, landmark.lng], Math.max(13, map.getZoom()));
    }));
    $$(".tier-card").forEach(button => button.addEventListener("click", () => {
      selectedTier = button.dataset.tier;
      $$(".tier-card").forEach(card => card.classList.toggle("selected", card === button));
      if (bookingMode === "negotiate") requestedFare = estimateQuote(routeDistance, selectedTier);
      updateQuote();
    }));
    modeButtons.forEach(button => button.addEventListener("click", () => {
      bookingMode = button.dataset.mode;
      modeButtons.forEach(item => item.classList.toggle("selected", item === button));
      $("#bid-panel").classList.toggle("is-visible", bookingMode === "negotiate");
      $("#bid-panel").setAttribute("aria-hidden", String(bookingMode !== "negotiate"));
      requestedFare = estimateQuote(routeDistance, selectedTier);
      updateQuote();
    }));
    $("#trip-extras-details").addEventListener("toggle", event => {
      const details = event.currentTarget;
      if (details.open) {
        setTimeout(() => details.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
      }
    });
    $("#bid-decrease").addEventListener("click", () => {
      requestedFare = Math.max(100, requestedFare - 100);
      updateQuote();
    });
    $("#bid-increase").addEventListener("click", () => {
      requestedFare = Math.min(1000000, requestedFare + 100);
      updateQuote();
    });
    $("#party-size").addEventListener("change", () => updateQuote());
    $$(".note-chip").forEach(button => button.addEventListener("click", () => {
      if (selectedNotes.has(button.dataset.note)) selectedNotes.delete(button.dataset.note);
      else selectedNotes.add(button.dataset.note);
      button.classList.toggle("selected", selectedNotes.has(button.dataset.note));
    }));
    $("#share-split").addEventListener("click", () => {
      const message = $("#share-split").dataset.shareText;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
    $("#book-another").addEventListener("click", () => {
      currentRideId = null;
      currentRideStatus = null;
      localStorage.removeItem("yardride-current-ride");
      $("#book-ride").disabled = false;
      offersSignature = "";
      bookingMode = "instant";
      requestedFare = 0;
      selectedNotes.clear();
      $$(".note-chip").forEach(button => button.classList.remove("selected"));
      modeButtons.forEach(button => button.classList.toggle("selected", button.dataset.mode === "instant"));
      $("#bid-panel").classList.remove("is-visible");
      $("#bid-panel").setAttribute("aria-hidden", "true");
      $("#trip-extras-details").open = false;
      $("#ride-live").setAttribute("aria-hidden", "true");
      $("#booking-controls").setAttribute("aria-hidden", "false");
      $(".ride-sheet").dataset.stage = "booking";
      $(".ride-sheet").dataset.mode = "instant";
      $(".ride-sheet").dataset.status = "";
      $("#counter-offers").classList.remove("is-visible");
      $("#counter-offers").setAttribute("aria-hidden", "true");
      $("#map-selection-banner").classList.add("hidden");
      updateQuote();
    });
    $("#cancel-ride").addEventListener("click", async () => {
      if (!currentRideId || !window.confirm("Cancel this ride?")) return;
      const button = $("#cancel-ride");
      button.disabled = true;
      try {
        const { ride } = await api(`/api/rides/${currentRideId}/action`, {
          method: "POST",
          body: JSON.stringify({ action: "cancel" }),
        });
        showRide(ride);
        toast("Ride cancelled. You can request another ride.");
        pollSharedState();
      } catch (error) {
        toast(error.message);
      } finally {
        button.disabled = false;
      }
    });
    $("#counter-offers").addEventListener("click", async event => {
      const button = event.target.closest("[data-bid-action]");
      if (!button || !currentRideId) return;
      button.disabled = true;
      try {
        const action = button.dataset.bidAction;
        const body = { ride_id: currentRideId, action, driver_id: button.dataset.driver };
        if (action === "counter_bid") body.fare_jmd = Math.max(requestedFare, Number(button.dataset.fare) - 100);
        const { ride } = await api("/api/rides/bid", { method: "POST", body: JSON.stringify(body) });
        showRide(ride);
        if (action === "accept_match") toast("Driver matched. Your verified PPV is on the way.");
        else toast("Counter-bid sent to your driver.");
        pollSharedState();
      } catch (error) {
        toast(error.message);
        button.disabled = false;
      }
    });
    $("#locate-btn").addEventListener("click", () => map.flyTo([18.0179, -76.8099], 13));
    $("#book-ride").addEventListener("click", async () => {
      if (currentRideId && !["completed", "cancelled"].includes(currentRideStatus)) {
        toast("Your current ride is still active.");
        return;
      }
      const button = $("#book-ride");
      button.disabled = true;
      currentRideId = null;
      currentRideStatus = null;
      $("#book-ride").disabled = false;
      localStorage.removeItem("yardride-current-ride");
      try {
        const { ride } = await api("/api/rides/request", {
          method: "POST",
          body: JSON.stringify({
            pickup: { lat: pickup.lat, lng: pickup.lng, label: pickup.name },
            dropoff: { lat: dropoff.lat, lng: dropoff.lng, label: dropoff.name },
            distance_km: Math.max(0.2, routeDistance),
            minutes: routeMinutes,
            tier: selectedTier,
            mode: bookingMode,
            fare_jmd: bookingMode === "negotiate" ? requestedFare : estimateQuote(routeDistance, selectedTier),
            payment: $("#payment-method").value,
            passenger: $("#passenger-name").value,
            party_size: partySize,
            notes: [...selectedNotes],
          }),
        });
        currentRideId = ride.id;
        localStorage.setItem("yardride-current-ride", ride.id);
        showRide(ride);
        pollSharedState();
        toast(bookingMode === "negotiate" ? "Offer broadcast. Nearby PPV drivers are responding." : "Ride requested. Finding your verified PPV driver.");
      } catch (error) {
        button.disabled = false;
        toast(error.message);
      }
    });

    updateRoute();
    if (sharedState) syncRiderState(sharedState);
  }

  function initDriver() {
    const list = $("#ride-pings");
    function refresh(state = sharedState) {
      if (!state) return;
      const rides = state.rides || [];
      const active = rides.filter(ride => !["completed", "cancelled"].includes(ride.status));
      $("#driver-completed").textContent = rides.filter(ride => ride.status === "completed").length;
      if (!active.length) {
        list.innerHTML = '<div class="empty-state">No active pings right now. New requests appear here automatically.</div>';
        $("#drive-alert").classList.add("hidden");
        return;
      }
      list.innerHTML = active.map(ride => {
        const action = ride.status === "searching" || ride.status === "negotiating" ? "accept"
          : (ride.status === "assigned" ? "arrive" : (ride.status === "arrived" ? "start" : (ride.status === "in_transit" ? "complete" : null)));
        const labels = { accept: "ACCEPT RIDE", arrive: "ARRIVE AT PICKUP", start: "START TRIP", complete: "COMPLETE TRIP" };
        const actionMarkup = action
          ? `<button class="action-button" data-ride="${ride.id}" data-action="${action}">${labels[action]}</button>`
          : `<span class="status-badge ${ride.status}">${statusLabels[ride.status]}</span>`;
        const nearest = (state.drivers || []).filter(driver => driver.available)
          .map(driver => haversine(driver, ride.pickup))
          .sort((a, b) => a - b)[0];
        const counterOffers = ride.status === "negotiating" ? (ride.counter_offers || []).map(offer => `
          <button class="action-button counter-dispatch-button" data-ride="${ride.id}" data-action="accept_match" data-driver="${offer.id}">
            ACCEPT ${escapeHtml(offer.plate)} · $${money(offer.fare_jmd)} JMD
          </button>`).join("") : "";
        return `<article class="ride-item">
          <div class="ride-item-top"><b>${escapeHtml(ride.passenger)}</b><small>${new Date(ride.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</small></div>
          <div class="ride-route"><span><small>PICKUP</small><br>${escapeHtml(ride.pickup.label)}</span><span><small>DROP-OFF</small><br>${escapeHtml(ride.dropoff.label)}</span></div>
          <div class="ride-meta"><span>${ride.distance_km} km route · ${ride.minutes} min</span><b>$${money(ride.fare_jmd)} JMD payout</b></div>
          <div class="ride-meta"><span>Nearest available PPV</span><b>${nearest === undefined ? "No drivers nearby" : `${nearest.toFixed(1)} km to pickup`}</b></div>
          ${ride.notes?.length ? `<div class="dispatch-notes">✦ DRIVER NOTE · ${ride.notes.map(escapeHtml).join(" · ")}</div>` : ""}
          ${ride.pin && ride.driver ? `<div class="dispatch-pin">RIDER SAFETY PIN <b>${escapeHtml(ride.pin)}</b></div>` : ""}
          ${actionMarkup}${counterOffers}
        </article>`;
      }).join("");
      $("#drive-alert").classList.toggle("hidden", !rides.some(ride => ride.status === "searching" || ride.status === "negotiating"));
    }
    list.addEventListener("click", async event => {
      const button = event.target.closest("[data-ride][data-action]");
      if (!button) return;
      button.disabled = true;
      try {
        const action = button.dataset.action;
        const body = { action };
        let url = `/api/rides/${button.dataset.ride}/action`;
        if (action === "accept_match") {
          url = "/api/rides/bid";
          body.ride_id = button.dataset.ride;
          body.driver_id = button.dataset.driver;
        }
        await api(url, { method: "POST", body: JSON.stringify(body) });
        toast(action === "accept" || action === "accept_match" ? "Ride accepted. Driver assigned." : `Trip marked ${action === "arrive" ? "arrived" : (action === "start" ? "in transit" : "complete")}.`);
        await pollSharedState();
      } catch (error) {
        button.disabled = false;
        toast(error.message);
      }
    });
    window.addEventListener("yardride:state", event => refresh(event.detail));
    window.addEventListener("yardride:dispatch-refresh", () => refresh());
    if (sharedState) refresh(sharedState);
  }

  function initAdmin() {
    function refresh(state = sharedState) {
      if (!state) return;
      const data = { ...state.dashboard, rides: state.rides || [] };
        $("#gross-jmd").textContent = `$${money(data.gross_jmd)}`;
        $("#gross-usd").textContent = `US$${data.gross_usd.toFixed(2)} · completed trips`;
        $("#commission-jmd").textContent = `$${money(data.commission_jmd)}`;
        $("#commission-usd").textContent = `US$${data.commission_usd.toFixed(2)} earned`;
        $("#fleet-count").textContent = `${data.active_drivers} / ${data.fleet_size}`;
        $("#fleet-utilization").textContent = `${Math.round(data.active_drivers / Math.max(1, data.fleet_size) * 100)}% utilization`;
        const completed = data.rides.filter(ride => ride.status === "completed").length;
        const active = data.rides.filter(ride => !["completed", "cancelled"].includes(ride.status)).length;
        $("#completed-count").textContent = completed;
        $("#active-trips").textContent = `${active} active trips`;
        const ledger = $("#trip-ledger");
        if (!data.rides.length) {
          ledger.innerHTML = '<tr><td colspan="5" class="empty-state">No rides yet. New ride activity will appear here.</td></tr>';
          return;
        }
        ledger.innerHTML = data.rides.map(ride => `<tr>
          <td>#${ride.id}</td><td>${escapeHtml(ride.passenger)}</td>
          <td class="route-cell">${escapeHtml(ride.pickup.label)} → ${escapeHtml(ride.dropoff.label)}<br><small>$${money(ride.fare_jmd)} JMD · ${escapeHtml(ride.tier_name)}</small></td>
          <td>$${money(ride.commission_jmd)} JMD</td>
          <td><span class="status-badge ${ride.status}">${statusLabels[ride.status] || ride.status}</span></td>
        </tr>`).join("");
    }
    window.addEventListener("yardride:state", event => refresh(event.detail));
    window.addEventListener("yardride:founder-refresh", () => refresh());
    if (sharedState) refresh(sharedState);
  }

  function initActivity() {
    const empty = $("#activity-empty");
    const receipt = $("#activity-receipt");
    const history = $("#activity-history-list");
    function refresh(state = sharedState) {
      if (!state) return;
        const rides = state.rides || [];
        const active = rides.find(ride => !["completed", "cancelled"].includes(ride.status));
        const remembered = rides.find(ride => ride.id === localStorage.getItem("yardride-current-ride"));
        const featured = active || remembered || rides[0];
        if (!featured) {
          empty.classList.remove("hidden");
          receipt.classList.add("hidden");
          $("#activity-current-status").textContent = "No active trip";
          $("#activity-status-badge").textContent = "READY";
          history.innerHTML = '<div class="empty-state">Your rides will appear here.</div>';
          return;
        }

        empty.classList.add("hidden");
        receipt.classList.remove("hidden");
        const label = statusLabels[featured.status] || featured.status;
        $("#activity-current-status").textContent = active ? label : "Most recent trip";
        const badge = $("#activity-status-badge");
        badge.textContent = label.toUpperCase();
        badge.className = `status-badge ${featured.status}`;
        const driver = featured.driver;
        receipt.innerHTML = `
          <div class="receipt-route"><span><small>PICKUP</small><b>${escapeHtml(featured.pickup.label)}</b></span><span><small>DROP-OFF</small><b>${escapeHtml(featured.dropoff.label)}</b></span></div>
          ${driver ? `<div class="receipt-row"><span>VERIFIED DRIVER</span><b>${escapeHtml(driver.name)} · ★ ${driver.rating}</b></div><div class="receipt-row"><span>RED-PLATE PPV</span><b>${escapeHtml(driver.plate)} · ${escapeHtml(driver.vehicle)}</b></div>` : ""}
          <div class="receipt-row"><span>TRIP / PAYMENT</span><b>${escapeHtml(featured.tier_name)} · ${escapeHtml(featured.payment)}</b></div>
          <div class="receipt-row"><span>DISTANCE · ETA</span><b>${featured.distance_km} km · ${featured.minutes} min</b></div>
          <div class="receipt-row"><span>FARE</span><b>$${money(featured.fare_jmd)} JMD · US$${Number(featured.fare_usd).toFixed(2)}</b></div>
          ${featured.party_size > 1 ? `<div class="receipt-row"><span>SQUAD SPLIT · ${featured.party_size} RIDERS</span><b>$${money(featured.fare_per_person_jmd)} JMD · US$${Number(featured.fare_per_person_usd).toFixed(2)} EACH</b></div>` : ""}
          ${featured.notes?.length ? `<div class="dispatch-notes">✦ PICKUP NOTE · ${featured.notes.map(escapeHtml).join(" · ")}</div>` : ""}
          <div class="receipt-pin"><span>RIDER VERIFICATION PIN</span><b>${escapeHtml(featured.pin)}</b></div>
          ${driver && active ? `<a class="whatsapp-button" href="https://wa.me/?text=${encodeURIComponent(`My YARDRIDE trip: ${featured.pickup.label} to ${featured.dropoff.label}. Driver ${driver.name}, ${driver.plate}. Rider PIN ${featured.pin}.`)}" target="_blank" rel="noopener">↗ Share Live Trip via WhatsApp</a>` : ""}
        `;
        history.innerHTML = rides.slice(0, 8).map(ride => `<article class="history-item">
          <div class="history-route"><b>${escapeHtml(ride.pickup.label)} → ${escapeHtml(ride.dropoff.label)}</b><span class="status-badge ${ride.status}">${escapeHtml(statusLabels[ride.status] || ride.status)}</span></div>
          <div class="history-meta"><span>${new Date(ride.created_at).toLocaleDateString()} · ${escapeHtml(ride.tier_name)}</span><b>$${money(ride.fare_jmd)} JMD</b></div>
        </article>`).join("");
    }
    window.addEventListener("yardride:state", event => refresh(event.detail));
    window.addEventListener("yardride:activity-refresh", () => refresh());
    if (sharedState) refresh(sharedState);
  }

  function initFounderTracker() {
    const container = $("#founder-fleet-list");
    function refresh(state = sharedState) {
      if (!state) return;
      container.innerHTML = state.drivers.map(driver => `<div class="fleet-driver ${driver.available ? "" : "offline"}">
        <span class="fleet-dot"></span><b>${escapeHtml(driver.plate)} · ${escapeHtml(driver.vehicle)}</b>
        <small>${driver.available ? `AVAILABLE · ${driver.lat.toFixed(3)}, ${driver.lng.toFixed(3)}` : "ON ACTIVE TRIP"}</small>
      </div>`).join("");
    }
    window.addEventListener("yardride:state", event => refresh(event.detail));
    window.addEventListener("yardride:founder-refresh", () => refresh());
    if (sharedState) refresh(sharedState);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }
})();
