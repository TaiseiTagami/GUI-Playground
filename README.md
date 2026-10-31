# GUI Playground

A configuration editor and launcher for independent GUI experiments. Open `index.html` through `python -m http.server 5173` and visit `http://localhost:5173`.

Select a GUI instance, edit its configuration with sliders and color pickers, and use Pop out to open it in a separate browser window. Each instance retains its own configuration. Changes sync across open windows. Export and import JSON presets.

This is currently browser-window based, not native Windows/Tauri. Pop-ups may require browser permission. Native always-on-top and transparent desktop windows are future work.

## Immergold chat template

Choose **New window**, enter **Immergold chat**, and edit its properties in the inspector. The mock references the current Immergold NiceGUI layout: compact amber header with chat/config/Debug tabs, gateway status, main-chat/wakewords toggles, left chat sidebar, terminal-style transcript with process steps and token statistics, microphone/send composer, and bottom status bar.

The editor includes Immergold-specific sliders for sidebar width, header height, message spacing and composer height; visibility toggles; and palette controls. Duplicate the instance to compare different designs, or pop it out into a separate browser window. All chat content is mock data and does not connect to Hermes.

Sources used for visual and layout reference: `TaiseiTagami/immergold/immergold-voice/voice_app/main.py`, `panel.py`, and `static/imc.css` on `main` (2026-10-31).
