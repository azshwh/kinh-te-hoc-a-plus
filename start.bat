@echo off
chcp 65001 > nul
echo =======================================================
echo    ĐANG KHỞI CHẠY ECONMASTER A+ (KINH TẾ HỌC ĐẠI CƯƠNG)
echo =======================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [1/2] Đang khởi động máy chủ học tập cục bộ (http://localhost:3000)...
    start /b "" node server.js >nul 2>nul
    timeout /t 1 > nul
    echo [2/2] Đang mở ứng dụng trên trình duyệt web...
    start "" "http://localhost:3000"
    echo.
    echo =======================================================
    echo   Ứng dụng đã sẵn sàng tại: http://localhost:3000
    echo   (Xem video trực tiếp không bị lỗi chặn nhúng)
    echo =======================================================
) else (
    echo [1/1] Đang mở trực tiếp tệp index.html...
    start "" "%~dp0index.html"
)

echo.
echo Cửa sổ này có thể thu nhỏ xuống thanh taskbar trong lúc bạn học tập.
echo Nhấn phím bất kỳ nếu bạn muốn đóng cửa sổ này.
pause > nul
