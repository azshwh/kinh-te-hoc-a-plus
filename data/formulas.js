// Sổ tay công thức toàn diện môn Kinh tế học đại cương (Vi mô & Vĩ mô)
// Tích hợp tình huống thực chiến kinh điển của các tập đoàn hàng đầu thế giới và các công trình Nobel Kinh tế chấn động toàn cầu

const FORMULAS_DATA = [
  // ================= VI MÔ: CHƯƠNG 1 =================
  {
    id: "micro-1",
    category: "micro",
    chapter: "Chương 1: Khái quát & Các nguyên lý cơ bản",
    title: "Chi phí cơ hội & Đường giới hạn khả năng sản xuất (PPF)",
    formula: "OC_X = \\frac{|\\Delta Y|}{|\\Delta X|}",
    description: "Chi phí cơ hội của việc sản xuất thêm 1 đơn vị hàng hóa X là số lượng hàng hóa Y phải từ bỏ.",
    variables: [
      { symbol: "OC_X", meaning: "Chi phí cơ hội của hàng hóa X (tính bằng số lượng Y)" },
      { symbol: "\\Delta Y", meaning: "Số lượng hàng hóa Y bị giảm sút" },
      { symbol: "\\Delta X", meaning: "Số lượng hàng hóa X thu thêm được" }
    ],
    example: "Nếu nền kinh tế chuyển từ phương án A (100 tấn lúa, 0 tấn thép) sang B (80 tấn lúa, 10 tấn thép): $OC_{thép} = |80 - 100| / |10 - 0| = 2$ tấn lúa / 1 tấn thép.",
    examTrap: "BẪY KINH ĐIỂN: Đề bài hay hỏi 'Chi phí cơ hội của X' nhưng sinh viên lại lấy ΔX / ΔY (đó là chi phí cơ hội của Y). Nhớ quy tắc: Muốn tìm chi phí cơ hội của cái gì thì chia cho cái đó ở mẫu số!",
    notes: "Đường PPF cong lồi ra ngoài phản ánh quy luật Chi phí cơ hội tăng dần.",
    caseStudy: {
      entity: "Liên minh Anh - Pháp & Dự án Máy Bay Siêu Thanh Concorde",
      badge: "Nghiên Cứu Nobel Daniel Kahneman",
      title: "Ngụy biện chi phí chìm và cái bẫy hàng tỷ USD của Concorde",
      context: "Chính phủ Anh và Pháp đã đổ hàng tỷ USD để phát triển dòng máy bay siêu thanh Concorde. Dù nhận ra dự án không bao giờ hòa vốn do tốn nhiên liệu và tiếng ồn lớn, cả hai chính phủ vẫn tiếp tục bơm tiền vì 'đã lỡ chi quá nhiều tiền rồi, dừng lại là mất trắng'.",
      analysis: "Đây là vụ việc kinh điển về việc nhầm lẫn giữa Chi phí chìm (Sunk Cost) và Chi phí cơ hội ($OC$). Khoản tiền đã chi không thể thu hồi lại. Lẽ ra liên minh phải so sánh Lợi ích biên trong tương lai với Chi phí biên bỏ thêm ($MB < MC$). Mỗi đồng tiền đổ vào Concorde có chi phí cơ hội là đã tước đoạt nguồn vốn phát triển y tế, giáo dục hay dòng máy bay phản lực thương mại siêu tiết kiệm nhiên liệu.",
      lesson: "Khi phân tích quyết định sản xuất trên đường PPF hoặc dự án đầu tư, tuyệt đối gạch bỏ Chi phí chìm ra khỏi hàm tính toán!"
    }
  },

  // ================= VI MÔ: CHƯƠNG 2 =================
  {
    id: "micro-2",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    title: "Phương trình Cung, Cầu và Điểm cân bằng thị trường",
    formula: "Q_D = Q_S \\iff a - bP = c + dP \\implies P^* = \\frac{a - c}{b + d}, \\quad Q^* = a - bP^*",
    description: "Cân bằng thị trường xảy ra tại mức giá P* mà lượng cầu bằng lượng cung.",
    variables: [
      { symbol: "Q_D", meaning: "Lượng cầu (Q_D = a - bP, b > 0)" },
      { symbol: "Q_S", meaning: "Lượng cung (Q_S = c + dP, d > 0)" },
      { symbol: "P^*, Q^*", meaning: "Giá cân bằng và lượng cân bằng thị trường" }
    ],
    example: "Cho Q_D = 120 - 2P và Q_S = 30 + P. Cho Q_D = Q_S => 120 - 2P = 30 + P => 3P = 90 => P* = 30, Q* = 60.",
    examTrap: "Phân biệt cực kỳ cẩn thận giữa 'Hàm cầu theo giá' (Q_D = f(P)) và 'Hàm cầu ngược' (P_D = f(Q)). Nếu đề cho P = 60 - 0.5Q, nhớ đổi đúng trước khi giải hoặc vẽ đồ thị.",
    notes: "Giá trần (Price Ceiling) phải ĐẶT DƯỚI giá cân bằng mới có hiệu lực, gây thiếu hụt (Shortage). Giá sàn (Price Floor) phải ĐẶT TRÊN giá cân bằng mới có hiệu lực, gây dư thừa (Surplus).",
    caseStudy: {
      entity: "Chính quyền Tổng thống Richard Nixon (1971 - 1973)",
      badge: "Cú Sốc Kiểm Soát Giá Toàn Cầu",
      title: "Hàng dài xe hơi xếp hàng xuyên đêm và thảm họa Giá trần Xăng dầu",
      context: "Trước thềm bầu cử năm 1971 và cú sốc dầu mỏ 1973, Tổng thống Mỹ Richard Nixon ra lệnh đóng băng giá và quy định giá trần (Price Ceiling) đối với xăng dầu để ngăn chặn lạm phát.",
      analysis: "Mức giá trần được áp đặt thấp hơn nhiều so với giá cân bằng thị trường ($P_{ceiling} < P^*$). Tại mức giá rẻ nhân tạo này, lượng cầu tăng vọt ($Q_D \\uparrow$) trong khi các nhà máy lọc dầu cắt giảm sản lượng ($Q_S \\downarrow$), dẫn đến tình trạng thiếu hụt trầm trọng ($Q_D > Q_S$). Các trạm xăng đóng cửa, hàng dài xe hơi xếp hàng hàng km chờ mua xăng, thị trường ngầm bán lậu xăng với giá gấp 3 lần.",
      lesson: "Giá trần có hiệu lực không làm người nghèo mua được hàng rẻ hơn, mà chỉ biến chi phí tiền bạc thành chi phí thời gian chờ đợi và tạo ra chợ đen!"
    }
  },

  // ================= VI MÔ: CHƯƠNG 2 (TIẾP) =================
  {
    id: "micro-3",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    title: "Thặng dư tiêu dùng (CS), Thặng dư sản xuất (PS) & Tổn thất vô ích (DWL)",
    formula: "CS = \\frac{1}{2}(P_{max} - P^*) \\times Q^*, \\quad PS = \\frac{1}{2}(P^* - P_{min}) \\times Q^*, \\quad DWL = \\frac{1}{2} t \\times (Q^* - Q_t)",
    description: "CS là diện tích tam giác dưới đường cầu và trên giá cân bằng. PS là diện tích tam giác trên đường cung và dưới giá cân bằng.",
    variables: [
      { symbol: "CS", meaning: "Consumer Surplus - Thặng dư của người tiêu dùng" },
      { symbol: "PS", meaning: "Producer Surplus - Thặng dư của nhà sản xuất" },
      { symbol: "DWL", meaning: "Deadweight Loss - Tổn thất vô ích của xã hội do thuế hoặc độc quyền" }
    ],
    example: "Với P = 60 - 0.5Q (P_max = 60) và P* = 30, Q* = 60: CS = 0.5 * (60 - 30) * 60 = 900.",
    examTrap: "Khi có Thuế (t): Tổng thặng dư giảm một lượng gọi là DWL = 0.5 * t * (Q* - Q_t). Đừng quên cộng cả Doanh thu thuế của Chính phủ (T = t * Q_t) khi tính Tổng thặng dư xã hội sau thuế!",
    notes: "Thị trường tự do không can thiệp đạt hiệu quả Pareto tối đa hóa TS.",
    caseStudy: {
      entity: "Quốc Hội Hoa Kỳ & Đạo Luật Thuế Hàng Xa Xỉ 1990",
      badge: "Thảm Họa Thuế Đi Vào Lịch Sử",
      title: "Đánh thuế người giàu nhưng công nhân nghèo mất việc làm",
      context: "Năm 1990, Quốc hội Mỹ đánh thuế 10% lên du thuyền xa xỉ giá trên $100.000 nhằm mục đích tăng thu ngân sách từ giới nhà giàu mà không ảnh hưởng đến người lao động.",
      analysis: "Người giàu có độ co giãn của cầu theo giá cực kỳ cao ($|E_D| > 4$ do du thuyền là hàng xa xỉ dễ thay thế bằng cách thuê thuyền ở nước ngoài). Cầu sụt giảm kinh hoàng, lượng bán du thuyền Mỹ giảm 71%. Ngành đóng tàu Mỹ phá sản, 25.000 công nhân mất việc. Khoản thuế thu được vỏn vẹn 16.6 triệu USD, trong khi chính phủ phải chi 24.5 triệu USD tiền trợ cấp thất nghiệp! Tổn thất vô ích $DWL$ phá hủy toàn bộ thị trường.",
      lesson: "Bên nào có độ co giãn cao hơn thì né thuế dễ hơn. Thuế đánh vào người mua hàng co giãn cao sẽ bị đẩy ngược gánh nặng lên nhà sản xuất và người lao động!"
    }
  },

  // ================= VI MÔ: CHƯƠNG 3 =================
  {
    id: "micro-4",
    category: "micro",
    chapter: "Chương 3: Độ co giãn của Cung & Cầu",
    title: "Độ co giãn của Cầu theo Giá (E_D) & Tác động đến Doanh thu (TR)",
    formula: "E_D^{khoảng} = \\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \\div \\frac{P_2 - P_1}{(P_1 + P_2)/2}, \\quad E_D^{điểm} = Q'(P) \\times \\frac{P}{Q}",
    description: "Đo lường mức độ phản ứng của lượng cầu trước sự thay đổi của giá cả.",
    variables: [
      { symbol: "|E_D| > 1", meaning: "Cầu co giãn nhiều: Giảm giá -> TR Tăng; Tăng giá -> TR Giảm" },
      { symbol: "|E_D| < 1", meaning: "Cầu co giãn ít (thiết yếu): Tăng giá -> TR Tăng; Giảm giá -> TR Giảm" },
      { symbol: "|E_D| = 1", meaning: "Co giãn đơn vị: Thay đổi giá không làm thay đổi TR (TR đạt cực đại)" }
    ],
    example: "Nếu Q_D = 100 - 2P. Tại P = 20, Q = 60: E_D = (-2) * (20/60) = -0.67. Vì |E_D| < 1, hàng hóa co giãn ít theo giá.",
    examTrap: "Công thức co giãn khoảng (Midpoint method): mẫu số PHẢI là trung bình cộng ((Q_1+Q_2)/2), không phải Q_1 ban đầu! Trả lời trắc nghiệm chú ý xem đề bài lấy giá trị âm hay lấy giá trị tuyệt đối |E_D|.",
    notes: "Quy tắc vàng: Nếu cầu co giãn nhiều, muốn tăng doanh thu thì PHẢI HẠ GIÁ. Nếu cầu co giãn ít, muốn tăng doanh thu thì PHẢI TĂNG GIÁ.",
    caseStudy: {
      entity: "Turing Pharmaceuticals (Martin Shkreli) vs Netflix (2011 Qwikster)",
      badge: "Vụ Bê Bối Giá Thuốc Toàn Cầu",
      title: "Tăng giá 5.455% thành công vs Mất 800.000 khách hàng trong 1 quý",
      context: "Năm 2015, 'Gã tồi nhất nước Mỹ' Martin Shkreli mua độc quyền thuốc Daraprim (trị ký sinh trùng HIV) và tăng giá từ $13.5 lên $750/viên (+5.455%). Cùng lúc, Netflix năm 2011 tăng giá gói xem phim thêm 60%.",
      analysis: "Thuốc Daraprim không có sản phẩm thay thế và là thuốc cứu mạng, nên cầu co giãn gần như hoàn toàn không ($|E_D| \\approx 0$). Tăng giá 5.455% khiến doanh thu của Turing tăng vọt vì người bệnh buộc phải mua bằng mọi giá. Ngược lại, dịch vụ xem phim của Netflix là giải trí có nhiều lựa chọn thay thế ($|E_D| > 1$). Khi Netflix tăng giá, 800.000 khách hàng lập tức hủy đăng ký, cổ phiếu Netflix bốc hơi 77% giá trị!",
      lesson: "Doanh nghiệp chỉ có thể tăng giá để tăng doanh thu khi cầu co giãn kém ($|E_D| < 1$). Nếu $|E_D| > 1$, tăng giá là tự sát thương mại."
    }
  },

  // ================= VI MÔ: CHƯƠNG 3 (TIẾP) =================
  {
    id: "micro-5",
    category: "micro",
    chapter: "Chương 3: Độ co giãn của Cung & Cầu",
    title: "Độ co giãn theo Thu nhập (E_I) & Co giãn chéo (E_XY)",
    formula: "E_I = \\frac{\\%\\Delta Q}{\\%\\Delta I}, \\quad E_{XY} = \\frac{\\%\\Delta Q_X}{\\%\\Delta P_Y}",
    description: "Phân loại tính chất của hàng hóa dựa vào dấu và độ lớn của hệ số co giãn.",
    variables: [
      { symbol: "E_I > 0", meaning: "Hàng hóa thông thường (Normal good): Thu nhập tăng -> Cầu tăng" },
      { symbol: "E_I > 1", meaning: "Hàng hóa cao cấp / xa xỉ (Luxury good)" },
      { symbol: "0 < E_I \\le 1", meaning: "Hàng hóa thiết yếu (Necessity)" },
      { symbol: "E_I < 0", meaning: "Hàng hóa thứ cấp / cấp thấp (Inferior good): Thu nhập tăng -> Cầu giảm" },
      { symbol: "E_{XY} > 0", meaning: "Hai hàng hóa THAY THẾ cho nhau (Pepsi và Coca)" },
      { symbol: "E_{XY} < 0", meaning: "Hai hàng hóa BỔ SUNG cho nhau (Xăng và Xe máy)" }
    ],
    example: "Thu nhập tăng 10%, lượng mua mì gói giảm 5% => E_I = -5% / 10% = -0.5 < 0 => Mì gói là hàng hóa cấp thấp.",
    examTrap: "Dấu của E_I và E_XY mang ý nghĩa bản chất kinh tế cực kỳ quan trọng, KHÔNG ĐƯỢC lấy giá trị tuyệt đối!",
    notes: "Đề thi đại học rất hay hỏi câu ghép: Cho E_I = -0.8 và E_XY = 1.2, kết luận gì về hàng hóa X?",
    caseStudy: {
      entity: "Hãng Xe Điện Tesla vs Cuộc Chiến Nền Tảng Spotify & Apple Music",
      badge: "Chiến Lược Phân Loại Thị Trường",
      title: "Xe điện sang trọng trong suy thoái và sự dịch chuyển thuê bao âm nhạc",
      context: "Khi lạm phát toàn cầu năm 2022 làm giảm thu nhập thực tế của người dân, doanh số các thương hiệu xa xỉ như Porsche, Tesla vẫn duy trì tăng trưởng, trong khi lượng tiêu thụ xe máy phổ thông sụt giảm. Đồng thời, khi Apple Music tăng giá thuê bao từ $9.99 lên $10.99, Spotify ghi nhận lượng người dùng mới tăng kỷ lục.",
      analysis: "Tesla Model S thuộc nhóm hàng xa xỉ ($E_I > 1$), tiêu dùng bởi tầng lớp có của cải lớn ít bị tổn thương bởi suy thoái thu nhập ngắn hạn. Trong khi đó, Apple Music và Spotify là hai hàng hóa thay thế hoàn hảo ($E_{XY} > 0$). Khi giá Apple Music tăng ($P_Y \\uparrow$), lượng cầu dịch vụ của Spotify tăng theo ($Q_X \\uparrow$).",
      lesson: "Dấu dương hay âm của $E_I$ và $E_{XY}$ quyết định toàn bộ định vị phân khúc khách hàng và chiến lược phòng thủ trước đối thủ cạnh tranh."
    }
  },

  // ================= VI MÔ: CHƯƠNG 4 =================
  {
    id: "micro-6",
    category: "micro",
    chapter: "Chương 4: Lý thuyết hành vi người tiêu dùng",
    title: "Tối đa hóa Lợi ích (Utility Maximization) & Tỷ lệ thay thế biên (MRS)",
    formula: "\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\iff MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y}, \\quad X P_X + Y P_Y = I",
    description: "Người tiêu dùng đạt lợi ích tối đa khi đồng tiền cuối cùng chi tiêu cho mỗi loại hàng hóa đem lại lợi ích cận biên như nhau.",
    variables: [
      { symbol: "MU_X, MU_Y", meaning: "Lợi ích cận biên: MU = ΔTU / ΔQ = TU'(Q)" },
      { symbol: "P_X, P_Y", meaning: "Giá của hàng hóa X và Y" },
      { symbol: "I", meaning: "Thu nhập của người tiêu dùng" },
      { symbol: "MRS_{XY}", meaning: "Tỷ lệ thay thế cận biên: MRS_XY = MU_X / MU_Y = P_X / P_Y" }
    ],
    example: "Cho TU(X, Y) = X * Y. P_X = 2, P_Y = 5, I = 100. MU_X = Y, MU_Y = X. Điều kiện: Y/2 = X/5 => X = 2.5Y. Thay vào ngân sách: 2(2.5Y) + 5Y = 100 => Y = 10, X = 25.",
    examTrap: "Nếu MU_X / P_X > MU_Y / P_Y, người tiêu dùng thông minh nên TĂNG mua X và GIẢM mua Y để tăng tổng mức thỏa dụng!",
    notes: "Độ dốc của đường ngân sách là -P_X / P_Y. Tiếp điểm giữa đường bàng quan và đường ngân sách là điểm tối ưu.",
    caseStudy: {
      entity: "Tập Đoàn Apple Inc. (Steve Jobs & Tim Cook)",
      badge: "Nghệ Thuật Trói Chân Hệ Sinh Thái",
      title: "Gói Apple One và nghệ thuật thao túng đường bàng quan người dùng",
      context: "Thay vì bán riêng lẻ iPhone, dịch vụ lưu trữ iCloud ($2.99), Apple Music ($10.99), và Apple TV+ ($6.99), Apple tung ra gói combo Apple One với giá $19.95/tháng, đồng thời thiết kế tính năng AirDrop, iMessage đồng bộ mượt mà giữa các thiết bị.",
      analysis: "Bằng việc tích hợp hệ sinh thái, Apple đã làm gia tăng độ thỏa dụng biên chéo: dùng thêm MacBook làm tăng thỏa dụng biên của việc sở hữu iPhone ($MU_{iPhone} \\uparrow$). Đồng thời, gói combo Apple One giảm giá biên trên từng dịch vụ, đẩy tỷ số $MU/P$ của các dịch vụ Apple lên cao hơn hẳn so với Spotify hay Google Drive, khiến điểm tiếp xúc tối ưu của đường ngân sách người dùng bị khóa chặt (Lock-in) vĩnh viễn trong hệ sinh thái Apple.",
      lesson: "Tối ưu hóa tiêu dùng không chỉ phụ thuộc vào giá, mà các tập đoàn lớn luôn tìm cách dịch chuyển đường bàng quan của người tiêu dùng thông qua hiệu ứng mạng lưới."
    }
  },

  // ================= VI MÔ: CHƯƠNG 5 =================
  {
    id: "micro-7",
    category: "micro",
    chapter: "Chương 5: Lý thuyết sản xuất & Chi phí",
    title: "Hệ thống các loại chi phí sản xuất & Điểm hòa vốn",
    formula: "TC = FC + VC, \\quad ATC = \\frac{TC}{Q} = AFC + AVC, \\quad MC = TC'(Q) = VC'(Q)",
    description: "Trong ngắn hạn có chi phí cố định (FC) và chi phí biến đổi (VC). Trong dài hạn mọi chi phí đều là biến đổi (FC = 0).",
    variables: [
      { symbol: "TC", meaning: "Tổng chi phí (Total Cost)" },
      { symbol: "FC", meaning: "Chi phí cố định (Fixed Cost, không phụ thuộc Q)" },
      { symbol: "VC", meaning: "Chi phí biến đổi (Variable Cost, phụ thuộc Q)" },
      { symbol: "ATC", meaning: "Chi phí trung bình: ATC = TC / Q" },
      { symbol: "MC", meaning: "Chi phí cận biên: MC = TC'(Q)" }
    ],
    example: "Cho TC = Q^2 + 10Q + 100. Ta có FC = 100, VC = Q^2 + 10Q, MC = 2Q + 10, ATC = Q + 10 + 100/Q.",
    examTrap: "Đường MC luôn cắt đường AVC và đường ATC tại ĐIỂM CỰC TIỂU của chúng (MC = AVC_min và MC = ATC_min). Đây là câu trắc nghiệm xuất hiện trong 90% đề thi!",
    notes: "Khi MC < ATC, ATC đang dốc xuống. Khi MC > ATC, ATC đang dốc lên.",
    caseStudy: {
      entity: "Ford Motor Company & Henry Ford (Năm 1908 - 1920)",
      badge: "Cuộc Cách Mạng Dây Chuyền Lắp Ráp",
      title: "Hạ gục toàn bộ đối thủ nhờ đẩy AFC về sát 0 trên dòng xe Model T",
      context: "Đầu thế kỷ 20, ô tô là xa xỉ phẩm được đóng thủ công với giá $2.000. Henry Ford phát minh ra dây chuyền sản xuất hàng loạt (Assembly line) cho dòng xe Model T, chấp nhận đầu tư chi phí cố định nhà xưởng khổng lồ ($FC$).",
      analysis: "Nhờ sản xuất hàng trăm ngàn chiếc xe cùng một mẫu, Chi phí cố định trung bình bị nghiền nhỏ theo sản lượng ($AFC = FC / Q \\to 0$). Kết hợp với đường cong kinh nghiệm làm giảm $AVC$, Chi phí trung bình $ATC$ của chiếc xe Model T giảm từ $850 xuống còn $260. Henry Ford hạ giá bán chiếc xe xuống mức người công nhân bình thường cũng mua được, buộc hàng trăm xưởng xe thủ công có $ATC$ cao phải phá sản.",
      lesson: "Hiệu quả kinh tế nhờ quy mô (Economies of Scale) cho phép doanh nghiệp lớn vận hành tại đáy của đường ATC dài hạn, dựng rào cản chi phí tuyệt đối."
    }
  },

  // ================= VI MÔ: CHƯƠNG 6 =================
  {
    id: "micro-8",
    category: "micro",
    chapter: "Chương 6: Cấu trúc thị trường & Tối đa hóa lợi nhuận",
    title: "Nguyên tắc tối đa hóa lợi nhuận (MR = MC) & Độc quyền",
    formula: "MR = MC \\implies \\pi_{max}, \\quad L = \\frac{P - MC}{P} = \\frac{1}{|E_D|}",
    description: "Doanh nghiệp ở bất kỳ thị trường nào cũng tối đa hóa lợi nhuận tại mức sản lượng có Doanh thu cận biên bằng Chi phí cận biên.",
    variables: [
      { symbol: "Cạnh tranh hoàn hảo", meaning: "P = MR = AR = MC. Điểm hòa vốn: P = ATC_min. Điểm đóng cửa: P < AVC_min" },
      { symbol: "Độc quyền thuần túy", meaning: "MR < P. Doanh nghiệp độc quyền đặt giá P > MC, gây ra tổn thất vô ích DWL" },
      { symbol: "L", meaning: "Chỉ số Lerner đo sức mạnh độc quyền: L = (P - MC) / P = 1 / |E_D|" }
    ],
    example: "Doanh nghiệp độc quyền có cầu P = 100 - Q => TR = 100Q - Q^2 => MR = 100 - 2Q. Nếu MC = 20, MR = MC => 100 - 2Q = 20 => Q* = 40, P* = 60.",
    examTrap: "Với Doanh nghiệp độc quyền: Đường MR luôn có độ dốc GẤP ĐÔI độ dốc đường cầu! (Cầu: P = a - bQ => MR = a - 2bQ). Rất nhiều bạn quên điều này dẫn đến tính sai Q*!",
    notes: "Đường cung ngắn hạn của doanh nghiệp cạnh tranh hoàn hảo chính là phần đường MC nằm PHÍA TRÊN điểm cực tiểu của AVC.",
    caseStudy: {
      entity: "Tập Đoàn Khai Thác Kim Cương De Beers (Nam Phi)",
      badge: "Đế Chế Độc Quyền Huyền Thoại Thế Kỷ 20",
      title: "Thông điệp 'Kim cương là vĩnh cửu' và nghệ thuật siết van sản lượng",
      context: "Trong suốt thế kỷ 20, tập đoàn De Beers kiểm soát hơn 85% nguồn cung kim cương thô toàn cầu. Họ sáng tạo ra thông điệp marketing vĩ đại nhất lịch sử: 'A Diamond is Forever' để gắn kim cương với nhẫn đính hôn.",
      analysis: "Có quyền lực độc quyền tuyệt đối, De Beers không hành xử như cạnh tranh hoàn hảo ($P = MC$). Họ thiết lập phương trình $MR = MC$. Chi phí khai thác kim cương rất rẻ ($MC$ thấp), nhưng De Beers cố tình giữ hàng nghìn tấn kim cương trong kho tại London, chỉ mở nhỏ giọt ra thị trường. Bằng cách giảm sản lượng $Q_M < Q_C$, họ đẩy giá bán $P_M$ lên gấp hàng chục lần so với $MC$, đạt chỉ số Lerner $L \\to 1$ và tối đa hóa lợi nhuận siêu ngạch.",
      lesson: "Bản chất độc quyền không phải là bán nhiều nhất có thể, mà là hạn chế sản lượng có chủ đích để neo giá bán ở mức $MR = MC$ trên đường cầu dốc xuống."
    }
  },

  // ================= VI MÔ: CHƯƠNG 6 (TIẾP) =================
  {
    id: "micro-9",
    category: "micro",
    chapter: "Chương 6: Cấu trúc thị trường & Lý thuyết trò chơi",
    title: "Cân bằng Nash (Nash Equilibrium) & Thế lưỡng nan của người tù",
    formula: "\\text{Cân bằng Nash}: \\pi_i(s_i^*, s_{-i}^*) \\ge \\pi_i(s_i, s_{-i}^*) \\quad \\forall s_i",
    description: "Một tập hợp các chiến lược là Cân bằng Nash nếu không có người chơi nào có động cơ đơn phương thay đổi chiến lược của mình.",
    variables: [
      { symbol: "s_i^*", meaning: "Chiến lược tối ưu của người chơi i khi biết trước chiến lược của đối thủ" },
      { symbol: "Cartel", meaning: "Liên minh các doanh nghiệp cấu kết chia thị trường và hạn chế sản lượng" }
    ],
    example: "Hai doanh nghiệp A và B cùng chọn giá: Nếu cả hai cùng đặt giá cao -> cùng lời 10 tỷ. Nếu A gian lận hạ giá -> A lời 15 tỷ, B lỗ 2 tỷ. Cân bằng Nash: Cả hai cùng hạ giá -> mỗi bên chỉ lời 3 tỷ.",
    examTrap: "Cân bằng Nash KHÔNG PHẢI là kết quả tốt nhất cho cả hai bên (không phải tối ưu Pareto), mà là kết quả bền vững nhất khi mỗi bên đều hành động vị kỷ!",
    notes: "Mô hình Cournot và Bertrand là các ứng dụng kinh điển của cân bằng Nash trong độc quyền nhóm.",
    caseStudy: {
      entity: "Khối Các Nước Xuất Khẩu Dầu Mỏ (OPEC & OPEC+)",
      badge: "Nobel Kinh Tế John Nash",
      title: "Cuộc chiến giá dầu Nga - Saudi Arabia 2020 và sự sụp đổ của Cartel",
      context: "OPEC là một Cartel gồm các nước dầu mỏ hợp tác để cắt giảm sản lượng nhằm giữ giá dầu trên $80/thùng. Tháng 3/2020, trước làn sóng Covid-19 làm cầu sụt giảm, Saudi Arabia yêu cầu cắt giảm sản lượng nhưng Nga từ chối.",
      analysis: "Đây là thế lưỡng nan của người tù kinh điển: Hợp tác cùng cắt giảm thì giá dầu cao, cả hai cùng có lợi. Nhưng mỗi bên đều có chiến lược áp đảo (Dominant strategy) là bơm thêm dầu để chiếm thị phần. Khi niềm tin vỡ vụn, Saudi Arabia mở van xả dầu hết công suất và hạ giá bán chiết khấu. Cả hai lao vào Cân bằng Nash không hợp tác: giá dầu lao dốc không phanh, thậm chí dầu WTI có thời điểm rơi xuống mức âm (-$37/thùng)!",
      lesson: "Các liên minh cấu kết (Cartel) luôn chứa đựng mầm mống tự hủy diệt vì mỗi thành viên luôn có động cơ đơn phương gian lận hạn ngạch."
    }
  },

  // ================= VI MÔ: NGOẠI ỨNG =================
  {
    id: "micro-10",
    category: "micro",
    chapter: "Chương 6: Thất bại thị trường & Ngoại ứng",
    title: "Ngoại ứng tiêu cực, Chi phí xã hội & Thuế Pigou",
    formula: "MSC = MPC + MEC, \\quad t_{Pigou} = MEC(Q^*)",
    description: "Khi có ngoại ứng tiêu cực (ô nhiễm), Chi phí cận biên xã hội (MSC) cao hơn Chi phí cận biên tư nhân (MPC). Thị trường tự do sẽ sản xuất thừa so với mức tối ưu.",
    variables: [
      { symbol: "MPC", meaning: "Chi phí cận biên tư nhân của doanh nghiệp sản xuất" },
      { symbol: "MEC", meaning: "Chi phí ngoại ứng cận biên gây ra cho xã hội (ô nhiễm môi trường)" },
      { symbol: "MSC", meaning: "Chi phí cận biên xã hội: MSC = MPC + MEC" },
      { symbol: "t_{Pigou}", meaning: "Mức thuế Pigou đánh trên mỗi đơn vị sản phẩm đúng bằng MEC" }
    ],
    example: "Nhà máy thép có MPC = 20 + Q, chi phí ô nhiễm MEC = 10. Khi đó MSC = 30 + Q. Chính phủ nên đánh thuế t = 10 để đưa sản lượng về mức tối ưu xã hội.",
    examTrap: "Thuế thông thường gây ra tổn thất vô ích DWL, nhưng THUẾ PIGOU LẠI LÀM TĂNG HIỆU QUẢ XÃ HỘI VÀ TRIỆT TIÊU DWL! Đây là câu hỏi trắc nghiệm bẫy 100% sinh viên không chú ý.",
    notes: "Định lý Coase: Nếu quyền sở hữu tài sản được xác định rõ ràng và chi phí giao dịch bằng 0, các bên tư nhân có thể tự thương lượng để đạt hiệu quả mà không cần chính phủ can thiệp.",
    caseStudy: {
      entity: "Liên Minh Châu Âu (EU) & Hệ Thống Giao Dịch Phát Thải EU ETS",
      badge: "Cơ Chế Thuế Pigou Toàn Cầu",
      title: "Định giá khí thải Carbon buộc các tập đoàn công nghiệp xanh hóa",
      context: "Các nhà máy điện than và luyện kim tại Châu Âu xả hàng triệu tấn $CO_2$ gây biến đổi khí hậu nhưng không phải trả tiền trong giá thành sản phẩm. EU thiết lập hệ thống hạn ngạch phát thải ETS, áp mức thuế carbon lên tới gần 100 Euro/tấn $CO_2$.",
      analysis: "Khí thải $CO_2$ là chi phí ngoại ứng tiêu cực ($MEC$). Bằng việc bắt các doanh nghiệp phải mua tín chỉ phát thải đúng bằng lượng khí xả ra, chính phủ đã nội hóa ngoại ứng (Internalizing the externality), đẩy đường cung tư nhân $MPC$ lên trùng với đường chi phí xã hội $MSC$. Kết quả: các nhà máy buộc phải đầu tư năng lượng tái tạo hoặc giảm sản lượng bẩn, đưa phát thải toàn khối EU giảm 37% mà vẫn đảm bảo tăng trưởng kinh tế.",
      lesson: "Thuế Pigou là công cụ duy nhất biến chi phí vô hình ngoài xã hội thành chi phí tiền mặt hữu hình trong sổ sách kế toán của doanh nghiệp."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 7 =================
  {
    id: "macro-1",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    title: "Tổng sản phẩm quốc nội (GDP) theo 3 phương pháp",
    formula: "GDP = C + I + G + NX, \\quad GNP = GDP + NPI",
    description: "GDP là tổng giá trị thị trường của tất cả hàng hóa và dịch vụ CUỐI CÙNG được sản xuất ra trong phạm vi một lãnh thổ quốc gia trong một thời kỳ nhất định.",
    variables: [
      { symbol: "C", meaning: "Tiêu dùng của hộ gia đình (Consumption)" },
      { symbol: "I", meaning: "Tổng đầu tư tư nhân (Investment = Khấu hao De + Đầu tư ròng In)" },
      { symbol: "G", meaning: "Chi tiêu mua sắm hàng hóa/dịch vụ của Chính phủ (KHÔNG bao gồm trợ cấp Tr)" },
      { symbol: "NX", meaning: "Xuất khẩu ròng: NX = X (Xuất khẩu) - IM (Nhập khẩu)" },
      { symbol: "NPI", meaning: "Thu nhập yếu tố ròng từ nước ngoài (NPI = Thu nhập từ nước ngoài - Thu nhập trả ra nước ngoài)" }
    ],
    example: "Cho C = 600, I = 200, G = 150, X = 100, IM = 80 => GDP = 600 + 200 + 150 + (100 - 80) = 970.",
    examTrap: "BẪY 1: Chi chuyển nhượng của Chính phủ (Tr) như trợ cấp người nghèo, lương hưu KHÔNG tính trực tiếp vào GDP. BẪY 2: Bán lại xe máy cũ hay mua cổ phiếu KHÔNG tính vào GDP!",
    notes: "GDP danh nghĩa tính theo giá hiện hành; GDP thực tế (GDP_r) tính theo giá cố định (năm gốc).",
    caseStudy: {
      entity: "Tập Đoàn Apple Inc. & Cộng Hòa Ireland (Năm 2015)",
      badge: "Hiện Tượng Leprechaun Economics",
      title: "GDP Ireland tăng vọt 26.3% trong 1 đêm và bài học về giới hạn của GDP",
      context: "Năm 2015, Cục Thống kê Ireland công bố một con số gây sốc toàn cầu: GDP của Ireland tăng trưởng kỷ lục 26.3% chỉ trong một năm. Nhà kinh tế đoạt giải Nobel Paul Krugman lập tức gọi đây là 'Kinh tế yêu tinh' (Leprechaun Economics).",
      analysis: "Nguyên nhân không phải do nền kinh tế Ireland bùng nổ, mà do Apple chuyển quyền sở hữu trí tuệ trị giá hàng trăm tỷ USD vào các công ty con đặt tại Ireland để tối ưu hóa thuế. Toàn bộ doanh thu bán iPhone toàn cầu đổ vào sổ sách Ireland khiến chỉ số $GDP = C + I + G + NX$ phình to đột biến qua xuất khẩu ròng $NX$. Nhưng thực tế, người dân Ireland không hề được hưởng lợi vì lợi nhuận này được chuyển ngược về cổ đông Mỹ. Ireland sau đó buộc phải phát minh ra chỉ số $GNI^*$ (GNI điều chỉnh) để đo lường thực chất.",
      lesson: "GDP đo lường sản lượng trong biên giới lãnh thổ, không phản ánh chính xác thu nhập thực tế mà công dân nước đó được hưởng nếu có dòng vốn FDI khổng lồ chuyển lợi nhuận ra nước ngoài!"
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 7 (TIẾP) =================
  {
    id: "macro-2",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    title: "Chỉ số điều chỉnh GDP (Deflator) & Tốc độ tăng trưởng",
    formula: "DGDP = \\frac{GDP_n}{GDP_r} \\times 100, \\quad g = \\frac{GDP_{r, t} - GDP_{r, t-1}}{GDP_{r, t-1}} \\times 100\\%",
    description: "DGDP phản ánh mức giá chung của tất cả hàng hóa và dịch vụ được sản xuất trong nước.",
    variables: [
      { symbol: "GDP_n", meaning: "GDP danh nghĩa: sum(P_t * Q_t)" },
      { symbol: "GDP_r", meaning: "GDP thực tế: sum(P_0 * Q_t)" },
      { symbol: "DGDP", meaning: "GDP Deflator (Chỉ số giảm phát GDP)" },
      { symbol: "g", meaning: "Tốc độ tăng trưởng kinh tế thực tế" }
    ],
    example: "Năm 2024: GDP_n = 1200, GDP_r = 1000 => DGDP = (1200 / 1000) * 100 = 120. Nghĩa là mức giá tăng 20% so với năm gốc.",
    examTrap: "Tính tốc độ tăng trưởng kinh tế g BẮT BUỘC dùng GDP THỰC TẾ (GDP_r), tuyệt đối KHÔNG được dùng GDP danh nghĩa vì GDP danh nghĩa bị thổi phồng bởi lạm phát!",
    notes: "Năm gốc luôn có GDP_n = GDP_r => DGDP = 100.",
    caseStudy: {
      entity: "Cộng Hòa Venezuela & Khủng Hoảng Kinh Tế (2016 - 2019)",
      badge: "Thảm Họa Tiền Tệ Mỹ Latinh",
      title: "GDP danh nghĩa tăng hàng tỷ lần nhưng nhân dân thiếu ăn",
      context: "Trong giai đoạn 2016 - 2019, chính quyền Venezuela in tiền ồ ạt để trang trải thâm hụt ngân sách. Trên sổ sách tiền tệ Bolivar, GDP danh nghĩa ($GDP_n$) tăng vọt hàng ngàn phần trăm mỗi năm.",
      analysis: "Khi phân tích bằng công thức $DGDP = (GDP_n / GDP_r) \\times 100$, sự thật trần trụi lộ rõ: chỉ số điều chỉnh GDP tăng vọt hàng triệu phần trăm, trong khi sản lượng hàng hóa thực tế ($GDP_r$) sụp đổ hơn 65%. Nền nông nghiệp và công nghiệp đình đốn, các nhà máy đóng cửa vì thiếu linh kiện. Tăng trưởng danh nghĩa chỉ là ảo ảnh lạm phát tiền tệ.",
      lesson: "Không bao giờ lấy GDP danh nghĩa để đánh giá sức khỏe nền kinh tế. Chỉ có $GDP_r$ (đã loại trừ lạm phát) mới phản ánh mức sống và phúc lợi thực của người dân."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 8 =================
  {
    id: "macro-3",
    category: "macro",
    chapter: "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    title: "Chỉ số giá tiêu dùng (CPI), Tỷ lệ lạm phát & Lãi suất thực",
    formula: "CPI_t = \\frac{\\sum (P_t \\times Q_0)}{\\sum (P_0 \\times Q_0)} \\times 100, \\quad \\pi_t = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%, \\quad r \\approx i - \\pi",
    description: "CPI đo lường chi phí của giỏ hàng hóa và dịch vụ cố định mà một người tiêu dùng điển hình mua.",
    variables: [
      { symbol: "CPI", meaning: "Consumer Price Index (Chỉ số giá tiêu dùng)" },
      { symbol: "\\pi", meaning: "Tỷ lệ lạm phát" },
      { symbol: "i", meaning: "Lãi suất danh nghĩa (Nominal interest rate)" },
      { symbol: "r", meaning: "Lãi suất thực tế (Real interest rate theo hiệu ứng Fisher)" }
    ],
    example: "Nếu gửi ngân hàng lãi suất danh nghĩa i = 8%, tỷ lệ lạm phát pi = 3% => Lãi suất thực hưởng r = 8% - 3% = 5%.",
    examTrap: "So sánh CPI và GDP Deflator: CPI dùng giỏ hàng cố định (Q_0) và tính cả hàng nhập khẩu (ví dụ iPhone mua từ Mỹ). GDP Deflator chỉ tính hàng sản xuất TRONG NƯỚC (Q_t) và không tính hàng nhập khẩu.",
    notes: "Lạm phát làm tái phân phối của cải: Người đi vay ĐƯỢC LỢI, người cho vay BỊ THIỆT khi lạm phát thực tế cao hơn dự kiến.",
    caseStudy: {
      entity: "Cục Dự Trữ Liên Bang Mỹ (Fed) & Cú Sốc Lãi Suất Volcker Shock (1979 - 1982)",
      badge: "Chiến Công Của Paul Volcker",
      title: "Chấp nhận suy thoái đau đớn để bẻ gãy lạm phát 14%",
      context: "Sau 2 cuộc khủng hoảng dầu mỏ thập niên 1970, lạm phát Mỹ leo thang lên mức 14.8%/năm. Chủ tịch Fed Paul Volcker đưa ra quyết định táo bạo nhất lịch sử ngân hàng trung ương: nâng lãi suất điều hành lên mức kỷ lục 20%.",
      analysis: "Theo phương trình Fisher: $r \\approx i - \\pi$. Với mức lãi suất danh nghĩa $i = 20\\%$, lãi suất thực tế tăng vọt lên mức dương cực lớn ($r > 6\\%$). Chi phí vốn vay mua nhà, mua xe đắt đỏ bóp nghẹt tổng cầu, khiến nền kinh tế Mỹ rơi vào suy thoái với tỷ lệ thất nghiệp lên 10.8%. Nhưng cái giá đắt đó đã thành công bẻ gãy kỳ vọng lạm phát, kéo lạm phát CPI về dưới 3% và tạo tiền đề cho 2 thập kỷ tăng trưởng thịnh vượng sau đó.",
      lesson: "Muốn dập tắt lạm phát kỳ vọng cao, lãi suất danh nghĩa $i$ bắt buộc phải tăng nhanh hơn tỷ lệ lạm phát $\\pi$ để đưa lãi suất thực tế $r$ về vùng dương kiềm chế tổng cầu."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 8 (TIẾP) =================
  {
    id: "macro-4",
    category: "macro",
    chapter: "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    title: "Tỷ lệ thất nghiệp & Lực lượng lao động",
    formula: "LF = E + U, \\quad u = \\frac{U}{LF} \\times 100\\%, \\quad \\text{Tỷ lệ tham gia LLLĐ} = \\frac{LF}{\\text{Dân số trưởng thành}} \\times 100\\%",
    description: "Thất nghiệp là người trong độ tuổi lao động, có khả năng lao động, đang tích cực tìm việc nhưng chưa có việc làm.",
    variables: [
      { symbol: "LF", meaning: "Lực lượng lao động (Labor Force)" },
      { symbol: "E", meaning: "Số người có việc làm (Employed)" },
      { symbol: "U", meaning: "Số người thất nghiệp (Unemployed)" },
      { symbol: "u", meaning: "Tỷ lệ thất nghiệp (Unemployment rate)" }
    ],
    example: "Dân số trưởng thành = 50 triệu. Có việc = 38 triệu. Thất nghiệp = 2 triệu => LF = 40 triệu. u = (2 / 40) * 100% = 5%. Tỷ lệ tham gia LLLĐ = 40 / 50 = 80%.",
    examTrap: "Người nội trợ, sinh viên đi học toàn thời gian, người nản chí không còn tìm việc (Discouraged workers) KHÔNG thuộc lực lượng lao động (không tính vào U, cũng không tính vào LF)!",
    notes: "Thất nghiệp tự nhiên = Thất nghiệp ma sát + Thất nghiệp cơ cấu. Thất nghiệp chu kỳ xuất hiện khi kinh tế suy thoái (u > u_n).",
    caseStudy: {
      entity: "GS. David Card (Đoạt Giải Nobel Kinh Tế 2021) & Alan Krueger (1994)",
      badge: "Công Trình Đoạt Giải Nobel Kinh Tế",
      title: "Nghiên cứu fast-food New Jersey lật ngược giáo điều về lương tối thiểu",
      context: "Lý thuyết kinh tế cổ điển luôn khẳng định: Tăng mức lương tối thiểu sẽ khiến các doanh nghiệp sa thải công nhân, làm tăng tỷ lệ thất nghiệp ($u \\uparrow$). Năm 1992, bang New Jersey tăng lương tối thiểu từ $4.25 lên $5.05/giờ, trong khi bang láng giềng Pennsylvania giữ nguyên.",
      analysis: "Card & Krueger đã khảo sát hơn 400 nhà hàng thức ăn nhanh (Burger King, KFC, Wendy's) tại hai bang. Kết quả thực nghiệm gây chấn động toàn bộ giới học thuật kinh tế: việc tăng lương tối thiểu tại New Jersey KHÔNG hề làm giảm việc làm, thậm chí còn giúp doanh nghiệp giữ chân nhân viên, giảm chi phí tuyển dụng và tăng năng suất lao động. Khám phá thực nghiệm mang tính đột phá này đã giúp David Card đoạt giải Nobel Kinh tế năm 2021.",
      lesson: "Thị trường lao động thực tế có tính độc quyền mua (Monopsony). Tăng lương tối thiểu hợp lý trong thị trường độc quyền mua có thể tăng cả tiền lương lẫn số lượng việc làm mà không gây thất nghiệp!"
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 9 =================
  {
    id: "macro-5",
    category: "macro",
    chapter: "Chương 9: Tiền tệ, Hệ thống ngân hàng & Số nhân tiền",
    title: "Cung tiền (MS), Cơ sở tiền (MB) & Số nhân tiền (m_M)",
    formula: "MS = m_M \\times MB, \\quad m_M = \\frac{cr + 1}{cr + rr}",
    description: "Ngân hàng thương mại tạo ra tiền thông qua hệ thống dự trữ một phần.",
    variables: [
      { symbol: "MS", meaning: "Mức cung tiền (Money Supply = C + D)" },
      { symbol: "MB", meaning: "Cơ sở tiền / Tiền mạnh (Monetary Base = C + R)" },
      { symbol: "cr", meaning: "Tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi (cr = C / D)" },
      { symbol: "rr", meaning: "Tỷ lệ dự trữ thực tế của ngân hàng (rr = R / D = rr_b + rr_t)" },
      { symbol: "m_M", meaning: "Số nhân tiền (Money Multiplier)" }
    ],
    example: "Cho cr = 0.2, tỷ lệ dự trữ rr = 0.1. Số nhân tiền m_M = (0.2 + 1) / (0.2 + 0.1) = 1.2 / 0.3 = 4. Nếu NHTW mua 100 tỷ trái phiếu => Cung tiền tăng 4 * 100 = 400 tỷ.",
    examTrap: "3 công cụ của NHTW để TĂNG cung tiền: 1. MUA trái phiếu chính phủ trên thị trường mở (OMO); 2. GIẢM tỷ lệ dự trữ bắt buộc; 3. GIẢM lãi suất tái chiết khấu.",
    notes: "Khi người dân giữ nhiều tiền mặt hơn (cr tăng), số nhân tiền m_M GIẢM, làm cung tiền thu hẹp.",
    caseStudy: {
      entity: "Vụ Sụp Đổ Ngân Hàng Silicon Valley Bank - SVB (Tháng 3/2023)",
      badge: "Cuộc Tháo Chạy Tiền Gửi Kỷ Nguyên Số",
      title: "Bốc hơi 42 tỷ USD tiền gửi trong 10 tiếng kéo sập ngân hàng lớn thứ 16 nước Mỹ",
      context: "SVB là ngân hàng huyết mạch của các startup công nghệ Thung lũng Silicon. Khi các quỹ đầu tư mạo hiểm phát hiện SVB bị lỗ danh mục trái phiếu do Fed tăng lãi suất, họ gửi tin nhắn cảnh báo nhau trên Twitter/WhatsApp rút tiền ồ ạt.",
      analysis: "Hệ thống ngân hàng hoạt động theo cơ chế Dự trữ một phần ($rr$). SVB nhận tiền gửi nhưng đem đầu tư trái phiếu dài hạn, tiền mặt dự trữ chỉ chiếm một phần nhỏ. Trong ngày 9/3/2023, khách hàng rút kỷ lục 42 tỷ USD chỉ qua vài cú click chuột trên app điện thoại. Tỷ lệ rút tiền mặt $cr$ tăng phi mã làm số nhân tiền $m_M$ sụp đổ. SVB mất thanh khoản hoàn toàn và bị cơ quan quản lý đóng cửa chỉ sau 48 giờ, tạo nên cơn địa chấn ngân hàng toàn cầu.",
      lesson: "Ngân hàng thương mại bản chất là cỗ máy tạo thanh khoản dễ bị tổn thương trước tâm lý bầy đàn rút tiền hàng loạt (Bank run)."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 10 =================
  {
    id: "macro-6",
    category: "macro",
    chapter: "Chương 10 & 11: Tổng cung - Tổng cầu & Chính sách tài khóa",
    title: "Số nhân chi tiêu Keynes & Bù đắp khoảng trống sản lượng",
    formula: "k = \\frac{1}{1 - MPC(1 - t)}, \\quad \\Delta Y = k \\times \\Delta G, \\quad k_T = \\frac{-MPC}{1 - MPC(1 - t)}",
    description: "Một sự thay đổi trong chi tiêu tự định của Chính phủ (G) hay Đầu tư (I) sẽ khuếch đại sản lượng quốc gia thông qua số nhân chi tiêu.",
    variables: [
      { symbol: "MPC", meaning: "Xu hướng tiêu dùng cận biên: MPC = ΔC / ΔY_d (0 < MPC < 1)" },
      { symbol: "t", meaning: "Thuế suất biên theo thu nhập" },
      { symbol: "k", meaning: "Số nhân chi tiêu" },
      { symbol: "Lấn át (Crowding out)", meaning: "G tăng -> thâm hụt ngân sách -> lãi suất r tăng -> đầu tư tư nhân I giảm" }
    ],
    example: "Cho MPC = 0.8 => k = 1 / (1 - 0.8) = 5. Nếu Chính phủ tăng chi tiêu G thêm 20 tỷ => ΔY = 5 * 20 = 100 tỷ.",
    examTrap: "Hiệu ứng ngân sách cân bằng: Nếu Chính phủ vừa tăng G thêm 100 tỷ VÀ tăng thuế T thêm đúng 100 tỷ thì sản lượng Y vẫn TĂNG thêm đúng 100 tỷ (số nhân ngân sách cân bằng luôn bằng 1)!",
    notes: "Khi có thuế theo thu nhập t, số nhân k giảm xuống, đóng vai trò là 'chất ổn định tự động' (Automatic stabilizer) cho nền kinh tế.",
    caseStudy: {
      entity: "Gói Kích Cầu Khủng 787 Tỷ USD Của Tổng Thống Barack Obama (ARRA 2009)",
      badge: "Ứng Dụng Mô Hình Keynesian Lớn Nhất",
      title: "Đổ 787 tỷ USD vào nền kinh tế để ngăn chặn một cuộc Đại suy thoái thứ hai",
      context: "Sau cú sụp đổ của ngân hàng Lehman Brothers năm 2008, kinh tế Mỹ rơi vào suy thoái trầm trọng, hàng triệu người mất việc. Tháng 2/2009, Tổng thống Barack Obama ký ban hành Đạo luật Tái đầu tư và Phục hồi Mỹ (ARRA) trị giá 787 tỷ USD.",
      analysis: "Chính quyền Obama dựa trực tiếp vào mô hình số nhân chi tiêu Keynes: khi khu vực tư nhân đóng băng tiêu dùng và đầu tư ($C \\downarrow, I \\downarrow$), chỉ có Chính phủ tăng chi tiêu công khổng lồ ($G \\uparrow$) cho hạ tầng, cầu đường, năng lượng sạch mới tạo ra hiệu ứng số nhân $\\Delta Y = k \\times \\Delta G$. Với ước tính $k \\approx 1.5$, gói kích cầu đã tạo ra hoặc cứu vãn khoảng 2.5 triệu việc làm, kéo nền kinh tế Mỹ phục hồi nhanh hơn nhiều so với khu vực Châu Âu.",
      lesson: "Trong suy thoái sâu, chi tiêu tự định của chính phủ là lực đẩy duy nhất khởi động lại vòng xoay tiêu dùng của nền kinh tế."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 11 =================
  {
    id: "macro-7",
    category: "macro",
    chapter: "Chương 11: Mô hình IS - LM & Phối hợp chính sách",
    title: "Mô hình cân bằng đồng thời IS - LM & Hiện tượng lấn át đầu tư",
    formula: "IS: Y = k \\cdot A_0 - k \\cdot d \\cdot r, \\quad LM: r = \\frac{k_{tiền}}{h}Y - \\frac{1}{h}\\frac{M^S}{P}",
    description: "Xác định điểm cân bằng đồng thời giữa thị trường hàng hóa (IS) và thị trường tiền tệ (LM).",
    variables: [
      { symbol: "IS", meaning: "Tập hợp các điểm cân bằng trên thị trường hàng hóa (dốc xuống)" },
      { symbol: "LM", meaning: "Tập hợp các điểm cân bằng trên thị trường tiền tệ (dốc lên)" },
      { symbol: "r^*, Y^*", meaning: "Lãi suất và sản lượng cân bằng vĩ mô đồng thời" },
      { symbol: "Crowding-out", meaning: "Đầu tư tư nhân bị suy giảm khi chính phủ tăng chi tiêu làm đẩy lãi suất lên cao" }
    ],
    example: "Cho IS: Y = 2700 - 80r và LM: Y = 1000 + 80r. Cân bằng: 2700 - 80r = 1000 + 80r => 160r = 1700 => r* = 10.625%, Y* = 1850.",
    examTrap: "Bẫy thanh khoản (Liquidity Trap): Khi lãi suất xấp xỉ 0%, đường LM NẰM NGANG HOÀN TOÀN. Lúc này Chính sách tiền tệ hoàn toàn vô hiệu, còn Chính sách tài khóa đạt hiệu lực tối đa vì không hề bị lấn át đầu tư!",
    notes: "Chính sách tài khóa mở rộng làm IS dịch phải; Chính sách tiền tệ mở rộng làm LM dịch phải.",
    caseStudy: {
      entity: "Chính Sách Kinh Tế 'Reaganomics' Của Tổng Thống Ronald Reagan (1981 - 1986)",
      badge: "Thực Tiễn Lấn Át Lớn Nhất Thế Kỷ 20",
      title: "Cắt giảm thuế, tăng chi tiêu quân sự và hiện tượng lấn át đầu tư bộc phát",
      context: "Tổng thống Ronald Reagan thực hiện cắt giảm thuế thu nhập sâu rộng đồng thời tăng chi tiêu quốc phòng khổng lồ cho quân đội trong Chiến tranh Lạnh, khiến thâm hụt ngân sách chính phủ Mỹ phình to chưa từng có.",
      analysis: "Trong mô hình IS-LM: Chi tiêu $G$ tăng vọt làm đường $IS$ dịch chuyển mạnh sang phải. Lãi suất thị trường bị đẩy lên cao chót vót ($r^* \\uparrow$). Lãi suất đắt đỏ làm các doanh nghiệp tư nhân Mỹ cắt giảm đầu tư nhà xưởng máy móc ($I \\downarrow$ - lấn át đầu tư tư nhân). Đồng thời, lãi suất cao thu hút dòng vốn quốc tế đổ vào Mỹ mua trái phiếu, đẩy giá đồng USD lên cao kỷ lục, làm triệt tiêu khả năng xuất khẩu của Mỹ và gây thâm hụt cán cân thương mại kỷ lục (Hiện tượng Thâm hụt kép - Twin Deficits).",
      lesson: "Chính sách tài khóa mở rộng không đi kèm nới lỏng tiền tệ sẽ luôn kích thích lãi suất tăng, làm triệt tiêu một phần đầu tư tư nhân và bóp nghẹt xuất khẩu."
    }
  },

  // ================= VĨ MÔ: CHƯƠNG 10 (TIẾP) =================
  {
    id: "macro-8",
    category: "macro",
    chapter: "Chương 10: Tiền tệ & Lạm phát dài hạn",
    title: "Phương trình số lượng tiền tệ Fisher & Siêu lạm phát",
    formula: "M \\times V = P \\times Y \\implies \\%\\Delta M + \\%\\Delta V = \\%\\Delta P + \\%\\Delta Y",
    description: "Trong dài hạn, tốc độ lưu thông tiền tệ V và sản lượng thực tế Y là không đổi, do đó tốc độ tăng cung tiền quyết định trực tiếp tỷ lệ lạm phát.",
    variables: [
      { symbol: "M", meaning: "Khối lượng cung tiền danh nghĩa" },
      { symbol: "V", meaning: "Tốc độ chu chuyển tiền tệ (Velocity of Money)" },
      { symbol: "P", meaning: "Mức giá chung của nền kinh tế" },
      { symbol: "Y", meaning: "Sản lượng GDP thực tế" }
    ],
    example: "Nếu cung tiền M tăng 10%/năm, GDP thực tế Y tăng 3%/năm, tốc độ lưu thông V không đổi => Lạm phát pi = 10% - 3% = 7%/năm.",
    examTrap: "Tiền tệ là trung tính trong DÀI HẠN (Monetary Neutrality), nhưng trong NGẮN HẠN in tiền vẫn có thể kích thích sản lượng tăng tạm thời.",
    notes: "Tuyên ngôn bất hủ của Milton Friedman: 'Lạm phát ở bất kỳ đâu và bao giờ cũng là một hiện tượng tiền tệ'.",
    caseStudy: {
      entity: "Chính Quyền Tổng Thống Robert Mugabe & Siêu Lạm Phát Zimbabwe (Năm 2008)",
      badge: "Tuyên Ngôn Của Milton Friedman",
      title: "In tờ tiền 100.000 tỷ Dollar và bánh mì có giá 10 tỷ",
      context: "Sau khi tịch thu các trang trại thương mại khiến sản lượng nông nghiệp sụp đổ, chính quyền Zimbabwe rơi vào thâm hụt ngân sách khổng lồ. Tổng thống Robert Mugabe ra lệnh cho Ngân hàng Trung ương in tiền vô tội vạ để trả lương quân đội và công chức.",
      analysis: "Áp dụng phương trình số lượng $M \\times V = P \\times Y$: Sản lượng thực tế $Y$ tụt dốc, trong khi cung tiền $M$ tăng hàng triệu phần trăm. Hậu quả là mức giá $P$ tăng theo cấp số nhân, tỷ lệ lạm phát chạm mốc không tưởng: **79.600.000.000% mỗi tháng** (giá cả tăng gấp đôi sau mỗi 24 giờ). Ngân hàng phát hành tờ tiền mệnh giá kỷ lục thế giới: 100.000.000.000.000 Dollar Zimbabwe ($10^{14}$). Người dân phải chở hàng xe rùa tiền đi mua một ổ bánh mì. Nền kinh tế sụp đổ hoàn toàn cho đến khi chính phủ buộc phải từ bỏ đồng nội tệ để dùng đồng USD.",
      lesson: "Chính phủ không thể làm cho một quốc gia giàu lên bằng cách bật máy in tiền. In tiền không đi kèm sản lượng thực tế chỉ tạo ra siêu lạm phát tàn phá nền kinh tế."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_DATA;
}
