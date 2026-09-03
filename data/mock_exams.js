// Bộ Đề Thi Học Kỳ Trọn Vẹn Chuẩn Đại Học Kèm Barem Điểm Chi Tiết
// Cấu trúc 3 phần: Trắc nghiệm (4đ) + Đúng/Sai giải thích (3đ) + Bài tập lớn (3đ)

const MOCK_EXAMS_DATA = [
  // ================= ĐỀ THI 1: KINH TẾ VI MÔ =================
  {
    id: "exam-micro-1",
    title: "Đề Thi Cuối Kỳ Chuẩn: Kinh Tế Vi Mô Đại Cương",
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
    title: "Đề Thi Cuối Kỳ Chuẩn: Kinh Tế Vĩ Mô Đại Cương",
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MOCK_EXAMS_DATA;
}
