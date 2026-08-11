@echo off
cd /d %~dp0

echo Installing dependencies...
call npm install

echo Starting FRC Dashboard...

start cmd /k "call npm run dev"

timeout /t 3 /nobreak >nul

start http://localhost:5173

pause