// Ngân hàng câu hỏi trắc nghiệm A+ Kinh tế học đại cương (Vi mô & Vĩ mô)
const QUIZ_DATA = [
  // --- VI MÔ: KHÁI QUÁT & NGUYÊN LÝ ---
  {
    id: "q1",
    category: "micro",
    topic: "10 Nguyên lý & Chi phí cơ hội",
    question: "Một sinh viên từ bỏ cơ hội đi làm thêm với mức lương 5 triệu đồng/tháng để tham gia khóa học có học phí 3 triệu đồng/tháng. Chi phí cơ hội của việc đi học mỗi tháng của sinh viên này là:",
    options: [
      "3 triệu đồng",
      "5 triệu đồng",
      "8 triệu đồng",
      "2 triệu đồng"
    ],
    correct: 2,
    explanation: "Chi phí cơ hội bao gồm cả chi phí kế toán thực chi bằng tiền (học phí 3 triệu) và thu nhập bị từ bỏ (tiền lương 5 triệu). Tổng chi phí cơ hội = 3 + 5 = 8 triệu đồng.",
    isTrap: true,
    trapAdvice: "Bẫy thường gặp: Sinh viên chỉ chọn 5 triệu (nghĩ chi phí cơ hội chỉ là phần tiền lương mất đi) hoặc chỉ chọn 3 triệu (học phí). Chi phí cơ hội thực sự gồm cả chi phí hiện (explicit) và chi phí ẩn (implicit)!"
  },
  {
    id: "q2",
    category: "micro",
    topic: "10 Nguyên lý & Chi phí cơ hội",
    question: "Phát biểu nào sau đây là một tuyên bố mang tính 'Thực chứng' (Positive statement)?",
    options: [
      "Chính phủ nên tăng trợ cấp thất nghiệp để đảm bảo an sinh.",
      "Mức lương tối thiểu quá thấp là điều bất công với người lao động.",
      "Tăng giá thuốc lá sẽ làm giảm lượng thuốc lá được tiêu thụ.",
      "Người giàu cần phải đóng thuế suất cao hơn người nghèo."
    ],
    correct: 2,
    explanation: "Tuyên bố thực chứng mô tả thế giới như nó vốn có, có thể kiểm chứng bằng số liệu thực nghiệm ('Nếu tăng giá thì lượng cầu giảm'). Các câu còn lại chứa từ 'nên', 'cần phải', 'bất công' thể hiện quan điểm chuẩn tắc (Normative) chứa đựng phán xét giá trị chủ quan.",
    isTrap: false,
    trapAdvice: "Ghi nhớ: Thực chứng = 'là gì / điều gì xảy ra' (kiểm chứng được). Chuẩn tắc = 'nên làm gì / đáng ra phải thế nào' (phán xét giá trị cá nhân)."
  },
  {
    id: "q3",
    category: "micro",
    topic: "10 Nguyên lý & Chi phí cơ hội",
    question: "Đường giới hạn khả năng sản xuất (PPF) có dạng cong lồi ra ngoài (bowed out) là do:",
    options: [
      "Quy luật năng suất không đổi theo quy mô",
      "Quy luật chi phí cơ hội tăng dần",
      "Sự thiếu hụt nguồn lực công nghệ",
      "Sự phân bổ hoàn hảo của các nguồn lực giữa các ngành"
    ],
    correct: 1,
    explanation: "Đường PPF cong lồi phản ánh quy luật chi phí cơ hội tăng dần: các nguồn lực kinh tế không hoàn toàn thích hợp như nhau cho việc sản xuất các loại hàng hóa khác nhau.",
    isTrap: false,
    trapAdvice: "Nếu chi phí cơ hội là không đổi, đường PPF sẽ là một đường thẳng dốc xuống."
  },

  // --- VI MÔ: CUNG CẦU & CÂN BẰNG ---
  {
    id: "q4",
    category: "micro",
    topic: "Cung - Cầu & Cân bằng",
    question: "Điều nào sau đây gây ra sự 'dịch chuyển' (shift) của đường cầu về xe máy điện sang phải?",
    options: [
      "Giá pin xe máy điện giảm làm giá bán xe máy điện giảm",
      "Giá xăng dầu tăng mạnh",
      "Thu nhập của người tiêu dùng giảm (biết xe máy điện là hàng thông thường)",
      "Chính phủ giảm thuế giá trị gia tăng đối với xe máy điện"
    ],
    correct: 1,
    explanation: "Xăng dầu và xe máy chạy xăng là hàng thay thế cho xe máy điện. Khi giá xăng tăng, người dân giảm đi xe xăng và chuyển sang mua xe máy điện => Cầu xe máy điện tăng, đường cầu dịch chuyển sang phải. (Câu A và D làm thay đổi đường Cung hoặc di chuyển dọc đường cầu).",
    isTrap: true,
    trapAdvice: "Bẫy phân biệt: Thay đổi GIÁ CỦA CHÍNH HÀNG HÓA ĐÓ chỉ gây ra sự DI CHUYỂN DỌC (movement along) trên đường cầu. Chỉ có các yếu tố ngoài giá (thu nhập, thị hiếu, giá hàng liên quan, số lượng người mua...) mới làm DỊCH CHUYỂN (shift) đường cầu!"
  },
  {
    id: "q5",
    category: "micro",
    topic: "Cung - Cầu & Cân bằng",
    question: "Thị trường có hàm cầu Q_D = 100 - 2P và hàm cung Q_S = 10 + P. Mức giá và sản lượng cân bằng là:",
    options: [
      "P* = 30; Q* = 40",
      "P* = 40; Q* = 30",
      "P* = 30; Q* = 70",
      "P* = 20; Q* = 60"
    ],
    correct: 0,
    explanation: "Cân bằng xảy ra khi Q_D = Q_S <=> 100 - 2P = 10 + P <=> 3P = 90 <=> P* = 30. Thay P* = 30 vào Q_D ta được Q* = 100 - 2(30) = 40.",
    isTrap: false,
    trapAdvice: "Luôn kiểm tra lại bằng cách thay P* vào cả hai phương trình cung và cầu để xem kết quả Q có bằng nhau không."
  },
  {
    id: "q6",
    category: "micro",
    topic: "Cung - Cầu & Cân bằng",
    question: "Khi Chính phủ quy định mức Giá trần (Price Ceiling) có hiệu lực trên thị trường, kết quả sẽ dẫn tới:",
    options: [
      "Thị trường dư thừa hàng hóa",
      "Giá trần cao hơn giá cân bằng thị trường",
      "Thị trường thiếu hụt hàng hóa và xuất hiện thị trường chợ đen",
      "Lượng cung lớn hơn lượng cầu"
    ],
    correct: 2,
    explanation: "Giá trần có hiệu lực phải nằm DƯỚI giá cân bằng. Tại mức giá thấp này, lượng cầu tăng cao (Q_D > Q*) trong khi người bán cắt giảm lượng cung (Q_S < Q*), dẫn đến tình trạng thiếu hụt (Shortage = Q_D - Q_S) và phát sinh chợ đen.",
    isTrap: true,
    trapAdvice: "Bẫy trần/sàn: 'Trần' (Ceiling) nằm ở trên đầu nhưng ĐỂ CÓ HIỆU LỰC lại phải đặt DƯỚI giá cân bằng! 'Sàn' (Floor) ở dưới chân nhưng để có hiệu lực lại phải đặt TRÊN giá cân bằng!"
  },
  {
    id: "q7",
    category: "micro",
    topic: "Cung - Cầu & Cân bằng",
    question: "Thị trường có P* = 30, Q* = 40. Hàm cầu P = 50 - 0.5Q, hàm cung P = 10 + 0.5Q. Thặng dư tiêu dùng (CS) bằng:",
    options: [
      "400",
      "800",
      "200",
      "600"
    ],
    correct: 0,
    explanation: "Hàm cầu P = 50 - 0.5Q cắt trục tung tại P_max = 50. CS là diện tích tam giác: CS = 0.5 * (P_max - P*) * Q* = 0.5 * (50 - 30) * 40 = 0.5 * 20 * 40 = 400.",
    isTrap: false,
    trapAdvice: "Nhớ công thức diện tích tam giác: luôn có hệ số 1/2. Rất nhiều bạn quên nhân 0.5 dẫn đến chọn đáp án 800!"
  },

  // --- VI MÔ: ĐỘ CO GIÃN ---
  {
    id: "q8",
    category: "micro",
    topic: "Độ co giãn",
    question: "Khi giá một bát phở tăng từ 40.000đ lên 50.000đ, lượng khách giảm từ 120 bát xuống 80 bát/ngày. Theo phương pháp trung điểm (midpoint), độ co giãn của cầu theo giá xấp xỉ bằng:",
    options: [
      "-1.80",
      "-0.56",
      "-1.00",
      "-2.25"
    ],
    correct: 0,
    explanation: "%ΔQ = (80 - 120) / ((80 + 120)/2) = -40 / 100 = -40%. %ΔP = (50 - 40) / ((40 + 50)/2) = 10 / 45 = +22.22%. E_D = -40% / 22.22% ≈ -1.80.",
    isTrap: false,
    trapAdvice: "Phương pháp trung điểm chia cho trung bình cộng (Q1+Q2)/2 và (P1+P2)/2 để độ co giãn như nhau dù giá tăng hay giảm."
  },
  {
    id: "q9",
    category: "micro",
    topic: "Độ co giãn",
    question: "Nếu độ co giãn của cầu theo giá đối với nước ngọt có ga là |E_D| = 1.6, khi nhà sản xuất quyết định GIẢM giá bán thì Tổng doanh thu (TR) sẽ:",
    options: [
      "Tăng lên",
      "Giảm đi",
      "Không đổi",
      "Không thể xác định"
    ],
    correct: 0,
    explanation: "Vì |E_D| = 1.6 > 1 (cầu co giãn nhiều), % tăng của lượng cầu lớn hơn % giảm của giá (%ΔQ > %ΔP). Do đó việc giảm giá sẽ làm Tổng doanh thu TR = P * Q TĂNG LÊN.",
    isTrap: true,
    trapAdvice: "Mẹo nhớ: Cầu co giãn nhiều (|E| > 1) -> Giá và Doanh thu biến thiên NGƯỢC CHIỀU. Cầu co giãn ít (|E| < 1) -> Giá và Doanh thu biến thiên CÙNG CHIỀU."
  },
  {
    id: "q10",
    category: "micro",
    topic: "Độ co giãn",
    question: "Biết hệ số co giãn chéo giữa hàng hóa X và Y là E_XY = -0.75, và co giãn theo thu nhập của X là E_I = 1.4. Kết luận nào sau đây là CHÍNH XÁC?",
    options: [
      "X là hàng thay thế cho Y, và X là hàng thứ cấp",
      "X là hàng bổ sung cho Y, và X là hàng cao cấp (xa xỉ)",
      "X là hàng bổ sung cho Y, và X là hàng thiết yếu",
      "X là hàng thay thế cho Y, và X là hàng thông thường thiết yếu"
    ],
    correct: 1,
    explanation: "E_XY = -0.75 < 0 nghĩa là khi giá Y tăng, lượng mua X giảm -> X và Y là hai hàng hóa BỔ SUNG cho nhau. E_I = 1.4 > 1 nghĩa là tốc độ tăng cầu nhanh hơn tăng thu nhập -> X là hàng hóa CAO CẤP (xa xỉ).",
    isTrap: false,
    trapAdvice: "Nhớ kỹ các mốc: E_I < 0: Cấp thấp; 0 < E_I <= 1: Thiết yếu; E_I > 1: Cao cấp. E_XY > 0: Thay thế; E_XY < 0: Bổ sung."
  },

  // --- VI MÔ: HÀNH VI NGƯỜI TIÊU DÙNG ---
  {
    id: "q11",
    category: "micro",
    topic: "Hành vi người tiêu dùng",
    question: "Một người tiêu dùng đang chi tiêu hết thu nhập cho hai hàng hóa X và Y. Hiện tại MU_X / P_X = 12 và MU_Y / P_Y = 8. Để tối đa hóa tổng thỏa dụng (TU), người này nên:",
    options: [
      "Tăng mua X và giảm mua Y",
      "Tăng mua Y và giảm mua X",
      "Giữ nguyên kết hợp hiện tại vì đã đạt tối ưu",
      "Tăng mua cả hai loại hàng hóa"
    ],
    correct: 0,
    explanation: "Vì MU_X / P_X > MU_Y / P_Y, một đồng chi thêm cho X đem lại thỏa dụng biên lớn hơn một đồng chi cho Y. Do đó, người tiêu dùng nên chuyển tiền từ Y sang mua thêm X (Tăng X, giảm Y) cho đến khi đạt cân bằng MU_X / P_X = MU_Y / P_Y.",
    isTrap: false,
    trapAdvice: "Quy luật lợi ích biên giảm dần: khi mua thêm X, MU_X sẽ giảm xuống; khi giảm bớt Y, MU_Y sẽ tăng lên, đưa 2 tỷ số về trạng thái bằng nhau."
  },
  {
    id: "q12",
    category: "micro",
    topic: "Hành vi người tiêu dùng",
    question: "Độ dốc của đường ngân sách thể hiện điều gì?",
    options: [
      "Tỷ lệ thay thế cận biên của người tiêu dùng",
      "Tỷ giá tương đối giữa hai hàng hóa trên thị trường (-P_X / P_Y)",
      "Mức độ thỏa dụng tối đa mà người tiêu dùng có thể đạt được",
      "Sự thay đổi thu nhập khi giá cả biến động"
    ],
    correct: 1,
    explanation: "Phương trình đường ngân sách: X*P_X + Y*P_Y = I <=> Y = (I/P_Y) - (P_X/P_Y)*X. Do đó độ dốc của nó là -P_X / P_Y, phản ánh chi phí cơ hội thị trường của hàng hóa X tính bằng hàng hóa Y.",
    isTrap: true,
    trapAdvice: "Bẫy: Độ dốc đường BÀNG QUAN là MRS_XY = -MU_X / MU_Y. Còn độ dốc đường NGÂN SÁCH là -P_X / P_Y. Tại điểm tối ưu hai đường này tiếp xúc nhau nên MRS_XY = P_X / P_Y."
  },

  // --- VI MÔ: SẢN XUẤT VÀ CHI PHÍ ---
  {
    id: "q13",
    category: "micro",
    topic: "Sản xuất và Chi phí",
    question: "Doanh nghiệp có hàm tổng chi phí ngắn hạn TC = Q^2 + 20Q + 900. Mức sản lượng để chi phí trung bình (ATC) đạt giá trị nhỏ nhất là:",
    options: [
      "Q = 20",
      "Q = 30",
      "Q = 45",
      "Q = 90"
    ],
    correct: 1,
    explanation: "ATC = TC/Q = Q + 20 + 900/Q. Để ATC cực tiểu, ta có thể đạo hàm ATC' = 1 - 900/Q^2 = 0 => Q^2 = 900 => Q = 30. (Cách 2: Giải MC = ATC: MC = 2Q + 20; 2Q + 20 = Q + 20 + 900/Q => Q = 900/Q => Q^2 = 900 => Q = 30).",
    isTrap: false,
    trapAdvice: "Quy tắc vàng: ATC đạt cực tiểu tại điểm MC = ATC. Tính theo cách cho MC = ATC thường nhanh và ít nhầm hơn đạo hàm phân thức."
  },
  {
    id: "q14",
    category: "micro",
    topic: "Sản xuất và Chi phí",
    question: "Khi Năng suất cận biên của lao động (MP_L) lớn hơn Năng suất trung bình của lao động (AP_L), thì:",
    options: [
      "AP_L đang tăng",
      "AP_L đang giảm",
      "AP_L đạt cực đại",
      "Tổng sản lượng (TP) đang giảm"
    ],
    correct: 0,
    explanation: "Mối quan hệ cận biên và trung bình: Bất cứ khi nào giá trị cận biên lớn hơn giá trị trung bình (MP > AP), nó sẽ kéo giá trị trung bình tăng lên (AP đang tăng). Khi MP < AP thì AP giảm. Khi MP = AP thì AP đạt cực đại.",
    isTrap: false,
    trapAdvice: "Tương tự với điểm số: Nếu điểm bài kiểm tra tiếp theo (cận biên) cao hơn điểm trung bình hiện tại, thì điểm trung bình của bạn sẽ tăng!"
  },
  {
    id: "q15",
    category: "micro",
    topic: "Sản xuất và Chi phí",
    question: "Trong ngắn hạn, một doanh nghiệp cạnh tranh hoàn hảo sẽ quyết định TẠM DỪNG SẢN XUẤT (đóng cửa) khi:",
    options: [
      "Lợi nhuận âm (bị lỗ)",
      "Giá thị trường P < ATC_min",
      "Giá thị trường P < AVC_min",
      "Tổng doanh thu TR < Tổng chi phí TC"
    ],
    correct: 2,
    explanation: "Trong ngắn hạn, dù đóng cửa doanh nghiệp vẫn phải trả toàn bộ chi phí cố định (FC). Nếu P >= AVC, doanh nghiệp thu hồi được chi phí biến đổi và một phần chi phí cố định nên vẫn nên sản xuất. Chỉ khi P < AVC_min, doanh nghiệp không bù đắp nổi chi phí biến đổi, sản xuất sẽ lỗ nhiều hơn là đóng cửa.",
    isTrap: true,
    trapAdvice: "Bẫy cực phổ biến: Rất nhiều bạn chọn P < ATC. Khi P < ATC, doanh nghiệp chỉ bị lỗ nhưng VẪN TIẾP TỤC SẢN XUẤT trong ngắn hạn nếu P >= AVC! Chỉ đóng cửa khi P < AVC."
  },

  // --- VI MÔ: CẤU TRÚC THỊ TRƯỜNG ---
  {
    id: "q16",
    category: "micro",
    topic: "Cấu trúc thị trường",
    question: "Một doanh nghiệp độc quyền thuần túy đối mặt với đường cầu P = 120 - Q và có hàm chi phí cận biên MC = 20 + Q. Sản lượng và giá bán tối đa hóa lợi nhuận là:",
    options: [
      "Q = 50; P = 70",
      "Q = 33.3; P = 86.7",
      "Q = 25; P = 95",
      "Q = 40; P = 80"
    ],
    correct: 1,
    explanation: "Hàm cầu P = 120 - Q => TR = P*Q = 120Q - Q^2 => Doanh thu cận biên MR = 120 - 2Q. Điều kiện tối đa hóa lợi nhuận: MR = MC <=> 120 - 2Q = 20 + Q <=> 3Q = 100 <=> Q* = 100/3 ≈ 33.33. Thay vào hàm cầu: P* = 120 - 33.33 = 86.67.",
    isTrap: true,
    trapAdvice: "Bẫy: Rất nhiều sinh viên cho P = MC (đó là cạnh tranh hoàn hảo, không phải độc quyền!). Độc quyền luôn phải tìm MR trước (MR có hệ số góc gấp đôi cầu) rồi mới cho MR = MC."
  },
  {
    id: "q17",
    category: "micro",
    topic: "Cấu trúc thị trường",
    question: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm của thị trường Cạnh tranh hoàn hảo?",
    options: [
      "Có vô số người mua và người bán",
      "Sản phẩm có sự khác biệt hóa mạnh mẽ",
      "Tự do gia nhập và rút lui khỏi thị trường",
      "Người bán và người mua đều chấp nhận giá (Price takers)"
    ],
    correct: 1,
    explanation: "Trong thị trường cạnh tranh hoàn hảo, sản phẩm là ĐỒNG NHẤT (homogeneous/identical), hoàn toàn không có sự khác biệt hóa. Khác biệt hóa sản phẩm là đặc điểm của thị trường Cạnh tranh độc quyền (Monopolistic Competition).",
    isTrap: false,
    trapAdvice: "Đọc kỹ từ 'KHÔNG PHẢI' trong đề bài."
  },

  // --- VĨ MÔ: GDP & TĂNG TRƯỞNG ---
  {
    id: "q18",
    category: "macro",
    topic: "Đo lường sản lượng quốc gia (GDP)",
    question: "Giao dịch nào sau đây ĐƯỢC TÍNH vào GDP của Việt Nam năm 2024?",
    options: [
      "Một người mua lại chiếc xe máy Honda đã qua sử dụng với giá 20 triệu đồng",
      "Chính phủ chi trả 500 tỷ đồng tiền lương hưu cho cán bộ về hưu",
      "Một công ty may Việt Nam sản xuất 10.000 chiếc áo trong năm 2024 nhưng chưa bán được và để trong kho",
      "Một nhà đầu tư mua 1.000 cổ phiếu Vinamilk trên sàn chứng khoán"
    ],
    correct: 2,
    explanation: "Hàng tồn kho được tính vào Hạng mục Đầu tư (I - Đầu tư hàng tồn kho) trong GDP của năm mà nó được sản xuất ra (2024). Câu A: hàng cũ không tính. Câu B: trợ cấp hưu trí là chi chuyển nhượng (Transfer payment - Tr) không tính vào GDP. Câu D: giao dịch cổ phiếu là chuyển giao tài sản tài chính, không tạo ra sản phẩm mới.",
    isTrap: true,
    trapAdvice: "GDP tính theo NĂM SẢN XUẤT, không phụ thuộc vào việc đã bán được cho người tiêu dùng hay chưa. Nếu chưa bán, nó được hạch toán là đầu tư tồn kho của doanh nghiệp."
  },
  {
    id: "q19",
    category: "macro",
    topic: "Đo lường sản lượng quốc gia (GDP)",
    question: "Giả sử năm 2023 là năm gốc. Năm 2024, GDP danh nghĩa là 660 tỷ USD và Chỉ số điều chỉnh GDP (GDP Deflator) là 110. GDP thực tế của năm 2024 là:",
    options: [
      "600 tỷ USD",
      "726 tỷ USD",
      "550 tỷ USD",
      "770 tỷ USD"
    ],
    correct: 0,
    explanation: "Công thức: GDP Deflator = (GDP_n / GDP_r) * 100 <=> 110 = (660 / GDP_r) * 100 <=> GDP_r = (660 / 110) * 100 = 600 tỷ USD.",
    isTrap: false,
    trapAdvice: "Nhớ công thức: GDP thực tế = (GDP danh nghĩa / Chỉ số điều chỉnh GDP) * 100."
  },
  {
    id: "q20",
    category: "macro",
    topic: "Đo lường sản lượng quốc gia (GDP)",
    question: "Sự khác biệt cốt lõi giữa GDP và GNP là:",
    options: [
      "GDP tính theo giá thị trường còn GNP tính theo chi phí yếu tố",
      "GDP tính theo ranh giới lãnh thổ địa lý, còn GNP tính theo quyền sở hữu của công dân quốc gia",
      "GDP có tính khấu hao tài sản cố định còn GNP thì không",
      "GDP bao gồm xuất khẩu ròng còn GNP thì không"
    ],
    correct: 1,
    explanation: "GDP (Gross Domestic Product) tính theo lãnh thổ trong nước (bất kể do công dân nước nào làm ra). GNP (Gross National Product) tính theo quốc tịch/sở hữu công dân (bất kể làm ra ở trong nước hay ở nước ngoài). GNP = GDP + NFFI.",
    isTrap: false,
    trapAdvice: "Mẹo nhớ: 'Domestic' = Trong nước (lãnh thổ). 'National' = Quốc gia / Dân tộc (con người/công dân)."
  },

  // --- VĨ MÔ: LẠM PHÁT & THẤT NGHIỆP ---
  {
    id: "q21",
    category: "macro",
    topic: "Lạm phát & Chi phí sinh hoạt",
    question: "Một điểm khác biệt quan trọng giữa Chỉ số giá tiêu dùng (CPI) và Chỉ số giảm phát GDP (GDP Deflator) là:",
    options: [
      "CPI phản ánh giá của hàng hóa sản xuất trong nước, còn GDP Deflator tính cả hàng nhập khẩu",
      "CPI sử dụng giỏ hàng hóa cố định của người tiêu dùng, còn GDP Deflator phản ánh rổ hàng hóa sản xuất thay đổi hàng năm",
      "CPI luôn nhỏ hơn GDP Deflator trong mọi trường hợp",
      "CPI do ngân hàng trung ương tính toán, còn GDP Deflator do cục thuế tính"
    ],
    correct: 1,
    explanation: "CPI sử dụng giỏ hàng cố định của năm gốc (chỉ số Laspeyres), và CPI có tính đến hàng nhập khẩu tiêu dùng (như ô tô, điện thoại nhập). Ngược lại, GDP Deflator dùng lượng sản xuất thực tế của năm hiện hành (chỉ số Paasche) và CHỈ tính hàng sản xuất trong nước.",
    isTrap: true,
    trapAdvice: "Nếu đề thi hỏi: 'Giá máy bay chiến đấu do Bộ Quốc phòng mua tăng thì chỉ số nào bị ảnh hưởng?' -> GDP Deflator tăng, CPI KHÔNG đổi (vì người tiêu dùng điển hình không mua máy bay chiến đấu)!"
  },
  {
    id: "q22",
    category: "macro",
    topic: "Lạm phát & Chi phí sinh hoạt",
    question: "Bạn gửi tiết kiệm 100 triệu với lãi suất danh nghĩa 7%/năm. Năm đó tỷ lệ lạm phát thực tế là 4%/năm. Theo hiệu ứng Fisher, lãi suất thực tế bạn nhận được xấp xỉ là:",
    options: [
      "11%",
      "3%",
      "2.8%",
      "7%"
    ],
    correct: 1,
    explanation: "Phương trình Fisher: r ≈ i - π = 7% - 4% = 3%. Sức mua thực tế của số tiền bạn gửi tăng 3% sau một năm.",
    isTrap: false,
    trapAdvice: "Ai được lợi khi lạm phát cao hơn dự kiến? Người đi vay ĐƯỢC LỢI vì trả nợ bằng đồng tiền có giá trị thực thấp hơn. Người cho vay BỊ THIỆT."
  },
  {
    id: "q23",
    category: "macro",
    topic: "Thất nghiệp & Việc làm",
    question: "Một kỹ sư phần mềm vừa chủ động xin nghỉ việc tại công ty cũ để tìm kiếm một vị trí có mức lương và đãi ngộ tốt hơn tại công ty AI. Kỹ sư này thuộc loại thất nghiệp nào?",
    options: [
      "Thất nghiệp chu kỳ (Cyclical)",
      "Thất nghiệp ma sát (Frictional)",
      "Thất nghiệp cơ cấu (Structural)",
      "Không thuộc lực lượng lao động"
    ],
    correct: 1,
    explanation: "Thất nghiệp ma sát phát sinh do quá trình dịch chuyển và tìm kiếm công việc phù hợp với kỹ năng và sở thích cá nhân. Đây là loại thất nghiệp ngắn hạn và tất yếu trong nền kinh tế năng động.",
    isTrap: false,
    trapAdvice: "Phân biệt 3 loại thất nghiệp: Ma sát = chuyển việc/tìm việc; Cơ cấu = mất việc do kỹ năng không còn phù hợp công nghệ mới; Chu kỳ = mất việc do nền kinh tế suy thoái."
  },
  {
    id: "q24",
    category: "macro",
    topic: "Thất nghiệp & Việc làm",
    question: "Trong một nền kinh tế có 48 triệu người có việc làm, 2 triệu người thất nghiệp, và 15 triệu người trong độ tuổi lao động nhưng không có nhu cầu tìm việc. Tỷ lệ thất nghiệp của nền kinh tế này là:",
    options: [
      "4.0%",
      "3.08%",
      "4.17%",
      "13.3%"
    ],
    correct: 0,
    explanation: "Lực lượng lao động (LF) = Có việc + Thất nghiệp = 48 + 2 = 50 triệu người. (15 triệu người không tìm việc không thuộc LF). Tỷ lệ thất nghiệp u = (Thất nghiệp / LF) * 100% = (2 / 50) * 100% = 4.0%.",
    isTrap: true,
    trapAdvice: "Bẫy: Rất nhiều bạn lấy 2 chia cho Tổng dân số (48 + 2 + 15 = 65 triệu) ra 3.08%. Nhớ: Mẫu số tính tỷ lệ thất nghiệp BẮT BUỘC là LỰC LƯỢNG LAO ĐỘNG (LF), không phải tổng dân số!"
  },

  // --- VĨ MÔ: TIỀN TỆ & NGÂN HÀNG ---
  {
    id: "q25",
    category: "macro",
    topic: "Tiền tệ & Hệ thống ngân hàng",
    question: "Giả sử tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi là cr = 0.25, tỷ lệ dự trữ thực tế của các NHTM là rr = 0.15. Nếu Ngân hàng Trung ương mua vào 100 tỷ đồng trái phiếu chính phủ trên thị trường mở, lượng cung tiền sẽ:",
    options: [
      "Tăng thêm 312.5 tỷ đồng",
      "Tăng thêm 250 tỷ đồng",
      "Giảm đi 312.5 tỷ đồng",
      "Tăng thêm 100 tỷ đồng"
    ],
    correct: 0,
    explanation: "Số nhân tiền m_M = (cr + 1) / (cr + rr) = (0.25 + 1) / (0.25 + 0.15) = 1.25 / 0.4 = 3.125. NHTW mua trái phiếu làm cơ sở tiền MB tăng thêm 100 tỷ => Mức cung tiền tăng ΔMS = m_M * ΔMB = 3.125 * 100 = 312.5 tỷ đồng.",
    isTrap: false,
    trapAdvice: "NHTW MUA trái phiếu -> Bơm tiền mặt vào lưu thông -> MB tăng -> Cung tiền MS tăng. Ngược lại NHTW BÁN trái phiếu -> Hút tiền về -> MS giảm."
  },
  {
    id: "q26",
    category: "macro",
    topic: "Tiền tệ & Hệ thống ngân hàng",
    question: "Hành động nào sau đây của Ngân hàng Trung ương KHÔNG làm tăng mức cung tiền trong nền kinh tế?",
    options: [
      "Hạ tỷ lệ dự trữ bắt buộc đối với các ngân hàng thương mại",
      "Hạ lãi suất tái chiết khấu",
      "Bán tín phiếu hoặc trái phiếu chính phủ trên thị trường mở",
      "Mua ngoại tệ trên thị trường ngoại hối bằng đồng nội tệ"
    ],
    correct: 2,
    explanation: "Khi bán tín phiếu/trái phiếu, NHTW thu hồi tiền mặt từ hệ thống ngân hàng về, làm giảm cơ sở tiền (MB) và làm giảm mức cung tiền (chính sách tiền tệ thắt chặt).",
    isTrap: false,
    trapAdvice: "Bán chứng khoán = Hút tiền về; Mua chứng khoán = Bơm tiền ra."
  },

  // --- VĨ MÔ: TỔNG CẦU, TỔNG CUNG & CHÍNH SÁCH ---
  {
    id: "q27",
    category: "macro",
    topic: "Tổng cầu - Tổng cung (AD-AS)",
    question: "Đường Tổng cầu (AD) dốc xuống vì những hiệu ứng nào sau đây?",
    options: [
      "Hiệu ứng của cải (Pigou), Hiệu ứng lãi suất (Keynes), Hiệu ứng tỷ giá hối đoái (Mundell-Fleming)",
      "Hiệu ứng thay thế, Hiệu ứng thu nhập, Hiệu ứng lợi ích cận biên giảm dần",
      "Hiệu ứng chi phí cơ hội và hiệu ứng số nhân tiền",
      "Hiệu ứng lấn át và hiệu ứng đường cong Phillips"
    ],
    correct: 0,
    explanation: "3 lý do đường AD dốc xuống theo mức giá P: 1. Mức giá giảm -> của cải thực tăng -> tiêu dùng C tăng (Hiệu ứng của cải); 2. Mức giá giảm -> cầu tiền giảm -> lãi suất giảm -> đầu tư I tăng (Hiệu ứng lãi suất); 3. Lãi suất trong nước giảm -> vốn chảy ra -> đồng nội tệ giảm giá -> xuất khẩu ròng NX tăng (Hiệu ứng tỷ giá).",
    isTrap: true,
    trapAdvice: "Bẫy Vi mô vs Vĩ mô: Rất nhiều bạn chọn 'Hiệu ứng thay thế và thu nhập'. Đó là lý do đường cầu cá nhân/thị trường VI MÔ dốc xuống, KHÔNG PHẢI đường Tổng cầu AD của VĨ MÔ!"
  },
  {
    id: "q28",
    category: "macro",
    topic: "Tổng cầu - Tổng cung (AD-AS)",
    question: "Một cú sốc cung tiêu cực (ví dụ: giá dầu mỏ thế giới tăng vọt bất ngờ) trong ngắn hạn sẽ làm nền kinh tế rơi vào tình trạng:",
    options: [
      "Sản lượng tăng và mức giá giảm",
      "Đình lạm (Stagflation: sản lượng giảm kèm theo mức giá tăng)",
      "Sản lượng tăng và lạm phát cao",
      "Sản lượng không đổi và giảm phát"
    ],
    correct: 1,
    explanation: "Giá nguyên liệu đầu vào tăng làm đường Tổng cung ngắn hạn (SRAS) dịch chuyển sang trái/lên trên. Tại điểm cân bằng mới, sản lượng Y giảm (suy thoái, thất nghiệp tăng) đồng thời mức giá P tăng (lạm phát). Sự kết hợp giữa đình đốn và lạm phát gọi là 'Đình lạm' (Stagflation).",
    isTrap: false,
    trapAdvice: "Đình lạm là bài toán hóc búa nhất cho các nhà hoạch định chính sách vì dùng chính sách kích cầu để cứu sản lượng sẽ làm lạm phát càng trầm trọng."
  },
  {
    id: "q29",
    category: "macro",
    topic: "Chính sách Tài khóa",
    question: "Trong một nền kinh tế giản đơn có xu hướng tiêu dùng cận biên MPC = 0.75. Nếu Chính phủ tăng chi tiêu mua sắm hàng hóa G thêm 40 tỷ đồng, sản lượng cân bằng sẽ thay đổi như thế nào?",
    options: [
      "Tăng 160 tỷ đồng",
      "Tăng 120 tỷ đồng",
      "Tăng 40 tỷ đồng",
      "Tăng 300 tỷ đồng"
    ],
    correct: 0,
    explanation: "Số nhân chi tiêu m = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4. Sản lượng tăng thêm ΔY = m * ΔG = 4 * 40 = 160 tỷ đồng.",
    isTrap: false,
    trapAdvice: "Nếu câu hỏi đổi thành 'Chính phủ giảm thuế T đi 40 tỷ đồng', thì ΔY = m * MPC * (-ΔT) = 4 * 0.75 * 40 = 120 tỷ đồng (số nhân thuế luôn nhỏ hơn số nhân chi tiêu chính phủ một lượng bằng MPC)!"
  },
  {
    id: "q30",
    category: "macro",
    topic: "Chính sách Tài khóa",
    question: "'Hiệu ứng thoái lui đầu tư' hay 'Hiện tượng lấn át' (Crowding-out effect) xảy ra khi:",
    options: [
      "Chính phủ tăng thuế làm giảm thu nhập khả dụng của người dân",
      "Chính phủ tăng chi tiêu tài khóa dẫn đến thâm hụt ngân sách, phải vay mượn làm lãi suất tăng, từ đó bóp nghẹt đầu tư tư nhân",
      "Ngân hàng trung ương tăng lãi suất tái chiết khấu",
      "Đầu tư trực tiếp nước ngoài lấn át các doanh nghiệp nhỏ trong nước"
    ],
    correct: 1,
    explanation: "Khi Chính phủ áp dụng chính sách tài khóa mở rộng (tăng G), nhu cầu vay vốn của Chính phủ tăng làm lãi suất cân bằng trên thị trường vốn tăng lên. Lãi suất cao khiến chi phí vay của các doanh nghiệp tư nhân đắt đỏ hơn, làm giảm đầu tư tư nhân (I), làm triệt tiêu bớt tác động mở rộng ban đầu của chính sách tài khóa.",
    isTrap: false,
    trapAdvice: "Crowding out giải thích tại sao trên thực tế chính sách tài khóa không làm tăng sản lượng nhiều như số nhân lý thuyết dự đoán."
  },

  // --- BỔ SUNG CÁC CÂU BẪY & CHUYÊN ĐỀ NÂNG CAO ---
  {
    id: "q31",
    category: "micro",
    topic: "Độ co giãn & Thuế",
    question: "Chính phủ đánh một khoản thuế t = 2đ/đơn vị sản phẩm lên nhà sản xuất. Ai sẽ là người gánh chịu phần lớn số tiền thuế này nếu cầu về sản phẩm là hoàn toàn không co giãn (|E_D| = 0)?",
    options: [
      "Nhà sản xuất gánh chịu 100% thuế",
      "Người tiêu dùng gánh chịu 100% thuế",
      "Người tiêu dùng và nhà sản xuất chia đôi mỗi bên 50%",
      "Không ai phải chịu thuế vì không có giao dịch"
    ],
    correct: 1,
    explanation: "Quy tắc gánh nặng thuế: Bên nào có độ co giãn ít hơn (kém linh hoạt hơn) sẽ phải chịu nhiều thuế hơn. Khi cầu hoàn toàn không co giãn (|E_D| = 0, đường cầu thẳng đứng), người mua sẵn sàng mua bằng mọi giá => Nhà sản xuất chuyển toàn bộ 100% thuế vào giá bán cho người mua.",
    isTrap: true,
    trapAdvice: "Bẫy tâm lý: Đề bài nói 'đánh thuế lên NHÀ SẢN XUẤT' nên nhiều bạn tưởng nhà sản xuất phải chịu thuế. Về mặt kinh tế, việc đánh thuế lên người mua hay người bán cho kết quả kinh tế giống hệt nhau; ai gánh chịu thuế phụ thuộc vào độ co giãn tương đối giữa Cung và Cầu!"
  },
  {
    id: "q32",
    category: "micro",
    topic: "Cấu trúc thị trường",
    question: "Trong dài hạn, lợi nhuận kinh tế của một doanh nghiệp trong thị trường Cạnh tranh hoàn hảo và Cạnh tranh độc quyền sẽ có xu hướng:",
    options: [
      "Bằng 0 (chỉ đạt lợi nhuận bình thường)",
      "Luôn dương vì doanh nghiệp có sức mạnh thị trường",
      "Luôn âm vì cạnh tranh khốc liệt",
      "Tùy thuộc vào quy mô vốn của doanh nghiệp"
    ],
    correct: 0,
    explanation: "Do rào cản gia nhập thị trường bằng 0, nếu có lợi nhuận kinh tế dương, các doanh nghiệp mới sẽ ồ ạt gia nhập làm tăng cung, kéo giá giảm cho đến khi P = ATC và lợi nhuận kinh tế bị triệt tiêu về 0 trong dài hạn.",
    isTrap: true,
    trapAdvice: "Lợi nhuận kinh tế bằng 0 KHÔNG CÓ NGHĨA là chủ doanh nghiệp không có tiền! Họ vẫn nhận được lợi nhuận kế toán vừa đủ bù đắp chi phí cơ hội của vốn và công sức bỏ ra (được gọi là Lợi nhuận bình thường - Normal profit)."
  },
  {
    id: "q33",
    category: "macro",
    topic: "Kinh tế mở & Tỷ giá",
    question: "Khi Ngân hàng Nhà nước Việt Nam can thiệp để giữ cho đồng Việt Nam (VND) giảm giá so với Đô la Mỹ (USD), chính sách này có xu hướng:",
    options: [
      "Khuyến khích xuất khẩu của Việt Nam và hạn chế nhập khẩu",
      "Khuyến khích nhập khẩu và làm giảm xuất khẩu",
      "Làm giảm dự trữ ngoại hối của Ngân hàng Nhà nước",
      "Làm giảm giá hàng hóa nhập khẩu tính bằng VND"
    ],
    correct: 0,
    explanation: "Đồng nội tệ giảm giá (VND rẻ đi) khiến hàng hóa xuất khẩu của Việt Nam trở nên rẻ hơn trên thị trường quốc tế (thúc đẩy xuất khẩu X), đồng thời hàng nhập khẩu từ nước ngoài trở nên đắt hơn đối với người Việt (hạn chế nhập khẩu IM) => Cải thiện cán cân thương mại và kích thích tăng trưởng ngắn hạn.",
    isTrap: false,
    trapAdvice: "Nội tệ giảm giá có lợi cho xuất khẩu nhưng bất lợi cho nhập khẩu và người đi vay nợ ngoại tệ."
  },
  {
    id: "q34",
    category: "micro",
    topic: "Cung - Cầu & Cân bằng",
    question: "Khi cả đường Cầu và đường Cung của một mặt hàng đều dịch chuyển SANG PHẢI cùng một lúc, điều chắc chắn xảy ra là:",
    options: [
      "Giá cân bằng sẽ tăng",
      "Giá cân bằng sẽ giảm",
      "Lượng cân bằng sẽ tăng",
      "Lượng cân bằng sẽ không đổi"
    ],
    correct: 2,
    explanation: "Cầu tăng (dịch phải) làm P tăng, Q tăng. Cung tăng (dịch phải) làm P giảm, Q tăng. Kết hợp cả 2: Lượng cân bằng Q* CHẮC CHẮN TĂNG. Còn giá cân bằng P* chưa thể xác định được (phụ thuộc vào việc Cầu dịch nhiều hơn hay Cung dịch nhiều hơn).",
    isTrap: true,
    trapAdvice: "Mẹo thi A+: Khi cả 2 đường cùng dịch chuyển, LUÔN CÓ MỘT BIẾN CHẮC CHẮN VÀ MỘT BIẾN CHƯA THỂ XÁC ĐỊNH ĐƯỢC! Nhớ vẽ phác 2 trường hợp ra nháp trong 5 giây."
  },
  {
    id: "q35",
    category: "macro",
    topic: "Đo lường sản lượng quốc gia (GDP)",
    question: "Một nông dân bán lúa mì cho nhà máy bột mì với giá 10 triệu đồng. Nhà máy bán bột mì cho lò bánh mì với giá 18 triệu đồng. Lò bánh mì bán bánh mì cho người tiêu dùng với giá 25 triệu đồng. Khoản đóng góp vào GDP từ chuỗi sản xuất này là:",
    options: [
      "53 triệu đồng",
      "25 triệu đồng",
      "15 triệu đồng",
      "35 triệu đồng"
    ],
    correct: 1,
    explanation: "GDP chỉ tính giá trị của HÀNG HÓA CUỐI CÙNG (bánh mì bán cho người tiêu dùng = 25 triệu). Hoặc tính theo phương pháp Giá trị gia tăng (VA): VA_nông dân = 10; VA_bột mì = 18 - 10 = 8; VA_lò bánh = 25 - 18 = 7 => Tổng VA = 10 + 8 + 7 = 25 triệu đồng.",
    isTrap: true,
    trapAdvice: "Bẫy tính trùng (Double counting): Nếu cộng toàn bộ 10 + 18 + 25 = 53 triệu là sai nghiêm trọng vì giá trị lúa mì và bột mì đã nằm sẵn bên trong giá bán 25 triệu của chiếc bánh mì!"
  }
];
