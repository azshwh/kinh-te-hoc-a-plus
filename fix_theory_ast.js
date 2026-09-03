const fs = require('fs');

const headingMap = {
  "1. Mười Nguyên Lý Kinh Tế Học Cốt Lõi Của N. Gregory Mankiw": "1. Mười nguyên lý kinh tế học cốt lõi của N. Gregory Mankiw",
  "2. Chi phí cơ hội (opportunity cost) & Chi Phí Chìm (Sunk Cost)": "2. Chi phí cơ hội (opportunity cost) & chi phí chìm (sunk cost)",
  "3. đường giới hạn khả năng sản xuất (production possibilities frontier - PPF) & Lợi Thế So Sánh": "3. Đường giới hạn khả năng sản xuất (PPF) & lợi thế so sánh",
  "4. Bảng Đối Chiếu: Kinh Tế Học Thực Chứng vs Chuẩn Tắc": "4. Bảng đối chiếu: Kinh tế học thực chứng vs chuẩn tắc",
  "5. ⭐ Tinh Hoa Mankiw & Ricardo: Sơ Đồ Chu Chuyển & Lợi Thế So Sánh Định Lượng": "5. ⭐ Tinh hoa Mankiw & Ricardo: Sơ đồ chu chuyển & lợi thế so sánh định lượng",
  "1. Tại Sao Đường Cầu Dốc Xuống? (3 Cơ Chế Kinh Tế Nền Tảng)": "1. Tại sao đường cầu dốc xuống? (3 cơ chế kinh tế nền tảng)",
  "2. Phân Biệt Tuyệt Đối: Di Chuyển Dọc vs Dịch Chuyển Đường Cong": "2. Phân biệt tuyệt đối: Di chuyển dọc vs dịch chuyển đường cong",
  "3. thặng dư tiêu dùng (consumer surplus - CS) (CS), thặng dư sản xuất (producer surplus - PS) (PS) & Hiệu Quả Thị Trường": "3. Thặng dư tiêu dùng (CS), thặng dư sản xuất (PS) & hiệu quả thị trường",
  "4. ⭐ Tinh Hoa Walras & Marshall: Cơ Chế Cân Bằng & Ma Trận Dịch Chuyển Đồng Thời": "4. ⭐ Tinh hoa Walras & Marshall: Cơ chế cân bằng & ma trận dịch chuyển đồng thời",
  "1. Công Thức Tính Độ Co Giãn Theo Phương Pháp Trung Điểm": "1. Công thức tính độ co giãn theo phương pháp trung điểm",
  "2. Quy Tắc Vàng: Mối Quan Hệ Giữa Độ Co Giãn Và Tổng Doanh Thu (TR)": "2. Quy tắc vàng: Mối quan hệ giữa độ co giãn và tổng doanh thu (TR)",
  "3. Độ Co Giãn Theo Thu Nhập (EI) & Độ Co Giãn Chéo (EXY)": "3. Độ co giãn theo thu nhập (EI) & độ co giãn chéo (EXY)",
  "4. ⭐ Tinh Hoa Alfred Marshall: Co Giãn Cung Theo Thời Gian & Phương Trình Amoroso - Robinson": "4. ⭐ Tinh hoa Alfred Marshall: Co giãn cung theo thời gian & phương trình Amoroso - Robinson",
  "1. Kiểm Soát Giá: giá trần (price ceiling) & giá sàn (price floor)": "1. Kiểm soát giá: Giá trần (price ceiling) & giá sàn (price floor)",
  "2. Gánh Nặng Thuế (Tax Incidence) & tổn thất vô ích (deadweight loss - DWL) (DWL)": "2. Gánh nặng thuế (tax incidence) & tổn thất vô ích (DWL)",
  "3. Tối Ưu Hóa Lựa Chọn Tiêu Dùng (Consumer Choice & MRS)": "3. Tối ưu hóa lựa chọn tiêu dùng (consumer choice & MRS)",
  "4. ⭐ Chuyên Đề Phân Loại A+: Phân Rã Slutsky, Hàng Giffen & Nghiệm Góc": "4. ⭐ Chuyên đề phân loại A+: Phân rã Slutsky, hàng Giffen & nghiệm góc",
  "1. Lợi Nhuận Kinh Tế vs Lợi Nhuận Kế Toán": "1. Lợi nhuận kinh tế vs lợi nhuận kế toán",
  "2. Quy Luật Năng Suất Cận Biên Giảm Dần & Họ Đường Chi Phí": "2. Quy luật năng suất cận biên giảm dần & họ đường chi phí",
  "3. Điểm Hòa Vốn, Điểm Đóng Cửa & Đường Cung Ngắn Hạn": "3. Điểm hòa vốn, điểm đóng cửa & đường cung ngắn hạn",
  "4. ⭐ Tinh Hoa Pindyck & Varian: Sản Xuất Dài Hạn, Đường Mở Rộng & Quy Mô Cobb - Douglas": "4. ⭐ Tinh hoa Pindyck & Varian: Sản xuất dài hạn, đường mở rộng & quy mô Cobb - Douglas",
  "1. Bảng So Sánh Toàn Diện 4 Cấu Trúc Thị Trường": "1. Bảng so sánh toàn diện 4 cấu trúc thị trường",
  "2. độc quyền thuần túy (monopoly): Quyết Định Giá & Chỉ Số Lerner": "2. Độc quyền thuần túy (monopoly): Quyết định giá & chỉ số Lerner",
  "3. độc quyền nhóm (oligopoly) & Lý Thuyết Trò Chơi (Game Theory)": "3. Độc quyền nhóm (oligopoly) & lý thuyết trò chơi (game theory)",
  "4. ⭐ Chuyên Đề Phân Loại A+: Cournot, Stackelberg, Đường Cầu Gãy Khúc & Bất Đối Xứng Thông Tin": "4. ⭐ Chuyên đề phân loại A+: Cournot, Stackelberg, đường cầu gãy khúc & bất đối xứng thông tin",
  "1. Định Nghĩa Chuẩn Về GDP & 3 Phương Pháp Đo Lường": "1. Định nghĩa chuẩn về GDP & 3 phương pháp đo lường",
  "2. GDP Danh Nghĩa vs GDP Thực Tế & GDP Deflator": "2. GDP danh nghĩa vs GDP thực tế & GDP deflator",
  "3. ⭐ Tinh Hoa Hạch Toán SNA & Olivier Blanchard: Chuỗi Tài Khoản & Bộ Ba Thâm Hụt": "3. ⭐ Tinh hoa hạch toán SNA & Olivier Blanchard: Chuỗi tài khoản & bộ ba thâm hụt",
  "1. Hàm Sản Xuất & 4 Nhân Tố Quyết Định Năng Suất (Productivity)": "1. Hàm sản xuất & 4 nhân tố quyết định năng suất (productivity)",
  "2. Hiệu Ứng Đuổi Kịp (Catch-up Effect) & Vai Trò Của Tiết Kiệm": "2. Hiệu ứng đuổi kịp (catch-up effect) & vai trò của tiết kiệm",
  "3. ⭐ Tinh Hoa Robert Solow & David Romer: Mô Hình Solow Hoàn Chỉnh Với Dân Số (n) & Công Nghệ (g)": "3. ⭐ Tinh hoa Robert Solow & David Romer: Mô hình Solow hoàn chỉnh với dân số (n) & công nghệ (g)",
  "1. chỉ số giá tiêu dùng (consumer price index - CPI) (CPI) & 3 Sai Lệch Kinh Điển": "1. Chỉ số giá tiêu dùng (CPI) & 3 sai lệch kinh điển",
  "2. Bảng Đối Chiếu Cốt Tử: CPI vs Chỉ Số Điều Chỉnh GDP (GDP Deflator)": "2. Bảng đối chiếu cốt tử: CPI vs chỉ số điều chỉnh GDP (GDP deflator)",
  "3. Ba Loại Thất Nghiệp & tỷ lệ thất nghiệp (unemployment rate) Tự Nhiên (un)": "3. Ba loại thất nghiệp & tỷ lệ thất nghiệp tự nhiên (un)",
  "4. ⭐ Tinh Hoa Joseph Stiglitz & Arthur Okun: Tiền Lương Hiệu Quả & Quy Luật Okun": "4. ⭐ Tinh hoa Joseph Stiglitz & Arthur Okun: Tiền lương hiệu quả & quy luật Okun",
  "1. Cơ Chế Tạo Tiền & số nhân tiền tệ (money multiplier) Tệ (Money Multiplier)": "1. Cơ chế tạo tiền & số nhân tiền tệ (money multiplier)",
  "2. Ba Công Cụ Điều Hành Của Ngân Hàng Trung Ương": "2. Ba công cụ điều hành của ngân hàng trung ương",
  "3. Phương Trình Số Lượng & Tính Trung Tính Của Tiền Tệ": "3. Phương trình số lượng & tính trung tính của tiền tệ",
  "4. ⭐ Tinh Hoa Frederic Mishkin & Ben Bernanke: Chi Phí Lạm Phát & Nới Lỏng Định Lượng (QE)": "4. ⭐ Tinh hoa Frederic Mishkin & Ben Bernanke: Chi phí lạm phát & nới lỏng định lượng (QE)",
  "1. Tại Sao Đường Tổng Cầu (AD) Dốc Xuống? (3 Hiệu Ứng Vĩ Mô)": "1. Tại sao đường tổng cầu (AD) dốc xuống? (3 hiệu ứng vĩ mô)",
  "2. Đường Tổng Cung: Ngắn Hạn (SRAS) vs Dài Hạn (LRAS)": "2. Đường tổng cung: Ngắn hạn (SRAS) vs dài hạn (LRAS)",
  "3. Số Nhân Chi Tiêu Keynes & Hiện Tượng Lấn Át (Crowding-out)": "3. Số nhân chi tiêu Keynes & hiện tượng lấn át (crowding-out)",
  "4. Đường Cong Phillips: Đánh Đổi Trong Ngắn Hạn vs Thẳng Đứng Trong Dài Hạn": "4. Đường cong Phillips: Đánh đổi trong ngắn hạn vs thẳng đứng trong dài hạn",
  "5. ⭐ Chuyên Đề Phân Loại A+: Quy Tắc Taylor, Cú Sốc Đình Lạm & Tương Đương Ricardo": "5. ⭐ Chuyên đề phân loại A+: Quy tắc Taylor, cú sốc đình lạm & tương đương Ricardo",
  "1. Đồng Nhất Thức Tài Khoản Quốc Dân Trong Nền Kinh Tế Mở": "1. Đồng nhất thức tài khoản quốc dân trong nền kinh tế mở",
  "2. Tỷ Giá Thực Tế & Học Thuyết Ngang Giá Sức Mua (PPP)": "2. Tỷ giá thực tế & học thuyết ngang giá sức mua (PPP)",
  "3. Tác Động Của Hàng Rào Thuế Quan & Hạn Ngạch Nhập Khẩu": "3. Tác động của hàng rào thuế quan & hạn ngạch nhập khẩu",
  "4. ⭐ Chuyên Đề Phân Loại A+: Mô Hình Mundell - Fleming & Bộ Ba Bất Khả Thi (Trilemma)": "4. ⭐ Chuyên đề phân loại A+: Mô hình Mundell - Fleming & bộ ba bất khả thi (trilemma)",
  "5. ⭐ Tinh Hoa Paul Krugman: Hiệu Ứng Đường Cong Chữ J & Điều Kiện Marshall - Lerner": "5. ⭐ Tinh hoa Paul Krugman: Hiệu ứng đường cong chữ J & điều kiện Marshall - Lerner"
};

const allCapsList = [
  'CÓ THỂ NÊN NHẬN', 'CHẮC CHẮN TĂNG', 'CHẮC CHẮN GIẢM', 'KHÔNG PHẢI LÀ ĐỘ CO GIÃN',
  'NGHỊCH CHIỀU', 'GIẢM GIÁ', 'CÙNG CHIỀU', 'TĂNG GIÁ', 'KHÔNG PHẢI', 'HOÀN TOÀN KHÔNG',
  'KHÔNG CÓ NGHĨA', 'LUÔN CẮT', 'TIẾP TỤC SẢN XUẤT', 'PHÍA TRÊN', 'NGAY LẬP TỨC',
  'DOANH NGHIỆP ĐỘC QUYỀN KHÔNG CÓ ĐƯỜNG CUNG', 'NGẮN HẠN', 'ĐỊNH Ở NĂM GỐC',
  'THAY ĐỔI', 'KHÔNG HỀ LÀM THAY ĐỔI CÁN CÂN THƯƠNG MẠI', 'HOÀN TOÀN VÔ HIỆU',
  'HIỆU LỰC TỐI ĐA', 'KHÔNG TÍNH', 'THỰC CHỨNG', 'NGOÀI GIÁ', 'LƯỢNG CẦU',
  'HOẶC', 'TRÊN', 'TRONG', 'NGOÀI', 'ĐƯỢC', 'KHÔNG', 'TĂNG', 'GIẢM', 'KHÔNG ĐỔI',
  'CẦU', 'CUNG', 'THIỂU', 'HIỆU', 'TIỂU', 'TRƯỚC', 'TÍNH', 'ĐỊNH', 'TIÊU', 'TỐI ĐA'
];

let code = fs.readFileSync('data/theory.js', 'utf8');
code = code + '\nmodule.exports = THEORY_DATA;';
fs.writeFileSync('temp.js', code);
const data = require('./temp.js');

data.forEach(c => {
  if (c.subtitle) {
    c.subtitle = c.subtitle.replace('thặng dư tiêu dùng (CS) và thặng dư sản xuất (PS)', 'thặng dư tiêu dùng (CS) và thặng dư sản xuất (PS)');
  }
  
  c.sections.forEach(s => {
    // 1. Fix heading using the map
    if (headingMap[s.heading]) {
      s.heading = headingMap[s.heading];
    }
    
    // 2. Fix content
    s.content = s.content.replace(/\\suppercase\\b/g, '');
    s.content = s.content.replace(/class="uppercase\\s/g, 'class="');
    s.content = s.content.replace(/class="uppercase"/g, 'class=""');

    // Fix ALL CAPS
    allCapsList.forEach(word => {
      const regex = new RegExp(`(^|[^\\\\p{L}])${word}([^\\\\p{L}]|$)`, 'gu');
      s.content = s.content.replace(regex, (m, p1, p2) => p1 + word.toLowerCase() + p2);
    });

    // Fix \Delta Y missing $
    // We only wrap it if it's not already wrapped!
    s.content = s.content.replace(/(?<!\\$)\\\\Delta Y(?!\\$)/g, '$\\\\Delta Y$');
    s.content = s.content.replace(/(?<!\\$)\\\\Delta X(?!\\$)/g, '$\\\\Delta X$');
    s.content = s.content.replace(/(?<!\\$)P_\\{\\\\max\\}(?!\\$)/g, '$P_{\\\\max}$');
    s.content = s.content.replace(/(?<!\\$)P_\\{\\\\min\\}(?!\\$)/g, '$P_{\\\\min}$');
    
    // Fix `📌 1. Khái Niệm Cốt Lõi & Thuật Ngữ Chuẩn Mực` inside content
    s.content = s.content.replace(/1\. Khái Niệm Cốt Lõi & Thuật Ngữ Chuẩn Mực/g, '1. Khái niệm cốt lõi và thuật ngữ chuyên ngành');
  });
});

let newDataStr = JSON.stringify(data, null, 2);
let newFileContent = `// Cơ sở dữ liệu Lý thuyết Chuyên sâu 12 Chương môn Kinh tế học đại cương
// Biên soạn chuẩn mực theo giáo trình N. Gregory Mankiw, Paul Samuelson và Hal Varian
// Tích hợp giải thích ELI5 dành cho học sinh lớp 1 và hệ thống hộp kiến thức khoa học

const THEORY_DATA = ${newDataStr};
`;

fs.writeFileSync('data/theory.js', newFileContent, 'utf8');
console.log('Done fixing theory.js');
