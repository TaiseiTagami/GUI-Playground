@echo off
setlocal
cd /d "%~dp0"
if not exist ".venv\Scripts\python.exe" (
  echo Creating project-local virtual environment...
  py -3.11 -m venv .venv
  if errorlevel 1 (
    echo Python 3.11 launcher unavailable. Trying default Python...
    python -m venv .venv
    if errorlevel 1 exit /b 1
  )
)
echo Installing requirements into .venv only...
".venv\Scripts\python.exe" -m pip install --disable-pip-version-check -r requirements.txt
if errorlevel 1 exit /b 1
echo Starting GUI Playground using .venv...
".venv\Scripts\python.exe" launch.py
exit /b %errorlevel%
