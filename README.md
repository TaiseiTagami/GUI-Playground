# GUI Playground

A configuration editor and launcher for independent GUI experiments. Open `index.html` through `python -m http.server 5173` and visit `http://localhost:5173`.

Select a GUI instance, edit its configuration with sliders and color pickers, and use Pop out to open it in a separate browser window. Each instance retains its own configuration. Changes sync across open windows. Export and import JSON presets.

This is currently browser-window based, not native Windows/Tauri. Pop-ups may require browser permission. Native always-on-top and transparent desktop windows are future work.
