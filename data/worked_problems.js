// Cẩm nang 12 Dạng Bài Tập Tự Luận Định Lượng Lớn Có Lời Giải Mẫu Từng Bước
// Biên soạn theo chuẩn cấu trúc đề thi tự luận các trường đại học hàng đầu (NEU, FTU, UEH, VNU...)

const WORKED_PROBLEMS_DATA = [
  // ================= Dạng 1: Cung - cầu và can thiệp chính sách =================
  {
    id: "prob1",
    category: "micro",
    chapter: 2,
    title: "Dạng 1: Cân bằng cung - cầu, can thiệp thuế và tính thặng dư xã hội",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\iff 120 - 2P = 30 + P \\iff 3P = 90 \\implies \\mathbf{P^* = 30} \\text{ (nghìn đồng)}$$</div>
          <p>Thay $P^* = 30$ vào hàm cầu (hoặc cung): $Q^* = 120 - 2(30) = \\mathbf{60} \\text{ (nghìn sản phẩm)}$.</p>
          <p class="mt-2">• Tung độ góc đường cầu ($Q_D = 0$): $120 - 2P = 0 \\implies P_{max} = 60$.</p>
          <p>• Tung độ góc đường cung ($Q_S = 0$): $30 + P = 0 \\implies P_{min} = 0$ (với $P \\ge 0$).</p>
          <p class="mt-2">• <strong>Thặng dư tiêu dùng (CS):</strong></p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$CS_0 = \\frac{1}{2} \\times (P_{max} - P^*) \\times Q^* = \\frac{1}{2} \\times (60 - 30) \\times 60 = \\mathbf{900} \\text{ (triệu đồng)}$$</div>
          <p>• <strong>Thặng dư sản xuất (PS):</strong></p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$PS_0 = \\frac{(Q_0 + Q^*) \\times P^*}{2} = \\frac{(30 + 60) \\times 30}{2} = \\mathbf{1.350} \\text{ (triệu đồng)}$$</div>
          <p>• <strong>Tổng thặng dư xã hội (TS):</strong> $TS_0 = CS_0 + PS_0 = 900 + 1.350 = \\mathbf{2.250} \\text{ (triệu đồng)}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Độ co giãn của cầu tại điểm cân bằng</h4>
          <p>Hàm cầu: $Q_D = 120 - 2P \\implies Q'_D(P) = -2$.</p>
          <p>Độ co giãn của cầu theo giá tại điểm cân bằng $(P^* = 30, Q^* = 60)$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$E_D = Q'_D(P) \\times \\frac{P^*}{Q^*} = -2 \\times \\frac{30}{60} = \\mathbf{-1} \\implies |E_D| = 1$$</div>
          <p><strong>Kết luận:</strong> Cầu co giãn đơn vị ($|E_D| = 1$). Tại điểm này, doanh thu của doanh nghiệp đang đạt giá trị cực đại. Do đó doanh nghiệp nên <strong>giữ nguyên giá</strong>, bất kỳ hành động tăng giá hay giảm giá nào cũng sẽ làm giảm tổng doanh thu.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Tác động của chính sách thuế t = 6</h4>
          <p>Khi đánh thuế $t = 6$ vào người bán, giá người bán thực nhận là $P_s = P_b - 6$.</p>
          <p>Đường cung mới sau thuế:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Q_S' = 30 + (P - 6) = P + 24$$</div>
          <p>Cân bằng thị trường mới: $Q_D = Q_S' \\iff 120 - 2P = P + 24 \\iff 3P = 96$</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{P_b = 32} \\text{ (nghìn đồng, giá người mua trả)}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{P_s = P_b - t = 32 - 6 = 26} \\text{ (nghìn đồng, giá người bán nhận)}$$</div>
          <p>Sản lượng giao dịch mới: $Q_t = 120 - 2(32) = \\mathbf{56} \\text{ (nghìn sản phẩm)}$.</p>
          <p class="mt-2">• Thuế người mua chịu: $t_b = P_b - P^* = 32 - 30 = \\mathbf{2} \\text{ nghìn đồng/sp}$.</p>
          <p>• Thuế người bán chịu: $t_s = P^* - P_s = 30 - 26 = \\mathbf{4} \\text{ nghìn đồng/sp}$.</p>
          <p>• Số thu ngân sách của Chính phủ: $T = t \\times Q_t = 6 \\times 56 = \\mathbf{336} \\text{ (triệu đồng)}$.</p>
          <p>• <strong>Tổn thất vô ích của xã hội (DWL):</strong></p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$DWL = \\frac{1}{2} \\times t \\times (Q^* - Q_t) = \\frac{1}{2} \\times 6 \\times (60 - 56) = \\mathbf{12} \\text{ (triệu đồng)}$$</div>
        </div>
      </div>
    `,
    commonMistakes: [
      "Thay nhầm giá $P_s$ vào hàm cầu hoặc thay $P_b$ vào hàm cung ban đầu.",
      "Quên tính tung độ góc $P_{max}, P_{min}$ khi tính diện tích tam giác $CS$ và $PS$.",
      "Tính nhầm $DWL$ bằng cách nhân với sản lượng mới $Q_t$ thay vì phần sụt giảm sản lượng $(Q^* - Q_t)$."
    ]
  },

  // ================= Dạng 2: Tối ưu hóa lựa chọn người tiêu dùng =================
  {
    id: "prob2",
    category: "micro",
    chapter: 4,
    title: "Dạng 2: Tối ưu hóa lựa chọn người tiêu dùng bằng đại số và nhân tử Lagrange",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\iff 20.000 X + 40.000 Y = 1.200.000 \\iff \\mathbf{X + 2Y = 60} \\iff \\mathbf{Y = 30 - 0.5X}$$</div>
          <p>• Điểm cắt trục hoành ($Y=0$): $X_{max} = I / P_X = 1.200 / 20 = 60$ sản phẩm.</p>
          <p>• Điểm cắt trục tung ($X=0$): $Y_{max} = I / P_Y = 1.200 / 40 = 30$ sản phẩm.</p>
          <p>• Độ dốc đường ngân sách: $-\\frac{P_X}{P_Y} = -\\frac{20}{40} = -0.5$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Phương pháp cân bằng biên ($MRS = P_X/P_Y$)</h4>
          <p>Lợi ích cận biên của X và Y:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MU_X = \\frac{\\partial U}{\\partial X} = 0.5 X^{-0.5} Y^{0.5} = \\frac{0.5 Y^{0.5}}{X^{0.5}}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MU_Y = \\frac{\\partial U}{\\partial Y} = 0.5 X^{0.5} Y^{-0.5} = \\frac{0.5 X^{0.5}}{Y^{0.5}}$$</div>
          <p>Tỷ lệ thay thế biên:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{0.5 Y^{0.5} / X^{0.5}}{0.5 X^{0.5} / Y^{0.5}} = \\mathbf{\\frac{Y}{X}}$$</div>
          <p>Điều kiện tối đa hóa thỏa dụng:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MRS_{XY} = \\frac{P_X}{P_Y} \\iff \\frac{Y}{X} = \\frac{20.000}{40.000} = \\frac{1}{2} \\implies \\mathbf{X = 2Y}$$</div>
          <p>Thay $X = 2Y$ vào phương trình đường ngân sách $X + 2Y = 60$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$2Y + 2Y = 60 \\iff 4Y = 60 \\implies \\mathbf{Y^* = 15} \\implies \\mathbf{X^* = 30}$$</div>
          <p>Mức thỏa dụng cực đại: $U_{max} = (30)^{0.5} \\cdot (15)^{0.5} = \\sqrt{450} \\approx \\mathbf{21.21}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Phương pháp Nhân tử Lagrange</h4>
          <p>Thiết lập hàm Lagrange:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\mathcal{L}(X, Y, \\lambda) = X^{0.5} Y^{0.5} + \\lambda(1.200 - 20X - 40Y)$$</div>
          <p>Hệ điều kiện bậc nhất (First Order Conditions - FOC):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\begin{cases} \\frac{\\partial \\mathcal{L}}{\\partial X} = 0.5 X^{-0.5} Y^{0.5} - 20\\lambda = 0 & (1) \\\\ \\frac{\\partial \\mathcal{L}}{\\partial Y} = 0.5 X^{0.5} Y^{-0.5} - 40\\lambda = 0 & (2) \\\\ \\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 1.200 - 20X - 40Y = 0 & (3) \\end{cases}$$</div>
          <p>Chia phương trình (1) cho phương trình (2):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\frac{0.5 X^{-0.5} Y^{0.5}}{0.5 X^{0.5} Y^{-0.5}} = \\frac{20\\lambda}{40\\lambda} \\iff \\frac{Y}{X} = \\frac{1}{2} \\implies X = 2Y$$</div>
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

  // ================= Dạng 3: Chi phí sản xuất và cạnh tranh hoàn hảo =================
  {
    id: "prob3",
    category: "micro",
    chapter: 5,
    title: "Dạng 3: Hàm chi phí, điểm hòa vốn, điểm đóng cửa và hàm cung ngắn hạn",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$P = MC \\iff P = 2Q + 10 \\iff \\mathbf{Q_S = 0.5P - 5} \\quad \\text{với } P \\ge 10$$</div>
          <p>• <strong>Khi giá thị trường P = 50:</strong></p>
          <p>Do $P = 50 > P_{hv} = 30$, doanh nghiệp sản xuất và có lợi nhuận dương.</p>
          <p>Điều kiện tối ưu: $P = MC \\iff 50 = 2Q + 10 \\iff 2Q = 40 \\implies \\mathbf{Q^* = 20}$ sản phẩm.</p>
          <p>• Tổng doanh thu: $TR = P \\times Q^* = 50 \\times 20 = \\mathbf{1.000}$ nghìn đồng.</p>
          <p>• Tổng chi phí: $TC = (20)^2 + 10(20) + 100 = 400 + 200 + 100 = \\mathbf{700}$ nghìn đồng.</p>
          <p>• Lợi nhuận kinh tế: $\pi$ = TR - TC = 1.000 - 700 = \\mathbf{300}$ nghìn đồng.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Quên điều kiện $P \\ge AVC_{min}$ khi viết hàm cung.",
      "Tìm cực tiểu ATC bằng cách đạo hàm sai hoặc không giải phương trình $MC = ATC$."
    ]
  },

  // ================= Dạng 4: Độc quyền thuần túy và phân biệt giá =================
  {
    id: "prob4",
    category: "micro",
    chapter: 6,
    title: "Dạng 4: Độc quyền thuần túy và phân biệt giá cấp 3 trên hai thị trường",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MR_1 = MC \\iff 100 - 2Q_1 = 20 \\iff 2Q_1 = 80 \\implies \\mathbf{Q_1^* = 40}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$P_1^* = 100 - 40 = \\mathbf{60}$$</div>
          <p>• <strong>Thị trường 2:</strong> $P_2 = 140 - 2Q_2 \\implies TR_2 = 140Q_2 - 2Q_2^2 \\implies MR_2 = 140 - 4Q_2$.</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$MR_2 = MC \\iff 140 - 4Q_2 = 20 \\iff 4Q_2 = 120 \\implies \\mathbf{Q_2^* = 30}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$P_2^* = 140 - 2(30) = \\mathbf{80}$$</div>
          <p>• Tổng sản lượng: $Q = Q_1 + Q_2 = 40 + 30 = 70$.</p>
          <p>• Tổng doanh thu: $TR = P_1 Q_1 + P_2 Q_2 = 60(40) + 80(30) = 2.400 + 2.400 = 4.800$.</p>
          <p>• Tổng chi phí: $TC = 20(70) + 500 = 1.400 + 500 = 1.900$.</p>
          <p>• <strong>Tổng lợi nhuận:</strong> $\pi$ = TR - TC = 4.800 - 1.900 = \\mathbf{2.900}$.</p>
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

  // ================= Dạng 5: Hạch toán GDP và hệ thống tài khoản SNA =================
  {
    id: "prob5",
    category: "macro",
    chapter: 7,
    title: "Dạng 5: Hạch toán GDP, GNP, NNP, NI, PI, DI theo hệ thống SNA",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$GDP = C + I + G + NX = 800 + 200 + 300 + 30 = \\mathbf{1.330} \\text{ tỷ USD}$$</div>
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$PI = NI - (\\text{Lợi nhuận giữ lại} + \\text{Thuế TNDN} + \\text{Bảo hiểm XH}) + Tr$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$PI = 1.150 - (40 + 50 + 60) + 90 = 1.150 - 150 + 90 = \\mathbf{1.090} \\text{ tỷ USD}$$</div>
          <p>• Thu nhập khả dụng (DI):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$DI = PI - \\text{Thuế TNCN} = 1.090 - 80 = \\mathbf{1.010} \\text{ tỷ USD}$$</div>
          <p>• Tiết kiệm của hộ gia đình ($S_p$):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$S_p = DI - C = 1.010 - 800 = \\mathbf{210} \\text{ tỷ USD}$$</div>
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
    title: "Dạng 6: Mô hình cân bằng IS - LM và đo lường hiện tượng lấn át đầu tư (Crowding-out Effect)",
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
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y = 200 + 0.75(Y - 100) + 300 - 20r + 250$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y = 675 + 0.75Y - 20r \\iff 0.25Y = 675 - 20r$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{IS: Y = 2.700 - 80r} \\quad \\text{hay } r = 33.75 - 0.0125Y$$</div>
          <p>• <strong>Thị trường tiền tệ (Đường LM):</strong> Cân bằng $M^S/P = M^D/P$</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$500 = 0.5Y - 40r \\iff 40r = 0.5Y - 500$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{LM: r = 0.0125Y - 12.5} \\quad \\text{hay } Y = 1.000 + 80r$$</div>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Cân bằng đồng thời (r*, Y*)</h4>
          <p>Giải hệ phương trình IS và LM:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$2.700 - 80r = 1.000 + 80r \\iff 160r = 1.700 \\implies \\mathbf{r^* = 10.625\\%}$$</div>
          <p>Thay $r^* = 10.625$ vào phương trình LM (hoặc IS):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y^* = 1.000 + 80(10.625) = \\mathbf{1.850} \\text{ tỷ USD}$$</div>
          <p>Đầu tư tư nhân tại điểm cân bằng: $I_0 = 300 - 20(10.625) = \\mathbf{87.5}$ tỷ USD.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c & d: Khi G tăng 50 và Hiện tượng lấn át</h4>
          <p>Chi tiêu tự định tăng thêm: $\\Delta G = 50$. Với số nhân chi tiêu $k = \\frac{1}{1 - 0.75} = 4$.</p>
          <p>Đường IS dịch phải một đoạn $k \\times \\Delta G = 4 \\times 50 = 200$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\mathbf{IS': Y = 2.900 - 80r}$$</div>
          <p>Cân bằng mới $IS' = LM$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$2.900 - 80r = 1.000 + 80r \\iff 160r = 1.900 \\implies \\mathbf{r_1^* = 11.875\\%}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y_1^* = 1.000 + 80(11.875) = \\mathbf{1.950} \\text{ tỷ USD}$$</div>
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
  },

  // ================= Dạng 7: Phân rã hiệu ứng Slutsky và Hicks (A+) =================
  {
    id: "prob7",
    category: "micro",
    chapter: 4,
    title: "Dạng 7: Phân rã hiệu ứng thay thế (SE) và hiệu ứng thu nhập (IE) theo Slutsky",
    examLevel: "Đề thi Phân loại Điểm 10 / Olympic Kinh tế học sinh viên",
    context: `Một người tiêu dùng có thu nhập $I = 120$ USD dùng để mua 2 hàng hóa X và Y với giá ban đầu $P_X = 2$ USD và $P_Y = 1$ USD.
Hàm thỏa dụng của người này là $U(X, Y) = X \\cdot Y \\implies MU_X = Y, \\quad MU_Y = X$.
Sau đó, giá của hàng hóa X tăng lên thành $P_X' = 3$ USD (giá Y và thu nhập không đổi).`,
    subQuestions: [
      "a) Xác định giỏ hàng tối ưu ban đầu $A(X_1, Y_1)$ và giỏ hàng tối ưu cuối cùng $C(X_2, Y_2)$.",
      "b) Theo phương pháp Slutsky, hãy tính mức thu nhập danh nghĩa giả định ($I'$) cần thiết để người tiêu dùng vừa đủ tiền mua lại giỏ hàng ban đầu A ở mức giá mới.",
      "c) Xác định giỏ hàng giả định $B(X_B, Y_B)$ tại mức thu nhập $I'$ và giá mới.",
      "d) Phân rã tổng thay đổi của lượng cầu X thành Hiệu ứng thay thế (SE) và Hiệu ứng thu nhập (IE). Kết luận X là hàng hóa thông thường, hàng cấp thấp hay hàng Giffen?"
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Điểm tối ưu ban đầu A và điểm cuối C</h4>
          <p>• <strong>Tại điểm A (P_X = 2, P_Y = 1, I = 120):</strong></p>
          <p>Điều kiện tối ưu: $\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\iff \\frac{Y}{2} = \\frac{X}{1} \\implies X = 0.5Y \\implies Y = 2X$.</p>
          <p>Đường ngân sách: $2X + 1Y = 120 \\iff 2X + 2X = 120 \\implies \\mathbf{X_A = 30, Y_A = 60}$.</p>
          <p class="mt-2">• <strong>Tại điểm C (P_X' = 3, P_Y = 1, I = 120):</strong></p>
          <p>Điều kiện tối ưu: $\\frac{Y}{3} = \\frac{X}{1} \\implies Y = 3X$.</p>
          <p>Đường ngân sách mới: $3X + 1(3X) = 120 \\iff 6X = 120 \\implies \\mathbf{X_C = 20, Y_C = 60}$.</p>
          <p>Tổng thay đổi lượng cầu của X: $\\Delta X_{tổng} = X_C - X_A = 20 - 30 = \\mathbf{-10}$ đơn vị.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b & c: Thu nhập bù đắp và giỏ hàng giả định B (Slutsky)</h4>
          <p>• Thu nhập bù đắp $I'$ để mua vừa đủ giỏ hàng ban đầu $A(30, 60)$ ở mức giá mới $(P_X'=3, P_Y=1)$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$I' = P_X' \\cdot X_A + P_Y \\cdot Y_A = 3(30) + 1(60) = 90 + 60 = \\mathbf{150} \\text{ USD}$$</div>
          <p>• Tại điểm giả định B: với $I' = 150$, giá mới $P_X' = 3, P_Y = 1$ và tỷ lệ tối ưu $Y = 3X$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$3X + 3X = 150 \\iff 6X = 150 \\implies \\mathbf{X_B = 25, Y_B = 75}$$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu d: Phân rã SE, IE và Kết luận</h4>
          <p>• <strong>Hiệu ứng thay thế (Substitution Effect - SE):</strong> Từ A sang B do thay đổi giá tương đối:</p>
          <p>$$SE = X_B - X_A = 25 - 30 = \\mathbf{-5} \\text{ đơn vị (luôn âm khi giá tăng)}$$</div>
          <p>• <strong>Hiệu ứng thu nhập (Income Effect - IE):</strong> Từ B sang C do sức mua thực tế giảm từ 150 về 120:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$IE = X_C - X_B = 20 - 25 = \\mathbf{-5} \\text{ đơn vị}$$</div>
          <p>• Kiểm tra: $SE + IE = (-5) + (-5) = -10 = \\Delta X_{tổng}$.</p>
          <p class="mt-2"><strong>Kết luận bản chất:</strong> Khi sức mua giảm (từ B sang C), lượng cầu X giảm ($IE = -5 < 0$). Do đó X là <strong>Hàng hóa thông thường (Normal Good)</strong>. Trong trường hợp này, Hiệu ứng thay thế và Hiệu ứng thu nhập cùng chiều làm giảm cầu khi giá tăng.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Lấy nhầm thu nhập ban đầu I thay vì thu nhập bù đắp I' khi tìm điểm B.",
      "Nhầm lẫn dấu của Hiệu ứng thu nhập đối với hàng cấp thấp (với hàng cấp thấp, sức mua giảm làm lượng cầu tăng, IE > 0)."
    ]
  },

  // ================= DẠNG 8: HÀM THỎA DỤNG ĐẶC THÙ (LEONTIEF & CORNER) =================
  {
    id: "prob8",
    category: "micro",
    chapter: 4,
    title: "Dạng 8: Hàm thỏa dụng đặc thù: Hàng thay thế hoàn hảo và bổ sung hoàn hảo (Leontief)",
    examLevel: "Đề thi Chọn Đội tuyển Olympic Kinh tế học / FTU",
    context: `Xét 2 người tiêu dùng với các hàm thỏa dụng phi tiêu chuẩn sau:
- Người thứ nhất (Hàng bổ sung hoàn hảo): $U_1(X, Y) = \\min(2X, Y)$ với thu nhập $I_1 = 180$ USD, $P_X = 4, P_Y = 1$.
- Người thứ hai (Hàng thay thế hoàn hảo): $U_2(X, Y) = 3X + Y$ với thu nhập $I_2 = 120$ USD, $P_X = 5, P_Y = 2$.`,
    subQuestions: [
      "a) Xác định giỏ hàng tối ưu $(X_1^*, Y_1^*)$ và mức thỏa dụng của người thứ nhất. Giải thích tại sao không thể áp dụng phương pháp đạo hàm $MRS = P_X/P_Y$.",
      "b) Xác định giỏ hàng tối ưu $(X_2^*, Y_2^*)$ và mức thỏa dụng của người thứ hai (Nghiệm góc Corner Solution).",
      "c) Nếu giá hàng hóa X của người thứ hai giảm xuống còn $P_X' = 2$ USD, giỏ hàng tối ưu sẽ thay đổi như thế nào?"
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Hàm Leontief (Hàng bổ sung hoàn hảo)</h4>
          <p>Hàm $U_1 = \\min(2X, Y)$ có đường bàng quan hình chữ L góc vuông. Tại đỉnh góc nhọn, hàm số không có đạo hàm, do đó không thể dùng $MRS = P_X/P_Y$.</p>
          <p>Người tiêu dùng duy lý sẽ luôn tiêu dùng tại đỉnh góc nhọn để không lãng phí hàng hóa:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$2X = Y \\iff Y = 2X$$</div>
          <p>Thay vào phương trình đường ngân sách $P_X X + P_Y Y = I_1$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$4X + 1(2X) = 180 \\iff 6X = 180 \\implies \\mathbf{X_1^* = 30}$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{Y_1^* = 2(30) = 60}$$</div>
          <p>Mức thỏa dụng đạt được: $U_1^* = \\min(2 \\times 30, 60) = \\mathbf{60}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b & c: Hàm tuyến tính (Hàng thay thế hoàn hảo & Nghiệm góc)</h4>
          <p>Hàm $U_2 = 3X + Y \\implies MU_X = 3, MU_Y = 1$.</p>
          <p>Tỷ lệ thay thế biên cố định: $MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{3}{1} = 3$.</p>
          <p>Tỷ giá thị trường ban đầu: $\\frac{P_X}{P_Y} = \\frac{5}{2} = 2.5$.</p>
          <p><strong>So sánh:</strong> $MRS_{XY} = 3 > \\frac{P_X}{P_Y} = 2.5 \\implies \\frac{MU_X}{P_X} = \\frac{3}{5} = 0.6 > \\frac{MU_Y}{P_Y} = \\frac{1}{2} = 0.5$.</p>
          <p>Mỗi đồng chi cho X mang lại thỏa dụng cao hơn chi cho Y. Người tiêu dùng sẽ dùng 100% thu nhập mua X (Nghiệm góc Corner Solution):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\mathbf{X_2^* = \\frac{I}{P_X} = \\frac{120}{5} = 24}, \\quad \\mathbf{Y_2^* = 0} \\implies U_2^* = 3(24) = 72$$</div>
          <p class="mt-2">• <strong>Khi giá X giảm xuống P_X' = 2:</strong></p>
          <p>Tỷ giá mới $\\frac{P_X'}{P_Y} = \\frac{2}{2} = 1 < MRS = 3$. X càng trở nên hấp dẫn hơn nữa:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\mathbf{X_2^{*\\prime} = \\frac{120}{2} = 60}, \\quad \\mathbf{Y_2^{*\\prime} = 0} \\implies U_2^{*\\prime} = 3(60) = 180$$.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Cố tình lấy đạo hàm hàm min Leontief dẫn đến sai lầm không thể giải được.",
      "Cho nghiệm hàm tuyến tính bằng cách giải hệ thông thường thay vì so sánh độ dốc $MRS$ với $P_X/P_Y$ để tìm nghiệm góc."
    ]
  },

  // ================= Dạng 9: Độc quyền nhóm Cournot và Stackelberg =================
  {
    id: "prob9",
    category: "micro",
    chapter: 6,
    title: "Dạng 9: Độc quyền nhóm: Cân bằng Cournot và mô hình dẫn đầu Stackelberg",
    examLevel: "Đề thi Cao học Kinh tế & ĐH Kinh tế Quốc dân (NEU)",
    context: `Một ngành công nghiệp gồm 2 doanh nghiệp (Duopoly) sản xuất sản phẩm đồng nhất với hàm cầu thị trường:
$$P = 100 - (Q_1 + Q_2)$$
Cả hai doanh nghiệp đều có hàm chi phí sản xuất giống nhau: $TC_1 = 10Q_1$ và $TC_2 = 10Q_2 \\implies MC_1 = MC_2 = 10$.`,
    subQuestions: [
      "a) Trong mô hình Cournot, thiết lập hàm phản ứng của từng doanh nghiệp $Q_1 = R_1(Q_2)$ và $Q_2 = R_2(Q_1)$.",
      "b) Xác định sản lượng cân bằng Cournot, mức giá thị trường và lợi nhuận của mỗi doanh nghiệp.",
      "c) Trong mô hình Stackelberg, giả sử Doanh nghiệp 1 là người dẫn đầu (Leader) chọn sản lượng trước, Doanh nghiệp 2 là người đi sau (Follower). Hãy xác định sản lượng, giá và lợi nhuận của mỗi bên. So sánh với kết quả Cournot."
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a & b: Cân bằng Cournot (Đồng thời)</h4>
          <p>• Doanh thu của DN 1: $TR_1 = P \\cdot Q_1 = [100 - (Q_1 + Q_2)] Q_1 = 100Q_1 - Q_1^2 - Q_1 Q_2$.</p>
          <p>Doanh thu biên: $MR_1 = \\frac{\\partial TR_1}{\\partial Q_1} = 100 - 2Q_1 - Q_2$.</p>
          <p>Điều kiện $MR_1 = MC_1 \\iff 100 - 2Q_1 - Q_2 = 10 \\iff 2Q_1 = 90 - Q_2$</p>
          <p>$$\\implies \\mathbf{Q_1 = R_1(Q_2) = 45 - 0.5Q_2} \\quad (\\text{Hàm phản ứng DN 1})$$</div>
          <p>Tương tự do tính đối xứng: $\\mathbf{Q_2 = R_2(Q_1) = 45 - 0.5Q_1}$.</p>
          <p class="mt-2">• <strong>Cân bằng Cournot:</strong> Thay $Q_2$ vào $Q_1$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Q_1 = 45 - 0.5(45 - 0.5Q_1) = 45 - 22.5 + 0.25Q_1 \\iff 0.75Q_1 = 22.5 \\implies \\mathbf{Q_1^* = 30, Q_2^* = 30}$$</div>
          <p>Tổng sản lượng: $Q = 30 + 30 = 60$. Mức giá thị trường: $P = 100 - 60 = \\mathbf{40}$.</p>
          <p>Lợi nhuận mỗi DN: $\pi$_1 = $\pi$_2 = (P - MC) \\times Q_i = (40 - 10) \\times 30 = \\mathbf{900}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Mô hình Stackelberg (DN 1 dẫn đầu)</h4>
          <p>DN 1 biết trước hàm phản ứng của DN 2: $Q_2 = 45 - 0.5Q_1$. DN 1 thế trực tiếp vào hàm cầu của mình:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$P = 100 - Q_1 - (45 - 0.5Q_1) = 55 - 0.5Q_1$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$TR_1 = P \\cdot Q_1 = 55Q_1 - 0.5Q_1^2 \\implies MR_1 = 55 - Q_1$$</div>
          <p>Cho $MR_1 = MC_1 \\iff 55 - Q_1 = 10 \\implies \\mathbf{Q_{1, Stackelberg}^* = 45}$.</p>
          <p>DN 2 đi sau chấp nhận sản lượng: $Q_2 = 45 - 0.5(45) = \\mathbf{22.5}$.</p>
          <p>Tổng sản lượng: $Q = 45 + 22.5 = 67.5$. Giá bán: $P = 100 - 67.5 = \\mathbf{32.5}$.</p>
          <p>• Lợi nhuận người dẫn đầu: $\pi$_1 = (32.5 - 10) \\times 45 = \\mathbf{1.012.5}$ (Tăng so với Cournot 900!).</p>
          <p>• Lợi nhuận người đi sau: $\pi$_2 = (32.5 - 10) \\times 22.5 = \\mathbf{506.25}$ (Giảm một nửa so với Cournot!).</p>
          <p class="mt-2"><strong>Kết luận:</strong> Lợi thế của người đi trước (First-mover advantage) giúp người dẫn đầu chiếm thị phần áp đảo và đạt lợi nhuận cao nhất.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Đạo hàm nhầm hàm doanh thu khi chưa thế hàm phản ứng của đối thủ trong mô hình Stackelberg.",
      "Quên rằng khi viết hàm $TR_1$, biến số $P$ phải chứa cả $Q_1$ và $Q_2$."
    ]
  },

  // ================= Dạng 10: Mô hình tăng trưởng Solow và quy tắc vàng =================
  {
    id: "prob10",
    category: "macro",
    chapter: 8,
    title: "Dạng 10: Mô hình tăng trưởng Solow và quy tắc vàng tích lũy tư bản",
    examLevel: "Đề thi Phân loại Học bổng Cao học / Chuẩn Mankiw Chapter 8-9",
    context: `Hàm sản xuất tổng hợp của một nền kinh tế có dạng Cobb-Douglas:
$$Y = F(K, L) = K^{0.5} L^{0.5} \\implies y = k^{0.5}$$
(Trong đó: y = Y/L là sản lượng trên một lao động; k = K/L là tư bản trên một lao động).
Cho biết tỷ lệ tiết kiệm $s = 0.3$, tỷ lệ khấu hao $\pi$ = 0.05$, tốc độ tăng dân số $n = 0.01$, tiến bộ công nghệ $g = 0$.`,
    subQuestions: [
      "a) Xác định mức tư bản trạng thái dừng ($k^*$), sản lượng trạng thái dừng ($y^*$), tiêu dùng trên một lao động ($c^*$) và đầu tư trạng thái dừng ($i^*$).",
      "b) Thiết lập điều kiện Quy tắc vàng của tích lũy tư bản (Golden Rule). Hãy xác định mức tư bản $k_{gold}^*$ và tỷ lệ tiết kiệm vàng $s_{gold}$ tối đa hóa tiêu dùng bền vững.",
      "c) Nhận xét nền kinh tế ban đầu có đang tích lũy tư bản quá mức hay thiếu hụt tư bản so với Quy tắc vàng?"
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Trạng thái dừng ban đầu (k*, y*, c*)</h4>
          <p>Phương trình tích lũy tư bản Solow: $\\Delta k = s \\cdot f(k) - ($\delta$ + n)k$.</p>
          <p>Tại trạng thái dừng: $\\Delta k = 0 \\iff s \\cdot k^{0.5} = ($\delta$ + n)k$</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$0.3 k^{0.5} = (0.05 + 0.01)k = 0.06k \\iff \\frac{k}{k^{0.5}} = \\frac{0.3}{0.06} = 5$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies k^{0.5} = 5 \\implies \\mathbf{k^* = 25} \\text{ (tư bản trên mỗi lao động)}$$</div>
          <p>• Sản lượng trạng thái dừng: $y^* = f(k^*) = (25)^{0.5} = \\mathbf{5}$.</p>
          <p>• Đầu tư trạng thái dừng: $i^* = s \\cdot y^* = 0.3 \\times 5 = \\mathbf{1.5}$.</p>
          <p>• Tiêu dùng trạng thái dừng: $c^* = y^* - i^* = 5 - 1.5 = \\mathbf{3.5}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b & c: Quy tắc vàng của tích lũy tư bản (Golden Rule)</h4>
          <p>Tiêu dùng tại trạng thái dừng: $c(k) = f(k) - ($\delta$ + n)k$.</p>
          <p>Để tối đa hóa tiêu dùng bền vững, lấy đạo hàm theo k và cho bằng 0:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$c'(k) = f'(k) - (\delta + n) = 0 \\iff \\mathbf{MPK = \delta + n}$$</div>
          <p>Với hàm $f(k) = k^{0.5} \\implies MPK = 0.5 k^{-0.5} = \\frac{0.5}{k^{0.5}}$.</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\frac{0.5}{k^{0.5}} = 0.05 + 0.01 = 0.06 \\iff k^{0.5} = \\frac{0.5}{0.06} = \\frac{25}{3} \\approx 8.333$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\implies \\mathbf{k_{gold}^* = \\left(\\frac{25}{3}\\right)^2 = \\frac{625}{9} \\approx 69.44}$$</div>
          <p>• Sản lượng tại điểm vàng: $y_{gold}^* = (69.44)^{0.5} = 8.333$.</p>
          <p>• Tỷ lệ tiết kiệm vàng cần thiết: $s_{gold} = \\frac{($\delta$ + n)k_{gold}^*}{y_{gold}^*} = \\frac{0.06 \\times 69.44}{8.333} = \\mathbf{0.50} \\text{ (tức } 50\\%\\text{)}$.</p>
          <p>• Tiêu dùng cực đại tại điểm vàng: $c_{gold}^* = y^* - ($\delta$ + n)k^* = 8.333 - 4.167 = \\mathbf{4.166} > 3.5$.</p>
          <p class="mt-2"><strong>Nhận xét:</strong> Mức tư bản hiện tại $k^* = 25 < k_{gold}^* = 69.44$ và tỷ lệ tiết kiệm $s = 0.3 < s_{gold} = 0.5$. Nền kinh tế đang <strong>thiếu hụt tư bản</strong> so với Quy tắc vàng. Để nâng cao mức sống cho các thế hệ tương lai, quốc gia cần tăng tỷ lệ tiết kiệm từ 30% lên 50%.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Quên cộng tốc độ tăng dân số n vào tỷ lệ khấu hao delta khi tính điểm dừng.",
      "Nhầm điều kiện Quy tắc vàng là MPK = 0 thay vì MPK = delta + n."
    ]
  },

  // ================= DẠNG 11: MÔ HÌNH MUNDELL - FLEMING (A+) =================
  {
    id: "prob11",
    category: "macro",
    chapter: 12,
    title: "Dạng 11: Mô hình Mundell - Fleming: Tỷ giá thả nổi và cố định (Bộ ba bất khả thi)",
    examLevel: "Đề thi Phân loại Thủ khoa / Tài chính Quốc tế Nâng cao",
    context: `Xét một nền kinh tế mở nhỏ với dòng vốn luân chuyển tự do hoàn hảo ($r = r^* = 5\\%$):
- Thị trường hàng hóa (IS*): $Y = 1.000 + 0.8(Y - T) + 400 - 20r^* + 300 + (200 - 50e)$
- Thuế $T = 200$, Lãi suất thế giới $r^* = 5$, Tỷ giá hối đoái danh nghĩa là $e$
- Thị trường tiền tệ (LM*): $M^S/P = 0.5Y - 30r^*$, với mức cung tiền $M^S/P = 850$.`,
    subQuestions: [
      "a) Thiết lập phương trình đường IS* và đường LM*. Xác định tỷ giá hối đoái cân bằng ($e^*$) và sản lượng cân bằng ($Y^*$).",
      "b) Dưới chế độ TỶ GIÁ THẢ NỔI, giả sử chính phủ tăng chi tiêu $\\Delta G = 100$. Hãy phân tích tác động đến sản lượng và tỷ giá. Chính sách tài khóa có hiệu lực kích cầu không?",
      "c) Dưới chế độ TỶ GIÁ CỐ ĐỊNH tại $e = 2$, chính phủ tăng chi tiêu $\\Delta G = 100$. Ngân hàng Trung ương phải can thiệp như thế nào để giữ tỷ giá và sản lượng thay đổi ra sao?"
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Thiết lập IS* và LM*</h4>
          <p>• <strong>Đường LM*:</strong> $850 = 0.5Y - 30(5) = 0.5Y - 150 \\iff 0.5Y = 1.000 \\implies \\mathbf{Y^* = 2.000}$.</p>
          <p><em>(Chú ý: Đường LM* là đường thẳng đứng tại Y = 2.000 vì lãi suất cố định r = r*!)</em></p>
          <p>• <strong>Đường IS*:</strong></p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y = 1.000 + 0.8Y - 160 + 400 - 100 + 300 + 200 - 50e = 1.640 + 0.8Y - 50e$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$0.2Y = 1.640 - 50e \\iff \\mathbf{IS^*: Y = 8.200 - 250e}$$</div>
          <p>• Cân bằng $Y = 2.000$: $2.000 = 8.200 - 250e \\iff 250e = 6.200 \\implies \\mathbf{e^* = 24.8}$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b: Tỷ giá thả nổi & Sự vô hiệu của Tài khóa</h4>
          <p>Khi G tăng 100, đường IS* dịch phải một đoạn $k \\times \\Delta G = 5 \\times 100 = 500$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$IS^{*\\prime}: Y = 8.700 - 250e$$</div>
          <p>Do đường LM* thẳng đứng tại $Y = 2.000$, giao điểm mới vẫn có: $\\mathbf{Y = 2.000}$ (Sản lượng không đổi!).</p>
          <p>Tỷ giá hối đoái mới: $2.000 = 8.700 - 250e \\iff 250e = 6.700 \\implies \\mathbf{e_1^* = 26.8}$ (Đồng nội tệ tăng giá mạnh!).</p>
          <p><strong>Kết luận kinh tế:</strong> Dưới tỷ giá thả nổi, chính sách tài khóa mở rộng hoàn toàn <strong>vô hiệu</strong> trong việc tăng sản lượng. Chi tiêu chính phủ tăng chỉ làm nội tệ tăng giá, bóp nghẹt xuất khẩu ròng $\\Delta NX = -100$ triệt tiêu hoàn toàn $\\Delta G$.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu c: Tỷ giá cố định & Hiệu lực tối đa</h4>
          <p>Dưới tỷ giá cố định, khi G tăng gây áp lực tăng giá nội tệ, NHTW buộc phải bán nội tệ mua ngoại tệ vào dự trữ, làm cung tiền $M^S$ tăng theo, dịch đường LM* sang phải.</p>
          <p>Tại $e = 2$: Sản lượng mới trên đường $IS^{*\\prime}$:</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Y_{mới} = 8.700 - 250(2) = \\mathbf{8.200}$$</div>
          <p>Sản lượng tăng vọt trọn vẹn: $\\Delta Y = 500$. Chính sách tài khóa đạt <strong>hiệu lực tối đa</strong> dưới chế độ tỷ giá cố định!</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Quên rằng đường LM* trong mô hình Mundell-Fleming là đường thẳng đứng trên hệ trục (e, Y).",
      "Nhầm lẫn hiệu lực chính sách: Tài khóa hiệu quả dưới tỷ giá cố định; Tiền tệ hiệu quả dưới tỷ giá thả nổi."
    ]
  },

  // ================= Dạng 12: Quy tắc Taylor và chính sách tiền tệ =================
  {
    id: "prob12",
    category: "macro",
    chapter: 11,
    title: "Dạng 12: Quy tắc điều hành lãi suất Taylor và ứng phó cú sốc vĩ mô",
    examLevel: "Đề thi Nghiệp vụ Ngân Hàng Trung Ương / Chuẩn Học thuật Vĩ mô",
    context: `Ngân hàng Trung ương điều hành chính sách tiền tệ theo Quy tắc Taylor chuẩn:
$i = r^* + \pi + 0.5(\pi - \pi^*) + 0.5(y - \bar{y})$
Cho biết:
- Lãi suất thực tế cân bằng dài hạn: $r^* = 2\\%$
- Tỷ lệ lạm phát mục tiêu: $\pi^*$ = 2\\%$
- Tốc độ tăng trưởng sản lượng tiềm năng: $\\bar{y} = 6\\%$.`,
    subQuestions: [
      "a) Khi nền kinh tế đang ở trạng thái cân bằng toàn dụng ($\pi = 2\\%, y = 6\\%$), NHTW nên ấn định lãi suất danh nghĩa mục tiêu $i$ là bao nhiêu?",
      "b) Giả sử xảy ra cú sốc tổng cầu khiến lạm phát tăng lên $\pi$ = 6\\%$ và sản lượng tăng nóng lên $y = 8\\%$. Theo quy tắc Taylor, NHTW cần điều chỉnh lãi suất danh nghĩa lên bao nhiêu?",
      "c) Tính lãi suất thực tế trong kịch bản (b). Giải thích nguyên lý Taylor (Taylor Principle): Tại sao NHTW phải tăng lãi suất danh nghĩa nhiều hơn 1-1 so với mức tăng của lạm phát?"
    ],
    fullSolutionHtml: `
      <div class="space-y-4 text-sm text-slate-800 dark:text-slate-200">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu a: Lãi suất tại trạng thái cân bằng mục tiêu</h4>
          <p>Khi lạm phát đạt mục tiêu ($\pi$ = $\pi^*$ = 2\\%$) và sản lượng ở mức tiềm năng ($y = \\bar{y} = 6\\%$):</p>
          <p>Khoảng trống lạm phát: $\pi$ - $\pi^*$ = 2 - 2 = 0$.</p>
          <p>Khoảng trống sản lượng: $y - \\bar{y} = 6 - 6 = 0$.</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$i = r^* + \pi + 0.5(0) + 0.5(0) = 2\\% + 2\\% = \\mathbf{4.0\\%}$$</div>
          <p>Lãi suất danh nghĩa trung tính là 4.0%/năm.</p>
        </div>

        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Lời giải câu b & c: Phản ứng trước cú sốc lạm phát và Nguyên lý Taylor</h4>
          <p>Khi $\pi$ = 6\\%$ (vượt mục tiêu $6 - 2 = 4\\%$) và $y = 8\\%$ (tăng nóng $8 - 6 = 2\\%$):</p>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$i = 2\\% + 6\\% + 0.5(6 - 2) + 0.5(8 - 6)$$</div>
          <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$i = 8\\% + 0.5(4\\%) + 0.5(2\\%) = 8\\% + 2\\% + 1\\% = \\mathbf{11.0\\%}$$</div>
          <p>• <strong>Lãi suất thực tế mới:</strong> $r = i - $\pi$ = 11\\% - 6\\% = \\mathbf{5.0\\%}$ (Tăng từ $2\\%$ lên $5\\%$!).</p>
          <p class="mt-2">• <strong>Giải thích Nguyên lý Taylor (Taylor Principle):</strong></p>
          <p>Hệ số trước lạm phát là $1 + 0.5 = 1.5 > 1$. Khi lạm phát tăng thêm 1%, NHTW phải tăng lãi suất danh nghĩa thêm 1.5% (tức tăng lớn hơn 1-1). Điều này đảm bảo rằng <strong>lãi suất thực tế r sẽ tăng lên</strong>. Lãi suất thực tăng làm hạ nhiệt chi tiêu vay mượn và đầu tư, kéo tổng cầu giảm xuống, từ đó dập tắt lạm phát. Nếu NHTW tăng lãi suất danh nghĩa ít hơn 1-1, lãi suất thực tế sẽ giảm và vô tình đổ thêm dầu vào lửa lạm phát.</p>
        </div>
      </div>
    `,
    commonMistakes: [
      "Quên cộng lãi suất thực tự nhiên r* vào công thức Taylor.",
      "Tính nhầm lãi suất thực r = i - pi khi kiểm tra tính ổn định vĩ mô."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORKED_PROBLEMS_DATA;
}
