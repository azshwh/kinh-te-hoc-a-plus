// Cẩm nang 12 Dạng Bài Tập Tự Luận Định Lượng Lớn Có Lời Giải Mẫu Từng Bước
// Biên soạn theo chuẩn cấu trúc đề thi tự luận các trường đại học hàng đầu (NEU, FTU, UEH, VNU...)

const WORKED_PROBLEMS_DATA = [
  // ================= DẠNG 1: CUNG CẦU & CHÍNH SÁCH =================
  {
    id: "prob1",
    category: "micro",
    chapter: 2,
    title: "Dạng 1: Cân Bằng Cung - Cầu, Can Thiệp Thuế & Tính Thặng Dư Xã Hội",
    examLevel: "Đề thi cuối kỳ Đại học Kinh tế Quốc dân (NEU)",
    context: `Một thị trường sản phẩm X có hàm cầu và hàm cung thị trường có dạng:
$$Q_D = 120 - 2P \\quad \\text{và} \\quad Q_S = 30 + P$$
(Trong đó: P tính bằng nghìn đồng/sản phẩm; Q tính bằng nghìn sản phẩm).`,
    subQuestions: [
      "a) Xác định mức giá ($P^*$) và sản lượng ($Q^*$) cân bằng của thị trường. Tính thặng dư tiêu dùng ($CS$), thặng dư sản xuất ($PS$) và tổng thặng dư xã hội ($TS$).",
      "b) Tính độ co giãn của cầu theo giá tại điểm cân bằng ($E_D$). Doanh nghiệp nên tăng giá hay giảm giá để tăng doanh thu?",
      "c) Giả sử chính phủ đánh thuế $t = 6$ nghìn đồng/sản phẩm vào người bán. Xác định điểm cân bằng mới, giá người mua phải trả ($P_b$), giá người bán thực nhận ($P_s$), số tiền thuế mỗi bên phải gánh chịu, số thu ngân sách của chính phủ ($T$) và tổn thất vô ích của xã hội ($DWL$).",
      "d) Minh họa kết quả trên đồ thị và nhận xét về tính hiệu quả của chính sách thuế."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Điểm cân bằng ban đầu & Thặng dư</h4>
          <p>Tại điểm cân bằng thị trường: $Q_D = Q_S$</p>
          <p>$$\\iff 120 - 2P = 30 + P \\iff 3P = 90 \\implies \\mathbf{P^* = 30} \\text{ (nghìn đồng)}$$</p>
          <p>Thay $P^* = 30$ vào hàm cầu (hoặc cung): $Q^* = 120 - 2(30) = \\mathbf{60} \\text{ (nghìn sản phẩm)}$.</p>
          <p class="mt-2">• Tung độ góc đường cầu ($Q_D = 0$): $120 - 2P = 0 \\implies P_{max} = 60$.</p>
          <p>• Tung độ góc đường cung ($Q_S = 0$): $30 + P = 0 \\implies P_{min} = 0$ (với $P \\ge 0$).</p>
          <p class="mt-2">• <strong>Thặng dư tiêu dùng (CS):</strong></p>
          <p>$$CS_0 = \\frac{1}{2} \\times (P_{max} - P^*) \\times Q^* = \\frac{1}{2} \\times (60 - 30) \\times 60 = \\mathbf{900} \\text{ (triệu đồng)}$$</p>
          <p>• <strong>Thặng dư sản xuất (PS):</strong></p>
          <p>$$PS_0 = \\frac{1}{2} \\times (P^* - P_{min}) \\times Q^* + \\text{hình thang} = \\frac{(30 + 0)}{2} \\times 60 = \\mathbf{900} \\text{ (hoặc } PS = \\frac{1}{2}(30 - (-30)) \\times 60 - \\dots = \\mathbf{1.350}\\text{)}$$</p>
          <p>• <strong>Tổng thặng dư xã hội (TS):</strong> $TS_0 = CS_0 + PS_0 = \\mathbf{2.250} \\text{ triệu đồng}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Độ co giãn của cầu tại điểm cân bằng</h4>
          <p>Hàm cầu: $Q_D = 120 - 2P \\implies Q'_D(P) = -2$.</p>
          <p>Độ co giãn của cầu theo giá tại điểm cân bằng $(P^* = 30, Q^* = 60)$:</p>
          <p>$$E_D = Q'_D(P) \\times \\frac{P^*}{Q^*} = -2 \\times \\frac{30}{60} = \\mathbf{-1} \\implies |E_D| = 1$$</p>
          <p><strong>Kết luận:</strong> Cầu co giãn đơn vị ($|E_D| = 1$). Tại điểm này, doanh thu của doanh nghiệp đang đạt giá trị CỰC ĐẠI. Do đó doanh nghiệp nên <strong>giữ nguyên giá</strong>, bất kỳ hành động tăng giá hay giảm giá nào cũng sẽ làm giảm tổng doanh thu.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Tác động của chính sách thuế t = 6</h4>
          <p>Khi đánh thuế $t = 6$ vào người bán, giá người bán thực nhận là $P_s = P_b - 6$.</p>
          <p>Đường cung mới sau thuế:</p>
          <p>$$Q_S' = 30 + (P - 6) = P + 24$$</p>
          <p>Cân bằng thị trường mới: $Q_D = Q_S' \\iff 120 - 2P = P + 24 \\iff 3P = 96$</p>
          <p>$$\\implies \\mathbf{P_b = 32} \\text{ (nghìn đồng, giá người mua trả)}$$</p>
          <p>$$\\implies \\mathbf{P_s = P_b - t = 32 - 6 = 26} \\text{ (nghìn đồng, giá người bán nhận)}$$</p>
          <p>Sản lượng giao dịch mới: $Q_t = 120 - 2(32) = \\mathbf{56} \\text{ (nghìn sản phẩm)}$.</p>
          <p class="mt-2">• Thuế người mua chịu: $t_b = P_b - P^* = 32 - 30 = \\mathbf{2} \\text{ nghìn đồng/sp}$.</p>
          <p>• Thuế người bán chịu: $t_s = P^* - P_s = 30 - 26 = \\mathbf{4} \\text{ nghìn đồng/sp}$.</p>
          <p>• Số thu ngân sách của Chính phủ: $T = t \\times Q_t = 6 \\times 56 = \\mathbf{336} \\text{ (triệu đồng)}$.</p>
          <p>• <strong>Tổn thất vô ích của xã hội (DWL):</strong></p>
          <p>$$DWL = \\frac{1}{2} \\times t \\times (Q^* - Q_t) = \\frac{1}{2} \\times 6 \\times (60 - 56) = \\mathbf{12} \\text{ (triệu đồng)}$$</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Thay nhầm giá $P_s$ vào hàm cầu hoặc thay $P_b$ vào hàm cung ban đầu.",
      "Quên tính tung độ góc $P_{max}, P_{min}$ khi tính diện tích tam giác $CS$ và $PS$.",
      "Tính nhầm $DWL$ bằng cách nhân với sản lượng mới $Q_t$ thay vì phần sụt giảm sản lượng $(Q^* - Q_t)$."
    ]
  },

  // ================= DẠNG 2: TỐI ƯU HÓA TIÊU DÙNG =================
  {
    id: "prob2",
    category: "micro",
    chapter: 4,
    title: "Dạng 2: Tối Ưu Hóa Người Tiêu Dùng Bằng Phương Pháp Đại Số & Lagrange",
    examLevel: "Đề thi Olympic Kinh tế học / ĐH Ngoại Thương (FTU)",
    context: `Một người tiêu dùng có mức thu nhập hàng tháng $I = 1.200.000$ đồng dùng để mua hai hàng hóa X và Y.
Giá của hàng hóa X là $P_X = 20.000$ đồng/sp; giá của hàng hóa Y là $P_Y = 40.000$ đồng/sp.
Hàm tổng mức thỏa dụng của người tiêu dùng có dạng:
$$U(X, Y) = X^{0.5} \\cdot Y^{0.5}$$`,
    subQuestions: [
      "a) Viết phương trình đường ngân sách và vẽ đồ thị minh họa.",
      "b) Tính tỷ lệ thay thế biên ($MRS_{XY}$). Xác định giỏ hàng hóa tối ưu ($X^*, Y^*$) và tổng mức thỏa dụng cực đại ($U_{max}$).",
      "c) Giải lại bài toán tối ưu hóa bằng phương pháp Nhân tử Lagrange (Lagrange Multiplier).",
      "d) Nếu giá hàng hóa X tăng lên thành $P_X' = 30.000$ đồng/sp, xác định giỏ hàng tối ưu mới và phân tích hiệu ứng thay thế, hiệu ứng thu nhập theo Slutsky."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Phương trình đường ngân sách</h4>
          <p>Phương trình tổng quát: $P_X \\cdot X + P_Y \\cdot Y = I$</p>
          <p>$$\\iff 20.000 X + 40.000 Y = 1.200.000 \\iff \\mathbf{X + 2Y = 60} \\iff \\mathbf{Y = 30 - 0.5X}$$</p>
          <p>• Điểm cắt trục hoành ($Y=0$): $X_{max} = I / P_X = 1.200 / 20 = 60$ sản phẩm.</p>
          <p>• Điểm cắt trục tung ($X=0$): $Y_{max} = I / P_Y = 1.200 / 40 = 30$ sản phẩm.</p>
          <p>• Độ dốc đường ngân sách: $-\\frac{P_X}{P_Y} = -\\frac{20}{40} = -0.5$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Phương pháp cân bằng biên ($MRS = P_X/P_Y$)</h4>
          <p>Lợi ích cận biên của X và Y:</p>
          <p>$$MU_X = \\frac{\\partial U}{\\partial X} = 0.5 X^{-0.5} Y^{0.5} = \\frac{0.5 Y^{0.5}}{X^{0.5}}$$</p>
          <p>$$MU_Y = \\frac{\\partial U}{\\partial Y} = 0.5 X^{0.5} Y^{-0.5} = \\frac{0.5 X^{0.5}}{Y^{0.5}}$$</p>
          <p>Tỷ lệ thay thế biên:</p>
          <p>$$MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{0.5 Y^{0.5} / X^{0.5}}{0.5 X^{0.5} / Y^{0.5}} = \\mathbf{\\frac{Y}{X}}$$</p>
          <p>Điều kiện tối đa hóa thỏa dụng:</p>
          <p>$$MRS_{XY} = \\frac{P_X}{P_Y} \\iff \\frac{Y}{X} = \\frac{20.000}{40.000} = \\frac{1}{2} \\implies \\mathbf{X = 2Y}$$</p>
          <p>Thay $X = 2Y$ vào phương trình đường ngân sách $X + 2Y = 60$:</p>
          <p>$$2Y + 2Y = 60 \\iff 4Y = 60 \\implies \\mathbf{Y^* = 15} \\implies \\mathbf{X^* = 30}$$</p>
          <p>Mức thỏa dụng cực đại: $U_{max} = (30)^{0.5} \\cdot (15)^{0.5} = \\sqrt{450} \\approx \\mathbf{21.21}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Phương pháp Nhân tử Lagrange</h4>
          <p>Thiết lập hàm Lagrange:</p>
          <p>$$\\mathcal{L}(X, Y, \\lambda) = X^{0.5} Y^{0.5} + \\lambda(1.200 - 20X - 40Y)$$</p>
          <p>Hệ điều kiện bậc nhất (First Order Conditions - FOC):</p>
          <p>$$\\begin{cases} \\frac{\\partial \\mathcal{L}}{\\partial X} = 0.5 X^{-0.5} Y^{0.5} - 20\\lambda = 0 & (1) \\\\ \\frac{\\partial \\mathcal{L}}{\\partial Y} = 0.5 X^{0.5} Y^{-0.5} - 40\\lambda = 0 & (2) \\\\ \\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 1.200 - 20X - 40Y = 0 & (3) \\end{cases}$$</p>
          <p>Chia phương trình (1) cho phương trình (2):</p>
          <p>$$\\frac{0.5 X^{-0.5} Y^{0.5}}{0.5 X^{0.5} Y^{-0.5}} = \\frac{20\\lambda}{40\\lambda} \\iff \\frac{Y}{X} = \\frac{1}{2} \\implies X = 2Y$$</p>
          <p>Thay vào (3) cho nghiệm duy nhất: $\\mathbf{X^* = 30, Y^* = 15, \\lambda^* \\approx 0.0177}$.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Đạo hàm sai số mũ phân số của hàm Cobb-Douglas.",
      "Quên nhân với giá $P$ khi lập phương trình đường ngân sách.",
      "Không viết rõ điều kiện FOC khi dùng phương pháp Lagrange."
    ]
  },

  // ================= DẠNG 3: CHI PHÍ & CẠNH TRANH HOÀN HẢO =================
  {
    id: "prob3",
    category: "micro",
    chapter: 5,
    title: "Dạng 3: Hàm Chi Phí, Điểm Hòa Vốn, Điểm Đóng Cửa & Hàm Cung Ngắn Hạn",
    examLevel: "Đề thi Đại học Kinh tế TP.HCM (UEH)",
    context: `Một doanh nghiệp hoạt động trong thị trường cạnh tranh hoàn hảo có hàm tổng chi phí ngắn hạn:
$$TC = Q^2 + 10Q + 100$$
(Q tính bằng sản phẩm; TC tính bằng nghìn đồng).`,
    subQuestions: [
      "a) Xác định các hàm chi phí: $FC, VC, AFC, AVC, ATC, MC$.",
      "b) Xác định mức sản lượng và giá tại điểm hòa vốn của doanh nghiệp.",
      "c) Xác định mức giá đóng cửa sản xuất trong ngắn hạn của doanh nghiệp.",
      "d) Thiết lập phương trình đường cung ngắn hạn của doanh nghiệp.",
      "e) Nếu giá thị trường là $P = 50$ nghìn đồng/sp, hãy xác định sản lượng tối ưu, tổng doanh thu, tổng chi phí và lợi nhuận của doanh nghiệp."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Thiết lập các hàm chi phí</h4>
          <p>• Chi phí cố định ($FC$): $FC = TC(0) = \\mathbf{100}$.</p>
          <p>• Chi phí biến đổi ($VC$): $VC = TC - FC = \\mathbf{Q^2 + 10Q}$.</p>
          <p>• Chi phí cố định trung bình ($AFC$): $AFC = FC / Q = \\mathbf{100 / Q}$.</p>
          <p>• Chi phí biến đổi trung bình ($AVC$): $AVC = VC / Q = \\mathbf{Q + 10}$.</p>
          <p>• Chi phí trung bình ($ATC$): $ATC = TC / Q = \\mathbf{Q + 10 + 100 / Q}$.</p>
          <p>• Chi phí cận biên ($MC$): $MC = (TC)'_Q = \\mathbf{2Q + 10}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b & c: Điểm hòa vốn và Điểm đóng cửa</h4>
          <p>• <strong>Điểm hòa vốn ($ATC_{min}$):</strong></p>
          <p>Cho $MC = ATC \\iff 2Q + 10 = Q + 10 + \\frac{100}{Q} \\iff Q = \\frac{100}{Q} \\iff Q^2 = 100 \\implies \\mathbf{Q_{hv} = 10}$.</p>
          <p>Mức giá hòa vốn: $P_{hv} = ATC_{min} = 10 + 10 + \\frac{100}{10} = \\mathbf{30}$ nghìn đồng.</p>
          <p class="mt-2">• <strong>Điểm đóng cửa ($AVC_{min}$):</strong></p>
          <p>Hàm $AVC = Q + 10$ là đường thẳng đồng biến. Khi $Q \\to 0$, $AVC_{min} = 10$.</p>
          <p>Do đó, mức giá đóng cửa của doanh nghiệp là: $\\mathbf{P_{đóng\\,cửa} = 10}$ nghìn đồng.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu d & e: Đường cung và Lựa chọn tối ưu khi P = 50</h4>
          <p>• <strong>Đường cung ngắn hạn ($S$):</strong> Là phần đường $MC$ nằm trên $AVC_{min}$.</p>
          <p>$$P = MC \\iff P = 2Q + 10 \\iff \\mathbf{Q_S = 0.5P - 5} \\quad \\text{với } P \\ge 10$$</p>
          <p>• <strong>Khi giá thị trường P = 50:</strong></p>
          <p>Do $P = 50 > P_{hv} = 30$, doanh nghiệp sản xuất và có lợi nhuận dương.</p>
          <p>Điều kiện tối ưu: $P = MC \\iff 50 = 2Q + 10 \\iff 2Q = 40 \\implies \\mathbf{Q^* = 20}$ sản phẩm.</p>
          <p>• Tổng doanh thu: $TR = P \\times Q^* = 50 \\times 20 = \\mathbf{1.000}$ nghìn đồng.</p>
          <p>• Tổng chi phí: $TC = (20)^2 + 10(20) + 100 = 400 + 200 + 100 = \\mathbf{700}$ nghìn đồng.</p>
          <p>• Lợi nhuận kinh tế: $\\pi = TR - TC = 1.000 - 700 = \\mathbf{300}$ nghìn đồng.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Quên điều kiện $P \\ge AVC_{min}$ khi viết hàm cung.",
      "Tìm cực tiểu ATC bằng cách đạo hàm sai hoặc không giải phương trình $MC = ATC$."
    ]
  },

  // ================= DẠNG 4: ĐỘC QUYỀN & PHÂN BIỆT GIÁ =================
  {
    id: "prob4",
    category: "micro",
    chapter: 6,
    title: "Dạng 4: Độc Quyền Thuần Túy & Phân Biệt Giá Cấp 3 Trên 2 Thị Trường",
    examLevel: "Đề thi Học viện Ngoại giao (DAV) & NEU",
    context: `Một hãng dược phẩm độc quyền sản xuất một loại thuốc mới với hàm chi phí:
$$TC = 20Q + 500 \\implies MC = 20$$
Hãng có thể bán thuốc trên hai thị trường tách biệt:
- Thị trường Bệnh viện công (1): $P_1 = 100 - Q_1$
- Thị trường Phòng khám tư nhân (2): $P_2 = 140 - 2Q_2$`,
    subQuestions: [
      "a) Nếu hãng thực hiện phân biệt giá cấp 3, hãy xác định giá bán, sản lượng và lợi nhuận trên từng thị trường. Tổng lợi nhuận của hãng là bao nhiêu?",
      "b) Tính độ co giãn của cầu theo giá ($E_D$) trên mỗi thị trường tại mức giá tối ưu. Thị trường nào có giá bán cao hơn và giải thích tại sao?",
      "c) Nếu chính phủ ban hành luật cấm phân biệt giá (buộc bán chung một giá), hãy thiết lập hàm cầu tổng hợp, xác định mức giá và sản lượng chung tối ưu."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Tối đa hóa lợi nhuận khi phân biệt giá cấp 3</h4>
          <p>Quy tắc: Cho $MR_1 = MR_2 = MC = 20$.</p>
          <p>• <strong>Thị trường 1:</strong> $P_1 = 100 - Q_1 \\implies TR_1 = 100Q_1 - Q_1^2 \\implies MR_1 = 100 - 2Q_1$.</p>
          <p>$$MR_1 = MC \\iff 100 - 2Q_1 = 20 \\iff 2Q_1 = 80 \\implies \\mathbf{Q_1^* = 40}$$</p>
          <p>$$P_1^* = 100 - 40 = \\mathbf{60}$$</p>
          <p>• <strong>Thị trường 2:</strong> $P_2 = 140 - 2Q_2 \\implies TR_2 = 140Q_2 - 2Q_2^2 \\implies MR_2 = 140 - 4Q_2$.</p>
          <p>$$MR_2 = MC \\iff 140 - 4Q_2 = 20 \\iff 4Q_2 = 120 \\implies \\mathbf{Q_2^* = 30}$$</p>
          <p>$$P_2^* = 140 - 2(30) = \\mathbf{80}$$</p>
          <p>• Tổng sản lượng: $Q = Q_1 + Q_2 = 40 + 30 = 70$.</p>
          <p>• Tổng doanh thu: $TR = P_1 Q_1 + P_2 Q_2 = 60(40) + 80(30) = 2.400 + 2.400 = 4.800$.</p>
          <p>• Tổng chi phí: $TC = 20(70) + 500 = 1.400 + 500 = 1.900$.</p>
          <p>• <strong>Tổng lợi nhuận:</strong> $\\pi = TR - TC = 4.800 - 1.900 = \\mathbf{2.900}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Phân tích độ co giãn theo nguyên lý Lerner</h4>
          <p>• Tại thị trường 1: $E_{D1} = Q'_1(P) \\times \\frac{P_1}{Q_1} = -1 \\times \\frac{60}{40} = \\mathbf{-1.5} \\implies |E_{D1}| = 1.5$.</p>
          <p>• Tại thị trường 2: $Q_2 = 70 - 0.5P_2 \\implies E_{D2} = -0.5 \\times \\frac{80}{30} = \\mathbf{-1.33} \\implies |E_{D2}| = 1.33$.</p>
          <p><strong>Giải thích kinh tế:</strong> Thị trường 2 kém co giãn hơn ($|E_{D2}| = 1.33 < |E_{D1}| = 1.5$), người bệnh ở phòng khám tư nhân ít nhạy cảm với giá hơn nên nhà độc quyền đặt giá bán $P_2 = 80$ cao hơn $P_1 = 60$ để vắt kiệt thặng dư tiêu dùng.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Cộng hàm cầu sai (phải cộng theo lượng $Q = Q_1 + Q_2$ chứ không được cộng theo giá $P$).",
      "Quên trừ chi phí cố định khi tính tổng lợi nhuận."
    ]
  },

  // ================= DẠNG 5: HẠCH TOÁN GDP & CHUỖI CHỈ TIÊU SNA =================
  {
    id: "prob5",
    category: "macro",
    chapter: 7,
    title: "Dạng 5: Hạch Toán GDP, GNP, NNP, NI, PI, DI (Hệ Thống SNA Toàn Diện)",
    examLevel: "Đề thi Chuẩn Quốc Gia môn Kinh tế Vĩ mô",
    context: `Số liệu hạch toán quốc gia của một nền kinh tế trong năm (đơn vị: tỷ USD):
- Tiêu dùng của hộ gia đình (C): 800
- Đầu tư ròng (In): 120
- Khấu hao tài sản cố định (De): 80
- Chi mua sắm của chính phủ (G): 300
- Xuất khẩu (X): 250; Nhập khẩu (IM): 220
- Thu nhập yếu tố ròng từ nước ngoài (NPI / NFIA): -30
- Thuế gián thu ròng (Te): 70
- Lợi nhuận doanh nghiệp không chia (Pr_retained): 40
- Thuế thu nhập doanh nghiệp: 50
- Đóng góp bảo hiểm xã hội: 60
- Thuế thu nhập cá nhân: 80
- Trợ cấp của chính phủ cho hộ gia đình (Tr): 90`,
    subQuestions: [
      "a) Tính Tổng đầu tư ($I$) và Tổng sản phẩm quốc nội ($GDP$) theo phương pháp chi tiêu.",
      "b) Tính Tổng sản phẩm quốc dân ($GNP$), Sản phẩm quốc dân ròng ($NNP$), và Thu nhập quốc dân ($NI$).",
      "c) Tính Thu nhập cá nhân ($PI$) và Thu nhập khả dụng ($DI$).",
      "d) Hộ gia đình dùng thu nhập khả dụng cho tiêu dùng và tiết kiệm. Hãy xác định mức Tiết kiệm cá nhân ($S_p$)."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Tính I và GDP</h4>
          <p>• Tổng đầu tư: $I = I_n + De = 120 + 80 = \\mathbf{200}$ tỷ USD.</p>
          <p>• Xuất khẩu ròng: $NX = X - IM = 250 - 220 = \\mathbf{30}$ tỷ USD.</p>
          <p>• <strong>Tổng sản phẩm quốc nội (GDP):</strong></p>
          <p>$$GDP = C + I + G + NX = 800 + 200 + 300 + 30 = \\mathbf{1.330} \\text{ tỷ USD}$$</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Tính GNP, NNP và NI</h4>
          <p>• $GNP = GDP + NPI = 1.330 + (-30) = \\mathbf{1.300}$ tỷ USD.</p>
          <p>• $NNP = GNP - De = 1.300 - 80 = \\mathbf{1.220}$ tỷ USD.</p>
          <p>• $NI = NNP - Te = 1.220 - 70 = \\mathbf{1.150}$ tỷ USD.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c & d: Tính PI, DI và Tiết kiệm Sp</h4>
          <p>• Thu nhập cá nhân (PI):</p>
          <p>$$PI = NI - (\\text{Lợi nhuận giữ lại} + \\text{Thuế TNDN} + \\text{Bảo hiểm XH}) + Tr$$</p>
          <p>$$PI = 1.150 - (40 + 50 + 60) + 90 = 1.150 - 150 + 90 = \\mathbf{1.090} \\text{ tỷ USD}$$</p>
          <p>• Thu nhập khả dụng (DI):</p>
          <p>$$DI = PI - \\text{Thuế TNCN} = 1.090 - 80 = \\mathbf{1.010} \\text{ tỷ USD}$$</p>
          <p>• Tiết kiệm của hộ gia đình ($S_p$):</p>
          <p>$$S_p = DI - C = 1.010 - 800 = \\mathbf{210} \\text{ tỷ USD}$$</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Lấy luôn $I_n$ cộng vào GDP mà quên cộng thêm khấu hao $De$ để ra tổng đầu tư $I$.",
      "Cộng trợ cấp $Tr$ vào GDP (Trợ cấp không tạo ra sản phẩm mới nên không nằm trong GDP)."
    ]
  },

  // ================= DẠNG 6: MÔ HÌNH IS-LM TOÀN DIỆN =================
  {
    id: "prob6",
    category: "macro",
    chapter: 11,
    title: "Dạng 6: Mô Hình Cân Bằng IS - LM & Đo Lường Hiện Tượng Lấn Át (Crowding-out)",
    examLevel: "Đề thi Cao học & Cuối kỳ ĐH Kinh tế Quốc dân (NEU)",
    context: `Một nền kinh tế đóng có các hàm số kinh tế vĩ mô như sau:
- Hàm tiêu dùng: $C = 200 + 0.75 Y_d$ (với thuế $T = 100$)
- Hàm đầu tư: $I = 300 - 20r$ (r tính bằng %)
- Chi tiêu chính phủ: $G = 250$
- Cung tiền thực tế: $M^S / P = 500$
- Cầu tiền thực tế: $M^D / P = 0.5Y - 40r$`,
    subQuestions: [
      "a) Thiết lập phương trình đường IS và đường LM. Giải thích ý nghĩa độ dốc của hai đường.",
      "b) Xác định lãi suất cân bằng ($r^*$) và sản lượng cân bằng ($Y^*$) đồng thời trên cả hai thị trường.",
      "c) Giả sử chính phủ tăng chi tiêu $\\Delta G = 50$. Hãy xác định phương trình đường IS mới, lãi suất và sản lượng cân bằng mới.",
      "d) Tính mức độ đầu tư tư nhân bị lấn át (Crowding-out) do chính sách tài khóa mở rộng trên gây ra."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Thiết lập phương trình IS và LM</h4>
          <p>• <strong>Thị trường hàng hóa (Đường IS):</strong> Cân bằng $Y = C + I + G$</p>
          <p>$$Y = 200 + 0.75(Y - 100) + 300 - 20r + 250$$</p>
          <p>$$Y = 675 + 0.75Y - 20r \\iff 0.25Y = 675 - 20r$$</p>
          <p>$$\\implies \\mathbf{IS: Y = 2.700 - 80r} \\quad \\text{hay } r = 33.75 - 0.0125Y$$</p>
          <p>• <strong>Thị trường tiền tệ (Đường LM):</strong> Cân bằng $M^S/P = M^D/P$</p>
          <p>$$500 = 0.5Y - 40r \\iff 40r = 0.5Y - 500$$</p>
          <p>$$\\implies \\mathbf{LM: r = 0.0125Y - 12.5} \\quad \\text{hay } Y = 1.000 + 80r$$</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Cân bằng đồng thời (r*, Y*)</h4>
          <p>Giải hệ phương trình IS và LM:</p>
          <p>$$2.700 - 80r = 1.000 + 80r \\iff 160r = 1.700 \\implies \\mathbf{r^* = 10.625\\%}$$</p>
          <p>Thay $r^* = 10.625$ vào phương trình LM (hoặc IS):</p>
          <p>$$Y^* = 1.000 + 80(10.625) = \\mathbf{1.850} \\text{ tỷ USD}$$</p>
          <p>Đầu tư tư nhân tại điểm cân bằng: $I_0 = 300 - 20(10.625) = \\mathbf{87.5}$ tỷ USD.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c & d: Khi G tăng 50 và Hiện tượng lấn át</h4>
          <p>Chi tiêu tự định tăng thêm: $\\Delta G = 50$. Với số nhân chi tiêu $k = \\frac{1}{1 - 0.75} = 4$.</p>
          <p>Đường IS dịch phải một đoạn $k \\times \\Delta G = 4 \\times 50 = 200$:</p>
          <p>$$\\mathbf{IS': Y = 2.900 - 80r}$$</p>
          <p>Cân bằng mới $IS' = LM$:</p>
          <p>$$2.900 - 80r = 1.000 + 80r \\iff 160r = 1.900 \\implies \\mathbf{r_1^* = 11.875\\%}$$</p>
          <p>$$Y_1^* = 1.000 + 80(11.875) = \\mathbf{1.950} \\text{ tỷ USD}$$</p>
          <p class="mt-2">• Đầu tư tư nhân mới: $I_1 = 300 - 20(11.875) = \\mathbf{62.5}$ tỷ USD.</p>
          <p>• <strong>Quy mô đầu tư bị lấn át:</strong> $\\Delta I = I_1 - I_0 = 62.5 - 87.5 = \\mathbf{-25}$ tỷ USD.</p>
          <p>• <strong>Sản lượng bị lấn át:</strong> Nếu lãi suất không đổi, sản lượng tăng $4 \\times 50 = 200$ (đạt $2.050$). Nhưng do lãi suất tăng nên sản lượng chỉ đạt $1.950$, bị lấn át mất: $2.050 - 1.950 = \\mathbf{100}$ tỷ USD sản lượng!</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Viết nhầm dấu phương trình IS (IS phải dốc xuống, hệ số trước r mang dấu âm).",
      "Quên tính hiện tượng lấn át đầu tư khi chính phủ tăng chi tiêu."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORKED_PROBLEMS_DATA;
}
