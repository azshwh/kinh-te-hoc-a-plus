@echo off
chcp 65001 > nul
echo ======================================================
echo    ECONMASTER A+ LIVE AUTO-SYNC (TỰ ĐỘNG ĐỒNG BỘ)
echo ======================================================
echo.
echo Đang theo dõi mọi thay đổi trong thư mục dự án...
echo Mỗi khi có file được chỉnh sửa, hệ thống sẽ tự động đẩy lên GitHub.
echo.
node auto_watch_sync.js
pause
