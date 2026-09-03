// Script xây dựng ngân hàng 65 câu hỏi trắc nghiệm chuyên sâu chuẩn A+
const fs = require('fs');
const path = require('path');

// Đọc mã nguồn cũ để lấy 35 câu hỏi nền tảng
let oldContent = fs.readFileSync(path.join(__dirname, 'data', 'quiz.js'), 'utf8');
// Trích xuất mảng
let baseQuestions;
try {
  const sandbox = {};
  const fn = new Function('sandbox', oldContent + '\nsandbox.QUIZ_DATA = QUIZ_DATA;');
  fn(sandbox);
  baseQuestions = sandbox.QUIZ_DATA;
} catch (e) {
  console.error("Lỗi đọc câu hỏi cũ:", e);
  process.exit(1);
}

// Bổ sung thuộc tính chapter và difficulty cho 35 câu hỏi đầu
const chapterMapping = {
  q1: { chapter: 1, difficulty: "apply" },
  q2: { chapter: 1, difficulty: "understand" },
  q3: { chapter: 1, difficulty: "remember" },
  q4: { chapter: 2, difficulty: "understand" },
  q5: { chapter: 3, difficulty: "apply" },
  q6: { chapter: 3, difficulty: "apply" },
  q7: { chapter: 3, difficulty: "understand" },
  q8: { chapter: 4, difficulty: "understand" },
  q9: { chapter: 4, difficulty: "apply" },
  q10: { chapter: 4, difficulty: "advanced" },
  q11: { chapter: 5, difficulty: "remember" },
  q12: { chapter: 5, difficulty: "apply" },
  q13: { chapter: 5, difficulty: "advanced" },
  q14: { chapter: 6, difficulty: "understand" },
  q15: { chapter: 6, difficulty: "apply" },
  q16: { chapter: 6, difficulty: "advanced" },
  q17: { chapter: 7, difficulty: "understand" },
  q18: { chapter: 7, difficulty: "apply" },
  q19: { chapter: 8, difficulty: "remember" },
  q20: { chapter: 8, difficulty: "understand" },
  q21: { chapter: 9, difficulty: "apply" },
  q22: { chapter: 9, difficulty: "understand" },
  q23: { chapter: 9, difficulty: "understand" },
  q24: { chapter: 10, difficulty: "apply" },
  q25: { chapter: 10, difficulty: "understand" },
  q26: { chapter: 10, difficulty: "advanced" },
  q27: { chapter: 11, difficulty: "understand" },
  q28: { chapter: 11, difficulty: "apply" },
  q29: { chapter: 11, difficulty: "advanced" },
  q30: { chapter: 12, difficulty: "understand" },
  q31: { chapter: 12, difficulty: "apply" },
  q32: { chapter: 12, difficulty: "understand" },
  q33: { chapter: 12, difficulty: "apply" },
  q34: { chapter: 2, difficulty: "advanced" },
  q35: { chapter: 7, difficulty: "advanced" }
};

baseQuestions.forEach(q => {
  if (chapterMapping[q.id]) {
    q.chapter = chapterMapping[q.id].chapter;
    q.difficulty = chapterMapping[q.id].difficulty;
  } else {
    q.chapter = q.category === 'micro' ? 2 : 7;
    q.difficulty = "understand";
  }
});

// 30 Câu hỏi thực chiến tuyển chọn mới (q36 -> q65)
const newQuestions = [
  // --- CHƯƠNG 1 ---
  {
    id: "q36",
    category: "micro",
    chapter: 1,
    topic: "Lợi thế so sánh & Thương mại quốc tế",
    difficulty: "apply",
    question: "Anh An mất 1 giờ làm 1 cái bánh và 2 giờ may 1 cái áo. Chị Bình mất 2 giờ làm 1 cái bánh và 3 giờ may 1 cái áo. Ai có lợi thế so sánh về sản xuất bánh?",
    options: [
      "Anh An vì chi phí cơ hội làm 1 cái bánh là 0.5 cái áo (< 0.67 cái áo của chị Bình).",
      "Chị Bình vì làm bánh mất nhiều thời gian hơn.",
      "Anh An vì có lợi thế tuyệt đối ở cả 2 sản phẩm.",
      "Cả hai người có chi phí cơ hội như nhau."
    ],
    correct: 0,
    explanation: "Chi phí cơ hội làm 1 bánh của Anh An = 1h / 2h = 0.5 cái áo. Chi phí cơ hội làm 1 bánh của Chị Bình = 2h / 3h = 0.67 cái áo. Anh An có chi phí cơ hội thấp hơn nên có lợi thế so sánh về bánh.",
    isTrap: true,
    trapAdvice: "Đừng nhầm giữa lợi thế tuyệt đối (ai làm nhanh hơn) và lợi thế so sánh (ai có chi phí cơ hội thấp hơn)!"
  },
  {
    id: "q37",
    category: "micro",
    chapter: 1,
    topic: "Tư duy cận biên (Marginal Thinking)",
    difficulty: "advanced",
    question: "Một hãng hàng không có chuyến bay 200 chỗ với tổng chi phí 100.000 USD (bình quân 500 USD/vé). Còn 1 tiếng trước giờ bay chuyến bay còn trống 5 chỗ. Một hành khách sẵn sàng trả 300 USD cho 1 vé chờ. Hãng có nên bán không?",
    options: [
      "Không nên bán vì giá 300 USD thấp hơn chi phí trung bình 500 USD (sẽ bị lỗ 200 USD).",
      "Nên bán nếu chi phí cận biên để phục vụ thêm người này (đồ ăn, nhiên liệu tăng thêm) nhỏ hơn 300 USD.",
      "Không nên bán vì sẽ làm giảm uy tín thương hiệu.",
      "Nên bán với điều kiện hành khách phải mua bảo hiểm bổ sung 200 USD."
    ],
    correct: 1,
    explanation: "Quyết định kinh tế hợp lý dựa trên so sánh Lợi ích biên (MB) và Chi phí biên (MC). Chi phí cố định thuê máy bay 100.000 USD là chi phí chìm. Đón thêm 1 khách chỉ tốn thêm một gói đậu phộng và vài lít xăng (MC ≈ 20 USD). Vì MB = 300 USD > MC ≈ 20 USD nên hãng tăng thêm được lợi nhuận ròng 280 USD!",
    isTrap: true,
    trapAdvice: "Bẫy chi phí chìm (Sunk cost fallacy) kinh điển trong giáo trình Mankiw! Chi phí bình quân trong quá khứ không quyết định việc bán vé phút chót."
  },

  // --- CHƯƠNG 2 ---
  {
    id: "q38",
    category: "micro",
    chapter: 2,
    topic: "Hàng hóa thay thế & bổ sung",
    difficulty: "understand",
    question: "Nếu cà phê và trà là hai hàng hóa thay thế cho nhau, khi giá cà phê tăng vọt thì thị trường trà sẽ ghi nhận:",
    options: [
      "Đường cầu về trà dịch chuyển sang trái, giá trà giảm.",
      "Đường cầu về trà dịch chuyển sang phải, giá và lượng trà cân bằng đều tăng.",
      "Đường cung về trà dịch chuyển sang phải.",
      "Lượng cầu về trà giảm do hiệu ứng thu nhập."
    ],
    correct: 1,
    explanation: "Khi giá cà phê tăng, người tiêu dùng chuyển sang uống trà thay thế -> Cầu về trà tăng (đường cầu trà dịch phải) -> Cả giá P* và lượng Q* của trà đều tăng.",
    isTrap: false,
    trapAdvice: "Hàng thay thế: P hàng này tăng làm Cầu hàng kia tăng (dịch phải)."
  },
  {
    id: "q39",
    category: "micro",
    chapter: 2,
    topic: "Cân bằng thị trường & Dư thừa/Thiếu hụt",
    difficulty: "apply",
    question: "Hàm cầu là QD = 120 - 2P và hàm cung là QS = 30 + P. Tại mức giá P = 40, thị trường đang ở trạng thái nào?",
    options: [
      "Cân bằng hoàn hảo với Q = 50.",
      "Thiếu hụt 30 đơn vị sản phẩm.",
      "Dư thừa 30 đơn vị sản phẩm.",
      "Dư thừa 40 đơn vị sản phẩm."
    ],
    correct: 2,
    explanation: "Tại P = 40: QD = 120 - 2(40) = 40; QS = 30 + 40 = 70. Vì QS > QD nên thị trường dư thừa QS - QD = 70 - 40 = 30 đơn vị.",
    isTrap: false,
    trapAdvice: "Chỉ cần thay mức giá đề bài cho vào QD và QS rồi so sánh."
  },
  {
    id: "q40",
    category: "micro",
    chapter: 2,
    topic: "Dịch chuyển đồng thời Cung & Cầu",
    difficulty: "advanced",
    question: "Khi thu nhập của người dân tăng (hàng hóa thông thường) đồng thời giá nguyên liệu đầu vào sản xuất giảm mạnh, điều chắc chắn xảy ra trên thị trường là:",
    options: [
      "Giá cân bằng P* chắc chắn tăng.",
      "Giá cân bằng P* chắc chắn giảm.",
      "Lượng cân bằng Q* chắc chắn tăng.",
      "Lượng cân bằng Q* chắc chắn giảm."
    ],
    correct: 2,
    explanation: "Thu nhập tăng -> Cầu dịch phải (P tăng, Q tăng). Giá nguyên liệu giảm -> Cung dịch phải (P giảm, Q tăng). Cả 2 sự kiện đều làm Q tăng -> Lượng cân bằng Q* CHẮC CHẮN TĂNG. Còn giá P* chưa xác định được.",
    isTrap: true,
    trapAdvice: "Cầu dịch phải + Cung dịch phải => Q* chắc chắn tăng, P* chưa xác định."
  },

  // --- CHƯƠNG 3 ---
  {
    id: "q41",
    category: "micro",
    chapter: 3,
    topic: "Độ co giãn chéo của cầu (Cross-price Elasticity)",
    difficulty: "apply",
    question: "Nếu độ co giãn chéo của cầu giữa hai mặt hàng X và Y là Exy = -1.8, hai mặt hàng này có mối quan hệ gì?",
    options: [
      "Hai hàng hóa thay thế cho nhau.",
      "Hai hàng hóa bổ sung cho nhau.",
      "Hai hàng hóa độc lập không liên quan.",
      "X là hàng xa xỉ còn Y là hàng thiết yếu."
    ],
    correct: 1,
    explanation: "Exy = %ΔQx / %ΔPy. Khi Exy < 0 (dấu âm), giá Y tăng làm lượng cầu X giảm -> Người tiêu dùng tiêu dùng đồng thời cả 2 -> X và Y là hai hàng hóa bổ sung (Complements).",
    isTrap: false,
    trapAdvice: "Exy > 0: Thay thế; Exy < 0: Bổ sung; Exy = 0: Độc lập."
  },
  {
    id: "q42",
    category: "micro",
    chapter: 3,
    topic: "Độ co giãn theo thu nhập (Income Elasticity)",
    difficulty: "understand",
    question: "Khi nền kinh tế rơi vào suy thoái và thu nhập giảm sút, doanh thu của các chuỗi bán lẻ mì gói giá rẻ tăng vọt. Mì gói trong trường hợp này là:",
    options: [
      "Hàng hóa thiết yếu với 0 < EI < 1.",
      "Hàng hóa cấp thấp (thứ cấp) với EI < 0.",
      "Hàng hóa xa xỉ với EI > 1.",
      "Hàng hóa Giffen vi phạm quy luật cung cầu."
    ],
    correct: 1,
    explanation: "Khi thu nhập giảm mà lượng cầu tăng (biến thiên nghịch chiều) -> EI < 0 -> Đây là định nghĩa của Hàng hóa cấp thấp / thứ cấp (Inferior good).",
    isTrap: false,
    trapAdvice: "Hàng thứ cấp có độ co giãn theo thu nhập mang dấu ÂM."
  },
  {
    id: "q43",
    category: "micro",
    chapter: 3,
    topic: "Co giãn và Doanh thu cực đại",
    difficulty: "advanced",
    question: "Một bảo tàng có hàm cầu vé tham quan là P = 120 - 0.5Q. Để tối đa hóa tổng doanh thu bán vé, bảo tàng nên đặt giá vé là bao nhiêu?",
    options: [
      "120 USD",
      "60 USD",
      "40 USD",
      "0 USD (mở cửa miễn phí)"
    ],
    correct: 1,
    explanation: "Doanh thu TR = P x Q = (120 - 0.5Q)Q = 120Q - 0.5Q^2. Đạo hàm MR = 120 - Q = 0 => Q = 120. Thay vào hàm cầu: P = 120 - 0.5(120) = 60 USD. Tại đây |Ed| = 1.",
    isTrap: true,
    trapAdvice: "Mẹo thi nhanh: Với đường cầu tuyến tính P = a - bQ, mức giá tối đa hóa doanh thu luôn bằng đúng một nửa tung độ góc P = a / 2 = 120 / 2 = 60 USD!"
  },

  // --- CHƯƠNG 4 ---
  {
    id: "q44",
    category: "micro",
    chapter: 4,
    topic: "Tổn thất vô ích (DWL) của thuế",
    difficulty: "apply",
    question: "Nếu chính phủ tăng gấp đôi mức thuế suất đơn vị đánh vào một mặt hàng (từ t lên 2t), thì Tổn thất vô ích (Deadweight Loss) của xã hội sẽ:",
    options: [
      "Tăng gấp đôi (2 lần).",
      "Tăng gấp 4 lần.",
      "Không thay đổi.",
      "Giảm một nửa do số thu ngân sách tăng."
    ],
    correct: 1,
    explanation: "Diện tích tam giác tổn thất vô ích DWL = 0.5 x t x ΔQ. Vì ΔQ tỷ lệ thuận với t, nên diện tích DWL tỷ lệ thuận với BÌNH PHƯƠNG mức thuế (t^2). Khi thuế tăng 2 lần, DWL tăng 2^2 = 4 lần!",
    isTrap: true,
    trapAdvice: "Mankiw nhấn mạnh: Tổn thất vô ích tăng theo cấp số nhân bậc hai của thuế suất!"
  },
  {
    id: "q45",
    category: "micro",
    chapter: 4,
    topic: "Độ co giãn và tổn thất vô ích",
    difficulty: "understand",
    question: "Để giảm thiểu tối đa Tổn thất vô ích (DWL) khi cần thu ngân sách, chính phủ nên lựa chọn đánh thuế vào các mặt hàng có đặc điểm:",
    options: [
      "Cung và cầu đều rất co giãn theo giá.",
      "Cung và cầu đều rất kém co giãn (ít co giãn) theo giá.",
      "Hàng hóa xa xỉ cao cấp có nhiều phương án thay thế.",
      "Hàng hóa xuất khẩu chủ lực."
    ],
    correct: 1,
    explanation: "Khi cung và cầu kém co giãn (|E| nhỏ), lượng giao dịch biến động rất ít khi có thuế (ΔQ rất nhỏ), do đó tam giác DWL là nhỏ nhất. Đó là lý do chính phủ thường đánh thuế tiêu thụ đặc biệt vào xăng, thuốc lá, rượu bia.",
    isTrap: false,
    trapAdvice: "Cung/cầu càng kém co giãn -> DWL càng nhỏ."
  },
  {
    id: "q46",
    category: "micro",
    chapter: 4,
    topic: "Lựa chọn tiêu dùng tối ưu (Consumer Choice)",
    difficulty: "advanced",
    question: "Một người tiêu dùng có hàm thỏa dụng U = X.Y, thu nhập I = 120 USD. Giá Px = 4 USD, Py = 6 USD. Giỏ hàng tối ưu (X*, Y*) là:",
    options: [
      "X* = 15, Y* = 10",
      "X* = 20, Y* = 10",
      "X* = 10, Y* = 15",
      "X* = 30, Y* = 0"
    ],
    correct: 0,
    explanation: "Hàm Cobb-Douglas số mũ bằng nhau (alpha=beta=1) nên thu nhập được chia đều: Px.X = Py.Y = I/2 = 60 USD. Suy ra X* = 60 / 4 = 15, Y* = 60 / 6 = 10. Hoặc giải hệ: MUx/Px = MUy/Py => Y/4 = X/6 và 4X + 6Y = 120.",
    isTrap: false,
    trapAdvice: "Hàm Cobb-Douglas U = X^a * Y^b: Chi tiêu cho X = a/(a+b) * I, cho Y = b/(a+b) * I."
  },

  // --- CHƯƠNG 5 ---
  {
    id: "q47",
    category: "micro",
    chapter: 5,
    topic: "Mối quan hệ giữa MC và ATC",
    difficulty: "understand",
    question: "Khi Chi phí cận biên nhỏ hơn Chi phí trung bình (MC < ATC), thì khi tăng sản lượng, Chi phí trung bình (ATC) sẽ:",
    options: [
      "Tăng lên.",
      "Giảm xuống.",
      "Đạt giá trị cực tiểu.",
      "Bằng 0."
    ],
    correct: 1,
    explanation: "Quy tắc điểm trung bình: Giống như điểm số của bạn, nếu điểm bài kiểm tra kế tiếp (MC) thấp hơn điểm trung bình hiện tại (ATC), nó sẽ kéo điểm trung bình giảm xuống. Đường MC luôn cắt ATC tại điểm cực tiểu của ATC.",
    isTrap: false,
    trapAdvice: "MC < ATC => ATC dốc xuống (giảm). MC > ATC => ATC dốc lên (tăng). MC = ATC => ATC đạt cực tiểu."
  },
  {
    id: "q48",
    category: "micro",
    chapter: 5,
    topic: "Đường cung ngắn hạn của doanh nghiệp cạnh tranh",
    difficulty: "apply",
    question: "Đường cung ngắn hạn của một doanh nghiệp trong thị trường cạnh tranh hoàn hảo là:",
    options: [
      "Toàn bộ đường Chi phí cận biên (MC).",
      "Phần đường Chi phí cận biên (MC) nằm phía trên điểm cực tiểu của đường AVC.",
      "Phần đường Chi phí cận biên (MC) nằm phía trên điểm cực tiểu của đường ATC.",
      "Đường Chi phí biến đổi trung bình (AVC)."
    ],
    correct: 1,
    explanation: "Doanh nghiệp sản xuất tại P = MC miễn là P >= AVC_min (không đóng cửa). Nếu P < AVC_min thì Q = 0. Do đó, đường cung ngắn hạn chính là nhánh đường MC nằm trên AVC_min.",
    isTrap: true,
    trapAdvice: "Bẫy thi cực phổ biến: Học sinh hay chọn phần trên ATC_min. Đó là đường cung DÀI HẠN, còn NGẮN HẠN là nằm trên AVC_min!"
  },
  {
    id: "q49",
    category: "micro",
    chapter: 5,
    topic: "Lợi thế kinh tế theo quy mô (Economies of Scale)",
    difficulty: "remember",
    question: "Khi sản lượng trong dài hạn tăng lên và Chi phí trung bình dài hạn (LRATC) giảm xuống, doanh nghiệp đang trải qua:",
    options: [
      "Bất lợi kinh tế theo quy mô (Diseconomies of scale).",
      "Lợi thế kinh tế theo quy mô (Economies of scale).",
      "Năng suất cận biên giảm dần trong ngắn hạn.",
      "Hiệu suất không đổi theo quy mô."
    ],
    correct: 1,
    explanation: "Lợi thế kinh tế theo quy mô xảy ra khi mở rộng quy mô giúp chuyên môn hóa lao động, mua nguyên liệu giá sỉ, làm giảm chi phí bình quân dài hạn LRATC.",
    isTrap: false,
    trapAdvice: "LRATC giảm khi Q tăng = Lợi thế quy mô. LRATC tăng khi Q tăng = Bất lợi quy mô."
  },

  // --- CHƯƠNG 6 ---
  {
    id: "q50",
    category: "micro",
    chapter: 6,
    topic: "Chỉ số Lerner & Quyền lực độc quyền",
    difficulty: "advanced",
    question: "Một nhà độc quyền có chi phí cận biên MC = 20 USD và độ co giãn của cầu theo giá là Ed = -3. Để tối đa hóa lợi nhuận, nhà độc quyền này nên đặt giá bán là:",
    options: [
      "20 USD",
      "30 USD",
      "40 USD",
      "60 USD"
    ],
    correct: 1,
    explanation: "Công thức định giá nghịch đảo độ co giãn: P = MC / (1 - 1/|Ed|) = 20 / (1 - 1/3) = 20 / (2/3) = 30 USD. Hoặc dùng chỉ số Lerner: (P - MC)/P = 1/|Ed| => (P - 20)/P = 1/3 => P = 30 USD.",
    isTrap: false,
    trapAdvice: "Công thức định giá độc quyền chuẩn Mankiw: P = MC x [|Ed| / (|Ed| - 1)]."
  },
  {
    id: "q51",
    category: "micro",
    chapter: 6,
    topic: "Phân biệt giá cấp 1 (First-degree Price Discrimination)",
    difficulty: "advanced",
    question: "Khi một nhà độc quyền thực hiện phân biệt giá hoàn hảo (Phân biệt giá cấp 1), điều gì sẽ xảy ra với thặng dư tiêu dùng (CS) và Tổn thất vô ích (DWL)?",
    options: [
      "CS đạt cực đại, DWL đạt cực đại.",
      "CS = 0, DWL = 0 và Toàn bộ thặng dư xã hội chuyển thành lợi nhuận của nhà độc quyền.",
      "CS = 0 nhưng DWL tăng lên gấp đôi.",
      "CS tăng lên do người tiêu dùng mua được nhiều hàng hơn."
    ],
    correct: 1,
    explanation: "Nhà độc quyền bán cho mỗi khách hàng đúng bằng mức giá sẵn lòng chi trả tối đa (WTP). Do đó CS = 0. Nhà độc quyền sản xuất đến mức P = MC (sản lượng cạnh tranh) nên không có giao dịch nào bị bỏ lỡ => DWL = 0!",
    isTrap: true,
    trapAdvice: "Phân biệt giá hoàn hảo KHÔNG CÓ TỔN THẤT VÔ ÍCH (DWL = 0), nhưng người tiêu dùng bị tước đoạt toàn bộ thặng dư!"
  },
  {
    id: "q52",
    category: "micro",
    chapter: 6,
    topic: "Cạnh tranh độc quyền trong dài hạn",
    difficulty: "understand",
    question: "Trong dài hạn, trạng thái cân bằng của một doanh nghiệp trong thị trường cạnh tranh độc quyền có đặc điểm:",
    options: [
      "P = MC và P = ATC_min giống cạnh tranh hoàn hảo.",
      "P > MC và P = ATC (Lợi nhuận kinh tế bằng 0, có năng lực sản xuất dư thừa).",
      "Thu được siêu lợi nhuận kinh tế bền vững như độc quyền thuần túy.",
      "P < AVC nên buộc phải rời bỏ ngành."
    ],
    correct: 1,
    explanation: "Do tự do gia nhập ngành, trong dài hạn lợi nhuận kinh tế bằng 0 (P = ATC). Nhưng vì sản phẩm có sự phân biệt nên đường cầu dốc xuống, đường cầu tiếp xúc với ATC tại nhánh dốc xuống của ATC (chứ không phải cực tiểu ATC) => P > MC và sinh ra Năng lực thừa (Excess capacity).",
    isTrap: false,
    trapAdvice: "Cạnh tranh độc quyền dài hạn: Lợi nhuận kinh tế = 0, P = ATC nhưng P > MC."
  },

  // --- CHƯƠNG 7 ---
  {
    id: "q53",
    category: "macro",
    chapter: 7,
    topic: "Đầu tư (I) trong GDP",
    difficulty: "understand",
    question: "Giao dịch nào sau đây ĐƯỢC TÍNH vào thành phần Đầu tư (I) trong GDP của nền kinh tế?",
    options: [
      "Một hộ gia đình mua 1.000 cổ phiếu mới phát hành của VinFast.",
      "Một hộ gia đình mua một căn hộ chung cư mới xây để ở.",
      "Một người gửi 500 triệu đồng vào tài khoản tiết kiệm ngân hàng kỳ hạn 1 năm.",
      "Một doanh nghiệp mua lại nhà xưởng cũ từ một doanh nghiệp giải thể."
    ],
    correct: 1,
    explanation: "Trong kinh tế vĩ mô, Đầu tư (I) là mua sắm tư bản mới: máy móc mới, hàng tồn kho mới, và NHÀ Ở MỚI của hộ gia đình. Mua cổ phiếu, gửi tiết kiệm là 'đầu tư tài chính' cá nhân, không tạo ra tư bản thực tế mới nên không tính vào I.",
    isTrap: true,
    trapAdvice: "Bẫy từ ngữ: Ngôn ngữ hàng ngày gọi mua cổ phiếu là 'đầu tư', nhưng kinh tế học vĩ mô coi đó là Tiết kiệm (Saving), không phải Đầu tư (I)!"
  },
  {
    id: "q54",
    category: "macro",
    chapter: 7,
    topic: "GDP Danh nghĩa vs GDP Thực tế",
    difficulty: "apply",
    question: "Năm 2024 (năm gốc) GDP danh nghĩa là 500 tỷ USD. Năm 2025 GDP danh nghĩa là 600 tỷ USD và Chỉ số điều chỉnh GDP (GDP Deflator) là 120. Tốc độ tăng trưởng GDP thực tế năm 2025 là:",
    options: [
      "20%",
      "0% (không tăng trưởng thực tế)",
      "10%",
      "50%"
    ],
    correct: 1,
    explanation: "GDP thực tế 2025 = (GDP danh nghĩa / GDP Deflator) x 100 = (600 / 120) x 100 = 500 tỷ USD. Vì năm 2024 là năm gốc nên GDP thực tế 2024 = 500 tỷ. Tăng trưởng thực tế = (500 - 500) / 500 = 0%! Nền kinh tế chỉ tăng giá danh nghĩa chứ sản lượng thực không hề tăng.",
    isTrap: true,
    trapAdvice: "GDP danh nghĩa tăng 20% nhưng giá cũng tăng 20% (Deflator = 120) => Tăng trưởng thực tế bằng 0%!"
  },

  // --- CHƯƠNG 8 ---
  {
    id: "q55",
    category: "macro",
    chapter: 8,
    topic: "Hàm sản xuất & Nguồn gốc tăng trưởng",
    difficulty: "remember",
    question: "Theo hàm sản xuất Y = A.F(L, K, H, N), yếu tố 'H' đại diện cho:",
    options: [
      "Tư bản thể chất (Physical Capital) như máy móc, nhà xưởng.",
      "Vốn nhân lực (Human Capital) bao gồm kiến thức, kỹ năng và sức khỏe của người lao động.",
      "Tài nguyên thiên nhiên (Natural Resources) như đất đai, khoáng sản.",
      "Trình độ công nghệ (Technological Knowledge)."
    ],
    correct: 1,
    explanation: "K là tư bản thể chất, H là vốn nhân lực (Human capital), N là tài nguyên thiên nhiên, A là công nghệ.",
    isTrap: false,
    trapAdvice: "H = Human Capital (Vốn con người/vốn nhân lực)."
  },
  {
    id: "q56",
    category: "macro",
    chapter: 8,
    topic: "Chính sách hướng nội vs hướng ngoại",
    difficulty: "understand",
    question: "Chính sách phát triển kinh tế nào sau đây được các nhà kinh tế học hiện đại đánh giá là thúc đẩy tăng trưởng nhanh và bền vững hơn?",
    options: [
      "Chính sách hướng nội (Inward-oriented): Dựng hàng rào thuế quan bảo hộ sản xuất trong nước, hạn chế nhập khẩu.",
      "Chính sách hướng ngoại (Outward-oriented): Hội nhập thương mại quốc tế, thu hút FDI và tiếp thu công nghệ thế giới.",
      "Quốc hữu hóa toàn bộ các ngành công nghiệp tư nhân.",
      "Cấm xuất khẩu các mặt hàng nông sản thô."
    ],
    correct: 1,
    explanation: "Mankiw dẫn chứng các nước Đông Á (Hàn Quốc, Singapore, Việt Nam) thành công nhờ chính sách hướng ngoại, mở cửa thương mại và tận dụng lợi thế quy mô thế giới.",
    isTrap: false,
    trapAdvice: "Chính sách hướng ngoại vượt trội so với chính sách thay thế nhập khẩu hướng nội."
  },

  // --- CHƯƠNG 9 ---
  {
    id: "q57",
    category: "macro",
    chapter: 9,
    topic: "Tỷ lệ thất nghiệp tự nhiên & Thất nghiệp chu kỳ",
    difficulty: "apply",
    question: "Một nền kinh tế có tỷ lệ thất nghiệp thực tế là 7.5%, trong khi tỷ lệ thất nghiệp tự nhiên là 4.5%. Tỷ lệ thất nghiệp chu kỳ (Cyclical Unemployment) là:",
    options: [
      "12%",
      "3.0%",
      "4.5%",
      "-3.0%"
    ],
    correct: 1,
    explanation: "Thất nghiệp thực tế = Thất nghiệp tự nhiên (Ma sát + Cơ cấu) + Thất nghiệp chu kỳ. Suy ra Thất nghiệp chu kỳ = 7.5% - 4.5% = 3.0%. Nền kinh tế đang rơi vào suy thoái.",
    isTrap: false,
    trapAdvice: "Thất nghiệp chu kỳ = Thất nghiệp thực tế - Thất nghiệp tự nhiên."
  },
  {
    id: "q58",
    category: "macro",
    chapter: 9,
    topic: "Lãi suất danh nghĩa vs Lãi suất thực tế (Hiệu ứng Fisher)",
    difficulty: "apply",
    question: "Bạn gửi tiết kiệm ngân hàng với lãi suất danh nghĩa 6%/năm. Trong năm đó, tỷ lệ lạm phát là 4%/năm. Lãi suất thực tế (Real Interest Rate) bạn nhận được xấp xỉ là:",
    options: [
      "10%/năm",
      "2%/năm",
      "1.5%/năm",
      "-2%/năm"
    ],
    correct: 1,
    explanation: "Phương trình Fisher: Lãi suất thực tế r ≈ Lãi suất danh nghĩa i - Tỷ lệ lạm phát π = 6% - 4% = 2%/năm. Sức mua thực tế của bạn chỉ tăng 2%.",
    isTrap: false,
    trapAdvice: "Lãi suất thực = Lãi suất danh nghĩa - Lạm phát."
  },
  {
    id: "q59",
    category: "macro",
    chapter: 9,
    topic: "Ai hưởng lợi và ai thiệt hại khi lạm phát bất ngờ xảy ra?",
    difficulty: "advanced",
    question: "Khi lạm phát thực tế xảy ra CAO HƠN nhiều so với mức lạm phát dự kiến, của cải sẽ được tái phân phối từ:",
    options: [
      "Người đi vay nợ sang người cho vay.",
      "Người cho vay (chủ nợ) sang người đi vay (con nợ).",
      "Chính phủ sang người nộp thuế.",
      "Người sở hữu bất động sản sang người giữ tiền mặt."
    ],
    correct: 1,
    explanation: "Khi lạm phát tăng cao bất ngờ, đồng tiền mất giá. Người đi vay trả nợ bằng số tiền có sức mua thấp hơn nhiều so với dự tính ban đầu -> Người đi vay ĐƯỢC LỢI, người cho vay BỊ THIỆT HẠI.",
    isTrap: true,
    trapAdvice: "Lạm phát bất ngờ: Có lợi cho người vay nợ (con nợ), có hại cho người cho vay (chủ nợ)!"
  },

  // --- CHƯƠNG 10 ---
  {
    id: "q60",
    category: "macro",
    chapter: 10,
    topic: "Công thức số nhân tiền có tỷ lệ nắm giữ tiền mặt (cr)",
    difficulty: "apply",
    question: "Tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi là cr = 0.2, tỷ lệ dự trữ của ngân hàng là rr = 0.1. Cơ số tiền tệ MB = 100 tỷ đồng. Lượng cung tiền MS là:",
    options: [
      "1.000 tỷ đồng",
      "400 tỷ đồng",
      "300 tỷ đồng",
      "120 tỷ đồng"
    ],
    correct: 1,
    explanation: "Số nhân tiền mm = (cr + 1) / (cr + rr) = (0.2 + 1) / (0.2 + 0.1) = 1.2 / 0.3 = 4. Cung tiền MS = mm x MB = 4 x 100 = 400 tỷ đồng.",
    isTrap: true,
    trapAdvice: "Nếu không có tiền mặt cr thì m = 1/rr = 10 (ra 1.000 tỷ là bẫy). Vì người dân giữ tiền mặt nên mm = (cr+1)/(cr+rr) = 4."
  },
  {
    id: "q61",
    category: "macro",
    chapter: 10,
    topic: "Phương trình số lượng tiền tệ (Quantity Equation)",
    difficulty: "apply",
    question: "Theo phương trình M.V = P.Y, nếu tốc độ lưu thông tiền tệ V không đổi, GDP thực tế Y tăng trưởng 3%/năm, và Ngân hàng Trung ương cho cung tiền M tăng 8%/năm, thì tỷ lệ lạm phát xấp xỉ là:",
    options: [
      "11%/năm",
      "5%/năm",
      "2.67%/năm",
      "8%/năm"
    ],
    correct: 1,
    explanation: "%ΔM + %ΔV = %ΔP + %ΔY. Vì V không đổi (%ΔV = 0), nên Lạm phát %ΔP = %ΔM - %ΔY = 8% - 3% = 5%/năm.",
    isTrap: false,
    trapAdvice: "Lạm phát = Tốc độ tăng cung tiền - Tốc độ tăng trưởng GDP thực tế."
  },
  {
    id: "q62",
    category: "macro",
    chapter: 10,
    topic: "Lãi suất chiết khấu & Dự trữ bắt buộc",
    difficulty: "understand",
    question: "Hành động nào sau đây của Ngân hàng Trung ương sẽ làm THU HẸP lượng cung tiền (Chính sách tiền tệ thắt chặt)?",
    options: [
      "Hạ tỷ lệ dự trữ bắt buộc (rr).",
      "Mua tín phiếu kho bạc trên thị trường mở.",
      "Tăng lãi suất chiết khấu và tăng tỷ lệ dự trữ bắt buộc.",
      "Cấp gói tái cấp vốn lãi suất 0% cho các ngân hàng thương mại."
    ],
    correct: 2,
    explanation: "Tăng tỷ lệ dự trữ bắt buộc làm giảm số nhân tiền; tăng lãi suất chiết khấu hạn chế NHTM vay tiền từ NHTW -> Cả 2 đều làm giảm cung tiền.",
    isTrap: false,
    trapAdvice: "Tăng rr, tăng lãi suất chiết khấu, bán trái phiếu => Thắt chặt cung tiền."
  },

  // --- CHƯƠNG 11 ---
  {
    id: "q63",
    category: "macro",
    chapter: 11,
    topic: "Số nhân chi tiêu Keynes (Keynesian Multiplier)",
    difficulty: "apply",
    question: "Trong một nền kinh tế đóng giản đơn không có thuế, xu hướng tiêu dùng cận biên MPC = 0.8. Nếu chính phủ tăng chi tiêu đầu tư công ΔG = 10 tỷ USD, thì sản lượng cân bằng quốc gia sẽ tăng thêm:",
    options: [
      "10 tỷ USD",
      "12.5 tỷ USD",
      "50 tỷ USD",
      "80 tỷ USD"
    ],
    correct: 2,
    explanation: "Số nhân chi tiêu k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5. Mức tăng sản lượng ΔY = k x ΔG = 5 x 10 = 50 tỷ USD.",
    isTrap: false,
    trapAdvice: "k = 1 / (1 - MPC). Khi MPC = 0.8 thì k = 5."
  },
  {
    id: "q64",
    category: "macro",
    chapter: 11,
    topic: "Cú sốc cung tiêu cực & Đình lạm (Stagflation)",
    difficulty: "advanced",
    question: "Khi giá dầu mỏ thế giới tăng đột ngột gấp 3 lần (cú sốc cung bất lợi), trong ngắn hạn nền kinh tế sẽ đối mặt với hiện tượng:",
    options: [
      "Đường Tổng cầu AD dịch trái làm giảm phát.",
      "Đường Tổng cung ngắn hạn SRAS dịch trái, gây ra Đình lạm (Stagflation: Sản lượng Y giảm, Giá P tăng).",
      "Đường Tổng cung ngắn hạn SRAS dịch phải làm tăng trưởng vượt bậc.",
      "Tỷ lệ thất nghiệp giảm và nền kinh tế bùng nổ."
    ],
    correct: 1,
    explanation: "Chi phí đầu vào tăng vọt làm SRAS dịch chuyển sang trái (lên trên) -> Mức giá chung P tăng lên (Lạm phát) trong khi Sản lượng Y giảm xuống (Suy thoái/Thất nghiệp). Đây chính là hiện tượng 'Đình lạm' (Stagflation) kinh điển của thập niên 1970.",
    isTrap: true,
    trapAdvice: "Cú sốc cung tiêu cực: P tăng + Y giảm = Đình lạm (Stagflation)!"
  },

  // --- CHƯƠNG 12 ---
  {
    id: "q65",
    category: "macro",
    chapter: 12,
    topic: "Ngang giá sức mua (PPP - Purchasing Power Parity)",
    difficulty: "apply",
    question: "Theo học thuyết Ngang giá sức mua (PPP), nếu 1 cái bánh Big Mac ở Mỹ giá 5 USD và ở Việt Nam giá 120.000 VNĐ, thì tỷ giá danh nghĩa cân bằng dài hạn giữa VND và USD phải là:",
    options: [
      "24.000 VND / USD",
      "20.000 VND / USD",
      "25.000 VND / USD",
      "600.000 VND / USD"
    ],
    correct: 0,
    explanation: "Theo PPP: e = P_trong nước / P_nước ngoài = 120.000 VND / 5 USD = 24.000 VND / USD.",
    isTrap: false,
    trapAdvice: "Chỉ số Big Mac Index nổi tiếng của tạp chí The Economist dựa trên đúng lý thuyết PPP này của Mankiw."
  }
];

const fullQuestions = [...baseQuestions, ...newQuestions];
console.log(`✓ Đã xây dựng hoàn chỉnh ngân hàng ${fullQuestions.length} câu hỏi trắc nghiệm!`);

const outputContent = `// Ngân hàng 65 câu hỏi trắc nghiệm A+ Kinh tế học đại cương (Vi mô & Vĩ mô)
// Tuyển chọn chuẩn mực theo 12 chương giáo trình N. Gregory Mankiw và đề thi đại học
const QUIZ_DATA = ${JSON.stringify(fullQuestions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_DATA;
}
`;

fs.writeFileSync(path.join(__dirname, 'data', 'quiz.js'), outputContent, 'utf8');
console.log("✓ Đã ghi đè thành công tệp data/quiz.js");
