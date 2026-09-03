// Bộ tự động theo dõi và đẩy lên GitHub tức thời khi có chỉnh sửa (Live Auto-Sync)
const fs = require('fs');
const path = require('path');
const { syncToGitHub, getConfig } = require('./github_sync.js');

const WATCH_DIR = __dirname;
let debounceTimer = null;
let isSyncing = false;

console.log("======================================================");
console.log("  ECONMASTER A+ LIVE AUTO-SYNC (TỰ ĐỘNG ĐỒNG BỘ GITHUB)");
console.log("======================================================");

const config = getConfig();
if (!config.username || !config.token) {
  console.log("⚠️ Cần cấu hình github_config.json trước khi kích hoạt auto-sync.");
  process.exit(1);
}

console.log(`Đang theo dõi các thay đổi trong: ${WATCH_DIR}`);
console.log(`Bất cứ khi nào Antigravity hoặc bạn lưu file, hệ thống sẽ tự động đồng bộ lên GitHub Pages!\n`);

// Đồng bộ lần đầu khi bật
syncToGitHub("Khởi động live sync").then(() => {
  console.log("\n👀 Đang lắng nghe các thay đổi tệp tin... (Nhấn Ctrl+C để dừng)");
});

// Lắng nghe thay đổi file
fs.watch(WATCH_DIR, { recursive: true }, (eventType, filename) => {
  if (!filename) return;
  // Bỏ qua các file tạm, cấu hình, node_modules, log
  if (/(\.git|github_config\.json|node_modules|\.log|tmp)/i.test(filename)) return;

  console.log(`📝 Phát hiện thay đổi tại [${filename}]...`);
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    if (isSyncing) return;
    isSyncing = true;
    console.log(`\n⚡ Tiến hành tự động đồng bộ lên GitHub...`);
    try {
      await syncToGitHub(`Tự động đồng bộ: Cập nhật ${filename}`);
    } catch (e) {
      console.error("Lỗi khi tự động đồng bộ:", e);
    } finally {
      isSyncing = false;
      console.log("\n👀 Tiếp tục lắng nghe thay đổi...");
    }
  }, 3000); // Đợi 3 giây để gom các chỉnh sửa liên tiếp
});
