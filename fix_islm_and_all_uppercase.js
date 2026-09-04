const fs = require('fs');
const path = require('path');

// 1. CLEAN JS/APP.JS
const appPath = path.join(__dirname, 'js', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');

// IS-LM result card
app = app.replace(
  '<p class="font-bold text-purple-900 dark:text-purple-200 uppercase">Tác Động Thực Thi Chính Sách (ΔG = ${deltaG}, ΔM = ${deltaM}):</p>',
  '<p class="font-bold text-purple-900 dark:text-purple-200">Tác động thực thi chính sách ($\\Delta G = ${deltaG}, \\Delta M = ${deltaM}$):</p>'
);

app = app.replace(
  '<p class="font-bold text-indigo-700 dark:text-indigo-300 uppercase">Đường IS (Thị trường hàng hóa)</p>',
  '<p class="font-bold text-indigo-700 dark:text-indigo-300">Đường IS (Thị trường hàng hóa)</p>'
);

app = app.replace(
  '<p class="font-bold text-emerald-700 dark:text-emerald-300 uppercase">Đường LM (Thị trường tiền tệ)</p>',
  '<p class="font-bold text-emerald-700 dark:text-emerald-300">Đường LM (Thị trường tiền tệ)</p>'
);

app = app.replace(
  '<p class="font-bold text-amber-700 dark:text-amber-300 uppercase">Cân bằng đồng thời (E*)</p>',
  '<p class="font-bold text-amber-700 dark:text-amber-300">Cân bằng đồng thời ($E^*$)</p>'
);

// Monopoly & Perfect Competition comparison in micro solvers
app = app.replace(
  '<p class="font-bold text-purple-700 dark:text-purple-300 uppercase">1. Độc quyền thuần túy (MR = MC)</p>',
  '<p class="font-bold text-purple-700 dark:text-purple-300">1. Độc quyền thuần túy ($MR = MC$)</p>'
);
app = app.replace(
  '<p class="font-bold text-emerald-700 dark:text-emerald-300 uppercase">2. Cạnh tranh hoàn hảo (P = MC)</p>',
  '<p class="font-bold text-emerald-700 dark:text-emerald-300">2. Cạnh tranh hoàn hảo ($P = MC$)</p>'
);

// Other uppercase classes in app.js
app = app.replace(/uppercase tracking-wide/g, 'tracking-wide');
app = app.replace(/uppercase tracking-wider/g, 'tracking-wider');
app = app.replace(/class="font-black text-sm text-emerald-800 dark:text-emerald-300 uppercase"/g, 'class="font-black text-sm text-emerald-800 dark:text-emerald-300"');

fs.writeFileSync(appPath, app, 'utf8');
console.log('✓ Đã chuẩn hóa toàn diện tab IS-LM và app.js');

// 2. CLEAN INDEX.HTML
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Fix IS-LM description math
html = html.replace('tìm điểm cân bằng $(r^*, Y^)$', 'tìm điểm cân bằng $(r^*, Y^*)$');

// Fix IS-LM input parameter labels
html = html.replace('<label class="text-slate-500 font-medium">Tiêu dùng tự định C₀:</label>', '<label class="text-slate-500 font-medium">Tiêu dùng tự định ($C_0$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">MPC (cận biên):</label>', '<label class="text-slate-500 font-medium">Tiêu dùng cận biên ($MPC$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Thuế T:</label>', '<label class="text-slate-500 font-medium">Thuế ròng ($T$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Chi tiêu CP G:</label>', '<label class="text-slate-500 font-medium">Chi tiêu chính phủ ($G$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Đầu tư tự định I₀:</label>', '<label class="text-slate-500 font-medium">Đầu tư tự định ($I_0$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Độ nhạy đ/tư theo r (d):</label>', '<label class="text-slate-500 font-medium">Độ nhạy đầu tư theo lãi suất ($d$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Cung tiền M/P:</label>', '<label class="text-slate-500 font-medium">Cung tiền thực tế ($M/P$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Độ nhạy thu nhập k:</label>', '<label class="text-slate-500 font-medium">Độ nhạy cầu tiền theo thu nhập ($k$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Độ nhạy lãi suất h:</label>', '<label class="text-slate-500 font-medium">Độ nhạy cầu tiền theo lãi suất ($h$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Thay đổi chi tiêu ΔG:</label>', '<label class="text-slate-500 font-medium">Thay đổi chi tiêu chính phủ ($\\Delta G$):</label>');
html = html.replace('<label class="text-slate-500 font-medium">Bơm thêm tiền ΔM:</label>', '<label class="text-slate-500 font-medium">Bơm thêm cung tiền ($\\Delta M$):</label>');

// Remove uppercase class from IS-LM chart header
html = html.replace(
  '<h4 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-3 flex items-center justify-between">',
  '<h4 class="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center justify-between">'
);

// Remove remaining uppercase classes in index.html
html = html.replace(/\buppercase\b\s*/g, '');

// Nâng version cache-busting lên v2.8.0
html = html.replace(/\?v=\d+\.\d+\.\d+/g, '?v=2.8.0');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ Đã chuẩn hóa toàn diện tab IS-LM và index.html (v2.8.0)');
