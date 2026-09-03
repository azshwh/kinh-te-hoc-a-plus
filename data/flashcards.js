// Bộ thẻ Flashcard ôn tập tốc độ cao cho sinh viên thi A+ Kinh tế học đại cương
const FLASHCARDS_DATA = [
  {
    id: "fc1",
    category: "micro",
    topic: "Khái quát",
    front: "Chi phí cơ hội (Opportunity Cost) là gì?",
    back: "Là giá trị của cơ hội tốt nhất bị bỏ qua khi đưa ra một quyết định lựa chọn. Bao gồm cả chi phí hiện (tiền bạc thực trả) và chi phí ẩn (thu nhập, thời gian bị từ bỏ).",
    tip: "Muốn tính chi phí cơ hội của X: lấy sự sụt giảm của Y chia cho lượng tăng thêm của X (ΔY / ΔX)."
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
    front: "Điều kiện tối đa hóa thỏa dụng của người tiêu dùng?",
    back: "MU_X / P_X = MU_Y / P_Y và chi hết ngân sách: X*P_X + Y*P_Y = I.\n(Lợi ích biên trên mỗi đồng tiền chi ra cho mọi hàng hóa phải bằng nhau).",
    tip: "Nếu MU_X / P_X > MU_Y / P_Y thì tăng mua X, giảm mua Y."
  },
  {
    id: "fc6",
    category: "micro",
    topic: "Sản xuất & Chi phí",
    front: "Đường MC cắt ATC và AVC tại điểm nào?",
    back: "Đường Chi phí cận biên (MC) luôn đi qua ĐIỂM CỰC TIỂU của cả đường Chi phí trung bình (ATC_min) và Chi phí biến đổi trung bình (AVC_min).",
    tip: "Để tìm mức Q mà ATC cực tiểu, chỉ cần giải phương trình: MC = ATC."
  },
  {
    id: "fc7",
    category: "micro",
    topic: "Cấu trúc thị trường",
    front: "Điều kiện tối đa hóa lợi nhuận chung và đường cung của doanh nghiệp cạnh tranh hoàn hảo?",
    back: "• Điều kiện chung: MR = MC.\n• Cạnh tranh hoàn hảo: P = MR = MC.\n• Đường cung ngắn hạn: Là phần đường MC nằm PHÍA TRÊN điểm AVC_min (nếu P < AVC_min thì đóng cửa).",
    tip: "Doanh nghiệp độc quyền có MR dốc gấp đôi đường cầu: Cầu P = a - bQ => MR = a - 2bQ."
  },
  {
    id: "fc8",
    category: "macro",
    topic: "GDP",
    front: "3 thứ TUYỆT ĐỐI KHÔNG được tính vào GDP?",
    back: "1. Chi chuyển nhượng của Chính phủ (Tr - trợ cấp, lương hưu, học bổng).\n2. Giao dịch hàng hóa đã qua sử dụng (bán xe cũ, nhà cũ).\n3. Giao dịch tài chính thuần túy (mua bán cổ phiếu, trái phiếu).",
    tip: "GDP chỉ tính hàng hóa dịch vụ CUỐI CÙNG được sản xuất TRONG THỜI KỲ ĐANG XÉT."
  },
  {
    id: "fc9",
    category: "macro",
    topic: "Lạm phát & CPI",
    front: "Khác biệt bản chất giữa CPI và GDP Deflator?",
    back: "• CPI: Dùng giỏ hàng cố định của người tiêu dùng, CÓ tính hàng tiêu dùng nhập khẩu (như iPhone nhập).\n• GDP Deflator: Phản ánh tất cả hàng hóa sản xuất trong nước, KHÔNG tính hàng nhập khẩu, giỏ hàng thay đổi theo năm.",
    tip: "Giá máy bay quân sự tăng -> Chỉ ảnh hưởng GDP Deflator, CPI không đổi."
  },
  {
    id: "fc10",
    category: "macro",
    topic: "Thất nghiệp",
    front: "Ai KHÔNG thuộc Lực lượng lao động (Labor Force)?",
    back: "Những người trong độ tuổi lao động nhưng KHÔNG TÌM KIẾM VIỆC LÀM: Học sinh/sinh viên toàn thời gian, người nội trợ gia đình, người đã nghỉ hưu, người bệnh tật mất sức lao động, và người nản chí (discouraged workers).",
    tip: "Tỷ lệ thất nghiệp = (Số người thất nghiệp / Lực lượng lao động) * 100%."
  },
  {
    id: "fc11",
    category: "macro",
    topic: "Tiền tệ",
    front: "3 công cụ của NHTW để TĂNG cung tiền (Chính sách tiền tệ mở rộng)?",
    back: "1. MUA trái phiếu chính phủ trên thị trường mở (OMO) -> Bơm tiền MB vào hệ thống.\n2. HẠ tỷ lệ dự trữ bắt buộc (rr) -> Tăng số nhân tiền m_M.\n3. HẠ lãi suất tái chiết khấu -> Khuyến khích NHTM vay vốn.",
    tip: "Muốn THẮT CHẶT cung tiền thì làm ngược lại cả 3 công cụ trên."
  },
  {
    id: "fc12",
    category: "macro",
    topic: "Chính sách tài khóa",
    front: "Hiện tượng thoái lui đầu tư / Lấn át (Crowding-out effect)?",
    back: "Khi Chính phủ tăng chi tiêu (G tăng) -> Ngân sách thâm hụt, Chính phủ vay mượn -> Lãi suất thị trường tăng -> Doanh nghiệp tư nhân giảm vay vốn đầu tư (I giảm) -> Triệt tiêu một phần tác động mở rộng của sản lượng.",
    tip: "Giải thích tại sao số nhân chi tiêu trên thực tế nhỏ hơn con số lý thuyết!"
  }
];
