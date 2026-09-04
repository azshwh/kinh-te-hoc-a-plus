const fs = require('fs');
const path = require('path');

// 1. UPDATE INDEX.HTML
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const htmlMap = [
  // Header and Badges
  ['12 Chuyên Đề Bài Tập Tự Luận Định Lượng Lớn (Chuẩn Đề Thi Đại Học)', '12 chuyên đề bài tập tự luận định lượng lớn (Chuẩn đề thi đại học)'],
  ['Kho 40+ Câu Hỏi Nhận Định Đúng / Sai & Luận Giải Chuẩn A+', 'Kho 40+ câu hỏi nhận định đúng / sai và luận giải chuẩn A+'],
  ['Kiểm Tra Nhận Định & Lập Luận A+', 'Kiểm tra nhận định và lập luận A+'],
  ['Phòng thí nghiệm mô hình cân bằng đồng thời IS - LM & Lấn Át Đầu Tư', 'Phòng thí nghiệm mô hình cân bằng đồng thời IS - LM và lấn át đầu tư'],
  ['3. Mô Phỏng Chính Sách Vĩ Mô (Tùy chọn)', '3. Mô phỏng chính sách vĩ mô (Tùy chọn)'],
  ['1. Thị Trường Hàng Hóa (Đường IS)', '1. Thị trường hàng hóa (Đường IS)'],
  ['2. Thị Trường Tiền Tệ (Đường LM)', '2. Thị trường tiền tệ (Đường LM)'],
  ['Thông Số Phương Trình', 'Thông số phương trình'],
  ['Chọn Chương Học Tập:', 'Chọn chương học tập:'],
  ['Kênh Giảng Dạy:', 'Kênh giảng dạy:'],
  ['Giảng Đường Trực Tuyến Đang Phát', 'Giảng đường trực tuyến đang phát'],
  ['Kho Bài Giảng Quốc Tế (Bấm để phát lên màn hình trên)', 'Kho bài giảng quốc tế (Bấm để phát lên màn hình trên)'],
  ['Tối Ưu Hóa Người Tiêu Dùng (Cobb-Douglas)', 'Tối ưu hóa người tiêu dùng (Cobb-Douglas)'],
  ['Xác Định Giỏ Hàng Tối Ưu (X*, Y) & MRS', 'Xác định giỏ hàng tối ưu ($X^*, Y^*$) và MRS'],
  ['Độc Quyền Thuần Túy vs Cạnh Tranh & DWL', 'Độc quyền thuần túy vs cạnh tranh và DWL'],
  ['Giải So Sánh Độc Quyền vs Cạnh Tranh & DWL', 'Giải so sánh độc quyền vs cạnh tranh và DWL'],
  ['Tính Sản Lượng Cân Bằng Y*, Số Nhân k & Chính Sách Tài Khóa ΔG', 'Tính sản lượng cân bằng $Y^*$, số nhân $k$ và chính sách tài khóa $\\Delta G$'],
  ['Ví dụ NEU Chuẩn', 'Ví dụ NEU chuẩn'],
  ['Kích Cầu Tài Khóa ΔG=50', 'Kích cầu tài khóa $\\Delta G = 50$'],
  ['Giải Hệ IS - LM & Phân Tích Lấn Át', 'Giải hệ IS - LM và phân tích lấn át'],
  ['Nhấn "Giải Hệ IS - LM & Phân Tích Lấn Át"', 'Nhấn "Giải hệ IS - LM và phân tích lấn át"'],
  ['Đồ Thị Cân Bằng IS - LM (Trục Tung: Lãi Suất r%, Trục Hoành: Sản Lượng Y)', 'Đồ thị cân bằng IS - LM (Trục tung: Lãi suất r%, trục hoành: Sản lượng Y)'],
  ['⚠️ CÂU HỎI CÓ BẪY', '⚠️ Câu hỏi có bẫy'],
  ['Nộp Bài Thi', 'Nộp bài thi'],
  ['Câu Hỏi Ôn Tập', 'Câu hỏi ôn tập'],
  ['Thặng Dư Tiêu Dùng (CS)', 'Thặng dư tiêu dùng (CS)'],
  ['Tổn Thất Vô Ích (Deadweight Loss)', 'Tổn thất vô ích (Deadweight Loss)'],
  ['Lạm Phát & Chiếc Máy In Tiền', 'Lạm phát và chiếc máy in tiền'],
  ['12 Chương Lý Thuyết', '12 chương lý thuyết'],
  ['17 Video Quốc Tế', '17 video quốc tế'],
  ['20 Bẫy Đề Thi A+', '20 bẫy đề thi A+'],
  ['Solvers & Công Thức', 'Solvers và công thức'],
  ['Chinh phục điểm A+ Vi mô & Vĩ mô cho sinh viên đại học', 'Chinh phục điểm A+ vi mô và vĩ mô cho sinh viên đại học'],
  ['Chuẩn giáo trình Kinh tế Vi mô & Vĩ mô các trường Đại học', 'Chuẩn giáo trình kinh tế vi mô và vĩ mô các trường đại học'],
  ['3 Bộ Đề Thi Học Kỳ', '3 bộ đề thi học kỳ'],
  ['20 Cạm Bẫy Đề Thi', '20 cạm bẫy đề thi'],
  ['40 Nhận Định Đúng / Sai', '40 nhận định đúng / sai'],
  ['80 Câu Trắc Nghiệm', '80 câu trắc nghiệm'],
  ['Flashcard Ôn Tập Thuật Ngữ', 'Flashcard ôn tập thuật ngữ'],
  ['Hướng Dẫn Sử Dụng & Tư Duy ELI5', 'Hướng dẫn sử dụng và tư duy ELI5'],
  ['Sổ Tay Công Thức KaTeX', 'Sổ tay công thức KaTeX'],
  ['Đấu Trường 80 Câu Trắc Nghiệm', 'Đấu trường 80 câu trắc nghiệm']
];

htmlMap.forEach(([from, to]) => {
  html = html.replaceAll(from, to);
});

// Nâng version cache-busting lên v2.7.0
html = html.replace(/\?v=\d+\.\d+\.\d+/g, '?v=2.7.0');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ Đã chuẩn hóa index.html');

// 2. UPDATE JS/APP.JS
const appPath = path.join(__dirname, 'js', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');

const appMap = [
  ['Đường Cung sau thuế S', 'Đường cung sau thuế S'],
  ['Điểm Cân Bằng E*', 'Điểm cân bằng E*'],
  ['Điểm Cân Bằng Mới E₁*', 'Điểm cân bằng mới E₁*'],
  ['Sản Lượng Quốc Dân (Y)', 'Sản lượng quốc dân (Y)'],
  ['Lãi Suất Thị Trường (r%)', 'Lãi suất thị trường (r%)'],
  ['Cân Bằng Đồng Thời (E*)', 'Cân bằng đồng thời (E*)'],
  ['Đường Cung S', 'Đường cung S'],
  ['Đường Cầu D', 'Đường cầu D'],
  ['Đường Cung Ngắn Hạn', 'Đường cung ngắn hạn'],
  ['Đường Cầu Ngắn Hạn', 'Đường cầu ngắn hạn']
];

appMap.forEach(([from, to]) => {
  app = app.replaceAll(from, to);
});

fs.writeFileSync(appPath, app, 'utf8');
console.log('✓ Đã chuẩn hóa js/app.js');
