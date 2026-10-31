# GUI Playground

Standalone GUI experimentation workspace. No Hermes, Immergold, server, or API dependency.

## Run

Use a local static server (recommended for consistent pop-up synchronization):

```sh
python -m http.server 5173
```

Open http://localhost:5173. The app is plain HTML/CSS/JavaScript with no build step or dependencies.

## Features

- Create multiple instances of Glass card, Chat panel, or Timer widget.
- Select, duplicate, delete, and pop out an instance into a separate browser window.
- Each instance has its own configuration; changes persist in browser localStorage.
- Live inspector with sliders, color pickers, toggles, dropdowns, and contextual line/border/color samples.
- Export and import individual JSON configurations, with type/range checks.
- Pop-out previews synchronize with the inspector through BroadcastChannel and storage events.
- Layout adapts to smaller screens.

Pop-out windows are **browser windows**, not transparent/always-on-top native OS windows. Browser pop-up permissions apply. Native Tauri integration can be added later without changing the config schema.

## Safety and scope

This is a design playground, not a functional assistant. The mock UI buttons inside previews are decorative. No computer-control, screenshot, timer scheduling, or Hermes integration is implemented.

## Structure

`index.html` contains the first UI prototype. The inspector field schema and default values are declared near the top of its script. Future iterations can split it into React components and add Tauri window management after the desired interactions are established.
