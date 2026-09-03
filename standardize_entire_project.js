const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const dataDir = path.join(baseDir, 'data');

console.log('=== BẮT ĐẦU CHUẨN HÓA TOÀN BỘ CƠ SỞ DỮ LIỆU DỰ ÁN ===');

// Helper function to safely replace all occurrences in file
function updateFile(filename, updater) {
  const filePath = path.join(dataDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = updater(content);
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Đã chuẩn hóa thành công: ${filename}`);
  } else {
    console.log(`- Không có thay đổi: ${filename}`);
  }
}

// -------------------------------------------------------------
// 1. DATA/THEORY.JS
// -------------------------------------------------------------
updateFile('theory.js', content => {
  // Gỡ bỏ hoàn toàn class uppercase khỏi toàn bộ thẻ tiêu đề h4
  content = content.replace(/\s+uppercase\b/g, '');
  content = content.replace(/class="uppercase\s+/g, 'class="');
  content = content.replace(/class="uppercase"/g, 'class=""');

  // Sửa lỗi toán học bị thiếu ký hiệu $ hoặc bị rớt ký tự P_
  content = content.replace(/<strong>\{\\max\}, P_{\\min}\$<\/strong>/g, '<strong>$P_{\\max}, P_{\\min}$</strong>');
  content = content.replace(/<strong>\{\\max\}<\/strong>/g, '<strong>$P_{\\max}$</strong>');
  content = content.replace(/<strong>\{\\min\}<\/strong>/g, '<strong>$P_{\\min}$</strong>');
  content = content.replace(/<strong>\\tilde\{k\}<\/strong>/g, '<strong>$\\tilde{k}$</strong>');
  content = content.replace(/<strong>\\delta, n, g<\/strong>/g, '<strong>$\\delta, n, g$</strong>');
  content = content.replace(/<strong>i, r\^\*<\/strong>/g, '<strong>$i, r^*$</strong>');
  content = content.replace(/<strong>\\pi, \\pi\^\*<\/strong>/g, '<strong>$\\pi, \\pi^*$</strong>');
  content = content.replace(/<strong>\(y - \\bar\{y\}\)<\/strong>/g, '<strong>$(y - \\bar{y})$</strong>');
  content = content.replace(/<strong>\\Delta Y<\/strong>/g, '<strong>$\\Delta Y$</strong>');
  content = content.replace(/<strong>\\Delta X<\/strong>/g, '<strong>$\\Delta X$</strong>');

  // Bọc các ký hiệu toán đơn lẻ trong text nếu chưa bọc $
  content = content.replace(/(?<!\$)\\tilde\{k\}(?!\$)/g, '$\\tilde{k}$');
  content = content.replace(/(?<!\$)\\bar\{y\}(?!\$)/g, '$\\bar{y}$');

  // Chuẩn hóa các cụm ALL CAPS còn sót trong theory
  const theoryCaps = [
    ['CÓ THỂ ĐẠT', 'có thể đạt'],
    ['KHI VÀ CHỈ KHI', 'khi và chỉ khi'],
    ['SAI HOÀN TOÀN', 'sai hoàn toàn'],
    ['GIÁ CẢ', 'giá cả'],
    ['SẢN LƯỢNG', 'sản lượng'],
    ['ĐỘ DỐC', 'độ dốc'],
    ['CỰC ĐẠI', 'cực đại'],
    ['HÀNG BỔ SUNG', 'hàng bổ sung'],
    ['NHÀ Ở MỚI', 'nhà ở mới'],
    ['CAO HƠN', 'cao hơn'],
    ['HỀ LÀM', 'hề làm'],
    ['CÁN CÂN THƯƠNG MẠI', 'cán cân thương mại'],
    ['THẢ NỔI', 'thả nổi'],
    ['HOÀN TOÀN', 'hoàn toàn'],
    ['LƯỢNG', 'lượng'],
    ['THƯƠNG MẠI', 'thương mại']
  ];
  theoryCaps.forEach(([from, to]) => {
    const reg = new RegExp(`(^|[^\\p{L}])${from}([^\\p{L}]|$)`, 'gu');
    content = content.replace(reg, (m, p1, p2) => p1 + to + p2);
  });

  return content;
});

// -------------------------------------------------------------
// 2. DATA/FLASHCARDS.JS
// -------------------------------------------------------------
updateFile('flashcards.js', content => {
  const flashcardCaps = [
    ['GIÁ CỦA CHÍNH HÀNG ĐÓ', 'giá của chính hàng hóa đó'],
    ['DỊCH CHUYỂN', 'dịch chuyển'],
    ['THIẾU HỤT', 'thiếu hụt'],
    ['DƯ THỪA', 'dư thừa'],
    ['GIẢM GIÁ', 'giảm giá'],
    ['TĂNG GIÁ', 'tăng giá'],
    ['ĐIỂM CỰC TIỂU', 'điểm cực tiểu'],
    ['PHÍA TRÊN', 'phía trên'],
    ['THAY THẾ', 'thay thế'],
    ['BỔ SUNG', 'bổ sung'],
    ['PHẢI GIỮ NGUYÊN DẤU', 'phải giữ nguyên dấu'],
    ['CUỐI CÙNG', 'cuối cùng'],
    ['TRONG NƯỚC', 'trong nước'],
    ['KHÔNG CÓ', 'không có'],
    ['CỐ ĐỊNH', 'cố định'],
    ['THAY ĐỔI', 'thay đổi'],
    ['LÃI SUẤT TĂNG', 'lãi suất tăng'],
    ['LƯỢNG', 'lượng'],
    ['CẦU', 'cầu']
  ];
  flashcardCaps.forEach(([from, to]) => {
    const reg = new RegExp(`(^|[^\\p{L}])${from}([^\\p{L}]|$)`, 'gu');
    content = content.replace(reg, (m, p1, p2) => p1 + to + p2);
  });

  return content;
});

// -------------------------------------------------------------
// 3. DATA/MOCK_EXAMS.JS
// -------------------------------------------------------------
updateFile('mock_exams.js', content => {
  content = content.replace(/PHẦN I: TRẮC NGHIỆM KHÁCH QUAN/g, 'Phần I: Trắc nghiệm khách quan');
  content = content.replace(/PHẦN II: NHẬN ĐỊNH ĐÚNG \/ SAI VÀ GIẢI THÍCH/g, 'Phần II: Nhận định đúng / sai và giải thích');
  content = content.replace(/PHẦN III: BÀI TẬP TỰ LUẬN TÍNH TOÁN/g, 'Phần III: Bài tập tự luận tính toán');
  content = content.replace(/BÀI TẬP MÔ HÌNH IS - LM TOÀN DIỆN/g, 'Bài tập mô hình IS - LM toàn diện');
  content = content.replace(/BÀI TẬP TỔNG HỢP TỰ LUẬN/g, 'Bài tập tổng hợp tự luận');
  content = content.replace(/ĐƯỢC TÍNH/g, 'được tính');
  content = content.replace(/GIẢM XUỐNG/g, 'giảm xuống');

  return content;
});

// -------------------------------------------------------------
// 4. DATA/QUIZ.JS
// -------------------------------------------------------------
updateFile('quiz.js', content => {
  const quizCaps = [
    ['GIÁ CỦA CHÍNH HÀNG HÓA ĐÓ', 'giá của chính hàng hóa đó'],
    ['DI CHUYỂN DỌC', 'di chuyển dọc'],
    ['DỊCH CHUYỂN', 'dịch chuyển'],
    ['ĐỂ CÓ HIỆU LỰC', 'để có hiệu lực'],
    ['TĂNG LÊN', 'tăng lên'],
    ['NGƯỢC CHIỀU', 'ngược chiều'],
    ['CÙNG CHIỀU', 'cùng chiều'],
    ['CHÍNH XÁC', 'chính xác'],
    ['BỔ SUNG', 'bổ sung'],
    ['CAO CẤP', 'cao cấp'],
    ['BÀNG QUAN', 'bàng quan'],
    ['NGÂN SÁCH', 'ngân sách'],
    ['TẠM DỪNG SẢN XUẤT', 'tạm dừng sản xuất'],
    ['VẪN TIẾP TỤC SẢN XUẤT', 'vẫn tiếp tục sản xuất'],
    ['KHÔNG PHẢI', 'không phải'],
    ['ĐỒNG NHẤT', 'đồng nhất'],
    ['ĐƯỢC TÍNH', 'được tính'],
    ['NĂM SẢN XUẤT', 'năm sản xuất'],
    ['ĐƯỢC LỢI', 'được lợi'],
    ['BỊ THIỆT', 'bị thiệt'],
    ['BẮT BUỘC', 'bắt buộc'],
    ['LỰC LƯỢNG LAO ĐỘNG', 'lực lượng lao động'],
    ['NHTW MUA', 'NHTW mua'],
    ['NHTW BÁN', 'NHTW bán'],
    ['KHÔNG CÓ NGHĨA', 'không có nghĩa'],
    ['SANG PHẢI', 'sang phải'],
    ['CHẮC CHẮN TĂNG', 'chắc chắn tăng'],
    ['LUÔN CÓ MỘT BIẾN CHẮC CHẮN VÀ MỘT BIẾN CHƯA THỂ XÁC ĐỊNH ĐƯỢC', 'luôn có một biến chắc chắn và một biến chưa thể xác định được'],
    ['HÀNG HÓA CUỐI CÙNG', 'hàng hóa cuối cùng'],
    ['BÌNH PHƯƠNG', 'bình phương'],
    ['DÀI HẠN', 'dài hạn'],
    ['NGẮN HẠN', 'ngắn hạn'],
    ['KHÔNG CÓ TỔN THẤT VÔ ÍCH', 'không có tổn thất vô ích'],
    ['NHÀ Ở MỚI', 'nhà ở mới'],
    ['CAO HƠN', 'cao hơn'],
    ['BỊ THIỆT HẠI', 'bị thiệt hại'],
    ['THU HẸP', 'thu hẹp'],
    ['LẬP TỨC GIẢM THEO', 'lập tức giảm theo'],
    ['KHÔNG THAY ĐỔI', 'không thay đổi'],
    ['TIẾN BỘ CÔNG NGHỆ', 'tiến bộ công nghệ'],
    ['TĂNG TIÊU DÙNG', 'tăng tiêu dùng'],
    ['TỶ GIÁ THẢ NỔI', 'tỷ giá thả nổi'],
    ['CHÍNH SÁCH TIỀN TỆ MỞ RỘNG', 'chính sách tiền tệ mở rộng'],
    ['THẢ NỔI', 'thả nổi'],
    ['CỐ ĐỊNH', 'cố định'],
    ['TÀI KHÓA', 'tài khóa'],
    ['TỪ BỎ CHÍNH SÁCH TIỀN TỆ ĐỘC LẬP', 'từ bỏ chính sách tiền tệ độc lập'],
    ['DƯỚI', 'dưới'],
    ['TRÊN', 'trên'],
    ['GIẢM', 'giảm'],
    ['KHÔNG', 'không'],
    ['CHỈ', 'chỉ']
  ];
  quizCaps.forEach(([from, to]) => {
    const reg = new RegExp(`(^|[^\\p{L}])${from}([^\\p{L}]|$)`, 'gu');
    content = content.replace(reg, (m, p1, p2) => p1 + to + p2);
  });

  return content;
});

// -------------------------------------------------------------
// 5. DATA/TRAPS.JS
// -------------------------------------------------------------
updateFile('traps.js', content => {
  const trapCaps = [
    ['NGOÀI GIÁ', 'ngoài giá'],
    ['KHÔNG CÓ HIỆU LỰC', 'không có hiệu lực'],
    ['ĐỘ CO GIÃN TƯƠNG ĐỐI', 'độ co giãn tương đối'],
    ['LỢI NHUẬN KẾ TOÁN VỪA ĐỦ', 'lợi nhuận kế toán vừa đủ'],
    ['VẪN PHẢI TRẢ', 'vẫn phải trả'],
    ['BỊ LỖ', 'bị lỗ'],
    ['VẪN NÊN TIẾP TỤC SẢN XUẤT', 'vẫn nên tiếp tục sản xuất'],
    ['PHẢI HẠ GIÁ', 'phải hạ giá'],
    ['LỢI THẾ SO SÁNH', 'lợi thế so sánh'],
    ['TẤT CẢ', 'tất cả'],
    ['KHÔNG THỂ', 'không thể'],
    ['GDP CHỈ TÍNH', 'GDP chỉ tính'],
    ['CUỐI CÙNG', 'cuối cùng'],
    ['SẢN XUẤT MỚI', 'sản xuất mới'],
    ['GDP KHÔNG BAO GỒM', 'GDP không bao gồm'],
    ['TRONG NƯỚC', 'trong nước'],
    ['KHÔNG NẰM TRONG GDP', 'không nằm trong GDP'],
    ['KHÔNG ẢNH HƯỞNG', 'không ảnh hưởng'],
    ['LÀM CPI TĂNG', 'làm CPI tăng'],
    ['VẪN DƯƠNG', 'vẫn dương'],
    ['GIÁ CẢ VẪN ĐANG TĂNG', 'giá cả vẫn đang tăng'],
    ['TĂNG CHẬM HƠN', 'tăng chậm hơn'],
    ['THỰC SỰ GIẢM XUỐNG', 'thực sự giảm xuống'],
    ['ĐỒNG THỜI', 'đồng thời'],
    ['KHÔNG CÓ VIỆC LÀM', 'không có việc làm'],
    ['TÍCH CỰC TÌM KIẾM VIỆC LÀM', 'tích cực tìm kiếm việc làm'],
    ['NGOÀI LỰC LƯỢNG LAO ĐỘNG', 'ngoài lực lượng lao động'],
    ['KHÔNG ĐƯỢC TÍNH', 'không được tính'],
    ['NHTW MUA', 'NHTW mua'],
    ['BƠM TIỀN MẶT RA', 'bơm tiền mặt ra'],
    ['NHTW BÁN', 'NHTW bán'],
    ['THU TIỀN MẶT VỀ', 'thu tiền mặt về'],
    ['GIÁ CỦA TẤT CẢ HÀNG HÓA', 'giá của tất cả hàng hóa'],
    ['HIỆU ỨNG VĨ MÔ HOÀN TOÀN KHÁC BIỆT', 'hiệu ứng vĩ mô hoàn toàn khác biệt'],
    ['LỢI SUẤT GIẢM DẦN CỦA TƯ BẢN', 'lợi suất giảm dần của tư bản'],
    ['KỲ VỌNG LẠM PHÁT', 'kỳ vọng lạm phát'],
    ['ĐƯỜNG THẲNG ĐỨNG', 'đường thẳng đứng'],
    ['CAO HƠN', 'cao hơn'],
    ['NHƯNG', 'nhưng'],
    ['CẦU', 'cầu'],
    ['KHÔNG PHẢI', 'không phải'],
    ['CHỈ', 'chỉ'],
    ['TĂNG', 'tăng'],
    ['GIẢM', 'giảm']
  ];
  trapCaps.forEach(([from, to]) => {
    const reg = new RegExp(`(^|[^\\p{L}])${from}([^\\p{L}]|$)`, 'gu');
    content = content.replace(reg, (m, p1, p2) => p1 + to + p2);
  });

  return content;
});

// -------------------------------------------------------------
// 6. DATA/TRUE_FALSE.JS
// -------------------------------------------------------------
updateFile('true_false.js', content => {
  // Sửa lỗi toán học unwrapped \delta, \pi
  content = content.replace(/(?<!\$)\\delta(?!\$)/g, '$\\delta$');
  content = content.replace(/(?<!\$)\\pi(?!\$)/g, '$\\pi$');

  const tfCaps = [
    ['CÙNG MỘT ĐƯỜNG CẦU', 'cùng một đường cầu'],
    ['DỊCH CHUYỂN SANG TRÁI', 'dịch chuyển sang trái'],
    ['GIẢM XUỐNG', 'giảm xuống'],
    ['TĂNG GIÁ', 'tăng giá'],
    ['CÓ HIỆU LỰC', 'có hiệu lực'],
    ['THẤP HƠN', 'thấp hơn'],
    ['KHÔNG CÓ HIỆU LỰC', 'không có hiệu lực'],
    ['ĐỘ CO GIÃN TƯƠNG ĐỐI', 'độ co giãn tương đối'],
    ['TRÊN MỖI ĐỒNG TIỀN CHI TIÊU', 'trên mỗi đồng tiền chi tiêu'],
    ['LỢI NHUẬN BÌNH THƯỜNG', 'lợi nhuận bình thường'],
    ['ĐIỂM CỰC TIỂU', 'điểm cực tiểu'],
    ['TOÀN BỘ NGÀNH', 'toàn bộ ngành'],
    ['MỘT DOANH NGHIỆP RIÊNG LẺ', 'một doanh nghiệp riêng lẻ'],
    ['ĐƯỜNG NẰM NGANG HOÀN TOÀN', 'đường nằm ngang hoàn toàn'],
    ['ĐƯỜNG CẦU CỦA THỊ TRƯỜNG', 'đường cầu của thị trường'],
    ['KHÔNG PHẢI', 'không phải'],
    ['HÀNG HÓA VÀ DỊCH VỤ CUỐI CÙNG', 'hàng hóa và dịch vụ cuối cùng'],
    ['TƯ BẢN THỰC TẾ MỚI', 'tư bản thực tế mới'],
    ['LÃNH THỔ', 'lãnh thổ'],
    ['QUỐC TỊCH', 'quốc tịch'],
    ['TIẾN BỘ CÔNG NGHỆ', 'tiến bộ công nghệ'],
    ['HỘ GIA ĐÌNH', 'hộ gia đình'],
    ['KHÔNG THAY ĐỔI', 'không thay đổi'],
    ['SỐ NHÂN TIỀN', 'số nhân tiền'],
    ['GIẢM MẠNH', 'giảm mạnh'],
    ['CO CỤM TRẦM TRỌNG', 'co cụm trầm trọng'],
    ['KHÔNG THỂ', 'không thể'],
    ['LÃI SUẤT THỊ TRƯỜNG BỊ ĐẨY LÊN CAO', 'lãi suất thị trường bị đẩy lên cao'],
    ['HIỆN TƯỢNG LẤN ÁT ĐẦU TƯ TƯ NHÂN', 'hiện tượng lấn át đầu tư tư nhân'],
    ['TRONG NGẮN HẠN', 'trong ngắn hạn'],
    ['ĐƯỜNG THẲNG ĐỨNG', 'đường thẳng đứng'],
    ['ĐỒNG NỘI TỆ TĂNG GIÁ THỰC TẾ', 'đồng nội tệ tăng giá thực tế'],
    ['NẰM NGANG HOÀN TOÀN', 'nằm ngang hoàn toàn'],
    ['CHÍNH SÁCH TÀI KHÓA', 'chính sách tài khóa'],
    ['GIẢM GIÁ', 'giảm giá'],
    ['THAY THẾ HOÀN HẢO', 'thay thế hoàn hảo'],
    ['NGHIỆM GÓC', 'nghiệm góc'],
    ['HÀNG BỔ SUNG HOÀN HẢO', 'hàng bổ sung hoàn hảo'],
    ['SAU KHI', 'sau khi'],
    ['NGUY CƠ ĐẠO ĐỨC', 'nguy cơ đạo đức'],
    ['TRƯỚC KHI', 'trước khi'],
    ['ĐƯỜNG CẦU LAO ĐỘNG', 'đường cầu lao động'],
    ['TỐI ĐA HÓA MỨC TIÊU DÙNG TRÊN MỖI LAO ĐỘNG', 'tối đa hóa mức tiêu dùng trên mỗi lao động'],
    ['TỶ GIÁ THẢ NỔI', 'tỷ giá thả nổi'],
    ['VÔ HIỆU', 'vô hiệu'],
    ['ĐỒNG NỘI TỆ TĂNG GIÁ MẠNH', 'đồng nội tệ tăng giá mạnh'],
    ['TỶ GIÁ CỐ ĐỊNH', 'tỷ giá cố định'],
    ['ĐỢT TĂNG THUẾ TƯƠNG ĐƯƠNG TRONG TƯƠNG LAI', 'đợt tăng thuế tương đương trong tương lai'],
    ['HOÀN TOÀN NGƯỢC LẠI', 'hoàn toàn ngược lại'],
    ['NHTW PHẢI TĂNG LÃI SUẤT DANH NGHĨA NHIỀU HƠN', 'NHTW phải tăng lãi suất danh nghĩa nhiều hơn'],
    ['LÃI SUẤT THỰC TẾ', 'lãi suất thực tế'],
    ['MỚI TĂNG LÊN', 'mới tăng lên'],
    ['ĐÌNH LẠM', 'đình lạm'],
    ['CHỈ', 'chỉ'],
    ['MỨC', 'mức'],
    ['TỐC ĐỘ', 'tốc độ'],
    ['PHẢI', 'phải'],
    ['CHỈ ĐÚNG', 'chỉ đúng'],
    ['TỐI ĐA', 'tối đa'],
    ['MỤC TIÊU', 'mục tiêu']
  ];
  tfCaps.forEach(([from, to]) => {
    const reg = new RegExp(`(^|[^\\p{L}])${from}([^\\p{L}]|$)`, 'gu');
    content = content.replace(reg, (m, p1, p2) => p1 + to + p2);
  });

  return content;
});

// -------------------------------------------------------------
// 7. DATA/VIDEOS.JS
// -------------------------------------------------------------
updateFile('videos.js', content => {
  const videoCaps = [
    ['CHƯƠNG 1: TỔNG QUAN KINH TẾ HỌC', 'Chương 1: Tổng quan kinh tế học'],
    ['CHƯƠNG 2: CUNG CẦU & CÂN BẰNG THỊ TRƯỜNG', 'Chương 2: Cung - cầu và cân bằng thị trường'],
    ['CHƯƠNG 3: ĐỘ CO GIÃN', 'Chương 3: Độ co giãn'],
    ['CHƯƠNG 4: CAN THIỆP CHÍNH PHỦ (GIÁ TRẦN, SÀN & THUẾ)', 'Chương 4: Can thiệp chính phủ (Giá trần, sàn và thuế)'],
    ['CHƯƠNG 5: CHI PHÍ SẢN XUẤT & DOANH THU', 'Chương 5: Chi phí sản xuất và doanh thu'],
    ['CHƯƠNG 6: CẤU TRÚC THỊ TRƯỜNG & ĐỘC QUYỀN', 'Chương 6: Cấu trúc thị trường và độc quyền'],
    ['CHƯƠNG 7: ĐO LƯỜNG SẢN LƯỢNG QUỐC GIA (GDP)', 'Chương 7: Đo lường sản lượng quốc gia (GDP)'],
    ['CHƯƠNG 8: TĂNG TRƯỞNG & NĂNG SUẤT', 'Chương 8: Tăng trưởng và năng suất'],
    ['CHƯƠNG 9: LẠM PHÁT & CHỈ SỐ CPI', 'Chương 9: Lạm phát và chỉ số CPI'],
    ['CHƯƠNG 10: HỆ THỐNG NGÂN HÀNG & CHÍNH SÁCH TIỀN TỆ', 'Chương 10: Hệ thống ngân hàng và chính sách tiền tệ'],
    ['CHƯƠNG 11: TỔNG CẦU & TỔNG CUNG (AD - AS)', 'Chương 11: Tổng cầu và tổng cung (AD - AS)'],
    ['CHƯƠNG 12: KINH TẾ VĨ MÔ MỞ & TỶ GIÁ', 'Chương 12: Kinh tế vĩ mô mở và tỷ giá'],
    ['NẰM DƯỚI', 'nằm dưới'],
    ['NẰM TRÊN', 'nằm trên'],
    ['CUỐI CÙNG', 'cuối cùng'],
    ['NHTW MUA', 'NHTW mua'],
    ['NHTW BÁN', 'NHTW bán'],
    ['TĂNG', 'tăng'],
    ['GIẢM', 'giảm']
  ];
  videoCaps.forEach(([from, to]) => {
    content = content.replace(new RegExp(from, 'g'), to);
  });

  return content;
});

// -------------------------------------------------------------
// 8. DATA/WORKED_PROBLEMS.JS
// -------------------------------------------------------------
updateFile('worked_problems.js', content => {
  // Sửa lỗi unwrapped math
  content = content.replace(/(?<!\$)\\delta(?!\$)/g, '$\\delta$');
  content = content.replace(/(?<!\$)\\pi(?!\$)/g, '$\\pi$');

  const probCaps = [
    ['DẠNG 1: CUNG CẦU & CHÍNH SÁCH', 'Dạng 1: Cung - cầu và can thiệp chính sách'],
    ['DẠNG 2: TỐI ƯU HÓA TIÊU DÙNG', 'Dạng 2: Tối ưu hóa lựa chọn người tiêu dùng'],
    ['DẠNG 3: CHI PHÍ & CẠNH TRANH HOÀN HẢO', 'Dạng 3: Chi phí sản xuất và cạnh tranh hoàn hảo'],
    ['DẠNG 4: ĐỘC QUYỀN & PHÂN BIỆT GIÁ', 'Dạng 4: Độc quyền thuần túy và phân biệt giá'],
    ['DẠNG 5: HẠCH TOÁN GDP & CHUỖI CHỈ TIÊU SNA', 'Dạng 5: Hạch toán GDP và hệ thống tài khoản SNA'],
    ['DẠNG 6: MÔ HÌNH IS - LM TOÀN DIỆN', 'Dạng 6: Mô hình cân bằng IS - LM toàn diện'],
    ['DẠNG 7: PHÂN RÃ SLUTSKY & HICKS', 'Dạng 7: Phân rã hiệu ứng Slutsky và Hicks'],
    ['DẠNG 8: HÀM THỎA DỤNG ĐẶC THÙ (LEONTIEF & CORNER)', 'Dạng 8: Hàm thỏa dụng đặc thù (Leontief và Corner Solution)'],
    ['DẠNG 9: ĐỘC QUYỀN NHÓM COURNOT & STACKELBERG', 'Dạng 9: Độc quyền nhóm Cournot và Stackelberg'],
    ['DẠNG 10: TĂNG TRƯỞNG SOLOW & QUY TẮC VÀNG', 'Dạng 10: Mô hình tăng trưởng Solow và quy tắc vàng'],
    ['DẠNG 11: MÔ HÌNH MUNDELL - FLEMING (TỶ GIÁ THẢ NỔI & TỶ GIÁ CỐ ĐỊNH)', 'Dạng 11: Mô hình Mundell - Fleming (Tỷ giá thả nổi và cố định)'],
    ['DẠNG 12: QUY TẮC TAYLOR & CHÍNH SÁCH TIỀN TỆ', 'Dạng 12: Quy tắc Taylor và chính sách tiền tệ'],
    ['KHÔNG ĐỔI', 'không đổi'],
    ['VÔ HIỆU', 'vô hiệu'],
    ['HIỆU LỰC TỐI ĐA', 'hiệu lực tối đa'],
    ['LÃI SUẤT THỰC TẾ', 'lãi suất thực tế'],
    ['SẼ TĂNG LÊN', 'sẽ tăng lên']
  ];
  probCaps.forEach(([from, to]) => {
    content = content.replace(new RegExp(from, 'g'), to);
  });

  return content;
});

// -------------------------------------------------------------
// 9. DATA/FORMULAS.JS
// -------------------------------------------------------------
updateFile('formulas.js', content => {
  // Sửa lỗi unwrapped \pi
  content = content.replace(/(?<!\$)\\pi(?!\$)/g, '$\\pi$');
  return content;
});

// -------------------------------------------------------------
// 10. INDEX.HTML & JS/APP.JS
// -------------------------------------------------------------
// Tăng version cache-busting trong index.html lên v2.5.0
const indexPath = path.join(baseDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\?v=\d+\.\d+\.\d+/g, '?v=2.5.0');
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ Đã cập nhật version cache-busting v2.5.0 trong index.html');

console.log('=== HOÀN TẤT CHUẨN HÓA TOÀN DIỆN! ===');
