// Ngân hàng 65 câu hỏi trắc nghiệm A+ Kinh tế học đại cương (Vi mô & Vĩ mô)
// Tuyển chọn chuẩn mực theo 12 chương giáo trình N. Gregory Mankiw và đề thi đại học
const QUIZ_DATA = [
  {
    "id": "q1",
    "category": "micro",
    "topic": "10 Nguyên lý & Chi phí cơ hội",
    "question": "Một sinh viên từ bỏ cơ hội đi làm thêm với mức lương 5 triệu đồng/tháng để tham gia khóa học có học phí 3 triệu đồng/tháng. Chi phí cơ hội của việc đi học mỗi tháng của sinh viên này là:",
    "options": [
      "3 triệu đồng",
      "5 triệu đồng",
      "8 triệu đồng",
      "2 triệu đồng"
    ],
    "correct": 2,
    "explanation": "Chi phí cơ hội bao gồm cả chi phí kế toán thực chi bằng tiền (học phí 3 triệu) và thu nhập bị từ bỏ (tiền lương 5 triệu). Tổng chi phí cơ hội = 3 + 5 = 8 triệu đồng.",
    "isTrap": true,
    "trapAdvice": "Bẫy thường gặp: Sinh viên chỉ chọn 5 triệu (nghĩ chi phí cơ hội chỉ là phần tiền lương mất đi) hoặc chỉ chọn 3 triệu (học phí). Chi phí cơ hội thực sự gồm cả chi phí hiện (explicit) và chi phí ẩn (implicit)!",
    "chapter": 1,
    "difficulty": "apply"
  },
  {
    "id": "q2",
    "category": "micro",
    "topic": "10 Nguyên lý & Chi phí cơ hội",
    "question": "Phát biểu nào sau đây là một tuyên bố mang tính 'Thực chứng' (Positive statement)?",
    "options": [
      "Chính phủ nên tăng trợ cấp thất nghiệp để đảm bảo an sinh.",
      "Mức lương tối thiểu quá thấp là điều bất công với người lao động.",
      "Tăng giá thuốc lá sẽ làm giảm lượng thuốc lá được tiêu thụ.",
      "Người giàu cần phải đóng thuế suất cao hơn người nghèo."
    ],
    "correct": 2,
    "explanation": "Tuyên bố thực chứng mô tả thế giới như nó vốn có, có thể kiểm chứng bằng số liệu thực nghiệm ('Nếu tăng giá thì lượng cầu giảm'). Các câu còn lại chứa từ 'nên', 'cần phải', 'bất công' thể hiện quan điểm chuẩn tắc (Normative) chứa đựng phán xét giá trị chủ quan.",
    "isTrap": false,
    "trapAdvice": "Ghi nhớ: Thực chứng = 'là gì / điều gì xảy ra' (kiểm chứng được). Chuẩn tắc = 'nên làm gì / đáng ra phải thế nào' (phán xét giá trị cá nhân).",
    "chapter": 1,
    "difficulty": "understand"
  },
  {
    "id": "q3",
    "category": "micro",
    "topic": "10 Nguyên lý & Chi phí cơ hội",
    "question": "Đường giới hạn khả năng sản xuất (PPF) có dạng cong lồi ra ngoài (bowed out) là do:",
    "options": [
      "Quy luật năng suất không đổi theo quy mô",
      "Quy luật chi phí cơ hội tăng dần",
      "Sự thiếu hụt nguồn lực công nghệ",
      "Sự phân bổ hoàn hảo của các nguồn lực giữa các ngành"
    ],
    "correct": 1,
    "explanation": "Đường PPF cong lồi phản ánh quy luật chi phí cơ hội tăng dần: các nguồn lực kinh tế không hoàn toàn thích hợp như nhau cho việc sản xuất các loại hàng hóa khác nhau.",
    "isTrap": false,
    "trapAdvice": "Nếu chi phí cơ hội là không đổi, đường PPF sẽ là một đường thẳng dốc xuống.",
    "chapter": 1,
    "difficulty": "remember"
  },
  {
    "id": "q4",
    "category": "micro",
    "topic": "Cung - Cầu & Cân bằng",
    "question": "Điều nào sau đây gây ra sự 'dịch chuyển' (shift) của đường cầu về xe máy điện sang phải?",
    "options": [
      "Giá pin xe máy điện giảm làm giá bán xe máy điện giảm",
      "Giá xăng dầu tăng mạnh",
      "Thu nhập của người tiêu dùng giảm (biết xe máy điện là hàng thông thường)",
      "Chính phủ giảm thuế giá trị gia tăng đối với xe máy điện"
    ],
    "correct": 1,
    "explanation": "Xăng dầu và xe máy chạy xăng là hàng thay thế cho xe máy điện. Khi giá xăng tăng, người dân giảm đi xe xăng và chuyển sang mua xe máy điện => Cầu xe máy điện tăng, đường cầu dịch chuyển sang phải. (Câu A và D làm thay đổi đường Cung hoặc di chuyển dọc đường cầu).",
    "isTrap": true,
    "trapAdvice": "Bẫy phân biệt: Thay đổi GIÁ CỦA CHÍNH HÀNG HÓA ĐÓ chỉ gây ra sự DI CHUYỂN DỌC (movement along) trên đường cầu. Chỉ có các yếu tố ngoài giá (thu nhập, thị hiếu, giá hàng liên quan, số lượng người mua...) mới làm DỊCH CHUYỂN (shift) đường cầu!",
    "chapter": 2,
    "difficulty": "understand"
  },
  {
    "id": "q5",
    "category": "micro",
    "topic": "Cung - Cầu & Cân bằng",
    "question": "Thị trường có hàm cầu Q_D = 100 - 2P và hàm cung Q_S = 10 + P. Mức giá và sản lượng cân bằng là:",
    "options": [
      "P* = 30; Q* = 40",
      "P* = 40; Q* = 30",
      "P* = 30; Q* = 70",
      "P* = 20; Q* = 60"
    ],
    "correct": 0,
    "explanation": "Cân bằng xảy ra khi Q_D = Q_S <=> 100 - 2P = 10 + P <=> 3P = 90 <=> P* = 30. Thay P* = 30 vào Q_D ta được Q* = 100 - 2(30) = 40.",
    "isTrap": false,
    "trapAdvice": "Luôn kiểm tra lại bằng cách thay P* vào cả hai phương trình cung và cầu để xem kết quả Q có bằng nhau không.",
    "chapter": 3,
    "difficulty": "apply"
  },
  {
    "id": "q6",
    "category": "micro",
    "topic": "Cung - Cầu & Cân bằng",
    "question": "Khi Chính phủ quy định mức Giá trần (Price Ceiling) có hiệu lực trên thị trường, kết quả sẽ dẫn tới:",
    "options": [
      "Thị trường dư thừa hàng hóa",
      "Giá trần cao hơn giá cân bằng thị trường",
      "Thị trường thiếu hụt hàng hóa và xuất hiện thị trường chợ đen",
      "Lượng cung lớn hơn lượng cầu"
    ],
    "correct": 2,
    "explanation": "Giá trần có hiệu lực phải nằm DƯỚI giá cân bằng. Tại mức giá thấp này, lượng cầu tăng cao (Q_D > Q*) trong khi người bán cắt giảm lượng cung (Q_S < Q*), dẫn đến tình trạng thiếu hụt (Shortage = Q_D - Q_S) và phát sinh chợ đen.",
    "isTrap": true,
    "trapAdvice": "Bẫy trần/sàn: 'Trần' (Ceiling) nằm ở trên đầu nhưng ĐỂ CÓ HIỆU LỰC lại phải đặt DƯỚI giá cân bằng! 'Sàn' (Floor) ở dưới chân nhưng để có hiệu lực lại phải đặt TRÊN giá cân bằng!",
    "chapter": 3,
    "difficulty": "apply"
  },
  {
    "id": "q7",
    "category": "micro",
    "topic": "Cung - Cầu & Cân bằng",
    "question": "Thị trường có P* = 30, Q* = 40. Hàm cầu P = 50 - 0.5Q, hàm cung P = 10 + 0.5Q. Thặng dư tiêu dùng (CS) bằng:",
    "options": [
      "400",
      "800",
      "200",
      "600"
    ],
    "correct": 0,
    "explanation": "Hàm cầu P = 50 - 0.5Q cắt trục tung tại P_max = 50. CS là diện tích tam giác: CS = 0.5 * (P_max - P*) * Q* = 0.5 * (50 - 30) * 40 = 0.5 * 20 * 40 = 400.",
    "isTrap": false,
    "trapAdvice": "Nhớ công thức diện tích tam giác: luôn có hệ số 1/2. Rất nhiều bạn quên nhân 0.5 dẫn đến chọn đáp án 800!",
    "chapter": 3,
    "difficulty": "understand"
  },
  {
    "id": "q8",
    "category": "micro",
    "topic": "Độ co giãn",
    "question": "Khi giá một bát phở tăng từ 40.000đ lên 50.000đ, lượng khách giảm từ 120 bát xuống 80 bát/ngày. Theo phương pháp trung điểm (midpoint), độ co giãn của cầu theo giá xấp xỉ bằng:",
    "options": [
      "-1.80",
      "-0.56",
      "-1.00",
      "-2.25"
    ],
    "correct": 0,
    "explanation": "%ΔQ = (80 - 120) / ((80 + 120)/2) = -40 / 100 = -40%. %ΔP = (50 - 40) / ((40 + 50)/2) = 10 / 45 = +22.22%. E_D = -40% / 22.22% ≈ -1.80.",
    "isTrap": false,
    "trapAdvice": "Phương pháp trung điểm chia cho trung bình cộng (Q1+Q2)/2 và (P1+P2)/2 để độ co giãn như nhau dù giá tăng hay giảm.",
    "chapter": 4,
    "difficulty": "understand"
  },
  {
    "id": "q9",
    "category": "micro",
    "topic": "Độ co giãn",
    "question": "Nếu độ co giãn của cầu theo giá đối với nước ngọt có ga là |E_D| = 1.6, khi nhà sản xuất quyết định GIẢM giá bán thì Tổng doanh thu (TR) sẽ:",
    "options": [
      "Tăng lên",
      "Giảm đi",
      "Không đổi",
      "Không thể xác định"
    ],
    "correct": 0,
    "explanation": "Vì |E_D| = 1.6 > 1 (cầu co giãn nhiều), % tăng của lượng cầu lớn hơn % giảm của giá (%ΔQ > %ΔP). Do đó việc giảm giá sẽ làm Tổng doanh thu TR = P * Q TĂNG LÊN.",
    "isTrap": true,
    "trapAdvice": "Mẹo nhớ: Cầu co giãn nhiều (|E| > 1) -> Giá và Doanh thu biến thiên NGƯỢC CHIỀU. Cầu co giãn ít (|E| < 1) -> Giá và Doanh thu biến thiên CÙNG CHIỀU.",
    "chapter": 4,
    "difficulty": "apply"
  },
  {
    "id": "q10",
    "category": "micro",
    "topic": "Độ co giãn",
    "question": "Biết hệ số co giãn chéo giữa hàng hóa X và Y là E_XY = -0.75, và co giãn theo thu nhập của X là E_I = 1.4. Kết luận nào sau đây là CHÍNH XÁC?",
    "options": [
      "X là hàng thay thế cho Y, và X là hàng thứ cấp",
      "X là hàng bổ sung cho Y, và X là hàng cao cấp (xa xỉ)",
      "X là hàng bổ sung cho Y, và X là hàng thiết yếu",
      "X là hàng thay thế cho Y, và X là hàng thông thường thiết yếu"
    ],
    "correct": 1,
    "explanation": "E_XY = -0.75 < 0 nghĩa là khi giá Y tăng, lượng mua X giảm -> X và Y là hai hàng hóa BỔ SUNG cho nhau. E_I = 1.4 > 1 nghĩa là tốc độ tăng cầu nhanh hơn tăng thu nhập -> X là hàng hóa CAO CẤP (xa xỉ).",
    "isTrap": false,
    "trapAdvice": "Nhớ kỹ các mốc: E_I < 0: Cấp thấp; 0 < E_I <= 1: Thiết yếu; E_I > 1: Cao cấp. E_XY > 0: Thay thế; E_XY < 0: Bổ sung.",
    "chapter": 4,
    "difficulty": "advanced"
  },
  {
    "id": "q11",
    "category": "micro",
    "topic": "Hành vi người tiêu dùng",
    "question": "Một người tiêu dùng đang chi tiêu hết thu nhập cho hai hàng hóa X và Y. Hiện tại MU_X / P_X = 12 và MU_Y / P_Y = 8. Để tối đa hóa tổng thỏa dụng (TU), người này nên:",
    "options": [
      "Tăng mua X và giảm mua Y",
      "Tăng mua Y và giảm mua X",
      "Giữ nguyên kết hợp hiện tại vì đã đạt tối ưu",
      "Tăng mua cả hai loại hàng hóa"
    ],
    "correct": 0,
    "explanation": "Vì MU_X / P_X > MU_Y / P_Y, một đồng chi thêm cho X đem lại thỏa dụng biên lớn hơn một đồng chi cho Y. Do đó, người tiêu dùng nên chuyển tiền từ Y sang mua thêm X (Tăng X, giảm Y) cho đến khi đạt cân bằng MU_X / P_X = MU_Y / P_Y.",
    "isTrap": false,
    "trapAdvice": "Quy luật lợi ích biên giảm dần: khi mua thêm X, MU_X sẽ giảm xuống; khi giảm bớt Y, MU_Y sẽ tăng lên, đưa 2 tỷ số về trạng thái bằng nhau.",
    "chapter": 5,
    "difficulty": "remember"
  },
  {
    "id": "q12",
    "category": "micro",
    "topic": "Hành vi người tiêu dùng",
    "question": "Độ dốc của đường ngân sách thể hiện điều gì?",
    "options": [
      "Tỷ lệ thay thế cận biên của người tiêu dùng",
      "Tỷ giá tương đối giữa hai hàng hóa trên thị trường (-P_X / P_Y)",
      "Mức độ thỏa dụng tối đa mà người tiêu dùng có thể đạt được",
      "Sự thay đổi thu nhập khi giá cả biến động"
    ],
    "correct": 1,
    "explanation": "Phương trình đường ngân sách: X*P_X + Y*P_Y = I <=> Y = (I/P_Y) - (P_X/P_Y)*X. Do đó độ dốc của nó là -P_X / P_Y, phản ánh chi phí cơ hội thị trường của hàng hóa X tính bằng hàng hóa Y.",
    "isTrap": true,
    "trapAdvice": "Bẫy: Độ dốc đường BÀNG QUAN là MRS_XY = -MU_X / MU_Y. Còn độ dốc đường NGÂN SÁCH là -P_X / P_Y. Tại điểm tối ưu hai đường này tiếp xúc nhau nên MRS_XY = P_X / P_Y.",
    "chapter": 5,
    "difficulty": "apply"
  },
  {
    "id": "q13",
    "category": "micro",
    "topic": "Sản xuất và Chi phí",
    "question": "Doanh nghiệp có hàm tổng chi phí ngắn hạn TC = Q^2 + 20Q + 900. Mức sản lượng để chi phí trung bình (ATC) đạt giá trị nhỏ nhất là:",
    "options": [
      "Q = 20",
      "Q = 30",
      "Q = 45",
      "Q = 90"
    ],
    "correct": 1,
    "explanation": "ATC = TC/Q = Q + 20 + 900/Q. Để ATC cực tiểu, ta có thể đạo hàm ATC' = 1 - 900/Q^2 = 0 => Q^2 = 900 => Q = 30. (Cách 2: Giải MC = ATC: MC = 2Q + 20; 2Q + 20 = Q + 20 + 900/Q => Q = 900/Q => Q^2 = 900 => Q = 30).",
    "isTrap": false,
    "trapAdvice": "Quy tắc vàng: ATC đạt cực tiểu tại điểm MC = ATC. Tính theo cách cho MC = ATC thường nhanh và ít nhầm hơn đạo hàm phân thức.",
    "chapter": 5,
    "difficulty": "advanced"
  },
  {
    "id": "q14",
    "category": "micro",
    "topic": "Sản xuất và Chi phí",
    "question": "Khi Năng suất cận biên của lao động (MP_L) lớn hơn Năng suất trung bình của lao động (AP_L), thì:",
    "options": [
      "AP_L đang tăng",
      "AP_L đang giảm",
      "AP_L đạt cực đại",
      "Tổng sản lượng (TP) đang giảm"
    ],
    "correct": 0,
    "explanation": "Mối quan hệ cận biên và trung bình: Bất cứ khi nào giá trị cận biên lớn hơn giá trị trung bình (MP > AP), nó sẽ kéo giá trị trung bình tăng lên (AP đang tăng). Khi MP < AP thì AP giảm. Khi MP = AP thì AP đạt cực đại.",
    "isTrap": false,
    "trapAdvice": "Tương tự với điểm số: Nếu điểm bài kiểm tra tiếp theo (cận biên) cao hơn điểm trung bình hiện tại, thì điểm trung bình của bạn sẽ tăng!",
    "chapter": 6,
    "difficulty": "understand"
  },
  {
    "id": "q15",
    "category": "micro",
    "topic": "Sản xuất và Chi phí",
    "question": "Trong ngắn hạn, một doanh nghiệp cạnh tranh hoàn hảo sẽ quyết định TẠM DỪNG SẢN XUẤT (đóng cửa) khi:",
    "options": [
      "Lợi nhuận âm (bị lỗ)",
      "Giá thị trường P < ATC_min",
      "Giá thị trường P < AVC_min",
      "Tổng doanh thu TR < Tổng chi phí TC"
    ],
    "correct": 2,
    "explanation": "Trong ngắn hạn, dù đóng cửa doanh nghiệp vẫn phải trả toàn bộ chi phí cố định (FC). Nếu P >= AVC, doanh nghiệp thu hồi được chi phí biến đổi và một phần chi phí cố định nên vẫn nên sản xuất. Chỉ khi P < AVC_min, doanh nghiệp không bù đắp nổi chi phí biến đổi, sản xuất sẽ lỗ nhiều hơn là đóng cửa.",
    "isTrap": true,
    "trapAdvice": "Bẫy cực phổ biến: Rất nhiều bạn chọn P < ATC. Khi P < ATC, doanh nghiệp chỉ bị lỗ nhưng VẪN TIẾP TỤC SẢN XUẤT trong ngắn hạn nếu P >= AVC! Chỉ đóng cửa khi P < AVC.",
    "chapter": 6,
    "difficulty": "apply"
  },
  {
    "id": "q16",
    "category": "micro",
    "topic": "Cấu trúc thị trường",
    "question": "Một doanh nghiệp độc quyền thuần túy đối mặt với đường cầu P = 120 - Q và có hàm chi phí cận biên MC = 20 + Q. Sản lượng và giá bán tối đa hóa lợi nhuận là:",
    "options": [
      "Q = 50; P = 70",
      "Q = 33.3; P = 86.7",
      "Q = 25; P = 95",
      "Q = 40; P = 80"
    ],
    "correct": 1,
    "explanation": "Hàm cầu P = 120 - Q => TR = P*Q = 120Q - Q^2 => Doanh thu cận biên MR = 120 - 2Q. Điều kiện tối đa hóa lợi nhuận: MR = MC <=> 120 - 2Q = 20 + Q <=> 3Q = 100 <=> Q* = 100/3 ≈ 33.33. Thay vào hàm cầu: P* = 120 - 33.33 = 86.67.",
    "isTrap": true,
    "trapAdvice": "Bẫy: Rất nhiều sinh viên cho P = MC (đó là cạnh tranh hoàn hảo, không phải độc quyền!). Độc quyền luôn phải tìm MR trước (MR có hệ số góc gấp đôi cầu) rồi mới cho MR = MC.",
    "chapter": 6,
    "difficulty": "advanced"
  },
  {
    "id": "q17",
    "category": "micro",
    "topic": "Cấu trúc thị trường",
    "question": "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm của thị trường Cạnh tranh hoàn hảo?",
    "options": [
      "Có vô số người mua và người bán",
      "Sản phẩm có sự khác biệt hóa mạnh mẽ",
      "Tự do gia nhập và rút lui khỏi thị trường",
      "Người bán và người mua đều chấp nhận giá (Price takers)"
    ],
    "correct": 1,
    "explanation": "Trong thị trường cạnh tranh hoàn hảo, sản phẩm là ĐỒNG NHẤT (homogeneous/identical), hoàn toàn không có sự khác biệt hóa. Khác biệt hóa sản phẩm là đặc điểm của thị trường Cạnh tranh độc quyền (Monopolistic Competition).",
    "isTrap": false,
    "trapAdvice": "Đọc kỹ từ 'KHÔNG PHẢI' trong đề bài.",
    "chapter": 7,
    "difficulty": "understand"
  },
  {
    "id": "q18",
    "category": "macro",
    "topic": "Đo lường sản lượng quốc gia (GDP)",
    "question": "Giao dịch nào sau đây ĐƯỢC TÍNH vào GDP của Việt Nam năm 2024?",
    "options": [
      "Một người mua lại chiếc xe máy Honda đã qua sử dụng với giá 20 triệu đồng",
      "Chính phủ chi trả 500 tỷ đồng tiền lương hưu cho cán bộ về hưu",
      "Một công ty may Việt Nam sản xuất 10.000 chiếc áo trong năm 2024 nhưng chưa bán được và để trong kho",
      "Một nhà đầu tư mua 1.000 cổ phiếu Vinamilk trên sàn chứng khoán"
    ],
    "correct": 2,
    "explanation": "Hàng tồn kho được tính vào Hạng mục Đầu tư (I - Đầu tư hàng tồn kho) trong GDP của năm mà nó được sản xuất ra (2024). Câu A: hàng cũ không tính. Câu B: trợ cấp hưu trí là chi chuyển nhượng (Transfer payment - Tr) không tính vào GDP. Câu D: giao dịch cổ phiếu là chuyển giao tài sản tài chính, không tạo ra sản phẩm mới.",
    "isTrap": true,
    "trapAdvice": "GDP tính theo NĂM SẢN XUẤT, không phụ thuộc vào việc đã bán được cho người tiêu dùng hay chưa. Nếu chưa bán, nó được hạch toán là đầu tư tồn kho của doanh nghiệp.",
    "chapter": 7,
    "difficulty": "apply"
  },
  {
    "id": "q19",
    "category": "macro",
    "topic": "Đo lường sản lượng quốc gia (GDP)",
    "question": "Giả sử năm 2023 là năm gốc. Năm 2024, GDP danh nghĩa là 660 tỷ USD và Chỉ số điều chỉnh GDP (GDP Deflator) là 110. GDP thực tế của năm 2024 là:",
    "options": [
      "600 tỷ USD",
      "726 tỷ USD",
      "550 tỷ USD",
      "770 tỷ USD"
    ],
    "correct": 0,
    "explanation": "Công thức: GDP Deflator = (GDP_n / GDP_r) * 100 <=> 110 = (660 / GDP_r) * 100 <=> GDP_r = (660 / 110) * 100 = 600 tỷ USD.",
    "isTrap": false,
    "trapAdvice": "Nhớ công thức: GDP thực tế = (GDP danh nghĩa / Chỉ số điều chỉnh GDP) * 100.",
    "chapter": 8,
    "difficulty": "remember"
  },
  {
    "id": "q20",
    "category": "macro",
    "topic": "Đo lường sản lượng quốc gia (GDP)",
    "question": "Sự khác biệt cốt lõi giữa GDP và GNP là:",
    "options": [
      "GDP tính theo giá thị trường còn GNP tính theo chi phí yếu tố",
      "GDP tính theo ranh giới lãnh thổ địa lý, còn GNP tính theo quyền sở hữu của công dân quốc gia",
      "GDP có tính khấu hao tài sản cố định còn GNP thì không",
      "GDP bao gồm xuất khẩu ròng còn GNP thì không"
    ],
    "correct": 1,
    "explanation": "GDP (Gross Domestic Product) tính theo lãnh thổ trong nước (bất kể do công dân nước nào làm ra). GNP (Gross National Product) tính theo quốc tịch/sở hữu công dân (bất kể làm ra ở trong nước hay ở nước ngoài). GNP = GDP + NFFI.",
    "isTrap": false,
    "trapAdvice": "Mẹo nhớ: 'Domestic' = Trong nước (lãnh thổ). 'National' = Quốc gia / Dân tộc (con người/công dân).",
    "chapter": 8,
    "difficulty": "understand"
  },
  {
    "id": "q21",
    "category": "macro",
    "topic": "Lạm phát & Chi phí sinh hoạt",
    "question": "Một điểm khác biệt quan trọng giữa Chỉ số giá tiêu dùng (CPI) và Chỉ số giảm phát GDP (GDP Deflator) là:",
    "options": [
      "CPI phản ánh giá của hàng hóa sản xuất trong nước, còn GDP Deflator tính cả hàng nhập khẩu",
      "CPI sử dụng giỏ hàng hóa cố định của người tiêu dùng, còn GDP Deflator phản ánh rổ hàng hóa sản xuất thay đổi hàng năm",
      "CPI luôn nhỏ hơn GDP Deflator trong mọi trường hợp",
      "CPI do ngân hàng trung ương tính toán, còn GDP Deflator do cục thuế tính"
    ],
    "correct": 1,
    "explanation": "CPI sử dụng giỏ hàng cố định của năm gốc (chỉ số Laspeyres), và CPI có tính đến hàng nhập khẩu tiêu dùng (như ô tô, điện thoại nhập). Ngược lại, GDP Deflator dùng lượng sản xuất thực tế của năm hiện hành (chỉ số Paasche) và CHỈ tính hàng sản xuất trong nước.",
    "isTrap": true,
    "trapAdvice": "Nếu đề thi hỏi: 'Giá máy bay chiến đấu do Bộ Quốc phòng mua tăng thì chỉ số nào bị ảnh hưởng?' -> GDP Deflator tăng, CPI KHÔNG đổi (vì người tiêu dùng điển hình không mua máy bay chiến đấu)!",
    "chapter": 9,
    "difficulty": "apply"
  },
  {
    "id": "q22",
    "category": "macro",
    "topic": "Lạm phát & Chi phí sinh hoạt",
    "question": "Bạn gửi tiết kiệm 100 triệu với lãi suất danh nghĩa 7%/năm. Năm đó tỷ lệ lạm phát thực tế là 4%/năm. Theo hiệu ứng Fisher, lãi suất thực tế bạn nhận được xấp xỉ là:",
    "options": [
      "11%",
      "3%",
      "2.8%",
      "7%"
    ],
    "correct": 1,
    "explanation": "Phương trình Fisher: r ≈ i - π = 7% - 4% = 3%. Sức mua thực tế của số tiền bạn gửi tăng 3% sau một năm.",
    "isTrap": false,
    "trapAdvice": "Ai được lợi khi lạm phát cao hơn dự kiến? Người đi vay ĐƯỢC LỢI vì trả nợ bằng đồng tiền có giá trị thực thấp hơn. Người cho vay BỊ THIỆT.",
    "chapter": 9,
    "difficulty": "understand"
  },
  {
    "id": "q23",
    "category": "macro",
    "topic": "Thất nghiệp & Việc làm",
    "question": "Một kỹ sư phần mềm vừa chủ động xin nghỉ việc tại công ty cũ để tìm kiếm một vị trí có mức lương và đãi ngộ tốt hơn tại công ty AI. Kỹ sư này thuộc loại thất nghiệp nào?",
    "options": [
      "Thất nghiệp chu kỳ (Cyclical)",
      "Thất nghiệp ma sát (Frictional)",
      "Thất nghiệp cơ cấu (Structural)",
      "Không thuộc lực lượng lao động"
    ],
    "correct": 1,
    "explanation": "Thất nghiệp ma sát phát sinh do quá trình dịch chuyển và tìm kiếm công việc phù hợp với kỹ năng và sở thích cá nhân. Đây là loại thất nghiệp ngắn hạn và tất yếu trong nền kinh tế năng động.",
    "isTrap": false,
    "trapAdvice": "Phân biệt 3 loại thất nghiệp: Ma sát = chuyển việc/tìm việc; Cơ cấu = mất việc do kỹ năng không còn phù hợp công nghệ mới; Chu kỳ = mất việc do nền kinh tế suy thoái.",
    "chapter": 9,
    "difficulty": "understand"
  },
  {
    "id": "q24",
    "category": "macro",
    "topic": "Thất nghiệp & Việc làm",
    "question": "Trong một nền kinh tế có 48 triệu người có việc làm, 2 triệu người thất nghiệp, và 15 triệu người trong độ tuổi lao động nhưng không có nhu cầu tìm việc. Tỷ lệ thất nghiệp của nền kinh tế này là:",
    "options": [
      "4.0%",
      "3.08%",
      "4.17%",
      "13.3%"
    ],
    "correct": 0,
    "explanation": "Lực lượng lao động (LF) = Có việc + Thất nghiệp = 48 + 2 = 50 triệu người. (15 triệu người không tìm việc không thuộc LF). Tỷ lệ thất nghiệp u = (Thất nghiệp / LF) * 100% = (2 / 50) * 100% = 4.0%.",
    "isTrap": true,
    "trapAdvice": "Bẫy: Rất nhiều bạn lấy 2 chia cho Tổng dân số (48 + 2 + 15 = 65 triệu) ra 3.08%. Nhớ: Mẫu số tính tỷ lệ thất nghiệp BẮT BUỘC là LỰC LƯỢNG LAO ĐỘNG (LF), không phải tổng dân số!",
    "chapter": 10,
    "difficulty": "apply"
  },
  {
    "id": "q25",
    "category": "macro",
    "topic": "Tiền tệ & Hệ thống ngân hàng",
    "question": "Giả sử tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi là cr = 0.25, tỷ lệ dự trữ thực tế của các NHTM là rr = 0.15. Nếu Ngân hàng Trung ương mua vào 100 tỷ đồng trái phiếu chính phủ trên thị trường mở, lượng cung tiền sẽ:",
    "options": [
      "Tăng thêm 312.5 tỷ đồng",
      "Tăng thêm 250 tỷ đồng",
      "Giảm đi 312.5 tỷ đồng",
      "Tăng thêm 100 tỷ đồng"
    ],
    "correct": 0,
    "explanation": "Số nhân tiền m_M = (cr + 1) / (cr + rr) = (0.25 + 1) / (0.25 + 0.15) = 1.25 / 0.4 = 3.125. NHTW mua trái phiếu làm cơ sở tiền MB tăng thêm 100 tỷ => Mức cung tiền tăng ΔMS = m_M * ΔMB = 3.125 * 100 = 312.5 tỷ đồng.",
    "isTrap": false,
    "trapAdvice": "NHTW MUA trái phiếu -> Bơm tiền mặt vào lưu thông -> MB tăng -> Cung tiền MS tăng. Ngược lại NHTW BÁN trái phiếu -> Hút tiền về -> MS giảm.",
    "chapter": 10,
    "difficulty": "understand"
  },
  {
    "id": "q26",
    "category": "macro",
    "topic": "Tiền tệ & Hệ thống ngân hàng",
    "question": "Hành động nào sau đây của Ngân hàng Trung ương KHÔNG làm tăng mức cung tiền trong nền kinh tế?",
    "options": [
      "Hạ tỷ lệ dự trữ bắt buộc đối với các ngân hàng thương mại",
      "Hạ lãi suất tái chiết khấu",
      "Bán tín phiếu hoặc trái phiếu chính phủ trên thị trường mở",
      "Mua ngoại tệ trên thị trường ngoại hối bằng đồng nội tệ"
    ],
    "correct": 2,
    "explanation": "Khi bán tín phiếu/trái phiếu, NHTW thu hồi tiền mặt từ hệ thống ngân hàng về, làm giảm cơ sở tiền (MB) và làm giảm mức cung tiền (chính sách tiền tệ thắt chặt).",
    "isTrap": false,
    "trapAdvice": "Bán chứng khoán = Hút tiền về; Mua chứng khoán = Bơm tiền ra.",
    "chapter": 10,
    "difficulty": "advanced"
  },
  {
    "id": "q27",
    "category": "macro",
    "topic": "Tổng cầu - Tổng cung (AD-AS)",
    "question": "Đường Tổng cầu (AD) dốc xuống vì những hiệu ứng nào sau đây?",
    "options": [
      "Hiệu ứng của cải (Pigou), Hiệu ứng lãi suất (Keynes), Hiệu ứng tỷ giá hối đoái (Mundell-Fleming)",
      "Hiệu ứng thay thế, Hiệu ứng thu nhập, Hiệu ứng lợi ích cận biên giảm dần",
      "Hiệu ứng chi phí cơ hội và hiệu ứng số nhân tiền",
      "Hiệu ứng lấn át và hiệu ứng đường cong Phillips"
    ],
    "correct": 0,
    "explanation": "3 lý do đường AD dốc xuống theo mức giá P: 1. Mức giá giảm -> của cải thực tăng -> tiêu dùng C tăng (Hiệu ứng của cải); 2. Mức giá giảm -> cầu tiền giảm -> lãi suất giảm -> đầu tư I tăng (Hiệu ứng lãi suất); 3. Lãi suất trong nước giảm -> vốn chảy ra -> đồng nội tệ giảm giá -> xuất khẩu ròng NX tăng (Hiệu ứng tỷ giá).",
    "isTrap": true,
    "trapAdvice": "Bẫy Vi mô vs Vĩ mô: Rất nhiều bạn chọn 'Hiệu ứng thay thế và thu nhập'. Đó là lý do đường cầu cá nhân/thị trường VI MÔ dốc xuống, KHÔNG PHẢI đường Tổng cầu AD của VĨ MÔ!",
    "chapter": 11,
    "difficulty": "understand"
  },
  {
    "id": "q28",
    "category": "macro",
    "topic": "Tổng cầu - Tổng cung (AD-AS)",
    "question": "Một cú sốc cung tiêu cực (ví dụ: giá dầu mỏ thế giới tăng vọt bất ngờ) trong ngắn hạn sẽ làm nền kinh tế rơi vào tình trạng:",
    "options": [
      "Sản lượng tăng và mức giá giảm",
      "Đình lạm (Stagflation: sản lượng giảm kèm theo mức giá tăng)",
      "Sản lượng tăng và lạm phát cao",
      "Sản lượng không đổi và giảm phát"
    ],
    "correct": 1,
    "explanation": "Giá nguyên liệu đầu vào tăng làm đường Tổng cung ngắn hạn (SRAS) dịch chuyển sang trái/lên trên. Tại điểm cân bằng mới, sản lượng Y giảm (suy thoái, thất nghiệp tăng) đồng thời mức giá P tăng (lạm phát). Sự kết hợp giữa đình đốn và lạm phát gọi là 'Đình lạm' (Stagflation).",
    "isTrap": false,
    "trapAdvice": "Đình lạm là bài toán hóc búa nhất cho các nhà hoạch định chính sách vì dùng chính sách kích cầu để cứu sản lượng sẽ làm lạm phát càng trầm trọng.",
    "chapter": 11,
    "difficulty": "apply"
  },
  {
    "id": "q29",
    "category": "macro",
    "topic": "Chính sách Tài khóa",
    "question": "Trong một nền kinh tế giản đơn có xu hướng tiêu dùng cận biên MPC = 0.75. Nếu Chính phủ tăng chi tiêu mua sắm hàng hóa G thêm 40 tỷ đồng, sản lượng cân bằng sẽ thay đổi như thế nào?",
    "options": [
      "Tăng 160 tỷ đồng",
      "Tăng 120 tỷ đồng",
      "Tăng 40 tỷ đồng",
      "Tăng 300 tỷ đồng"
    ],
    "correct": 0,
    "explanation": "Số nhân chi tiêu m = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4. Sản lượng tăng thêm ΔY = m * ΔG = 4 * 40 = 160 tỷ đồng.",
    "isTrap": false,
    "trapAdvice": "Nếu câu hỏi đổi thành 'Chính phủ giảm thuế T đi 40 tỷ đồng', thì ΔY = m * MPC * (-ΔT) = 4 * 0.75 * 40 = 120 tỷ đồng (số nhân thuế luôn nhỏ hơn số nhân chi tiêu chính phủ một lượng bằng MPC)!",
    "chapter": 11,
    "difficulty": "advanced"
  },
  {
    "id": "q30",
    "category": "macro",
    "topic": "Chính sách Tài khóa",
    "question": "'Hiệu ứng thoái lui đầu tư' hay 'Hiện tượng lấn át' (Crowding-out effect) xảy ra khi:",
    "options": [
      "Chính phủ tăng thuế làm giảm thu nhập khả dụng của người dân",
      "Chính phủ tăng chi tiêu tài khóa dẫn đến thâm hụt ngân sách, phải vay mượn làm lãi suất tăng, từ đó bóp nghẹt đầu tư tư nhân",
      "Ngân hàng trung ương tăng lãi suất tái chiết khấu",
      "Đầu tư trực tiếp nước ngoài lấn át các doanh nghiệp nhỏ trong nước"
    ],
    "correct": 1,
    "explanation": "Khi Chính phủ áp dụng chính sách tài khóa mở rộng (tăng G), nhu cầu vay vốn của Chính phủ tăng làm lãi suất cân bằng trên thị trường vốn tăng lên. Lãi suất cao khiến chi phí vay của các doanh nghiệp tư nhân đắt đỏ hơn, làm giảm đầu tư tư nhân (I), làm triệt tiêu bớt tác động mở rộng ban đầu của chính sách tài khóa.",
    "isTrap": false,
    "trapAdvice": "Crowding out giải thích tại sao trên thực tế chính sách tài khóa không làm tăng sản lượng nhiều như số nhân lý thuyết dự đoán.",
    "chapter": 12,
    "difficulty": "understand"
  },
  {
    "id": "q31",
    "category": "micro",
    "topic": "Độ co giãn & Thuế",
    "question": "Chính phủ đánh một khoản thuế t = 2đ/đơn vị sản phẩm lên nhà sản xuất. Ai sẽ là người gánh chịu phần lớn số tiền thuế này nếu cầu về sản phẩm là hoàn toàn không co giãn (|E_D| = 0)?",
    "options": [
      "Nhà sản xuất gánh chịu 100% thuế",
      "Người tiêu dùng gánh chịu 100% thuế",
      "Người tiêu dùng và nhà sản xuất chia đôi mỗi bên 50%",
      "Không ai phải chịu thuế vì không có giao dịch"
    ],
    "correct": 1,
    "explanation": "Quy tắc gánh nặng thuế: Bên nào có độ co giãn ít hơn (kém linh hoạt hơn) sẽ phải chịu nhiều thuế hơn. Khi cầu hoàn toàn không co giãn (|E_D| = 0, đường cầu thẳng đứng), người mua sẵn sàng mua bằng mọi giá => Nhà sản xuất chuyển toàn bộ 100% thuế vào giá bán cho người mua.",
    "isTrap": true,
    "trapAdvice": "Bẫy tâm lý: Đề bài nói 'đánh thuế lên NHÀ SẢN XUẤT' nên nhiều bạn tưởng nhà sản xuất phải chịu thuế. Về mặt kinh tế, việc đánh thuế lên người mua hay người bán cho kết quả kinh tế giống hệt nhau; ai gánh chịu thuế phụ thuộc vào độ co giãn tương đối giữa Cung và Cầu!",
    "chapter": 12,
    "difficulty": "apply"
  },
  {
    "id": "q32",
    "category": "micro",
    "topic": "Cấu trúc thị trường",
    "question": "Trong dài hạn, lợi nhuận kinh tế của một doanh nghiệp trong thị trường Cạnh tranh hoàn hảo và Cạnh tranh độc quyền sẽ có xu hướng:",
    "options": [
      "Bằng 0 (chỉ đạt lợi nhuận bình thường)",
      "Luôn dương vì doanh nghiệp có sức mạnh thị trường",
      "Luôn âm vì cạnh tranh khốc liệt",
      "Tùy thuộc vào quy mô vốn của doanh nghiệp"
    ],
    "correct": 0,
    "explanation": "Do rào cản gia nhập thị trường bằng 0, nếu có lợi nhuận kinh tế dương, các doanh nghiệp mới sẽ ồ ạt gia nhập làm tăng cung, kéo giá giảm cho đến khi P = ATC và lợi nhuận kinh tế bị triệt tiêu về 0 trong dài hạn.",
    "isTrap": true,
    "trapAdvice": "Lợi nhuận kinh tế bằng 0 KHÔNG CÓ NGHĨA là chủ doanh nghiệp không có tiền! Họ vẫn nhận được lợi nhuận kế toán vừa đủ bù đắp chi phí cơ hội của vốn và công sức bỏ ra (được gọi là Lợi nhuận bình thường - Normal profit).",
    "chapter": 12,
    "difficulty": "understand"
  },
  {
    "id": "q33",
    "category": "macro",
    "topic": "Kinh tế mở & Tỷ giá",
    "question": "Khi Ngân hàng Nhà nước Việt Nam can thiệp để giữ cho đồng Việt Nam (VND) giảm giá so với Đô la Mỹ (USD), chính sách này có xu hướng:",
    "options": [
      "Khuyến khích xuất khẩu của Việt Nam và hạn chế nhập khẩu",
      "Khuyến khích nhập khẩu và làm giảm xuất khẩu",
      "Làm giảm dự trữ ngoại hối của Ngân hàng Nhà nước",
      "Làm giảm giá hàng hóa nhập khẩu tính bằng VND"
    ],
    "correct": 0,
    "explanation": "Đồng nội tệ giảm giá (VND rẻ đi) khiến hàng hóa xuất khẩu của Việt Nam trở nên rẻ hơn trên thị trường quốc tế (thúc đẩy xuất khẩu X), đồng thời hàng nhập khẩu từ nước ngoài trở nên đắt hơn đối với người Việt (hạn chế nhập khẩu IM) => Cải thiện cán cân thương mại và kích thích tăng trưởng ngắn hạn.",
    "isTrap": false,
    "trapAdvice": "Nội tệ giảm giá có lợi cho xuất khẩu nhưng bất lợi cho nhập khẩu và người đi vay nợ ngoại tệ.",
    "chapter": 12,
    "difficulty": "apply"
  },
  {
    "id": "q34",
    "category": "micro",
    "topic": "Cung - Cầu & Cân bằng",
    "question": "Khi cả đường Cầu và đường Cung của một mặt hàng đều dịch chuyển SANG PHẢI cùng một lúc, điều chắc chắn xảy ra là:",
    "options": [
      "Giá cân bằng sẽ tăng",
      "Giá cân bằng sẽ giảm",
      "Lượng cân bằng sẽ tăng",
      "Lượng cân bằng sẽ không đổi"
    ],
    "correct": 2,
    "explanation": "Cầu tăng (dịch phải) làm P tăng, Q tăng. Cung tăng (dịch phải) làm P giảm, Q tăng. Kết hợp cả 2: Lượng cân bằng Q* CHẮC CHẮN TĂNG. Còn giá cân bằng P* chưa thể xác định được (phụ thuộc vào việc Cầu dịch nhiều hơn hay Cung dịch nhiều hơn).",
    "isTrap": true,
    "trapAdvice": "Mẹo thi A+: Khi cả 2 đường cùng dịch chuyển, LUÔN CÓ MỘT BIẾN CHẮC CHẮN VÀ MỘT BIẾN CHƯA THỂ XÁC ĐỊNH ĐƯỢC! Nhớ vẽ phác 2 trường hợp ra nháp trong 5 giây.",
    "chapter": 2,
    "difficulty": "advanced"
  },
  {
    "id": "q35",
    "category": "macro",
    "topic": "Đo lường sản lượng quốc gia (GDP)",
    "question": "Một nông dân bán lúa mì cho nhà máy bột mì với giá 10 triệu đồng. Nhà máy bán bột mì cho lò bánh mì với giá 18 triệu đồng. Lò bánh mì bán bánh mì cho người tiêu dùng với giá 25 triệu đồng. Khoản đóng góp vào GDP từ chuỗi sản xuất này là:",
    "options": [
      "53 triệu đồng",
      "25 triệu đồng",
      "15 triệu đồng",
      "35 triệu đồng"
    ],
    "correct": 1,
    "explanation": "GDP chỉ tính giá trị của HÀNG HÓA CUỐI CÙNG (bánh mì bán cho người tiêu dùng = 25 triệu). Hoặc tính theo phương pháp Giá trị gia tăng (VA): VA_nông dân = 10; VA_bột mì = 18 - 10 = 8; VA_lò bánh = 25 - 18 = 7 => Tổng VA = 10 + 8 + 7 = 25 triệu đồng.",
    "isTrap": true,
    "trapAdvice": "Bẫy tính trùng (Double counting): Nếu cộng toàn bộ 10 + 18 + 25 = 53 triệu là sai nghiêm trọng vì giá trị lúa mì và bột mì đã nằm sẵn bên trong giá bán 25 triệu của chiếc bánh mì!",
    "chapter": 7,
    "difficulty": "advanced"
  },
  {
    "id": "q36",
    "category": "micro",
    "chapter": 1,
    "topic": "Lợi thế so sánh & Thương mại quốc tế",
    "difficulty": "apply",
    "question": "Anh An mất 1 giờ làm 1 cái bánh và 2 giờ may 1 cái áo. Chị Bình mất 2 giờ làm 1 cái bánh và 3 giờ may 1 cái áo. Ai có lợi thế so sánh về sản xuất bánh?",
    "options": [
      "Anh An vì chi phí cơ hội làm 1 cái bánh là 0.5 cái áo (< 0.67 cái áo của chị Bình).",
      "Chị Bình vì làm bánh mất nhiều thời gian hơn.",
      "Anh An vì có lợi thế tuyệt đối ở cả 2 sản phẩm.",
      "Cả hai người có chi phí cơ hội như nhau."
    ],
    "correct": 0,
    "explanation": "Chi phí cơ hội làm 1 bánh của Anh An = 1h / 2h = 0.5 cái áo. Chi phí cơ hội làm 1 bánh của Chị Bình = 2h / 3h = 0.67 cái áo. Anh An có chi phí cơ hội thấp hơn nên có lợi thế so sánh về bánh.",
    "isTrap": true,
    "trapAdvice": "Đừng nhầm giữa lợi thế tuyệt đối (ai làm nhanh hơn) và lợi thế so sánh (ai có chi phí cơ hội thấp hơn)!"
  },
  {
    "id": "q37",
    "category": "micro",
    "chapter": 1,
    "topic": "Tư duy cận biên (Marginal Thinking)",
    "difficulty": "advanced",
    "question": "Một hãng hàng không có chuyến bay 200 chỗ với tổng chi phí 100.000 USD (bình quân 500 USD/vé). Còn 1 tiếng trước giờ bay chuyến bay còn trống 5 chỗ. Một hành khách sẵn sàng trả 300 USD cho 1 vé chờ. Hãng có nên bán không?",
    "options": [
      "Không nên bán vì giá 300 USD thấp hơn chi phí trung bình 500 USD (sẽ bị lỗ 200 USD).",
      "Nên bán nếu chi phí cận biên để phục vụ thêm người này (đồ ăn, nhiên liệu tăng thêm) nhỏ hơn 300 USD.",
      "Không nên bán vì sẽ làm giảm uy tín thương hiệu.",
      "Nên bán với điều kiện hành khách phải mua bảo hiểm bổ sung 200 USD."
    ],
    "correct": 1,
    "explanation": "Quyết định kinh tế hợp lý dựa trên so sánh Lợi ích biên (MB) và Chi phí biên (MC). Chi phí cố định thuê máy bay 100.000 USD là chi phí chìm. Đón thêm 1 khách chỉ tốn thêm một gói đậu phộng và vài lít xăng (MC ≈ 20 USD). Vì MB = 300 USD > MC ≈ 20 USD nên hãng tăng thêm được lợi nhuận ròng 280 USD!",
    "isTrap": true,
    "trapAdvice": "Bẫy chi phí chìm (Sunk cost fallacy) kinh điển trong giáo trình Mankiw! Chi phí bình quân trong quá khứ không quyết định việc bán vé phút chót."
  },
  {
    "id": "q38",
    "category": "micro",
    "chapter": 2,
    "topic": "Hàng hóa thay thế & bổ sung",
    "difficulty": "understand",
    "question": "Nếu cà phê và trà là hai hàng hóa thay thế cho nhau, khi giá cà phê tăng vọt thì thị trường trà sẽ ghi nhận:",
    "options": [
      "Đường cầu về trà dịch chuyển sang trái, giá trà giảm.",
      "Đường cầu về trà dịch chuyển sang phải, giá và lượng trà cân bằng đều tăng.",
      "Đường cung về trà dịch chuyển sang phải.",
      "Lượng cầu về trà giảm do hiệu ứng thu nhập."
    ],
    "correct": 1,
    "explanation": "Khi giá cà phê tăng, người tiêu dùng chuyển sang uống trà thay thế -> Cầu về trà tăng (đường cầu trà dịch phải) -> Cả giá P* và lượng Q* của trà đều tăng.",
    "isTrap": false,
    "trapAdvice": "Hàng thay thế: P hàng này tăng làm Cầu hàng kia tăng (dịch phải)."
  },
  {
    "id": "q39",
    "category": "micro",
    "chapter": 2,
    "topic": "Cân bằng thị trường & Dư thừa/Thiếu hụt",
    "difficulty": "apply",
    "question": "Hàm cầu là QD = 120 - 2P và hàm cung là QS = 30 + P. Tại mức giá P = 40, thị trường đang ở trạng thái nào?",
    "options": [
      "Cân bằng hoàn hảo với Q = 50.",
      "Thiếu hụt 30 đơn vị sản phẩm.",
      "Dư thừa 30 đơn vị sản phẩm.",
      "Dư thừa 40 đơn vị sản phẩm."
    ],
    "correct": 2,
    "explanation": "Tại P = 40: QD = 120 - 2(40) = 40; QS = 30 + 40 = 70. Vì QS > QD nên thị trường dư thừa QS - QD = 70 - 40 = 30 đơn vị.",
    "isTrap": false,
    "trapAdvice": "Chỉ cần thay mức giá đề bài cho vào QD và QS rồi so sánh."
  },
  {
    "id": "q40",
    "category": "micro",
    "chapter": 2,
    "topic": "Dịch chuyển đồng thời Cung & Cầu",
    "difficulty": "advanced",
    "question": "Khi thu nhập của người dân tăng (hàng hóa thông thường) đồng thời giá nguyên liệu đầu vào sản xuất giảm mạnh, điều chắc chắn xảy ra trên thị trường là:",
    "options": [
      "Giá cân bằng P* chắc chắn tăng.",
      "Giá cân bằng P* chắc chắn giảm.",
      "Lượng cân bằng Q* chắc chắn tăng.",
      "Lượng cân bằng Q* chắc chắn giảm."
    ],
    "correct": 2,
    "explanation": "Thu nhập tăng -> Cầu dịch phải (P tăng, Q tăng). Giá nguyên liệu giảm -> Cung dịch phải (P giảm, Q tăng). Cả 2 sự kiện đều làm Q tăng -> Lượng cân bằng Q* CHẮC CHẮN TĂNG. Còn giá P* chưa xác định được.",
    "isTrap": true,
    "trapAdvice": "Cầu dịch phải + Cung dịch phải => Q* chắc chắn tăng, P* chưa xác định."
  },
  {
    "id": "q41",
    "category": "micro",
    "chapter": 3,
    "topic": "Độ co giãn chéo của cầu (Cross-price Elasticity)",
    "difficulty": "apply",
    "question": "Nếu độ co giãn chéo của cầu giữa hai mặt hàng X và Y là Exy = -1.8, hai mặt hàng này có mối quan hệ gì?",
    "options": [
      "Hai hàng hóa thay thế cho nhau.",
      "Hai hàng hóa bổ sung cho nhau.",
      "Hai hàng hóa độc lập không liên quan.",
      "X là hàng xa xỉ còn Y là hàng thiết yếu."
    ],
    "correct": 1,
    "explanation": "Exy = %ΔQx / %ΔPy. Khi Exy < 0 (dấu âm), giá Y tăng làm lượng cầu X giảm -> Người tiêu dùng tiêu dùng đồng thời cả 2 -> X và Y là hai hàng hóa bổ sung (Complements).",
    "isTrap": false,
    "trapAdvice": "Exy > 0: Thay thế; Exy < 0: Bổ sung; Exy = 0: Độc lập."
  },
  {
    "id": "q42",
    "category": "micro",
    "chapter": 3,
    "topic": "Độ co giãn theo thu nhập (Income Elasticity)",
    "difficulty": "understand",
    "question": "Khi nền kinh tế rơi vào suy thoái và thu nhập giảm sút, doanh thu của các chuỗi bán lẻ mì gói giá rẻ tăng vọt. Mì gói trong trường hợp này là:",
    "options": [
      "Hàng hóa thiết yếu với 0 < EI < 1.",
      "Hàng hóa cấp thấp (thứ cấp) với EI < 0.",
      "Hàng hóa xa xỉ với EI > 1.",
      "Hàng hóa Giffen vi phạm quy luật cung cầu."
    ],
    "correct": 1,
    "explanation": "Khi thu nhập giảm mà lượng cầu tăng (biến thiên nghịch chiều) -> EI < 0 -> Đây là định nghĩa của Hàng hóa cấp thấp / thứ cấp (Inferior good).",
    "isTrap": false,
    "trapAdvice": "Hàng thứ cấp có độ co giãn theo thu nhập mang dấu ÂM."
  },
  {
    "id": "q43",
    "category": "micro",
    "chapter": 3,
    "topic": "Co giãn và Doanh thu cực đại",
    "difficulty": "advanced",
    "question": "Một bảo tàng có hàm cầu vé tham quan là P = 120 - 0.5Q. Để tối đa hóa tổng doanh thu bán vé, bảo tàng nên đặt giá vé là bao nhiêu?",
    "options": [
      "120 USD",
      "60 USD",
      "40 USD",
      "0 USD (mở cửa miễn phí)"
    ],
    "correct": 1,
    "explanation": "Doanh thu TR = P x Q = (120 - 0.5Q)Q = 120Q - 0.5Q^2. Đạo hàm MR = 120 - Q = 0 => Q = 120. Thay vào hàm cầu: P = 120 - 0.5(120) = 60 USD. Tại đây |Ed| = 1.",
    "isTrap": true,
    "trapAdvice": "Mẹo thi nhanh: Với đường cầu tuyến tính P = a - bQ, mức giá tối đa hóa doanh thu luôn bằng đúng một nửa tung độ góc P = a / 2 = 120 / 2 = 60 USD!"
  },
  {
    "id": "q44",
    "category": "micro",
    "chapter": 4,
    "topic": "Tổn thất vô ích (DWL) của thuế",
    "difficulty": "apply",
    "question": "Nếu chính phủ tăng gấp đôi mức thuế suất đơn vị đánh vào một mặt hàng (từ t lên 2t), thì Tổn thất vô ích (Deadweight Loss) của xã hội sẽ:",
    "options": [
      "Tăng gấp đôi (2 lần).",
      "Tăng gấp 4 lần.",
      "Không thay đổi.",
      "Giảm một nửa do số thu ngân sách tăng."
    ],
    "correct": 1,
    "explanation": "Diện tích tam giác tổn thất vô ích DWL = 0.5 x t x ΔQ. Vì ΔQ tỷ lệ thuận với t, nên diện tích DWL tỷ lệ thuận với BÌNH PHƯƠNG mức thuế (t^2). Khi thuế tăng 2 lần, DWL tăng 2^2 = 4 lần!",
    "isTrap": true,
    "trapAdvice": "Mankiw nhấn mạnh: Tổn thất vô ích tăng theo cấp số nhân bậc hai của thuế suất!"
  },
  {
    "id": "q45",
    "category": "micro",
    "chapter": 4,
    "topic": "Độ co giãn và tổn thất vô ích",
    "difficulty": "understand",
    "question": "Để giảm thiểu tối đa Tổn thất vô ích (DWL) khi cần thu ngân sách, chính phủ nên lựa chọn đánh thuế vào các mặt hàng có đặc điểm:",
    "options": [
      "Cung và cầu đều rất co giãn theo giá.",
      "Cung và cầu đều rất kém co giãn (ít co giãn) theo giá.",
      "Hàng hóa xa xỉ cao cấp có nhiều phương án thay thế.",
      "Hàng hóa xuất khẩu chủ lực."
    ],
    "correct": 1,
    "explanation": "Khi cung và cầu kém co giãn (|E| nhỏ), lượng giao dịch biến động rất ít khi có thuế (ΔQ rất nhỏ), do đó tam giác DWL là nhỏ nhất. Đó là lý do chính phủ thường đánh thuế tiêu thụ đặc biệt vào xăng, thuốc lá, rượu bia.",
    "isTrap": false,
    "trapAdvice": "Cung/cầu càng kém co giãn -> DWL càng nhỏ."
  },
  {
    "id": "q46",
    "category": "micro",
    "chapter": 4,
    "topic": "Lựa chọn tiêu dùng tối ưu (Consumer Choice)",
    "difficulty": "advanced",
    "question": "Một người tiêu dùng có hàm thỏa dụng U = X.Y, thu nhập I = 120 USD. Giá Px = 4 USD, Py = 6 USD. Giỏ hàng tối ưu (X*, Y*) là:",
    "options": [
      "X* = 15, Y* = 10",
      "X* = 20, Y* = 10",
      "X* = 10, Y* = 15",
      "X* = 30, Y* = 0"
    ],
    "correct": 0,
    "explanation": "Hàm Cobb-Douglas số mũ bằng nhau (alpha=beta=1) nên thu nhập được chia đều: Px.X = Py.Y = I/2 = 60 USD. Suy ra X* = 60 / 4 = 15, Y* = 60 / 6 = 10. Hoặc giải hệ: MUx/Px = MUy/Py => Y/4 = X/6 và 4X + 6Y = 120.",
    "isTrap": false,
    "trapAdvice": "Hàm Cobb-Douglas U = X^a * Y^b: Chi tiêu cho X = a/(a+b) * I, cho Y = b/(a+b) * I."
  },
  {
    "id": "q47",
    "category": "micro",
    "chapter": 5,
    "topic": "Mối quan hệ giữa MC và ATC",
    "difficulty": "understand",
    "question": "Khi Chi phí cận biên nhỏ hơn Chi phí trung bình (MC < ATC), thì khi tăng sản lượng, Chi phí trung bình (ATC) sẽ:",
    "options": [
      "Tăng lên.",
      "Giảm xuống.",
      "Đạt giá trị cực tiểu.",
      "Bằng 0."
    ],
    "correct": 1,
    "explanation": "Quy tắc điểm trung bình: Giống như điểm số của bạn, nếu điểm bài kiểm tra kế tiếp (MC) thấp hơn điểm trung bình hiện tại (ATC), nó sẽ kéo điểm trung bình giảm xuống. Đường MC luôn cắt ATC tại điểm cực tiểu của ATC.",
    "isTrap": false,
    "trapAdvice": "MC < ATC => ATC dốc xuống (giảm). MC > ATC => ATC dốc lên (tăng). MC = ATC => ATC đạt cực tiểu."
  },
  {
    "id": "q48",
    "category": "micro",
    "chapter": 5,
    "topic": "Đường cung ngắn hạn của doanh nghiệp cạnh tranh",
    "difficulty": "apply",
    "question": "Đường cung ngắn hạn của một doanh nghiệp trong thị trường cạnh tranh hoàn hảo là:",
    "options": [
      "Toàn bộ đường Chi phí cận biên (MC).",
      "Phần đường Chi phí cận biên (MC) nằm phía trên điểm cực tiểu của đường AVC.",
      "Phần đường Chi phí cận biên (MC) nằm phía trên điểm cực tiểu của đường ATC.",
      "Đường Chi phí biến đổi trung bình (AVC)."
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp sản xuất tại P = MC miễn là P >= AVC_min (không đóng cửa). Nếu P < AVC_min thì Q = 0. Do đó, đường cung ngắn hạn chính là nhánh đường MC nằm trên AVC_min.",
    "isTrap": true,
    "trapAdvice": "Bẫy thi cực phổ biến: Học sinh hay chọn phần trên ATC_min. Đó là đường cung DÀI HẠN, còn NGẮN HẠN là nằm trên AVC_min!"
  },
  {
    "id": "q49",
    "category": "micro",
    "chapter": 5,
    "topic": "Lợi thế kinh tế theo quy mô (Economies of Scale)",
    "difficulty": "remember",
    "question": "Khi sản lượng trong dài hạn tăng lên và Chi phí trung bình dài hạn (LRATC) giảm xuống, doanh nghiệp đang trải qua:",
    "options": [
      "Bất lợi kinh tế theo quy mô (Diseconomies of scale).",
      "Lợi thế kinh tế theo quy mô (Economies of scale).",
      "Năng suất cận biên giảm dần trong ngắn hạn.",
      "Hiệu suất không đổi theo quy mô."
    ],
    "correct": 1,
    "explanation": "Lợi thế kinh tế theo quy mô xảy ra khi mở rộng quy mô giúp chuyên môn hóa lao động, mua nguyên liệu giá sỉ, làm giảm chi phí bình quân dài hạn LRATC.",
    "isTrap": false,
    "trapAdvice": "LRATC giảm khi Q tăng = Lợi thế quy mô. LRATC tăng khi Q tăng = Bất lợi quy mô."
  },
  {
    "id": "q50",
    "category": "micro",
    "chapter": 6,
    "topic": "Chỉ số Lerner & Quyền lực độc quyền",
    "difficulty": "advanced",
    "question": "Một nhà độc quyền có chi phí cận biên MC = 20 USD và độ co giãn của cầu theo giá là Ed = -3. Để tối đa hóa lợi nhuận, nhà độc quyền này nên đặt giá bán là:",
    "options": [
      "20 USD",
      "30 USD",
      "40 USD",
      "60 USD"
    ],
    "correct": 1,
    "explanation": "Công thức định giá nghịch đảo độ co giãn: P = MC / (1 - 1/|Ed|) = 20 / (1 - 1/3) = 20 / (2/3) = 30 USD. Hoặc dùng chỉ số Lerner: (P - MC)/P = 1/|Ed| => (P - 20)/P = 1/3 => P = 30 USD.",
    "isTrap": false,
    "trapAdvice": "Công thức định giá độc quyền chuẩn Mankiw: P = MC x [|Ed| / (|Ed| - 1)]."
  },
  {
    "id": "q51",
    "category": "micro",
    "chapter": 6,
    "topic": "Phân biệt giá cấp 1 (First-degree Price Discrimination)",
    "difficulty": "advanced",
    "question": "Khi một nhà độc quyền thực hiện phân biệt giá hoàn hảo (Phân biệt giá cấp 1), điều gì sẽ xảy ra với thặng dư tiêu dùng (CS) và Tổn thất vô ích (DWL)?",
    "options": [
      "CS đạt cực đại, DWL đạt cực đại.",
      "CS = 0, DWL = 0 và Toàn bộ thặng dư xã hội chuyển thành lợi nhuận của nhà độc quyền.",
      "CS = 0 nhưng DWL tăng lên gấp đôi.",
      "CS tăng lên do người tiêu dùng mua được nhiều hàng hơn."
    ],
    "correct": 1,
    "explanation": "Nhà độc quyền bán cho mỗi khách hàng đúng bằng mức giá sẵn lòng chi trả tối đa (WTP). Do đó CS = 0. Nhà độc quyền sản xuất đến mức P = MC (sản lượng cạnh tranh) nên không có giao dịch nào bị bỏ lỡ => DWL = 0!",
    "isTrap": true,
    "trapAdvice": "Phân biệt giá hoàn hảo KHÔNG CÓ TỔN THẤT VÔ ÍCH (DWL = 0), nhưng người tiêu dùng bị tước đoạt toàn bộ thặng dư!"
  },
  {
    "id": "q52",
    "category": "micro",
    "chapter": 6,
    "topic": "Cạnh tranh độc quyền trong dài hạn",
    "difficulty": "understand",
    "question": "Trong dài hạn, trạng thái cân bằng của một doanh nghiệp trong thị trường cạnh tranh độc quyền có đặc điểm:",
    "options": [
      "P = MC và P = ATC_min giống cạnh tranh hoàn hảo.",
      "P > MC và P = ATC (Lợi nhuận kinh tế bằng 0, có năng lực sản xuất dư thừa).",
      "Thu được siêu lợi nhuận kinh tế bền vững như độc quyền thuần túy.",
      "P < AVC nên buộc phải rời bỏ ngành."
    ],
    "correct": 1,
    "explanation": "Do tự do gia nhập ngành, trong dài hạn lợi nhuận kinh tế bằng 0 (P = ATC). Nhưng vì sản phẩm có sự phân biệt nên đường cầu dốc xuống, đường cầu tiếp xúc với ATC tại nhánh dốc xuống của ATC (chứ không phải cực tiểu ATC) => P > MC và sinh ra Năng lực thừa (Excess capacity).",
    "isTrap": false,
    "trapAdvice": "Cạnh tranh độc quyền dài hạn: Lợi nhuận kinh tế = 0, P = ATC nhưng P > MC."
  },
  {
    "id": "q53",
    "category": "macro",
    "chapter": 7,
    "topic": "Đầu tư (I) trong GDP",
    "difficulty": "understand",
    "question": "Giao dịch nào sau đây ĐƯỢC TÍNH vào thành phần Đầu tư (I) trong GDP của nền kinh tế?",
    "options": [
      "Một hộ gia đình mua 1.000 cổ phiếu mới phát hành của VinFast.",
      "Một hộ gia đình mua một căn hộ chung cư mới xây để ở.",
      "Một người gửi 500 triệu đồng vào tài khoản tiết kiệm ngân hàng kỳ hạn 1 năm.",
      "Một doanh nghiệp mua lại nhà xưởng cũ từ một doanh nghiệp giải thể."
    ],
    "correct": 1,
    "explanation": "Trong kinh tế vĩ mô, Đầu tư (I) là mua sắm tư bản mới: máy móc mới, hàng tồn kho mới, và NHÀ Ở MỚI của hộ gia đình. Mua cổ phiếu, gửi tiết kiệm là 'đầu tư tài chính' cá nhân, không tạo ra tư bản thực tế mới nên không tính vào I.",
    "isTrap": true,
    "trapAdvice": "Bẫy từ ngữ: Ngôn ngữ hàng ngày gọi mua cổ phiếu là 'đầu tư', nhưng kinh tế học vĩ mô coi đó là Tiết kiệm (Saving), không phải Đầu tư (I)!"
  },
  {
    "id": "q54",
    "category": "macro",
    "chapter": 7,
    "topic": "GDP Danh nghĩa vs GDP Thực tế",
    "difficulty": "apply",
    "question": "Năm 2024 (năm gốc) GDP danh nghĩa là 500 tỷ USD. Năm 2025 GDP danh nghĩa là 600 tỷ USD và Chỉ số điều chỉnh GDP (GDP Deflator) là 120. Tốc độ tăng trưởng GDP thực tế năm 2025 là:",
    "options": [
      "20%",
      "0% (không tăng trưởng thực tế)",
      "10%",
      "50%"
    ],
    "correct": 1,
    "explanation": "GDP thực tế 2025 = (GDP danh nghĩa / GDP Deflator) x 100 = (600 / 120) x 100 = 500 tỷ USD. Vì năm 2024 là năm gốc nên GDP thực tế 2024 = 500 tỷ. Tăng trưởng thực tế = (500 - 500) / 500 = 0%! Nền kinh tế chỉ tăng giá danh nghĩa chứ sản lượng thực không hề tăng.",
    "isTrap": true,
    "trapAdvice": "GDP danh nghĩa tăng 20% nhưng giá cũng tăng 20% (Deflator = 120) => Tăng trưởng thực tế bằng 0%!"
  },
  {
    "id": "q55",
    "category": "macro",
    "chapter": 8,
    "topic": "Hàm sản xuất & Nguồn gốc tăng trưởng",
    "difficulty": "remember",
    "question": "Theo hàm sản xuất Y = A.F(L, K, H, N), yếu tố 'H' đại diện cho:",
    "options": [
      "Tư bản thể chất (Physical Capital) như máy móc, nhà xưởng.",
      "Vốn nhân lực (Human Capital) bao gồm kiến thức, kỹ năng và sức khỏe của người lao động.",
      "Tài nguyên thiên nhiên (Natural Resources) như đất đai, khoáng sản.",
      "Trình độ công nghệ (Technological Knowledge)."
    ],
    "correct": 1,
    "explanation": "K là tư bản thể chất, H là vốn nhân lực (Human capital), N là tài nguyên thiên nhiên, A là công nghệ.",
    "isTrap": false,
    "trapAdvice": "H = Human Capital (Vốn con người/vốn nhân lực)."
  },
  {
    "id": "q56",
    "category": "macro",
    "chapter": 8,
    "topic": "Chính sách hướng nội vs hướng ngoại",
    "difficulty": "understand",
    "question": "Chính sách phát triển kinh tế nào sau đây được các nhà kinh tế học hiện đại đánh giá là thúc đẩy tăng trưởng nhanh và bền vững hơn?",
    "options": [
      "Chính sách hướng nội (Inward-oriented): Dựng hàng rào thuế quan bảo hộ sản xuất trong nước, hạn chế nhập khẩu.",
      "Chính sách hướng ngoại (Outward-oriented): Hội nhập thương mại quốc tế, thu hút FDI và tiếp thu công nghệ thế giới.",
      "Quốc hữu hóa toàn bộ các ngành công nghiệp tư nhân.",
      "Cấm xuất khẩu các mặt hàng nông sản thô."
    ],
    "correct": 1,
    "explanation": "Mankiw dẫn chứng các nước Đông Á (Hàn Quốc, Singapore, Việt Nam) thành công nhờ chính sách hướng ngoại, mở cửa thương mại và tận dụng lợi thế quy mô thế giới.",
    "isTrap": false,
    "trapAdvice": "Chính sách hướng ngoại vượt trội so với chính sách thay thế nhập khẩu hướng nội."
  },
  {
    "id": "q57",
    "category": "macro",
    "chapter": 9,
    "topic": "Tỷ lệ thất nghiệp tự nhiên & Thất nghiệp chu kỳ",
    "difficulty": "apply",
    "question": "Một nền kinh tế có tỷ lệ thất nghiệp thực tế là 7.5%, trong khi tỷ lệ thất nghiệp tự nhiên là 4.5%. Tỷ lệ thất nghiệp chu kỳ (Cyclical Unemployment) là:",
    "options": [
      "12%",
      "3.0%",
      "4.5%",
      "-3.0%"
    ],
    "correct": 1,
    "explanation": "Thất nghiệp thực tế = Thất nghiệp tự nhiên (Ma sát + Cơ cấu) + Thất nghiệp chu kỳ. Suy ra Thất nghiệp chu kỳ = 7.5% - 4.5% = 3.0%. Nền kinh tế đang rơi vào suy thoái.",
    "isTrap": false,
    "trapAdvice": "Thất nghiệp chu kỳ = Thất nghiệp thực tế - Thất nghiệp tự nhiên."
  },
  {
    "id": "q58",
    "category": "macro",
    "chapter": 9,
    "topic": "Lãi suất danh nghĩa vs Lãi suất thực tế (Hiệu ứng Fisher)",
    "difficulty": "apply",
    "question": "Bạn gửi tiết kiệm ngân hàng với lãi suất danh nghĩa 6%/năm. Trong năm đó, tỷ lệ lạm phát là 4%/năm. Lãi suất thực tế (Real Interest Rate) bạn nhận được xấp xỉ là:",
    "options": [
      "10%/năm",
      "2%/năm",
      "1.5%/năm",
      "-2%/năm"
    ],
    "correct": 1,
    "explanation": "Phương trình Fisher: Lãi suất thực tế r ≈ Lãi suất danh nghĩa i - Tỷ lệ lạm phát π = 6% - 4% = 2%/năm. Sức mua thực tế của bạn chỉ tăng 2%.",
    "isTrap": false,
    "trapAdvice": "Lãi suất thực = Lãi suất danh nghĩa - Lạm phát."
  },
  {
    "id": "q59",
    "category": "macro",
    "chapter": 9,
    "topic": "Ai hưởng lợi và ai thiệt hại khi lạm phát bất ngờ xảy ra?",
    "difficulty": "advanced",
    "question": "Khi lạm phát thực tế xảy ra CAO HƠN nhiều so với mức lạm phát dự kiến, của cải sẽ được tái phân phối từ:",
    "options": [
      "Người đi vay nợ sang người cho vay.",
      "Người cho vay (chủ nợ) sang người đi vay (con nợ).",
      "Chính phủ sang người nộp thuế.",
      "Người sở hữu bất động sản sang người giữ tiền mặt."
    ],
    "correct": 1,
    "explanation": "Khi lạm phát tăng cao bất ngờ, đồng tiền mất giá. Người đi vay trả nợ bằng số tiền có sức mua thấp hơn nhiều so với dự tính ban đầu -> Người đi vay ĐƯỢC LỢI, người cho vay BỊ THIỆT HẠI.",
    "isTrap": true,
    "trapAdvice": "Lạm phát bất ngờ: Có lợi cho người vay nợ (con nợ), có hại cho người cho vay (chủ nợ)!"
  },
  {
    "id": "q60",
    "category": "macro",
    "chapter": 10,
    "topic": "Công thức số nhân tiền có tỷ lệ nắm giữ tiền mặt (cr)",
    "difficulty": "apply",
    "question": "Tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi là cr = 0.2, tỷ lệ dự trữ của ngân hàng là rr = 0.1. Cơ số tiền tệ MB = 100 tỷ đồng. Lượng cung tiền MS là:",
    "options": [
      "1.000 tỷ đồng",
      "400 tỷ đồng",
      "300 tỷ đồng",
      "120 tỷ đồng"
    ],
    "correct": 1,
    "explanation": "Số nhân tiền mm = (cr + 1) / (cr + rr) = (0.2 + 1) / (0.2 + 0.1) = 1.2 / 0.3 = 4. Cung tiền MS = mm x MB = 4 x 100 = 400 tỷ đồng.",
    "isTrap": true,
    "trapAdvice": "Nếu không có tiền mặt cr thì m = 1/rr = 10 (ra 1.000 tỷ là bẫy). Vì người dân giữ tiền mặt nên mm = (cr+1)/(cr+rr) = 4."
  },
  {
    "id": "q61",
    "category": "macro",
    "chapter": 10,
    "topic": "Phương trình số lượng tiền tệ (Quantity Equation)",
    "difficulty": "apply",
    "question": "Theo phương trình M.V = P.Y, nếu tốc độ lưu thông tiền tệ V không đổi, GDP thực tế Y tăng trưởng 3%/năm, và Ngân hàng Trung ương cho cung tiền M tăng 8%/năm, thì tỷ lệ lạm phát xấp xỉ là:",
    "options": [
      "11%/năm",
      "5%/năm",
      "2.67%/năm",
      "8%/năm"
    ],
    "correct": 1,
    "explanation": "%ΔM + %ΔV = %ΔP + %ΔY. Vì V không đổi (%ΔV = 0), nên Lạm phát %ΔP = %ΔM - %ΔY = 8% - 3% = 5%/năm.",
    "isTrap": false,
    "trapAdvice": "Lạm phát = Tốc độ tăng cung tiền - Tốc độ tăng trưởng GDP thực tế."
  },
  {
    "id": "q62",
    "category": "macro",
    "chapter": 10,
    "topic": "Lãi suất chiết khấu & Dự trữ bắt buộc",
    "difficulty": "understand",
    "question": "Hành động nào sau đây của Ngân hàng Trung ương sẽ làm THU HẸP lượng cung tiền (Chính sách tiền tệ thắt chặt)?",
    "options": [
      "Hạ tỷ lệ dự trữ bắt buộc (rr).",
      "Mua tín phiếu kho bạc trên thị trường mở.",
      "Tăng lãi suất chiết khấu và tăng tỷ lệ dự trữ bắt buộc.",
      "Cấp gói tái cấp vốn lãi suất 0% cho các ngân hàng thương mại."
    ],
    "correct": 2,
    "explanation": "Tăng tỷ lệ dự trữ bắt buộc làm giảm số nhân tiền; tăng lãi suất chiết khấu hạn chế NHTM vay tiền từ NHTW -> Cả 2 đều làm giảm cung tiền.",
    "isTrap": false,
    "trapAdvice": "Tăng rr, tăng lãi suất chiết khấu, bán trái phiếu => Thắt chặt cung tiền."
  },
  {
    "id": "q63",
    "category": "macro",
    "chapter": 11,
    "topic": "Số nhân chi tiêu Keynes (Keynesian Multiplier)",
    "difficulty": "apply",
    "question": "Trong một nền kinh tế đóng giản đơn không có thuế, xu hướng tiêu dùng cận biên MPC = 0.8. Nếu chính phủ tăng chi tiêu đầu tư công ΔG = 10 tỷ USD, thì sản lượng cân bằng quốc gia sẽ tăng thêm:",
    "options": [
      "10 tỷ USD",
      "12.5 tỷ USD",
      "50 tỷ USD",
      "80 tỷ USD"
    ],
    "correct": 2,
    "explanation": "Số nhân chi tiêu k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5. Mức tăng sản lượng ΔY = k x ΔG = 5 x 10 = 50 tỷ USD.",
    "isTrap": false,
    "trapAdvice": "k = 1 / (1 - MPC). Khi MPC = 0.8 thì k = 5."
  },
  {
    "id": "q64",
    "category": "macro",
    "chapter": 11,
    "topic": "Cú sốc cung tiêu cực & Đình lạm (Stagflation)",
    "difficulty": "advanced",
    "question": "Khi giá dầu mỏ thế giới tăng đột ngột gấp 3 lần (cú sốc cung bất lợi), trong ngắn hạn nền kinh tế sẽ đối mặt với hiện tượng:",
    "options": [
      "Đường Tổng cầu AD dịch trái làm giảm phát.",
      "Đường Tổng cung ngắn hạn SRAS dịch trái, gây ra Đình lạm (Stagflation: Sản lượng Y giảm, Giá P tăng).",
      "Đường Tổng cung ngắn hạn SRAS dịch phải làm tăng trưởng vượt bậc.",
      "Tỷ lệ thất nghiệp giảm và nền kinh tế bùng nổ."
    ],
    "correct": 1,
    "explanation": "Chi phí đầu vào tăng vọt làm SRAS dịch chuyển sang trái (lên trên) -> Mức giá chung P tăng lên (Lạm phát) trong khi Sản lượng Y giảm xuống (Suy thoái/Thất nghiệp). Đây chính là hiện tượng 'Đình lạm' (Stagflation) kinh điển của thập niên 1970.",
    "isTrap": true,
    "trapAdvice": "Cú sốc cung tiêu cực: P tăng + Y giảm = Đình lạm (Stagflation)!"
  },
  {
    "id": "q65",
    "category": "macro",
    "chapter": 12,
    "topic": "Ngang giá sức mua (PPP - Purchasing Power Parity)",
    "difficulty": "apply",
    "question": "Theo học thuyết Ngang giá sức mua (PPP), nếu 1 cái bánh Big Mac ở Mỹ giá 5 USD và ở Việt Nam giá 120.000 VNĐ, thì tỷ giá danh nghĩa cân bằng dài hạn giữa VND và USD phải là:",
    "options": [
      "24.000 VND / USD",
      "20.000 VND / USD",
      "25.000 VND / USD",
      "600.000 VND / USD"
    ],
    "correct": 0,
    "explanation": "Theo PPP: e = P_trong nước / P_nước ngoài = 120.000 VND / 5 USD = 24.000 VND / USD.",
    "isTrap": false,
    "trapAdvice": "Chỉ số Big Mac Index nổi tiếng của tạp chí The Economist dựa trên đúng lý thuyết PPP này của Mankiw."
  },
  {
    "id": "q66",
    "category": "micro",
    "chapter": 4,
    "topic": "Phân rã Slutsky & Hàng hóa Giffen",
    "difficulty": "advanced",
    "question": "Khi giá hàng hóa X tăng lên, người tiêu dùng mua nhiều hàng hóa X hơn trước. Điều này khẳng định chắc chắn rằng hàng hóa X là:",
    "options": [
      "Hàng hóa thông thường có hiệu ứng thay thế rất mạnh",
      "Hàng hóa cấp thấp có Hiệu ứng thu nhập cùng dấu và áp đảo hoàn toàn Hiệu ứng thay thế",
      "Hàng hóa xa xỉ có độ co giãn theo thu nhập lớn hơn 1",
      "Hàng hóa bổ sung hoàn hảo"
    ],
    "correct": 1,
    "explanation": "Đây là hiện tượng Hàng hóa Giffen. Hiệu ứng thay thế luôn làm giảm cầu khi giá tăng (SE < 0). Để tổng lượng cầu tăng khi giá tăng, hàng hóa đó bắt buộc phải là Hàng cấp thấp (sức mua giảm làm tăng cầu hàng rẻ, IE > 0) VÀ độ lớn của Hiệu ứng thu nhập phải lớn hơn Hiệu ứng thay thế (|IE| > |SE|).",
    "isTrap": true,
    "trapAdvice": "Hàng Giffen là tập con cực đoan của Hàng cấp thấp, mọi hàng Giffen đều là hàng cấp thấp nhưng không phải mọi hàng cấp thấp đều là hàng Giffen."
  },
  {
    "id": "q67",
    "category": "micro",
    "chapter": 4,
    "topic": "Hàm thỏa dụng Leontief",
    "difficulty": "advanced",
    "question": "Một người tiêu dùng có hàm thỏa dụng U(X, Y) = min(2X, 5Y). Tỷ lệ kết hợp tối ưu giữa hai hàng hóa X và Y của người này luôn là:",
    "options": [
      "X / Y = 2 / 5",
      "X / Y = 5 / 2 (tức 2X = 5Y)",
      "Phụ thuộc vào mức giá P_X và P_Y",
      "Phụ thuộc vào mức thu nhập I"
    ],
    "correct": 1,
    "explanation": "Với hàm min Leontief (hàng bổ sung hoàn hảo), điểm tối ưu luôn nằm tại đỉnh góc nhọn: 2X = 5Y => X/Y = 5/2, hoàn toàn không phụ thuộc vào giá cả P_X, P_Y hay thu nhập I!",
    "isTrap": true,
    "trapAdvice": "Đừng bao giờ cố lấy đạo hàm MU_X / MU_Y với hàm min Leontief! Luôn cho 2 thành phần trong ngoặc bằng nhau."
  },
  {
    "id": "q68",
    "category": "micro",
    "chapter": 4,
    "topic": "Hàng thay thế hoàn hảo & Nghiệm góc",
    "difficulty": "advanced",
    "question": "Cho hàm thỏa dụng U(X, Y) = 2X + Y. Giá P_X = 6, P_Y = 2, thu nhập I = 60. Giỏ hàng tối ưu của người tiêu dùng là:",
    "options": [
      "X = 5, Y = 15",
      "X = 10, Y = 0 (mua toàn bộ X)",
      "X = 0, Y = 30 (mua toàn bộ Y)",
      "X = 6, Y = 12"
    ],
    "correct": 2,
    "explanation": "MRS_XY = MU_X / MU_Y = 2 / 1 = 2. Tỷ giá P_X / P_Y = 6 / 2 = 3. Vì MRS = 2 < P_X / P_Y = 3 => MU_X / P_X (2/6 = 0.33) < MU_Y / P_Y (1/2 = 0.5) => Mỗi đồng chi cho Y đem lại thỏa dụng cao hơn. Người tiêu dùng sẽ chọn nghiệm góc: mua toàn bộ Y: Y* = 60 / 2 = 30 và X* = 0.",
    "isTrap": true,
    "trapAdvice": "Hàm tuyến tính luôn dẫn đến nghiệm góc nếu MRS khác P_X/P_Y."
  },
  {
    "id": "q69",
    "category": "micro",
    "chapter": 5,
    "topic": "Đường đồng lượng & Tối ưu sản xuất dài hạn",
    "difficulty": "advanced",
    "question": "Để tối thiểu hóa chi phí sản xuất một mức sản lượng cho trước trong dài hạn, doanh nghiệp nên phân bổ vốn (K) và lao động (L) sao cho:",
    "options": [
      "MP_L = MP_K",
      "MRTS_{LK} = w / r (tức MP_L / w = MP_K / r)",
      "w = r",
      "TC = FC + VC"
    ],
    "correct": 1,
    "explanation": "Trong dài hạn, chi phí tối thiểu đạt được tại tiếp điểm giữa đường đồng lượng và đường đồng phí, nơi Tỷ lệ thay thế kỹ thuật biên bằng tỷ số giá yếu tố sản xuất: MRTS_{LK} = MP_L / MP_K = w / r <=> MP_L / w = MP_K / r (sản phẩm biên trên mỗi đồng chi phí bỏ ra cho các yếu tố phải bằng nhau).",
    "isTrap": false,
    "trapAdvice": "Quy tắc biên tương đương quy tắc tối đa hóa thỏa dụng MU_X / P_X = MU_Y / P_Y của người tiêu dùng."
  },
  {
    "id": "q70",
    "category": "micro",
    "chapter": 6,
    "topic": "Độc quyền nhóm Cournot",
    "difficulty": "advanced",
    "question": "Trong mô hình độc quyền nhóm Cournot với 2 doanh nghiệp cạnh tranh về sản lượng, Hàm phản ứng (Reaction function) của doanh nghiệp 1 cho biết:",
    "options": [
      "Mức giá doanh nghiệp 1 sẽ đặt khi biết giá của doanh nghiệp 2",
      "Mức sản lượng tối đa hóa lợi nhuận của doanh nghiệp 1 ứng với mỗi mức sản lượng dự kiến của doanh nghiệp 2",
      "Mức chi phí tối thiểu của doanh nghiệp 1",
      "Thỏa thuận cấu kết giữa 2 doanh nghiệp"
    ],
    "correct": 1,
    "explanation": "Hàm phản ứng Q_1 = R_1(Q_2) biểu diễn chiến lược sản lượng tối ưu nhất của doanh nghiệp 1 ứng với bất kỳ mức sản lượng nào mà đối thủ (doanh nghiệp 2) đưa ra thị trường.",
    "isTrap": false,
    "trapAdvice": "Giao điểm của 2 hàm phản ứng R_1 và R_2 chính là Cân bằng Cournot-Nash."
  },
  {
    "id": "q71",
    "category": "micro",
    "chapter": 6,
    "topic": "Mô hình Stackelberg",
    "difficulty": "advanced",
    "question": "So với mô hình Cournot, trong mô hình Stackelberg (với cùng hàm cầu và chi phí), doanh nghiệp đi đầu (Leader) sẽ đạt được:",
    "options": [
      "Sản lượng thấp hơn và lợi nhuận thấp hơn",
      "Sản lượng cao hơn và lợi nhuận cao hơn nhờ lợi thế người đi trước (First-mover advantage)",
      "Mức giá bán cao hơn đối thủ đi sau",
      "Lợi nhuận bằng đúng mô hình cạnh tranh hoàn hảo"
    ],
    "correct": 1,
    "explanation": "Người dẫn đầu Stackelberg biết trước cách người đi sau phản ứng, nên chủ động chọn mức sản lượng lớn hơn để chiếm thị phần, ép đối thủ phải thu hẹp sản lượng. Kết quả: Leader đạt sản lượng và lợi nhuận cao hơn đáng kể so với khi chia đều thị phần trong Cournot.",
    "isTrap": false,
    "trapAdvice": "Lợi thế người đi trước là khái niệm chiến lược cốt lõi trong lý thuyết trò chơi và quản trị kinh doanh."
  },
  {
    "id": "q72",
    "category": "micro",
    "chapter": 6,
    "topic": "Mô hình đường cầu gãy khúc (Sweezy)",
    "difficulty": "advanced",
    "question": "Mô hình đường cầu gãy khúc của Paul Sweezy được sử dụng để giải thích hiện tượng nào trong thị trường độc quyền nhóm?",
    "options": [
      "Sự sụp đổ của các liên minh Cartel",
      "Tính cứng nhắc của giá cả (Price rigidity) ngay cả khi chi phí biên MC thay đổi trong một khoảng nhất định",
      "Chiến lược định giá ăn thịt của độc quyền thuần túy",
      "Hiện tượng cạnh tranh hoàn hảo về giá"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp độc quyền nhóm tin rằng: Nếu mình tăng giá, đối thủ sẽ KHÔNG theo (cầu co giãn mạnh); nếu mình giảm giá, đối thủ sẽ LẬP TỨC GIẢM THEO (cầu co giãn kém). Đường cầu bị gãy khúc tại mức giá hiện hành, làm đường MR có một khoảng gián đoạn thẳng đứng. Miễn là đường MC dao động trong khoảng gián đoạn này, mức giá P* tối ưu hoàn toàn KHÔNG THAY ĐỔI.",
    "isTrap": false,
    "trapAdvice": "Đường cầu gãy khúc giải thích vì sao các hãng viễn thông hay nước ngọt ít khi đơn phương đổi giá."
  },
  {
    "id": "q73",
    "category": "micro",
    "chapter": 7,
    "topic": "Cầu yếu tố sản xuất & Cạnh tranh vs Độc quyền",
    "difficulty": "advanced",
    "question": "Đối với một doanh nghiệp độc quyền bán trên thị trường sản phẩm, đường cầu lao động của doanh nghiệp này là:",
    "options": [
      "Đường VMP_L = P x MP_L",
      "Đường MRP_L = MR x MP_L (nằm phía dưới đường VMP_L)",
      "Đường tiền lương W nằm ngang",
      "Đường chi phí cận biên MC"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp độc quyền bán đối mặt với đường cầu dốc xuống nên MR < P. Doanh thu sản phẩm biên từ lao động là MRP_L = MR x MP_L < P x MP_L (VMP_L). Vì vậy, nhà độc quyền luôn thuê ít lao động hơn so với doanh nghiệp cạnh tranh hoàn hảo tại cùng một mức lương thị trường.",
    "isTrap": true,
    "trapAdvice": "Chỉ trong cạnh tranh hoàn hảo mới có P = MR => VMP_L = MRP_L. Độc quyền thì luôn dùng MRP_L!"
  },
  {
    "id": "q74",
    "category": "micro",
    "chapter": 6,
    "topic": "Bất đối xứng thông tin & Adverse Selection",
    "difficulty": "advanced",
    "question": "Trong mô hình 'Thị trường xe quả chanh' (Market for Lemons) của GS. George Akerlof (Nobel 2001), khi người mua không thể phân biệt xe tốt (đào) và xe xấu (chanh), kết cục thị trường là:",
    "options": [
      "Giá xe tốt sẽ tăng vọt",
      "Người mua trả mức giá bình quân, khiến chủ xe tốt rút lui khỏi thị trường, đẩy thị trường vào vòng xoáy chỉ còn xe chất lượng kém (Lựa chọn bất lợi)",
      "Chỉ xe tốt được giao dịch",
      "Thị trường tự động đạt hiệu quả Pareto"
    ],
    "correct": 1,
    "explanation": "Do không phân biệt được chất lượng, người mua chỉ sẵn sàng trả mức giá trung bình. Mức giá này quá thấp đối với chủ xe tốt, khiến họ rút khỏi thị trường. Tỷ lệ xe hỏng (lemons) trên thị trường tăng lên, kéo giá người mua trả giảm sâu hơn nữa, dần dần triệt tiêu toàn bộ giao dịch xe tốt. Đây là hiện tượng Lựa chọn bất lợi (Adverse Selection).",
    "isTrap": false,
    "trapAdvice": "Giải pháp khắc phục bất đối xứng thông tin: Phát tín hiệu (Signaling như bảo hành, bằng cấp) và Sàng lọc (Screening)."
  },
  {
    "id": "q75",
    "category": "macro",
    "chapter": 8,
    "topic": "Mô hình tăng trưởng Solow",
    "difficulty": "advanced",
    "question": "Trong mô hình tăng trưởng Solow, yếu tố duy nhất có thể tạo ra sự tăng trưởng liên tục và bền vững trong mức sống (sản lượng trên mỗi lao động Y/L) trong dài hạn là:",
    "options": [
      "Tăng tỷ lệ tiết kiệm (s)",
      "Tăng tốc độ tăng trưởng dân số (n)",
      "Tiến bộ công nghệ (g)",
      "Tăng đầu tư máy móc tư bản (K)"
    ],
    "correct": 2,
    "explanation": "Theo mô hình Solow, việc tăng tỷ lệ tiết kiệm chỉ tạo ra 'hiệu ứng mức' (Level effect) làm tăng sản lượng tạm thời cho đến khi đạt trạng thái dừng mới, sau đó tốc độ tăng trưởng Y/L lại quay về 0. Do quy luật năng suất cận biên giảm dần của tư bản, chỉ có TIẾN BỘ CÔNG NGHỆ (g) mới là động cơ duy nhất thúc đẩy sản lượng trên mỗi lao động tăng trưởng liên tục trong dài hạn.",
    "isTrap": true,
    "trapAdvice": "Tiết kiệm cao không làm tăng trưởng dài hạn mãi mãi, chỉ có Công nghệ mới làm được!"
  },
  {
    "id": "q76",
    "category": "macro",
    "chapter": 8,
    "topic": "Quy tắc vàng tích lũy tư bản Solow",
    "difficulty": "advanced",
    "question": "Một nền kinh tế đang ở trạng thái dừng với mức tư bản cao hơn mức tư bản theo Quy tắc vàng (k* > k_gold*). Để đưa nền kinh tế về điểm vàng tối đa hóa tiêu dùng, chính phủ nên:",
    "options": [
      "Tăng tỷ lệ tiết kiệm",
      "Giảm tỷ lệ tiết kiệm (s)",
      "Tăng tốc độ tăng dân số",
      "Áp đặt giá trần lãi suất"
    ],
    "correct": 1,
    "explanation": "Khi k* > k_gold*, nền kinh tế đang bị 'Kém hiệu quả động' do tích lũy quá nhiều tư bản (chi phí khấu hao bù đắp lớn hơn sản phẩm biên MPK). Giảm tỷ lệ tiết kiệm s sẽ lập tức làm TĂNG TIÊU DÙNG c* trong cả ngắn hạn lẫn dài hạn, đưa k* giảm về mức vàng tối ưu.",
    "isTrap": false,
    "trapAdvice": "Tiết kiệm nhiều quá mức vàng là lãng phí tài nguyên của xã hội!"
  },
  {
    "id": "q77",
    "category": "macro",
    "chapter": 12,
    "topic": "Mô hình Mundell - Fleming & Tỷ giá thả nổi",
    "difficulty": "advanced",
    "question": "Trong mô hình Mundell-Fleming với vốn luân chuyển hoàn hảo và TỶ GIÁ THẢ NỔI, chính sách nào sau đây có hiệu lực mạnh nhất trong việc tăng sản lượng quốc dân?",
    "options": [
      "Chính sách tài khóa mở rộng (tăng G)",
      "Chính sách tiền tệ mở rộng (tăng cung tiền MS)",
      "Chính sách tăng thuế quan nhập khẩu",
      "Chính sách giảm thuế thu nhập (giảm T)"
    ],
    "correct": 1,
    "explanation": "Dưới tỷ giá thả nổi: Tài khóa và Thuế quan hoàn toàn vô hiệu vì bị triệt tiêu bởi sự tăng giá của đồng nội tệ (NX giảm). Nhưng CHÍNH SÁCH TIỀN TỆ MỞ RỘNG có hiệu lực tối đa: Tăng MS làm lãi suất giảm tạm thời -> dòng vốn chảy ra -> đồng nội tệ giảm giá -> Xuất khẩu ròng NX tăng vọt -> Sản lượng Y tăng mạnh mẽ!",
    "isTrap": true,
    "trapAdvice": "Quy tắc vàng Mundell-Fleming: Tỷ giá THẢ NỔI = TIỀN TỆ thống trị; Tỷ giá CỐ ĐỊNH = TÀI KHÓA thống trị."
  },
  {
    "id": "q78",
    "category": "macro",
    "chapter": 12,
    "topic": "Bộ ba bất khả thi (The Trilemma)",
    "difficulty": "advanced",
    "question": "Khu vực đồng tiền chung Châu Âu (Eurozone) đã chọn từ bỏ mục tiêu nào trong Bộ ba bất khả thi (Trilemma)?",
    "options": [
      "Từ bỏ Tỷ giá hối đoái cố định",
      "Từ bỏ Dòng vốn luân chuyển tự do",
      "Từ bỏ Chính sách tiền tệ độc lập của từng quốc gia thành viên",
      "Từ bỏ Cán cân thanh toán quốc tế"
    ],
    "correct": 2,
    "explanation": "Các quốc gia Eurozone dùng chung một đồng tiền Euro (tương đương tỷ giá cố định tuyệt đối) và mở cửa dòng vốn tự do hoàn toàn giữa các nước thành viên. Cái giá phải trả là từng quốc gia (như Pháp, Ý, Hy Lạp) phải TỪ BỎ CHÍNH SÁCH TIỀN TỆ ĐỘC LẬP, trao quyền điều hành lãi suất cho Ngân hàng Trung ương Châu Âu (ECB).",
    "isTrap": false,
    "trapAdvice": "Trilemma: Không một quốc gia nào có thể cùng lúc đạt cả 3 mục tiêu độc lập tiền tệ, tỷ giá cố định và tự do vốn."
  },
  {
    "id": "q79",
    "category": "macro",
    "chapter": 11,
    "topic": "Tương đương Ricardo (Ricardian Equivalence)",
    "difficulty": "advanced",
    "question": "Học thuyết Tương đương Ricardo cho rằng người tiêu dùng duy lý sẽ phản ứng như thế nào khi chính phủ giảm thuế hôm nay và tài trợ bằng nợ công?",
    "options": [
      "Tăng mạnh chi tiêu tiêu dùng vì thu nhập khả dụng trước mắt tăng",
      "Giữ nguyên mức tiêu dùng và tăng tiết kiệm đúng bằng số tiền thuế được giảm để dành đóng thuế trong tương lai",
      "Rút hết tiền gửi ngân hàng mua vàng",
      "Vay thêm tiền ngân hàng để chi tiêu"
    ],
    "correct": 1,
    "explanation": "Theo Tương đương Ricardo, người tiêu dùng dự đoán việc phát hành nợ công hôm nay đồng nghĩa với việc chính phủ sẽ phải tăng thuế trong tương lai để trả nợ. Do đó họ không hề cảm thấy giàu lên, mà sẽ tiết kiệm toàn bộ khoản giảm thuế để chuẩn bị cho nghĩa vụ thuế tương lai, khiến Tổng cầu AD không đổi.",
    "isTrap": false,
    "trapAdvice": "Đây là luận điểm bác bỏ số nhân kích cầu thuế của trường phái Tân cổ điển."
  },
  {
    "id": "q80",
    "category": "macro",
    "chapter": 11,
    "topic": "Quy tắc lãi suất Taylor",
    "difficulty": "advanced",
    "question": "Nguyên lý Taylor (Taylor Principle) đòi hỏi hệ số phản ứng của Ngân hàng Trung ương trước lạm phát phải lớn hơn 1 nhằm đảm bảo:",
    "options": [
      "Lãi suất danh nghĩa giữ nguyên",
      "Lãi suất thực tế r phải tăng lên khi lạm phát tăng, qua đó kìm hãm tổng cầu và ổn định giá cả",
      "Tỷ lệ thất nghiệp luôn bằng 0%",
      "Lạm phát tăng nhanh hơn lãi suất"
    ],
    "correct": 1,
    "explanation": "Theo Fisher r = i - pi. Muốn lãi suất thực tế r tăng để hạ nhiệt nền kinh tế, tốc độ tăng của lãi suất danh nghĩa i bắt buộc phải lớn hơn tốc độ tăng của lạm phát pi (hệ số phản ứng > 1). Nếu hệ số < 1, lãi suất thực tế sẽ giảm và gây mất ổn định vĩ mô.",
    "isTrap": false,
    "trapAdvice": "Quy tắc Taylor là kim chỉ nam điều hành chính sách tiền tệ của các NHTW lớn nhất thế giới hiện nay."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_DATA;
}
