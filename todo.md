- [completed] Restore missing repository files including requirements.txt, index.html, experiment manifests, and README.md after incomplete Git tree update; GitHub content verification pending.
- [completed] Add start.bat for project-local .venv creation, dependency installation and native launch; Windows execution pending.
- [completed] Add .gitignore entries for .venv and local state.
- [in progress] [planned] Verify Windows native GUI startup and multi-window synchronization; requires Windows runtime test.
- [future] Add automatic experiment folder discovery and native transparency/always-on-top options.

- [completed] Fix native preview routing by using file URL fragments rather than query strings in launch.py and index.html; static regression added.
- [in progress] [planned] Confirm Immergold and generic chat previews open correctly in Windows pywebview; native test pending.

- [completed] Debounce configuration persistence and preview broadcasts by 500 ms after the last change; keep sliders responsive during editing (index.html); JavaScript syntax checked, native verification pending.
- [completed] Flush pending edits before launching a preview window and prevent incoming sync from interrupting active edits (index.html).
- [in progress] [planned] Validate slider drag and cross-window update timing on Windows; runtime verification pending.
