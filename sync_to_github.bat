@echo off
chcp 65001 > nul
echo ======================================================
echo    ĐỒNG BỘ MÃ NGUỒN LÊN GITHUB & GITHUB PAGES
echo ======================================================
echo.
node github_sync.js "Đồng bộ thủ công qua sync_to_github.bat"
pause
