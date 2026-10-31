# GUI Playground

Windows desktop GUI configuration editor and launcher. The tested interfaces open in separate native windows, not inside the editor or in your browser.

## Start (venv only)

In the repository folder:

```powershell
git pull origin main
.\start.bat
```

`start.bat` creates `.venv` inside this repository, installs `requirements.txt` **only into that environment**, then launches with `.venv\Scripts\python.exe`. It does not install Python packages globally. If a compatible Python interpreter is not already available, install Python separately before using the script.

To launch without reinstalling packages on later runs:

```powershell
.\.venv\Scripts\python.exe launch.py
```

Do not use `python -m http.server`; this is a native desktop application.

## Experiments

Select an experiment instance, edit its properties, and click **Launch window** to open it in a separate native window. Duplicate an instance to compare configurations. The Immergold chat renderer lives in `experiments/immergold-chat/`. Other example experiment folders are included. Configuration is saved to the Git-ignored `.playground-state.json` and can be imported/exported as JSON.

This is design-only. It does not connect to Hermes. Native transparency and always-on-top controls are not yet implemented.
