// Cơ sở dữ liệu Top 20 Bẫy Đề Thi Kinh Điển Môn Kinh Tế Học Đại Cương
// Đúc kết từ các kỳ thi học kỳ của ĐH Kinh Tế Quốc Dân (NEU), Ngoại Thương (FTU), ĐH Kinh Tế TP.HCM (UEH)
// và giáo trình N. Gregory Mankiw

const TRAPS_DATA = [
  // --- BẪY VI MÔ ---
  {
    id: "trap-1",
    category: "micro",
    chapter: "Chương 2: Cung - Cầu",
    title: "Di Chuyển Dọc (Movement Along) vs Dịch Chuyển Đường Cầu (Shift)",
    severity: "Rất cao (90% sinh viên từng sai)",
    trapDesc: "Đề bài cho: 'Giá của hàng hóa X giảm xuống, điều này sẽ làm...'. Học sinh vội vã chọn: 'Đường cầu hàng hóa X dịch chuyển sang phải'.",
    correctInsight: "CHỈ CÓ các yếu tố NGOÀI GIÁ (Thu nhập, Giá hàng liên quan, Thị hiếu, Kỳ vọng, Số lượng người mua) mới làm DỊCH CHUYỂN đường cầu. Khi GIÁ của chính hàng hóa đó ($P_X$) thay đổi, đường cầu KHÔNG DỊCH CHUYỂN mà chỉ xảy ra hiện tượng DI CHUYỂN DỌC trên cùng đường cầu (Lượng cầu $Q_D$ thay đổi).",
    examTip: "Quy tắc vàng: Giá của chính nó thay đổi -> 'Lượng cầu' thay đổi (trượt dọc). Yếu tố khác thay đổi -> 'Cầu' thay đổi (dịch chuyển cả đường).",
    sampleQuestion: {
      q: "Khi giá của mặt hàng trà sữa trân châu giảm từ 50.000đ xuống 30.000đ, điều gì sẽ xảy ra?",
      options: [
        "A. Đường cầu trà sữa dịch chuyển sang phải.",
        "B. Cầu về trà sữa tăng lên.",
        "C. Lượng cầu về trà sữa tăng lên (di chuyển dọc xuống dưới trên đường cầu).",
        "D. Đường cung trà sữa dịch chuyển sang trái."
      ],
      correct: 2,
      explain: "Giá của chính mặt hàng trà sữa thay đổi chỉ làm thay đổi LƯỢNG CẦU (di chuyển dọc), không làm dịch chuyển đường cầu. Đáp án C chính xác."
    }
  },
  {
    id: "trap-2",
    category: "micro",
    chapter: "Chương 4: Can Thiệp Chính Phủ",
    title: "Giá Trần Có Hiệu Lực (Binding) vs Không Có Hiệu Lực (Non-binding)",
    severity: "Cao (Bẫy kinh điển trắc nghiệm)",
    trapDesc: "Đề bài: 'Giá cân bằng thị trường gạo là $P^* = 20$. Chính phủ quy định giá trần là $P_c = 25$. Thị trường sẽ bị thiếu hụt bao nhiêu?'. Sinh viên vội thay $P=25$ vào hàm cung cầu rồi trừ ra lượng thiếu hụt.",
    correctInsight: "Giá trần (Price Ceiling) là mức giá TỐI ĐA hợp pháp. Nếu chính phủ quy định giá trần $P_c = 25$ CAO HƠN giá cân bằng $P^* = 20$, giá trần này KHÔNG CÓ HIỆU LỰC (Non-binding) vì thị trường tự do vẫn giao dịch ở mức $P=20$. Thị trường KHÔNG BỊ THIẾU HỤT mà vẫn ở trạng thái cân bằng!",
    examTip: "Quy tắc nhớ: Muốn có hiệu lực, Giá trần (Ceiling) phải NẰM DƯỚI giá cân bằng ($P_c < P^*$), còn Giá sàn (Floor) phải NẰM TRÊN giá cân bằng ($P_f > P^*$).",
    sampleQuestion: {
      q: "Thị trường có hàm cầu $Q_D = 100 - P$ và cung $Q_S = 2P - 20$. Nếu chính phủ đặt giá trần $P = 50$, điều gì xảy ra?",
      options: [
        "A. Thị trường thiếu hụt 30 đơn vị sản phẩm.",
        "B. Thị trường dư thừa 30 đơn vị sản phẩm.",
        "C. Giá trần không có hiệu lực, thị trường vẫn giao dịch ở giá cân bằng P = 40, Q = 60.",
        "D. Giá trần làm giảm thặng dư tiêu dùng."
      ],
      correct: 2,
      explain: "Giải cân bằng: $100 - P = 2P - 20 \Rightarrow 3P = 120 \Rightarrow P^* = 40, Q^* = 60$. Vì giá trần $P_c = 50 > P^* = 40$, người bán chỉ bán giá 40 nên trần 50 không ảnh hưởng gì (không có hiệu lực)."
    }
  },
  {
    id: "trap-3",
    category: "micro",
    chapter: "Chương 4: Thuế & Gánh Nặng Thuế",
    title: "Gánh Nặng Thuế Pháp Lý vs Gánh Nặng Thuế Thực Tế",
    severity: "Rất cao",
    trapDesc: "Sinh viên nghĩ rằng: Chính phủ ban hành luật đánh thuế 5.000đ/lít xăng lên người bán thì người bán phải gánh chịu toàn bộ 5.000đ này.",
    correctInsight: "Theo GS. Mankiw, gánh nặng thuế thực tế (Tax Incidence) KHÔNG HỀ phụ thuộc vào việc luật pháp quy định ai là người nộp thuế. Gánh nặng thực tế được phân bổ theo ĐỘ CO GIÃN TƯƠNG ĐỐI: Bên nào kém co giãn hơn (ít phương án thay thế hơn) sẽ phải chịu phần lớn gánh nặng thuế.",
    examTip: "Nếu Cầu hoàn toàn không co giãn ($E_d = 0$ như thuốc chữa bệnh hiểm nghèo), người mua chịu 100% thuế. Nếu Cung hoàn toàn không co giãn ($E_s = 0$ như đất đai), người bán chịu 100% thuế.",
    sampleQuestion: {
      q: "Chính phủ đánh thuế $t = 2$ USD/sản phẩm lên người sản xuất. Kết quả phân bổ thuế phụ thuộc vào:",
      options: [
        "A. Ý chí của cơ quan thuế nhà nước.",
        "B. Độ co giãn của cung và cầu theo giá.",
        "C. Quy mô vốn điều lệ của người sản xuất.",
        "D. Thu nhập trung bình của người tiêu dùng."
      ],
      correct: 1,
      explain: "Gánh nặng thuế được phân chia dựa trên độ co giãn: $\\Delta P_b / \\Delta P_s = |E_s / E_d|$."
    }
  },
  {
    id: "trap-4",
    category: "micro",
    chapter: "Chương 3: Độ Co Giãn",
    title: "Độ Dốc (Slope) Không Phải Là Độ Co Giãn (Elasticity)",
    severity: "Cao",
    trapDesc: "Nhìn thấy đường cầu dạng đường thẳng có độ dốc không đổi, học sinh kết luận: 'Độ co giãn của đường cầu này là hằng số ở mọi điểm'.",
    correctInsight: "Độ dốc của đường thẳng $Q = a - bP$ là $\\Delta Q / \\Delta P = -b$ (cố định), nhưng độ co giãn $E_d = (\\Delta Q / \\Delta P) \\times (P / Q) = -b \\times (P / Q)$. Khi di chuyển từ trên xuống dưới dọc đường cầu, tỷ số $P/Q$ giảm dần từ $\\infty$ về 0, nên độ co giãn biến thiên liên tục: từ co giãn nhiều ($|E| > 1$) ở nửa trên, qua co giãn đơn vị ($|E| = 1$) ở trung điểm, xuống kém co giãn ($|E| < 1$) ở nửa dưới.",
    examTip: "Đường cầu thẳng có độ dốc không đổi NHƯNG độ co giãn thay đổi liên tục!",
    sampleQuestion: {
      q: "Dọc theo một đường cầu dốc xuống dạng đường thẳng tuyến tính, khi giá giảm dần thì độ co giãn của cầu theo giá (|Ed|) sẽ:",
      options: [
        "A. Không đổi ở mọi điểm.",
        "B. Tăng dần.",
        "C. Giảm dần từ lớn hơn 1 về nhỏ hơn 1.",
        "D. Ban đầu bằng 0 rồi tăng lên vô cùng."
      ],
      correct: 2,
      explain: "Tại mức giá cao, P lớn và Q nhỏ nên P/Q rất lớn (|Ed| > 1). Khi giá giảm xuống, P/Q nhỏ dần nên |Ed| giảm dần."
    }
  },
  {
    id: "trap-5",
    category: "micro",
    chapter: "Chương 5: Chi Phí Sản Xuất",
    title: "Lợi Nhuận Kinh Tế Bằng 0 (Zero Economic Profit) Không Phải Phá Sản",
    severity: "Rất cao (Bẫy thi cuối kỳ)",
    trapDesc: "Đề bài: 'Trong dài hạn, doanh nghiệp cạnh tranh hoàn hảo có lợi nhuận kinh tế bằng 0, vậy doanh nghiệp có nên đóng cửa không?'. Học sinh trả lời: 'Nên đóng cửa vì làm ăn không có lãi'.",
    correctInsight: "Lợi nhuận kinh tế $\\pi_{kt} = TR - TC_{kinh\\,tế} = TR - (Chi\\,phí\\,hiện + Chi\\,phí\\,ẩn)$. Khi $\\pi_{kt} = 0$, điều đó có nghĩa là doanh nghiệp đang thu được LỢI NHUẬN KẾ TOÁN VỪA ĐỦ để bù đắp toàn bộ chi phí cơ hội của vốn và thời gian của chủ sở hữu (gọi là Lợi nhuận bình thường - Normal Profit). Chủ doanh nghiệp vẫn kiếm tiền ngang bằng với phương án đầu tư tốt nhất khác ngoài thị trường, do đó KHÔNG HỀ bị phá sản và tiếp tục hoạt động!",
    examTip: "Lợi nhuận kinh tế = 0 $\\Leftrightarrow$ Lợi nhuận kế toán > 0 $\\Leftrightarrow$ Đang kiếm được lợi nhuận bình thường.",
    sampleQuestion: {
      q: "Khi một doanh nghiệp đạt lợi nhuận kinh tế bằng 0 (Zero economic profit), điều đó có nghĩa là:",
      options: [
        "A. Doanh nghiệp đang bị lỗ kế toán nặng nề.",
        "B. Doanh nghiệp bù đắp được tất cả chi phí cơ hội và kiếm được lợi nhuận kế toán bình thường.",
        "C. Doanh nghiệp cần phải đóng cửa ngay lập tức.",
        "D. Giá bán sản phẩm nhỏ hơn chi phí biến đổi trung bình (P < AVC)."
      ],
      correct: 1,
      explain: "Lợi nhuận kinh tế bằng 0 có nghĩa là doanh thu đủ bù đắp cả chi phí hiện và chi phí ẩn (lợi nhuận bình thường)."
    }
  },
  {
    id: "trap-6",
    category: "micro",
    chapter: "Chương 5: Chi Phí Sản Xuất",
    title: "Điểm Đóng Cửa Trong Ngắn Hạn: So Với AVC Hay ATC?",
    severity: "Cao",
    trapDesc: "Khi giá $P < ATC$, học sinh kết luận doanh nghiệp phải đóng cửa ngay lập tức trong ngắn hạn.",
    correctInsight: "Trong ngắn hạn, chi phí cố định ($FC$) là chi phí chìm (Sunk cost), dù sản xuất hay đóng cửa thì doanh nghiệp VẪN PHẢI TRẢ $FC$. Doanh nghiệp chỉ đóng cửa ngắn hạn khi Giá bán không bù đắp nổi chi phí biến đổi trung bình ($P < AVC_{\\min}$). Nếu $AVC_{\\min} \\le P < ATC_{\\min}$, doanh nghiệp BỊ LỖ nhưng VẪN NÊN TIẾP TỤC SẢN XUẤT vì phần chênh lệch $P - AVC > 0$ giúp bù đắp một phần chi phí cố định $FC$!",
    examTip: "Ngắn hạn: Đóng cửa khi $P < AVC_{\\min}$. Dài hạn: Rời bỏ ngành khi $P < ATC_{\\min}$.",
    sampleQuestion: {
      q: "Một doanh nghiệp cạnh tranh có ATC = 15, AVC = 10. Nếu giá thị trường là P = 12, doanh nghiệp nên làm gì trong ngắn hạn?",
      options: [
        "A. Đóng cửa ngay lập tức để tránh lỗ.",
        "B. Tiếp tục sản xuất vì bù đắp được toàn bộ biến phí và một phần định phí.",
        "C. Tăng giá bán lên 15 để hòa vốn.",
        "D. Rời bỏ ngành vĩnh viễn ngay lập tức."
      ],
      correct: 1,
      explain: "Vì $P = 12 > AVC = 10$, mỗi sản phẩm bán ra còn thừa 2 USD để bù đắp vào FC. Nếu đóng cửa sẽ mất trắng toàn bộ FC = 5 USD/sp, lỗ nặng hơn."
    }
  },
  {
    id: "trap-7",
    category: "micro",
    chapter: "Chương 6: Độc Quyền",
    title: "Doanh Thu Cận Biên (MR) Của Nhà Độc Quyền Luôn Nhỏ Hơn Giá (MR < P)",
    severity: "Trung bình - Cao",
    trapDesc: "Học sinh dùng công thức $P = MC$ để tìm điểm tối đa hóa lợi nhuận của doanh nghiệp độc quyền giống như cạnh tranh hoàn hảo.",
    correctInsight: "Doanh nghiệp cạnh tranh hoàn hảo có $MR = P$ vì họ là người chấp nhận giá. Nhưng nhà độc quyền đối mặt với đường cầu dốc xuống, muốn bán thêm 1 sản phẩm họ PHẢI HẠ GIÁ của tất cả các sản phẩm bán ra -> Do đó $MR < P$ ở mọi mức sản lượng $Q > 0$. Điều kiện tối đa hóa lợi nhuận vẫn là $MR = MC$, nhưng mức giá bán $P$ sẽ được gióng lên đường CẦU tại sản lượng đó ($P > MR = MC$).",
    examTip: "Với hàm cầu tuyến tính $P = a - bQ$, hàm doanh thu cận biên luôn có dạng $MR = a - 2bQ$ (độ dốc gấp đôi đường cầu).",
    sampleQuestion: {
      q: "Đường cầu của một nhà độc quyền là $P = 100 - 2Q$. Phương trình doanh thu cận biên (MR) là:",
      options: [
        "A. MR = 100 - 2Q",
        "B. MR = 100 - 4Q",
        "C. MR = 50 - Q",
        "D. MR = 100Q - 2Q^2"
      ],
      correct: 1,
      explain: "TR = P x Q = 100Q - 2Q^2 -> Đạo hàm MR = d(TR)/dQ = 100 - 4Q."
    }
  },
  {
    id: "trap-8",
    category: "micro",
    chapter: "Chương 1: Lợi Thế So Sánh",
    title: "Lợi Thế Tuyệt Đối vs Lợi Thế So Sánh (Comparative Advantage)",
    severity: "Rất cao",
    trapDesc: "Một quốc gia sản xuất cả lúa mì và máy bay đều nhanh hơn, năng suất hơn quốc gia kia -> Học sinh kết luận quốc gia đó không nên giao thương thương mại.",
    correctInsight: "Theo David Ricardo và Mankiw: Cơ sở của thương mại quốc tế KHÔNG PHẢI là lợi thế tuyệt đối mà là LỢI THẾ SO SÁNH (chi phí cơ hội thấp hơn). Một quốc gia dù có lợi thế tuyệt đối ở TẤT CẢ các mặt hàng, nhưng KHÔNG THỂ có lợi thế so sánh ở tất cả các mặt hàng. Hai quốc gia vẫn luôn có thể cùng hưởng lợi từ thương mại khi mỗi bên chuyên môn hóa vào mặt hàng có chi phí cơ hội thấp hơn.",
    examTip: "Tính chi phí cơ hội của mỗi sản phẩm = Số lượng sản phẩm kia phải từ bỏ. Bên nào có số từ bỏ nhỏ hơn thì bên đó có lợi thế so sánh.",
    sampleQuestion: {
      q: "Việt Nam sản xuất 1 tấn gạo mất 2 giờ, 1 cái áo mất 1 giờ. Thái Lan sản xuất 1 tấn gạo mất 3 giờ, 1 cái áo mất 3 giờ. Ai có lợi thế so sánh về gạo?",
      options: [
        "A. Việt Nam vì sản xuất gạo nhanh hơn (2h < 3h).",
        "B. Thái Lan vì chi phí cơ hội sản xuất gạo thấp hơn (1 áo < 2 áo).",
        "C. Cả hai nước đều có lợi thế như nhau.",
        "D. Không thể giao thương vì Việt Nam vượt trội cả hai mặt hàng."
      ],
      correct: 1,
      explain: "Ở VN: 1 tấn gạo = 2 cái áo. Ở Thái Lan: 1 tấn gạo = 1 cái áo. Thái Lan chỉ mất 1 cái áo để có 1 tấn gạo (chi phí cơ hội thấp hơn VN) nên Thái Lan có lợi thế so sánh về gạo."
    }
  },

  // --- BẪY VĨ MÔ ---
  {
    id: "trap-9",
    category: "macro",
    chapter: "Chương 7: Đo Lường GDP",
    title: "Các Khoản Không Được Tính Vào GDP (Đề Thi Rất Thích Hỏi)",
    severity: "Rất cao",
    trapDesc: "Đề bài liệt kê: Tiền trợ cấp thất nghiệp, tiền bán nhà cũ xây từ 10 năm trước, mua cổ phiếu Vinamilk. Học sinh cộng hết vào GDP.",
    correctInsight: "GDP CHỈ TÍNH giá trị của hàng hóa và dịch vụ CUỐI CÙNG được SẢN XUẤT MỚI trong kỳ. Không tính:\n1. Các khoản chuyển giao thu nhập của chính phủ ($Tr$ như trợ cấp thất nghiệp, học bổng, lương hưu) vì không đổi lấy hàng hóa/dịch vụ mới.\n2. Giao dịch hàng hóa đã qua sử dụng (xe cũ, nhà cũ).\n3. Giao dịch tài sản tài chính thuần túy (mua cổ phiếu, trái phiếu).\n4. Hoạt động kinh tế phi chính thức, tự cung tự cấp.",
    examTip: "Công thức chi tiêu chính phủ $G$ trong GDP KHÔNG BAO GỒM trợ cấp $Tr$!",
    sampleQuestion: {
      q: "Khoản mục nào sau đây ĐƯỢC TÍNH vào GDP của Việt Nam năm 2026?",
      options: [
        "A. Tiền chính phủ chi trợ cấp cho người tàn tật.",
        "B. Tiền một gia đình mua chiếc xe máy Dream sản xuất năm 2000.",
        "C. Tiền phí môi giới khi mua một căn nhà cũ xây năm 2010.",
        "D. Số tiền một nhà đầu tư dùng để mua 1.000 cổ phiếu FPT."
      ],
      correct: 2,
      explain: "Phí môi giới là dịch vụ sản sinh ra giá trị mới trong năm 2026 nên được tính. Căn nhà cũ, cổ phiếu và trợ cấp không được tính."
    }
  },
  {
    id: "trap-10",
    category: "macro",
    chapter: "Chương 7 & 9: CPI vs GDP Deflator",
    title: "Phân Biệt 4 Điểm Khác Biệt Giữa CPI và GDP Deflator",
    severity: "Rất cao (Câu hỏi điểm 9-10)",
    trapDesc: "Đề bài: 'Giá xe Mercedes nhập khẩu từ Đức tăng 20%, điều này làm chỉ số nào tăng?'. Sinh viên chọn: 'Cả CPI và GDP Deflator đều tăng'.",
    correctInsight: "GDP Deflator CHỈ đo lường hàng hóa sản xuất TRONG NƯỚC (vì chữ D = Domestic). Hàng nhập khẩu KHÔNG NẰM TRONG GDP nên KHÔNG ẢNH HƯỞNG đến GDP Deflator! Ngược lại, CPI đo lường giỏ hàng hóa người tiêu dùng mua, nên giá hàng tiêu dùng nhập khẩu (như xe Mercedes, iPhone) TĂNG sẽ LÀM CPI TĂNG.",
    examTip: "Hàng nhập khẩu: Ảnh hưởng CPI, KHÔNG ảnh hưởng GDP Deflator. Hàng tư liệu sản xuất trong nước (máy ủi, máy dệt): Ảnh hưởng GDP Deflator, KHÔNG ảnh hưởng CPI.",
    sampleQuestion: {
      q: "Nếu giá máy bay chiến đấu do Bộ Quốc phòng đặt hàng sản xuất trong nước tăng giá, chỉ số nào sẽ tăng?",
      options: [
        "A. Cả CPI và GDP Deflator.",
        "B. Chỉ CPI tăng, GDP Deflator không đổi.",
        "C. Chỉ GDP Deflator tăng, CPI không đổi.",
        "D. Cả hai chỉ số đều không đổi."
      ],
      correct: 2,
      explain: "Máy bay chiến đấu được sản xuất trong nước nên phản ánh vào GDP Deflator, nhưng người tiêu dùng điển hình không mua máy bay chiến đấu nên không có trong rổ CPI."
    }
  },
  {
    id: "trap-11",
    category: "macro",
    chapter: "Chương 9: Lạm Phát",
    title: "Giảm Lạm Phát (Disinflation) Khác Hoàn Toàn Giảm Phát (Deflation)",
    severity: "Cao",
    trapDesc: "Báo chí viết: 'Lạm phát của Việt Nam giảm từ 4% xuống 2%'. Học sinh kết luận: 'Mức giá chung của nền kinh tế đang giảm xuống'.",
    correctInsight: "• Giảm lạm phát (Disinflation): Tỷ lệ lạm phát giảm nhưng VẪN DƯƠNG (ví dụ từ +4% xuống +2%). Điều đó có nghĩa là GIÁ CẢ VẪN ĐANG TĂNG, chỉ là TĂNG CHẬM HƠN so với trước!\n• Giảm phát (Deflation): Tỷ lệ lạm phát ÂM (ví dụ -1%), lúc này mức giá chung mới THỰC SỰ GIẢM XUỐNG.",
    examTip: "Lạm phát giảm từ 5% về 2% -> Mức giá P vẫn tăng!",
    sampleQuestion: {
      q: "Khi nền kinh tế chuyển từ tỷ lệ lạm phát 6%/năm sang 3%/năm, hiện tượng này được gọi là:",
      options: [
        "A. Giảm phát (Deflation) và mức giá chung giảm.",
        "B. Giảm lạm phát (Disinflation) và mức giá chung vẫn tăng nhưng với tốc độ chậm hơn.",
        "C. Đình lạm (Stagflation).",
        "D. Siêu lạm phát (Hyperinflation)."
      ],
      correct: 1,
      explain: "Tỷ lệ lạm phát dương (3% > 0) nên giá vẫn tăng, tốc độ tăng chậm hơn gọi là Disinflation."
    }
  },
  {
    id: "trap-12",
    category: "macro",
    chapter: "Chương 9: Thất Nghiệp",
    title: "Ai Mới Được Tính Là Thất Nghiệp (Unemployed)?",
    severity: "Rất cao",
    trapDesc: "Đề bài: 'Bác Ba 50 tuổi vừa nghỉ hưu và ở nhà chăm cháu, không có nhu cầu đi làm. Bác Ba có bị tính là thất nghiệp không?'. Sinh viên chọn: 'Có vì không có việc làm'.",
    correctInsight: "Theo chuẩn ILO và Mankiw: Để được tính là Thất nghiệp, một người phải thỏa mãn ĐỒNG THỜI 3 điều kiện:\n1. Trong độ tuổi lao động;\n2. Đang KHÔNG CÓ VIỆC LÀM;\n3. Đang TÍCH CỰC TÌM KIẾM VIỆC LÀM trong 4 tuần gần nhất.\nNhững người không muốn tìm việc (nghỉ hưu sớm, nội trợ, sinh viên toàn thời gian, người nản chí) được xếp vào nhóm 'NGOÀI LỰC LƯỢNG LAO ĐỘNG' (Not in Labor Force), KHÔNG ĐƯỢC TÍNH vào số người thất nghiệp!",
    examTip: "Tỷ lệ thất nghiệp $u = \\frac{Số\\,người\\,thất\\,nghiệp}{Lực\\,lượng\\,lao\\,động} \\times 100\\%$. Mẫu số là Lực lượng lao động, KHÔNG PHẢI toàn bộ dân số!",
    sampleQuestion: {
      q: "Một người công nhân bị sa thải, sau 3 tháng tìm việc không thành công đã chán nản và từ bỏ việc tìm việc, ở nhà chơi game. Người này được phân loại là:",
      options: [
        "A. Thất nghiệp ma sát.",
        "B. Thất nghiệp chu kỳ.",
        "C. Người lao động nản chí (ngoài lực lượng lao động).",
        "D. Thất nghiệp cơ cấu."
      ],
      correct: 2,
      explain: "Vì không còn tích cực tìm việc nên người này rơi ra ngoài lực lượng lao động, không tính là thất nghiệp."
    }
  },
  {
    id: "trap-13",
    category: "macro",
    chapter: "Chương 10: Tiền Tệ",
    title: "NHTW Mua Trái Phiếu Làm Tăng Hay Giảm Cung Tiền?",
    severity: "Cao",
    trapDesc: "Học sinh hay bị nhầm lẫn chiều tác động của Hoạt động thị trường mở (OMO).",
    correctInsight: "Hãy nhớ quy tắc 'Tiền trao cháo múc':\n• NHTW MUA trái phiếu: NHTW thu tờ giấy trái phiếu về và BƠM TIỀN MẶT RA -> Cung tiền $MS$ TĂNG -> Lãi suất $r$ GIẢM -> Kích thích đầu tư $I$ -> Tổng cầu $AD$ dịch phải.\n• NHTW BÁN trái phiếu: NHTW phát hành giấy và THU TIỀN MẶT VỀ két sắt -> Cung tiền $MS$ GIẢM -> Lãi suất $r$ TĂNG -> Kìm hãm lạm phát.",
    examTip: "Mua = Bơm tiền (Mở rộng). Bán = Hút tiền (Thắt chặt).",
    sampleQuestion: {
      q: "Để chống lại nguy cơ lạm phát quá cao, Ngân hàng Trung ương nên thực hiện biện pháp nào?",
      options: [
        "A. Mua trái phiếu chính phủ trên thị trường mở.",
        "B. Hạ tỷ lệ dự trữ bắt buộc.",
        "C. Bán trái phiếu chính phủ trên thị trường mở và tăng lãi suất chiết khấu.",
        "D. Hạ lãi suất tái cấp vốn."
      ],
      correct: 2,
      explain: "Bán trái phiếu hút bớt tiền về lưu thông, giảm cung tiền, tăng lãi suất và kiềm chế lạm phát."
    }
  },
  {
    id: "trap-14",
    category: "macro",
    chapter: "Chương 11: Mô Hình Tổng Cung - Tổng Cầu",
    title: "Tại Sao Đường Tổng Cầu (AD) Dốc Xuống? (Không Phải Vì Hiệu Ứng Thay Thế)",
    severity: "Rất cao (Câu hỏi phân loại A+)",
    trapDesc: "Khi hỏi tại sao đường Tổng cầu $AD$ dốc xuống, sinh viên giải thích: 'Vì giá tăng thì người ta mua hàng thay thế khác'.",
    correctInsight: "Đó là cách giải thích của VI MÔ cho 1 hàng hóa đơn lẻ! Trong VĨ MÔ, mức giá chung $P$ tăng là GIÁ CỦA TẤT CẢ HÀNG HÓA đều tăng, nên không thể chạy sang hàng hóa khác để thay thế được. Đường $AD$ dốc xuống bởi 3 HIỆU ỨNG VĨ MÔ HOÀN TOÀN KHÁC BIỆT:\n1. Hiệu ứng của cải Pigou (P tăng làm giảm sức mua thực tế của tiền -> giảm tiêu dùng C).\n2. Hiệu ứng lãi suất Keynes (P tăng làm tăng cầu tiền -> lãi suất tăng -> giảm đầu tư I).\n3. Hiệu ứng tỷ giá Mundell-Fleming (P tăng làm hàng trong nước đắt tương đối -> giảm xuất khẩu ròng NX).",
    examTip: "Vi mô dốc xuống do Thay thế & Thu nhập. Vĩ mô dốc xuống do Của cải, Lãi suất, và Tỷ giá hối đoái!",
    sampleQuestion: {
      q: "Lý do nào sau đây giải thích tại sao đường Tổng cầu (AD) có độ dốc âm theo mô hình kinh tế vĩ mô?",
      options: [
        "A. Hiệu ứng thay thế giữa các mặt hàng tiêu dùng của hộ gia đình.",
        "B. Quy luật thỏa dụng biên giảm dần của người mua.",
        "C. Hiệu ứng của cải (Pigou), hiệu ứng lãi suất (Keynes) và hiệu ứng tỷ giá.",
        "D. Chi phí cơ hội tăng dần trong sản xuất."
      ],
      correct: 2,
      explain: "Chỉ có 3 hiệu ứng vĩ mô này giải thích độ dốc âm của AD."
    }
  },
  {
    id: "trap-15",
    category: "macro",
    chapter: "Chương 11: Chính Sách Tài Khóa",
    title: "Tác Động Lấn Át (Crowding-out Effect) Làm Giảm Hiệu Quả Chi Tiêu Chính Phủ",
    severity: "Cao",
    trapDesc: "Học sinh tính sản lượng tăng thêm chỉ bằng $\\Delta Y = k \\times \\Delta G$ mà quên mất tác động phụ của lãi suất.",
    correctInsight: "Khi chính phủ tăng chi tiêu $\\Delta G$ hoặc giảm thuế, chính phủ phải vay nợ bằng cách phát hành trái phiếu. Nhu cầu vay vốn tăng làm tăng lãi suất thị trường $r$. Lãi suất tăng cao sẽ 'chèn lấn / lấn át' (Crowd out) các dự án đầu tư tư nhân $I$ và tiêu dùng nhạy cảm với lãi suất của người dân. Kết quả: Sản lượng thực tế tăng ít hơn so với mức dự tính ban đầu của số nhân chi tiêu!",
    examTip: "Số nhân lý thuyết > Tác động thực tế do có Tác động lấn át.",
    sampleQuestion: {
      q: "Tác động lấn át (Crowding-out effect) xảy ra khi chính sách tài khóa mở rộng làm:",
      options: [
        "A. Tăng thuế thu nhập doanh nghiệp.",
        "B. Tăng lãi suất thị trường, từ đó làm giảm chi tiêu đầu tư tư nhân.",
        "C. Giảm xuất khẩu ròng do đồng nội tệ giảm giá.",
        "D. Giảm tỷ lệ dự trữ bắt buộc của hệ thống ngân hàng."
      ],
      correct: 1,
      explain: "Tài khóa mở rộng -> thâm hụt ngân sách -> vay mượn tăng -> lãi suất tăng -> đầu tư tư nhân I bị lấn át."
    }
  },
  {
    id: "trap-16",
    category: "macro",
    chapter: "Chương 8: Tăng Trưởng Kinh Tế",
    title: "Hiệu Ứng Đuổi Kịp (Catch-up Effect) Và Giới Hạn Của Tư Bản",
    severity: "Trung bình",
    trapDesc: "Học sinh nghĩ rằng cứ đổ thêm thật nhiều tiền đầu tư máy móc (Tư bản K) thì tốc độ tăng trưởng kinh tế sẽ mãi mãi tăng cao.",
    correctInsight: "Theo mô hình tăng trưởng Solow và Mankiw: Hàm sản xuất có tính chất LỢI SUẤT GIẢM DẦN CỦA TƯ BẢN. Một nước nghèo có rất ít máy móc, thêm 1 máy tính sẽ tăng vọt năng suất (Hiệu ứng đuổi kịp). Nhưng một nước giàu đã có đầy đủ thiết bị, thêm 1 máy tính chỉ tạo thêm rất ít sản lượng. Trong dài hạn, tăng trưởng bền vững CHỈ CÓ THỂ đến từ TIẾN BỘ CÔNG NGHỆ (Technology), không thể chỉ dựa vào tích lũy tư bản!",
    examTip: "Tích lũy vốn chỉ thúc đẩy tăng trưởng cao trong ngắn hạn. Dài hạn phụ thuộc vào Công nghệ.",
    sampleQuestion: {
      q: "Hiệu ứng đuổi kịp (Catch-up effect) ngụ ý rằng:",
      options: [
        "A. Các nước nghèo luôn nghèo hơn các nước giàu.",
        "B. Các nước nghèo có xu hướng tăng trưởng nhanh hơn các nước giàu khi được trang bị tư bản ban đầu.",
        "C. Tiền lương của công nhân sẽ tự động tăng kịp lạm phát.",
        "D. Tăng trưởng kinh tế không bị giới hạn bởi tài nguyên thiên nhiên."
      ],
      correct: 1,
      explain: "Do quy luật lợi suất giảm dần của tư bản, mức tư bản ban đầu càng thấp thì suất sinh lời cận biên càng cao."
    }
  },
  {
    id: "trap-17",
    category: "macro",
    chapter: "Chương 12: Kinh Tế Mở",
    title: "Tiết Kiệm Quốc Dân (S) Bằng Đầu Tư Nội Địa (I) Cộng Xuất Khẩu Ròng (NX)",
    severity: "Cao",
    trapDesc: "Nhầm lẫn giữa Thâm hụt thương mại ($NX < 0$) và việc một quốc gia đang nghèo đi.",
    correctInsight: "Đồng nhất thức tài khoản quốc gia: $S = I + NCO = I + NX$. Nếu một quốc gia có thâm hụt thương mại ($NX < 0$), điều đó đồng nghĩa với việc $S < I$ (Tiết kiệm trong nước không đủ để tài trợ cho các cơ hội đầu tư trong nước, nên phải vay mượn từ nước ngoài hoặc thu hút FDI). Ví dụ: Nước Mỹ có thâm hụt thương mại triền miên nhiều thập kỷ không phải vì hàng hóa kém cạnh tranh, mà vì tỷ lệ tiết kiệm quốc dân của Mỹ quá thấp trong khi nhu cầu đầu tư quá lớn.",
    examTip: "$NX = S - I$. Thâm hụt thương mại là hiện tượng kinh tế vĩ mô về Tiết kiệm và Đầu tư, không đơn thuần là câu chuyện thương mại.",
    sampleQuestion: {
      q: "Nếu một nền kinh tế mở có tiết kiệm quốc dân S = 100 tỷ USD và đầu tư nội địa I = 140 tỷ USD, thì dòng vốn ra ròng (NCO) và xuất khẩu ròng (NX) là:",
      options: [
        "A. NCO = +40 tỷ, NX = +40 tỷ (thặng dư).",
        "B. NCO = -40 tỷ, NX = -40 tỷ (thâm hụt 40 tỷ).",
        "C. NCO = +240 tỷ, NX = +240 tỷ.",
        "D. Không thể xác định nếu chưa biết chi tiêu chính phủ G."
      ],
      correct: 1,
      explain: "$S - I = NCO = NX \\Rightarrow 100 - 140 = -40$ tỷ USD."
    }
  },
  {
    id: "trap-18",
    category: "micro",
    chapter: "Chương 3: Độ Co Giãn Thu Nhập",
    title: "Hàng Hóa Thông Thường vs Hàng Hóa Thứ Cấp & Xa Xỉ",
    severity: "Trung bình",
    trapDesc: "Học sinh nhầm lẫn giữa dấu âm/dương của độ co giãn của cầu theo giá ($E_d$) và độ co giãn theo thu nhập ($E_I$).",
    correctInsight: "• Độ co giãn theo giá $E_d$: Luôn âm theo quy luật cầu (khi tính toán thường lấy trị tuyệt đối $|E_d|$).\n• Độ co giãn theo thu nhập $E_I = \\%\\Delta Q / \\%\\Delta I$:\n  - Nếu $E_I > 0$: Hàng hóa thông thường (Normal goods). Trong đó: $0 < E_I \\le 1$ là Hàng thiết yếu; $E_I > 1$ là Hàng xa xỉ.\n  - Nếu $E_I < 0$: Hàng hóa thứ cấp / cấp thấp (Inferior goods) như mì gói, xe buýt công cộng (khi thu nhập tăng, người ta bớt tiêu dùng mặt hàng này).",
    examTip: "Dấu của $E_I$ quyết định loại hàng hóa: Dương = Thông thường, Âm = Thứ cấp.",
    sampleQuestion: {
      q: "Khi thu nhập của người tiêu dùng tăng 10%, lượng cầu về vé xe buýt giảm 5%. Vé xe buýt là loại hàng hóa gì?",
      options: [
        "A. Hàng hóa xa xỉ với EI = 2.",
        "B. Hàng hóa thiết yếu với EI = 0.5.",
        "C. Hàng hóa thứ cấp với EI = -0.5.",
        "D. Hàng hóa bổ sung độc lập."
      ],
      correct: 2,
      explain: "$E_I = -5\\% / +10\\% = -0.5 < 0$ nên là hàng hóa thứ cấp (cấp thấp)."
    }
  },
  {
    id: "trap-19",
    category: "macro",
    chapter: "Chương 11: Đường Cong Phillips",
    title: "Đánh Đổi Lạm Phát & Thất Nghiệp: Chỉ Tồn Tại Trong Ngắn Hạn!",
    severity: "Cao",
    trapDesc: "Học sinh cho rằng chính phủ có thể vĩnh viễn duy trì tỷ lệ thất nghiệp cực thấp bằng cách chấp nhận một mức lạm phát cao liên tục.",
    correctInsight: "Theo Milton Friedman và Mankiw:\n• Trong ngắn hạn: Đường Phillips dốc xuống, có sự đánh đổi giữa lạm phát và thất nghiệp.\n• Trong dài hạn: Khi mọi người điều chỉnh KỲ VỌNG LẠM PHÁT, đường Phillips dài hạn (LRPC) trở thành một ĐƯỜNG THẲNG ĐỨNG tại mức Tỷ lệ thất nghiệp tự nhiên ($u_n$). Mọi nỗ lực bơm tiền để giảm thất nghiệp dưới mức tự nhiên chỉ tạo ra lạm phát cao hơn mà không hề làm giảm thất nghiệp!",
    examTip: "Đường Phillips dài hạn thẳng đứng tại tỷ lệ thất nghiệp tự nhiên.",
    sampleQuestion: {
      q: "Theo quan điểm kinh tế học hiện đại, trong dài hạn đường cong Phillips có hình dạng:",
      options: [
        "A. Dốc xuống từ trái sang phải.",
        "B. Dốc lên từ trái sang phải.",
        "C. Thẳng đứng tại mức tỷ lệ thất nghiệp tự nhiên.",
        "D. Nằm ngang tại mức lạm phát mục tiêu."
      ],
      correct: 2,
      explain: "Trong dài hạn tiền tệ là trung tính, lạm phát không ảnh hưởng đến thất nghiệp thực tế."
    }
  },
  {
    id: "trap-20",
    category: "macro",
    chapter: "Chương 10: Tiền Tệ",
    title: "Tiền Tệ Là Trung Tính Trong Dài Hạn (Classical Dichotomy & Monetary Neutrality)",
    severity: "Rất cao (Câu chốt điểm A+)",
    trapDesc: "Học sinh nghĩ rằng in gấp đôi số tiền thì của cải của quốc gia và mức sống của mọi người dân sẽ tăng gấp đôi.",
    correctInsight: "Sự phân đôi cổ điển (Classical Dichotomy): Tách các biến số thành Biến danh nghĩa (tính bằng tiền) và Biến thực tế (tính bằng hiện vật, giờ công, sản lượng). Tính trung tính của tiền tệ chỉ ra rằng: Việc thay đổi cung tiền CHỈ làm thay đổi các biến danh nghĩa (mức giá $P$, tiền lương danh nghĩa $W$, GDP danh nghĩa), KHÔNG THỂ làm thay đổi các biến thực tế (GDP thực tế $Y$, việc làm, thất nghiệp, tiền lương thực tế $W/P$) trong dài hạn!",
    examTip: "In thêm tiền chỉ sinh ra lạm phát danh nghĩa, không tạo thêm được của cải thực sự.",
    sampleQuestion: {
      q: "Khái niệm 'Tính trung tính của tiền tệ' (Monetary Neutrality) khẳng định rằng sự thay đổi cung tiền sẽ:",
      options: [
        "A. Không ảnh hưởng đến bất kỳ biến số kinh tế nào.",
        "B. Chỉ ảnh hưởng đến các biến danh nghĩa mà không ảnh hưởng đến các biến thực tế trong dài hạn.",
        "C. Làm giảm GDP thực tế và tăng thất nghiệp dài hạn.",
        "D. Làm tăng năng suất lao động của toàn bộ nền kinh tế."
      ],
      correct: 1,
      explain: "Tiền tệ trung tính trong dài hạn: chỉ đổi thước đo danh nghĩa, không đổi sản lượng thực tế."
    }
  }
];

if (typeof module !== 'undefined') {
  module.exports = TRAPS_DATA;
}
