// Cơ sở dữ liệu Giảng đường Video Quốc tế (Top-tier International Economics Lectures)
// Nguồn: Marginal Revolution University (MRU), CrashCourse Economics, Jacob Clifford (ACDC Econ), Khan Academy
const VIDEOS_DATA = [
  // --- VI MÔ: CUNG CẦU & THỊ TRƯỜNG ---
  {
    id: "vid-1",
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
    summary: "GS. Alex Tabarrok giải thích bản chất đường cầu dốc xuống dưới góc nhìn giá trị cận biên (Marginal Value). Người tiêu dùng sẵn sàng trả giá cao cho những đơn vị đầu tiên và chỉ mua thêm khi giá giảm xuống.",
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
    id: "vid-2",
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
    id: "vid-3",
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
  {
    id: "vid-4",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    titleEn: "Price Ceilings and Price Floors",
    titleVi: "Kiểm Soát Giá Cả: Bản Chất Của Giá Trần & Giá Sàn",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "01lPE7bhwaE",
    duration: "6:25",
    rating: "4.8/5",
    thumbnail: "https://img.youtube.com/vi/01lPE7bhwaE/hqdefault.jpg",
    summary: "Video phân tích tại sao kiểm soát giá trần (như giá thuê nhà) lại dẫn đến tình trạng thiếu hụt căn hộ, suy giảm chất lượng nhà ở và xuất hiện thị trường chợ đen.",
    keyTakeaways: [
      "Giá trần chỉ có hiệu lực khi thấp hơn giá cân bằng thị trường ($P_{trần} < P^*$).",
      "5 hệ quả của giá trần: 1. Thiếu hụt; 2. Giảm chất lượng sản phẩm; 3. Lãng phí thời gian xếp hàng; 4. Phân bổ kém hiệu quả; 5. Thị trường ngầm (chợ đen).",
      "Giá sàn (như lương tối thiểu) gây dư thừa lao động ít kinh nghiệm nếu đặt cao hơn mức cân bằng."
    ],
    examRelevance: "Dạng bài kinh điển: Tính toán lượng thiếu hụt khi chính phủ áp giá trần và xác định tổn thất vô ích (DWL).",
    keyTerms: [
      { en: "Price Ceiling", vi: "Giá trần (mức giá tối đa hợp pháp)" },
      { en: "Price Floor", vi: "Giá sàn (mức giá tối thiểu hợp pháp)" },
      { en: "Search Cost / Queuing", vi: "Chi phí tìm kiếm / Xếp hàng" }
    ]
  },
  {
    id: "vid-5",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu & Cân bằng thị trường",
    titleEn: "Taxes, Subsidies, and Deadweight Loss",
    titleVi: "Tác Động Của Thuế, Trợ Cấp & Tổn Thất Vô Ích (DWL)",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "5OihaB_c5_8",
    duration: "7:40",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/5OihaB_c5_8/hqdefault.jpg",
    summary: "GS. Tyler Cowen phân tích 'Miếng nêm thuế' (Tax Wedge). Dù luật định ai là người nộp thuế (người mua hay người bán), gánh nặng kinh tế thực tế luôn được chia sẻ dựa trên độ co giãn tương đối.",
    keyTakeaways: [
      "Thuế tạo ra một khoảng chênh lệch giữa giá người mua trả ($P_b$) và giá người bán nhận ($P_s$): $P_b - P_s = t$.",
      "Tổn thất vô ích (DWL) là phần thặng dư xã hội bị bốc hơi do các giao dịch có lợi ích bị ngăn cản bởi thuế.",
      "Bên nào có độ co giãn kém hơn (ít linh hoạt hơn, không có hàng thay thế) sẽ phải chịu phần lớn gánh nặng thuế."
    ],
    examRelevance: "Chiếm tới 2-3 điểm trong bài tập tự luận: Vẽ tam giác DWL, tính diện tích doanh thu thuế của chính phủ và xác định phần trăm thuế mỗi bên gánh chịu.",
    keyTerms: [
      { en: "Deadweight Loss (DWL)", vi: "Tổn thất vô ích / Mất mát xã hội" },
      { en: "Tax Incidence", vi: "Sự phân chia gánh nặng thuế thực tế" },
      { en: "Tax Wedge", vi: "Miếng nêm thuế" }
    ]
  },

  // --- VI MÔ: ĐỘ CO GIÃN ---
  {
    id: "vid-6",
    category: "micro",
    chapter: "Chương 3: Độ co giãn của Cung & Cầu",
    titleEn: "Elasticity of Demand",
    titleVi: "Bản Chất Của Độ Co Giãn Cầu & Các Yếu Tố Quyết Định",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "HHcblIxiAAk",
    duration: "5:50",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/HHcblIxiAAk/hqdefault.jpg",
    summary: "Giải thích tại sao một số mặt hàng (thuốc chữa bệnh, xăng xe) người tiêu dùng vẫn phải mua dù giá tăng cao, trong khi mặt hàng khác (vé máy bay nghỉ dưỡng) lượng cầu giảm sút mạnh khi giá chỉ nhích nhẹ.",
    keyTakeaways: [
      "4 yếu tố quyết định độ co giãn: Hàng thay thế sẵn có, Tầm quan trọng trong ngân sách, Hàng thiết yếu vs Xa xỉ, và Khung thời gian phản ứng.",
      "Trong dài hạn, cầu về mọi hàng hóa luôn co giãn nhiều hơn trong ngắn hạn vì người tiêu dùng có thời gian tìm giải pháp thay thế.",
      "Mối quan hệ mật thiết với Tổng doanh thu ($TR = P \\times Q$)."
    ],
    examRelevance: "Dạng bài trắc nghiệm hay hỏi: 'Tại sao sau cú sốc dầu mỏ năm 1973, trong dài hạn lượng tiêu thụ xăng giảm nhiều hơn so với ngắn hạn?'.",
    keyTerms: [
      { en: "Price Elasticity of Demand (PED)", vi: "Độ co giãn của cầu theo giá" },
      { en: "Substitutability", vi: "Khả năng thay thế lẫn nhau của sản phẩm" },
      { en: "Total Revenue Test", vi: "Quy tắc kiểm tra tổng doanh thu" }
    ]
  },
  {
    id: "vid-7",
    category: "micro",
    chapter: "Chương 3: Độ co giãn của Cung & Cầu",
    titleEn: "Elasticity and Total Revenue",
    titleVi: "Độ Co Giãn & Tối Đa Hóa Tổng Doanh Thu (TR)",
    channel: "Jacob Clifford",
    channelName: "Jacob Clifford (ACDC Econ)",
    youtubeId: "7K_3qKx8U0k",
    duration: "6:15",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/7K_3qKx8U0k/hqdefault.jpg",
    summary: "Thầy Jacob Clifford hướng dẫn quy tắc bàn tay vàng để xác định ngay lập tức: Khi nào doanh nghiệp nên tăng giá và khi nào nên giảm giá để tối đa hóa doanh thu.",
    keyTakeaways: [
      "Cầu co giãn nhiều (|E| > 1): Giá và Doanh thu đi ngược chiều (Muốn tăng TR phải GIẢM giá).",
      "Cầu co giãn ít (|E| < 1): Giá và Doanh thu đi cùng chiều (Muốn tăng TR phải TĂNG giá).",
      "Doanh thu đạt đỉnh tại điểm co giãn đơn vị (|E| = 1)."
    ],
    examRelevance: "Cực kỳ thường gặp trong bài thi trắc nghiệm kinh tế học các trường NEU, UEH, FTU.",
    keyTerms: [
      { en: "Elastic Demand", vi: "Cầu co giãn nhiều" },
      { en: "Inelastic Demand", vi: "Cầu co giãn ít / không co giãn nhiều" },
      { en: "Unit Elastic", vi: "Co giãn đơn vị" }
    ]
  },

  // --- VI MÔ: CHI PHÍ & CẤU TRÚC THỊ TRƯỜNG ---
  {
    id: "vid-8",
    category: "micro",
    chapter: "Chương 5: Lý thuyết sản xuất & Chi phí",
    titleEn: "Short-Run Cost Curves (MC, ATC, AVC, AFC)",
    titleVi: "Bản Đồ Đường Chi Phí Ngắn Hạn & Quy Tắc Cực Tiểu",
    channel: "Jacob Clifford",
    channelName: "Jacob Clifford (ACDC Econ)",
    youtubeId: "qYKJdooVim4",
    duration: "7:12",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/qYKJdooVim4/hqdefault.jpg",
    summary: "Jacob Clifford vẽ từng bước các đường chi phí ngắn hạn: Tại sao MC có dạng móc câu (Nike Swoosh), tại sao ATC và AVC có dạng chữ U, và tại sao MC luôn đi qua điểm đáy của ATC và AVC.",
    keyTakeaways: [
      "Quy luật năng suất cận biên giảm dần (Diminishing Marginal Returns) là nguồn gốc khiến đường MC dốc lên.",
      "Khi $MC < ATC$, $ATC$ đang giảm. Khi $MC > ATC$, $ATC$ đang tăng. Do đó $MC$ cắt $ATC$ tại $ATC_{min}$.",
      "Khoảng cách thẳng đứng giữa $ATC$ và $AVC$ chính là $AFC = FC / Q$, khoảng cách này ngày càng thu hẹp lại khi $Q$ tăng."
    ],
    examRelevance: "90% đề thi có câu hỏi: 'Đường chi phí cận biên MC cắt đường nào tại điểm cực tiểu của đường đó?'.",
    keyTerms: [
      { en: "Diminishing Marginal Returns", vi: "Năng suất cận biên giảm dần" },
      { en: "Average Total Cost (ATC)", vi: "Chi phí trung bình" },
      { en: "Marginal Cost (MC)", vi: "Chi phí cận biên" }
    ]
  },
  {
    id: "vid-9",
    category: "micro",
    chapter: "Chương 6: Cấu trúc thị trường & Tối đa hóa lợi nhuận",
    titleEn: "Perfect Competition vs Monopoly",
    titleVi: "So Sánh Cạnh Tranh Hoàn Hảo & Độc Quyền Thuần Túy",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "Sb__oGUet48",
    duration: "11:20",
    rating: "4.8/5",
    thumbnail: "https://img.youtube.com/vi/Sb__oGUet48/hqdefault.jpg",
    summary: "So sánh 2 thái cực của cấu trúc thị trường: Doanh nghiệp chấp nhận giá trong cạnh tranh hoàn hảo vs Doanh nghiệp định giá trong độc quyền.",
    keyTakeaways: [
      "Cạnh tranh hoàn hảo: $P = MR = MC$, không có sức mạnh thị trường, lợi nhuận kinh tế trong dài hạn bằng 0.",
      "Độc quyền: $MR < P$, doanh nghiệp đặt giá $P > MC$, thu lợi nhuận siêu ngạch và gây tổn thất xã hội $DWL$.",
      "Rào cản gia nhập (Barriers to Entry) là điều kiện cốt lõi tạo ra và duy trì thế độc quyền."
    ],
    examRelevance: "Dạng bài so sánh hiệu quả xã hội (Pareto efficiency) giữa thị trường cạnh tranh và độc quyền.",
    keyTerms: [
      { en: "Price Taker vs Price Maker", vi: "Người chấp nhận giá vs Người định giá" },
      { en: "Barriers to Entry", vi: "Rào cản gia nhập thị trường" },
      { en: "Deadweight Loss of Monopoly", vi: "Tổn thất vô ích do độc quyền gây ra" }
    ]
  },

  // --- VĨ MÔ: GDP & ĐO LƯỜNG SẢN LƯỢNG ---
  {
    id: "vid-10",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    titleEn: "Macroeconomics & GDP: Crash Course Economics #5",
    titleVi: "Kinh Tế Vĩ Mô & Tổng Sản Phẩm Quốc Nội (GDP)",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "d8uTB5XorBw",
    duration: "10:22",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/d8uTB5XorBw/hqdefault.jpg",
    summary: "Tổng quan về 3 mục tiêu vĩ mô trọng yếu: 1. Tăng trưởng kinh tế (GDP); 2. Ổn định giá cả (Kiểm soát lạm phát); 3. Toàn dụng việc làm (Giảm thất nghiệp). Cách đo lường GDP theo chi tiêu $C + I + G + NX$.",
    keyTakeaways: [
      "GDP chỉ tính hàng hóa và dịch vụ CUỐI CÙNG sản xuất TRONG NĂM trên lãnh thổ quốc gia.",
      "Khác biệt quan trọng giữa GDP danh nghĩa (bị ảnh hưởng bởi mức giá) và GDP thực tế (loại bỏ lạm phát).",
      "Những điều GDP không đo lường được: Kinh tế ngầm, việc nội trợ, ô nhiễm môi trường, và sự bất bình đẳng giàu nghèo."
    ],
    examRelevance: "Cực kỳ nhiều bẫy: Mua bán cổ phiếu, chi trợ cấp lương hưu (Tr), hoặc bán lại xe máy cũ có tính vào GDP không? (Đáp án: Đều KHÔNG tính!).",
    keyTerms: [
      { en: "Gross Domestic Product (GDP)", vi: "Tổng sản phẩm quốc nội" },
      { en: "Nominal vs Real GDP", vi: "GDP danh nghĩa vs GDP thực tế" },
      { en: "Transfer Payments (Tr)", vi: "Chi chuyển nhượng (trợ cấp xã hội)" }
    ]
  },
  {
    id: "vid-11",
    category: "macro",
    chapter: "Chương 7: Đo lường sản lượng quốc gia (GDP & GNP)",
    titleEn: "Nominal GDP vs. Real GDP and the GDP Deflator",
    titleVi: "GDP Danh Nghĩa, GDP Thực Tế & Chỉ Số Điều Chỉnh GDP",
    channel: "Khan Academy",
    channelName: "Khan Academy",
    youtubeId: "29S7xFzcaDQ",
    duration: "9:35",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/29S7xFzcaDQ/hqdefault.jpg",
    summary: "Sal Khan hướng dẫn từng phép tính cụ thể với số liệu năm gốc để thấy được tại sao việc cố định mức giá giúp đo lường chính xác lượng sản phẩm thực tế được tạo ra trong nền kinh tế.",
    keyTakeaways: [
      "Năm gốc luôn có $GDP_n = GDP_r$, do đó $DGDP = 100$.",
      "Chỉ số điều chỉnh GDP: $Deflator = (GDP_n / GDP_r) \\times 100$.",
      "Tốc độ tăng trưởng kinh tế ($g$) BẮT BUỘC phải dùng $GDP_r$ để tính toán."
    ],
    examRelevance: "Xuất hiện trong các bài toán tính toán số liệu GDP nhiều năm và xác định tỷ lệ lạm phát thông qua GDP Deflator.",
    keyTerms: [
      { en: "Base Year", vi: "Năm gốc (năm cơ sở)" },
      { en: "GDP Deflator", vi: "Hệ số giảm phát GDP / Chỉ số điều chỉnh GDP" },
      { en: "Economic Growth Rate", vi: "Tốc độ tăng trưởng kinh tế thực tế" }
    ]
  },

  // --- VĨ MÔ: LẠM PHÁT & THẤT NGHIỆP ---
  {
    id: "vid-12",
    category: "macro",
    chapter: "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    titleEn: "Inflation: Crash Course Economics #7",
    titleVi: "Bản Chất Lạm Phát, CPI & Sự Xói Mòn Sức Mua",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "UMAELCrJmq0",
    duration: "10:50",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/UMAELCrJmq0/hqdefault.jpg",
    summary: "Adriene và Jacob giải thích lạm phát là gì, cách cục thống kê xây dựng giỏ hàng hóa đại diện để tính CPI, và hai nguyên nhân cốt lõi gây lạm phát: Lạm phát do cầu kéo (Demand-pull) và Lạm phát do chi phí đẩy (Cost-push).",
    keyTakeaways: [
      "CPI dùng giỏ hàng cố định của người tiêu dùng, tính cả hàng nhập khẩu.",
      "Lạm phát cầu kéo: Quá nhiều tiền đuổi theo quá ít hàng hóa ($AD$ dịch phải).",
      "Lạm phát chi phí đẩy: Chi phí sản xuất tăng vọt (giá dầu, nguyên liệu) làm $SRAS$ dịch trái.",
      "Hiệu ứng Fisher: Lãi suất thực $r \\approx i - \\pi$ (Lãi suất danh nghĩa trừ đi lạm phát)."
    ],
    examRelevance: "Phân biệt cực kỳ quan trọng giữa CPI và GDP Deflator trong đề thi trắc nghiệm đại học.",
    keyTerms: [
      { en: "Consumer Price Index (CPI)", vi: "Chỉ số giá tiêu dùng" },
      { en: "Demand-Pull Inflation", vi: "Lạm phát do cầu kéo" },
      { en: "Cost-Push Inflation", vi: "Lạm phát do chi phí đẩy" }
    ]
  },
  {
    id: "vid-13",
    category: "macro",
    chapter: "Chương 8: Chi phí sinh hoạt, Lạm phát & Thất nghiệp",
    titleEn: "Unemployment Rate and Types of Unemployment",
    titleVi: "Tỷ Lệ Thất Nghiệp & 3 Loại Thất Nghiệp Trong Nền Kinh Tế",
    channel: "Jacob Clifford",
    channelName: "Jacob Clifford (ACDC Econ)",
    youtubeId: "1o0G09b0o9s",
    duration: "8:05",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/1o0G09b0o9s/hqdefault.jpg",
    summary: "Phân định rõ ràng: Ai được tính là thất nghiệp? Ai không thuộc lực lượng lao động? Và 3 dạng thất nghiệp: Ma sát, Cơ cấu, Chu kỳ.",
    keyTakeaways: [
      "Lực lượng lao động ($LF$) = Người có việc làm ($E$) + Người thất nghiệp ($U$).",
      "Người nản chí, sinh viên đi học toàn thời gian, người nội trợ KHÔNG thuộc $LF$.",
      "Thất nghiệp tự nhiên ($u_n$) = Thất nghiệp ma sát + Thất nghiệp cơ cấu. Khi kinh tế toàn dụng ($Y = Y^*$), thất nghiệp chu kỳ bằng 0."
    ],
    examRelevance: "Dạng bài tính toán tỷ lệ thất nghiệp và tỷ lệ tham gia lực lượng lao động từ số liệu điều tra dân số.",
    keyTerms: [
      { en: "Labor Force (LF)", vi: "Lực lượng lao động" },
      { en: "Natural Rate of Unemployment (NRU)", vi: "Tỷ lệ thất nghiệp tự nhiên" },
      { en: "Discouraged Workers", vi: "Những người nản chí không còn tìm việc" }
    ]
  },

  // --- VĨ MÔ: TIỀN TỆ & NGÂN HÀNG TRUNG ƯƠNG ---
  {
    id: "vid-14",
    category: "macro",
    chapter: "Chương 9: Tiền tệ, Hệ thống ngân hàng & Số nhân tiền",
    titleEn: "Monetary Policy and the Federal Reserve: Crash Course #10",
    titleVi: "Chính Sách Tiền Tệ & Ngân Hàng Trung Ương",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "1dq7mM8TqQU",
    duration: "10:35",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/1dq7mM8TqQU/hqdefault.jpg",
    summary: "Video giải thích hệ thống ngân hàng dự trữ một phần (Fractional Reserve Banking), cơ chế các ngân hàng thương mại tạo ra tiền và 3 công cụ kinh điển của NHTW để điều hành cung tiền.",
    keyTakeaways: [
      "3 công cụ của NHTW: 1. Nghiệp vụ thị trường mở (OMO - Mua/Bán trái phiếu); 2. Tỷ lệ dự trữ bắt buộc; 3. Lãi suất tái chiết khấu.",
      "Chính sách tiền tệ mở rộng (bơm tiền): Lãi suất giảm -> Khuyến khích đầu tư $I$ và tiêu dùng $C$ -> Tổng cầu $AD$ tăng.",
      "Số nhân tiền ngân hàng: Mỗi đồng tiền gửi mới sẽ sinh sôi nảy nở qua chuỗi cho vay tiếp theo của hệ thống ngân hàng."
    ],
    examRelevance: "Câu hỏi về chính sách tiền tệ xuất hiện trong 100% đề thi vĩ mô cuối kỳ.",
    keyTerms: [
      { en: "Open Market Operations (OMO)", vi: "Nghiệp vụ thị trường mở" },
      { en: "Reserve Requirement Ratio", vi: "Tỷ lệ dự trữ bắt buộc" },
      { en: "Discount Rate", vi: "Lãi suất chiết khấu / Lãi suất tái chiết khấu" }
    ]
  },
  {
    id: "vid-15",
    category: "macro",
    chapter: "Chương 9: Tiền tệ, Hệ thống ngân hàng & Số nhân tiền",
    titleEn: "Fractional Reserve Banking and the Money Multiplier",
    titleVi: "Hệ Thống Dự Trữ Một Phần & Cơ Chế Số Nhân Tiền",
    channel: "MRUniversity",
    channelName: "Marginal Revolution University",
    youtubeId: "fTTGALaRZoc",
    duration: "6:50",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/fTTGALaRZoc/hqdefault.jpg",
    summary: "GS. Alex Tabarrok trực quan hóa bảng cân đối kế toán của ngân hàng (Assets vs Liabilities) và giải thích chi tiết cách tiền mặt biến thành tiền gửi thanh toán qua hệ thống số nhân tiền.",
    keyTakeaways: [
      "Cơ sở tiền (MB - Tiền mạnh) bao gồm tiền mặt trong lưu thông và tiền dự trữ tại NHTW.",
      "Khối tiền tệ (M1, M2) lớn hơn nhiều so với MB nhờ có số nhân tiền ($m_M$).",
      "Công thức số nhân tiền toàn diện: $m_M = (cr + 1) / (cr + rr)$."
    ],
    examRelevance: "Dạng bài toán giải số nhân tiền và tính lượng cung tiền mới được tạo ra khi NHTW mua vào trái phiếu chính phủ.",
    keyTerms: [
      { en: "Monetary Base (High-powered Money)", vi: "Cơ sở tiền tệ / Tiền mạnh" },
      { en: "Money Multiplier", vi: "Số nhân tiền" },
      { en: "Fractional Reserve Banking", vi: "Hệ thống ngân hàng dự trữ một phần" }
    ]
  },

  // --- VĨ MÔ: CHÍNH SÁCH TÀI KHÓA & TỔNG CẦU ---
  {
    id: "vid-16",
    category: "macro",
    chapter: "Chương 10 & 11: Tổng cung - Tổng cầu & Chính sách tài khóa",
    titleEn: "Fiscal Policy and Stimulus: Crash Course Economics #8",
    titleVi: "Chính Sách Tài Khóa, Kích Thích Kinh Tế & Số Nhân Chi Tiêu",
    channel: "CrashCourse",
    channelName: "CrashCourse Economics",
    youtubeId: "gGo4p85v6pI",
    duration: "11:55",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/gGo4p85v6pI/hqdefault.jpg",
    summary: "Cách Chính phủ sử dụng Ngân sách (Chi tiêu $G$ và Thuế $T$) để ổn định chu kỳ kinh tế theo trường phái Keynes. Phân tích chi tiết về số nhân chi tiêu và hiện tượng lấn át đầu tư tư nhân (Crowding Out).",
    keyTakeaways: [
      "Chính sách tài khóa mở rộng: Tăng $G$ hoặc Giảm $T$ để kích thích tổng cầu vượt qua suy thoái.",
      "Hiệu ứng số nhân: 1 đồng chi tiêu của chính phủ tạo ra nhiều hơn 1 đồng sản lượng quốc gia ($m = 1 / (1 - MPC)$).",
      "Hiện tượng lấn át (Crowding Out): Thâm hụt ngân sách đẩy lãi suất tăng, làm giảm đầu tư tư nhân ($I$)."
    ],
    examRelevance: "Bài tập định lượng về tính toán mức thay đổi sản lượng $\\Delta Y$ khi chính phủ thay đổi chi tiêu ngân sách hoặc thuế.",
    keyTerms: [
      { en: "Fiscal Policy", vi: "Chính sách tài khóa" },
      { en: "Expenditure Multiplier", vi: "Số nhân chi tiêu chính phủ" },
      { en: "Crowding-Out Effect", vi: "Hiện tượng thoái lui đầu tư / Hiện tượng lấn át" }
    ]
  },
  {
    id: "vid-17",
    category: "macro",
    chapter: "Chương 10 & 11: Tổng cung - Tổng cầu & Chính sách tài khóa",
    titleEn: "The Aggregate Demand and Aggregate Supply Model (AD-AS)",
    titleVi: "Mô Hình Tổng Cung - Tổng Cầu (AD-AS) Chuẩn A+",
    channel: "Jacob Clifford",
    channelName: "Jacob Clifford (ACDC Econ)",
    youtubeId: "q5tW0BqQJxE",
    duration: "10:15",
    rating: "4.9/5",
    thumbnail: "https://img.youtube.com/vi/q5tW0BqQJxE/hqdefault.jpg",
    summary: "Jacob Clifford tổng hợp toàn bộ mô hình AD-AS: Tại sao AD dốc xuống, tại sao SRAS dốc lên, tại sao LRAS thẳng đứng tại mức sản lượng tiềm năng, và cách nền kinh tế tự điều chỉnh trong dài hạn.",
    keyTakeaways: [
      "3 lý do AD dốc xuống: Hiệu ứng của cải, Hiệu ứng lãi suất, và Hiệu ứng tỷ giá hối đoái.",
      "Đường Tổng cung dài hạn (LRAS) thẳng đứng tại sản lượng tiềm năng ($Y^*$), không phụ thuộc vào mức giá.",
      "Cú sốc cung tiêu cực (stagflation) và quá trình tự điều chỉnh đưa nền kinh tế về trạng thái cân bằng dài hạn."
    ],
    examRelevance: "Đây là mô hình vĩ mô quan trọng nhất trong kỳ thi cuối kỳ, thường chiếm 30-40% điểm số toàn bài.",
    keyTerms: [
      { en: "Aggregate Demand (AD)", vi: "Đường Tổng cầu" },
      { en: "Short-Run Aggregate Supply (SRAS)", vi: "Đường Tổng cung ngắn hạn" },
      { en: "Long-Run Aggregate Supply (LRAS)", vi: "Đường Tổng cung dài hạn" },
      { en: "Potential Output (Natural Level of Output)", vi: "Sản lượng tiềm năng / Mức sản lượng tự nhiên" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VIDEOS_DATA;
}
