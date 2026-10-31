# GUI Playground

A native desktop configuration editor and launcher for visual GUI experiments.

## Run on Windows

```powershell
git pull origin main
python -m pip install -r requirements.txt
python launch.py
```

Do not start an HTTP server. The editor opens as a desktop window. Select an instance, edit its properties, and click **Launch window** to open a completely separate native preview window. Duplicate an instance to test a different configuration. Multiple previews of the same instance are supported.

Configurations persist to `.playground-state.json` (Git-ignored), synchronize through the Python bridge, and can be exported/imported as JSON.

## Experiments

Each experiment has a dedicated folder in `experiments/`. The Immergold chat experiment has its own `renderer.js`, referencing the current Immergold NiceGUI appearance. Three starter experiments have separate manifest folders but currently share legacy renderer code in `index.html`. Automatic folder discovery is not implemented yet.

This is a visual design environment only. It does not connect to Hermes, and native transparency/always-on-top controls are future work. Browser pop-ups and in-editor previews are intentionally disabled.
