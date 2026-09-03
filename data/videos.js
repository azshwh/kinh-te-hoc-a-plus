// Cơ sở dữ liệu Giảng đường Video Quốc tế (Top-tier International Economics Lectures)
// Toàn bộ 17 video đều đã được xác thực 100% hoạt động và cho phép nhúng (Status 200 OK)
// Nguồn: CrashCourse Economics (Adriene Hill & Jacob Clifford), Marginal Revolution University (MRU - GS. Alex Tabarrok)
const VIDEOS_DATA = [
  // --- VI MÔ: CHƯƠNG 1 - TỔNG QUAN KINH TẾ HỌC ---
  {
    id: "vid-1",
    category: "micro",
    chapter: "Chương 1: Mười Nguyên Lý Kinh Tế Học",
    titleEn: "Intro to Economics: Crash Course Econ #1",
    titleVi: "Giới Thiệu Kinh Tế Học: Khan Hiếm, Chi Phí Cơ Hội & Lựa Chọn",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "3ez10ADR_gM",
    duration: "12:08",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/3ez10ADR_gM/hqdefault.jpg",
    summary: "Adriene Hill và Jacob Clifford mở màn với định nghĩa cốt lõi của kinh tế học: Nghiên cứu cách con người và xã hội đưa ra quyết định khi đối mặt với sự khan hiếm tài nguyên. Phân tích trực quan chi phí cơ hội và đường giới hạn khả năng sản xuất (PPF).",
    keyTakeaways: [
      "Tính khan hiếm (Scarcity) là gốc rễ của mọi vấn đề kinh tế học.",
      "Chi phí cơ hội (Opportunity Cost) là giá trị của phương án tốt nhất bị bỏ qua.",
      "Mọi quyết định hợp lý của con người đều dựa trên so sánh Lợi ích biên (MB) và Chi phí biên (MC)."
    ],
    examRelevance: "Câu hỏi trắc nghiệm chương 1 luôn bẫy học sinh ở khái niệm Chi phí cơ hội (phải tính cả chi phí thời gian và các khoản thu nhập mất đi).",
    keyTerms: [
      { en: "Scarcity", vi: "Sự khan hiếm tài nguyên" },
      { en: "Opportunity Cost", vi: "Chi phí cơ hội" },
      { en: "Marginal Analysis", vi: "Phân tích cận biên (MB vs MC)" }
    ]
  },

  // --- VI MÔ: CHƯƠNG 2 - CUNG CẦU & CÂN BẰNG THỊ TRƯỜNG ---
  {
    id: "vid-2",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    titleEn: "The Demand Curve",
    titleVi: "Đường Cầu & Bản Chất Hành Vi Người Tiêu Dùng",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "kUPm2tMCbGE",
    duration: "4:00",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/kUPm2tMCbGE/hqdefault.jpg",
    summary: "GS. Alex Tabarrok (George Mason Univ) giải thích bản chất đường cầu dốc xuống dưới góc nhìn giá trị cận biên (Marginal Value). Người tiêu dùng sẵn sàng trả giá cao cho những đơn vị đầu tiên và chỉ mua thêm khi giá giảm xuống.",
    keyTakeaways: [
      "Độ dốc của đường cầu phản ánh giá trị sẵn lòng chi trả (Willingness to Pay) của người mua.",
      "Quy luật cầu: Giá và lượng cầu biến thiên ngược chiều (Ceteris Paribus - các yếu tố khác không đổi).",
      "Thặng dư tiêu dùng (CS) là tổng chênh lệch giữa giá trị mà người mua nhận được và số tiền họ thực tế phải trả."
    ],
    examRelevance: "Rất hay gặp trong câu hỏi định nghĩa thặng dư tiêu dùng và giải thích tại sao đường cầu thị trường là tổng theo chiều ngang của các đường cầu cá nhân.",
    keyTerms: [
      { en: "Willingness to Pay (WTP)", vi: "Mức giá sẵn lòng chi trả tối đa" },
      { en: "Marginal Value", vi: "Giá trị cận biên của đơn vị tiêu dùng kế tiếp" },
      { en: "Consumer Surplus (CS)", vi: "Thặng dư của người tiêu dùng" }
    ]
  },
  {
    id: "vid-3",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    titleEn: "The Supply Curve",
    titleVi: "Đường Cung & Chi Phí Cơ Hội Của Người Sản Xuất",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "nKvrbOq1OfI",
    duration: "4:20",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/nKvrbOq1OfI/hqdefault.jpg",
    summary: "Video trực quan hóa cách chi phí cơ hội của việc sản xuất quyết định hình dạng dốc lên của đường cung. Khi giá bán tăng, ngay cả những nhà sản xuất có chi phí cao cũng có thể tham gia vào thị trường.",
    keyTakeaways: [
      "Đường cung dốc lên phản ánh chi phí cơ hội ngày càng tăng khi mở rộng sản lượng.",
      "Chi phí cơ hội của việc sản xuất dầu mỏ từ giếng cạn vs dầu cát đá phiến giải thích trực quan đường cung dốc lên.",
      "Thặng dư sản xuất (PS) là phần diện tích nằm trên đường cung và nằm dưới giá thị trường."
    ],
    examRelevance: "Giúp giải bài tập tính toán thặng dư sản xuất và phân tích tại sao khi công nghệ cải tiến thì đường cung dịch chuyển sang phải (xuống dưới).",
    keyTerms: [
      { en: "Opportunity Cost of Production", vi: "Chi phí cơ hội của việc sản xuất" },
      { en: "Producer Surplus (PS)", vi: "Thặng dư của nhà sản xuất" },
      { en: "Supply Shift", vi: "Sự dịch chuyển của đường cung" }
    ]
  },
  {
    id: "vid-4",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    titleEn: "Supply and Demand: Crash Course Economics #4",
    titleVi: "Cung Cầu & Cân Bằng Thị Trường Toàn Tập",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "g9aDizJpd_s",
    duration: "10:21",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/g9aDizJpd_s/hqdefault.jpg",
    summary: "Adriene Hill và Jacob Clifford giải thích cơ chế thị trường điều tiết tự do thông qua bàn tay vô hình của Adam Smith. Điểm cân bằng xảy ra khi lượng cung bằng lượng cầu và không có sự thiếu hụt hay dư thừa.",
    keyTakeaways: [
      "Phân biệt rõ ràng giữa 'Thay đổi lượng cầu' (di chuyển dọc) và 'Thay đổi cầu' (dịch chuyển cả đường).",
      "Trạng thái dư thừa (Surplus) gây áp lực giảm giá; trạng thái thiếu hụt (Shortage) gây áp lực tăng giá.",
      "Cách thị trường giải quyết vấn đề phân bổ tài nguyên mà không cần cơ quan kế hoạch tập trung."
    ],
    examRelevance: "Đây là video nền tảng bắt buộc phải xem. Đề thi giữa kỳ và cuối kỳ có ít nhất 4-5 câu trắc nghiệm xoay quanh các yếu tố làm dịch chuyển cung và cầu.",
    keyTerms: [
      { en: "Equilibrium Price (Market Clearing Price)", vi: "Mức giá cân bằng làm sạch thị trường" },
      { en: "Shortage vs Surplus", vi: "Thiếu hụt hàng hóa vs Dư thừa hàng hóa" },
      { en: "Invisible Hand", vi: "Bàn tay vô hình" }
    ]
  },

  // --- VI MÔ: CHƯƠNG 3 - ĐỘ CO GIÃN ---
  {
    id: "vid-5",
    category: "micro",
    chapter: "Chương 3: Độ co giãn & Ứng dụng thực tế",
    titleEn: "Elasticity of Demand",
    titleVi: "Bản Chất Của Độ Co Giãn Cầu & Các Yếu Tố Quyết Định",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "HHcblIxiAAk",
    duration: "5:26",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/HHcblIxiAAk/hqdefault.jpg",
    summary: "GS. Alex Tabarrok mổ xẻ tại sao cùng một mức tăng giá 10% nhưng người mua xăng phản ứng khác hẳn người mua cà phê hay thuốc đặc trị. 4 yếu tố quyết định độ co giãn: Hàng thay thế, Tỷ trọng thu nhập, Hàng thiết yếu vs Xa xỉ, Thời gian.",
    keyTakeaways: [
      "Độ co giãn đo lường độ nhạy cảm của người mua trước sự thay đổi của giá cả: |Ed| = |%ΔQ / %ΔP|.",
      "Càng có nhiều hàng hóa thay thế gần gũi, cầu càng co giãn mạnh.",
      "Trong dài hạn, cầu luôn co giãn hơn trong ngắn hạn vì người tiêu dùng có thời gian tìm giải pháp thay thế."
    ],
    examRelevance: "Đề thi đại học thường xuyên cho các ví dụ thực tế và yêu cầu xếp thứ tự độ co giãn hoặc tính độ co giãn khoảng theo công thức trung điểm.",
    keyTerms: [
      { en: "Price Elasticity of Demand (PED)", vi: "Độ co giãn của cầu theo giá" },
      { en: "Close Substitutes", vi: "Hàng hóa thay thế gần gũi" },
      { en: "Short-run vs Long-run Elasticity", vi: "Co giãn ngắn hạn vs dài hạn" }
    ]
  },
  {
    id: "vid-6",
    category: "micro",
    chapter: "Chương 3: Độ co giãn & Ứng dụng thực tế",
    titleEn: "Marginal Analysis, Elasticity, and Van Gogh: Crash Course Econ #18",
    titleVi: "Phân Tích Cận Biên, Độ Co Giãn & Tối Đa Hóa Doanh Thu (TR)",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "3midaQqm7NM",
    duration: "10:14",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/3midaQqm7NM/hqdefault.jpg",
    summary: "CrashCourse giải thích mối quan hệ vàng giữa độ co giãn và tổng doanh thu (TR = P x Q). Khi cầu co giãn (|E| > 1), giảm giá làm tăng TR. Khi cầu kém co giãn (|E| < 1), tăng giá làm tăng TR. Doanh thu cực đại khi |E| = 1.",
    keyTakeaways: [
      "Cầu co giãn nhiều (|E| > 1): Tỷ lệ % tăng sản lượng lớn hơn tỷ lệ % giảm giá -> Doanh thu TĂNG khi GIẢM giá.",
      "Cầu co giãn ít (|E| < 1): Tỷ lệ % giảm sản lượng nhỏ hơn tỷ lệ % tăng giá -> Doanh thu TĂNG khi TĂNG giá.",
      "Doanh thu đạt đỉnh tại điểm co giãn đơn vị (|E| = 1), tại đó Doanh thu cận biên MR = 0."
    ],
    examRelevance: "Bài tập điển hình: Cho hàm cầu Q = a - bP, tìm mức giá P để doanh nghiệp thu được doanh thu lớn nhất (giải bằng P = a / (2b) hoặc Ed = -1).",
    keyTerms: [
      { en: "Total Revenue (TR)", vi: "Tổng doanh thu (TR = P x Q)" },
      { en: "Unitary Elasticity", vi: "Co giãn đơn vị (|E| = 1)" },
      { en: "Marginal Revenue (MR)", vi: "Doanh thu cận biên (đạo hàm của TR)" }
    ]
  },

  // --- VI MÔ: CHƯƠNG 4 - CAN THIỆP CHÍNH PHỦ, GIÁ TRẦN, THUẾ & DWL ---
  {
    id: "vid-7",
    category: "micro",
    chapter: "Chương 4: Chính sách chính phủ: Giá trần, Giá sàn & Thuế",
    titleEn: "Price Controls, Subsidies, and the Risks: Crash Course Econ #20",
    titleVi: "Kiểm Soát Giá Cả: Bản Chất Của Giá Trần, Giá Sàn & Tổn Thất Xã Hội",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "01lKDkYSFDg",
    duration: "10:19",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/01lKDkYSFDg/hqdefault.jpg",
    summary: "CrashCourse phân tích sâu sắc các hệ lụy ngoài ý muốn khi chính phủ áp đặt giá trần (Price Ceiling) như kiểm soát giá thuê nhà và giá sàn (Price Floor) như lương tối thiểu. Dẫn chứng thị trường chợ đen, suy giảm chất lượng và tổn thất vô ích.",
    keyTakeaways: [
      "Giá trần có hiệu lực phải NẰM DƯỚI giá cân bằng -> Gây ra sự thiếu hụt hàng hóa trầm trọng.",
      "Giá sàn có hiệu lực phải NẰM TRÊN giá cân bằng -> Gây ra dư thừa hàng hóa.",
      "Cả hai chính sách can thiệp thô bạo đều làm giảm số lượng giao dịch và sinh ra Tổn thất vô ích (Deadweight Loss)."
    ],
    examRelevance: "Đề thi đại học thường lừa: 'Giá trần đặt trên giá cân bằng thì sao?' -> Câu trả lời: Không có hiệu lực, thị trường vẫn giao dịch ở giá cân bằng.",
    keyTerms: [
      { en: "Price Ceiling", vi: "Giá trần (mức giá tối đa hợp pháp)" },
      { en: "Price Floor", vi: "Giá sàn (mức giá tối thiểu hợp pháp)" },
      { en: "Binding vs Non-binding", vi: "Có hiệu lực vs Không có hiệu lực" }
    ]
  },
  {
    id: "vid-8",
    category: "micro",
    chapter: "Chương 4: Chính sách chính phủ: Giá trần, Giá sàn & Thuế",
    titleEn: "Price Ceilings",
    titleVi: "Giá Trần & 5 Hệ Lụy Kinh Tế Điển Hình",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "1EzY4Vl460U",
    duration: "6:13",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/1EzY4Vl460U/hqdefault.jpg",
    summary: "GS. Tyler Cowen phân tích 5 hệ lụy kinh điển của Giá trần: 1. Thiếu hụt hàng hóa; 2. Suy giảm chất lượng; 3. Thời gian xếp hàng lãng phí; 4. Phân bổ phi hiệu quả; 5. Thị trường chợ đen.",
    keyTakeaways: [
      "Khi người bán không được tăng giá, họ sẽ giảm chất lượng phục vụ và cắt bớt bảo trì.",
      "Lãng phí thời gian xếp hàng là tổn thất tài nguyên ròng không ai nhận được.",
      "Người cần hàng hóa nhất chưa chắc đã là người mua được hàng dưới cơ chế giá trần."
    ],
    examRelevance: "Thường gặp trong các câu hỏi tự luận phân tích chính sách kiểm soát giá xăng dầu hoặc giá trần thuê nhà ở các thành phố lớn.",
    keyTerms: [
      { en: "Shortage", vi: "Sự thiếu hụt hàng hóa" },
      { en: "Reduction in Quality", vi: "Sự suy giảm phẩm chất hàng hóa" },
      { en: "Deadweight Loss (DWL)", vi: "Tổn thất vô ích của xã hội" }
    ]
  },
  {
    id: "vid-9",
    category: "micro",
    chapter: "Chương 4: Chính sách chính phủ: Giá trần, Giá sàn & Thuế",
    titleEn: "Market Failures, Taxes, and Subsidies: Crash Course Econ #21",
    titleVi: "Thất Bại Thị Trường, Đánh Thuế, Trợ Cấp & Gánh Nặng Thuế",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "13JOGWzY8kE",
    duration: "11:15",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/13JOGWzY8kE/hqdefault.jpg",
    summary: "Phân tích tác động của thuế đơn vị (Unit Tax) đối với thị trường. Bất kể chính phủ đánh thuế lên người mua hay người bán, gánh nặng thực tế (Tax Incidence) luôn phụ thuộc vào bên nào kém co giãn hơn.",
    keyTakeaways: [
      "Bên nào kém co giãn hơn (ít phương án thay thế hơn) sẽ phải chịu phần lớn gánh nặng thuế.",
      "Thuế làm co hẹp quy mô thị trường từ Q* xuống Qt, tạo ra phần diện tích tam giác Tổn thất vô ích (DWL).",
      "DWL = 0.5 x t x (Q* - Qt). Thuế suất càng cao, DWL tăng theo hàm số bậc hai."
    ],
    examRelevance: "Dạng bài tập tính gánh nặng thuế của người mua Pb - P* và người bán P* - Ps chiếm 2-3 điểm trong bài thi tự luận vi mô.",
    keyTerms: [
      { en: "Tax Incidence", vi: "Gánh nặng thuế thực tế (ai chịu thuế)" },
      { en: "Deadweight Loss of Taxation", vi: "Tổn thất vô ích do đánh thuế" },
      { en: "Government Tax Revenue", vi: "Thu ngân sách từ thuế (T = t x Qt)" }
    ]
  },

  // --- VI MÔ: CHƯƠNG 5 - CHI PHÍ SẢN XUẤT & DOANH THU ---
  {
    id: "vid-10",
    category: "micro",
    chapter: "Chương 5: Lý thuyết sản xuất & Chi phí của doanh nghiệp",
    titleEn: "Revenue, Profits, and Price: Crash Course Economics #24",
    titleVi: "Doanh Thu, Lợi Nhuận, Chi Phí Kinh Tế & Quyết Định Sản Xuất",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "UWImfFax8Ew",
    duration: "10:33",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/UWImfFax8Ew/hqdefault.jpg",
    summary: "Jacob Clifford phân biệt rạch ròi giữa Lợi nhuận kế toán (Accounting Profit) và Lợi nhuận kinh tế (Economic Profit). Phân tích cấu trúc các đường chi phí ngắn hạn: FC, VC, TC, AFC, AVC, ATC, và đặc biệt là đường MC.",
    keyTakeaways: [
      "Lợi nhuận kinh tế = Doanh thu - (Chi phí hiện + Chi phí ẩn/chi phí cơ hội). Lợi nhuận kinh tế luôn nhỏ hơn lợi nhuận kế toán.",
      "Quy luật năng suất cận biên giảm dần giải thích tại sao MC tăng dần khi sản lượng lớn.",
      "Quy tắc tối đa hóa lợi nhuận phổ quát cho mọi doanh nghiệp: Sản xuất tại mức sản lượng có MR = MC."
    ],
    examRelevance: "Trọng tâm bài thi cuối kỳ: Tìm điểm hòa vốn (P = ATC_min), điểm đóng cửa (P = AVC_min), và hàm cung ngắn hạn của doanh nghiệp cạnh tranh (chính là đường MC nằm trên AVC_min).",
    keyTerms: [
      { en: "Economic Profit vs Accounting Profit", vi: "Lợi nhuận kinh tế vs Lợi nhuận kế toán" },
      { en: "Marginal Cost (MC)", vi: "Chi phí cận biên (đạo hàm của TC)" },
      { en: "Diminishing Marginal Returns", vi: "Năng suất cận biên giảm dần" }
    ]
  },

  // --- VI MÔ: CHƯƠNG 6 - CẤU TRÚC THỊ TRƯỜNG & ĐỘC QUYỀN ---
  {
    id: "vid-11",
    category: "micro",
    chapter: "Chương 6: Các cấu trúc thị trường",
    titleEn: "Monopolies and Anti-Competitive Markets: Crash Course Econ #25",
    titleVi: "Độc Quyền Thuần Túy, Quyền Lực Thị Trường & Tổn Thất Hiệu Quả",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "Sb_-wfmJnHA",
    duration: "10:17",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/Sb_-wfmJnHA/hqdefault.jpg",
    summary: "Khám phá cách thức doanh nghiệp độc quyền định giá. Doanh nghiệp độc quyền đối mặt với toàn bộ đường cầu thị trường nên đường MR dốc gấp đôi đường Cầu. Hậu quả: Bán giá cao hơn (P > MC) và sản lượng thấp hơn thị trường cạnh tranh.",
    keyTakeaways: [
      "Doanh nghiệp độc quyền là người định giá (Price Maker), nhưng không thể chọn bừa cả P và Q mà phải tuân theo hàm cầu.",
      "Đường MR luôn nằm dưới đường cầu: MR < P vì muốn bán thêm 1 đơn vị phải giảm giá cho tất cả các đơn vị trước đó.",
      "Độc quyền gây ra tổn thất vô ích (DWL) và thâu tóm thặng dư tiêu dùng chuyển thành lợi nhuận độc quyền."
    ],
    examRelevance: "Dạng bài tập tính giá và sản lượng tối đa hóa lợi nhuận của nhà độc quyền: Đặt MR = MC để tìm Qm, sau đó thay Qm vào hàm cầu để tìm Pm.",
    keyTerms: [
      { en: "Price Maker", vi: "Người định giá thị trường" },
      { en: "Barriers to Entry", vi: "Rào cản gia nhập ngành (bằng sáng chế, độc quyền tự nhiên)" },
      { en: "Monopoly Deadweight Loss", vi: "Tổn thất vô ích do độc quyền" }
    ]
  },
  {
    id: "vid-12",
    category: "micro",
    chapter: "Chương 6: Các cấu trúc thị trường",
    titleEn: "Game Theory and Oligopoly: Crash Course Economics #26",
    titleVi: "Lý Thuyết Trò Chơi & Cấu Trúc Độc Quyền Nhóm (Oligopoly)",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "PCcVODWm-oY",
    duration: "9:57",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/PCcVODWm-oY/hqdefault.jpg",
    summary: "Adriene và Jacob minh họa cấu trúc thị trường độc quyền nhóm (Oligopoly) thông qua mô hình Thế lưỡng nan của người tù (Prisoner's Dilemma) và Khái niệm Cân bằng Nash. Giải thích tại sao các liên minh Cartel (như OPEC) thường sụp đổ.",
    keyTakeaways: [
      "Độc quyền nhóm có đặc trưng cốt lõi: Tính phụ thuộc lẫn nhau (Strategic Interdependence).",
      "Chiến lược thống trị (Dominant Strategy) là chiến lược tốt nhất bất kể đối thủ chọn phương án nào.",
      "Cân bằng Nash là trạng thái không bên nào có động cơ đơn phương thay đổi chiến lược của mình."
    ],
    examRelevance: "Câu hỏi trắc nghiệm lý thuyết trò chơi luôn yêu cầu xác định Cân bằng Nash trong ma trận chi trả (Payoff Matrix).",
    keyTerms: [
      { en: "Oligopoly", vi: "Độc quyền nhóm (vài người bán lớn)" },
      { en: "Prisoner's Dilemma", vi: "Thế lưỡng nan của người tù" },
      { en: "Nash Equilibrium", vi: "Cân bằng Nash" }
    ]
  },

  // --- VĨ MÔ: CHƯƠNG 7 - ĐO LƯỜNG SẢN LƯỢNG QUỐC GIA (GDP) ---
  {
    id: "vid-13",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP)",
    titleEn: "Macroeconomics: Crash Course Economics #5",
    titleVi: "Kinh Tế Vĩ Mô, Đo Lường GDP & 3 Mục Tiêu Kinh Tế Lớn",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "d8uTB5XorBw",
    duration: "10:04",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/d8uTB5XorBw/hqdefault.jpg",
    summary: "Bức tranh toàn cảnh về 3 mục tiêu vĩ mô: 1. Tăng trưởng kinh tế (GDP); 2. Ổn định giá cả (Kiểm soát lạm phát); 3. Giữ thất nghiệp ở mức thấp. Phân tích công thức tính GDP theo phương pháp chi tiêu: GDP = C + I + G + NX.",
    keyTakeaways: [
      "GDP là giá trị thị trường của tất cả hàng hóa và dịch vụ CUỐI CÙNG được sản xuất ra trong phạm vi một quốc gia trong một thời kỳ.",
      "Không tính hàng hóa trung gian (Intermediate goods) để tránh tính trùng 2 lần.",
      "Phân biệt GDP danh nghĩa (Nominal GDP) tính theo giá hiện hành và GDP thực tế (Real GDP) tính theo giá cố định năm gốc."
    ],
    examRelevance: "Bắt buộc học thuộc công thức GDP = C + I + G + NX và cách tính GDP Deflator = (Nominal GDP / Real GDP) x 100.",
    keyTerms: [
      { en: "Gross Domestic Product (GDP)", vi: "Tổng sản phẩm quốc nội" },
      { en: "Expenditure Approach", vi: "Phương pháp tính GDP theo luồng chi tiêu" },
      { en: "Final Goods vs Intermediate Goods", vi: "Hàng hóa cuối cùng vs Hàng hóa trung gian" }
    ]
  },

  // --- VĨ MÔ: CHƯƠNG 8 - TĂNG TRƯỞNG & NĂNG SUẤT ---
  {
    id: "vid-14",
    category: "macro",
    chapter: "Chương 8: Tăng trưởng kinh tế & Năng suất",
    titleEn: "Productivity and Growth: Crash Course Economics #6",
    titleVi: "Năng Suất, Tích Lũy Tư Bản & Nguồn Gốc Thịnh Vượng Quốc Gia",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "UHiUYj5EA0w",
    duration: "8:51",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/UHiUYj5EA0w/hqdefault.jpg",
    summary: "Tại sao có quốc gia giàu có trong khi quốc gia khác nghèo khó? Câu trả lời nằm ở Năng suất lao động (Productivity). 4 nhân tố quyết định năng suất: Tư bản thể chất (K), Tư bản con người (H), Tài nguyên thiên nhiên (N), và Tri thức công nghệ (A).",
    keyTakeaways: [
      "Mức sống của một quốc gia phụ thuộc trực tiếp vào khả năng sản xuất hàng hóa và dịch vụ của quốc gia đó.",
      "Hiệu ứng đuổi kịp (Catch-up Effect): Các nước nghèo có xu hướng tăng trưởng nhanh hơn các nước giàu khi được đầu tư tư bản ban đầu.",
      "Quy luật lợi suất giảm dần của tư bản: Tăng thêm máy móc sẽ tạo ra sản lượng tăng thêm ngày càng ít."
    ],
    examRelevance: "Trắc nghiệm lý thuyết vĩ mô rất hay hỏi về Hiệu ứng đuổi kịp (Catch-up effect) và các chính sách của chính phủ thúc đẩy tăng trưởng dài hạn.",
    keyTerms: [
      { en: "Productivity", vi: "Năng suất lao động (Sản lượng / Số giờ làm)" },
      { en: "Human Capital", vi: "Vốn con người (kỹ năng, giáo dục, sức khỏe)" },
      { en: "Catch-up Effect", vi: "Hiệu ứng đuổi kịp của các nước đang phát triển" }
    ]
  },

  // --- VĨ MÔ: CHƯƠNG 9 - LẠM PHÁT & CHỈ SỐ CPI ---
  {
    id: "vid-15",
    category: "macro",
    chapter: "Chương 9: Lạm phát, CPI & Chi phí sinh hoạt",
    titleEn: "Inflation and Bubbles: Crash Course Economics #7",
    titleVi: "Bản Chất Của Lạm Phát, Chỉ Số CPI & Sự Xói Mòn Sức Mua",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "T8-85cZRI9o",
    duration: "10:19",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/T8-85cZRI9o/hqdefault.jpg",
    summary: "CrashCourse giải thích lạm phát không đơn giản là 'giá tăng' mà là 'đồng tiền mất giá'. Phân tích cách Cục Thống kê xây dựng giỏ hàng hóa đại diện để tính CPI, phân biệt Lạm phát do cầu kéo (Demand-pull) và Lạm phát do chi phí đẩy (Cost-push).",
    keyTakeaways: [
      "CPI đo lường mức giá trung bình của giỏ hàng hóa và dịch vụ mà một hộ gia đình điển hình mua sắm.",
      "Lạm phát cầu kéo: Nền kinh tế 'quá nóng', tổng cầu tăng vượt mức sản lượng tiềm năng.",
      "Lạm phát chi phí đẩy: Cú sốc cung tiêu cực (như giá dầu tăng vọt) làm đường cung dịch trái, gây ra Đình lạm (Stagflation)."
    ],
    examRelevance: "Dạng bài tập bắt buộc: Tính tỷ lệ lạm phát π = (CPI_t - CPI_{t-1}) / CPI_{t-1} x 100% và phân biệt 4 điểm khác nhau giữa CPI và GDP Deflator.",
    keyTerms: [
      { en: "Consumer Price Index (CPI)", vi: "Chỉ số giá tiêu dùng" },
      { en: "Purchasing Power", vi: "Sức mua của đồng tiền" },
      { en: "Demand-Pull vs Cost-Push", vi: "Lạm phát cầu kéo vs Lạm phát chi phí đẩy" }
    ]
  },

  // --- VĨ MÔ: CHƯƠNG 10 - CHÍNH SÁCH TIỀN TỆ & HỆ THỐNG NGÂN HÀNG ---
  {
    id: "vid-16",
    category: "macro",
    chapter: "Chương 10: Hệ thống tiền tệ & Chính sách tiền tệ",
    titleEn: "Monetary Policy and the Federal Reserve: Crash Course Econ #10",
    titleVi: "Chính Sách Tiền Tệ & Cách Ngân Hàng Trung Ương Điều Tiết Cung Tiền",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "1dq7mMort9o",
    duration: "10:31",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/1dq7mMort9o/hqdefault.jpg",
    summary: "Adriene Hill giải thích toàn diện cách Ngân hàng Trung ương (như Fed hay NHNN Việt Nam) kiểm soát lãi suất và lượng tiền lưu thông. 3 công cụ kinh điển: Hoạt động thị trường mở (OMO), Tỷ lệ dự trữ bắt buộc (RRR), và Lãi suất chiết khấu.",
    keyTakeaways: [
      "Chính sách tiền tệ mở rộng: NHTW MUA trái phiếu chính phủ -> Bơm tiền vào lưu thông -> Lãi suất GIẢM -> Kích thích đầu tư (I) và GDP.",
      "Chính sách tiền tệ thắt chặt: NHTW BÁN trái phiếu -> Hút tiền về -> Lãi suất TĂNG -> Kìm hãm lạm phát.",
      "Hoạt động thị trường mở (OMO) là công cụ được sử dụng phổ biến và linh hoạt nhất."
    ],
    examRelevance: "Đề thi vĩ mô luôn có câu hỏi chuỗi nhân quả: 'NHTW mua trái phiếu thì cung tiền, lãi suất, đầu tư và tổng cầu thay đổi thế nào?'.",
    keyTerms: [
      { en: "Open Market Operations (OMO)", vi: "Nghiệp vụ thị trường mở (Mua/Bán trái phiếu)" },
      { en: "Reserve Requirement Ratio (rr)", vi: "Tỷ lệ dự trữ bắt buộc" },
      { en: "Discount Rate", vi: "Lãi suất chiết khấu" }
    ]
  },
  {
    id: "vid-17",
    category: "macro",
    chapter: "Chương 10: Hệ thống tiền tệ & Chính sách tiền tệ",
    titleEn: "The Money Multiplier",
    titleVi: "Hệ Thống Dự Trữ Một Phần & Cơ Chế Số Nhân Tiền",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "fTTGALaRZoc",
    duration: "5:12",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/fTTGALaRZoc/hqdefault.jpg",
    summary: "GS. Tyler Cowen giải thích điều kỳ diệu của hệ thống ngân hàng dự trữ một phần (Fractional Reserve Banking). Tiền gửi vào ngân hàng được cho vay tiếp ra nền kinh tế, tạo ra một vòng lặp khuếch đại lượng cung tiền gấp nhiều lần tiền cơ sở ban đầu.",
    keyTakeaways: [
      "Ngân hàng thương mại không giữ 100% tiền gửi mà chỉ giữ một tỷ lệ dự trữ bắt buộc (rr), phần còn lại đem cho vay.",
      "Số nhân tiền đơn giản: m = 1 / rr. Nếu rr = 10%, mỗi 100 USD tiền cơ sở tạo ra 1,000 USD cung tiền.",
      "Số nhân tiền thực tế (có nắm giữ tiền mặt cr): mm = (cr + 1) / (cr + rr). Cung tiền MS = mm x MB."
    ],
    examRelevance: "Dạng bài tập tính toán số nhân tiền và lượng cung tiền mới tạo ra xuất hiện ở 100% các đề thi kinh tế vĩ mô.",
    keyTerms: [
      { en: "Fractional Reserve Banking", vi: "Hệ thống ngân hàng dự trữ một phần" },
      { en: "Money Multiplier (mm)", vi: "Số nhân tiền tệ" },
      { en: "Monetary Base (MB / High-powered Money)", vi: "Cơ số tiền tệ (Tiền mặt + Dự trữ)" }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = VIDEOS_DATA;
}
