// Sổ tay công thức toàn diện môn Kinh tế học đại cương (Vi mô & Vĩ mô)
// Tích hợp tình huống thực chiến kinh điển của các tập đoàn hàng đầu thế giới và các công trình Nobel Kinh tế chấn động toàn cầu
// Tích hợp chú giải ký hiệu toán học và đơn vị đo lường chuẩn mực cho từng biến số
// 100% công thức và biến số được chuẩn hóa KaTeX toán học sắc nét

const FORMULAS_DATA = [
  {
    "id": "micro-1",
    "category": "micro",
    "chapter": "Chương 1: Khái quát & Các nguyên lý cơ bản",
    "title": "Chi phí cơ hội & Đường giới hạn khả năng sản xuất (PPF)",
    "formula": "OC_X = \\frac{|\\Delta Y|}{|\\Delta X|}",
    "description": "Chi phí cơ hội của việc sản xuất thêm 1 đơn vị hàng hóa X là số lượng hàng hóa Y phải từ bỏ.",
    "variables": [
      {
        "symbol": "OC_X",
        "meaning": "Chi phí cơ hội của việc sản xuất thêm 1 đơn vị hàng X",
        "unit": "Đơn vị hàng Y / 1 đơn vị hàng X"
      },
      {
        "symbol": "\\Delta Y",
        "meaning": "Số lượng hàng hóa Y bị giảm sút (từ bỏ)",
        "unit": "Sản phẩm (chiếc, tấn, kg...)"
      },
      {
        "symbol": "\\Delta X",
        "meaning": "Số lượng hàng hóa X thu thêm được",
        "unit": "Sản phẩm (chiếc, tấn, kg...)"
      },
      {
        "symbol": "MRT",
        "meaning": "Tỷ lệ chuyển đổi biên (độ dốc đường PPF)",
        "unit": "Đơn vị Y / 1 đơn vị X"
      }
    ],
    "example": "Nếu nền kinh tế chuyển từ phương án A (100 tấn lúa, 0 tấn thép) sang B (80 tấn lúa, 10 tấn thép): $OC_{\\text{thép}} = \\frac{|80 - 100|}{|10 - 0|} = \\mathbf{2} \\text{ tấn lúa / 1 tấn thép}$.",
    "examTrap": "BẪY KINH ĐIỂN: Đề bài hay hỏi 'Chi phí cơ hội của X' nhưng sinh viên lại lấy $\\frac{\\Delta X}{\\Delta Y}$ (đó là chi phí cơ hội của Y). Nhớ quy tắc: Muốn tìm chi phí cơ hội của cái gì thì chia cho cái đó ở mẫu số: $OC_X = \\frac{|\\Delta Y|}{|\\Delta X|}$!",
    "notes": "Đường $PPF$ cong lồi ra ngoài phản ánh quy luật Chi phí cơ hội tăng dần.",
    "caseStudy": {
      "entity": "Liên minh Anh - Pháp & Dự án Máy Bay Siêu Thanh Concorde",
      "badge": "Nghiên Cứu Nobel Daniel Kahneman",
      "title": "Ngụy biện chi phí chìm và cái bẫy hàng tỷ USD của Concorde",
      "context": "Chính phủ Anh và Pháp đã đổ hàng tỷ USD để phát triển dòng máy bay siêu thanh Concorde. Dù nhận ra dự án không bao giờ hòa vốn do tốn nhiên liệu và tiếng ồn lớn, cả hai chính phủ vẫn tiếp tục bơm tiền vì 'đã lỡ chi quá nhiều tiền rồi, dừng lại là mất trắng'.",
      "analysis": "Đây là vụ việc kinh điển về việc nhầm lẫn giữa Chi phí chìm (Sunk Cost) và Chi phí cơ hội ($OC$). Khoản tiền đã chi không thể thu hồi lại. Lẽ ra liên minh phải so sánh Lợi ích biên trong tương lai với Chi phí biên bỏ thêm ($MB < MC$). Mỗi đồng tiền đổ vào Concorde có chi phí cơ hội là đã tước đoạt nguồn vốn phát triển y tế, giáo dục hay dòng máy bay phản lực thương mại siêu tiết kiệm nhiên liệu.",
      "lesson": "Khi phân tích quyết định sản xuất trên đường PPF hoặc dự án đầu tư, tuyệt đối gạch bỏ Chi phí chìm ra khỏi hàm tính toán!"
    }
  },
  {
    "id": "micro-2",
    "category": "micro",
    "chapter": "Chương 2: Cung - Cầu & Cân bằng thị trường",
    "title": "Phương trình Cung, Cầu và Điểm cân bằng thị trường",
    "formula": "Q_D = Q_S \\iff a - bP = c + dP \\implies P^* = \\frac{a - c}{b + d}, \\quad Q^* = a - bP^*",
    "description": "Cân bằng thị trường xảy ra tại mức giá $P^*$ mà lượng cầu bằng lượng cung: $Q_D = Q_S$.",
    "variables": [
      {
        "symbol": "P",
        "meaning": "Mức giá của hàng hóa trên thị trường",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/kg, USD/thùng...)"
      },
      {
        "symbol": "Q_D",
        "meaning": "Lượng cầu của người tiêu dùng tại mức giá P",
        "unit": "Đơn vị sản phẩm (chiếc, tấn, m³...)"
      },
      {
        "symbol": "Q_S",
        "meaning": "Lượng cung của người sản xuất tại mức giá P",
        "unit": "Đơn vị sản phẩm (chiếc, tấn, m³...)"
      },
      {
        "symbol": "P^*",
        "meaning": "Mức giá cân bằng thị trường (P_D = P_S)",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      },
      {
        "symbol": "Q^*",
        "meaning": "Sản lượng cân bằng thị trường (Q_D = Q_S)",
        "unit": "Đơn vị sản phẩm (chiếc, tấn...)"
      }
    ],
    "example": "Cho $Q_D = 120 - 2P$ và $Q_S = 30 + P$. Tại cân bằng: $Q_D = Q_S \\iff 120 - 2P = 30 + P \\iff 3P = 90 \\implies \\mathbf{P^* = 30}, \\mathbf{Q^* = 60}$.",
    "examTrap": "Phân biệt cực kỳ cẩn thận giữa 'Hàm cầu theo giá' ($Q_D = f(P)$) và 'Hàm cầu ngược' ($P_D = f(Q)$). Nếu đề cho $P = 60 - 0.5Q$, nhớ đổi đúng thành $Q = 120 - 2P$ trước khi giải hoặc vẽ đồ thị.",
    "notes": "Giá trần (Price Ceiling) phải đặt DƯỚI giá cân bằng ($P_c < P^*$) mới có hiệu lực, gây thiếu hụt ($Q_D > Q_S$). Giá sàn (Price Floor) phải đặt TRÊN giá cân bằng ($P_f > P^*$) mới có hiệu lực, gây dư thừa ($Q_S > Q_D$).",
    "caseStudy": {
      "entity": "Chính quyền Tổng thống Richard Nixon (1971 - 1973)",
      "badge": "Cú Sốc Kiểm Soát Giá Toàn Cầu",
      "title": "Hàng dài xe hơi xếp hàng xuyên đêm và thảm họa Giá trần Xăng dầu",
      "context": "Trước thềm bầu cử năm 1971 và cú sốc dầu mỏ 1973, Tổng thống Mỹ Richard Nixon ra lệnh đóng băng giá và quy định giá trần (Price Ceiling) đối với xăng dầu để ngăn chặn lạm phát.",
      "analysis": "Mức giá trần được áp đặt thấp hơn nhiều so với giá cân bằng thị trường ($P_{ceiling} < P^*$). Tại mức giá rẻ nhân tạo này, lượng cầu tăng vọt ($Q_D \\uparrow$) trong khi các nhà máy lọc dầu cắt giảm sản lượng ($Q_S \\downarrow$), dẫn đến tình trạng thiếu hụt trầm trọng ($Q_D > Q_S$). Các trạm xăng đóng cửa, hàng dài xe hơi xếp hàng hàng km chờ mua xăng, thị trường ngầm bán lậu xăng với giá gấp 3 lần.",
      "lesson": "Giá trần có hiệu lực không làm người nghèo mua được hàng rẻ hơn, mà chỉ biến chi phí tiền bạc thành chi phí thời gian chờ đợi và tạo ra chợ đen!"
    }
  },
  {
    "id": "micro-3",
    "category": "micro",
    "chapter": "Chương 2: Cung - Cầu & Cân bằng thị trường",
    "title": "Thặng dư tiêu dùng (CS), Thặng dư sản xuất (PS) & Tổn thất vô ích (DWL)",
    "formula": "CS = \\frac{1}{2}(P_{max} - P^*) \\times Q^*, \\quad PS = \\frac{1}{2}(P^* - P_{min}) \\times Q^*, \\quad DWL = \\frac{1}{2} t \\times (Q^* - Q_t)",
    "description": "CS là diện tích tam giác dưới đường cầu và trên giá cân bằng. PS là diện tích tam giác trên đường cung và dưới giá cân bằng.",
    "variables": [
      {
        "symbol": "CS",
        "meaning": "Thặng dư của người tiêu dùng (Consumer Surplus)",
        "unit": "Đơn vị tiền tệ (triệu đồng, nghìn USD)"
      },
      {
        "symbol": "PS",
        "meaning": "Thặng dư của nhà sản xuất (Producer Surplus)",
        "unit": "Đơn vị tiền tệ (triệu đồng, nghìn USD)"
      },
      {
        "symbol": "DWL",
        "meaning": "Tổn thất vô ích của xã hội (Deadweight Loss)",
        "unit": "Đơn vị tiền tệ (triệu đồng, nghìn USD)"
      },
      {
        "symbol": "t",
        "meaning": "Mức thuế đánh trên một đơn vị sản phẩm",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "P_{\\max}, P_{\\min}",
        "meaning": "Mức giá chặn trên của Cầu (khi Q=0) và chặn dưới của Cung",
        "unit": "Đơn vị tiền tệ / sản phẩm"
      }
    ],
    "example": "Với hàm cầu $P = 60 - 0.5Q$ ($P_{\\max} = 60$) và điểm cân bằng $P^* = 30, Q^* = 60$: $CS = \\frac{1}{2} \\times (60 - 30) \\times 60 = \\mathbf{900} \\text{ triệu đồng}$.",
    "examTrap": "Khi có Thuế ($t$): Tổng thặng dư giảm một lượng gọi là $DWL = \\frac{1}{2} \\times t \\times (Q^* - Q_t)$. Đừng quên cộng cả Doanh thu thuế của Chính phủ ($T = t \\times Q_t$) khi tính Tổng thặng dư xã hội sau thuế ($TS = CS + PS + T$)!",
    "notes": "Thị trường tự do không can thiệp đạt hiệu quả Pareto tối đa hóa tổng thặng dư $TS = CS + PS$.",
    "caseStudy": {
      "entity": "Quốc Hội Hoa Kỳ & Đạo Luật Thuế Hàng Xa Xỉ 1990",
      "badge": "Thảm Họa Thuế Đi Vào Lịch Sử",
      "title": "Đánh thuế người giàu nhưng công nhân nghèo mất việc làm",
      "context": "Năm 1990, Quốc hội Mỹ đánh thuế 10% lên du thuyền xa xỉ giá trên $100.000 nhằm mục đích tăng thu ngân sách từ giới nhà giàu mà không ảnh hưởng đến người lao động.",
      "analysis": "Người giàu có độ co giãn của cầu theo giá cực kỳ cao ($|E_D| > 4$ do du thuyền là hàng xa xỉ dễ thay thế bằng cách thuê thuyền ở nước ngoài). Cầu sụt giảm kinh hoàng, lượng bán du thuyền Mỹ giảm 71%. Ngành đóng tàu Mỹ phá sản, 25.000 công nhân mất việc. Khoản thuế thu được vỏn vẹn 16.6 triệu USD, trong khi chính phủ phải chi 24.5 triệu USD tiền trợ cấp thất nghiệp! Tổn thất vô ích $DWL$ phá hủy toàn bộ thị trường.",
      "lesson": "Bên nào có độ co giãn cao hơn thì né thuế dễ hơn. Thuế đánh vào người mua hàng co giãn cao sẽ bị đẩy ngược gánh nặng lên nhà sản xuất và người lao động!"
    }
  },
  {
    "id": "micro-4",
    "category": "micro",
    "chapter": "Chương 3: Độ co giãn của Cung & Cầu",
    "title": "Độ co giãn của Cầu theo Giá (E_D) & Tác động đến Doanh thu (TR)",
    "formula": "E_D^{khoảng} = \\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \\div \\frac{P_2 - P_1}{(P_1 + P_2)/2}, \\quad E_D^{điểm} = Q'(P) \\times \\frac{P}{Q}",
    "description": "Đo lường mức độ phản ứng của lượng cầu trước sự thay đổi của giá cả.",
    "variables": [
      {
        "symbol": "E_D",
        "meaning": "Hệ số co giãn của cầu theo giá (theo khoảng hoặc điểm)",
        "unit": "Vô thứ nguyên (không có đơn vị / tỷ số %)"
      },
      {
        "symbol": "TR",
        "meaning": "Tổng doanh thu của doanh nghiệp (TR = P × Q)",
        "unit": "Đơn vị tiền tệ (triệu đồng, nghìn USD)"
      },
      {
        "symbol": "MR",
        "meaning": "Doanh thu biên tăng thêm khi bán thêm 1 sản phẩm",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "P, Q",
        "meaning": "Mức giá bán và lượng sản phẩm bán ra",
        "unit": "Tiền tệ/sp và Số lượng sản phẩm"
      }
    ],
    "example": "Nếu $Q_D = 100 - 2P$. Tại $P = 20, Q = 60$: $E_D = (-2) \\times \\frac{20}{60} = -0.67$. Vì $|E_D| < 1$, hàng hóa co giãn ít theo giá.",
    "examTrap": "Công thức co giãn khoảng (Midpoint method): mẫu số BẮT BUỘC là trung bình cộng $\\frac{Q_1 + Q_2}{2}$, không phải $Q_1$ ban đầu! Trả lời trắc nghiệm chú ý xem đề bài hỏi hệ số âm $E_D$ hay lấy độ lớn tuyệt đối $|E_D|$.",
    "notes": "Quy tắc vàng: Nếu cầu co giãn nhiều ($|E_D| > 1$), muốn tăng doanh thu thì PHẢI HẠ GIÁ. Nếu cầu co giãn ít ($|E_D| < 1$), muốn tăng doanh thu thì PHẢI TĂNG GIÁ. Khi $|E_D| = 1$, doanh thu đạt cực đại ($MR = 0$).",
    "caseStudy": {
      "entity": "Turing Pharmaceuticals (Martin Shkreli) vs Netflix (2011 Qwikster)",
      "badge": "Vụ Bê Bối Giá Thuốc Toàn Cầu",
      "title": "Tăng giá 5.455% thành công vs Mất 800.000 khách hàng trong 1 quý",
      "context": "Năm 2015, 'Gã tồi nhất nước Mỹ' Martin Shkreli mua độc quyền thuốc Daraprim (trị ký sinh trùng HIV) và tăng giá từ $13.5 lên $750/viên (+5.455%). Cùng lúc, Netflix năm 2011 tăng giá gói xem phim thêm 60%.",
      "analysis": "Thuốc Daraprim không có sản phẩm thay thế và là thuốc cứu mạng, nên cầu co giãn gần như hoàn toàn không ($|E_D| \\approx 0$). Tăng giá 5.455% khiến doanh thu của Turing tăng vọt vì người bệnh buộc phải mua bằng mọi giá. Ngược lại, dịch vụ xem phim của Netflix là giải trí có nhiều lựa chọn thay thế ($|E_D| > 1$). Khi Netflix tăng giá, 800.000 khách hàng lập tức hủy đăng ký, cổ phiếu Netflix bốc hơi 77% giá trị!",
      "lesson": "Doanh nghiệp chỉ có thể tăng giá để tăng doanh thu khi cầu co giãn kém ($|E_D| < 1$). Nếu $|E_D| > 1$, tăng giá là tự sát thương mại."
    }
  },
  {
    "id": "micro-5",
    "category": "micro",
    "chapter": "Chương 3: Độ co giãn của Cung & Cầu",
    "title": "Độ co giãn theo Thu nhập (E_I) & Co giãn chéo (E_XY)",
    "formula": "E_I = \\frac{\\%\\Delta Q}{\\%\\Delta I}, \\quad E_{XY} = \\frac{\\%\\Delta Q_X}{\\%\\Delta P_Y}",
    "description": "Phân loại tính chất của hàng hóa dựa vào dấu và độ lớn của hệ số co giãn.",
    "variables": [
      {
        "symbol": "E_I",
        "meaning": "Độ co giãn của cầu theo thu nhập (phân loại bình thường / thứ cấp)",
        "unit": "Vô thứ nguyên (tỷ số % biến động)"
      },
      {
        "symbol": "E_{XY}",
        "meaning": "Độ co giãn chéo của cầu giữa hai hàng hóa X và Y",
        "unit": "Vô thứ nguyên (tỷ số % biến động)"
      },
      {
        "symbol": "I",
        "meaning": "Thu nhập khả dụng của người tiêu dùng",
        "unit": "Đơn vị tiền tệ (triệu đồng/tháng hoặc USD/năm)"
      },
      {
        "symbol": "P_Y",
        "meaning": "Mức giá bán của hàng hóa liên quan Y",
        "unit": "Đơn vị tiền tệ / sản phẩm Y (đồng/sp)"
      },
      {
        "symbol": "Q_X",
        "meaning": "Lượng cầu tiêu thụ về hàng hóa X",
        "unit": "Đơn vị sản phẩm X (chiếc, kg...)"
      }
    ],
    "example": "Thu nhập tăng 10%, lượng mua mì gói giảm 5%: $E_I = \\frac{-5\\%}{10\\%} = -0.5 < 0 \\implies$ Mì gói là hàng hóa cấp thấp (Inferior good).",
    "examTrap": "Dấu của $E_I$ và $E_{XY}$ mang ý nghĩa bản chất kinh tế sống còn, TUYỆT ĐỐI KHÔNG ĐƯỢC lấy giá trị tuyệt đối! $E_{XY} > 0$ là thay thế, $E_{XY} < 0$ là bổ sung.",
    "notes": "Đề thi đại học rất hay hỏi câu ghép: Cho $E_I = -0.8 < 0$ và $E_{XY} = 1.2 > 0$, kết luận: X là hàng cấp thấp và thay thế cho Y!",
    "caseStudy": {
      "entity": "Hãng Xe Điện Tesla vs Cuộc Chiến Nền Tảng Spotify & Apple Music",
      "badge": "Chiến Lược Phân Loại Thị Trường",
      "title": "Xe điện sang trọng trong suy thoái và sự dịch chuyển thuê bao âm nhạc",
      "context": "Khi lạm phát toàn cầu năm 2022 làm giảm thu nhập thực tế của người dân, doanh số các thương hiệu xa xỉ như Porsche, Tesla vẫn duy trì tăng trưởng, trong khi lượng tiêu thụ xe máy phổ thông sụt giảm. Đồng thời, khi Apple Music tăng giá thuê bao từ $9.99 lên $10.99, Spotify ghi nhận lượng người dùng mới tăng kỷ lục.",
      "analysis": "Tesla Model S thuộc nhóm hàng xa xỉ ($E_I > 1$), tiêu dùng bởi tầng lớp có của cải lớn ít bị tổn thương bởi suy thoái thu nhập ngắn hạn. Trong khi đó, Apple Music và Spotify là hai hàng hóa thay thế hoàn hảo ($E_{XY} > 0$). Khi giá Apple Music tăng ($P_Y \\uparrow$), lượng cầu dịch vụ của Spotify tăng theo ($Q_X \\uparrow$).",
      "lesson": "Dấu dương hay âm của $E_I$ và $E_{XY}$ quyết định toàn bộ định vị phân khúc khách hàng và chiến lược phòng thủ trước đối thủ cạnh tranh."
    }
  },
  {
    "id": "micro-6",
    "category": "micro",
    "chapter": "Chương 4: Lý thuyết hành vi người tiêu dùng",
    "title": "Tối đa hóa Lợi ích (Utility Maximization) & Tỷ lệ thay thế biên (MRS)",
    "formula": "\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\iff MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y}, \\quad X P_X + Y P_Y = I",
    "description": "Người tiêu dùng đạt lợi ích tối đa khi đồng tiền cuối cùng chi tiêu cho mỗi loại hàng hóa đem lại lợi ích cận biên như nhau.",
    "variables": [
      {
        "symbol": "U",
        "meaning": "Tổng mức thỏa dụng / độ hài lòng của người tiêu dùng",
        "unit": "Đơn vị hữu dụng (Utils)"
      },
      {
        "symbol": "MU_X, MU_Y",
        "meaning": "Thỏa dụng biên tăng thêm từ đơn vị hàng X và Y cuối cùng",
        "unit": "Utils / đơn vị sản phẩm"
      },
      {
        "symbol": "MRS_{XY}",
        "meaning": "Tỷ lệ thay thế biên giữa hai hàng hóa X và Y",
        "unit": "Đơn vị hàng Y / 1 đơn vị hàng X"
      },
      {
        "symbol": "P_X, P_Y",
        "meaning": "Mức giá của từng sản phẩm X và Y",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "I",
        "meaning": "Tổng ngân sách tiêu dùng phân bổ",
        "unit": "Đơn vị tiền tệ (đồng, USD)"
      }
    ],
    "example": "Cho $TU(X, Y) = X \\cdot Y$. Giá $P_X = 2, P_Y = 5$, ngân sách $I = 100$. Thỏa dụng biên $MU_X = Y, MU_Y = X$. Điều kiện tối ưu: $\\frac{Y}{2} = \\frac{X}{5} \\implies X = 2.5Y$. Thay vào ngân sách $2(2.5Y) + 5Y = 100 \\implies \\mathbf{Y^* = 10, X^* = 25}$.",
    "examTrap": "Nếu $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$, 1 đồng chi cho X mang lại thỏa dụng lớn hơn Y, người tiêu dùng thông minh nên TĂNG mua X và GIẢM mua Y để đạt trạng thái cân bằng!",
    "notes": "Độ dốc của đường ngân sách là $-\\frac{P_X}{P_Y}$. Tiếp điểm giữa đường bàng quan và đường ngân sách là điểm tiêu dùng tối ưu.",
    "caseStudy": {
      "entity": "Tập Đoàn Apple Inc. (Steve Jobs & Tim Cook)",
      "badge": "Nghệ Thuật Trói Chân Hệ Sinh Thái",
      "title": "Gói Apple One và nghệ thuật thao túng đường bàng quan người dùng",
      "context": "Thay vì bán riêng lẻ iPhone, dịch vụ lưu trữ iCloud (2.99 USD), Apple Music (10.99 USD), và Apple TV+ (6.99 USD), Apple tung ra gói combo Apple One với giá $19.95/tháng, đồng thời thiết kế tính năng AirDrop, iMessage đồng bộ mượt mà giữa các thiết bị.",
      "analysis": "Bằng việc tích hợp hệ sinh thái, Apple đã làm gia tăng độ thỏa dụng biên chéo: dùng thêm MacBook làm tăng thỏa dụng biên của việc sở hữu iPhone ($MU_{iPhone} \\uparrow$). Đồng thời, gói combo Apple One giảm giá biên trên từng dịch vụ, đẩy tỷ số $MU/P$ của các dịch vụ Apple lên cao hơn hẳn so với Spotify hay Google Drive, khiến điểm tiếp xúc tối ưu của đường ngân sách người dùng bị khóa chặt (Lock-in) vĩnh viễn trong hệ sinh thái Apple.",
      "lesson": "Tối ưu hóa tiêu dùng không chỉ phụ thuộc vào giá, mà các tập đoàn lớn luôn tìm cách dịch chuyển đường bàng quan của người tiêu dùng thông qua hiệu ứng mạng lưới."
    }
  },
  {
    "id": "micro-7",
    "category": "micro",
    "chapter": "Chương 5: Lý thuyết sản xuất & Chi phí",
    "title": "Hệ thống các loại chi phí sản xuất & Điểm hòa vốn",
    "formula": "TC = FC + VC, \\quad ATC = \\frac{TC}{Q} = AFC + AVC, \\quad MC = TC'(Q) = VC'(Q)",
    "description": "Trong ngắn hạn có chi phí cố định (FC) và chi phí biến đổi (VC). Trong dài hạn mọi chi phí đều là biến đổi (FC = 0).",
    "variables": [
      {
        "symbol": "TC",
        "meaning": "Tổng chi phí sản xuất (TC = FC + VC)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "FC, VC",
        "meaning": "Chi phí cố định và Chi phí biến đổi của doanh nghiệp",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "ATC, AVC, AFC",
        "meaning": "Chi phí trung bình (tổng, biến đổi, cố định) trên 1 đơn vị",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      },
      {
        "symbol": "MC",
        "meaning": "Chi phí biên tăng thêm để sản xuất thêm 1 sản phẩm",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      },
      {
        "symbol": "P_{\\text{hòa vốn}}, P_{\\text{đóng cửa}}",
        "meaning": "Mức giá hòa vốn (ATC_min) và Mức giá đóng cửa (AVC_min)",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      }
    ],
    "example": "Cho $TC = Q^2 + 10Q + 100$. Ta có $FC = 100$, $VC = Q^2 + 10Q$, $MC = 2Q + 10$, $ATC = Q + 10 + \\frac{100}{Q}$.",
    "examTrap": "Đường $MC$ luôn cắt đường $AVC$ và $ATC$ tại chính ĐIỂM CỰC TIỂU của chúng ($MC = AVC_{\\min}$ và $MC = ATC_{\\min}$). Đây là câu trắc nghiệm xuất hiện trong 90% đề thi!",
    "notes": "Khi $MC < ATC$, đường $ATC$ đang dốc xuống. Khi $MC > ATC$, đường $ATC$ đang dốc lên. Khi $MC = ATC$, $ATC$ đạt cực tiểu.",
    "caseStudy": {
      "entity": "Ford Motor Company & Henry Ford (Năm 1908 - 1920)",
      "badge": "Cuộc Cách Mạng Dây Chuyền Lắp Ráp",
      "title": "Hạ gục toàn bộ đối thủ nhờ đẩy AFC về sát 0 trên dòng xe Model T",
      "context": "Đầu thế kỷ 20, ô tô là xa xỉ phẩm được đóng thủ công với giá 2.000 USD. Henry Ford phát minh ra dây chuyền sản xuất hàng loạt (Assembly line) cho dòng xe Model T, chấp nhận đầu tư chi phí cố định nhà xưởng khổng lồ ($FC$).",
      "analysis": "Nhờ sản xuất hàng trăm ngàn chiếc xe cùng một mẫu, Chi phí cố định trung bình bị nghiền nhỏ theo sản lượng ($AFC = FC / Q \\to 0$). Kết hợp với đường cong kinh nghiệm làm giảm $AVC$, Chi phí trung bình $ATC$ của chiếc xe Model T giảm từ 850 USD xuống còn 260 USD. Henry Ford hạ giá bán chiếc xe xuống mức người công nhân bình thường cũng mua được, buộc hàng trăm xưởng xe thủ công có $ATC$ cao phải phá sản.",
      "lesson": "Hiệu quả kinh tế nhờ quy mô (Economies of Scale) cho phép doanh nghiệp lớn vận hành tại đáy của đường $ATC$ dài hạn, dựng rào cản chi phí tuyệt đối."
    }
  },
  {
    "id": "micro-8",
    "category": "micro",
    "chapter": "Chương 6: Cấu trúc thị trường & Tối đa hóa lợi nhuận",
    "title": "Nguyên tắc tối đa hóa lợi nhuận (MR = MC) & Độc quyền",
    "formula": "MR = MC \\implies \\pi_{max}, \\quad L = \\frac{P - MC}{P} = \\frac{1}{|E_D|}",
    "description": "Doanh nghiệp ở bất kỳ thị trường nào cũng tối đa hóa lợi nhuận tại mức sản lượng có Doanh thu cận biên bằng Chi phí cận biên.",
    "variables": [
      {
        "symbol": "L",
        "meaning": "Chỉ số Lerner đo lường mức độ quyền lực độc quyền",
        "unit": "Vô thứ nguyên (chạy từ 0 đến 1)"
      },
      {
        "symbol": "P_M",
        "meaning": "Mức giá bán tối đa hóa lợi nhuận của nhà độc quyền",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "Q_M",
        "meaning": "Sản lượng cung ứng tối ưu của nhà độc quyền (MR = MC)",
        "unit": "Đơn vị sản phẩm (chiếc, tấn...)"
      },
      {
        "symbol": "\\pi_M",
        "meaning": "Lợi nhuận kinh tế siêu ngạch của nhà độc quyền",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      }
    ],
    "example": "Doanh nghiệp độc quyền có cầu $P = 100 - Q \\implies TR = 100Q - Q^2 \\implies MR = 100 - 2Q$. Nếu $MC = 20$: $MR = MC \\iff 100 - 2Q = 20 \\implies \\mathbf{Q^* = 40, P^* = 60}$.",
    "examTrap": "Với Doanh nghiệp độc quyền: Đường $MR$ luôn dốc gấp đôi đường cầu tuyến tính! (Nếu $P = a - bQ \\implies MR = a - 2bQ$). Rất nhiều bạn quên nhân 2 vào hệ số góc dẫn đến tính sai $Q^*$!",
    "notes": "Đường cung ngắn hạn của doanh nghiệp cạnh tranh hoàn hảo là phần đường $MC$ nằm PHÍA TRÊN điểm cực tiểu của $AVC$ ($P \\ge AVC_{\\min}$).",
    "caseStudy": {
      "entity": "Tập Đoàn Khai Thác Kim Cương De Beers (Nam Phi)",
      "badge": "Đế Chế Độc Quyền Huyền Thoại Thế Kỷ 20",
      "title": "Thông điệp 'Kim cương là vĩnh cửu' và nghệ thuật siết van sản lượng",
      "context": "Trong suốt thế kỷ 20, tập đoàn De Beers kiểm soát hơn 85% nguồn cung kim cương thô toàn cầu. Họ sáng tạo ra thông điệp marketing vĩ đại nhất lịch sử: 'A Diamond is Forever' để gắn kim cương với nhẫn đính hôn.",
      "analysis": "Có quyền lực độc quyền tuyệt đối, De Beers không hành xử như cạnh tranh hoàn hảo ($P = MC$). Họ thiết lập phương trình $MR = MC$. Chi phí khai thác kim cương rất rẻ ($MC$ thấp), nhưng De Beers cố tình giữ hàng nghìn tấn kim cương trong kho tại London, chỉ mở nhỏ giọt ra thị trường. Bằng cách giảm sản lượng $Q_M < Q_C$, họ đẩy giá bán $P_M$ lên gấp hàng chục lần so với $MC$, đạt chỉ số Lerner $L \\to 1$ và tối đa hóa lợi nhuận siêu ngạch.",
      "lesson": "Bản chất độc quyền không phải là bán nhiều nhất có thể, mà là hạn chế sản lượng có chủ đích để neo giá bán ở mức $MR = MC$ trên đường cầu dốc xuống."
    }
  },
  {
    "id": "micro-9",
    "category": "micro",
    "chapter": "Chương 6: Cấu trúc thị trường & Lý thuyết trò chơi",
    "title": "Cân bằng Nash (Nash Equilibrium) & Thế lưỡng nan của người tù",
    "formula": "\\text{Cân bằng Nash}: \\pi_i(s_i^*, s_{-i}^*) \\ge \\pi_i(s_i, s_{-i}^*) \\quad \\forall s_i",
    "description": "Một tập hợp các chiến lược là Cân bằng Nash nếu không có người chơi nào có động cơ đơn phương thay đổi chiến lược của mình.",
    "variables": [
      {
        "symbol": "\\pi_i",
        "meaning": "Mức lợi nhuận / lợi ích chi trả cho người chơi i (Payoff)",
        "unit": "Đơn vị tiền tệ hoặc Điểm hữu dụng"
      },
      {
        "symbol": "s_i",
        "meaning": "Chiến lược hành động được lựa chọn (Giá cả P, Sản lượng Q...)",
        "unit": "Tùy biến (đồng, chiếc, chiến dịch...)"
      },
      {
        "symbol": "R_i(s_j)",
        "meaning": "Hàm phản ứng chiến lược tốt nhất của doanh nghiệp i",
        "unit": "Đơn vị sản phẩm hoặc đơn vị giá"
      }
    ],
    "example": "Hai doanh nghiệp A và B cùng chọn giá: Nếu cả hai cùng đặt giá cao $\\to$ cùng lời 10 tỷ. Nếu A gian lận hạ giá $\\to$ A lời 15 tỷ, B lỗ 2 tỷ. Cân bằng Nash: Cả hai cùng hạ giá $\\to$ mỗi bên chỉ lời 3 tỷ.",
    "examTrap": "Cân bằng Nash KHÔNG PHẢI là kết quả tốt nhất cho cả hai doanh nghiệp, mà là kết quả cân bằng do động cơ tư lợi cá nhân chi phối ($MB > MC$ khi phản bội Cartel)!",
    "notes": "Chiến lược thống trị (Dominant Strategy) là chiến lược tối ưu nhất cho người chơi bất kể đối thủ hành động như thế nào.",
    "caseStudy": {
      "entity": "Khối Các Nước Xuất Khẩu Dầu Mỏ (OPEC & OPEC+)",
      "badge": "Nobel Kinh Tế John Nash",
      "title": "Cuộc chiến giá dầu Nga - Saudi Arabia 2020 và sự sụp đổ của Cartel",
      "context": "OPEC là một Cartel gồm các nước dầu mỏ hợp tác để cắt giảm sản lượng nhằm giữ giá dầu trên 80 USD/thùng. Tháng 3/2020, trước làn sóng Covid-19 làm cầu sụt giảm, Saudi Arabia yêu cầu cắt giảm sản lượng nhưng Nga từ chối.",
      "analysis": "Đây là thế lưỡng nan của người tù kinh điển: Hợp tác cùng cắt giảm thì giá dầu cao, cả hai cùng có lợi. Nhưng mỗi bên đều có chiến lược áp đảo (Dominant strategy) là bơm thêm dầu để chiếm thị phần. Khi niềm tin vỡ vụn, Saudi Arabia mở van xả dầu hết công suất và hạ giá bán chiết khấu. Cả hai lao vào Cân bằng Nash không hợp tác: giá dầu lao dốc không phanh, thậm chí dầu WTI có thời điểm rơi xuống mức âm (-$37/thùng)!",
      "lesson": "Các liên minh cấu kết (Cartel) luôn chứa đựng mầm mống tự hủy diệt vì mỗi thành viên luôn có động cơ đơn phương gian lận hạn ngạch."
    }
  },
  {
    "id": "micro-10",
    "category": "micro",
    "chapter": "Chương 6: Thất bại thị trường & Ngoại ứng",
    "title": "Ngoại ứng tiêu cực, Chi phí xã hội & Thuế Pigou",
    "formula": "MSC = MPC + MEC, \\quad t_{Pigou} = MEC(Q^*)",
    "description": "Khi có ngoại ứng tiêu cực (ô nhiễm), Chi phí cận biên xã hội (MSC) cao hơn Chi phí cận biên tư nhân (MPC). Thị trường tự do sẽ sản xuất thừa so với mức tối ưu.",
    "variables": [
      {
        "symbol": "MSC, MPC",
        "meaning": "Chi phí biên xã hội và Chi phí biên tư nhân",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "MEC",
        "meaning": "Chi phí ngoại ứng biên do tác hại ô nhiễm gây ra",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "t^*",
        "meaning": "Thuế Pigou khắc phục ngoại ứng tối ưu (t* = MEC)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      }
    ],
    "example": "Nhà máy thép có MPC = 20 + Q, chi phí ô nhiễm MEC = 10. Khi đó MSC = 30 + Q. Chính phủ nên đánh thuế t = 10 để đưa sản lượng về mức tối ưu xã hội.",
    "examTrap": "Thuế thông thường gây ra tổn thất vô ích $DWL$, nhưng THUẾ PIGOU LẠI LÀM TĂNG HIỆU QUẢ XÃ HỘI VÀ TRIỆT TIÊU $DWL$ bằng cách đưa chi phí tư nhân tiệm cận chi phí xã hội ($t^* = MEC$)!",
    "notes": "Định lý Coase: Nếu quyền sở hữu tài sản được xác định rõ ràng và chi phí giao dịch bằng 0, các bên tư nhân có thể tự thương lượng để đạt hiệu quả Pareto mà không cần chính phủ can thiệp.",
    "caseStudy": {
      "entity": "Liên Minh Châu Âu (EU) & Hệ Thống Giao Dịch Phát Thải EU ETS",
      "badge": "Cơ Chế Thuế Pigou Toàn Cầu",
      "title": "Định giá khí thải Carbon buộc các tập đoàn công nghiệp xanh hóa",
      "context": "Các nhà máy điện than và luyện kim tại Châu Âu xả hàng triệu tấn $CO_2$ gây biến đổi khí hậu nhưng không phải trả tiền trong giá thành sản phẩm. EU thiết lập hệ thống hạn ngạch phát thải ETS, áp mức thuế carbon lên tới gần 100 Euro/tấn $CO_2$.",
      "analysis": "Khí thải $CO_2$ là chi phí ngoại ứng tiêu cực ($MEC$). Bằng việc bắt các doanh nghiệp phải mua tín chỉ phát thải đúng bằng lượng khí xả ra, chính phủ đã nội hóa ngoại ứng (Internalizing the externality), đẩy đường cung tư nhân $MPC$ lên trùng với đường chi phí xã hội $MSC$. Kết quả: các nhà máy buộc phải đầu tư năng lượng tái tạo hoặc giảm sản lượng bẩn, đưa phát thải toàn khối EU giảm 37% mà vẫn đảm bảo tăng trưởng kinh tế.",
      "lesson": "Thuế Pigou là công cụ duy nhất biến chi phí vô hình ngoài xã hội thành chi phí tiền mặt hữu hình trong sổ sách kế toán của doanh nghiệp."
    }
  },
  {
    "id": "macro-1",
    "category": "macro",
    "chapter": "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    "title": "Tổng sản phẩm quốc nội (GDP) theo 3 phương pháp",
    "formula": "GDP = C + I + G + NX, \\quad GNP = GDP + NPI",
    "description": "GDP là tổng giá trị thị trường của tất cả hàng hóa và dịch vụ CUỐI CÙNG được sản xuất ra trong phạm vi một lãnh thổ quốc gia trong một thời kỳ nhất định.",
    "variables": [
      {
        "symbol": "GDP",
        "meaning": "Tổng sản phẩm quốc nội đo lường giá trị hàng hóa cuối cùng",
        "unit": "Đơn vị tiền tệ quốc gia (tỷ VND hoặc tỷ USD)"
      },
      {
        "symbol": "C",
        "meaning": "Tổng chi tiêu tiêu dùng của khu vực hộ gia đình",
        "unit": "Đơn vị tiền tệ (tỷ VND)"
      },
      {
        "symbol": "I",
        "meaning": "Tổng đầu tư tư nhân trong nước (gồm mua nhà ở mới)",
        "unit": "Đơn vị tiền tệ (tỷ VND)"
      },
      {
        "symbol": "G",
        "meaning": "Chi tiêu mua sắm hàng hóa & dịch vụ của chính phủ",
        "unit": "Đơn vị tiền tệ (tỷ VND)"
      },
      {
        "symbol": "NX",
        "meaning": "Xuất khẩu ròng (Cán cân thương mại NX = X - IM)",
        "unit": "Đơn vị tiền tệ (tỷ VND)"
      },
      {
        "symbol": "VA",
        "meaning": "Giá trị gia tăng qua từng công đoạn sản xuất (VA = Doanh thu - Chi phí trung gian)",
        "unit": "Đơn vị tiền tệ (tỷ VND)"
      }
    ],
    "example": "Cho $C = 600, I = 200, G = 150, X = 100, IM = 80 \\implies GDP = 600 + 200 + 150 + (100 - 80) = \\mathbf{970} \\text{ tỷ VND}$.",
    "examTrap": "BẪY 1: Chi chuyển nhượng của Chính phủ (Tr) như trợ cấp người nghèo, lương hưu KHÔNG tính trực tiếp vào GDP. BẪY 2: Bán lại xe máy cũ hay mua cổ phiếu KHÔNG tính vào GDP!",
    "notes": "GDP danh nghĩa ($GDP_n$) tính theo giá hiện hành; GDP thực tế ($GDP_r$) tính theo giá cố định của năm gốc.",
    "caseStudy": {
      "entity": "Tập Đoàn Apple Inc. & Cộng Hòa Ireland (Năm 2015)",
      "badge": "Hiện Tượng Leprechaun Economics",
      "title": "GDP Ireland tăng vọt 26.3% trong 1 đêm và bài học về giới hạn của GDP",
      "context": "Năm 2015, Cục Thống kê Ireland công bố một con số gây sốc toàn cầu: GDP của Ireland tăng trưởng kỷ lục 26.3% chỉ trong một năm. Nhà kinh tế đoạt giải Nobel Paul Krugman lập tức gọi đây là 'Kinh tế yêu tinh' (Leprechaun Economics).",
      "analysis": "Nguyên nhân không phải do nền kinh tế Ireland bùng nổ, mà do Apple chuyển quyền sở hữu trí tuệ trị giá hàng trăm tỷ USD vào các công ty con đặt tại Ireland để tối ưu hóa thuế. Toàn bộ doanh thu bán iPhone toàn cầu đổ vào sổ sách Ireland khiến chỉ số $GDP = C + I + G + NX$ phình to đột biến qua xuất khẩu ròng $NX$. Nhưng thực tế, người dân Ireland không hề được hưởng lợi vì lợi nhuận này được chuyển ngược về cổ đông Mỹ. Ireland sau đó buộc phải phát minh ra chỉ số $GNI^*$ (GNI điều chỉnh) để đo lường thực chất.",
      "lesson": "GDP đo lường sản lượng trong biên giới lãnh thổ, không phản ánh chính xác thu nhập thực tế mà công dân nước đó được hưởng nếu có dòng vốn FDI khổng lồ chuyển lợi nhuận ra nước ngoài!"
    }
  },
  {
    "id": "macro-2",
    "category": "macro",
    "chapter": "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    "title": "Chỉ số điều chỉnh GDP (Deflator) & Tốc độ tăng trưởng",
    "formula": "DGDP = \\frac{GDP_n}{GDP_r} \\times 100, \\quad g = \\frac{GDP_{r, t} - GDP_{r, t-1}}{GDP_{r, t-1}} \\times 100\\%",
    "description": "DGDP phản ánh mức giá chung của tất cả hàng hóa và dịch vụ được sản xuất trong nước.",
    "variables": [
      {
        "symbol": "GDP_N",
        "meaning": "GDP danh nghĩa tính theo giá thị trường hiện hành",
        "unit": "Đơn vị tiền tệ (tỷ VND hoặc tỷ USD)"
      },
      {
        "symbol": "GDP_R",
        "meaning": "GDP thực tế tính theo mức giá cố định của năm gốc",
        "unit": "Đơn vị tiền tệ (tỷ VND hoặc tỷ USD)"
      },
      {
        "symbol": "\\text{GDP Deflator}",
        "meaning": "Chỉ số điều chỉnh GDP phản ánh mức biến động giá",
        "unit": "Điểm chỉ số (Năm gốc = 100, không đơn vị tiền tệ)"
      },
      {
        "symbol": "g",
        "meaning": "Tốc độ tăng trưởng kinh tế thực tế hàng năm",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      }
    ],
    "example": "Năm 2024 có $GDP_n = 1.200, GDP_r = 1.000 \\implies \\text{GDP Deflator} = \\frac{1.200}{1.000} \\times 100 = \\mathbf{120}$. Nghĩa là mức giá chung đã tăng 20% so với năm gốc.",
    "examTrap": "Tính tốc độ tăng trưởng kinh tế $g$ BẮT BUỘC dùng GDP THỰC TẾ ($GDP_r$): $g = \\frac{GDP_{r, t} - GDP_{r, t-1}}{GDP_{r, t-1}} \\times 100\\%$, tuyệt đối KHÔNG được dùng GDP danh nghĩa!",
    "notes": "Năm gốc luôn có $GDP_n = GDP_r \\implies \\text{GDP Deflator} = 100$.",
    "caseStudy": {
      "entity": "Cộng Hòa Venezuela & Khủng Hoảng Kinh Tế (2016 - 2019)",
      "badge": "Thảm Họa Tiền Tệ Mỹ Latinh",
      "title": "GDP danh nghĩa tăng hàng tỷ lần nhưng nhân dân thiếu ăn",
      "context": "Trong giai đoạn 2016 - 2019, chính quyền Venezuela in tiền ồ ạt để trang trải thâm hụt ngân sách. Trên sổ sách tiền tệ Bolivar, GDP danh nghĩa ($GDP_n$) tăng vọt hàng ngàn phần trăm mỗi năm.",
      "analysis": "Khi phân tích bằng công thức $DGDP = (GDP_n / GDP_r) \\times 100$, sự thật trần trụi lộ rõ: chỉ số điều chỉnh GDP tăng vọt hàng triệu phần trăm, trong khi sản lượng hàng hóa thực tế ($GDP_r$) sụp đổ hơn 65%. Nền nông nghiệp và công nghiệp đình đốn, các nhà máy đóng cửa vì thiếu linh kiện. Tăng trưởng danh nghĩa chỉ là ảo ảnh lạm phát tiền tệ.",
      "lesson": "Không bao giờ lấy GDP danh nghĩa để đánh giá sức khỏe nền kinh tế. Chỉ có $GDP_r$ (đã loại trừ lạm phát) mới phản ánh mức sống và phúc lợi thực của người dân."
    }
  },
  {
    "id": "macro-3",
    "category": "macro",
    "chapter": "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    "title": "Chỉ số giá tiêu dùng (CPI), Tỷ lệ lạm phát & Lãi suất thực",
    "formula": "CPI_t = \\frac{\\sum (P_t \\times Q_0)}{\\sum (P_0 \\times Q_0)} \\times 100, \\quad \\pi_t = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%, \\quad r \\approx i - \\pi",
    "description": "CPI đo lường chi phí của giỏ hàng hóa và dịch vụ cố định mà một người tiêu dùng điển hình mua.",
    "variables": [
      {
        "symbol": "CPI",
        "meaning": "Chỉ số giá tiêu dùng của giỏ hàng hóa cố định",
        "unit": "Điểm chỉ số (Năm gốc = 100)"
      },
      {
        "symbol": "\\pi",
        "meaning": "Tỷ lệ lạm phát hàng năm của nền kinh tế",
        "unit": "Tỷ lệ phần trăm (% / năm hoặc % / tháng)"
      },
      {
        "symbol": "i",
        "meaning": "Lãi suất danh nghĩa niêm yết tại các ngân hàng",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      },
      {
        "symbol": "r",
        "meaning": "Lãi suất thực tế sau khi đã trừ đi lạm phát (r ≈ i - π)",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      }
    ],
    "example": "Nếu gửi ngân hàng lãi suất danh nghĩa $i = 8\\%$, tỷ lệ lạm phát $\\pi = 3\\% \\implies$ Lãi suất thực tế nhận được: $r \\approx i - \\pi = 8\\% - 3\\% = \\mathbf{5\\%}$.",
    "examTrap": "So sánh $CPI$ và $\\text{GDP Deflator}$: $CPI$ dùng giỏ hàng cố định ($Q_0$) và tính cả hàng nhập khẩu tiêu dùng. $\\text{GDP Deflator}$ chỉ tính hàng sản xuất TRONG NƯỚC ($Q_t$) và không tính hàng nhập khẩu.",
    "notes": "Hiệu ứng Fisher: Khi lạm phát kỳ vọng $\\pi^e$ tăng 1%, lãi suất danh nghĩa $i$ sẽ tăng đúng 1% để duy trì lãi suất thực $r$ không đổi.",
    "caseStudy": {
      "entity": "Cục Dự Trữ Liên Bang Mỹ (Fed) & Cú Sốc Lãi Suất Volcker Shock (1979 - 1982)",
      "badge": "Chiến Công Của Paul Volcker",
      "title": "Chấp nhận suy thoái đau đớn để bẻ gãy lạm phát 14%",
      "context": "Sau 2 cuộc khủng hoảng dầu mỏ thập niên 1970, lạm phát Mỹ leo thang lên mức 14.8%/năm. Chủ tịch Fed Paul Volcker đưa ra quyết định táo bạo nhất lịch sử ngân hàng trung ương: nâng lãi suất điều hành lên mức kỷ lục 20%.",
      "analysis": "Theo phương trình Fisher: $r \\approx i - \\pi$. Với mức lãi suất danh nghĩa $i = 20\\%$, lãi suất thực tế tăng vọt lên mức dương cực lớn ($r > 6\\%$). Chi phí vốn vay mua nhà, mua xe đắt đỏ bóp nghẹt tổng cầu, khiến nền kinh tế Mỹ rơi vào suy thoái với tỷ lệ thất nghiệp lên 10.8%. Nhưng cái giá đắt đó đã thành công bẻ gãy kỳ vọng lạm phát, kéo lạm phát CPI về dưới 3% và tạo tiền đề cho 2 thập kỷ tăng trưởng thịnh vượng sau đó.",
      "lesson": "Muốn dập tắt lạm phát kỳ vọng cao, lãi suất danh nghĩa $i$ bắt buộc phải tăng nhanh hơn tỷ lệ lạm phát $\\pi$ để đưa lãi suất thực tế $r$ về vùng dương kiềm chế tổng cầu."
    }
  },
  {
    "id": "macro-4",
    "category": "macro",
    "chapter": "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    "title": "Tỷ lệ thất nghiệp & Lực lượng lao động",
    "formula": "LF = E + U, \\quad u = \\frac{U}{LF} \\times 100\\%, \\quad \\text{Tỷ lệ tham gia LLLĐ} = \\frac{LF}{\\text{Dân số trưởng thành}} \\times 100\\%",
    "description": "Thất nghiệp là người trong độ tuổi lao động, có khả năng lao động, đang tích cực tìm việc nhưng chưa có việc làm.",
    "variables": [
      {
        "symbol": "LF",
        "meaning": "Tổng lực lượng lao động (dân số hoạt động kinh tế LF = E + U)",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "E",
        "meaning": "Số lượng người đang có việc làm hợp pháp",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "U",
        "meaning": "Số lượng người trong độ tuổi đang thất nghiệp và tích cực tìm việc",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "u",
        "meaning": "Tỷ lệ thất nghiệp thực tế của nền kinh tế (u = U / LF × 100%)",
        "unit": "Tỷ lệ phần trăm (% lực lượng lao động)"
      },
      {
        "symbol": "u_n",
        "meaning": "Tỷ lệ thất nghiệp tự nhiên (gồm cọ xát và cơ cấu)",
        "unit": "Tỷ lệ phần trăm (% lực lượng lao động)"
      }
    ],
    "example": "Dân số trưởng thành = 50 triệu người. Số người có việc $E = 38$ triệu. Thất nghiệp $U = 2$ triệu $\\implies LF = E + U = \\mathbf{40} \\text{ triệu}$. Tỷ lệ thất nghiệp: $u = \\frac{2}{40} \\times 100\\% = \\mathbf{5\\%}$.",
    "examTrap": "Người nội trợ, sinh viên đi học toàn thời gian, người nản chí không còn tìm việc (Discouraged workers) KHÔNG thuộc lực lượng lao động (không tính vào U, cũng không tính vào LF)!",
    "notes": "Thất nghiệp tự nhiên: $u_n = u_{\\text{cọ xát}} + u_{\\text{cơ cấu}}$. Thất nghiệp chu kỳ xuất hiện khi kinh tế suy thoái ($u > u_n$).",
    "caseStudy": {
      "entity": "GS. David Card (Đoạt Giải Nobel Kinh Tế 2021) & Alan Krueger (1994)",
      "badge": "Công Trình Đoạt Giải Nobel Kinh Tế",
      "title": "Nghiên cứu fast-food New Jersey lật ngược giáo điều về lương tối thiểu",
      "context": "Lý thuyết kinh tế cổ điển luôn khẳng định: Tăng mức lương tối thiểu sẽ khiến các doanh nghiệp sa thải công nhân, làm tăng tỷ lệ thất nghiệp ($u \\uparrow$). Năm 1992, bang New Jersey tăng lương tối thiểu từ $4.25 lên $5.05/giờ, trong khi bang láng giềng Pennsylvania giữ nguyên.",
      "analysis": "Card & Krueger đã khảo sát hơn 400 nhà hàng thức ăn nhanh (Burger King, KFC, Wendy's) tại hai bang. Kết quả thực nghiệm gây chấn động toàn bộ giới học thuật kinh tế: việc tăng lương tối thiểu tại New Jersey KHÔNG hề làm giảm việc làm, thậm chí còn giúp doanh nghiệp giữ chân nhân viên, giảm chi phí tuyển dụng và tăng năng suất lao động. Khám phá thực nghiệm mang tính đột phá này đã giúp David Card đoạt giải Nobel Kinh tế năm 2021.",
      "lesson": "Thị trường lao động thực tế có tính độc quyền mua (Monopsony). Tăng lương tối thiểu hợp lý trong thị trường độc quyền mua có thể tăng cả tiền lương lẫn số lượng việc làm mà không gây thất nghiệp!"
    }
  },
  {
    "id": "macro-5",
    "category": "macro",
    "chapter": "Chương 9: Tiền tệ, Hệ thống ngân hàng & Số nhân tiền",
    "title": "Cung tiền (MS), Cơ sở tiền (MB) & Số nhân tiền (m_M)",
    "formula": "MS = m_M \\times MB, \\quad m_M = \\frac{cr + 1}{cr + rr}",
    "description": "Ngân hàng thương mại tạo ra tiền thông qua hệ thống dự trữ một phần.",
    "variables": [
      {
        "symbol": "M^S",
        "meaning": "Tổng khối lượng tiền tệ cung ứng trong nền kinh tế",
        "unit": "Đơn vị tiền tệ (tỷ VND hoặc tỷ USD)"
      },
      {
        "symbol": "B",
        "meaning": "Cơ số tiền tệ (tiền mạnh do NHTW trực tiếp phát hành)",
        "unit": "Đơn vị tiền tệ (tỷ VND hoặc tỷ USD)"
      },
      {
        "symbol": "m_M",
        "meaning": "Số nhân tiền tệ của hệ thống ngân hàng thương mại",
        "unit": "Số lần (vô thứ nguyên, không đơn vị tiền tệ)"
      },
      {
        "symbol": "cr",
        "meaning": "Tỷ lệ nắm giữ tiền mặt so với tiền gửi (C / D)",
        "unit": "Tỷ số số thập phân hoặc %"
      },
      {
        "symbol": "rr",
        "meaning": "Tỷ lệ dự trữ thực tế của ngân hàng thương mại (R / D)",
        "unit": "Tỷ số số thập phân hoặc %"
      }
    ],
    "example": "Cho tỷ lệ tiền mặt $cr = 0.2$, tỷ lệ dự trữ $rr = 0.1$. Số nhân tiền: $m_M = \\frac{0.2 + 1}{0.2 + 0.1} = \\frac{1.2}{0.3} = \\mathbf{4}$. Nếu NHTW mua 100 tỷ trái phiếu ($B$ tăng 100) $\\implies$ Cung tiền tăng: $\\Delta M^S = 4 \\times 100 = \\mathbf{400} \\text{ tỷ VND}$.",
    "examTrap": "3 công cụ của NHTW để TĂNG cung tiền: 1. MUA trái phiếu chính phủ trên thị trường mở (OMO); 2. GIẢM tỷ lệ dự trữ bắt buộc; 3. GIẢM lãi suất tái chiết khấu.",
    "notes": "Khi người dân nắm giữ nhiều tiền mặt hơn ($cr$ tăng), số nhân tiền $m_M$ GIẢM, làm cung tiền thu hẹp.",
    "caseStudy": {
      "entity": "Vụ Sụp Đổ Ngân Hàng Silicon Valley Bank - SVB (Tháng 3/2023)",
      "badge": "Cuộc Tháo Chạy Tiền Gửi Kỷ Nguyên Số",
      "title": "Bốc hơi 42 tỷ USD tiền gửi trong 10 tiếng kéo sập ngân hàng lớn thứ 16 nước Mỹ",
      "context": "SVB là ngân hàng huyết mạch của các startup công nghệ Thung lũng Silicon. Khi các quỹ đầu tư mạo hiểm phát hiện SVB bị lỗ danh mục trái phiếu do Fed tăng lãi suất, họ gửi tin nhắn cảnh báo nhau trên Twitter/WhatsApp rút tiền ồ ạt.",
      "analysis": "Hệ thống ngân hàng hoạt động theo cơ chế Dự trữ một phần ($rr$). SVB nhận tiền gửi nhưng đem đầu tư trái phiếu dài hạn, tiền mặt dự trữ chỉ chiếm một phần nhỏ. Trong ngày 9/3/2023, khách hàng rút kỷ lục 42 tỷ USD chỉ qua vài cú click chuột trên app điện thoại. Tỷ lệ rút tiền mặt $cr$ tăng phi mã làm số nhân tiền $m_M$ sụp đổ. SVB mất thanh khoản hoàn toàn và bị cơ quan quản lý đóng cửa chỉ sau 48 giờ, tạo nên cơn địa chấn ngân hàng toàn cầu.",
      "lesson": "Ngân hàng thương mại bản chất là cỗ máy tạo thanh khoản dễ bị tổn thương trước tâm lý bầy đàn rút tiền hàng loạt (Bank run)."
    }
  },
  {
    "id": "macro-6",
    "category": "macro",
    "chapter": "Chương 10 & 11: Tổng cung - Tổng cầu & Chính sách tài khóa",
    "title": "Số nhân chi tiêu Keynes & Bù đắp khoảng trống sản lượng",
    "formula": "k = \\frac{1}{1 - MPC(1 - t)}, \\quad \\Delta Y = k \\times \\Delta G, \\quad k_T = \\frac{-MPC}{1 - MPC(1 - t)}",
    "description": "Một sự thay đổi trong chi tiêu tự định của Chính phủ (G) hay Đầu tư (I) sẽ khuếch đại sản lượng quốc gia thông qua số nhân chi tiêu.",
    "variables": [
      {
        "symbol": "k",
        "meaning": "Số nhân chi tiêu tự định trong mô hình Keynes",
        "unit": "Số lần (vô thứ nguyên)"
      },
      {
        "symbol": "MPC",
        "meaning": "Xu hướng tiêu dùng cận biên (0 < MPC < 1)",
        "unit": "Tỷ số số thập phân (không đơn vị)"
      },
      {
        "symbol": "t",
        "meaning": "Thuế suất thu nhập biên của chính phủ",
        "unit": "Tỷ số số thập phân hoặc %"
      },
      {
        "symbol": "Y^*, Y_p",
        "meaning": "Sản lượng cân bằng thực tế và Sản lượng tiềm năng",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "\\Delta G",
        "meaning": "Quy mô gói kích cầu tài khóa cần điều chỉnh",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      }
    ],
    "example": "Cho $MPC = 0.8 \\implies$ Số nhân chi tiêu: $k = \\frac{1}{1 - 0.8} = \\mathbf{5}$. Nếu Chính phủ tăng chi tiêu đầu tư công $\\Delta G = 20$ tỷ $\\implies$ Sản lượng tăng: $\\Delta Y = k \\times \\Delta G = 5 \\times 20 = \\mathbf{100} \\text{ tỷ VND}$.",
    "examTrap": "Số nhân thuế $k_T = \\frac{-MPC}{1 - MPC}$ luôn có độ lớn NHỎ HƠN số nhân chi tiêu $k_G = \\frac{1}{1 - MPC}$ đúng 1 đơn vị! Tăng $G$ và tăng $T$ cùng một lượng sẽ làm $Y$ tăng đúng bằng lượng tăng của $G$ (Số nhân ngân sách cân bằng $k = 1$).",
    "notes": "Khi có thuế thu nhập biên ($t$): Số nhân chi tiêu giảm xuống thành $k = \\frac{1}{1 - MPC(1 - t)}$.",
    "caseStudy": {
      "entity": "Gói Kích Cầu Khủng 787 Tỷ USD Của Tổng Thống Barack Obama (ARRA 2009)",
      "badge": "Ứng Dụng Mô Hình Keynesian Lớn Nhất",
      "title": "Đổ 787 tỷ USD vào nền kinh tế để ngăn chặn một cuộc Đại suy thoái thứ hai",
      "context": "Sau cú sụp đổ của ngân hàng Lehman Brothers năm 2008, kinh tế Mỹ rơi vào suy thoái trầm trọng, hàng triệu người mất việc. Tháng 2/2009, Tổng thống Barack Obama ký ban hành Đạo luật Tái đầu tư và Phục hồi Mỹ (ARRA) trị giá 787 tỷ USD.",
      "analysis": "Chính quyền Obama dựa trực tiếp vào mô hình số nhân chi tiêu Keynes: khi khu vực tư nhân đóng băng tiêu dùng và đầu tư ($C \\downarrow, I \\downarrow$), chỉ có Chính phủ tăng chi tiêu công khổng lồ ($G \\uparrow$) cho hạ tầng, cầu đường, năng lượng sạch mới tạo ra hiệu ứng số nhân $\\Delta Y = k \\times \\Delta G$. Với ước tính $k \\approx 1.5$, gói kích cầu đã tạo ra hoặc cứu vãn khoảng 2.5 triệu việc làm, kéo nền kinh tế Mỹ phục hồi nhanh hơn nhiều so với khu vực Châu Âu.",
      "lesson": "Trong suy thoái sâu, chi tiêu tự định của chính phủ là lực đẩy duy nhất khởi động lại vòng xoay tiêu dùng của nền kinh tế."
    }
  },
  {
    "id": "macro-7",
    "category": "macro",
    "chapter": "Chương 11: Mô hình IS - LM & Phối hợp chính sách",
    "title": "Mô hình cân bằng đồng thời IS - LM & Hiện tượng lấn át đầu tư",
    "formula": "IS: Y = k \\cdot A_0 - k \\cdot d \\cdot r, \\quad LM: r = \\frac{k_{tiền}}{h}Y - \\frac{1}{h}\\frac{M^S}{P}",
    "description": "Xác định điểm cân bằng đồng thời giữa thị trường hàng hóa (IS) và thị trường tiền tệ (LM).",
    "variables": [
      {
        "symbol": "r^*",
        "meaning": "Mức lãi suất cân bằng đồng thời trên cả thị trường hàng hóa và tiền tệ",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      },
      {
        "symbol": "Y^*",
        "meaning": "Mức sản lượng cân bằng đồng thời IS - LM",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "M/P",
        "meaning": "Khối lượng cung tiền thực tế",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "\\Delta I",
        "meaning": "Mức đầu tư tư nhân bị lấn át do lãi suất tăng cao",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      }
    ],
    "example": "Cho $IS: Y = 2.700 - 80r$ và $LM: Y = 1.000 + 80r$. Cân bằng đồng thời: $2.700 - 80r = 1.000 + 80r \\iff 160r = 1.700 \\implies \\mathbf{r^* = 10.625\\%}, \\mathbf{Y^* = 1.850}$.",
    "examTrap": "Hiện tượng lấn át đầu tư (Crowding-out): Khi chính phủ tăng chi tiêu $G$, đường $IS$ dịch phải làm tăng $Y$ nhưng đồng thời đẩy lãi suất $r$ tăng lên, khiến đầu tư tư nhân $I$ bị co hẹp một phần.",
    "notes": "Chính sách tiền tệ thắt chặt (giảm cung tiền) làm đường $LM$ dịch trái $\\implies$ Lãi suất $r \\uparrow$ và Sản lượng $Y \\downarrow$.",
    "caseStudy": {
      "entity": "Chính Sách Kinh Tế 'Reaganomics' Của Tổng Thống Ronald Reagan (1981 - 1986)",
      "badge": "Thực Tiễn Lấn Át Lớn Nhất Thế Kỷ 20",
      "title": "Cắt giảm thuế, tăng chi tiêu quân sự và hiện tượng lấn át đầu tư bộc phát",
      "context": "Tổng thống Ronald Reagan thực hiện cắt giảm thuế thu nhập sâu rộng đồng thời tăng chi tiêu quốc phòng khổng lồ cho quân đội trong Chiến tranh Lạnh, khiến thâm hụt ngân sách chính phủ Mỹ phình to chưa từng có.",
      "analysis": "Trong mô hình IS-LM: Chi tiêu $G$ tăng vọt làm đường $IS$ dịch chuyển mạnh sang phải. Lãi suất thị trường bị đẩy lên cao chót vót ($r^* \\uparrow$). Lãi suất đắt đỏ làm các doanh nghiệp tư nhân Mỹ cắt giảm đầu tư nhà xưởng máy móc ($I \\downarrow$ - lấn át đầu tư tư nhân). Đồng thời, lãi suất cao thu hút dòng vốn quốc tế đổ vào Mỹ mua trái phiếu, đẩy giá đồng USD lên cao kỷ lục, làm triệt tiêu khả năng xuất khẩu của Mỹ và gây thâm hụt cán cân thương mại kỷ lục (Hiện tượng Thâm hụt kép - Twin Deficits).",
      "lesson": "Chính sách tài khóa mở rộng không đi kèm nới lỏng tiền tệ sẽ luôn kích thích lãi suất tăng, làm triệt tiêu một phần đầu tư tư nhân và bóp nghẹt xuất khẩu."
    }
  },
  {
    "id": "macro-8",
    "category": "macro",
    "chapter": "Chương 10: Tiền tệ & Lạm phát dài hạn",
    "title": "Phương trình số lượng tiền tệ Fisher & Siêu lạm phát",
    "formula": "M \\times V = P \\times Y \\implies \\%\\Delta M + \\%\\Delta V = \\%\\Delta P + \\%\\Delta Y",
    "description": "Trong dài hạn, tốc độ lưu thông tiền tệ V và sản lượng thực tế Y là không đổi, do đó tốc độ tăng cung tiền quyết định trực tiếp tỷ lệ lạm phát.",
    "variables": [
      {
        "symbol": "M",
        "meaning": "Khối lượng cung tiền danh nghĩa đang lưu hành",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "V",
        "meaning": "Tốc độ chu chuyển (vòng quay) trung bình của đồng tiền",
        "unit": "Số vòng / năm (vô thứ nguyên)"
      },
      {
        "symbol": "P",
        "meaning": "Mức giá chung của toàn bộ nền kinh tế",
        "unit": "Điểm chỉ số giá (Năm gốc = 100)"
      },
      {
        "symbol": "Y",
        "meaning": "Tổng sản lượng GDP thực tế",
        "unit": "Đơn vị tiền tệ năm gốc (tỷ đồng, tỷ USD)"
      }
    ],
    "example": "Nếu cung tiền $M$ tăng $10\\%$/năm, GDP thực tế $Y$ tăng $3\\%$/năm, vòng quay tiền $V$ không đổi $\\implies$ Tỷ lệ lạm phát: $\\pi = \\%\\Delta M - \\%\\Delta Y = 10\\% - 3\\% = \\mathbf{7\\%}$/năm.",
    "examTrap": "Tính trung tính của tiền tệ: Trong dài hạn, tăng cung tiền CHỈ LÀM TĂNG MỨC GIÁ DANH NGHĨA ($P$), hoàn toàn KHÔNG làm thay đổi sản lượng GDP thực tế ($Y$) hay việc làm!",
    "notes": "Siêu lạm phát xảy ra khi chính phủ thâm hụt ngân sách nặng nề và lạm dụng việc in tiền để tài trợ chi tiêu công.",
    "caseStudy": {
      "entity": "Chính Quyền Tổng Thống Robert Mugabe & Siêu Lạm Phát Zimbabwe (Năm 2008)",
      "badge": "Tuyên Ngôn Của Milton Friedman",
      "title": "In tờ tiền 100.000 tỷ Dollar và bánh mì có giá 10 tỷ",
      "context": "Sau khi tịch thu các trang trại thương mại khiến sản lượng nông nghiệp sụp đổ, chính quyền Zimbabwe rơi vào thâm hụt ngân sách khổng lồ. Tổng thống Robert Mugabe ra lệnh cho Ngân hàng Trung ương in tiền vô tội vạ để trả lương quân đội và công chức.",
      "analysis": "Áp dụng phương trình số lượng $M \\times V = P \\times Y$: Sản lượng thực tế $Y$ tụt dốc, trong khi cung tiền $M$ tăng hàng triệu phần trăm. Hậu quả là mức giá $P$ tăng theo cấp số nhân, tỷ lệ lạm phát chạm mốc không tưởng: **79.600.000.000% mỗi tháng** (giá cả tăng gấp đôi sau mỗi 24 giờ). Ngân hàng phát hành tờ tiền mệnh giá kỷ lục thế giới: 100.000.000.000.000 Dollar Zimbabwe ($10^{14}$). Người dân phải chở hàng xe rùa tiền đi mua một ổ bánh mì. Nền kinh tế sụp đổ hoàn toàn cho đến khi chính phủ buộc phải từ bỏ đồng nội tệ để dùng đồng USD.",
      "lesson": "Chính phủ không thể làm cho một quốc gia giàu lên bằng cách bật máy in tiền. In tiền không đi kèm sản lượng thực tế chỉ tạo ra siêu lạm phát tàn phá nền kinh tế."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_DATA;
}
