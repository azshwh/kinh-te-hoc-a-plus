const fs = require('fs');
const path = require('path');

const theoryPath = path.join(__dirname, 'data', 'theory.js');
let theory = fs.readFileSync(theoryPath, 'utf8');

console.log('=== 1. CHUẨN HÓA TIÊU ĐỀ 12 CHƯƠNG LÝ THUYẾT (TITLE) ===');
const chapterTitleMap = [
  ['"title": "Mười nguyên lý kinh tế học và tư duy cận biên"', '"title": "Mười nguyên lý kinh tế học và tư duy cận biên"'],
  ['"title": "Cung - Cầu & Cơ Chế Hoạt Động Của Thị Trường"', '"title": "Cung - cầu và cơ chế hoạt động của thị trường"'],
  ['"title": "Độ Co Giãn Của Cầu & Cung Và Ứng Dụng"', '"title": "Độ co giãn của cầu, cung và ứng dụng"'],
  ['"title": "Chính Sách Chính Phủ & Lý Thuyết Tiêu Dùng Tối Ưu"', '"title": "Chính sách chính phủ và lý thuyết tiêu dùng tối ưu"'],
  ['"title": "Lý thuyết sản xuất và chi phí doanh nghiệp"', '"title": "Lý thuyết sản xuất và chi phí doanh nghiệp"'],
  ['"title": "Bốn Cấu Trúc Thị Trường & Lý Thuyết Trò Chơi"', '"title": "Bốn cấu trúc thị trường và lý thuyết trò chơi"'],
  ['"title": "Đo Lường Sản Lượng Quốc Gia (GDP)"', '"title": "Đo lường sản lượng quốc gia (GDP)"'],
  ['"title": "Tăng trưởng kinh tế và năng suất lao động"', '"title": "Tăng trưởng kinh tế và năng suất lao động"'],
  ['"title": "Lạm phát, chỉ số CPI và thị trường lao động"', '"title": "Lạm phát, chỉ số CPI và thị trường lao động"'],
  ['"title": "Hệ Thống Tiền Tệ & chính sách tiền tệ (monetary policy)"', '"title": "Hệ thống tiền tệ và chính sách tiền tệ"'],
  ['"title": "Mô Hình Tổng Cung - Tổng Cầu (AD-AS) & chính sách tài khóa (fiscal policy)"', '"title": "Mô hình tổng cung - tổng cầu (AD - AS) và chính sách tài khóa"'],
  ['"title": "Kinh tế vĩ mô trong nền kinh tế mở"', '"title": "Kinh tế vĩ mô trong nền kinh tế mở"']
];

chapterTitleMap.forEach(([from, to]) => {
  theory = theory.replace(from, to);
});

console.log('=== 2. CHUẨN HÓA CÔNG THỨC TOÁN & BỌC ĐẦY ĐỦ $ TRONG THEORY.JS ===');
const rawMathReplacements = [
  // Chapter 1
  ['<strong>MB</strong> (Marginal Benefit):', '<strong>$MB$</strong> (Marginal Benefit):'],
  ['<strong>MC</strong> (Marginal Cost):', '<strong>$MC$</strong> (Marginal Cost):'],
  ['<strong>\\Delta Y</strong>:', '<strong>$\\Delta Y$</strong>:'],
  ['<strong>\\Delta X</strong>:', '<strong>$\\Delta X$</strong>:'],
  ['• Lưu ý: Tiền ăn uống, chỗ ở sinh hoạt thông thường KHÔNG tính vào $OC$', '• Lưu ý: Tiền ăn uống, chỗ ở sinh hoạt thông thường không tính vào $OC$'],
  ['CÓ THỂ ĐẠT ĐƯỢC', 'có thể đạt được'],

  // Chapter 2
  ['<strong>P_{\\max}, P_{\\min}</strong>:', '<strong>$P_{\\max}, P_{\\min}$</strong>:'],
  ['<strong>{\\max}, P_{\\min}$</strong>:', '<strong>$P_{\\max}, P_{\\min}$</strong>:'],
  ['<strong>-b</strong>: Hệ số góc', '<strong>$-b$</strong>: Hệ số góc'],

  // Chapter 3
  ['<strong>P_1, P_2</strong>: Mức giá', '<strong>$P_1, P_2$</strong>: Mức giá'],
  ['<strong>Q_1, Q_2</strong>: Lượng cầu', '<strong>$Q_1, Q_2$</strong>: Lượng cầu'],
  ['<strong>P_Y</strong>: Giá hàng hóa liên quan', '<strong>$P_Y$</strong>: Giá hàng hóa liên quan'],
  ['<strong>Q_X</strong>: Lượng cầu hàng hóa X', '<strong>$Q_X$</strong>: Lượng cầu hàng hóa X'],
  ['<strong>MR</strong>: Doanh thu cận biên', '<strong>$MR$</strong>: Doanh thu cận biên'],
  ['<strong>E_D</strong>: Độ co giãn', '<strong>$E_D$</strong>: Độ co giãn'],
  ['<strong>E_S</strong>: Độ co giãn', '<strong>$E_S$</strong>: Độ co giãn'],

  // Chapter 4
  ['• <strong>P_c, P_f</strong>: Giá trần và Giá sàn', '• <strong>$P_c, P_f$</strong>: Giá trần và giá sàn'],
  ['• <strong>DWL</strong>: Tổn thất vô ích', '• <strong>$DWL$</strong>: Tổn thất vô ích'],
  ['• <strong>Q^*, Q_t</strong>: Sản lượng trước và sau', '• <strong>$Q^*, Q_t$</strong>: Sản lượng trước và sau'],
  ['• <strong>MRS_{XY}</strong>: Tỷ lệ thay thế biên', '• <strong>$MRS_{XY}$</strong>: Tỷ lệ thay thế biên'],
  ['• <strong>X, Y</strong>: Số lượng tiêu dùng', '• <strong>$X, Y$</strong>: Số lượng tiêu dùng'],
  ['Mức giá TỐI thiểu', 'Mức giá tối thiểu'],
  ['là VÔ hiệu (Không có tác động)', 'là vô hiệu (không có tác động)'],
  ['Thiếu hụt hàng hóa ($Q_D > Q_S$)', 'thiếu hụt hàng hóa ($Q_D > Q_S$)'],
  ['Dư thừa hàng hóa ($Q_S > Q_D$)', 'dư thừa hàng hóa ($Q_S > Q_D$)'],
  ['Tổn thất vô ích (Deadweight Loss - DWL)', 'tổn thất vô ích (Deadweight Loss - DWL)'],

  // Chapter 5
  ['• <strong>\\pi</strong>: Lợi nhuận', '• <strong>$\\pi$</strong>: Lợi nhuận'],
  ['• <strong>TR</strong>: Tổng doanh thu', '• <strong>$TR$</strong>: Tổng doanh thu'],
  ['• <strong>P_{\\text{hòa vốn}}</strong>:', '• <strong>$P_{\\text{hòa vốn}}$</strong>:'],
  ['• <strong>P_{\\text{đóng cửa}}</strong>:', '• <strong>$P_{\\text{đóng cửa}}$</strong>:'],
  ['• <strong>P_{\\\\text{hòa vốn}}</strong>:', '• <strong>$P_{\\text{hòa vốn}}$</strong>:'],
  ['• <strong>P_{\\\\text{đóng cửa}}</strong>:', '• <strong>$P_{\\text{đóng cửa}}$</strong>:'],
  ['Lợi nhuận kinh tế bằng 0 ($pi = 0$)', 'Lợi nhuận kinh tế bằng 0 ($\\pi = 0$)'],
  ['điểm CỰC tiểu của chúng', 'điểm cực tiểu của chúng'],
  ['Trả lời \"Có\" là SAI ngay lập tức', 'Trả lời \"Có\" là sai ngay lập tức'],

  // Chapter 6
  ['• <strong>L</strong>: Chỉ số Lerner', '• <strong>$L$</strong>: Chỉ số Lerner'],
  ['• <strong>P, MC</strong>: Mức giá và Chi phí biên', '• <strong>$P, MC$</strong>: Mức giá và chi phí biên'],
  ['• <strong>E_D</strong>: Độ co giãn của cầu', '• <strong>$E_D$</strong>: Độ co giãn của cầu'],

  // Chapter 7
  ['• <strong>C</strong>: Tiêu dùng', '• <strong>$C$</strong>: Tiêu dùng'],
  ['• <strong>I</strong>: Đầu tư', '• <strong>$I$</strong>: Đầu tư'],
  ['• <strong>G</strong>: Chi tiêu', '• <strong>$G$</strong>: Chi tiêu'],
  ['• <strong>NX</strong>: Xuất khẩu ròng', '• <strong>$NX$</strong>: Xuất khẩu ròng'],
  ['• <strong>\\text{GDP Deflator}</strong>:', '• <strong>$\\text{GDP Deflator}$</strong>:'],
  ['• <strong>\\\\text{GDP Deflator}</strong>:', '• <strong>$\\text{GDP Deflator}$</strong>:'],

  // Chapter 8
  ['• <strong>\\tilde{k}</strong>: Tư bản', '• <strong>$\\tilde{k}$</strong>: Tư bản'],
  ['• <strong>\\\\tilde{k}</strong>: Tư bản', '• <strong>$\\tilde{k}$</strong>: Tư bản'],
  ['• <strong>\\delta, n, g</strong>: Tỷ lệ', '• <strong>$\\delta, n, g$</strong>: Tỷ lệ'],
  ['• <strong>\\\\delta, n, g</strong>: Tỷ lệ', '• <strong>$\\delta, n, g$</strong>: Tỷ lệ'],

  // Chapter 9
  ['• <strong>\\pi_t</strong>: Tỷ lệ lạm phát', '• <strong>$\\pi_t$</strong>: Tỷ lệ lạm phát'],
  ['• <strong>\\\\pi_t</strong>: Tỷ lệ lạm phát', '• <strong>$\\pi_t$</strong>: Tỷ lệ lạm phát'],
  ['• <strong>P_{i, t}</strong>: Giá mặt hàng', '• <strong>$P_{i, t}$</strong>: Giá mặt hàng'],
  ['• <strong>Q_{i, \\text{gốc}}</strong>:', '• <strong>$Q_{i, \\text{gốc}}$</strong>:'],
  ['• <strong>Q_{i, \\\\text{gốc}}</strong>:', '• <strong>$Q_{i, \\text{gốc}}$</strong>:'],
  ['• <strong>u, u_n</strong>: Tỷ lệ thất nghiệp', '• <strong>$u, u_n$</strong>: Tỷ lệ thất nghiệp'],
  ['• <strong>Y, Y_p</strong>: Sản lượng', '• <strong>$Y, Y_p$</strong>: Sản lượng'],

  // Chapter 10
  ['• <strong>M</strong>: Tổng lượng cung tiền', '• <strong>$M$</strong>: Tổng lượng cung tiền'],
  ['• <strong>B</strong>: Cơ sở tiền tệ', '• <strong>$B$</strong>: Cơ sở tiền tệ'],
  ['• <strong>m</strong>: Số nhân tiền tệ', '• <strong>$m$</strong>: Số nhân tiền tệ'],
  ['• <strong>M, V, P, Y</strong>: Cung tiền', '• <strong>$M, V, P, Y$</strong>: Cung tiền'],

  // Chapter 11
  ['• <strong>k_m</strong>: Số nhân chi tiêu', '• <strong>$k_m$</strong>: Số nhân chi tiêu'],
  ['• <strong>MPC</strong>: Xu hướng tiêu dùng cận biên', '• <strong>$MPC$</strong>: Xu hướng tiêu dùng cận biên'],
  ['• <strong>\\pi, \\pi^*</strong>: Lạm phát', '• <strong>$\\pi, \\pi^*$</strong>: Lạm phát'],
  ['• <strong>\\\\pi, \\\\pi^*</strong>: Lạm phát', '• <strong>$\\pi, \\pi^*$</strong>: Lạm phát'],
  ['• <strong>i, r^*</strong>: Lãi suất', '• <strong>$i, r^*$</strong>: Lãi suất'],
  ['• <strong>(y - \\bar{y})</strong>: Khoảng cách', '• <strong>$(y - \\bar{y})$</strong>: Khoảng cách'],

  // Chapter 12
  ['• <strong>e</strong>: Tỷ giá hối đoái', '• <strong>$e$</strong>: Tỷ giá hối đoái'],
  ['• <strong>\\epsilon</strong>: Tỷ giá hối đoái thực', '• <strong>$\\epsilon$</strong>: Tỷ giá hối đoái thực'],
  ['• <strong>P, P^*</strong>: Mức giá nội địa', '• <strong>$P, P^*$</strong>: Mức giá nội địa']
];

rawMathReplacements.forEach(([from, to]) => {
  theory = theory.replaceAll(from, to);
});

// Tối ưu hiển thị công thức nhiều nhánh trên mobile để chống tràn ngang
theory = theory.replace(
  '$$\\text{Thiếu hụt} = Q_D(P_c) - Q_S(P_c); \\quad \\text{Dư thừa} = Q_S(P_f) - Q_D(P_f)$$',
  '$$\\begin{aligned} \\text{Thiếu hụt} &= Q_D(P_c) - Q_S(P_c) \\\\ \\text{Dư thừa} &= Q_S(P_f) - Q_D(P_f) \\end{aligned}$$'
);

theory = theory.replace(
  '$$CS = \\frac{1}{2}(P_{\\max} - P^*) \\times Q^*; \\quad PS = \\frac{1}{2}(P^* - P_{\\min}) \\times Q^*$$',
  '$$\\begin{aligned} CS &= \\frac{1}{2}(P_{\\max} - P^*) \\times Q^* \\\\ PS &= \\frac{1}{2}(P^* - P_{\\min}) \\times Q^* \\end{aligned}$$'
);

theory = theory.replace(
  '$$TC = FC + VC; \\quad ATC = AFC + AVC; \\quad MC = \\frac{d(TC)}{dQ} = \\frac{d(VC)}{dQ}$$',
  '$$\\begin{aligned} TC &= FC + VC, \\quad ATC = AFC + AVC \\\\ MC &= \\frac{d(TC)}{dQ} = \\frac{d(VC)}{dQ} \\end{aligned}$$'
);

// Chuẩn hóa nhãn các hộp công thức và giải thích ELI5
theory = theory.replace(/📐 Công thức đo lường Thiếu hụt & Dư thừa:/g, '📐 Công thức đo lường thiếu hụt và dư thừa:');
theory = theory.replace(/🍭 Giải thích dễ như lớp 1 \(Hộp sữa căng tin & Quả bóng đá\):/g, '🍭 Giải thích dễ như lớp 1 (Hộp sữa căng tin và quả bóng đá):');
theory = theory.replace(/🍭 Giải thích dễ như lớp 1 \(Chiếc kẹo mút & 1 giờ chiều\):/g, '🍭 Giải thích dễ như lớp 1 (Chiếc kẹo mút và một giờ chiều):');
theory = theory.replace(/🍭 Giải thích dễ như lớp 1 \(Tấm vé xem phim hỏng\):/g, '🍭 Giải thích dễ như lớp 1 (Tấm vé xem phim hỏng):');
theory = theory.replace(/🍭 Giải thích dễ như lớp 1 \(Ví dụ chiếc kẹo mút & 1 giờ chiều\):/g, '🍭 Giải thích dễ như lớp 1 (Ví dụ chiếc kẹo mút và một giờ chiều):');

fs.writeFileSync(theoryPath, theory, 'utf8');
console.log('✓ Đã chuẩn hóa triệt để 100% data/theory.js');

// -------------------------------------------------------------
// CHUẨN HÓA DROPDOWN VÀ SIDEBAR TRONG INDEX.HTML
// -------------------------------------------------------------
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const htmlTitleReplacements = [
  ['Chương 1: 10 Nguyên lý & Chi phí cơ hội', 'Chương 1: Mười nguyên lý và chi phí cơ hội'],
  ['Chương 2: Cung - Cầu & Cân bằng thị trường', 'Chương 2: Cung - cầu và cân bằng thị trường'],
  ['Chương 3: Độ co giãn của Cung & Cầu', 'Chương 3: Độ co giãn của cung và cầu'],
  ['Chương 4: Chính sách giá, Thuế & Tối ưu tiêu dùng', 'Chương 4: Chính sách giá, thuế và tối ưu tiêu dùng'],
  ['Chương 5: Sản xuất & Chi phí doanh nghiệp', 'Chương 5: Sản xuất và chi phí doanh nghiệp'],
  ['Chương 6: 4 Cấu trúc thị trường & Lý thuyết trò chơi', 'Chương 6: Bốn cấu trúc thị trường và lý thuyết trò chơi'],
  ['Chương 7: Đo lường sản lượng quốc gia (GDP)', 'Chương 7: Đo lường sản lượng quốc gia (GDP)'],
  ['Chương 8: Tăng trưởng kinh tế & Năng suất', 'Chương 8: Tăng trưởng kinh tế và năng suất'],
  ['Chương 9: Lạm phát, CPI & Thất nghiệp', 'Chương 9: Lạm phát, CPI và thất nghiệp'],
  ['Chương 10: Hệ thống tiền tệ & NHTW', 'Chương 10: Hệ thống tiền tệ và NHTW'],
  ['Chương 11: Mô hình AD-AS & Chính sách tài khóa', 'Chương 11: Mô hình AD - AS và chính sách tài khóa'],
  ['Chương 12: Kinh tế vĩ mô trong nền kinh tế mở', 'Chương 12: Kinh tế vĩ mô trong nền kinh tế mở']
];

htmlTitleReplacements.forEach(([from, to]) => {
  html = html.replaceAll(from, to);
});

// Nâng version cache-busting lên v2.6.0
html = html.replace(/\?v=\d+\.\d+\.\d+/g, '?v=2.6.0');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ Đã chuẩn hóa danh mục chương và nâng cấp version v2.6.0 trong index.html');
