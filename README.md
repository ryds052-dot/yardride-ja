# YARDRIDE

Flask-based Jamaican ride-hailing PWA.

## Run locally

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Open <http://127.0.0.1:5000>.

## Deploy with GitHub and Render

1. Create an empty repository on GitHub. Do not add a README, license, or
   `.gitignore` there; this project already has its own files.
2. From this project folder, initialize Git and push the project. Replace the
   URL with your GitHub repository URL:

   ```powershell
   git init -b main
   git add .
   git commit -m "Prepare YARDRIDE for deployment"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. Sign in to Render with GitHub and authorize access to the repository.
4. In Render, choose **New +**, then **Blueprint**. Select the repository and apply
   the `render.yaml` blueprint.
5. Wait for the deploy to finish, then open the `onrender.com` URL Render
   provides. The service health check uses `/api/state`.

The blueprint runs one Gunicorn worker because rides and drivers are currently
stored in process memory. That state is for demonstration only: it resets when
the service restarts or redeploys, and it is not suitable for reliable
multi-instance production dispatch. Use a shared persistent database before
relying on this app for real rides or payments.
