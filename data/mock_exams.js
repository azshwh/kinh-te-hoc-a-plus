// Bộ Đề Thi Học Kỳ Trọn Vẹn Chuẩn Đại Học Kèm Barem Điểm Chi Tiết
// Cấu trúc 3 phần: Trắc nghiệm (4đ) + Đúng/Sai giải thích (3đ) + Bài tập lớn (3đ)

const MOCK_EXAMS_DATA = [
  // ================= ĐỀ THI 1: KINH TẾ VI MÔ =================
  {
    id: "exam-micro-1",
    title: "Đề thi cuối kỳ chuẩn: Kinh tế vi mô đại cương",
    targetUniversity: "Đại học Kinh tế Quốc dân (NEU) & Ngoại thương (FTU)",
    durationMinutes: 60,
    totalPoints: 10,
    parts: [
      {
        partTitle: "PHẦN I: TRẮC NGHIỆM KHÁCH QUAN (4.0 ĐIỂM)",
        description: "Chọn đáp án đúng nhất trong 10 câu hỏi sau (mỗi câu 0.4 điểm):",
        questions: [
          {
            qNum: 1,
            text: "Chi phí cơ hội của việc đi học đại học trong 4 năm của một sinh viên KHÔNG bao gồm:",
            options: ["Học phí và tiền mua giáo trình", "Tiền ăn uống và sinh hoạt thông thường", "Thu nhập bị từ bỏ do không đi làm", "Tiền thuê trọ phát sinh thêm"],
            correct: 1,
            point: 0.4,
            expl: "Tiền ăn uống sinh hoạt thông thường là chi phí bạn phải chi trả dù có đi học đại học hay không, nên không phải chi phí cơ hội tăng thêm của việc đi học."
          },
          {
            qNum: 2,
            text: "Đường cầu về xe điện dịch chuyển sang phải khi:",
            options: ["Giá xe điện giảm", "Giá pin xe điện tăng cao", "Giá xăng (hàng thay thế) tăng mạnh", "Thu nhập người dân giảm (nếu là hàng thông thường)"],
            correct: 2,
            point: 0.4,
            expl: "Xăng là nhiên liệu cho xe xăng (hàng thay thế của xe điện). Giá xăng tăng khiến người dân chuyển sang mua xe điện, làm cầu xe điện dịch phải."
          },
          {
            qNum: 3,
            text: "Khi một mặt hàng có cầu co giãn nhiều (|Ed| > 1), doanh nghiệp muốn tăng doanh thu thì phải:",
            options: ["Tăng giá bán", "Giảm giá bán", "Giữ nguyên giá", "Cắt giảm sản lượng"],
            correct: 1,
            point: 0.4,
            expl: "Với cầu co giãn nhiều, giảm giá làm lượng cầu tăng mạnh hơn tỷ lệ giảm giá, giúp tổng doanh thu tăng lên."
          },
          {
            qNum: 4,
            text: "Một mức giá sàn (Price Floor) có hiệu lực sẽ gây ra:",
            options: ["Thiếu hụt hàng hóa", "Dư thừa hàng hóa", "Thị trường chợ đen", "Giá bán thực tế giảm"],
            correct: 1,
            point: 0.4,
            expl: "Giá sàn có hiệu lực được đặt cao hơn giá cân bằng (P_sàn > P*), khiến lượng cung vượt quá lượng cầu (QS > QD), gây dư thừa hàng hóa."
          },
          {
            qNum: 5,
            text: "Đường chi phí cận biên MC cắt đường chi phí trung bình ATC tại:",
            options: ["Điểm cực đại của ATC", "Điểm cực tiểu của ATC", "Điểm cực tiểu của AFC", "Điểm hòa vốn dài hạn"],
            correct: 1,
            point: 0.4,
            expl: "Đường MC luôn cắt đường ATC tại điểm cực tiểu của ATC (nguyên tắc điểm trung bình)."
          }
        ]
      },
      {
        partTitle: "PHẦN II: NHẬN ĐỊNH ĐÚNG / SAI & GIẢI THÍCH (3.0 ĐIỂM)",
        description: "Xác định Đúng/Sai và viết đoạn văn giải thích ngắn gọn có kèm công thức/đồ thị (mỗi câu 1.5 điểm):",
        items: [
          {
            itemNum: 1,
            statement: "Khi chính phủ đánh thuế t đồng/sản phẩm vào người bán, toàn bộ số tiền thuế này sẽ do người bán gánh chịu.",
            verdict: "SAI",
            rubric: "• Kết luận SAI: 0.5đ\n• Lập luận kinh tế: Ai thực tế chịu thuế phụ thuộc vào độ co giãn tương đối giữa Cung và Cầu (Es / |Ed|), không phụ thuộc vào đối tượng nộp thuế theo luật: 0.5đ\n• Công thức phân chia: tb/ts = Es/|Ed| và vẽ đồ thị minh họa: 0.5đ."
          },
          {
            itemNum: 2,
            statement: "Trong ngắn hạn, nếu giá thị trường nhỏ hơn chi phí trung bình (P < ATC), doanh nghiệp cạnh tranh hoàn hảo nên đóng cửa ngay lập tức.",
            verdict: "SAI",
            rubric: "• Kết luận SAI: 0.5đ\n• Lập luận kinh tế: Doanh nghiệp chỉ đóng cửa khi P < AVC_min. Nếu AVC_min <= P < ATC, doanh nghiệp tiếp tục sản xuất để lấy thặng dư bù đắp một phần chi phí cố định FC: 0.5đ\n• Công thức và đồ thị vùng giảm lỗ: 0.5đ."
          }
        ]
      },
      {
        partTitle: "PHẦN III: BÀI TẬP TỰ LUẬN TÍNH TOÁN (3.0 ĐIỂM)",
        description: "Trình bày lời giải chi tiết từng bước cho bài toán sau:",
        problemText: `Thị trường lúa gạo có hàm cầu: $Q_D = 100 - 2P$ và hàm cung: $Q_S = 20 + 2P$ (P tính bằng nghìn đồng/kg; Q tính bằng nghìn tấn).
a) Xác định giá ($P^*$) và lượng ($Q^*$) cân bằng. Tính thặng dư tiêu dùng ($CS$) và thặng dư sản xuất ($PS$). (1.0đ)
b) Nếu chính phủ quy định giá sàn $P_f = 25$ nghìn đồng/kg và cam kết mua hết số lúa dư thừa. Tính số lúa dư thừa và số tiền ngân sách chính phủ phải chi trả. (1.0đ)
c) Tính tổn thất vô ích ($DWL$) của xã hội do chính sách giá sàn gây ra. (1.0đ)`,
        fullSolution: `
a) Cân bằng: $100 - 2P = 20 + 2P \\iff 4P = 80 \\implies \\mathbf{P^* = 20}$ nghìn đồng; $\\mathbf{Q^* = 60}$ nghìn tấn.
• $P_{max} (Q_D=0) = 50; P_{min} (Q_S=0) = -10$ (với $P \\ge 0 \\implies P_{min} = 0$).
• $CS_0 = 0.5 \\times (50 - 20) \\times 60 = \\mathbf{900}$ triệu đồng.
• $PS_0 = 0.5 \\times (20 + 10) \\times 60 = \\mathbf{900}$ triệu đồng. (1.0đ)

b) Tại $P_f = 25$:
• $Q_D = 100 - 2(25) = 50$ nghìn tấn.
• $Q_S = 20 + 2(25) = 70$ nghìn tấn.
• Dư thừa: $\\Delta Q = Q_S - Q_D = 70 - 50 = \\mathbf{20}$ nghìn tấn.
• Ngân sách chi mua lúa: $G_{chi} = P_f \\times \\Delta Q = 25 \\times 20 = \\mathbf{500}$ triệu đồng. (1.0đ)

c) Tổn thất vô ích (DWL):
Tại $Q_S = 70$, chi phí biên của người nông dân là $MC = (70 - 20)/2 = 25$.
Tổn thất gồm phần diện tích chi tiêu mua phần dư thừa không sử dụng trừ thặng dư:
$DWL = \\frac{1}{2} \\times (P_f - P^*) \\times (Q_S - Q^*) + \\dots = \\mathbf{250}$ triệu đồng. (1.0đ)
        `
      }
    ]
  },

  // ================= ĐỀ THI 2: KINH TẾ VĨ MÔ =================
  {
    id: "exam-macro-2",
    title: "Đề thi cuối kỳ chuẩn: Kinh tế vĩ mô đại cương",
    targetUniversity: "Đại học Kinh tế TP.HCM (UEH) & VNU-UEB",
    durationMinutes: 60,
    totalPoints: 10,
    parts: [
      {
        partTitle: "PHẦN I: TRẮC NGHIỆM KHÁCH QUAN (4.0 ĐIỂM)",
        description: "Chọn đáp án đúng nhất (mỗi câu 0.4 điểm):",
        questions: [
          {
            qNum: 1,
            text: "Giao dịch nào sau đây ĐƯỢC TÍNH vào GDP của Việt Nam năm 2025?",
            options: ["Một người mua xe máy Honda cũ đời 2020", "Nhà nước chi trả lương cho giáo viên trường công lập", "Chính phủ chi trả tiền trợ cấp cho cựu chiến binh", "Một công ty mua 500 triệu đồng cổ phiếu trên sàn HoSE"],
            correct: 1,
            point: 0.4,
            expl: "Chi trả lương cho giáo viên trường công lập là chi tiêu mua sắm dịch vụ giáo dục của chính phủ (G), tạo ra dịch vụ mới trong năm nên được tính vào GDP."
          },
          {
            qNum: 2,
            text: "Số nhân tiền tệ mm sẽ GIẢM XUỐNG khi:",
            options: ["Tỷ lệ dự trữ bắt buộc của ngân hàng giảm", "Người dân giữ ít tiền mặt hơn", "Tỷ lệ nắm giữ tiền mặt cr của người dân tăng vọt", "NHTW mua vào trái phiếu chính phủ"],
            correct: 2,
            point: 0.4,
            expl: "Theo công thức mm = (cr + 1) / (cr + rr), khi cr tăng thì mm sẽ giảm do tiền bị rút ra khỏi hệ thống tạo tiền gửi của ngân hàng."
          },
          {
            qNum: 3,
            text: "Theo phương trình Fisher, nếu lãi suất danh nghĩa là 8% và lạm phát là 5% thì lãi suất thực tế xấp xỉ là:",
            options: ["13%", "3%", "1.6%", "40%"],
            correct: 1,
            point: 0.4,
            expl: "Phương trình Fisher: r ≈ i - π = 8% - 5% = 3%."
          },
          {
            qNum: 4,
            text: "Hiện tượng 'Đình lạm' (Stagflation) xảy ra khi:",
            options: ["Tổng cầu AD dịch chuyển sang phải", "Tổng cung ngắn hạn SRAS dịch chuyển sang trái do cú sốc cung bất lợi", "Chính phủ tăng thuế làm giảm sản lượng", "NHTW thắt chặt tiền tệ"],
            correct: 1,
            point: 0.4,
            expl: "Cú sốc cung bất lợi (giá dầu tăng) làm SRAS dịch trái, khiến mức giá P tăng (lạm phát) và sản lượng Y giảm (suy thoái)."
          },
          {
            qNum: 5,
            text: "Trong mô hình IS-LM, chính sách tài khóa mở rộng (tăng G) sẽ dẫn đến:",
            options: ["Lãi suất r giảm, sản lượng Y tăng", "Lãi suất r tăng, sản lượng Y tăng và lấn át một phần đầu tư tư nhân", "Lãi suất r tăng nhưng sản lượng Y không đổi", "Đường LM dịch chuyển sang phải"],
            correct: 1,
            point: 0.4,
            expl: "Tăng G làm đường IS dịch phải, giao điểm với LM có mức lãi suất cao hơn (r tăng) và sản lượng cao hơn (Y tăng), lãi suất cao làm đầu tư tư nhân giảm (lấn át)."
          }
        ]
      },
      {
        partTitle: "PHẦN II: NHẬN ĐỊNH ĐÚNG / SAI & GIẢI THÍCH (3.0 ĐIỂM)",
        description: "Xác định Đúng/Sai và giải thích luận cứ kinh tế (mỗi câu 1.5 điểm):",
        items: [
          {
            itemNum: 1,
            statement: "Chính phủ có thể áp đặt thuế quan nhập khẩu cao để cải thiện thâm hụt thương mại (tăng xuất khẩu ròng NX).",
            verdict: "SAI",
            rubric: "• Kết luận SAI: 0.5đ\n• Lập luận kinh tế: Đồng nhất thức NX = S - I. Thuế quan làm giảm nhập khẩu nhưng đồng thời làm nội tệ tăng giá thực tế, khiến xuất khẩu giảm tương ứng, NX không đổi: 0.5đ\n• Đồ thị thị trường ngoại hối minh họa: 0.5đ."
          },
          {
            itemNum: 2,
            statement: "Trong dài hạn, Ngân hàng Trung ương in thêm tiền sẽ giúp nền kinh tế tăng trưởng GDP thực tế và tạo thêm việc làm.",
            verdict: "SAI",
            rubric: "• Kết luận SAI: 0.5đ\n• Lập luận kinh tế: Tính trung tính của tiền tệ và đường LRAS thẳng đứng. In tiền trong dài hạn chỉ làm tăng mức giá chung P (lạm phát), không thay đổi được năng lực sản xuất thực: 0.5đ\n• Phương trình số lượng tiền tệ Fisher M.V = P.Y minh họa: 0.5đ."
          }
        ]
      },
      {
        partTitle: "PHẦN III: BÀI TẬP MÔ HÌNH IS - LM (3.0 ĐIỂM)",
        description: "Giải bài toán kinh tế vĩ mô sau:",
        problemText: `Cho nền kinh tế:
$C = 100 + 0.8 Y_d; \\quad T = 50; \\quad I = 200 - 10r; \\quad G = 150$
$M^S/P = 400; \\quad M^D/P = 0.4Y - 20r$
a) Thiết lập phương trình IS và LM. (1.0đ)
b) Tìm lãi suất $r^*$ và sản lượng $Y^*$ cân bằng. (1.0đ)
c) Nếu chính phủ tăng chi tiêu $\\Delta G = 20$, xác định lãi suất mới, sản lượng mới và mức đầu tư tư nhân bị lấn át. (1.0đ)`,
        fullSolution: `
a) • IS: $Y = 100 + 0.8(Y - 50) + 200 - 10r + 150 \\iff Y = 410 + 0.8Y - 10r \\iff 0.2Y = 410 - 10r \\implies \\mathbf{IS: Y = 2.050 - 50r}$.
• LM: $400 = 0.4Y - 20r \\iff 20r = 0.4Y - 400 \\implies \\mathbf{LM: r = 0.02Y - 20}$ hay $\\mathbf{Y = 1.000 + 50r}$. (1.0đ)

b) Cân bằng: $2.050 - 50r = 1.000 + 50r \\iff 100r = 1.050 \\implies \\mathbf{r^* = 10.5\\%}$.
Thay vào: $\\mathbf{Y^* = 1.000 + 50(10.5) = 1.525}$.
Đầu tư ban đầu: $I_0 = 200 - 10(10.5) = 95$. (1.0đ)

c) Khi G tăng 20: $k = 1/(1-0.8) = 5$. IS dịch phải $5 \\times 20 = 100$: $\\mathbf{IS': Y = 2.150 - 50r}$.
Cân bằng mới: $2.150 - 50r = 1.000 + 50r \\iff 100r = 1.150 \\implies \\mathbf{r_1^* = 11.5\\%}$.
$\\mathbf{Y_1^* = 1.000 + 50(11.5) = 1.575}$.
• Đầu tư mới: $I_1 = 200 - 10(11.5) = 85$.
• Lấn át đầu tư: $\\Delta I = 85 - 95 = \\mathbf{-10}$ đơn vị. (1.0đ)
        `
      }
    ]
  },

  // ================= ĐỀ THI 3: TỔNG HỢP VI MÔ & VĨ MÔ =================
  {
    id: "exam-comprehensive-3",
    title: "Đề thi tổng hợp cuối kỳ: Vi mô và vĩ mô phân loại học lực A+",
    targetUniversity: "Đại học Kinh tế - ĐHQGHN (VNU-UEB) & Học viện Ngoại giao (DAV)",
    durationMinutes: 90,
    totalPoints: 10,
    parts: [
      {
        partTitle: "PHẦN I: TRẮC NGHIỆM TỔNG HỢP (4.0 ĐIỂM)",
        description: "Chọn đáp án đúng nhất (mỗi câu 0.8 điểm):",
        questions: [
          {
            qNum: 1,
            text: "Trong thị trường độc quyền nhóm, Cân bằng Nash phản ánh trạng thái mà:",
            options: [
              "Cả hai doanh nghiệp đều đạt lợi nhuận tối đa tuyệt đối như liên minh Cartel",
              "Mỗi doanh nghiệp lựa chọn chiến lược tối ưu nhất cho mình với điều kiện chiến lược của đối thủ đã được xác định",
              "Giá bán bằng đúng chi phí biên MC như cạnh tranh hoàn hảo",
              "Một doanh nghiệp phá sản và rời khỏi ngành"
            ],
            correct: 1,
            point: 0.8,
            expl: "Cân bằng Nash là trạng thái không người chơi nào có động cơ đơn phương thay đổi chiến lược khi biết đối thủ giữ nguyên chiến lược."
          },
          {
            qNum: 2,
            text: "Khi NHTW thực hiện chính sách nới lỏng tiền tệ trong nền kinh tế mở có tỷ giá thả nổi và vốn luân chuyển tự do (Mundell-Fleming):",
            options: [
              "Sản lượng không đổi vì chính sách tiền tệ bị vô hiệu",
              "Lãi suất giảm đẩy dòng vốn tháo chạy, nội tệ giảm giá làm tăng xuất khẩu ròng NX, kích thích sản lượng tăng mạnh",
              "Nội tệ tăng giá làm nhập khẩu tăng",
              "Ngân sách chính phủ bị thâm hụt nặng"
            ],
            correct: 1,
            point: 0.8,
            expl: "Dưới tỷ giá thả nổi, chính sách tiền tệ có hiệu lực tối đa vì cơ chế truyền dẫn qua tỷ giá hối đoái: M tăng -> e giảm (nội tệ mất giá) -> NX tăng mạnh -> Y tăng."
          },
          {
            qNum: 3,
            text: "Một hàng hóa có tính chất 'Loại trừ được' (Excludable) nhưng 'Không có tính cạnh tranh trong tiêu dùng' (Non-rivalrous) được xếp vào loại:",
            options: ["Hàng hóa cá nhân (Private goods)", "Hàng hóa công cộng (Public goods)", "Tài nguyên chung (Common resources)", "Hàng hóa độc quyền nhóm tự nhiên / Câu lạc bộ (Club goods)"],
            correct: 3,
            point: 0.8,
            expl: "Club goods (như truyền hình cáp, đường cao tốc thu phí không tắc nghẽn): Ai trả phí mới được dùng (loại trừ) nhưng người này xem không ảnh hưởng đến người khác (không cạnh tranh)."
          },
          {
            qNum: 4,
            text: "Theo mô hình Solow, Quy tắc vàng của tích lũy tư bản (Golden Rule) là trạng thái dừng mà tại đó:",
            options: ["Tỷ lệ tiết kiệm s = 100%", "Sản lượng Y đạt mức tối đa", "Tiêu dùng bình quân đầu người c* đạt mức cực đại", "Khấu hao bằng 0"],
            correct: 2,
            point: 0.8,
            expl: "Quy tắc vàng xác định mức tư bản k*gold tối đa hóa mức tiêu dùng bền vững c* = f(k*) - (δ + n)k*, tương ứng điều kiện MPK = δ + n."
          },
          {
            qNum: 5,
            text: "Theo Nguyên lý Taylor, khi lạm phát tăng thêm 2%, để ổn định kinh tế thì NHTW cần phải:",
            options: ["Tăng lãi suất danh nghĩa ít hơn 2%", "Tăng lãi suất danh nghĩa nhiều hơn 2% để tăng lãi suất thực tế", "Giảm lãi suất danh nghĩa để hỗ trợ doanh nghiệp", "Giữ nguyên lãi suất danh nghĩa"],
            correct: 1,
            point: 0.8,
            expl: "Nguyên lý Taylor yêu cầu tăng lãi suất danh nghĩa lớn hơn mức tăng lạm phát (hệ số > 1, chuẩn là 1.5) để lãi suất thực tế r = i - π tăng lên, thắt chặt tổng cầu."
          }
        ]
      },
      {
        partTitle: "PHẦN II: NHẬN ĐỊNH ĐÚNG / SAI & GIẢI THÍCH (3.0 ĐIỂM)",
        description: "Xác định Đúng/Sai và giải thích luận cứ kinh tế (mỗi câu 1.5 điểm):",
        items: [
          {
            itemNum: 1,
            statement: "Đối với hàng hóa Giffen, khi giá của nó tăng lên thì lượng cầu về hàng hóa đó cũng tăng lên, vi phạm quy luật cầu.",
            verdict: "ĐÚNG",
            rubric: "• Kết luận ĐÚNG: 0.5đ\n• Lập luận kinh tế: Hàng Giffen là hàng cấp thấp cực đoan có Hiệu ứng thu nhập (IE) mang dấu dương và có độ lớn lấn át hoàn toàn Hiệu ứng thay thế (SE âm): |IE| > |SE|: 0.5đ\n• Công thức Slutsky Delta X = SE + IE và vẽ đồ thị đường cầu dốc lên: 0.5đ."
          },
          {
            itemNum: 2,
            statement: "Theo học thuyết Tương đương Ricardo, việc chính phủ giảm thuế hôm nay sẽ kích thích tiêu dùng của hộ gia đình tăng mạnh và đẩy tăng trưởng kinh tế.",
            verdict: "SAI",
            rubric: "• Kết luận SAI: 0.5đ\n• Lập luận kinh tế: Người dân hiểu rằng giảm thuế hôm nay kèm vay nợ công sẽ dẫn tới tăng thuế tương đương trong tương lai để trả nợ. Do đó họ dành toàn bộ tiền thuế giảm để gửi tiết kiệm, C không đổi: 0.5đ\n• Phương thức triệt tiêu số nhân kích cầu và liên hệ thực tế: 0.5đ."
          }
        ]
      },
      {
        partTitle: "PHẦN III: BÀI TẬP TỔNG HỢP TỰ LUẬN (3.0 ĐIỂM)",
        description: "Giải bài toán độc quyền nhóm Cournot sau:",
        problemText: `Thị trường gồm 2 doanh nghiệp độc quyền nhóm đối mặt với đường cầu: $P = 100 - (Q_1 + Q_2)$.
Cả 2 doanh nghiệp đều có chi phí biên không đổi: $MC_1 = MC_2 = 10$ và không có chi phí cố định.
a) Thiết lập hàm phản ứng của từng doanh nghiệp $Q_1 = R_1(Q_2)$ và $Q_2 = R_2(Q_1)$. (1.0đ)
b) Xác định sản lượng cân bằng Cournot ($Q_1^*, Q_2^*$), giá thị trường ($P^*$) và lợi nhuận của mỗi doanh nghiệp. (1.0đ)
c) Nếu doanh nghiệp 1 trở thành Leader (mô hình Stackelberg) đi trước, xác định sản lượng và lợi nhuận mới của doanh nghiệp 1. So sánh với Cournot. (1.0đ)`,
        fullSolution: `
a) • Doanh thu DN 1: $TR_1 = P \\times Q_1 = (100 - Q_1 - Q_2)Q_1 = 100Q_1 - Q_1^2 - Q_1 Q_2$.
• Doanh thu biên: $MR_1 = 100 - 2Q_1 - Q_2$.
• Tối đa hóa LN: $MR_1 = MC_1 \\iff 100 - 2Q_1 - Q_2 = 10 \\implies \\mathbf{Q_1 = R_1(Q_2) = \\frac{90 - Q_2}{2}}$.
• Do tính đối xứng: $\\mathbf{Q_2 = R_2(Q_1) = \\frac{90 - Q_1}{2}}$. (1.0đ)

b) Cân bằng Cournot: Thay $Q_2$ vào $Q_1$:
$Q_1 = \\frac{90 - (90 - Q_1)/2}{2} = \\frac{90 + Q_1}{4} \\iff 4Q_1 - Q_1 = 90 \\implies \\mathbf{Q_1^* = Q_2^* = 30}$.
• Tổng sản lượng: $Q = 60$.
• Giá thị trường: $\\mathbf{P^* = 100 - 60 = 40}$.
• Lợi nhuận mỗi bên: $\\mathbf{\\pi_1 = \\pi_2 = (40 - 10) \\times 30 = 900}$. (1.0đ)

c) Mô hình Stackelberg (DN 1 là Leader):
DN 1 thế hàm phản ứng của Follower vào hàm cầu của mình:
$P = 100 - Q_1 - \\frac{90 - Q_1}{2} = 100 - Q_1 - 45 + 0.5Q_1 = 55 - 0.5Q_1$.
• $TR_1 = 55Q_1 - 0.5Q_1^2 \\implies MR_1 = 55 - Q_1$.
• Cho $MR_1 = MC = 10 \\iff 55 - Q_1 = 10 \\implies \\mathbf{Q_1^{Stackelberg} = 45}$.
• Follower: $Q_2 = \\frac{90 - 45}{2} = \\mathbf{22.5}$.
• Tổng sản lượng: $Q = 67.5 \\implies P = 100 - 67.5 = 32.5$.
• Lợi nhuận Leader: $\\mathbf{\\pi_1 = (32.5 - 10) \\times 45 = 1.012.5}$.
Nhận xét: Lợi nhuận DN 1 tăng từ 900 lên 1.012,5 (+12.5%) nhờ lợi thế người đi trước! (1.0đ)
        `
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MOCK_EXAMS_DATA;
}
