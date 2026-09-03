// Bộ thẻ Flashcard ôn tập tốc độ cao cho sinh viên thi A+ Kinh tế học đại cương
// 30+ Khái niệm & Thuật ngữ đối chiếu Anh - Việt chuẩn Mankiw

const FLASHCARDS_DATA = [
  // --- VI MÔ ---
  {
    id: "fc1",
    category: "micro",
    topic: "Khái quát",
    front: "Chi phí cơ hội (Opportunity Cost) là gì?",
    back: "Là giá trị của phương án tốt nhất bị bỏ qua khi đưa ra một quyết định. Bao gồm cả chi phí hiện (tiền bạc thực trả) và chi phí ẩn (thu nhập, thời gian bị từ bỏ).",
    tip: "Muốn tính chi phí cơ hội của X: lấy số lượng Y phải từ bỏ chia cho số lượng X thu được (ΔY / ΔX)."
  },
  {
    id: "fc2",
    category: "micro",
    topic: "Cung - Cầu",
    front: "Phân biệt 'Thay đổi lượng cầu' vs 'Thay đổi cầu'?",
    back: "• Thay đổi LƯỢNG cầu: Do GIÁ CỦA CHÍNH HÀNG ĐÓ thay đổi => Gây di chuyển dọc (Movement) trên đường cầu.\n• Thay đổi CẦU: Do các yếu tố ngoài giá (thu nhập, sở thích, giá hàng liên quan...) => Làm DỊCH CHUYỂN (Shift) cả đường cầu.",
    tip: "Bẫy chiếm 30% câu trắc nghiệm lý thuyết!"
  },
  {
    id: "fc3",
    category: "micro",
    topic: "Cung - Cầu",
    front: "Giá trần (Price Ceiling) & Giá sàn (Price Floor) có hiệu lực khi nào?",
    back: "• Giá trần có hiệu lực: P_trần < P* (gây THIẾU HỤT hàng hóa, chợ đen).\n• Giá sàn có hiệu lực: P_sàn > P* (gây DƯ THỪA hàng hóa, chính phủ phải mua giải cứu).",
    tip: "Trần ở dưới, Sàn ở trên mới có hiệu lực!"
  },
  {
    id: "fc4",
    category: "micro",
    topic: "Độ co giãn",
    front: "Quy tắc định giá theo độ co giãn của cầu để tối đa hóa doanh thu (TR)?",
    back: "• |E_D| > 1 (Co giãn nhiều): Nên GIẢM GIÁ để tăng doanh thu.\n• |E_D| < 1 (Co giãn ít / thiết yếu): Nên TĂNG GIÁ để tăng doanh thu.\n• |E_D| = 1 (Co giãn đơn vị): Doanh thu TR đạt cực đại.",
    tip: "Nhớ: Co giãn nhiều thì Giá và Doanh thu biến thiên ngược chiều!"
  },
  {
    id: "fc5",
    category: "micro",
    topic: "Hành vi người tiêu dùng",
    front: "Điều kiện tối đa hóa thỏa dụng của người tiêu dùng (Consumer Optimum)?",
    back: "MU_X / P_X = MU_Y / P_Y (hoặc MRS_XY = P_X / P_Y) và chi hết ngân sách: P_X.X + P_Y.Y = I.\n(Lợi ích biên trên mỗi đồng tiền chi ra cho mọi hàng hóa phải bằng nhau).",
    tip: "Đồ thị: Tiếp điểm giữa Đường bàng quan và Đường ngân sách."
  },
  {
    id: "fc6",
    category: "micro",
    topic: "Sản xuất & Chi phí",
    front: "Đường MC cắt ATC và AVC tại điểm nào?",
    back: "Đường Chi phí cận biên (MC) luôn đi qua ĐIỂM CỰC TIỂU của cả đường Chi phí trung bình (ATC_min) và Chi phí biến đổi trung bình (AVC_min).",
    tip: "Để tìm mức Q mà ATC cực tiểu, giải phương trình: MC = ATC."
  },
  {
    id: "fc7",
    category: "micro",
    topic: "Cấu trúc thị trường",
    front: "Điều kiện tối đa hóa lợi nhuận chung và đường cung của doanh nghiệp cạnh tranh?",
    back: "• Điều kiện chung: MR = MC.\n• Cạnh tranh hoàn hảo: P = MR = MC.\n• Đường cung ngắn hạn: Là phần đường MC nằm PHÍA TRÊN điểm AVC_min (nếu P < AVC_min thì đóng cửa).",
    tip: "Doanh nghiệp độc quyền có MR dốc gấp đôi đường cầu: Cầu P = a - bQ => MR = a - 2bQ."
  },
  {
    id: "fc8",
    category: "micro",
    topic: "Cấu trúc thị trường",
    front: "Chỉ số Lerner đo lường quyền lực thị trường là gì?",
    back: "L = (P - MC) / P = 1 / |E_d|.\nTrong cạnh tranh hoàn hảo P = MC nên L = 0. Doanh nghiệp độc quyền có quyền lực thị trường càng lớn khi cầu càng kém co giãn (L tiến gần 1).",
    tip: "Dùng để giải bài toán định giá độc quyền: P = MC / (1 - 1/|Ed|)."
  },
  {
    id: "fc9",
    category: "micro",
    topic: "Thuế & Phúc lợi",
    front: "Tổn thất vô ích (Deadweight Loss - DWL) là gì?",
    back: "Là phần sụt giảm trong Tổng thặng dư xã hội (TS) mà không có bất kỳ ai (kể cả chính phủ thu thuế) nhận được, do quy mô thị trường bị co hẹp dưới mức cân bằng hiệu quả.",
    tip: "DWL = 0.5 x t x (Q* - Qt). Thuế tăng gấp đôi thì DWL tăng gấp 4 lần!"
  },
  {
    id: "fc10",
    category: "micro",
    topic: "Độ co giãn chéo",
    front: "Dấu của Độ co giãn chéo E_XY nói lên điều gì?",
    back: "• E_XY > 0: Hai hàng hóa THAY THẾ (Giá Pepsi tăng -> Cầu Coca tăng).\n• E_XY < 0: Hai hàng hóa BỔ SUNG (Giá xăng tăng -> Cầu xe máy giảm).\n• E_XY = 0: Hai hàng hóa độc lập.",
    tip: "Khác với độ co giãn theo giá (thường lấy trị tuyệt đối), độ co giãn chéo và co giãn thu nhập PHẢI GIỮ NGUYÊN DẤU!"
  },

  // --- VĨ MÔ ---
  {
    id: "fc11",
    category: "macro",
    topic: "Đo lường GDP",
    front: "Định nghĩa GDP và công thức tính theo luồng chi tiêu?",
    back: "GDP là giá trị thị trường của toàn bộ hàng hóa & dịch vụ CUỐI CÙNG sản xuất TRONG NƯỚC trong một thời kỳ.\nCông thức: GDP = C + I + G + NX.",
    tip: "G không gồm trợ cấp (Tr). I gồm cả nhà ở mới của hộ gia đình."
  },
  {
    id: "fc12",
    category: "macro",
    topic: "Đo lường GDP",
    front: "Phân biệt GDP danh nghĩa, GDP thực tế và GDP Deflator?",
    back: "• GDP danh nghĩa: Tính theo giá hiện hành (bị ảnh hưởng bởi lạm phát).\n• GDP thực tế: Tính theo giá năm gốc (đo lường sản lượng thực).\n• GDP Deflator = (GDP_danh_nghĩa / GDP_thực_tế) x 100.",
    tip: "Tăng trưởng kinh tế g chỉ được tính dựa trên GDP thực tế!"
  },
  {
    id: "fc13",
    category: "macro",
    topic: "Lạm phát",
    front: "Phân biệt CPI và GDP Deflator qua 2 tiêu chí cốt lõi?",
    back: "1. Hàng nhập khẩu: Có trong CPI (nếu dân mua), KHÔNG CÓ trong GDP Deflator.\n2. Giỏ hàng: CPI dùng giỏ hàng CỐ ĐỊNH; GDP Deflator dùng giỏ hàng THAY ĐỔI theo năm hiện hành.",
    tip: "Máy ủi nội địa tăng giá -> Deflator tăng, CPI không đổi. Xe BMW nhập tăng giá -> CPI tăng, Deflator không đổi."
  },
  {
    id: "fc14",
    category: "macro",
    topic: "Thất nghiệp",
    front: "Ba loại thất nghiệp và Tỷ lệ thất nghiệp tự nhiên (un)?",
    back: "1. Ma sát (Frictional): Do tìm việc, chuyển việc (ngắn hạn, tự nguyện).\n2. Cơ cấu (Structural): Do kỹ năng không khớp công nghệ hoặc lương tối thiểu cao.\n3. Chu kỳ (Cyclical): Do suy thoái kinh tế tổng cầu sụt giảm.\n• Thất nghiệp tự nhiên: un = u_ma_sát + u_cơ_cấu.",
    tip: "Khi nền kinh tế đạt mức toàn dụng nhân công, Thất nghiệp chu kỳ = 0, nhưng u vẫn bằng un (khoảng 4-5%)."
  },
  {
    id: "fc15",
    category: "macro",
    topic: "Tiền tệ",
    front: "Công thức số nhân tiền thực tế (Money Multiplier)?",
    back: "mm = (cr + 1) / (cr + rr)\nTrong đó: cr = C/D (tỷ lệ tiền mặt), rr = R/D (tỷ lệ dự trữ ngân hàng).\nKhối tiền cung ứng: MS = mm x MB (Cơ số tiền tệ).",
    tip: "Nếu dân chúng giữ nhiều tiền mặt (cr tăng) hoặc ngân hàng tăng dự trữ (rr tăng) thì số nhân tiền mm sẽ giảm!"
  },
  {
    id: "fc16",
    category: "macro",
    topic: "Tiền tệ",
    front: "Phương trình số lượng tiền tệ (Quantity Equation) & Hiệu ứng Fisher?",
    back: "• Phương trình số lượng: M.V = P.Y (%ΔM + %ΔV = %ΔP + %ΔY).\n• Lạm phát dài hạn: π = %ΔM - %ΔY (nếu V không đổi).\n• Hiệu ứng Fisher: Lãi suất danh nghĩa i = Lãi suất thực r + Lạm phát π.",
    tip: "In tiền chỉ sinh ra lạm phát danh nghĩa, không đổi được GDP thực trong dài hạn."
  },
  {
    id: "fc17",
    category: "macro",
    topic: "Chính sách tài khóa",
    front: "Số nhân chi tiêu Keynes và Hiện tượng lấn át (Crowding-out)?",
    back: "• Số nhân chi tiêu: k = 1 / [1 - MPC(1 - t)]. Mức tăng sản lượng lý thuyết: ΔY = k x ΔG.\n• Hiện tượng lấn át: Chính phủ vay nợ tài trợ chi tiêu làm LÃI SUẤT TĂNG, bóp nghẹt đầu tư tư nhân (I giảm), làm giảm hiệu quả kích thích kinh tế.",
    tip: "MPC càng cao thì số nhân chi tiêu càng lớn!"
  },
  {
    id: "fc18",
    category: "macro",
    topic: "Mô hình AD-AS",
    front: "Tại sao đường Tổng cung dài hạn (LRAS) thẳng đứng?",
    back: "Trong dài hạn, mức giá chung P là trung tính. Sản lượng tiềm năng Yp chỉ được quyết định bởi các yếu tố sản xuất thực: Lao động (L), Tư bản (K), Tài nguyên (N) và Công nghệ (A).",
    tip: "Mọi chính sách kích cầu chỉ làm tăng mức giá P trong dài hạn mà không làm đổi Yp."
  },
  {
    id: "fc19",
    category: "macro",
    topic: "Kinh tế mở",
    front: "Đồng nhất thức tài khoản quốc gia trong nền kinh tế mở?",
    back: "S = I + NCO = I + NX\n(Tiết kiệm quốc dân = Đầu tư nội địa + Dòng vốn ra ròng / Xuất khẩu ròng).\nNếu Tiết kiệm < Đầu tư (S < I) => Nước đó sẽ bị Thâm hụt thương mại (NX < 0).",
    tip: "Thâm hụt thương mại phản ánh sự mất cân bằng giữa Tiết kiệm và Đầu tư, không đơn thuần do tỷ giá!"
  },
  {
    id: "fc20",
    category: "macro",
    topic: "Đường cong Phillips",
    front: "Đường cong Phillips trong ngắn hạn và dài hạn khác nhau thế nào?",
    back: "• Ngắn hạn: Có sự đánh đổi nghịch biến giữa Lạm phát và Thất nghiệp (Lạm phát cao thì thất nghiệp thấp).\n• Dài hạn: Thẳng đứng tại mức Thất nghiệp tự nhiên (un). Không có sự đánh đổi dài hạn!",
    tip: "Đình lạm (Stagflation) là khi cả Lạm phát và Thất nghiệp cùng tăng cao do cú sốc cung bất lợi (SRAS dịch trái)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FLASHCARDS_DATA;
}
