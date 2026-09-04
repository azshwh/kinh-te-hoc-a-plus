// Sổ tay công thức toàn diện môn Kinh tế học đại cương (Vi mô & Vĩ mô)
// Biên soạn theo chuẩn ngữ pháp tiếng Việt học thuật, đối chiếu thuật ngữ tiếng Anh gốc
// Tích hợp tình huống thực chiến kinh điển của các tập đoàn hàng đầu thế giới và các công trình Nobel Kinh tế
// Chuẩn hóa 100% KaTeX toán học sắc nét

const FORMULAS_DATA = [
  {
    "id": "micro-1",
    "category": "micro",
    "chapter": "Chương 1: Mười nguyên lý kinh tế học & Tư duy cận biên",
    "title": "Chi phí cơ hội (opportunity cost - OC) và đường giới hạn khả năng sản xuất (production possibilities frontier - PPF)",
    "formula": "OC_X = \\frac{|\\Delta Y|}{|\\Delta X|} = -\\frac{dY}{dX} = MRT_{XY}",
    "description": "Chi phí cơ hội của một phương án là giá trị của phương án tốt nhất tiếp theo bị bỏ qua khi đưa ra quyết định lựa chọn.",
    "variables": [
      {
        "symbol": "OC_X",
        "meaning": "Chi phí cơ hội để sản xuất thêm 1 đơn vị hàng hóa X (opportunity cost of X)",
        "unit": "Đơn vị hàng hóa Y / 1 đơn vị hàng hóa X"
      },
      {
        "symbol": "\\Delta Y",
        "meaning": "Số lượng hàng hóa Y bị hy sinh hoặc giảm bớt",
        "unit": "Đơn vị sản phẩm Y (chiếc, tấn, kg...)"
      },
      {
        "symbol": "\\Delta X",
        "meaning": "Số lượng hàng hóa X thu thêm được",
        "unit": "Đơn vị sản phẩm X (chiếc, tấn, kg...)"
      },
      {
        "symbol": "MRT_{XY}",
        "meaning": "Tỷ lệ chuyển đổi biên giữa hai hàng hóa (marginal rate of transformation)",
        "unit": "Độ dốc tiếp tuyến của đường PPF (vô thứ nguyên)"
      }
    ],
    "example": "Nếu nền kinh tế chuyển từ phương án A (100 tấn lúa, 0 tấn thép) sang phương án B (80 tấn lúa, 10 tấn thép): $OC_{\\text{thép}} = \\frac{|80 - 100|}{|10 - 0|} = 2$ tấn lúa / 1 tấn thép.",
    "examTrap": "Lưu ý đề thi: Khi đề bài hỏi chi phí cơ hội của hàng hóa X, học viên thường nhầm lẫn lấy $\\frac{\\Delta X}{\\Delta Y}$ (đây là chi phí cơ hội của Y). Quy tắc ghi nhớ chuẩn mực: Muốn tìm chi phí cơ hội của đại lượng nào thì đặt độ biến thiên của đại lượng đó ở mẫu số: $OC_X = \\frac{|\\Delta Y|}{|\\Delta X|}$.",
    "notes": "Đường giới hạn khả năng sản xuất có dạng cong lồi ra phía ngoài (bowed outward) phản ánh quy luật chi phí cơ hội tăng dần (law of increasing opportunity cost).",
    "caseStudy": {
      "entity": "Tập đoàn máy bay Boeing (Hoa Kỳ) và dự án Boeing 787 Dreamliner",
      "badge": "Bài học kinh điển về chi phí cơ hội",
      "title": "Cân nhắc đánh đổi 32 tỷ USD vốn tự có hay gửi trái phiếu chính phủ Mỹ",
      "context": "Năm 2004, ban lãnh đạo Boeing phê duyệt ngân sách 32 tỷ USD để phát triển dòng máy bay thân rộng 787 Dreamliner sử dụng vật liệu composite sợi carbon.",
      "analysis": "Các nhà kinh tế học tại Boeing tính toán rằng chi phí cơ hội thực sự của 32 tỷ USD tiền mặt không phải là con số 0, mà chính là khoản lợi nhuận an toàn 1,6 tỷ USD mỗi năm nếu mang số vốn đó đầu tư vào trái phiếu kho bạc chính phủ Mỹ với lãi suất 5%/năm. Do đó, dự án 787 chỉ thực sự sinh lời về mặt kinh tế khi tỷ suất sinh lời nội bộ (internal rate of return - IRR) vượt xa chi phí sử dụng vốn bình quân (WACC) cộng với chi phí cơ hội này.",
      "lesson": "Lợi nhuận kế toán (accounting profit) chỉ trừ đi chi phí tường minh (explicit cost), trong khi lợi nhuận kinh tế (economic profit) bắt buộc phải trừ cả chi phí ẩn (implicit cost) là chi phí cơ hội của vốn tự có."
    }
  },
  {
    "id": "micro-2",
    "category": "micro",
    "chapter": "Chương 2: Cung - Cầu và cơ chế hoạt động của thị trường",
    "title": "Phương trình cung, cầu và trạng thái cân bằng thị trường (market equilibrium)",
    "formula": "Q_D = a - bP, \\quad Q_S = c + dP \\implies Q_D = Q_S \\iff P^*, Q^*",
    "description": "Trạng thái cân bằng thị trường xuất hiện tại mức giá mà tại đó lượng cầu bằng lượng cung ($Q_D = Q_S$).",
    "variables": [
      {
        "symbol": "P^*",
        "meaning": "Mức giá cân bằng thị trường (equilibrium price)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/kg, USD/thùng...)"
      },
      {
        "symbol": "Q^*",
        "meaning": "Sản lượng cân bằng thị trường (equilibrium quantity)",
        "unit": "Đơn vị sản phẩm (chiếc, tấn, m³...)"
      },
      {
        "symbol": "a, c",
        "meaning": "Lượng cầu và lượng cung tự định (autonomous demand and supply)",
        "unit": "Đơn vị sản phẩm (chiếc, tấn...)"
      },
      {
        "symbol": "b, d",
        "meaning": "Độ nhạy cảm của lượng cầu và lượng cung theo biến động giá cả",
        "unit": "Đơn vị sản phẩm / đơn vị giá"
      }
    ],
    "example": "Cho hàm cầu $Q_D = 120 - 2P$ và hàm cung $Q_S = 30 + P$. Tại điểm cân bằng: $Q_D = Q_S \\iff 120 - 2P = 30 + P \\iff 3P = 90 \\implies P^* = 30, Q^* = 60$.",
    "examTrap": "Phân biệt giữa hàm cầu thuận theo giá ($Q_D = f(P)$) và hàm cầu ngược ($P_D = f(Q)$). Nếu đề thi cho $P = 60 - 0.5Q$, cần chuyển đổi chính xác thành $Q = 120 - 2P$ trước khi giải hệ phương trình cân bằng hoặc vẽ đồ thị.",
    "notes": "Chính sách giá trần (price ceiling) chỉ có hiệu lực khi được ấn định thấp hơn giá cân bằng ($P_c < P^*$), dẫn tới tình trạng thiếu hụt hàng hóa (shortage). Ngược lại, giá sàn (price floor) chỉ có hiệu lực khi ấn định cao hơn giá cân bằng ($P_f > P^*$), gây ra tình trạng dư thừa hàng hóa (surplus).",
    "caseStudy": {
      "entity": "Cuộc khủng hoảng kiểm soát giá vé máy bay nội địa Hoa Kỳ (Trước năm 1978)",
      "badge": "Nghiên cứu thị trường của Alfred Kahn",
      "title": "Bãi bỏ kiểm soát giá vé và sự bùng nổ của ngành hàng không giá rẻ",
      "context": "Trước năm 1978, Ủy ban Hàng không Dân dụng Hoa Kỳ (CAB) can thiệp ấn định mức giá vé sàn rất cao để bảo hộ các hãng hàng không lớn, khiến người dân có thu nhập trung bình không thể tiếp cận dịch vụ bay.",
      "analysis": "Chính sách giá sàn nhân tạo khiến thị trường rơi vào trạng thái dư thừa công suất nghiêm trọng, các chuyến bay thường xuyên trống 50% số ghế. Sau khi Đạo luật Bãi bỏ Kiểm soát Hàng không năm 1978 có hiệu lực, giá vé được giải phóng về đúng điểm cân bằng tự nhiên theo quy luật cung - cầu. Giá vé thực tế giảm hơn 40%, tỷ lệ lấp đầy ghế tăng vọt lên trên 85% và mở đường cho mô hình hàng không giá rẻ ra đời.",
      "lesson": "Can thiệp giá nhân tạo làm triệt tiêu cơ chế tự điều chỉnh của bàn tay vô hình (invisible hand), làm méo mó tín hiệu giá cả và gây tổn thất phúc lợi xã hội nghiêm trọng."
    }
  },
  {
    "id": "micro-3",
    "category": "micro",
    "chapter": "Chương 2: Cung - Cầu và chính sách can thiệp của chính phủ",
    "title": "Thặng dư tiêu dùng (consumer surplus - CS), thặng dư sản xuất (producer surplus - PS) và tổn thất vô ích (deadweight loss - DWL)",
    "formula": "CS = \\frac{1}{2}(P_{\\max} - P^*)Q^*, \\quad PS = \\frac{1}{2}(P^* - P_{\\min})Q^*, \\quad DWL = \\frac{1}{2}t(Q^* - Q_t)",
    "description": "Đo lường mức độ thỏa mãn ròng của người mua và người bán trên thị trường, cùng phần tổn thất phúc lợi xã hội phát sinh khi có thuế hoặc kiểm soát giá.",
    "variables": [
      {
        "symbol": "CS",
        "meaning": "Thặng dư của người tiêu dùng (consumer surplus)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "PS",
        "meaning": "Thặng dư của nhà sản xuất (producer surplus)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "DWL",
        "meaning": "Tổn thất vô ích của xã hội (deadweight loss / excess burden)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "t",
        "meaning": "Mức thuế gián thu đánh trên một đơn vị sản phẩm (unit tax)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp, USD/sp)"
      }
    ],
    "example": "Với hàm cầu $P = 60 - 0.5Q$ ($P_{\\max} = 60$) và điểm cân bằng $P^* = 30, Q^* = 60$: thặng dư tiêu dùng đạt $CS = \\frac{1}{2} \\times (60 - 30) \\times 60 = 900$ triệu đồng.",
    "examTrap": "Khi chính phủ áp thuế đơn vị ($t$), tổng thặng dư xã hội bị suy giảm một lượng bằng tổn thất vô ích $DWL = \\frac{1}{2} \\times t \\times (Q^* - Q_t)$. Lưu ý phải cộng cả khoản thu ngân sách từ thuế ($T = t \\times Q_t$) khi tính tổng thặng dư xã hội sau thuế: $TS = CS + PS + T$.",
    "notes": "Trạng thái cân bằng cạnh tranh tự do không có can thiệp đạt hiệu quả Pareto (Pareto efficiency), tại đó tổng thặng dư xã hội ($TS = CS + PS$) đạt giá trị cực đại.",
    "caseStudy": {
      "entity": "Sắc thuế đánh vào du thuyền hạng sang của Quốc hội Hoa Kỳ (Năm 1990)",
      "badge": "Sai lầm chính sách thuế kinh điển",
      "title": "Dự kiến thu 31 triệu USD nhưng làm phá sản 100 xưởng đóng tàu",
      "context": "Năm 1990, Quốc hội Mỹ thông qua sắc thuế tiêu thụ đặc biệt 10% đánh vào các mặt hàng xa xỉ như du thuyền, máy bay tư nhân và trang sức đắt tiền với mục tiêu tăng thu ngân sách từ tầng lớp thượng lưu.",
      "analysis": "Chính phủ giả định rằng lượng cầu của người giàu rất ít co giãn theo giá. Tuy nhiên, du thuyền là mặt hàng xa xỉ có độ co giãn của cầu theo giá cực lớn ($|E_D| \\gg 1$). Giới thượng lưu lập tức ngừng mua du thuyền tại Mỹ và chuyển sang đặt hàng tại châu Âu hoặc Bahamas. Doanh số đóng thuyền tại Mỹ sụt giảm hơn 70%, khiến 25.000 công nhân mất việc làm và ngân sách phải chi hàng chục triệu USD tiền trợ cấp thất nghiệp, vượt xa số tiền thuế thu được ít ỏi.",
      "lesson": "Bên nào có độ co giãn kém hơn (inelastic) sẽ phải gánh chịu phần lớn gánh nặng thuế (tax incidence). Công nhân đóng tàu có độ co giãn cung kém hơn người mua giàu có nên đã phải gánh toàn bộ hậu quả của sắc thuế."
    }
  },
  {
    "id": "micro-4",
    "category": "micro",
    "chapter": "Chương 3: Độ co giãn của cung, cầu và ứng dụng thực tiễn",
    "title": "Độ co giãn của cầu theo giá (price elasticity of demand - $E_D$) và tác động đến tổng doanh thu (total revenue - $TR$)",
    "formula": "E_D = \\frac{\\%\\Delta Q_D}{\\%\\Delta P} = Q'_D(P) \\times \\frac{P}{Q}, \\quad E_D^{\\text{trung điểm}} = \\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \\div \\frac{P_2 - P_1}{(P_1 + P_2)/2}",
    "description": "Phản ánh mức độ phản ứng của lượng cầu hàng hóa khi mức giá của chính hàng hóa đó thay đổi 1%.",
    "variables": [
      {
        "symbol": "E_D",
        "meaning": "Hệ số co giãn của cầu theo giá (price elasticity of demand)",
        "unit": "Vô thứ nguyên (luôn mang dấu âm theo luật cầu)"
      },
      {
        "symbol": "|E_D|",
        "meaning": "Độ lớn tuyệt đối của hệ số co giãn",
        "unit": "Vô thứ nguyên ($|E_D| > 1$: co giãn nhiều; $|E_D| < 1$: co giãn ít)"
      },
      {
        "symbol": "TR",
        "meaning": "Tổng doanh thu bán hàng của doanh nghiệp ($TR = P \\times Q$)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "MR",
        "meaning": "Doanh thu cận biên thu thêm khi bán thêm 1 sản phẩm (marginal revenue)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      }
    ],
    "example": "Cho hàm cầu $Q_D = 100 - 2P$. Tại mức giá $P = 20$, lượng cầu là $Q = 60$: hệ số co giãn điểm là $E_D = (-2) \\times \\frac{20}{60} = -0.67$. Vì $|E_D| = 0.67 < 1$, cầu về hàng hóa này co giãn ít theo giá.",
    "examTrap": "Khi áp dụng phương pháp trung điểm (midpoint method), mẫu số bắt buộc phải lấy giá trị trung bình cộng $\\frac{Q_1 + Q_2}{2}$ và $\\frac{P_1 + P_2}{2}$, không được lấy giá trị ban đầu. Đọc kỹ đề trắc nghiệm xem câu hỏi yêu cầu giá trị đại số âm ($E_D$) hay độ lớn tuyệt đối ($|E_D|$).",
    "notes": "Nguyên tắc quan hệ giữa độ co giãn và tổng doanh thu: Nếu cầu co giãn nhiều ($|E_D| > 1$), giảm giá bán sẽ làm tăng tổng doanh thu. Nếu cầu co giãn ít ($|E_D| < 1$), tăng giá bán sẽ làm tăng tổng doanh thu. Khi cầu co giãn đơn vị ($|E_D| = 1$), tổng doanh thu đạt cực đại ($MR = 0$).",
    "caseStudy": {
      "entity": "Tập đoàn dược phẩm Turing Pharmaceuticals và chiến lược giá của Netflix năm 2011",
      "badge": "Ứng dụng độ co giãn vào chiến lược giá",
      "title": "Tăng giá 5.455% thuốc Daraprim thành công đối lập với sự cố mất 800.000 thuê bao của Netflix",
      "context": "Năm 2015, Martin Shkreli mua độc quyền thuốc Daraprim điều trị ký sinh trùng cho bệnh nhân HIV và tăng giá từ 13.5 USD lên 750 USD một viên (+5.455%). Cùng thời điểm trước đó năm 2011, Netflix tăng giá gói thuê bao thêm 60%.",
      "analysis": "Thuốc Daraprim là loại dược phẩm cứu mạng không có sản phẩm thay thế hoàn hảo, do đó cầu về thuốc gần như hoàn toàn không co giãn ($|E_D| \\approx 0$). Việc tăng giá sốc giúp doanh thu tăng vọt vì người bệnh bắt buộc phải chi trả. Ngược lại, dịch vụ giải trí của Netflix có rất nhiều phương án thay thế ($|E_D| > 1$), nên đợt tăng giá năm 2011 khiến 800.000 khách hàng lập tức hủy tài khoản và cổ phiếu công ty mất 77% giá trị.",
      "lesson": "Doanh nghiệp chỉ nên tăng giá bán để mở rộng tổng doanh thu khi biết chắc chắn lượng cầu sản phẩm có độ co giãn kém ($|E_D| < 1$)."
    }
  },
  {
    "id": "micro-5",
    "category": "micro",
    "chapter": "Chương 3: Độ co giãn của cung, cầu và ứng dụng thực tiễn",
    "title": "Độ co giãn của cầu theo thu nhập (income elasticity - $E_I$) và độ co giãn chéo (cross-price elasticity - $E_{XY}$)",
    "formula": "E_I = \\frac{\\%\\Delta Q}{\\%\\Delta I}, \\quad E_{XY} = \\frac{\\%\\Delta Q_X}{\\%\\Delta P_Y}",
    "description": "Phân loại thuộc tính kinh tế của hàng hóa (hàng thông thường, hàng thứ cấp, hàng thay thế hoặc hàng bổ sung) căn cứ vào dấu đại số của hệ số co giãn.",
    "variables": [
      {
        "symbol": "E_I",
        "meaning": "Độ co giãn của cầu theo thu nhập (income elasticity of demand)",
        "unit": "Vô thứ nguyên ($E_I > 0$: hàng thông thường; $E_I < 0$: hàng thứ cấp)"
      },
      {
        "symbol": "E_{XY}",
        "meaning": "Độ co giãn chéo của cầu giữa hai hàng hóa X và Y (cross-price elasticity)",
        "unit": "Vô thứ nguyên ($E_{XY} > 0$: thay thế; $E_{XY} < 0$: bổ sung)"
      },
      {
        "symbol": "I",
        "meaning": "Mức thu nhập khả dụng của người tiêu dùng (disposable income)",
        "unit": "Đơn vị tiền tệ (triệu đồng/tháng, USD/năm)"
      },
      {
        "symbol": "P_Y",
        "meaning": "Mức giá bán của hàng hóa liên quan Y",
        "unit": "Đơn vị tiền tệ / sản phẩm Y (đồng/sp)"
      },
      {
        "symbol": "Q_X",
        "meaning": "Lượng cầu tiêu thụ đối với hàng hóa X",
        "unit": "Đơn vị sản phẩm X (chiếc, kg...)"
      }
    ],
    "example": "Khi thu nhập của người dân tăng 10%, lượng tiêu thụ mì gói giảm 5%: hệ số $E_I = \\frac{-5\\%}{10\\%} = -0.5 < 0$, chứng minh mì gói là hàng hóa thứ cấp (inferior good).",
    "examTrap": "Dấu đại số của $E_I$ và $E_{XY}$ mang ý nghĩa bản chất kinh tế quyết định, tuyệt đối không được lấy trị tuyệt đối. Nếu $E_{XY} > 0$ là hàng hóa thay thế (substitutes); nếu $E_{XY} < 0$ là hàng hóa bổ sung (complements); nếu $E_{XY} = 0$ là hai hàng hóa độc lập.",
    "notes": "Đề thi đại học thường tích hợp câu hỏi nhận định: Cho $E_I = -0.8 < 0$ và $E_{XY} = 1.2 > 0$, kết luận hàng hóa X vừa là hàng hóa thứ cấp, vừa là hàng hóa thay thế cho hàng hóa Y.",
    "caseStudy": {
      "entity": "Tập đoàn xe điện Tesla và cuộc chiến thuê bao giữa Spotify với Apple Music",
      "badge": "Chiến lược phân khúc thị trường",
      "title": "Doanh số xe hơi hạng sang trong thời kỳ suy thoái và sự dịch chuyển thuê bao âm nhạc",
      "context": "Năm 2022, khi lạm phát toàn cầu bào mòn thu nhập thực tế của người dân, doanh số xe hơi phổ thông sụt giảm mạnh nhưng dòng xe cao cấp của Porsche và Tesla vẫn duy trì đà tăng trưởng. Cùng lúc đó, khi Apple Music nâng giá thuê bao từ 9.99 USD lên 10.99 USD, Spotify ghi nhận lượng người đăng ký mới tăng đột biến.",
      "analysis": "Dòng xe Tesla cao cấp thuộc nhóm hàng hóa xa xỉ phẩm (luxury good) có $E_I > 1$, phục vụ tầng lớp có tích lũy tài sản lớn ít bị tác động bởi suy thoái ngắn hạn. Trong khi đó, dịch vụ nghe nhạc trực tuyến giữa Spotify và Apple Music là hai hàng hóa thay thế có độ co giãn chéo dương rất cao ($E_{XY} > 0$). Khi giá Apple Music tăng ($P_Y \\uparrow$), lượng cầu đăng ký của Spotify lập tức tăng theo ($Q_X \\uparrow$).",
      "lesson": "Dấu dương hay âm của các hệ số co giãn $E_I$ và $E_{XY}$ định hình toàn bộ chiến lược phân khúc khách hàng và phương án cạnh tranh của doanh nghiệp."
    }
  },
  {
    "id": "micro-6",
    "category": "micro",
    "chapter": "Chương 4: Lý thuyết hành vi của người tiêu dùng",
    "title": "Tối đa hóa thỏa dụng (utility maximization) và tỷ lệ thay thế biên (marginal rate of substitution - MRS)",
    "formula": "\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\iff MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y}, \\quad X P_X + Y P_Y = I",
    "description": "Người tiêu dùng phân bổ ngân sách đạt mức thỏa dụng tối đa khi lợi ích cận biên trên một đồng chi tiêu cuối cùng cho các hàng hóa bằng nhau.",
    "variables": [
      {
        "symbol": "U, TU",
        "meaning": "Tổng mức thỏa dụng của người tiêu dùng (total utility)",
        "unit": "Đơn vị thỏa dụng (Utils)"
      },
      {
        "symbol": "MU_X, MU_Y",
        "meaning": "Thỏa dụng cận biên của hàng hóa X và Y (marginal utility)",
        "unit": "Utils / sản phẩm ($MU_X = \\frac{\\partial U}{\\partial X}$)"
      },
      {
        "symbol": "MRS_{XY}",
        "meaning": "Tỷ lệ thay thế biên giữa hai hàng hóa X và Y",
        "unit": "Tỷ số sản phẩm Y / sản phẩm X ($MRS_{XY} = -\\frac{dY}{dX}$)"
      },
      {
        "symbol": "I",
        "meaning": "Tổng ngân sách chi tiêu của người tiêu dùng (income / budget)",
        "unit": "Đơn vị tiền tệ (đồng, USD)"
      },
      {
        "symbol": "P_X, P_Y",
        "meaning": "Đơn giá của hàng hóa X và hàng hóa Y",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      }
    ],
    "example": "Hàm thỏa dụng $U(X, Y) = X \\cdot Y$, giá $P_X = 2$, $P_Y = 5$, thu nhập $I = 100$. Ta có $MU_X = Y$, $MU_Y = X$. Điều kiện tối ưu: $\\frac{Y}{2} = \\frac{X}{5} \\implies X = 2.5Y$. Thay vào đường ngân sách $2(2.5Y) + 5Y = 100 \\implies Y^* = 10, X^* = 25$.",
    "examTrap": "Khi $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$, nghĩa là mỗi đồng chi tiêu cho hàng hóa X mang lại mức thỏa dụng lớn hơn so với chi tiêu cho hàng hóa Y. Người tiêu dùng duy lý sẽ tăng mua hàng hóa X và giảm mua hàng hóa Y để nâng cao tổng mức thỏa dụng cho tới khi hai tỷ số cân bằng.",
    "notes": "Độ dốc của đường ngân sách là $-\\frac{P_X}{P_Y}$. Tiếp điểm giữa đường bàng quan (indifference curve) và đường ngân sách (budget line) xác định giỏ hàng hóa tiêu dùng tối ưu.",
    "caseStudy": {
      "entity": "Tập đoàn công nghệ Apple và gói dịch vụ tích hợp Apple One",
      "badge": "Chiến lược gói sản phẩm hệ sinh thái",
      "title": "Nghệ thuật định giá giỏ hàng hóa để dịch chuyển đường bàng quan của người dùng",
      "context": "Thay vì bán riêng lẻ từng dịch vụ như lưu trữ đám mây iCloud (2.99 USD), Apple Music (10.99 USD) và Apple TV+ (6.99 USD), Apple cung cấp gói Apple One chỉ với 19.95 USD mỗi tháng.",
      "analysis": "Với mức giá trọn gói thấp hơn tổng giá bán lẻ từng dịch vụ, Apple làm thay đổi tỷ lệ đánh đổi biên giữa tiền và dịch vụ số. Khi chi phí cận biên trên mỗi dịch vụ cộng thêm trở nên rất nhỏ, người dùng nhận thấy lợi ích cận biên trên một đồng chi tiêu ($\\frac{MU}{P}$) của gói combo vượt trội hoàn toàn so với việc mua rời, thúc đẩy hàng chục triệu người đăng ký gói dịch vụ mở rộng.",
      "lesson": "Tối ưu hóa hành vi tiêu dùng không chỉ dựa trên mức giá của từng mặt hàng đơn lẻ, mà các tập đoàn lớn thường thiết lập cấu trúc giá giỏ hàng để định hướng tỷ lệ thay thế biên của khách hàng."
    }
  },
  {
    "id": "micro-7",
    "category": "micro",
    "chapter": "Chương 5: Lý thuyết sản xuất và chi phí doanh nghiệp",
    "title": "Hệ thống các loại chi phí sản xuất và ngưỡng hòa vốn (break-even point)",
    "formula": "TC = FC + VC, \\quad ATC = \\frac{TC}{Q} = AFC + AVC, \\quad MC = TC'(Q) = VC'(Q)",
    "description": "Trong ngắn hạn, doanh nghiệp duy trì chi phí cố định ($FC > 0$) và chi phí biến đổi ($VC$). Trong dài hạn, mọi yếu tố đầu vào đều có thể điều chỉnh linh hoạt nên toàn bộ chi phí đều là chi phí biến đổi ($FC = 0$).",
    "variables": [
      {
        "symbol": "TC",
        "meaning": "Tổng chi phí sản xuất ngắn hạn (total cost: $TC = FC + VC$)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "FC, VC",
        "meaning": "Chi phí cố định (fixed cost) và chi phí biến đổi (variable cost)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      },
      {
        "symbol": "ATC, AVC, AFC",
        "meaning": "Chi phí trung bình: tổng (ATC), biến đổi (AVC), cố định (AFC)",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      },
      {
        "symbol": "MC",
        "meaning": "Chi phí cận biên để sản xuất thêm 1 đơn vị sản phẩm (marginal cost)",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      },
      {
        "symbol": "P_{\\text{hòa vốn}}, P_{\\text{đóng cửa}}",
        "meaning": "Mức giá hòa vốn ($ATC_{\\min}$) và mức giá đóng cửa sản xuất ($AVC_{\\min}$)",
        "unit": "Đơn vị tiền tệ / sản phẩm (nghìn đồng/sp)"
      }
    ],
    "example": "Hàm tổng chi phí $TC = Q^2 + 10Q + 100$. Ta suy ra chi phí cố định $FC = 100$, chi phí biến đổi $VC = Q^2 + 10Q$, chi phí cận biên $MC = 2Q + 10$, chi phí trung bình $ATC = Q + 10 + \\frac{100}{Q}$.",
    "examTrap": "Đường chi phí cận biên ($MC$) luôn đi qua điểm cực tiểu của cả đường $AVC$ và đường $ATC$ ($MC = AVC_{\\min}$ và $MC = ATC_{\\min}$). Đây là một trong những câu hỏi kiểm tra lý thuyết căn bản xuất hiện thường xuyên nhất trong đề thi.",
    "notes": "Khi $MC < ATC$, đường chi phí trung bình đang có xu hướng giảm. Khi $MC > ATC$, đường chi phí trung bình đang có xu hướng tăng. Tại giao điểm $MC = ATC$, đường $ATC$ đạt giá trị nhỏ nhất.",
    "caseStudy": {
      "entity": "Công ty ô tô Ford Motor và nhà sáng lập Henry Ford (Giai đoạn 1908 - 1920)",
      "badge": "Cách mạng dây chuyền sản xuất hàng loạt",
      "title": "Hạ gục toàn bộ đối thủ cạnh tranh nhờ phân bổ chi phí cố định về gần 0 trên dòng xe Model T",
      "context": "Đầu thế kỷ 20, ô tô là mặt hàng xa xỉ được chế tạo thủ công với mức giá trên 2.000 USD. Henry Ford sáng chế ra dây chuyền lắp ráp di động liên tục (moving assembly line) cho dòng xe Model T, chấp nhận bỏ ra khoản chi phí cố định xây dựng nhà xưởng khổng lồ ($FC$).",
      "analysis": "Nhờ sản xuất hàng trăm nghìn chiếc xe cùng thông số, chi phí cố định trung bình trên mỗi chiếc xe giảm gần về 0 ($AFC = \\frac{FC}{Q} \\to 0$). Kết hợp với hiệu ứng đường cong kinh nghiệm làm giảm chi phí biến đổi trung bình ($AVC$), tổng chi phí trung bình ($ATC$) của một chiếc Model T giảm từ 850 USD xuống chỉ còn 260 USD. Ford hạ giá bán mạnh mẽ, mở rộng quy mô thị trường và buộc hàng trăm xưởng sản xuất thủ công có chi phí trung bình cao phải rời bỏ cuộc chơi.",
      "lesson": "Hiệu quả kinh tế theo quy mô (economies of scale) cho phép doanh nghiệp lớn vận hành tại đáy của đường chi phí trung bình dài hạn ($LRATC$), dựng nên rào cản chi phí vững chắc trước các đối thủ mới gia nhập."
    }
  },
  {
    "id": "micro-8",
    "category": "micro",
    "chapter": "Chương 6: Bốn cấu trúc thị trường và chiến lược tối đa hóa lợi nhuận",
    "title": "Nguyên tắc tối đa hóa lợi nhuận ($MR = MC$) và thế lực độc quyền bán (monopoly power)",
    "formula": "MR = MC \\implies Q^*, \\quad L = \\frac{P - MC}{P} = \\frac{1}{|E_D|}",
    "description": "Doanh nghiệp trong mọi cấu trúc thị trường đều tối đa hóa lợi nhuận tại mức sản lượng mà tại đó doanh thu cận biên bằng chi phí cận biên ($MR = MC$).",
    "variables": [
      {
        "symbol": "L",
        "meaning": "Chỉ số Lerner đo lường mức độ thế lực độc quyền bán (Lerner index of monopoly power)",
        "unit": "Vô thứ nguyên ($0 \\le L \\le 1$)"
      },
      {
        "symbol": "P_M",
        "meaning": "Mức giá bán tối ưu của doanh nghiệp độc quyền",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "Q_M",
        "meaning": "Sản lượng cung ứng tối ưu thỏa mãn điều kiện $MR = MC$",
        "unit": "Đơn vị sản phẩm (chiếc, tấn...)"
      },
      {
        "symbol": "\$\pi$_M",
        "meaning": "Lợi nhuận kinh tế siêu ngạch của nhà độc quyền (economic profit)",
        "unit": "Đơn vị tiền tệ (triệu đồng, USD)"
      }
    ],
    "example": "Doanh nghiệp độc quyền đối diện hàm cầu $P = 100 - Q \\implies TR = 100Q - Q^2 \\implies MR = 100 - 2Q$. Nếu chi phí cận biên $MC = 20$: phương trình $MR = MC \\iff 100 - 2Q = 20 \\implies Q^* = 40, P^* = 60$.",
    "examTrap": "Đối với doanh nghiệp độc quyền bán có hàm cầu tuyến tính dạng $P = a - bQ$, hàm doanh thu cận biên luôn có độ dốc gấp hai lần hàm cầu: $MR = a - 2bQ$. Cần chú ý nhân đôi hệ số góc để tránh tính sai sản lượng tối ưu.",
    "notes": "Đường cung ngắn hạn của doanh nghiệp cạnh tranh hoàn hảo chính là nhánh của đường chi phí cận biên ($MC$) nằm phía trên điểm cực tiểu của đường chi phí biến đổi trung bình ($P \\ge AVC_{\\min}$). Doanh nghiệp độc quyền không có đường cung riêng biệt mà chỉ có điểm cung ứng.",
    "caseStudy": {
      "entity": "Tập đoàn khai khoáng De Beers (Nam Phi)",
      "badge": "Mô hình độc quyền bán nguyên liệu toàn cầu",
      "title": "Thông điệp tiếp thị kim cương vĩnh cửu và chính sách điều tiết van sản lượng",
      "context": "Trong phần lớn thế kỷ 20, tập đoàn De Beers nắm giữ trên 85% nguồn cung kim cương thô của thế giới và xây dựng thông điệp biểu tượng: 'Kim cương là vĩnh cửu' (A Diamond is Forever).",
      "analysis": "Với thế lực độc quyền gần như tuyệt đối, De Beers không định giá theo chi phí cận biên ($P = MC$) như thị trường cạnh tranh. Họ giải bài toán tối ưu tại $MR = MC$. Chi phí khai thác mỗi carat kim cương tương đối thấp ($MC$ nhỏ), nhưng De Beers lưu trữ kim cương trong các kho bảo mật tại London và đưa ra thị trường với số lượng hạn chế có chủ đích ($Q_M < Q_C$). Nhờ vậy, họ duy trì mức giá bán độc quyền $P_M$ cao hơn gấp nhiều lần chi phí cận biên, thiết lập chỉ số Lerner $L$ tiệm cận 1.",
      "lesson": "Bản chất của thế lực độc quyền là quyền năng kiểm soát lượng cung ứng để nâng giá bán vượt lên trên chi phí cận biên, đánh đổi sản lượng thị trường để thu về lợi nhuận kinh tế siêu ngạch."
    }
  },
  {
    "id": "micro-9",
    "category": "micro",
    "chapter": "Chương 6: Bốn cấu trúc thị trường và lý thuyết trò chơi",
    "title": "Cân bằng Nash (Nash equilibrium) và thế lưỡng nan của người tù (prisoner's dilemma)",
    "formula": "\\text{Cân bằng Nash}: \$\pi$_i(s_i^*, s_{-i}^*) \\ge \$\pi$_i(s_i, s_{-i}^*) \\quad \\forall s_i",
    "description": "Một tập hợp các chiến lược được gọi là cân bằng Nash nếu không có bất kỳ người chơi nào có động cơ đơn phương thay đổi chiến lược khi các đối thủ giữ nguyên lựa chọn của họ.",
    "variables": [
      {
        "symbol": "s_i^*",
        "meaning": "Chiến lược tối ưu của người chơi thứ i (optimal strategy)",
        "unit": "Quyết định hành động (hợp tác, cạnh tranh, giá cao, giá thấp...)"
      },
      {
        "symbol": "s_{-i}^*",
        "meaning": "Tập hợp các chiến lược của tất cả các đối thủ còn lại",
        "unit": "Quyết định hành động của các đối thủ"
      },
      {
        "symbol": "\$\pi$_i",
        "meaning": "Mức lợi ích hoặc lợi nhuận thanh toán của người chơi (payoff)",
        "unit": "Đơn vị tiền tệ hoặc điểm thỏa dụng"
      }
    ],
    "example": "Hai doanh nghiệp A và B cùng cân nhắc mức giá: Nếu cả hai cùng đặt giá cao, mỗi bên thu lợi nhuận 10 tỷ đồng. Nếu một bên hạ giá trong khi bên kia giữ giá cao, bên hạ giá thu 15 tỷ đồng còn đối thủ lỗ 2 tỷ đồng. Nếu cả hai cùng hạ giá, mỗi bên nhận 3 tỷ đồng. Kết quả cân bằng Nash là cả hai cùng hạ giá để nhận 3 tỷ đồng.",
    "examTrap": "Cân bằng Nash không đồng nghĩa với kết quả mang lại tổng phúc lợi tốt nhất cho toàn thể các bên tham gia (trạng thái tối ưu Pareto), mà là điểm cân bằng phát sinh do động cơ tối đa hóa lợi ích cá nhân độc lập.",
    "notes": "Chiến lược thống trị (dominant strategy) là chiến lược đem lại kết quả tốt nhất cho một người chơi bất kể các đối thủ khác lựa chọn hành động nào.",
    "caseStudy": {
      "entity": "Tổ chức các nước xuất khẩu dầu mỏ (OPEC) và Nga trong cuộc chiến giá dầu tháng 3/2020",
      "badge": "Lý thuyết trò chơi ứng dụng trên trường quốc tế",
      "title": "Thỏa hiệp Cartel bất thành và sự sụp đổ tạm thời của giá dầu thế giới",
      "context": "Khối liên minh OPEC+ thường xuyên thỏa thuận hạn ngạch cắt giảm sản lượng khai thác nhằm neo giữ giá dầu thô thế giới trên ngưỡng 60 USD - 80 USD mỗi thùng. Tháng 3 năm 2020, nhu cầu năng lượng toàn cầu suy giảm mạnh do đại dịch.",
      "analysis": "Saudi Arabia đề xuất tiếp tục cắt giảm sản lượng để giữ giá, nhưng Nga từ chối vì lo ngại các nhà sản xuất dầu đá phiến của Mỹ sẽ chiếm thị phần. Cả hai bên rơi vào thế lưỡng nan của người tù kinh điển: Chiến lược thống trị của mỗi quốc gia là bơm mạnh dầu ra thị trường để tối đa hóa doanh thu riêng. Kết quả là nguồn cung dư thừa trầm trọng, đẩy giá dầu WTI có thời điểm rơi xuống mức âm lịch sử và cả hai bên đều chịu thiệt hại nặng nề trước khi buộc phải ngồi lại đàm phán thỏa thuận mới.",
      "lesson": "Các thỏa thuận cấu kết (collusion) trong mô hình độc quyền nhóm (oligopoly) luôn chứa đựng động cơ phá vỡ thỏa thuận ngầm, trừ khi có cơ chế giám sát và trừng phạt đáng tin cậy."
    }
  },
  {
    "id": "micro-10",
    "category": "micro",
    "chapter": "Chương 4: Vai trò của chính phủ và hiệu quả thị trường",
    "title": "Ngoại ứng tiêu cực (negative externality), chi phí xã hội và sắc thuế Pigou (Pigouvian tax)",
    "formula": "MSC = MPC + MEC, \\quad t^* = MEC(Q^*)",
    "description": "Thị trường tự do phân bổ thất bại khi có tác động ngoại ứng tiêu cực, khiến sản lượng thực tế vượt quá mức tối ưu xã hội. Thuế Pigou nội hóa chi phí ngoại ứng để đưa sản lượng về mức hiệu quả.",
    "variables": [
      {
        "symbol": "MSC",
        "meaning": "Chi phí xã hội cận biên (marginal social cost)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "MPC",
        "meaning": "Chi phí tư nhân cận biên của doanh nghiệp sản xuất (marginal private cost)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "MEC",
        "meaning": "Chi phí ngoại ứng cận biên gây ra cho cộng đồng (marginal external cost)",
        "unit": "Đơn vị tiền tệ / sản phẩm (đồng/sp)"
      },
      {
        "symbol": "t^*",
        "meaning": "Mức thuế Pigou tối ưu trên mỗi đơn vị sản phẩm gây ô nhiễm",
        "unit": "Đơn vị tiền tệ / sản phẩm ($t^* = MEC$)"
      }
    ],
    "example": "Một nhà máy hóa chất có chi phí sản xuất tư nhân $MPC = 20 + 2Q$. Hoạt động xả thải gây ô nhiễm môi trường với chi phí ngoại ứng $MEC = 10$. Chi phí xã hội toàn diện là $MSC = MPC + MEC = 30 + 2Q$. Mức thuế Pigou tối ưu cần áp dụng là $t^* = 10$ đồng trên mỗi đơn vị hóa chất.",
    "examTrap": "Các sắc thuế thông thường tạo ra tổn thất vô ích ($DWL$), nhưng sắc thuế Pigou thì hoàn toàn ngược lại: Thuế Pigou triệt tiêu tổn thất vô ích của thị trường và nâng cao phúc lợi xã hội thông qua việc nội hóa chi phí ngoại ứng (internalizing the externality).",
    "notes": "Định lý Coase (Coase theorem): Nếu quyền sở hữu tài sản được phân định rõ ràng và chi phí giao dịch (transaction cost) không đáng kể, các bên tư nhân có thể tự thương lượng để đạt được kết quả phân bổ hiệu quả Pareto mà không cần chính phủ can thiệp trực tiếp.",
    "caseStudy": {
      "entity": "Hệ thống mua bán phát thải của Liên minh châu Âu (EU Emissions Trading System - EU ETS)",
      "badge": "Cơ chế thị trường giải quyết ô nhiễm môi trường",
      "title": "Tạo lập thị trường tín chỉ carbon theo tư duy định lý Coase",
      "context": "Thay vì ra mệnh lệnh hành chính giới hạn sản xuất của các nhà máy công nghiệp, năm 2005 Liên minh châu Âu thiết lập thị trường mua bán hạn ngạch phát thải khí nhà kính (EU ETS).",
      "analysis": "Chính phủ ấn định tổng lượng phát thải trần cho toàn khối và phân bổ giấy phép phát thải cho các doanh nghiệp. Các nhà máy có công nghệ hiện đại với chi phí cắt giảm ô nhiễm thấp sẽ chủ động giảm xả thải và bán lại hạn ngạch dư thừa cho các nhà máy lạc hậu. Giá tín chỉ carbon tự hình thành theo cơ chế thị trường tương đương một mức thuế Pigou động, tạo động lực tài chính mạnh mẽ để doanh nghiệp chuyển đổi sang năng lượng sạch.",
      "lesson": "Khi quyền sở hữu tài sản môi trường được lượng hóa và đưa vào giao dịch thị trường, các thành phần kinh tế sẽ tự điều chỉnh hành vi với chi phí xã hội thấp nhất."
    }
  },
  {
    "id": "macro-1",
    "category": "macro",
    "chapter": "Chương 7: Đo lường sản lượng quốc gia và thu nhập quốc dân",
    "title": "Tổng sản phẩm quốc nội (gross domestic product - GDP) theo ba phương pháp hạch toán",
    "formula": "GDP = C + I + G + NX, \\quad GDP = w + r + i + \\text{Pr} + Dep + T_e",
    "description": "Tổng giá trị thị trường của toàn bộ hàng hóa và dịch vụ cuối cùng được sản xuất ra trong phạm vi lãnh thổ một quốc gia trong một khoảng thời gian nhất định (thường là một năm hoặc một quý).",
    "variables": [
      {
        "symbol": "GDP",
        "meaning": "Tổng sản phẩm quốc nội (gross domestic product)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "C",
        "meaning": "Chi tiêu tiêu dùng của khu vực hộ gia đình (consumption)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "I",
        "meaning": "Tổng đầu tư tư nhân trong nước (gross private domestic investment)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "G",
        "meaning": "Chi tiêu mua sắm hàng hóa và dịch vụ của chính phủ (government purchases)",
        "unit": "Đơn vị tiền tệ (không bao gồm chi chuyển nhượng trợ cấp)"
      },
      {
        "symbol": "NX",
        "meaning": "Xuất khẩu ròng (net exports: $NX = X - IM$)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      }
    ],
    "example": "Một nền kinh tế ghi nhận chi tiêu tiêu dùng $C = 600$, đầu tư $I = 200$, chi tiêu chính phủ $G = 150$, kim ngạch xuất khẩu $X = 100$, nhập khẩu $IM = 80$: tổng sản phẩm quốc nội đạt $GDP = 600 + 200 + 150 + (100 - 80) = 970$ tỷ đồng.",
    "examTrap": "Các khoản chi chuyển nhượng của chính phủ (transfer payments - Tr) như trợ cấp người già, tiền lương hưu hoặc học bổng không được tính vào $G$ và $GDP$ vì không kèm theo hành vi tạo ra hàng hóa hoặc cung cấp dịch vụ mới trong kỳ.",
    "notes": "Phân biệt giữa tổng sản phẩm quốc nội ($GDP$ - tính theo lãnh thổ địa lý) và tổng thu nhập quốc gia ($GNP$ - tính theo quyền sở hữu quốc tịch của công dân): $GNP = GDP + NFA$, trong đó $NFA$ là thu nhập yếu tố ròng từ nước ngoài (net factor income from abroad).",
    "caseStudy": {
      "entity": "Hiện tượng Leprechaun Economics tại Ireland (Năm 2015)",
      "badge": "Lỗ hổng kinh điển trong đo lường GDP",
      "title": "Tăng trưởng GDP 26% trong một đêm nhờ chiêu bài chuyển giao tài sản trí tuệ của các tập đoàn công nghệ",
      "context": "Năm 2015, Cơ quan Thống kê Trung ương Ireland công bố số liệu khiến giới kinh tế học toàn cầu chấn động: GDP của Ireland tăng trưởng tới 26,3% chỉ trong vòng 1 năm.",
      "analysis": "Giáo sư đoạt giải Nobel Paul Krugman gọi đây là 'nền kinh tế yêu tinh lùn' (Leprechaun economics). Sự tăng vọt này không xuất phát từ việc công nhân Ireland làm việc năng suất hơn hay mở thêm nhà xưởng thực tế, mà do các tập đoàn đa quốc gia như Apple tái cơ cấu thuế, chuyển hàng trăm tỷ USD tài sản trí tuệ đăng ký về Ireland. Khoản vốn này làm phồng chỉ số đầu tư và tài sản vốn trong GDP trên sổ sách, nhưng người dân bản xứ không được hưởng lợi tương xứng.",
      "lesson": "Chỉ số GDP có thể bị bóp méo bởi dòng vốn đa quốc gia; đối với các nền kinh tế có độ mở lớn, chỉ số tổng thu nhập quốc gia điều chỉnh (*GNI* modified) phản ánh đời sống người dân chính xác hơn."
    }
  },
  {
    "id": "macro-2",
    "category": "macro",
    "chapter": "Chương 7: Đo lường sản lượng quốc gia và thu nhập quốc dân",
    "title": "Chỉ số điều chỉnh GDP (GDP deflator) và tốc độ tăng trưởng kinh tế thực tế (real economic growth)",
    "formula": "\\text{GDP Deflator} = \\frac{GDP_n}{GDP_r} \\times 100, \\quad g_t = \\frac{GDP_{r, t} - GDP_{r, t-1}}{GDP_{r, t-1}} \\times 100\\%",
    "description": "Đo lường mức giá chung của toàn bộ hàng hóa và dịch vụ sản xuất trong nước, làm thước đo tách biệt giữa biến động giá cả lạm phát và tăng trưởng sản lượng thực tế.",
    "variables": [
      {
        "symbol": "GDP_n",
        "meaning": "Tổng sản phẩm quốc nội danh nghĩa theo giá hiện hành (nominal GDP)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "GDP_r",
        "meaning": "Tổng sản phẩm quốc nội thực tế theo giá so sánh của năm gốc (real GDP)",
        "unit": "Đơn vị tiền tệ tính theo giá năm gốc"
      },
      {
        "symbol": "\\text{GDP Deflator}",
        "meaning": "Chỉ số điều chỉnh GDP (implicit price deflator for GDP)",
        "unit": "Điểm chỉ số (năm gốc luôn bằng 100)"
      },
      {
        "symbol": "g_t",
        "meaning": "Tốc độ tăng trưởng kinh tế thực tế của năm t so với năm trước",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      }
    ],
    "example": "Năm 2024 có $GDP_n = 1.200$ tỷ đồng, $GDP_r = 1.000$ tỷ đồng: chỉ số điều chỉnh GDP là $\\text{GDP Deflator} = \\frac{1.200}{1.000} \\times 100 = 120$. Mức giá bình quân của các sản phẩm sản xuất nội địa đã tăng 20% so với năm gốc.",
    "examTrap": "Khi tính toán tốc độ tăng trưởng kinh tế ($g$), bắt buộc phải sử dụng số liệu $GDP$ thực tế ($GDP_r$). Tuyệt đối không dùng $GDP$ danh nghĩa vì giá trị danh nghĩa đã bị khuếch đại bởi yếu tố tăng giá lạm phát.",
    "notes": "Tại năm gốc (base year), giá trị danh nghĩa luôn bằng giá trị thực tế ($GDP_n = GDP_r$), do đó chỉ số điều chỉnh GDP tại năm gốc luôn có giá trị quy ước là 100.",
    "caseStudy": {
      "entity": "Nền kinh tế Nhật Bản và ba thập kỷ trì trệ (1990 - 2020)",
      "badge": "Bài học giảm phát và tăng trưởng thực tế",
      "title": "Chỉ số điều chỉnh GDP liên tục âm và hiện tượng bẫy thanh khoản",
      "context": "Sau khi bong bóng bất động sản và thị trường chứng khoán vỡ tung vào đầu thập niên 1990, Nhật Bản bước vào thời kỳ giảm phát kéo dài hàng thập kỷ.",
      "analysis": "Trong nhiều giai đoạn, chỉ số điều chỉnh GDP của Nhật Bản ở mức âm (nhỏ hơn 100), phản ánh mức giá hàng hóa sản xuất nội địa suy giảm theo thời gian. Mặc dù GDP danh nghĩa hầu như đi ngang hoặc sụt giảm nhẹ, GDP thực tế của Nhật Bản vẫn duy trì mức tăng trưởng dương khoảng 1%/năm nhờ năng suất lao động được cải thiện và giá cả sụt giảm.",
      "lesson": "Tăng trưởng danh nghĩa có thể đánh lừa cảm nhận của người làm chính sách; sự thịnh vượng vật chất thực sự của người dân phụ thuộc vào số lượng hàng hóa và dịch vụ thực tế ($GDP_r$) chứ không phải con số tiền tệ danh nghĩa."
    }
  },
  {
    "id": "macro-3",
    "category": "macro",
    "chapter": "Chương 9: Lạm phát, chỉ số giá tiêu dùng và thị trường lao động",
    "title": "Chỉ số giá tiêu dùng (consumer price index - CPI), tỷ lệ lạm phát (inflation rate) và hiệu ứng Fisher (Fisher effect)",
    "formula": "CPI_t = \\frac{\\sum (P_{i, t} \\times Q_{i, 0})}{\\sum (P_{i, 0} \\times Q_{i, 0})} \\times 100, \\quad \$\pi$_t = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%, \\quad i \\approx r + \$\pi$",
    "description": "Đo lường sự biến động chi phí sinh hoạt bình quân của một hộ gia đình điển hình qua thời gian thông qua một giỏ hàng hóa và dịch vụ tiêu dùng cố định.",
    "variables": [
      {
        "symbol": "CPI_t",
        "meaning": "Chỉ số giá tiêu dùng tại thời kỳ t (consumer price index)",
        "unit": "Điểm chỉ số (năm gốc = 100)"
      },
      {
        "symbol": "\$\pi$_t",
        "meaning": "Tỷ lệ lạm phát trong kỳ (inflation rate)",
        "unit": "Tỷ lệ phần trăm (% / năm hoặc % / tháng)"
      },
      {
        "symbol": "i",
        "meaning": "Lãi suất danh nghĩa ghi trên hợp đồng tín dụng (nominal interest rate)",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      },
      {
        "symbol": "r",
        "meaning": "Lãi suất thực tế đã trừ lạm phát (real interest rate)",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      }
    ],
    "example": "Gửi tiền tiết kiệm với lãi suất danh nghĩa $i = 8\\%/năm$, tỷ lệ lạm phát kỳ vọng là $\$\pi$ = 3\\%/năm$: lãi suất thực tế người gửi nhận được xấp xỉ $r = 8\\% - 3\\% = 5\\%/năm$.",
    "examTrap": "Phân biệt giữa chỉ số $CPI$ và chỉ số điều chỉnh $GDP$: $CPI$ sử dụng quyền số giỏ hàng cố định của năm gốc ($Q_0$) và bao gồm cả hàng tiêu dùng nhập khẩu; chỉ số điều chỉnh $GDP$ sử dụng sản lượng thay đổi của năm hiện hành ($Q_t$) và chỉ đo lường hàng hóa sản xuất nội địa, không tính hàng nhập khẩu.",
    "notes": "Hiệu ứng Fisher (Fisher effect): Trong dài hạn, khi tỷ lệ lạm phát kỳ vọng tăng 1%, ngân hàng thương mại và thị trường sẽ điều chỉnh tăng lãi suất danh nghĩa thêm đúng 1% để giữ cho lãi suất thực tế không đổi.",
    "caseStudy": {
      "entity": "Cục Dự trữ Liên bang Hoa Kỳ (Fed) dưới thời Chủ tịch Paul Volcker (Giai đoạn 1979 - 1982)",
      "badge": "Chiến dịch hạ gục lạm phát lịch sử",
      "title": "Nâng lãi suất điều hành lên 20% để bẻ gãy tâm lý kỳ vọng lạm phát",
      "context": "Cuối thập niên 1970, nước Mỹ rơi vào tình trạng đình lạm (stagflation) tồi tệ, tỷ lệ lạm phát theo chỉ số CPI chạm ngưỡng 14,8% mỗi năm.",
      "analysis": "Theo phương trình Fisher ($i \\approx r + \\pi$), nếu kỳ vọng lạm phát duy trì ở mức cao, lãi suất danh nghĩa sẽ tiếp tục bị đẩy lên. Chủ tịch Paul Volcker quyết định thực thi chính sách tiền tệ thắt chặt chưa từng có tiền lệ, nâng lãi suất quỹ liên bang lên mức kỷ lục 20%. Mặc dù chính sách này đẩy kinh tế Mỹ vào đợt suy thoái ngắn hạn năm 1982, nó đã bẻ gãy hoàn toàn tâm lý kỳ vọng lạm phát, kéo lạm phát CPI về dưới 4% và tạo nền tảng cho chu kỳ tăng trưởng ổn định suốt hai thập kỷ sau đó.",
      "lesson": "Kiểm soát lạm phát thực chất là cuộc chiến kiểm soát kỳ vọng lạm phát (anchoring inflation expectations); khi công chúng tin tưởng vào sự kiên quyết của ngân hàng trung ương, chi phí xã hội để đưa lạm phát về mục tiêu sẽ giảm đi đáng kể."
    }
  },
  {
    "id": "macro-4",
    "category": "macro",
    "chapter": "Chương 9: Lạm phát, chỉ số giá tiêu dùng và thị trường lao động",
    "title": "Tỷ lệ thất nghiệp (unemployment rate - $u$) và cấu trúc lực lượng lao động (labor force - LF)",
    "formula": "LF = E + U, \\quad u = \\frac{U}{LF} \\times 100\\%, \\quad \\text{Tỷ lệ tham gia LF} = \\frac{LF}{\\text{Dân số trưởng thành}} \\times 100\\%",
    "description": "Thước đo mức độ sử dụng nguồn nhân lực của nền kinh tế, phản ánh tỷ lệ những người trong độ tuổi lao động có khả năng và đang tích cực tìm việc nhưng chưa có việc làm.",
    "variables": [
      {
        "symbol": "LF",
        "meaning": "Lực lượng lao động (labor force)",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "E",
        "meaning": "Số người đang có việc làm (employed)",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "U",
        "meaning": "Số người thất nghiệp đang tích cực tìm việc (unemployed)",
        "unit": "Số người (triệu người)"
      },
      {
        "symbol": "u",
        "meaning": "Tỷ lệ thất nghiệp thực tế (unemployment rate)",
        "unit": "Tỷ lệ phần trăm (% lực lượng lao động)"
      },
      {
        "symbol": "u_n",
        "meaning": "Tỷ lệ thất nghiệp tự nhiên (natural rate of unemployment)",
        "unit": "Tỷ lệ phần trăm (bao gồm thất nghiệp cọ xát và cơ cấu)"
      }
    ],
    "example": "Dân số trưởng thành là 50 triệu người; số người có việc làm $E = 38$ triệu người; số người thất nghiệp $U = 2$ triệu người: lực lượng lao động đạt $LF = 38 + 2 = 40$ triệu người. Tỷ lệ thất nghiệp là $u = \\frac{2}{40} \\times 100\\% = 5\\%$. Tỷ lệ tham gia lực lượng lao động là $\\frac{40}{50} \\times 100\\% = 80\\%$.",
    "examTrap": "Người trong độ tuổi lao động nhưng không tích cực tìm kiếm việc làm (học sinh, sinh viên, người nội trợ, người nản chí từ bỏ tìm việc) được xếp vào nhóm ngoài lực lượng lao động (not in labor force), tuyệt đối không tính vào mẫu số hay tử số của tỷ lệ thất nghiệp.",
    "notes": "Định luật Okun (Okun's law): Khi tỷ lệ thất nghiệp thực tế tăng thêm 1% so với tỷ lệ thất nghiệp tự nhiên ($u - u_n = 1\\%$), sản lượng $GDP$ thực tế của nền kinh tế sẽ sụt giảm khoảng 2% so với mức sản lượng tiềm năng.",
    "caseStudy": {
      "entity": "Công trình nghiên cứu đoạt giải Nobel Kinh tế năm 2021 của Giáo sư David Card",
      "badge": "Đột phá phương pháp thực nghiệm",
      "title": "Nghiên cứu về mức lương tối thiểu tại New Jersey và Pennsylvania",
      "context": "Lý thuyết tân cổ điển truyền thống cho rằng nếu chính phủ tăng mức lương tối thiểu, chi phí của doanh nghiệp tăng lên sẽ dẫn tới việc sa thải bớt nhân công và làm gia tăng tỷ lệ thất nghiệp.",
      "analysis": "Giáo sư David Card và cộng sự Alan Krueger tiến hành thí nghiệm tự nhiên so sánh các cửa hàng thức ăn nhanh tại bang New Jersey (nơi nâng lương tối thiểu từ 4.25 USD lên 5.05 USD mỗi giờ) với bang Pennsylvania lân cận (nơi giữ nguyên mức lương). Kết quả thực nghiệm chứng minh rằng việc tăng lương tối thiểu không hề làm gia tăng tỷ lệ thất nghiệp, thậm chí còn giúp cải thiện tỷ lệ gắn kết và năng suất lao động của công nhân.",
      "lesson": "Thị trường lao động thực tế tồn tại cấu trúc độc quyền mua (monopsony); khi đó chính sách lương tối thiểu hợp lý có thể nâng cao thu nhập cho người lao động mà không gây tổn hại đến tổng việc làm của nền kinh tế."
    }
  },
  {
    "id": "macro-5",
    "category": "macro",
    "chapter": "Chương 10: Hệ thống tiền tệ và chính sách tiền tệ quốc gia",
    "title": "Cung tiền (money supply - $M^S$), cơ sở tiền tệ (monetary base - $MB$) và số nhân tiền tệ (money multiplier - $m_M$)",
    "formula": "m_M = \\frac{cr + 1}{cr + rr}, \\quad M^S = m_M \\times B = m_M \\times MB",
    "description": "Quá trình sáng tạo tiền của hệ thống ngân hàng thương mại thông qua cơ chế nhận tiền gửi và cho vay theo tỷ lệ dự trữ bắt buộc.",
    "variables": [
      {
        "symbol": "M^S",
        "meaning": "Tổng khối tiền tệ cung ứng trong nền kinh tế (M1, M2)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "MB, B",
        "meaning": "Cơ sở tiền tệ hoặc tiền mạnh do NHTW phát hành (monetary base / high-powered money)",
        "unit": "Đơn vị tiền tệ (tiền mặt lưu thông ngoài ngân hàng + dự trữ tại NHTW)"
      },
      {
        "symbol": "m_M",
        "meaning": "Số nhân tiền tệ (money multiplier)",
        "unit": "Số lần khuếch đại (vô thứ nguyên, luôn lớn hơn 1)"
      },
      {
        "symbol": "cr",
        "meaning": "Tỷ lệ nắm giữ tiền mặt so với tiền gửi thanh toán (currency-deposit ratio: $cr = C/D$)",
        "unit": "Tỷ số số thập phân (vô thứ nguyên)"
      },
      {
        "symbol": "rr",
        "meaning": "Tỷ lệ dự trữ thực tế của các ngân hàng thương mại (reserve-deposit ratio: $rr = R/D$)",
        "unit": "Tỷ số số thập phân (bao gồm dự trữ bắt buộc và dự trữ vượt mức)"
      }
    ],
    "example": "Tỷ lệ nắm giữ tiền mặt $cr = 0.2$, tỷ lệ dự trữ $rr = 0.1$: số nhân tiền tệ là $m_M = \\frac{0.2 + 1}{0.2 + 0.1} = \\frac{1.2}{0.3} = 4$. Nếu ngân hàng trung ương mua 100 tỷ đồng trái phiếu chính phủ thông qua nghiệp vụ thị trường mở, cung tiền sẽ mở rộng thêm $\\Delta M^S = 4 \\times 100 = 400$ tỷ đồng.",
    "examTrap": "Khi công chúng lo ngại rủi ro và rút tiền ồ ạt để giữ tiền mặt (tỷ lệ $cr$ tăng mạnh), số nhân tiền tệ $m_M$ sẽ suy giảm nghiêm trọng, khiến tổng cung tiền bị thu hẹp đột ngột ngay cả khi ngân hàng trung ương không hề thay đổi cơ số tiền $MB$.",
    "notes": "Ba công cụ điều hành chính sách tiền tệ truyền thống của ngân hàng trung ương gồm: Nghiệp vụ thị trường mở (open market operations), tỷ lệ dự trữ bắt buộc (reserve requirements), và lãi suất tái cấp vốn / chiết khấu (discount rate).",
    "caseStudy": {
      "entity": "Cuộc Đại Khủng Hoảng Kinh Tế Hoa Kỳ (Giai đoạn 1929 - 1933) theo nghiên cứu của Milton Friedman",
      "badge": "Công trình giải Nobel Kinh tế của Milton Friedman",
      "title": "Sự sụp đổ của hệ thống ngân hàng và cung tiền sụt giảm 33%",
      "context": "Trong cuốn sách kinh điển 'Lịch sử Tiền tệ Hoa Kỳ 1867 - 1960', Milton Friedman và Anna Schwartz chỉ ra nguyên nhân biến một đợt suy thoái thông thường thành thảm họa Đại Khủng hoảng.",
      "analysis": "Khi làn sóng rút tiền hàng loạt (bank runs) bùng phát, người dân hoảng loạn rút tiền gửi để cất giữ tiền mặt ($cr$ tăng vọt), trong khi các ngân hàng thương mại nâng tỷ lệ dự trữ thanh khoản đề phòng đổ vỡ ($rr$ tăng cao). Hậu quả là số nhân tiền tệ $m_M$ giảm một nửa. Mặc dù cơ sở tiền tệ $MB$ của Fed tăng nhẹ, tổng cung tiền $M^S$ của toàn nước Mỹ vẫn sụt giảm kinh hoàng tới 33%, đẩy hàng chục nghìn doanh nghiệp vào cảnh vỡ nợ vì thiếu thanh khoản.",
      "lesson": "Ngân hàng trung ương cần đóng vai trò là người cho vay cứu cánh cuối cùng (lender of last resort) để bơm thanh khoản khẩn cấp, ngăn chặn sự đứt gãy của hệ số nhân tiền tệ."
    }
  },
  {
    "id": "macro-6",
    "category": "macro",
    "chapter": "Chương 11: Mô hình tổng cầu, tổng cung và chính sách tài khóa",
    "title": "Mô hình số nhân chi tiêu Keynes (Keynesian expenditure multiplier) và chính sách tài khóa (fiscal policy)",
    "formula": "k = \\frac{1}{1 - MPC(1 - t)}, \\quad k_T = \\frac{-MPC}{1 - MPC(1 - t)}, \\quad \\Delta Y = k \\times \\Delta G",
    "description": "Hiệu ứng khuếch đại của tổng sản lượng quốc gia khi xuất hiện một khoản thay đổi tự định ban đầu trong chi tiêu tiêu dùng, đầu tư hoặc chi tiêu mua sắm của chính phủ.",
    "variables": [
      {
        "symbol": "k, m",
        "meaning": "Số nhân chi tiêu của chính phủ (government expenditure multiplier)",
        "unit": "Số lần (vô thứ nguyên, luôn lớn hơn 1)"
      },
      {
        "symbol": "k_T",
        "meaning": "Số nhân thuế (tax multiplier)",
        "unit": "Số lần (luôn mang giá trị âm và nhỏ hơn số nhân chi tiêu: $|k_T| < k_G$)"
      },
      {
        "symbol": "MPC",
        "meaning": "Xu hướng tiêu dùng cận biên (marginal propensity to consume: $0 < MPC < 1$)",
        "unit": "Tỷ số số thập phân ($MPC = \\frac{\\Delta C}{\\Delta Y_d}$)"
      },
      {
        "symbol": "t",
        "meaning": "Thuế suất biên theo thu nhập (marginal tax rate)",
        "unit": "Tỷ số số thập phân hoặc tỷ lệ phần trăm"
      }
    ],
    "example": "Giả sử $MPC = 0.8$, số nhân chi tiêu trong nền kinh tế giản đơn đạt $k = \\frac{1}{1 - 0.8} = 5$. Khi chính phủ quyết định giải ngân thêm 20 tỷ đồng cho các dự án hạ tầng công cộng, tổng sản lượng quốc gia sẽ tăng thêm $\\Delta Y = 5 \\times 20 = 100$ tỷ đồng.",
    "examTrap": "Độ lớn của số nhân thuế luôn nhỏ hơn số nhân chi tiêu đúng 1 đơn vị ($|k_T| = k_G - 1$). Do đó, nếu chính phủ vừa tăng chi tiêu chính phủ $G$ thêm 100 tỷ đồng, vừa tăng thu thuế $T$ thêm 100 tỷ đồng, sản lượng quốc gia vẫn tăng đúng 100 tỷ đồng (đây là định lý số nhân ngân sách cân bằng: $k_{\\text{cân bằng}} = 1$).",
    "notes": "Trong nền kinh tế mở có khu vực chính phủ và xuất nhập khẩu, mẫu số của số nhân chi tiêu sẽ mở rộng thêm thuế suất biên và xu hướng nhập khẩu cận biên ($MPI$), khiến hệ số nhân chi tiêu thực tế suy giảm so với mô hình giản đơn.",
    "caseStudy": {
      "entity": "Đạo luật Phục hồi và Tái đầu tư Hoa Kỳ (ARRA 2009) của Tổng thống Barack Obama",
      "badge": "Kích cầu tài khóa quy mô lớn",
      "title": "Gói cứu trợ 831 tỷ USD giải cứu nền kinh tế khỏi cuộc khủng hoảng tài chính toàn cầu",
      "context": "Sau cuộc khủng hoảng thế chấp dưới chuẩn năm 2008, chi tiêu tư nhân và niềm tin doanh nghiệp suy sụp, đẩy nước Mỹ vào khoảng trống suy thoái trầm trọng.",
      "analysis": "Các cố vấn kinh tế Nhà Trắng áp dụng mô hình số nhân Keynes để thiết kế gói kích thích kinh tế 831 tỷ USD, gồm đầu tư cơ sở hạ tầng, giảm thuế cho hộ gia đình và trợ cấp người thất nghiệp. Với ước tính số nhân chi tiêu trung bình khoảng 1.5, gói chính sách đã bù đắp khoản thâm hụt sản lượng ước tính hơn 1.200 tỷ USD, kích thích tiêu dùng tư nhân phục hồi và ngăn chặn nguy cơ rơi vào chu kỳ giảm phát xoắn ốc.",
      "lesson": "Khi khu vực kinh tế tư nhân suy yếu và thắt chặt hầu bao, chính phủ cần đóng vai trò là người chi tiêu cứu trợ để kích hoạt chuỗi số nhân chi tiêu lan tỏa cho toàn bộ nền kinh tế."
    }
  },
  {
    "id": "macro-7",
    "category": "macro",
    "chapter": "Chương 11: Mô hình tổng cầu, tổng cung và chính sách tài khóa",
    "title": "Mô hình cân bằng đồng thời thị trường hàng hóa và tiền tệ (IS - LM model) cùng hiệu ứng lấn át (crowding-out effect)",
    "formula": "\\begin{cases} IS: Y = C(Y-T) + I(r) + G + NX \\\\ LM: \\frac{M^S}{P} = L(Y, r) \\end{cases} \\implies (Y^*, r^*)",
    "description": "Xác định đồng thời mức lãi suất cân bằng và sản lượng cân bằng của nền kinh tế tại giao điểm giữa thị trường hàng hóa (đường IS) và thị trường tiền tệ (đường LM).",
    "variables": [
      {
        "symbol": "r^*",
        "meaning": "Mức lãi suất thực tế cân bằng đồng thời hai thị trường (equilibrium interest rate)",
        "unit": "Tỷ lệ phần trăm (% / năm)"
      },
      {
        "symbol": "Y^*",
        "meaning": "Mức tổng sản lượng cân bằng kinh tế vĩ mô (equilibrium income / output)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "I(r)",
        "meaning": "Hàm cầu đầu tư tư nhân phụ thuộc nghịch biến vào lãi suất",
        "unit": "Đơn vị tiền tệ (lãi suất tăng thì đầu tư giảm)"
      },
      {
        "symbol": "L(Y, r)",
        "meaning": "Hàm cầu tiền thực tế (đồng biến với thu nhập, nghịch biến với lãi suất)",
        "unit": "Đơn vị tiền tệ thực tế"
      }
    ],
    "example": "Cho phương trình thị trường hàng hóa $IS: Y = 2.700 - 80r$ và thị trường tiền tệ $LM: Y = 1.000 + 80r$. Cân bằng đồng thời: $2.700 - 80r = 1.000 + 80r \\iff 160r = 1.700 \\implies r^* = 10.625\\%, Y^* = 1.850$ tỷ đồng.",
    "examTrap": "Hiện tượng lấn át đầu tư (crowding-out): Khi chính phủ mở rộng chi tiêu tài khóa ($G$ tăng), đường $IS$ dịch chuyển sang phải làm gia tăng sản lượng $Y$, nhưng nhu cầu giao dịch tiền tệ tăng lên sẽ đẩy mức lãi suất $r$ tăng theo. Lãi suất tăng cao làm giảm bớt chi tiêu đầu tư tư nhân ($I$), khiến sản lượng thực tế tăng ít hơn so với dự kiến ban đầu của số nhân Keynes.",
    "notes": "Chính sách tiền tệ mở rộng (tăng cung tiền $M^S$) làm đường $LM$ dịch chuyển sang phải, dẫn tới mức lãi suất thị trường giảm và kích thích sản lượng tăng, qua đó triệt tiêu hiệu ứng lấn át của chính sách tài khóa.",
    "caseStudy": {
      "entity": "Kế hoạch tái thiết kinh tế dưới thời Tổng thống Ronald Reagan (Thập niên 1980)",
      "badge": "Minh chứng thực tiễn về hiện tượng lấn át đầu tư",
      "title": "Chính sách tài khóa mở rộng kết hợp tiền tệ thắt chặt đẩy lãi suất lên đỉnh",
      "context": "Đầu thập niên 1980, chính quyền Reagan thực hiện chính sách tăng mạnh chi tiêu quốc phòng và cắt giảm thuế thu nhập, trong khi Fed duy trì chính sách kiểm soát cung tiền nghiêm ngặt.",
      "analysis": "Sự kết hợp này tương ứng với việc đường $IS$ dịch mạnh sang phải trong khi đường $LM$ dịch sang trái. Lãi suất thực tế tại Mỹ bị đẩy lên mức cao kỷ lục, lấn át mạnh mẽ nguồn vốn đầu tư của các doanh nghiệp nội địa. Đồng thời, lãi suất cao thu hút dòng vốn quốc tế chảy ồ ạt vào Mỹ, đẩy đồng USD tăng giá mạnh và làm thâm hụt cán cân thương mại trầm trọng.",
      "lesson": "Chính sách tài khóa và chính sách tiền tệ có sự tương tác chặt chẽ thông qua kênh lãi suất; nếu thiếu sự phối hợp đồng bộ, chính sách mở rộng chi tiêu có thể phản tác dụng do hiệu ứng lấn át tư nhân."
    }
  },
  {
    "id": "macro-8",
    "category": "macro",
    "chapter": "Chương 10: Hệ thống tiền tệ và chính sách tiền tệ quốc gia",
    "title": "Phương trình số lượng tiền tệ Fisher (quantity equation of money) và hiện tượng siêu lạm phát (hyperinflation)",
    "formula": "M \\times V = P \\times Y \\implies \\%\\Delta M + \\%\\Delta V = \\%\\Delta P + \\%\\Delta Y",
    "description": "Biểu thị mối quan hệ cốt lõi giữa khối lượng cung tiền, tốc độ lưu thông của tiền tệ với mức giá chung và sản lượng thực tế của nền kinh tế.",
    "variables": [
      {
        "symbol": "M",
        "meaning": "Khối lượng tiền tệ danh nghĩa lưu thông (nominal money supply)",
        "unit": "Đơn vị tiền tệ (tỷ đồng, tỷ USD)"
      },
      {
        "symbol": "V",
        "meaning": "Tốc độ chu chuyển (vòng quay) của đồng tiền (velocity of money)",
        "unit": "Số vòng quay trong một năm (vô thứ nguyên)"
      },
      {
        "symbol": "P",
        "meaning": "Mức giá chung của nền kinh tế (price level)",
        "unit": "Điểm chỉ số giá"
      },
      {
        "symbol": "Y",
        "meaning": "Tổng sản lượng quốc gia thực tế (real output / real GDP)",
        "unit": "Đơn vị sản phẩm hoặc giá trị thực tế"
      }
    ],
    "example": "Nếu cung tiền $M$ tăng trưởng 10%/năm, sản lượng thực tế $Y$ tăng 3%/năm, tốc độ vòng quay tiền tệ $V$ ổn định không đổi: tỷ lệ lạm phát dài hạn sẽ là $\$\pi$ = \\%\\Delta P = 10\\% - 3\\% = 7\\%/năm$.",
    "examTrap": "Nguyên lý tính trung tính của tiền tệ (monetary neutrality): Các nhà kinh tế học cổ điển chỉ ra rằng trong dài hạn, việc gia tăng cung tiền tệ chỉ làm thay đổi các biến số danh nghĩa (như mức giá $P$, tiền lương danh nghĩa), hoàn toàn không có khả năng làm biến đổi các biến số thực tế (như sản lượng thực tế $Y$, việc làm).",
    "notes": "Hiện tượng siêu lạm phát xuất hiện khi tỷ lệ lạm phát vượt quá 50% mỗi tháng. Nguyên nhân duy nhất của mọi cuộc siêu lạm phát trong lịch sử đều bắt nguồn từ việc chính phủ thâm hụt ngân sách trầm trọng và lạm dụng việc in tiền để trang trải nợ nần.",
    "caseStudy": {
      "entity": "Thảm họa siêu lạm phát tại Cộng hòa Weimar (Đức, 1923) và Zimbabwe (2008)",
      "badge": "Bài học đắt giá về in tiền vô tội vạ",
      "title": "Tờ tiền 100 nghìn tỷ dollar và sự sụp đổ hoàn toàn của hệ thống tiền tệ",
      "context": "Năm 2008 tại Zimbabwe, chính phủ in tiền ồ ạt để bù đắp thâm hụt tài khóa, đẩy lạm phát lên tới 79,6 tỷ phần trăm mỗi tháng, giá cả hàng hóa tăng gấp đôi sau mỗi 24 giờ.",
      "analysis": "Căn cứ theo phương trình số lượng $M \\times V = P \\times Y$: Khi người dân nhận ra đồng tiền mất giá theo từng giờ, tốc độ chu chuyển tiền tệ ($V$) tăng vọt vì không ai muốn giữ tiền mặt trong túi, mọi người vội vã đổi tiền lấy bất kỳ món hàng vật chất nào. Sản lượng thực tế ($Y$) suy sụp, trong khi cung tiền ($M$) tăng theo cấp số nhân, khiến mức giá ($P$) phát nổ. Hệ thống tiền tệ bị vô hiệu hóa hoàn toàn cho đến khi chính phủ buộc phải từ bỏ đồng nội tệ và chuyển sang sử dụng đồng USD.",
      "lesson": "Đúng như khẳng định bất hủ của Milton Friedman: 'Lạm phát ở bất kỳ đâu và vào bất kỳ lúc nào cũng luôn là một hiện tượng tiền tệ'."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_DATA;
}
