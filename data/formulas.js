// Sổ tay công thức toàn diện môn Kinh tế học đại cương (Vi mô & Vĩ mô)
const FORMULAS_DATA = [
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
    notes: "Đường PPF cong lồi ra ngoài phản ánh quy luật Chi phí cơ hội tăng dần."
  },
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
    notes: "Giá trần (Price Ceiling) phải ĐẶT DƯỚI giá cân bằng mới có hiệu lực, gây thiếu hụt hàng hóa (Shortage). Giá sàn (Price Floor) phải ĐẶT TRÊN giá cân bằng mới có hiệu lực, gây dư thừa (Surplus)."
  },
  {
    id: "micro-3",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    title: "Thặng dư tiêu dùng (CS), Thặng dư sản xuất (PS) & Tổn thất vô ích (DWL)",
    formula: "CS = \\frac{1}{2}(P_{max} - P^*) \\times Q^*, \\quad PS = \\frac{1}{2}(P^* - P_{min}) \\times Q^*, \\quad TS = CS + PS",
    description: "CS là diện tích tam giác dưới đường cầu và trên giá cân bằng. PS là diện tích tam giác trên đường cung và dưới giá cân bằng.",
    variables: [
      { symbol: "CS", meaning: "Consumer Surplus - Thặng dư của người tiêu dùng" },
      { symbol: "PS", meaning: "Producer Surplus - Thặng dư của nhà sản xuất" },
      { symbol: "P_{max}", meaning: "Mức giá làm cho lượng cầu bằng 0 (tung độ góc của đường cầu)" },
      { symbol: "P_{min}", meaning: "Mức giá làm cho lượng cung bằng 0 (tung độ góc của đường cung)" }
    ],
    example: "Với P = 60 - 0.5Q (P_max = 60) và P* = 30, Q* = 60: CS = 0.5 * (60 - 30) * 60 = 900.",
    examTrap: "Khi có Thuế (t): Tổng thặng dư giảm một lượng gọi là DWL (Deadweight Loss) = 0.5 * t * (Q* - Q_t). Đừng quên cộng cả Doanh thu thuế của Chính phủ (T = t * Q_t) khi tính Tổng thặng dư xã hội sau thuế!",
    notes: "Thị trường tự do không can thiệp đạt hiệu quả Pareto tối đa hóa TS."
  },
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
    notes: "Quy tắc vàng với người bán: Nếu cầu co giãn nhiều, muốn tăng doanh thu thì PHẢI HẠ GIÁ. Nếu cầu co giãn ít, muốn tăng doanh thu thì PHẢI TĂNG GIÁ."
  },
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
    notes: "Đề thi đại học rất hay hỏi câu ghép: Cho E_I = -0.8 và E_XY = 1.2, kết luận gì về hàng hóa X?"
  },
  {
    id: "micro-6",
    category: "micro",
    chapter: "Chương 4: Lý thuyết hành vi người tiêu dùng",
    title: "Tối đa hóa Lợi ích (Utility Maximization) & Đường ngân sách",
    formula: "\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\quad \\text{và} \\quad X \\cdot P_X + Y \\cdot P_Y = I",
    description: "Người tiêu dùng đạt lợi ích tối đa khi đồng tiền cuối cùng chi tiêu cho mỗi loại hàng hóa đem lại lợi ích cận biên như nhau.",
    variables: [
      { symbol: "MU_X, MU_Y", meaning: "Lợi ích cận biên: MU = ΔTU / ΔQ = TU'(Q)" },
      { symbol: "P_X, P_Y", meaning: "Giá của hàng hóa X và Y" },
      { symbol: "I", meaning: "Thu nhập của người tiêu dùng" },
      { symbol: "MRS_{XY}", meaning: "Tỷ lệ thay thế cận biên: MRS_XY = MU_X / MU_Y = P_X / P_Y" }
    ],
    example: "Cho TU(X, Y) = X * Y. P_X = 2, P_Y = 5, I = 100. MU_X = Y, MU_Y = X. Điều kiện: Y/2 = X/5 => X = 2.5Y. Thay vào ngân sách: 2(2.5Y) + 5Y = 100 => 10Y = 100 => Y = 10, X = 25.",
    examTrap: "Nếu MU_X / P_X > MU_Y / P_Y, người tiêu dùng thông minh nên TĂNG mua X và GIẢM mua Y để tăng tổng mức thỏa dụng!",
    notes: "Độ dốc của đường ngân sách là -P_X / P_Y. Khi giá hàng hóa X giảm, đường ngân sách xoay ra ngoài quanh trục Y."
  },
  {
    id: "micro-7",
    category: "micro",
    chapter: "Chương 5: Lý thuyết sản xuất & Chi phí",
    title: "Hệ thống các loại chi phí sản xuất trong ngắn hạn",
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
    notes: "Khi MC < ATC, ATC đang dốc xuống. Khi MC > ATC, ATC đang dốc lên."
  },
  {
    id: "micro-8",
    category: "micro",
    chapter: "Chương 6: Cấu trúc thị trường & Tối đa hóa lợi nhuận",
    title: "Nguyên tắc tối đa hóa lợi nhuận trong các cấu trúc thị trường",
    formula: "MR = MC \\implies \\pi_{max}",
    description: "Doanh nghiệp ở bất kỳ thị trường nào cũng tối đa hóa lợi nhuận tại mức sản lượng có Doanh thu cận biên bằng Chi phí cận biên.",
    variables: [
      { symbol: "Cạnh tranh hoàn hảo", meaning: "P = MR = AR = MC. Điểm hòa vốn: P = ATC_min. Điểm đóng cửa: P < AVC_min" },
      { symbol: "Độc quyền thuần túy", meaning: "MR < P. Doanh nghiệp độc quyền đặt giá P > MC, gây ra tổn thất vô ích DWL" },
      { symbol: "L", meaning: "Chỉ số Lerner đo sức mạnh độc quyền: L = (P - MC) / P = 1 / |E_D|" }
    ],
    example: "Doanh nghiệp độc quyền có cầu P = 100 - Q => TR = 100Q - Q^2 => MR = 100 - 2Q. Nếu MC = 20, MR = MC => 100 - 2Q = 20 => Q* = 40, P* = 60.",
    examTrap: "Với Doanh nghiệp độc quyền: Đường MR luôn có độ dốc GẤP ĐÔI độ dốc đường cầu! (Cầu: P = a - bQ => MR = a - 2bQ). Rất nhiều bạn quên điều này dẫn đến tính sai Q*!",
    notes: "Đường cung ngắn hạn của doanh nghiệp cạnh tranh hoàn hảo chính là phần đường MC nằm PHÍA TRÊN điểm cực tiểu của AVC."
  },
  {
    id: "macro-1",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    title: "Tổng sản phẩm quốc nội (GDP) theo 3 phương pháp",
    formula: "GDP = C + I + G + NX, \\quad GNP = GDP + NFFI",
    description: "GDP là tổng giá trị thị trường của tất cả hàng hóa và dịch vụ CUỐI CÙNG được sản xuất ra trong phạm vi một lãnh thổ quốc gia trong một thời kỳ nhất định.",
    variables: [
      { symbol: "C", meaning: "Tiêu dùng của hộ gia đình (Consumption)" },
      { symbol: "I", meaning: "Tổng đầu tư tư nhân (Investment = Khấu hao De + Đầu tư ròng In)" },
      { symbol: "G", meaning: "Chi tiêu mua sắm hàng hóa/dịch vụ của Chính phủ (KHÔNG bao gồm trợ cấp Tr)" },
      { symbol: "NX", meaning: "Xuất khẩu ròng: NX = X (Xuất khẩu) - IM (Nhập khẩu)" },
      { symbol: "NFFI", meaning: "Thu nhập yếu tố ròng từ nước ngoài" }
    ],
    example: "Cho C = 600, I = 200, G = 150, X = 100, IM = 80 => GDP = 600 + 200 + 150 + (100 - 80) = 970.",
    examTrap: "BẪY 1: Chi chuyển nhượng của Chính phủ (Tr) như trợ cấp người nghèo, lương hưu KHÔNG tính trực tiếp vào GDP vì không đổi lấy hàng hóa dịch vụ mới nào. BẪY 2: Bán lại xe máy cũ hay mua cổ phiếu KHÔNG tính vào GDP!",
    notes: "GDP danh nghĩa tính theo giá hiện hành; GDP thực tế (GDP_r) tính theo giá cố định (năm gốc)."
  },
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
    notes: "Năm gốc luôn có GDP_n = GDP_r => DGDP = 100."
  },
  {
    id: "macro-3",
    category: "macro",
    chapter: "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    title: "Chỉ số giá tiêu dùng (CPI), Tỷ lệ lạm phát (\\pi) & Lãi suất thực",
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
    notes: "Lạm phát làm tái phân phối của cải: Người đi vay ĐƯỢC LỢI, người cho vay BỊ THIỆT khi lạm phát thực tế cao hơn dự kiến."
  },
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
    notes: "Thất nghiệp tự nhiên = Thất nghiệp ma sát + Thất nghiệp cơ cấu. Thất nghiệp chu kỳ xuất hiện khi kinh tế suy thoái (u > u_n)."
  },
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
      { symbol: "rr", meaning: "Tỷ lệ dự trữ thực tế của ngân hàng (rr = R / D = rr_b bắt buộc + rr_t tùy ý)" },
      { symbol: "m_M", meaning: "Số nhân tiền (Money Multiplier)" }
    ],
    example: "Cho cr = 0.2, tỷ lệ dự trữ rr = 0.1. Số nhân tiền m_M = (0.2 + 1) / (0.2 + 0.1) = 1.2 / 0.3 = 4. Nếu NHTW mua 100 tỷ trái phiếu (MB tăng 100 tỷ) => Cung tiền tăng 4 * 100 = 400 tỷ.",
    examTrap: "3 công cụ của NHTW để TĂNG cung tiền: 1. MUA trái phiếu chính phủ trên thị trường mở (OMO); 2. GIẢM tỷ lệ dự trữ bắt buộc; 3. GIẢM lãi suất tái chiết khấu.",
    notes: "Khi người dân giữ nhiều tiền mặt hơn (cr tăng), số nhân tiền m_M GIẢM, làm cung tiền thu hẹp."
  },
  {
    id: "macro-6",
    category: "macro",
    chapter: "Chương 10 & 11: Tổng cung - Tổng cầu & Chính sách tài khóa",
    title: "Số nhân chi tiêu & Tác động của Chính sách Tài khóa",
    formula: "m = \\frac{1}{1 - MPC} = \\frac{1}{MPS}, \\quad \\Delta Y = m \\times \\Delta G, \\quad \\Delta Y = -m \\times MPC \\times \\Delta T",
    description: "Một sự thay đổi trong chi tiêu tự định của Chính phủ (G) hay Đầu tư (I) sẽ khuếch đại sản lượng quốc gia thông qua số nhân chi tiêu.",
    variables: [
      { symbol: "MPC", meaning: "Xu hướng tiêu dùng cận biên: MPC = ΔC / ΔY_d (0 < MPC < 1)" },
      { symbol: "MPS", meaning: "Xu hướng tiết kiệm cận biên: MPS = 1 - MPC" },
      { symbol: "m", meaning: "Số nhân chi tiêu (trong mô hình giản đơn)" },
      { symbol: "Lấn át (Crowding out)", meaning: "G tăng -> thâm hụt ngân sách -> lãi suất r tăng -> đầu tư tư nhân I giảm" }
    ],
    example: "Cho MPC = 0.8 => m = 1 / (1 - 0.8) = 5. Nếu Chính phủ tăng chi tiêu G thêm 20 tỷ => ΔY = 5 * 20 = 100 tỷ.",
    examTrap: "Hiệu ứng ngân sách cân bằng: Nếu Chính phủ vừa tăng G thêm 100 tỷ VÀ tăng thuế T thêm đúng 100 tỷ thì sản lượng Y vẫn TĂNG thêm đúng 100 tỷ (số nhân ngân sách cân bằng luôn bằng 1)!",
    notes: "Khi có thuế theo thu nhập t và nhập khẩu theo thu nhập MPM, số nhân m' = 1 / [1 - MPC(1 - t) + MPM]."
  }
];
