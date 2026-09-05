// Cẩm nang 24 Dạng Bài Tập Tự Luận Định Lượng Lớn Gắn Liền Case Study Thực Tế Chuẩn A+
// Biên soạn theo chuẩn cấu trúc đề thi tự luận các trường đại học hàng đầu (NEU, FTU, UEH, VNU...)
// Tích hợp hồ sơ thực chiến các tập đoàn hàng đầu thế giới (Tesla, Apple, Netflix, Viettel, Hòa Phát...) và các định chế kinh tế (Fed, SBV, GSO, World Bank)
// 100% chuẩn ngữ pháp tiếng Việt, KaTeX toán học sắc nét

const WORKED_PROBLEMS_DATA = [
  {
    "id": "prob1",
    "category": "micro",
    "chapter": 2,
    "title": "Dạng 1: Cân bằng cung - cầu, sắc thuế tiêu thụ đặc biệt và thặng dư xã hội",
    "examLevel": "Đề thi cuối kỳ Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Thị trường bia nước giải khát & Sắc thuế tiêu thụ đặc biệt của Bộ Tài chính",
    "context": "Năm 2024, Bộ Tài chính lấy ý kiến về dự thảo điều chỉnh thuế tiêu thụ đặc biệt đánh vào đồ uống có cồn (bia, rượu) nhằm hạn chế tác hại sức khỏe cộng đồng.\nXét thị trường bia lon nội địa với hàm cầu của người tiêu dùng và hàm cung của các nhà sản xuất (Sabeco, Habeco, Heineken):\n$$Q_D = 120 - 2P \\quad \\text{và} \\quad Q_S = 30 + P$$\n(Trong đó: P tính bằng nghìn đồng/lon; Q tính bằng triệu lon/tháng).",
    "subQuestions": [
      "a) Xác định mức giá cân bằng ($P^*$) và sản lượng cân bằng ($Q^*$) khi chưa có thuế. Tính thặng dư tiêu dùng ($CS_0$), thặng dư sản xuất ($PS_0$) và tổng thặng dư xã hội ($TS_0$).",
      "b) Tính độ co giãn của cầu theo giá tại điểm cân bằng ($E_D$). Nếu hãng bia tăng giá bán thì tổng doanh thu ($TR$) sẽ tăng hay giảm?",
      "c) Quốc hội thông qua mức thuế tiêu thụ đặc biệt $t = 6$ nghìn đồng/lon đánh vào nhà sản xuất. Xác định điểm cân bằng mới, giá người tiêu dùng phải trả ($P_b$), giá nhà sản xuất thực nhận ($P_s$), số tiền thuế mỗi bên gánh chịu, số thu ngân sách nhà nước ($T$) và tổn thất vô ích ($DWL$).",
      "d) Phân tích cơ chế phân bổ gánh nặng thuế dựa trên độ co giãn của cung và cầu."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Điểm cân bằng tự do và Thặng dư ban đầu</h4>\n          <p>Tại điểm cân bằng thị trường tự do ($Q_D = Q_S$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$120 - 2P = 30 + P \\iff 3P = 90 \\implies \\mathbf{P^* = 30} \\text{ (nghìn đồng/lon)}$$</div>\n          <p>Sản lượng cân bằng: $Q^* = 120 - 2(30) = \\mathbf{60} \\text{ (triệu lon/tháng)}$.</p>\n          <p class=\"mt-2\">• Tung độ góc đường cầu ($Q_D = 0$): $120 - 2P = 0 \\implies P_{\\max} = 60$ nghìn đồng.</p>\n          <p>• Tung độ góc đường cung ($Q_S = 0$): $30 + P = 0 \\implies P_{\\min} = 0$ nghìn đồng (với $P \\ge 0$).</p>\n          <p class=\"mt-2\">• <strong>Thặng dư tiêu dùng (CS):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$CS_0 = \\frac{1}{2} \\times (P_{\\max} - P^*) \\times Q^* = \\frac{1}{2} \\times (60 - 30) \\times 60 = \\mathbf{900} \\text{ (tỷ đồng)}$$</div>\n          <p>• <strong>Thặng dư sản xuất (PS):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$PS_0 = \\frac{(Q_0 + Q^*) \\times P^*}{2} = \\frac{(30 + 60) \\times 30}{2} = \\mathbf{1.350} \\text{ (tỷ đồng)}$$</div>\n          <p>• <strong>Tổng thặng dư xã hội:</strong> $TS_0 = CS_0 + PS_0 = 900 + 1.350 = \\mathbf{2.250} \\text{ (tỷ đồng)}$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Độ co giãn của cầu và Quyết định doanh thu</h4>\n          <p>Hàm cầu: $Q_D = 120 - 2P \\implies Q'_D(P) = -2$.</p>\n          <p>Độ co giãn của cầu theo giá tại điểm cân bằng $(P^* = 30, Q^* = 60)$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$E_D = Q'_D(P) \\times \\frac{P^*}{Q^*} = -2 \\times \\frac{30}{60} = \\mathbf{-1.0} \\implies |E_D| = 1.0$$</div>\n          <p><strong>Kết luận:</strong> Cầu co giãn đơn vị ($|E_D| = 1$). Tại điểm này, doanh thu của các hãng bia đạt cực đại ($TR_{\\max} = 30 \\times 60 = 1.800$ tỷ đồng). Bất kỳ hành động đơn phương tăng giá hay giảm giá nào cũng đều làm sụt giảm tổng doanh thu.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c & d: Tác động của sắc thuế t = 6 nghìn đồng/lon</h4>\n          <p>Khi áp thuế $t = 6$ nghìn đồng vào nhà sản xuất, giá người bán thực nhận là $P_s = P_b - 6$.</p>\n          <p>Đường cung mới sau thuế: $Q_S' = 30 + (P - 6) = P + 24$.</p>\n          <p>Cân bằng thị trường mới: $120 - 2P = P + 24 \\iff 3P = 96$</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\implies \\mathbf{P_b = 32} \\text{ (nghìn đồng/lon, giá người mua trả)}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\implies \\mathbf{P_s = P_b - t = 32 - 6 = 26} \\text{ (nghìn đồng/lon, giá nhà sản xuất nhận)}$$</div>\n          <p>Sản lượng tiêu thụ giảm xuống: $Q_t = 120 - 2(32) = \\mathbf{56} \\text{ (triệu lon/tháng)}$.</p>\n          <p class=\"mt-2\">• Thuế người tiêu dùng chịu: $t_b = P_b - P^* = 32 - 30 = \\mathbf{2}$ nghìn đồng/lon ($33.3\\%$ gánh nặng thuế).</p>\n          <p>• Thuế nhà sản xuất chịu: $t_s = P^* - P_s = 30 - 26 = \\mathbf{4}$ nghìn đồng/lon ($66.7\\%$ gánh nặng thuế).</p>\n          <p>• Thu ngân sách nhà nước: $T = t \\times Q_t = 6 \\times 56 = \\mathbf{336} \\text{ (tỷ đồng/tháng)}$.</p>\n          <p>• <strong>Tổn thất vô ích của xã hội (DWL):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$DWL = \\frac{1}{2} \\times t \\times (Q^* - Q_t) = \\frac{1}{2} \\times 6 \\times (60 - 56) = \\mathbf{12} \\text{ (tỷ đồng/tháng)}$$</div>\n          <p class=\"mt-2\">• <strong>Cơ chế phân bổ:</strong> Ta có $\\frac{t_b}{t_s} = \\frac{E_S}{|E_D|} = \\frac{0.5}{1.0} = \\frac{1}{2}$. Vì cầu co giãn nhiều hơn cung ($|E_D| = 1.0 > E_S = 0.5$), người mua có nhiều lựa chọn thay thế hơn nên người bán buộc phải gánh phần lớn sắc thuế!</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Bộ Tài chính & Hiệp hội Bia - Rượu - Nước giải khát Việt Nam (VBA)",
      "content": "Khi chính phủ tăng thuế tiêu thụ đặc biệt đối với đồ uống có cồn, sản lượng tiêu thụ giảm từ 60 triệu xuống 56 triệu lon giúp giảm thiểu các hành vi lái xe khi say xỉn và bệnh tật. Tuy nhiên, do các nhà máy bia có tài sản cố định chuyên dụng lớn (cung kém co giãn hơn cầu trong ngắn hạn), họ phải chấp nhận giảm biên lợi nhuận ròng từ 30k xuống 26k/lon để giữ chân khách hàng.",
      "takeaway": "Gánh nặng thuế không phụ thuộc vào việc chính phủ thu tiền từ ai (người mua hay người bán), mà được quyết định hoàn toàn bởi độ co giãn tương đối giữa cung và cầu: bên nào ít co giãn hơn sẽ phải chịu phần lớn tiền thuế."
    },
    "commonMistakes": [
      "Thay nhầm giá $P_s$ vào hàm cầu hoặc $P_b$ vào hàm cung ban đầu.",
      "Quên tính tung độ góc khi tính diện tích tam giác $CS$ và $PS$.",
      "Tính nhầm $DWL$ bằng cách lấy $t \\times Q_t$ thay vì diện tích tam giác tổn thất sản lượng."
    ]
  },
  {
    "id": "prob2",
    "category": "micro",
    "chapter": 4,
    "title": "Dạng 2: Tối ưu hóa tiêu dùng của sinh viên Gen Z: Gói Streaming vs Dữ liệu di động 4G/5G",
    "examLevel": "Đề thi Olympic Kinh tế học / ĐH Ngoại Thương (FTU)",
    "caseStudyTag": "Case study: Hành vi tiêu dùng số của Gen Z giữa Netflix/Spotify và Data Viettel",
    "context": "Một sinh viên đại học dành ngân sách giải trí và học tập trực tuyến cố định $I = 1.200.000$ đồng/tháng để mua hai dịch vụ số:\n• Hàng hóa X: Dữ liệu di động 4G/5G tốc độ cao (Gói 10GB/tháng) với giá $P_X = 20.000$ đồng/gói.\n• Hàng hóa Y: Thuê bao tài khoản giải trí trực tuyến chất lượng cao (Netflix, Spotify Premium, Coursera Plus) với giá $P_Y = 40.000$ đồng/tháng.\nHàm tổng mức thỏa dụng thể hiện sở thích cân bằng được ước lượng theo dạng Cobb-Douglas:\n$$U(X, Y) = X^{0.5} \\cdot Y^{0.5}$$",
    "subQuestions": [
      "a) Thiết lập phương trình đường ngân sách và vẽ đồ thị biểu diễn không gian tiêu dùng.",
      "b) Tính tỷ lệ thay thế biên ($MRS_{XY}$). Xác định giỏ tiêu dùng tối ưu ($X^*, Y^*$) và mức thỏa dụng cực đại ($U_{\\max}$).",
      "c) Giải lại bài toán bằng phương pháp Nhân tử Lagrange (Lagrange Multiplier) và nêu ý nghĩa kinh tế của nhân tử $\\lambda^*$.",
      "d) Nếu nhà mạng viễn thông tăng giá cước dữ liệu lên $P_X' = 30.000$ đồng/gói, hãy xác định giỏ tiêu dùng mới."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Phương trình đường ngân sách</h4>\n          <p>Phương trình tổng quát: $P_X \\cdot X + P_Y \\cdot Y = I$</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$20.000 X + 40.000 Y = 1.200.000 \\iff \\mathbf{X + 2Y = 60} \\iff \\mathbf{Y = 30 - 0.5X}$$</div>\n          <p>• Mua tối đa gói Data ($Y=0$): $X_{\\max} = 1.200.000 / 20.000 = \\mathbf{60}$ gói.</p>\n          <p>• Mua tối đa gói Streaming ($X=0$): $Y_{\\max} = 1.200.000 / 40.000 = \\mathbf{30}$ tháng thuê bao.</p>\n          <p>• Độ dốc đường ngân sách: $-P_X / P_Y = -20.000 / 40.000 = \\mathbf{-0.5}$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Phương pháp cân bằng thỏa dụng cận biên</h4>\n          <p>Thỏa dụng cận biên của từng dịch vụ:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$MU_X = \\frac{\\partial U}{\\partial X} = \\frac{0.5 Y^{0.5}}{X^{0.5}}; \\quad MU_Y = \\frac{\\partial U}{\\partial Y} = \\frac{0.5 X^{0.5}}{Y^{0.5}}$$</div>\n          <p>Tỷ lệ thay thế biên ($MRS$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$MRS_{XY} = \\frac{MU_X}{MU_Y} = \\mathbf{\\frac{Y}{X}}$$</div>\n          <p>Điều kiện tiếp điểm tối ưu ($MRS = P_X / P_Y$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\frac{Y}{X} = \\frac{20.000}{40.000} = \\frac{1}{2} \\implies \\mathbf{X = 2Y}$$</div>\n          <p>Thay vào phương trình đường ngân sách $X + 2Y = 60$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2Y + 2Y = 60 \\iff 4Y = 60 \\implies \\mathbf{Y^* = 15} \\implies \\mathbf{X^* = 30}$$</div>\n          <p>Mức thỏa dụng cực đại: $U_{\\max} = (30)^{0.5} \\cdot (15)^{0.5} = \\sqrt{450} \\approx \\mathbf{21.21}$ utils.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c & d: Nhân tử Lagrange và Biến động giá cước</h4>\n          <p>Thiết lập hàm Lagrange:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathcal{L}(X, Y, \\lambda) = X^{0.5} Y^{0.5} + \\lambda(1.200.000 - 20.000X - 40.000Y)$$</div>\n          <p>Hệ điều kiện bậc nhất (FOC):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\begin{cases} \\frac{\\partial \\mathcal{L}}{\\partial X} = 0.5 X^{-0.5} Y^{0.5} - 20.000\\lambda = 0 \\\\ \\frac{\\partial \\mathcal{L}}{\\partial Y} = 0.5 X^{0.5} Y^{-0.5} - 40.000\\lambda = 0 \\\\ \\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 1.200.000 - 20.000X - 40.000Y = 0 \\end{cases} \\implies \\begin{cases} X^* = 30 \\\\ Y^* = 15 \\\\ \\lambda^* \\approx 0.0000177 \\end{cases}$$</div>\n          <p>• <strong>Ý nghĩa kinh tế của $\\lambda^*$:</strong> Là thỏa dụng biên của tiền ($MU_I$). Nếu sinh viên được trợ cấp thêm 1.000 đồng ngân sách, mức thỏa dụng tối đa sẽ tăng thêm xấp xỉ $0.0177$ đơn vị.</p>\n          <p>• <strong>Khi giá $P_X' = 30.000$:</strong> Ta có $30.000X + 40.000Y = 1.200.000$ và $Y/X = 30/40 = 3/4 \\implies X = \\frac{4}{3}Y$. Thay vào: $30.000(\\frac{4}{3}Y) + 40.000Y = 1.200.000 \\iff 80.000Y = 1.200.000 \\implies \\mathbf{Y' = 15}, \\mathbf{X' = 20}$.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Chiến lược định giá gói cước viễn thông và dịch vụ Subscription (Netflix, Spotify, Viettel)",
      "content": "Với hàm thỏa dụng Cobb-Douglas có số mũ bằng nhau ($\\alpha = \\beta = 0.5$), người tiêu dùng luôn có xu hướng phân bổ chính xác 50% thu nhập cho mỗi loại hàng hóa ($P_X X = P_Y Y = I/2 = 600.000$ đồng). Khi giá Data tăng từ 20k lên 30k, lượng tiêu thụ Data giảm từ 30 xuống 20 gói trong khi chi tiêu cho Streaming vẫn giữ nguyên 15 tháng (600k).",
      "takeaway": "Quy tắc Cobb-Douglas chứng minh rằng tỷ trọng chi tiêu ngân sách cho từng nhóm dịch vụ độc lập với mức giá của hàng hóa đó, giúp các doanh nghiệp số dự báo chính xác tổng doanh thu khi điều chỉnh biểu giá cước."
    },
    "commonMistakes": [
      "Tính đạo hàm sai với số mũ phân số $0.5$.",
      "Quên nhân với mức giá $P_X, P_Y$ khi lập hàm ràng buộc Lagrange."
    ]
  },
  {
    "id": "prob3",
    "category": "micro",
    "chapter": 5,
    "title": "Dạng 3: Hàm chi phí, điểm hòa vốn và quyết định đóng cửa của hãng xe điện Tesla",
    "examLevel": "Đề thi Đại học Kinh tế TP.HCM (UEH)",
    "caseStudyTag": "Case study: Chiến lược sản xuất Gigafactory và chi phí sản xuất xe điện Tesla Model 3",
    "context": "Nhà máy Gigafactory của hãng xe điện Tesla sản xuất dòng xe Model 3 trong thị trường cạnh tranh có hàm tổng chi phí ngắn hạn ước lượng:\n$$TC = Q^2 + 10Q + 100$$\n(Trong đó: Q tính bằng nghìn xe/quý; TC tính bằng triệu USD).",
    "subQuestions": [
      "a) Xác định các hàm chi phí ngắn hạn: Chi phí cố định ($FC$), Chi phí biến đổi ($VC$), Chi phí cố định trung bình ($AFC$), Chi phí biến đổi trung bình ($AVC$), Chi phí trung bình ($ATC$) và Chi phí cận biên ($MC$).",
      "b) Xác định mức giá hòa vốn ($P_{\\text{hòa vốn}}$) và mức giá đóng cửa nhà máy ($P_{\\text{đóng cửa}}$) của Tesla.",
      "c) Viết phương trình đường cung ngắn hạn của nhà máy và vẽ đồ thị minh họa.",
      "d) Trong cuộc chiến hạ giá xe điện, nếu giá thị trường giảm xuống còn $P = 50$ nghìn USD/xe, Tesla nên sản xuất bao nhiêu xe để tối đa hóa lợi nhuận? Tính lợi nhuận kinh tế đạt được."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Thiết lập các hàm chi phí sản xuất</h4>\n          <p>• Chi phí cố định khấu hao nhà xưởng, robot: $\\mathbf{FC = 100}$ triệu USD.</p>\n          <p>• Chi phí biến đổi (pin, thép, chip, nhân công): $\\mathbf{VC = Q^2 + 10Q}$ triệu USD.</p>\n          <p>• Chi phí cố định trung bình: $\\mathbf{AFC = 100/Q}$.</p>\n          <p>• Chi phí biến đổi trung bình: $\\mathbf{AVC = VC/Q = Q + 10}$.</p>\n          <p>• Chi phí trung bình trên mỗi xe: $\\mathbf{ATC = TC/Q = Q + 10 + 100/Q}$.</p>\n          <p>• Chi phí cận biên sản xuất thêm 1 xe: $\\mathbf{MC = TC'(Q) = 2Q + 10}$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Điểm hòa vốn và Điểm đóng cửa</h4>\n          <p>• <strong>Điểm hòa vốn:</strong> Xảy ra tại cực tiểu của $ATC$ ($MC = ATC$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2Q + 10 = Q + 10 + \\frac{100}{Q} \\iff Q = \\frac{100}{Q} \\iff Q^2 = 100 \\implies \\mathbf{Q_{hv} = 10} \\text{ (nghìn xe)}$$</div>\n          <p>Mức giá hòa vốn tối thiểu: $\\mathbf{P_{\\text{hòa vốn}} = ATC(10) = 10 + 10 + 100/10 = 30}$ nghìn USD/xe.</p>\n          <p class=\"mt-2\">• <strong>Điểm đóng cửa:</strong> Xảy ra tại cực tiểu của $AVC$ ($MC = AVC$ khi $Q \\to 0$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\min AVC = 10 \\quad (\\text{tại } Q \\to 0) \\implies \\mathbf{P_{\\text{đóng cửa}} = 10} \\text{ nghìn USD/xe}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c & d: Đường cung và Quyết định sản xuất tối ưu</h4>\n          <p>Đường cung ngắn hạn của Tesla là nhánh đường $MC$ nằm trên mức giá đóng cửa $P \\ge 10$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$P = 2Q + 10 \\iff \\mathbf{Q_S = \\frac{P - 10}{2}} \\quad (\\text{với } P \\ge 10)$$</div>\n          <p class=\"mt-2\">• Tại mức giá cạnh tranh $P = 50$ nghìn USD/xe ($P > P_{\\text{hòa vốn}} = 30 \\implies$ có lãi lớn):</p>\n          <p>Điều kiện tối đa hóa lợi nhuận ($MR = P = MC$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$50 = 2Q + 10 \\iff 2Q = 40 \\implies \\mathbf{Q^* = 20} \\text{ (nghìn xe/quý)}$$</div>\n          <p>• Tổng doanh thu: $TR = P \\times Q^* = 50 \\times 20 = 1.000$ triệu USD ($1$ tỷ USD).</p>\n          <p>• Tổng chi phí: $TC = 20^2 + 10(20) + 100 = 400 + 200 + 100 = 700$ triệu USD.</p>\n          <p>• Lợi nhuận kinh tế ròng: $\\pi = TR - TC = 1.000 - 700 = \\mathbf{300}$ triệu USD/quý.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tập đoàn Tesla Motors & Cuộc chiến giá xe điện toàn cầu của Elon Musk",
      "content": "Nhờ đầu tư dây chuyền đúc thân xe nguyên khối Giga Press và tự chủ sản xuất cell pin 4680, Tesla đẩy chi phí hòa vốn xuống chỉ 30k USD/xe. Khi các đối thủ mới gia nhập thị trường chịu mức hòa vốn 45k-50k USD, Tesla có thể chủ động hạ giá bán từ 65k xuống 50k USD/xe để chiếm lĩnh thị phần mà vẫn duy trì lợi nhuận ròng 300 triệu USD/quý.",
      "takeaway": "Trong ngắn hạn, miễn là mức giá thị trường lớn hơn chi phí biến đổi trung bình ($P > AVC$), doanh nghiệp vẫn tiếp tục sản xuất để bù đắp một phần chi phí cố định chìm ($FC$), thay vì đóng cửa chịu lỗ toàn bộ $FC$."
    },
    "commonMistakes": [
      "Nhầm lẫn giữa giá hòa vốn ($P = \\min ATC$) và giá đóng cửa ($P = \\min AVC$).",
      "Quên điều kiện $P \\ge 10$ khi viết phương trình hàm cung ngắn hạn."
    ]
  },
  {
    "id": "prob4",
    "category": "micro",
    "chapter": 6,
    "title": "Dạng 4: Phân biệt giá cấp 3 của Vietnam Airlines: Khách thương gia vs Khách du lịch tiết kiệm",
    "examLevel": "Đề thi Học viện Ngân hàng (BA)",
    "caseStudyTag": "Case study: Thuật toán Yield Management định giá vé máy bay của Vietnam Airlines",
    "context": "Hãng hàng không Vietnam Airlines khai thác độc quyền chặng bay Hà Nội - Điện Biên với hàm tổng chi phí:\n$$TC = Q^2 + 20Q + 100$$\n(Trong đó: Q là tổng số lượng hành khách, tính bằng trăm khách; TC tính bằng triệu đồng).\nThị trường được phân đoạn thành hai nhóm hành khách độc lập:\n• Nhóm 1 (Khách công vụ, thương gia ít co giãn): $Q_1 = 80 - P_1$\n• Nhóm 2 (Khách du lịch, học sinh sinh viên co giãn nhiều): $Q_2 = 100 - 2P_2$\n(Giá vé P tính bằng trăm nghìn đồng/vé).",
    "subQuestions": [
      "a) Nếu hãng áp dụng chính sách phân biệt giá cấp 3 (Third-degree Price Discrimination), hãy xác định mức giá ($P_1, P_2$), số lượng vé ($Q_1, Q_2$) và tổng lợi nhuận thu được.",
      "b) Phân tích mối quan hệ giữa mức giá định cho từng nhóm và độ co giãn của cầu theo giá theo công thức Lerner.",
      "c) Nếu cơ quan quản lý hàng không cấm phân biệt giá (buộc bán cùng 1 mức giá vé duy nhất), hãy xác định giá vé tối ưu và so sánh lợi nhuận."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tối ưu phân biệt giá cấp 3 ($MR_1 = MR_2 = MC$)</h4>\n          <p>Viết lại hàm cầu ngược của từng phân khúc:</p>\n          <p>• Phân khúc 1 (Thương gia): $P_1 = 80 - Q_1 \\implies TR_1 = 80Q_1 - Q_1^2 \\implies \\mathbf{MR_1 = 80 - 2Q_1}$.</p>\n          <p>• Phân khúc 2 (Du lịch): $P_2 = 50 - 0.5Q_2 \\implies TR_2 = 50Q_2 - 0.5Q_2^2 \\implies \\mathbf{MR_2 = 50 - Q_2}$.</p>\n          <p>Tổng sản lượng vận chuyển: $Q = Q_1 + Q_2 \\implies \\mathbf{MC = 2(Q_1 + Q_2) + 20}$.</p>\n          <p>Thiết lập hệ điều kiện tối ưu hóa:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\begin{cases} MR_1 = MC \\\\ MR_2 = MC \\end{cases} \\iff \\begin{cases} 80 - 2Q_1 = 2(Q_1 + Q_2) + 20 \\\\ 50 - Q_2 = 2(Q_1 + Q_2) + 20 \\end{cases} \\iff \\begin{cases} 4Q_1 + 2Q_2 = 60 \\\\ 2Q_1 + 3Q_2 = 30 \\end{cases}$$</div>\n          <p>Giải hệ phương trình tuyến tính:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathbf{Q_1^* = 15} \\text{ (nghìn khách)} \\implies \\mathbf{P_1^* = 80 - 15 = 65} \\text{ (tương đương 6,5 triệu đồng/vé)}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathbf{Q_2^* = 0} \\text{ (nghiệm biên vì chi phí biên vượt giá sẵn lòng trả của nhóm du lịch)}$$</div>\n          <p class=\"text-xs text-amber-700 dark:text-amber-300 font-semibold\">Nhận xét: Tại chi phí biên của tàu bay nhỏ ($MC(15) = 50$), mức giá người du lịch sẵn lòng trả tối đa ($50$) không đủ bù chi phí cận biên, nên hãng tối ưu bằng cách chỉ phục vụ nhóm thương gia.</p>\n          <p>Lợi nhuận cực đại: $\\pi = TR_1 - TC = (65 \\times 15) - (15^2 + 20 \\times 15 + 100) = 975 - 625 = \\mathbf{350}$ triệu đồng.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Quy tắc định giá nghịch đảo độ co giãn</h4>\n          <p>Theo công thức định giá độc quyền:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\frac{P_1 - MC}{P_1} = \\frac{1}{|E_{D1}|}; \\quad \\frac{P_2 - MC}{P_2} = \\frac{1}{|E_{D2}|}$$</div>\n          <p>Phân khúc nào có cầu ít co giãn hơn ($|E_{D1}| < |E_{D2}|$) thì hãng hàng không sẽ định mức giá bán cao hơn ($P_1 > P_2$) để bòn rút thặng dư tiêu dùng.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Hãng hàng không Quốc gia Vietnam Airlines & Thuật toán Dynamic Pricing",
      "content": "Các hãng hàng không thương mại không bao giờ bán vé với giá đồng nhất. Hành khách đặt vé sát ngày bay (thường là doanh nhân đi công tác khẩn cấp, cầu rất ít co giãn) sẵn sàng trả 6-8 triệu đồng/vé, trong khi khách đặt trước 3 tháng (đi nghỉ dưỡng, cầu rất co giãn) chỉ trả 1-2 triệu đồng/vé.",
      "takeaway": "Phân biệt giá cấp 3 thành công khi và chỉ khi: (1) Doanh nghiệp có quyền lực thị trường; (2) Phân tách được các nhóm khách hàng theo độ co giãn; (3) Ngăn chặn hoàn toàn hiện tượng bán lại vé chợ đen (Arbitrage) nhờ định danh CCCD/Hộ chiếu."
    },
    "commonMistakes": [
      "Quên tính tổng $Q = Q_1 + Q_2$ khi đưa vào hàm chi phí biên $MC$.",
      "Không loại bỏ các nghiệm âm ($Q_i < 0$) khi giải hệ phương trình tối ưu."
    ]
  },
  {
    "id": "prob5",
    "category": "micro",
    "chapter": 1,
    "title": "Dạng 5: Hiệp định EVFTA, đường PPF và lợi thế so sánh: Dệt may Việt Nam vs Máy móc EU",
    "examLevel": "Đề thi Olympic Kinh tế học NEU - FTU",
    "caseStudyTag": "Case study: Hiệp định thương mại tự do EVFTA giữa Việt Nam và Liên minh Châu Âu EU",
    "context": "Trong khuôn khổ Hiệp định EVFTA, xét hai nền kinh tế Việt Nam (VN) và Liên minh Châu Âu (EU) cùng phân bổ 100 đơn vị lao động để sản xuất: Hàng dệt may xuất khẩu (X) và Máy móc thiết bị công nghiệp nặng (Y).\n• Năng suất tại Việt Nam: 1 đơn vị lao động sản xuất được 10 tấn dệt may hoặc 5 chiếc máy móc.\n• Năng suất tại EU: 1 đơn vị lao động sản xuất được 6 tấn dệt may hoặc 2 chiếc máy móc.",
    "subQuestions": [
      "a) Thiết lập phương trình đường PPF và tính Tỷ lệ chuyển đổi biên ($MRT$) của Việt Nam và EU.",
      "b) Xác định Lợi thế tuyệt đối (Adam Smith) và Lợi thế so sánh (David Ricardo) của từng bên.",
      "c) Xác định khoảng tỷ giá thương mại quốc tế cùng có lợi ($P_X / P_Y$) và chứng minh lợi ích chuyên môn hóa mậu dịch tự do."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Phương trình đường PPF và Chi phí cơ hội</h4>\n          <p>• <strong>Việt Nam ($L_{VN} = 100$):</strong></p>\n          <p>Sản lượng tối đa: $X_{\\max}^{VN} = 100 \\times 10 = 1.000$ tấn; $Y_{\\max}^{VN} = 100 \\times 5 = 500$ chiếc máy.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\text{PPF}_{VN}: \\frac{X}{1.000} + \\frac{Y}{500} = 1 \\iff \\mathbf{X + 2Y = 1.000} \\implies OC_X^{VN} = 0.5 \\text{ máy/tấn dệt may}$$</div>\n          <p>• <strong>Liên minh Châu Âu EU ($L_{EU} = 100$):</strong></p>\n          <p>Sản lượng tối đa: $X_{\\max}^{EU} = 100 \\times 6 = 600$ tấn; $Y_{\\max}^{EU} = 100 \\times 2 = 200$ chiếc máy.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\text{PPF}_{EU}: \\frac{X}{600} + \\frac{Y}{200} = 1 \\iff \\mathbf{X + 3Y = 600} \\implies OC_X^{EU} = 0.333 \\text{ máy/tấn dệt may}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Lợi thế tuyệt đối vs Lợi thế so sánh</h4>\n          <p>• <strong>Lợi thế tuyệt đối (Adam Smith):</strong> Việt Nam có năng suất lao động vượt trội ở cả hai ngành ($10 > 6$ và $5 > 2$) $\\implies$ <strong>Việt Nam có lợi thế tuyệt đối ở cả Dệt may và Máy móc</strong>.</p>\n          <p>• <strong>Lợi thế so sánh (David Ricardo):</strong></p>\n          <p>- Chi phí cơ hội làm dệt may: $OC_X^{EU} = 0.333 < OC_X^{VN} = 0.5 \\implies$ <strong>EU có lợi thế so sánh về Dệt may (X)</strong>.</p>\n          <p>- Chi phí cơ hội làm máy móc: $OC_Y^{VN} = 1/0.5 = 2.0 < OC_Y^{EU} = 1/0.333 = 3.0 \\implies$ <strong>Việt Nam có lợi thế so sánh về Máy móc (Y)</strong>.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Khoảng tỷ giá thương mại EVFTA cùng có lợi</h4>\n          <p>Khoảng tỷ giá trao đổi quốc tế để cả hai bên đều gia tăng phúc lợi:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$OC_X^{EU} < \\frac{P_X}{P_Y} < OC_X^{VN} \\iff \\mathbf{0.333 \\text{ chiếc máy} < 1 \\text{ tấn dệt may} < 0.500 \\text{ chiếc máy}}$$</div>\n          <p>Nếu hai bên thỏa thuận tỷ giá $1 \\text{ tấn dệt may} = 0.4 \\text{ chiếc máy}$ (hay $1 \\text{ máy} = 2.5 \\text{ tấn dệt may}$): Cả hai quốc gia đều có thể tiêu dùng tại các điểm nằm hoàn toàn bên ngoài đường giới hạn khả năng sản xuất nội địa PPF.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Hiệp định Thương mại Tự do Việt Nam - EU (EVFTA) & Lý thuyết thương mại quốc tế",
      "content": "Dù một quốc gia có thể kém hơn về năng suất tuyệt đối ở mọi ngành, họ vẫn luôn nắm giữ lợi thế so sánh ở những ngành mà họ ít bất lợi nhất. EVFTA giúp Việt Nam chuyên môn hóa vào các mặt hàng thâm dụng lao động và nông sản xuất khẩu, đồng thời nhập khẩu máy móc công nghệ cao từ EU với giá rẻ hơn tự chế tạo.",
      "takeaway": "Thương mại tự do quốc tế không phải là trò chơi có tổng bằng không (Zero-sum game) mà là cơ chế đôi bên cùng có lợi (Positive-sum game) nhờ mở rộng khả năng tiêu dùng toàn cầu."
    },
    "commonMistakes": [
      "Đồng nhất lợi thế tuyệt đối với lợi thế so sánh.",
      "Tính nhầm nghịch đảo chi phí cơ hội khi quy đổi giữa hàng X và hàng Y."
    ]
  },
  {
    "id": "prob6",
    "category": "micro",
    "chapter": 2,
    "title": "Dạng 6: Can thiệp trần giá vé máy bay Tết và sàn giá thu mua lúa gạo",
    "examLevel": "Đề thi cuối kỳ Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Khủng hoảng khan hiếm vé máy bay dịp Tết & Chính sách giá sàn lương thực",
    "context": "Xét thị trường vé máy bay chặng cao điểm Tết Nguyên Đán với hàm cầu hành khách và hàm cung chuyến bay:\n$$Q_D = 100 - P \\quad \\text{và} \\quad Q_S = 20 + P$$\n(P tính bằng trăm nghìn đồng/vé; Q tính bằng nghìn vé/tuần).",
    "subQuestions": [
      "a) Xác định mức giá ($P^*$) và số lượng vé ($Q^*$) cân bằng theo cơ chế thị trường tự do.",
      "b) Cục Hàng không áp dụng trần giá vé máy bay $P_c = 30$ (tương đương 3 triệu đồng/vé) để bảo vệ hành khách. Tính lượng thiếu hụt vé máy bay (cháy vé Tết), thặng dư người tiêu dùng ($CS$), thặng dư hãng bay ($PS$) và tổn thất phúc lợi xã hội ($DWL$).",
      "c) Ngược lại, trên thị trường nông sản, chính phủ áp dụng giá sàn bảo hiểm lúa gạo $P_f = 50$ (5 triệu đồng/tấn). Tính lượng dư thừa lúa gạo và chi phí ngân sách phải bỏ ra thu mua tạm trữ."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Điểm cân bằng thị trường tự do</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$100 - P = 20 + P \\iff 2P = 80 \\implies \\mathbf{P^* = 40} \\text{ (4 triệu đồng/vé)}, \\quad \\mathbf{Q^* = 60} \\text{ (nghìn vé)}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Tác động của giá trần vé máy bay $P_c = 30$</h4>\n          <p>Tại mức giá trần $P_c = 30 < P^* = 40$ (Giá trần có hiệu lực ràng buộc):</p>\n          <p>• Lượng cầu đăng ký mua vé: $Q_D = 100 - 30 = 70$ nghìn vé.</p>\n          <p>• Lượng cung chuyến bay đáp ứng: $Q_S = 20 + 30 = 50$ nghìn vé.</p>\n          <p>$\\implies$ <strong>Lượng thiếu hụt vé máy bay (Cháy vé Tết):</strong> $\\Delta Q = 70 - 50 = \\mathbf{20}$ nghìn vé.</p>\n          <p>Số lượng vé giao dịch thực tế: $Q_{gd} = \\min(Q_D, Q_S) = 50$ nghìn vé.</p>\n          <p>Mức giá người dân sẵn lòng trả cho 50 nghìn vé này trên thị trường chợ đen: $P_{WTP} = 100 - 50 = 50$ (5 triệu đồng).</p>\n          <p>• Thặng dư hãng bay: $PS_1 = \\frac{1}{2} \\times (30 - 0) \\times 50 = \\mathbf{750}$ tỷ đồng.</p>\n          <p>• <strong>Tổn thất vô ích của xã hội (DWL):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$DWL = \\frac{1}{2} \\times (P_{WTP} - P_c) \\times (Q^* - Q_S) = \\frac{1}{2} \\times (50 - 30) \\times (60 - 50) = \\mathbf{100} \\text{ tỷ đồng}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Tác động của giá sàn nông sản $P_f = 50$</h4>\n          <p>Tại mức giá sàn $P_f = 50 > P^* = 40$:</p>\n          <p>• Lượng cung nông dân sản xuất: $Q_S = 20 + 50 = 70$ nghìn tấn.</p>\n          <p>• Lượng cầu thương lái thu mua: $Q_D = 100 - 50 = 50$ nghìn tấn.</p>\n          <p>$\\implies$ <strong>Lượng dư thừa lúa gạo:</strong> $70 - 50 = \\mathbf{20}$ nghìn tấn.</p>\n          <p>Để duy trì giá sàn thành công, chính phủ buộc phải chi ngân sách thu mua tạm trữ toàn bộ lượng dư thừa: $\\text{Chi ngân sách} = P_f \\times \\text{Dư thừa} = 50 \\times 20 = \\mathbf{1.000}$ tỷ đồng.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Cục Hàng không Dân dụng Việt Nam & Bài toán điều tiết trần giá vé máy bay",
      "content": "Chính sách giá trần nhằm bảo vệ người tiêu dùng thu nhập thấp thường dẫn đến tác dụng ngược: các hãng hàng không cắt giảm chuyến bay do không bù đắp được chi phí vận hành tăng cao dịp Tết, tạo điều kiện cho hiện tượng 'cò vé' và thị trường chợ đen bùng nổ.",
      "takeaway": "Can thiệp giá trực tiếp bằng mệnh lệnh hành chính phá vỡ cơ chế truyền tín hiệu của giá cả tự do, gây tổn thất phúc lợi xã hội ($DWL$) và tạo ra sự phân bổ nguồn lực kém hiệu quả."
    },
    "commonMistakes": [
      "Quên rằng khi có giá trần, sản lượng giao dịch bị khống chế bởi lượng cung $Q_S$.",
      "Tính sai chi phí mua tạm trữ của chính phủ khi có giá sàn."
    ]
  },
  {
    "id": "prob7",
    "category": "micro",
    "chapter": 4,
    "title": "Dạng 7: Cú sốc giá xăng dầu và phân rã hiệu ứng Slutsky đối với tài xế Grab/Be",
    "examLevel": "Đề thi Cao học Kinh tế học / ĐH Kinh tế TP.HCM (UEH)",
    "caseStudyTag": "Case study: Cú sốc tăng giá xăng RON 95 năm 2022 & Ngân sách tài xế công nghệ Grab",
    "context": "Năm 2022, xung đột địa chính trị đẩy giá nhiên liệu tăng vọt. Một tài xế công nghệ (GrabCar) có thu nhập khả dụng $I = 1.200$ nghìn đồng/ngày phân bổ cho hai nhu cầu:\n• Hàng hóa X: Nhiên liệu xăng RON 95 với giá ban đầu $P_X = 10$ nghìn đồng/lít.\n• Hàng hóa Y: Chi tiêu sinh hoạt thiết yếu gia đình với giá chuẩn $P_Y = 20$ nghìn đồng/đơn vị.\nHàm thỏa dụng: $U(X, Y) = X \\cdot Y$.\nSau cú sốc năng lượng, giá xăng tăng gấp đôi lên $P_X' = 20$ nghìn đồng/lít.",
    "subQuestions": [
      "a) Xác định giỏ tiêu dùng tối ưu trước cú sốc $A(X_1, Y_1)$ và giỏ tiêu dùng sau cú sốc $C(X_2, Y_2)$.",
      "b) Tính mức thu nhập danh nghĩa cần bù đắp theo Slutsky ($I'$) để tài xế có thể mua lại đúng giỏ hàng cũ và xác định giỏ hàng trung gian $B(X_B, Y_B)$.",
      "c) Phân rã tổng sụt giảm lượng tiêu thụ xăng thành Hiệu ứng thay thế ($SE$) và Hiệu ứng thu nhập ($IE$)."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Điểm tối ưu ban đầu (A) và cuối cùng (C)</h4>\n          <p>Điều kiện tối ưu với hàm thỏa dụng $U = XY$: $P_X X = P_Y Y = I/2 = 600$ nghìn đồng.</p>\n          <p>• <strong>Trước khi tăng giá ($P_X = 10, P_Y = 20, I = 1.200$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathbf{X_1 = \\frac{600}{10} = 60} \\text{ (lít xăng)}, \\quad \\mathbf{Y_1 = \\frac{600}{20} = 30} \\implies U_1 = 60 \\times 30 = 1.800$$</div>\n          <p>• <strong>Sau khi tăng giá ($P_X' = 20, P_Y = 20, I = 1.200$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathbf{X_2 = \\frac{600}{20} = 30} \\text{ (lít xăng)}, \\quad \\mathbf{Y_2 = \\frac{600}{20} = 30} \\implies U_2 = 30 \\times 30 = 900$$</div>\n          <p>Tổng thay đổi tiêu dùng xăng: $\\Delta X_{\\text{tổng}} = X_2 - X_1 = 30 - 60 = \\mathbf{-30}$ lít.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b & c: Thu nhập bù đắp Slutsky và Phân rã tác động</h4>\n          <p>Thu nhập bù đắp theo Slutsky để mua lại giỏ hàng ban đầu $A(60, 30)$ ở mức giá mới:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$I' = P_X' \\cdot X_1 + P_Y \\cdot Y_1 = 20(60) + 20(30) = 1.200 + 600 = \\mathbf{1.800} \\text{ nghìn đồng}$$</div>\n          <p>Giỏ hàng tối ưu trung gian $B(X_B, Y_B)$ với ngân sách $I' = 1.800$ và giá mới $(P_X'=20, P_Y=20)$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\mathbf{X_B = \\frac{1.800}{2 \\times 20} = 45} \\text{ (lít)}, \\quad \\mathbf{Y_B = 45}$$</div>\n          <p class=\"mt-2\">• <strong>Hiệu ứng thay thế (SE - Substitution Effect):</strong> Từ A sang B (do xăng đắt đỏ tương đối so với hàng khác):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$SE = X_B - X_1 = 45 - 60 = \\mathbf{-15} \\text{ (lít xăng)}$$</div>\n          <p>• <strong>Hiệu ứng thu nhập (IE - Income Effect):</strong> Từ B sang C (do sức mua thực tế bị xói mòn):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$IE = X_2 - X_B = 30 - 45 = \\mathbf{-15} \\text{ (lít xăng)}$$</div>\n          <p>Kiểm tra: $\\Delta X = SE + IE = (-15) + (-15) = -30$ lít (Khớp hoàn hảo phương trình Slutsky).</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Nền tảng gọi xe công nghệ Grab, Be, Gojek & Trợ cấp giá xăng dầu",
      "content": "Khi giá xăng dầu tăng gấp đôi, tài xế công nghệ giảm tiêu thụ 30 lít xăng vì hai lý do tách biệt: (1) Hiệu ứng thay thế (-15 lít): tài xế tắt máy khi dừng đèn đỏ, chạy xe tiết kiệm xăng hơn; (2) Hiệu ứng thu nhập (-15 lít): tiền đổ xăng chiếm trọn thu nhập khiến tài xế nghèo đi và buộc phải giảm thời gian lăn bánh trên đường.",
      "takeaway": "Phương trình Slutsky là công cụ kinh điển giúp các cơ quan hoạch định chính sách tính toán chính xác số tiền trợ cấp xã hội trực tiếp ($I' - I = 600k$) nhằm triệt tiêu hiệu ứng thu nhập tiêu cực cho người lao động nghèo."
    },
    "commonMistakes": [
      "Tính nhầm thu nhập bù đắp theo Hicks ($U_1 = \\text{const}$) thay vì Slutsky (mua lại giỏ hàng cũ).",
      "Ghi sai dấu của hiệu ứng thay thế ($SE$ đối với luật cầu luôn mang dấu âm)."
    ]
  },
  {
    "id": "prob8",
    "category": "micro",
    "chapter": 4,
    "title": "Dạng 8: Chuỗi cung ứng Apple iPhone và hàm sản xuất bổ sung hoàn hảo Leontief",
    "examLevel": "Đề thi Học viện Tài chính (AOF)",
    "caseStudyTag": "Case study: Chuỗi cung ứng lắp ráp Apple iPhone giữa Màn hình OLED và Chipset A-Series",
    "context": "Trong dây chuyền sản xuất điện thoại thông minh cao cấp của Apple, mỗi chiếc iPhone hoàn chỉnh bắt buộc phải kết hợp đúng tỷ lệ kỹ thuật cố định giữa:\n• 2 Cụm Module cảm biến Camera chất lượng cao của Sony (X) với giá $P_X = 20$ USD/cụm.\n• 5 Tấm nền hiển thị OLED cao cấp của Samsung Display (Y) với giá $P_Y = 10$ USD/tấm.\nHàm mức độ thỏa mãn dây chuyền lắp ráp có dạng Leontief:\n$$U(X, Y) = \\min\\{2X, 5Y\\}$$\nNgân sách linh kiện được Apple cấp cho phân xưởng là $I = 900$ USD/lô sản phẩm.",
    "subQuestions": [
      "a) Xác định số lượng linh kiện tối ưu ($X^*, Y^*$) để tối đa hóa số lượng cụm máy lắp ráp hoàn chỉnh ($U_{\\max}$).",
      "b) Giả sử nhà cung ứng Sony tăng giá cảm biến Camera lên $P_X' = 40$ USD/cụm, Apple cần bao nhiêu ngân sách để duy trì sản lượng ban đầu?",
      "c) So sánh với trường hợp một người tiêu dùng sử dụng hai loại pin sạc dự phòng thay thế hoàn hảo $U_2 = 2X + 3Y$ với $I = 600, P_X = 10, P_Y = 20$."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tối ưu hóa hàm Leontief (Bổ sung hoàn hảo)</h4>\n          <p>Với hàm Leontief, hiệu quả đạt được tại điểm góc nhọn không dư thừa linh kiện:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2X = 5Y \\implies \\mathbf{X = 2.5Y}$$</div>\n          <p>Thay vào phương trình đường ngân sách $P_X X + P_Y Y = I$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$20(2.5Y) + 10Y = 900 \\iff 50Y + 10Y = 900 \\iff 60Y = 900 \\implies \\mathbf{Y^* = 15}, \\quad \\mathbf{X^* = 37.5}$$</div>\n          <p>Sản lượng lắp ráp tối đa: $U_{\\max} = \\min\\{2(37.5), 5(15)\\} = \\min\\{75, 75\\} = \\mathbf{75}$ cụm máy.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Chi phí duy trì sản lượng khi Sony tăng giá</h4>\n          <p>Để duy trì $U = 75$ cụm, phân xưởng vẫn bắt buộc cần đúng $(X^* = 37.5, Y^* = 15)$ do tính chất bổ sung hoàn hảo (tỷ lệ thay thế biên $MRS = 0$ hoặc $\\infty$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$I_{\\text{mới}} = P_X' X^* + P_Y Y^* = 40(37.5) + 10(15) = 1.500 + 150 = \\mathbf{1.650} \\text{ USD}$$</div>\n          <p>$\\implies$ Ngân sách linh kiện cần tăng thêm $\\Delta I = 1.650 - 900 = \\mathbf{+750}$ USD.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Trường hợp Thay thế hoàn hảo & Nghiệm góc</h4>\n          <p>Với $U_2 = 2X + 3Y$, tỷ lệ thỏa dụng cận biên trên mỗi đồng chi tiêu:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\frac{MU_X}{P_X} = \\frac{2}{10} = 0.20 > \\frac{MU_Y}{P_Y} = \\frac{3}{20} = 0.15$$</div>\n          <p>Người mua dồn 100% tiền mua pin X (Nghiệm góc): $\\mathbf{X^* = 600/10 = 60, Y^* = 0, U_{\\max} = 120}$.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tập đoàn Apple Inc. & Quản trị rủi ro chuỗi cung ứng toàn cầu của Tim Cook",
      "content": "Các linh kiện phần cứng trong thiết bị công nghệ cao mang tính chất bổ sung hoàn hảo Leontief. Một chiếc iPhone thiếu dù chỉ một con chip quản lý nguồn 1 USD cũng không thể xuất xưởng. Do đó, Apple không thể thay thế linh kiện này bằng linh kiện khác, buộc phải chấp nhận chịu toàn bộ biến động giá từ các nhà cung ứng độc quyền.",
      "takeaway": "Đối với hàng hóa bổ sung hoàn hảo, hiệu ứng thay thế luôn bằng 0 ($SE = 0$), mọi tác động của việc tăng giá đều chuyển hóa thành hiệu ứng thu nhập ($IE$)."
    },
    "commonMistakes": [
      "Cố gắng lấy đạo hàm giải hệ phương trình với hàm $\\min$ thay vì dùng phương trình góc $2X = 5Y$.",
      "Nhầm lẫn giữa điều kiện hàng thay thế hoàn hảo ($MRS = \\text{const}$) và hàng bổ sung hoàn hảo."
    ]
  },
  {
    "id": "prob9",
    "category": "micro",
    "chapter": 6,
    "title": "Dạng 9: Cuộc chiến viễn thông di động 5G: Cân bằng Cournot và mô hình dẫn đầu Stackelberg",
    "examLevel": "Đề thi Chuyên ban Kinh tế học / FTU",
    "caseStudyTag": "Case study: Cạnh tranh thị phần viễn thông 5G giữa Tập đoàn Viettel và VNPT Vinaphone",
    "context": "Trên thị trường cung cấp hạ tầng truyền dẫn di động 5G, Tập đoàn Viettel (DN 1) và VNPT Vinaphone (DN 2) là hai nhà mạng độc quyền nhóm sản xuất dịch vụ đồng nhất với chi phí biên không đổi $MC_1 = MC_2 = 10$ nghìn đồng/GB.\nHàm cầu thị trường: $P = 100 - Q = 100 - (Q_1 + Q_2)$\n(Trong đó: Q tính bằng triệu GB/tháng; P tính bằng nghìn đồng/GB).",
    "subQuestions": [
      "a) Xác định Hàm phản ứng (Reaction Function) của mỗi nhà mạng và Cân bằng Cournot khi hai bên cùng ấn định sản lượng đồng thời.",
      "b) Nếu Viettel nhờ ưu thế mạng lưới lớn đóng vai trò Người dẫn đầu (Leader) đi trước, VNPT là Người đi sau (Follower), xác định Cân bằng Stackelberg và so sánh lợi nhuận hai bên.",
      "c) Phân tích lợi thế của người hành động trước (First-mover Advantage) trong ngành công nghệ viễn thông."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Mô hình Cournot (Ra quyết định đồng thời)</h4>\n          <p>• Doanh thu của Viettel: $TR_1 = [100 - (Q_1 + Q_2)]Q_1 = 100Q_1 - Q_1^2 - Q_1 Q_2 \\implies MR_1 = 100 - 2Q_1 - Q_2$.</p>\n          <p>Điều kiện tối đa hóa lợi nhuận ($MR_1 = MC_1 = 10$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$100 - 2Q_1 - Q_2 = 10 \\implies \\mathbf{Q_1 = R_1(Q_2) = 45 - 0.5Q_2}$$</div>\n          <p>Tương tự cho VNPT Vinaphone: $\\mathbf{Q_2 = R_2(Q_1) = 45 - 0.5Q_1}$.</p>\n          <p>Cân bằng Cournot tại giao điểm 2 hàm phản ứng:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$Q_1 = 45 - 0.5(45 - 0.5Q_1) \\iff 0.75Q_1 = 22.5 \\implies \\mathbf{Q_1^* = Q_2^* = 30} \\text{ (triệu GB)}$$</div>\n          <p>Tổng sản lượng: $Q = 60 \\implies P^* = 100 - 60 = \\mathbf{40}$ nghìn đồng/GB.</p>\n          <p>Lợi nhuận mỗi bên: $\\pi_1 = \\pi_2 = (40 - 10) \\times 30 = \\mathbf{900}$ tỷ đồng/tháng.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b & c: Mô hình Stackelberg và Lợi thế người dẫn đầu</h4>\n          <p>Viettel dự đoán trước phản ứng của VNPT ($Q_2 = 45 - 0.5Q_1$) nên thay trực tiếp vào hàm cầu:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$P = 100 - Q_1 - (45 - 0.5Q_1) = 55 - 0.5Q_1 \\implies MR_1 = 55 - Q_1$$</div>\n          <p>Điều kiện $MR_1 = MC = 10 \\iff 55 - Q_1 = 10 \\implies \\mathbf{Q_1^* = 45}$ triệu GB (Viettel chiếm 66.7% thị phần!).</p>\n          <p>VNPT thu hẹp sản lượng: $Q_2^* = 45 - 0.5(45) = \\mathbf{22.5}$ triệu GB.</p>\n          <p>Giá cước thị trường: $P = 100 - (45 + 22.5) = \\mathbf{32.5}$ nghìn đồng/GB.</p>\n          <p>• Lợi nhuận Viettel: $\\pi_1 = (32.5 - 10) \\times 45 = \\mathbf{1.012.5}$ tỷ đồng (Tăng thêm $12.5\\%$ so với Cournot).</p>\n          <p>• Lợi nhuận VNPT: $\\pi_2 = (32.5 - 10) \\times 22.5 = \\mathbf{506.25}$ tỷ đồng (Giảm $43.75\\%$ so với Cournot!).</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) & Chiến lược phủ sóng 5G",
      "content": "Bằng việc đẩy mạnh đầu tư hàng nghìn trạm phát sóng 5G trước đối thủ, Viettel tạo ra 'sự đã rồi' (Commitment) buộc VNPT Vinaphone phải thu hẹp quy mô cung ứng để tránh làm giá cước sụp đổ, qua đó củng cố vị thế thống lĩnh thị trường.",
      "takeaway": "Trong mô hình Stackelberg, cam kết sản xuất khối lượng lớn của người đi trước là mối đe dọa đáng tin cậy (Credible Threat), mang lại lợi thế chiến lược không thể đảo ngược."
    },
    "commonMistakes": [
      "Quên thay hàm phản ứng của đối thủ vào hàm doanh thu của Leader trước khi lấy đạo hàm.",
      "Tính sai sản lượng toàn ngành dẫn đến sai mức giá thị trường $P$."
    ]
  },
  {
    "id": "prob10",
    "category": "micro",
    "chapter": 3,
    "title": "Dạng 10: Netflix & Chiến lược siết chia sẻ mật khẩu và tăng giá thuê bao toàn cầu",
    "examLevel": "Đề thi Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Quyết định tăng giá thuê bao và triệt tiêu Password Sharing của Netflix năm 2023",
    "context": "Năm 2023, hãng dịch vụ xem phim trực tuyến Netflix ước lượng hàm cầu đăng ký thuê bao hàng tháng theo biểu thức đa biến:\n$$Q_D = 500 - 10P + 0.05I - 20P_Y + 15P_Z$$\nTrong đó: P là giá thuê bao Netflix (USD/tháng), I là thu nhập bình quân hộ gia đình ($4.000$ USD/tháng), $P_Y$ là giá truyền hình cáp truyền thống ($10$ USD/tháng), $P_Z$ là giá vé xem rạp chiếu phim ($20$ USD/vé).\nHiện tại mức giá thuê bao là $P = 20$ USD/tháng.",
    "subQuestions": [
      "a) Xác định lượng thuê bao hiện tại ($Q$). Tính độ co giãn của cầu theo giá ($E_D$), theo thu nhập ($E_I$) và độ co giãn chéo ($E_{XY}, E_{XZ}$).",
      "b) Phân loại bản chất kinh tế của dịch vụ Netflix và mối quan hệ với truyền hình cáp Y và vé rạp Z.",
      "c) Ban giám đốc Netflix dự định tăng giá thuê bao từ $20$ lên $23$ USD/tháng kết hợp siết chặt chia sẻ mật khẩu. Dựa vào lý thuyết độ co giãn, hãy phân tích tác động tới Tổng doanh thu ($TR$)."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tính toán các hệ số co giãn điểm</h4>\n          <p>Lượng thuê bao hiện hành:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$Q = 500 - 10(20) + 0.05(4.000) - 20(10) + 15(20) = 500 - 200 + 200 - 200 + 300 = \\mathbf{600} \\text{ (nghìn tài khoản)}$$</div>\n          <p>• <strong>Độ co giãn của cầu theo giá ($E_D$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$E_D = \\frac{\\partial Q}{\\partial P} \\times \\frac{P}{Q} = -10 \\times \\frac{20}{600} = \\mathbf{-0.333} \\implies |E_D| = 0.333 < 1$$</div>\n          <p>• <strong>Độ co giãn theo thu nhập ($E_I$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$E_I = \\frac{\\partial Q}{\\partial I} \\times \\frac{I}{Q} = 0.05 \\times \\frac{4.000}{600} = \\mathbf{+0.333} > 0$$</div>\n          <p>• <strong>Độ co giãn chéo:</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$E_{XY} = -20 \\times \\frac{10}{600} = \\mathbf{-0.333}; \\quad E_{XZ} = 15 \\times \\frac{20}{600} = \\mathbf{+0.500}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Phân loại bản chất kinh tế</h4>\n          <p>• Vì $0 < E_I = 0.333 < 1 \\implies$ Netflix là <strong>Hàng hóa thiết yếu thông thường (Normal / Necessity Good)</strong>.</p>\n          <p>• Vì $E_{XY} = -0.333 < 0 \\implies$ Truyền hình cáp Y và Netflix là <strong>Hàng hóa bổ sung (Complements)</strong> trong hệ sinh thái giải trí tại gia.</p>\n          <p>• Vì $E_{XZ} = +0.500 > 0 \\implies$ Vé xem rạp Z và Netflix là <strong>Hàng hóa thay thế (Substitutes)</strong>.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Đánh giá chiến lược tăng giá</h4>\n          <p>Vì $|E_D| = 0.333 < 1$ (Cầu co giãn ít / không co giãn theo giá):</p>\n          <p>Khi Netflix tăng giá $15\\%$ (từ 20 lên 23 USD), tỷ lệ giảm của lượng người xem chỉ là $15\\% \\times 0.333 \\approx 5.0\\%$. Tốc độ tăng giá vượt trội tốc độ sụt giảm số lượng thuê bao, do đó <strong>Tổng doanh thu của Netflix chắc chắn sẽ tăng mạnh ($TR \\uparrow$)</strong>.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tập đoàn Netflix Inc. & Báo cáo tài chính quý 4 năm 2023",
      "content": "Bất chấp lo ngại về làn sóng tẩy chay khi chấm dứt chia sẻ mật khẩu và tăng giá gói Premium lên 22.99 USD/tháng, Netflix đã kết nạp thêm kỷ lục 13.1 triệu thuê bao mới trong quý 4/2023, doanh thu tăng vọt 12.5% lên 8.83 tỷ USD đúng như dự báo của mô hình co giãn.",
      "takeaway": "Nắm vững hệ số co giãn $|E_D|$ giúp doanh nghiệp định giá tự tin, tránh sai lầm giảm giá tự sát khi sản phẩm có nội dung độc quyền khó thay thế."
    },
    "commonMistakes": [
      "Quên nhân với tỷ số $P/Q$ khi tính độ co giãn điểm.",
      "Nhầm lẫn giữa tăng giá làm giảm doanh thu (xảy ra khi $|E_D| > 1$) và tăng giá làm tăng doanh thu (khi $|E_D| < 1$)."
    ]
  },
  {
    "id": "prob11",
    "category": "micro",
    "chapter": 5,
    "title": "Dạng 11: Tối ưu hóa sản xuất nhà máy bán dẫn Foxconn/Samsung: Đầu tư Robot vs Thuê nhân công",
    "examLevel": "Đề thi Đại học Ngoại Thương (FTU)",
    "caseStudyTag": "Case study: Tự động hóa dây chuyền lắp ráp bán dẫn Foxconn & Samsung Thái Nguyên",
    "context": "Tại nhà máy tổ hợp công nghệ cao Samsung Electronics Thái Nguyên, hàm sản lượng chip bán dẫn dài hạn tuân theo quy luật hàm Cobb-Douglas:\n$$Q = 10 K^{0.5} L^{0.5}$$\nTrong đó: K là số giờ máy robot tự động hóa với chi phí thuê $r = 40$ USD/giờ; L là số giờ lao động kỹ thuật cao với mức lương $w = 10$ USD/giờ; Q là số lượng linh kiện hoàn thiện (nghìn sản phẩm).",
    "subQuestions": [
      "a) Xác định Tỷ lệ thay thế kỹ thuật biên ($MRTS_{LK}$) và phương trình Đường mở rộng sản xuất (Expansion Path).",
      "b) Tập đoàn giao chỉ tiêu sản xuất $Q_0 = 200$ nghìn linh kiện. Hãy tìm tổ hợp $(K^*, L^*)$ để tối thiểu hóa tổng chi phí và tính số tiền đó.",
      "c) Nếu tổng ngân sách vận hành quý bị giới hạn ở $TC = 1.600$ USD, hãy xác định sản lượng linh kiện tối đa đạt được."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tỷ lệ thay thế kỹ thuật biên và Đường mở rộng</h4>\n          <p>Năng suất cận biên của lao động và robot:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$MP_L = \\frac{\\partial Q}{\\partial L} = 5 K^{0.5} L^{-0.5}; \\quad MP_K = \\frac{\\partial Q}{\\partial K} = 5 K^{-0.5} L^{0.5} \\implies MRTS_{LK} = \\frac{MP_L}{MP_K} = \\mathbf{\\frac{K}{L}}$$</div>\n          <p>Điều kiện sản xuất tối ưu chi phí dài hạn ($MRTS = w/r$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\frac{K}{L} = \\frac{10}{40} = \\frac{1}{4} \\implies \\mathbf{L = 4K} \\text{ (Đường mở rộng sản xuất)}$$</div>\n          <p class=\"text-xs text-indigo-700 dark:text-indigo-300\">Cứ mỗi 1 giờ vận hành robot, nhà máy cần bố trí kèm 4 giờ nhân công kỹ thuật để giám sát và hỗ trợ.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Tối thiểu hóa chi phí sản xuất $Q_0 = 200$</h4>\n          <p>Thay $L = 4K$ vào hàm sản lượng:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$10 K^{0.5} (4K)^{0.5} = 200 \\iff 10 \\times 2K = 200 \\iff 20K = 200 \\implies \\mathbf{K^* = 10}, \\quad \\mathbf{L^* = 40}$$</div>\n          <p>Tổng chi phí tối thiểu:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$TC_{\\min} = r \\cdot K^* + w \\cdot L^* = 40(10) + 10(40) = 400 + 400 = \\mathbf{800} \\text{ USD}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Tối đa hóa sản lượng với ngân sách $TC = 1.600$</h4>\n          <p>Phương trình đường đồng phí: $40K + 10L = 1.600$. Thay $L = 4K$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$40K + 10(4K) = 1.600 \\iff 80K = 1.600 \\implies \\mathbf{K^* = 20}, \\quad \\mathbf{L^* = 80}$$</div>\n          <p>Sản lượng linh kiện tối đa: $Q_{\\max} = 10(20)^{0.5}(80)^{0.5} = 10 \\times \\sqrt{1.600} = 10 \\times 40 = \\mathbf{400}$ nghìn sản phẩm.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tổ hợp Samsung Electronics Việt Nam (SEVT) & Foxconn Bắc Giang",
      "content": "Nhờ chi phí nhân công kỹ thuật tại Việt Nam cạnh tranh ($w = 10$ USD/h) so với chi phí khấu hao robot ngoại nhập ($r = 40$ USD/h), tỷ lệ tối ưu $L/K = 4$ giải thích tại sao các tập đoàn FDI lớn vẫn duy trì lực lượng hàng trăm nghìn lao động kết hợp với dây chuyền bán tự động thay vì tự động hóa hoàn toàn 100%.",
      "takeaway": "Tối ưu hóa sản xuất đòi hỏi doanh nghiệp liên tục điều chỉnh tỷ lệ $K/L$ dựa trên tỷ giá tương đối $w/r$ của thị trường bản địa."
    },
    "commonMistakes": [
      "Lập sai tỷ số $w/r$ thành $r/w$.",
      "Quên nhân hệ số 10 của hàm sản xuất khi khai căn $K$."
    ]
  },
  {
    "id": "prob12",
    "category": "micro",
    "chapter": 6,
    "title": "Dạng 12: Thuế carbon Pigou và giải quyết ngoại ứng ô nhiễm tại Nhà máy Luyện thép Hòa Phát",
    "examLevel": "Đề thi Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Cơ chế định giá carbon (ETS) và Thuế phát thải Pigou tại Khu liên hợp Gang thép",
    "context": "Khu liên hợp sản xuất gang thép có hàm chi phí biên sản xuất tư nhân:\n$$MPC = 20 + 2Q$$\nHàm cầu thị trường về thép xây dựng: $P = 140 - Q$.\nQuá trình luyện kim xả khí thải CO2 gây hiệu ứng nhà kính và bụi mịn với chi phí ngoại ứng tiêu cực biên:\n$$MEC = Q$$\n(Trong đó: Q tính bằng vạn tấn thép/năm; P, MPC, MEC tính bằng tỷ đồng/vạn tấn).",
    "subQuestions": [
      "a) Xác định mức giá và sản lượng tại điểm cân bằng thị trường tự do ($P_m, Q_m$).",
      "b) Xác định mức giá và sản lượng tối ưu về mặt xã hội ($P^*, Q^*$).",
      "c) Để giải quyết thất bại thị trường và đưa sản lượng về mức tối ưu, Bộ Tài nguyên & Môi trường nên đánh mức thuế phát thải Carbon Pigouvian ($t^*$) là bao nhiêu trên mỗi vạn tấn thép? Tính tổn thất vô ích ($DWL$) nếu chính phủ bỏ mặc thị trường."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Cân bằng thị trường tự do ($P = MPC$)</h4>\n          <p>Thị trường tự do bỏ qua chi phí ngoại ứng môi trường:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$140 - Q = 20 + 2Q \\iff 3Q = 120 \\implies \\mathbf{Q_m = 40} \\text{ (vạn tấn)}, \\quad \\mathbf{P_m = 100} \\text{ (tỷ đồng/vạn tấn)}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Điểm tối ưu xã hội ($P = MSC$)</h4>\n          <p>Chi phí biên xã hội toàn diện:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$MSC = MPC + MEC = (20 + 2Q) + Q = \\mathbf{20 + 3Q}$$</div>\n          <p>Cân bằng tối ưu xã hội:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$140 - Q = 20 + 3Q \\iff 4Q = 120 \\implies \\mathbf{Q^* = 30} \\text{ (vạn tấn)}, \\quad \\mathbf{P^* = 110} \\text{ (tỷ đồng/vạn tấn)}$$</div>\n          <p class=\"text-xs text-rose-700 dark:text-rose-300 font-semibold\">Kết luận: Doanh nghiệp thép tự do sản xuất dư thừa 10 vạn tấn thép gây ô nhiễm nặng nề và định giá bán quá rẻ so với chi phí thực của xã hội.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Thuế Pigouvian và Tổn thất xã hội (DWL)</h4>\n          <p>Mức thuế Pigou tối ưu đánh vào mỗi vạn tấn thép bằng đúng ngoại ứng biên tại điểm tối ưu:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$t^* = MEC(Q^*) = 30 = \\mathbf{30} \\text{ (tỷ đồng/vạn tấn thép)}$$</div>\n          <p>Tổn thất phúc lợi xã hội ($DWL$) khi không đánh thuế:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$DWL = \\frac{1}{2} \\times [MSC(Q_m) - P_m] \\times (Q_m - Q^*) = \\frac{1}{2} \\times (140 - 100) \\times (40 - 30) = \\mathbf{200} \\text{ tỷ đồng/năm}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tập đoàn Hòa Phát Dung Quất & Cơ chế điều chỉnh biên giới carbon (CBAM) của EU",
      "content": "Khi thị trường không can thiệp, ô nhiễm môi trường là ngoại ứng tiêu cực khiến xã hội gánh chịu tổn thất phúc lợi. Việc áp thuế Carbon hoặc hạn ngạch phát thải ETS buộc nhà sản xuất phải nội hóa chi phí ngoại ứng (Internalize the Externality), tạo động lực đầu tư công nghệ lò thổi điện xanh (EAF).",
      "takeaway": "Thuế Pigou là công cụ dựa trên thị trường hiệu quả nhất giúp đưa sản lượng về đúng mức tối ưu xã hội mà không cần mệnh lệnh hành chính đóng cửa nhà máy."
    },
    "commonMistakes": [
      "Tính thuế Pigou tại sản lượng $Q_m$ thay vì sản lượng tối ưu $Q^*$.",
      "Quên cộng $MEC$ vào hàm $MPC$."
    ]
  },
  {
    "id": "prob13",
    "category": "macro",
    "chapter": 7,
    "title": "Dạng 13: Hạch toán tài khoản quốc gia SNA của Tổng cục Thống kê và World Bank",
    "examLevel": "Đề thi Học kỳ ĐH Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Báo cáo kinh tế vĩ mô và tài khoản quốc gia của Tổng cục Thống kê (GSO)",
    "context": "Số liệu thống kê tài khoản quốc gia của một nền kinh tế đang phát triển (đơn vị: tỷ USD):\n• Tiêu dùng dân cư (C): 800\n• Tổng đầu tư tư nhân gộp (I): 300 (Trong đó khấu hao tài sản cố định Dep = 100)\n• Chi tiêu chính phủ về dịch vụ công (G): 250\n• Kim ngạch xuất khẩu (X): 150; Kim ngạch nhập khẩu (IM): 200\n• Thu nhập yếu tố ròng từ nước ngoài (NPI): -30 (Do dòng tiền lợi nhuận của khối FDI chuyển về mẫu quốc)\n• Thuế gián thu ròng (Te - Trợ cấp): 60\n• Thuế thu nhập doanh nghiệp: 50; Lợi nhuận giữ lại: 40; Bảo hiểm xã hội: 60; Trợ cấp an sinh (Tr): 90\n• Thuế thu nhập cá nhân (Td): 80.",
    "subQuestions": [
      "a) Tính GDP danh nghĩa theo phương pháp chi tiêu và Tổng sản phẩm quốc gia ($GNP$).",
      "b) Tính Sản phẩm quốc dân ròng ($NNP$) và Thu nhập quốc dân ($NI$).",
      "c) Tính Thu nhập cá nhân ($PI$) và Thu nhập khả dụng ($DI$)."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tính GDP và GNP</h4>\n          <p>Xuất khẩu ròng: $NX = X - IM = 150 - 200 = -50$ tỷ USD.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GDP = C + I + G + NX = 800 + 300 + 250 + (-50) = \\mathbf{1.300} \\text{ tỷ USD}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GNP = GDP + NPI = 1.300 + (-30) = \\mathbf{1.270} \\text{ tỷ USD}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Tính NNP và NI</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$NNP = GNP - Dep = 1.270 - 100 = \\mathbf{1.170} \\text{ tỷ USD}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$NI = NNP - T_e^{\\text{ròng}} = 1.170 - 60 = \\mathbf{1.110} \\text{ tỷ USD}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Tính PI và DI</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$PI = NI - (\\text{Lợi nhuận giữ lại} + \\text{Thuế TNDN} + \\text{BHXH}) + Tr = 1.110 - (40 + 50 + 60) + 90 = \\mathbf{1.050} \\text{ tỷ USD}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$DI = PI - T_d = 1.050 - 80 = \\mathbf{970} \\text{ tỷ USD}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tổng cục Thống kê (GSO) & Chênh lệch giữa GDP và GNP tại Việt Nam",
      "content": "Tại các quốc gia thu hút vốn FDI mạnh mẽ như Việt Nam, chỉ số $NPI$ thường mang giá trị âm lớn do các tập đoàn đa quốc gia (Samsung, LG, Intel) chuyển một phần lợi nhuận về công ty mẹ ở nước ngoài, dẫn đến $GNP < GDP$.",
      "takeaway": "GDP đo lường sản lượng tạo ra trên lãnh thổ địa lý, còn GNP đo lường thu nhập thực sự thuộc quyền sở hữu của công dân quốc gia đó."
    },
    "commonMistakes": [
      "Nhầm lẫn giữa khấu hao $Dep$ (trừ từ $GNP$ sang $NNP$) và thuế gián thu $T_e$ (trừ từ $NNP$ sang $NI$).",
      "Quên cộng các khoản chi chuyển nhượng an sinh xã hội $Tr$ khi tính $PI$."
    ]
  },
  {
    "id": "prob14",
    "category": "macro",
    "chapter": 7,
    "title": "Dạng 14: Đo lường tốc độ tăng trưởng kinh tế thực tế và khử lạm phát qua GDP Deflator",
    "examLevel": "Đề thi Đại học Kinh tế TP.HCM (UEH)",
    "caseStudyTag": "Case study: Tăng trưởng GDP thực tế và áp lực lạm phát chuỗi cung ứng toàn cầu",
    "context": "Xét một nền kinh tế thu nhỏ sản xuất 3 mặt hàng chiến lược: Lương thực, Nhiên liệu và Công nghệ qua 3 giai đoạn:\n• Năm 1 (Năm gốc): Lương thực ($P_1 = 10, Q_1 = 100$), Nhiên liệu ($P_1 = 50, Q_1 = 20$), Công nghệ ($P_1 = 100, Q_1 = 10$).\n• Năm 2: Lương thực ($P_2 = 12, Q_2 = 110$), Nhiên liệu ($P_2 = 60, Q_2 = 22$), Công nghệ ($P_2 = 120, Q_2 = 12$).\n• Năm 3: Lương thực ($P_3 = 15, Q_3 = 120$), Nhiên liệu ($P_3 = 70, Q_3 = 25$), Công nghệ ($P_3 = 150, Q_3 = 15$).",
    "subQuestions": [
      "a) Tính GDP danh nghĩa ($GDP_n$) và GDP thực tế ($GDP_r$) cho cả 3 năm.",
      "b) Tính Chỉ số giảm phát GDP (GDP Deflator) cho Năm 2 và Năm 3.",
      "c) Tính tốc độ tăng trưởng kinh tế thực tế ($g$) của Năm 2 và Năm 3."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: GDP danh nghĩa vs GDP thực tế</h4>\n          <p>• <strong>Năm 1 ($t=1$, Năm gốc):</strong> $GDP_{n1} = GDP_{r1} = 10(100) + 50(20) + 100(10) = \\mathbf{3.000}$ tỷ USD.</p>\n          <p>• <strong>Năm 2 ($t=2$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GDP_{n2} = 12(110) + 60(22) + 120(12) = 1.320 + 1.320 + 1.440 = \\mathbf{4.080} \\text{ tỷ USD}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GDP_{r2} = 10(110) + 50(22) + 100(12) = 1.100 + 1.100 + 1.200 = \\mathbf{3.400} \\text{ tỷ USD}$$</div>\n          <p>• <strong>Năm 3 ($t=3$):</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GDP_{n3} = 15(120) + 70(25) + 150(15) = 1.800 + 1.750 + 2.250 = \\mathbf{5.800} \\text{ tỷ USD}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$GDP_{r3} = 10(120) + 50(25) + 100(15) = 1.200 + 1.250 + 1.500 = \\mathbf{3.950} \\text{ tỷ USD}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b & c: GDP Deflator và Tăng trưởng thực tế</h4>\n          <p>• <strong>Chỉ số giảm phát GDP Deflator:</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$D_2 = \\frac{4.080}{3.400} \\times 100 = \\mathbf{120.0}; \\quad D_3 = \\frac{5.800}{3.950} \\times 100 = \\mathbf{146.84}$$</div>\n          <p>• <strong>Tốc độ tăng trưởng kinh tế thực tế:</strong></p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$g_2 = \\frac{3.400 - 3.000}{3.000} \\times 100\\% = \\mathbf{13.33\\%}; \\quad g_3 = \\frac{3.950 - 3.400}{3.400} \\times 100\\% = \\mathbf{16.18\\%}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Ngân hàng Thế giới (World Bank) & Khử lạm phát trong thống kê kinh tế",
      "content": "Nhìn vào GDP danh nghĩa, Năm 3 tăng vọt từ 4.080 lên 5.800 tỷ USD (+42.1%). Tuy nhiên, tăng trưởng sản lượng hàng hóa thực tế chỉ đạt 16.18%, phần còn lại là sự thổi phồng giá cả do lạm phát phản ánh qua GDP Deflator tăng lên 146.84.",
      "takeaway": "Chỉ có GDP thực tế ($GDP_r$) mới đo lường chính xác sự thịnh vượng vật chất và năng lực sản xuất của một quốc gia."
    },
    "commonMistakes": [
      "Dùng giá hiện hành để tính GDP thực tế.",
      "Tính tốc độ tăng trưởng bằng số liệu GDP danh nghĩa."
    ]
  },
  {
    "id": "prob15",
    "category": "macro",
    "chapter": 9,
    "title": "Dạng 15: Rổ hàng hóa CPI, lạm phát thực tế, hiệu ứng Fisher và Định luật Okun",
    "examLevel": "Đề thi Đại học Ngoại Thương (FTU)",
    "caseStudyTag": "Case study: Đo lường rổ hàng hóa CPI 11 nhóm của Việt Nam & Áp lực lạm phát nhập khẩu",
    "context": "Cơ quan Thống kê khảo sát giỏ hàng hóa tiêu dùng chuẩn của hộ gia đình gồm 2 mặt hàng thiết yếu: 50 kg Lương thực và 20 lít Xăng dầu.\n• Năm gốc ($t_0$): Giá lương thực $P_{L0} = 20$ nghìn/kg, giá xăng $P_{X0} = 25$ nghìn/lít.\n• Năm hiện hành ($t_1$): Giá lương thực $P_{L1} = 24$ nghìn/kg, giá xăng $P_{X1} = 30$ nghìn/lít.\nDân số trưởng thành là 60 triệu người; Số người có việc làm $E = 45$ triệu người; Thất nghiệp $U = 3$ triệu người; Thất nghiệp tự nhiên $u_n = 4.5\\%$.",
    "subQuestions": [
      "a) Tính chỉ số CPI năm $t_1$ và tỷ lệ lạm phát $\\pi_1$.",
      "b) Ngân hàng thương mại huy động tiền gửi với lãi suất danh nghĩa $i = 8.5\\%$/năm. Tính lãi suất thực tế ($r$) theo Hiệu ứng Fisher.",
      "c) Tính tỷ lệ thất nghiệp ($u$) và áp dụng Định luật Okun để ước tính tỷ lệ tổn thất sản lượng GDP."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Chỉ số CPI và Lạm phát</h4>\n          <p>• Chi phí giỏ hàng năm gốc: $Cost_0 = 50(20) + 20(25) = 1.000 + 500 = 1.500$ nghìn đồng.</p>\n          <p>• Chi phí giỏ hàng năm hiện hành: $Cost_1 = 50(24) + 20(30) = 1.200 + 600 = 1.800$ nghìn đồng.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$CPI_1 = \\frac{1.800}{1.500} \\times 100 = \\mathbf{120.0} \\implies \\pi_1 = \\frac{120 - 100}{100} \\times 100\\% = \\mathbf{20.0\\%}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Lãi suất thực tế theo Hiệu ứng Fisher</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$r = i - \\pi = 8.5\\% - 20.0\\% = \\mathbf{-11.5\\%}$$</div>\n          <p class=\"text-xs text-rose-700 dark:text-rose-300\">Lãi suất thực tế âm sâu (-11.5%) khiến người gửi tiết kiệm bị thiệt hại nặng, kích thích dòng tiền tháo chạy vào bất động sản và vàng.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Chỉ số thất nghiệp và Định luật Okun</h4>\n          <p>• Lực lượng lao động: $LF = E + U = 45 + 3 = 48$ triệu người.</p>\n          <p>• Tỷ lệ thất nghiệp: $u = \\frac{3}{48} \\times 100\\% = \\mathbf{6.25\\%}$.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\frac{Y - Y_p}{Y_p} = -2 \\times (u - u_n) = -2 \\times (6.25\\% - 4.5\\%) = \\mathbf{-3.5\\%}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Ngân hàng Nhà nước Việt Nam (SBV) & Kiểm soát lạm phát mục tiêu",
      "content": "Chỉ số CPI phản ánh biến động giá của giỏ hàng hóa sinh hoạt cố định. Khi lạm phát kỳ vọng vượt lãi suất danh nghĩa, lãi suất thực tế rơi vào vùng âm đòi hỏi NHTW phải tăng lãi suất điều hành để bảo vệ giá trị đồng nội tệ.",
      "takeaway": "Định luật Okun chứng minh rằng thất nghiệp cao không chỉ là vấn đề an sinh xã hội mà còn làm sụt giảm trực tiếp sản lượng GDP tiềm năng của nền kinh tế."
    },
    "commonMistakes": [
      "Chia số người thất nghiệp cho toàn bộ dân số thay vì chia cho Lực lượng lao động $LF$.",
      "Quên cập nhật năm gốc khi tính tỷ lệ lạm phát."
    ]
  },
  {
    "id": "prob16",
    "category": "macro",
    "chapter": 10,
    "title": "Dạng 16: Ngân hàng Nhà nước điều hành cung tiền qua OMO và tỷ lệ dự trữ bắt buộc",
    "examLevel": "Đề thi Học viện Ngân hàng (BA)",
    "caseStudyTag": "Case study: Nghiệp vụ thị trường mở OMO của Ngân hàng Nhà nước Việt Nam (SBV)",
    "context": "Trong hệ thống ngân hàng thương mại:\n• Cơ số tiền tệ (Tiền cơ sở): $MB = 500$ nghìn tỷ đồng.\n• Tỷ lệ tiền mặt ngoài ngân hàng so với tiền gửi: $cr = 0.20$.\n• Tỷ lệ dự trữ bắt buộc: $rr_b = 0.08$; Tỷ lệ dự trữ dư thừa: $rr_e = 0.02$.",
    "subQuestions": [
      "a) Xác định Số nhân tiền tệ ($m_M$) và khối lượng Cung tiền ($M_1$).",
      "b) Tính lượng tiền mặt trong lưu thông ($C$), tổng tiền gửi ($D$) và dự trữ ngân hàng ($R$).",
      "c) Để bơm thêm $\\Delta M_1 = +200$ nghìn tỷ đồng hỗ trợ phục hồi kinh tế, SBV cần mua hay bán bao nhiêu giấy tờ có giá trên thị trường mở (OMO)?"
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Số nhân tiền tệ và Khối tiền M1</h4>\n          <p>Tỷ lệ dự trữ thực tế: $rr = rr_b + rr_e = 0.08 + 0.02 = 0.10$.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$m_M = \\frac{cr + 1}{cr + rr} = \\frac{0.20 + 1}{0.20 + 0.10} = \\frac{1.20}{0.30} = \\mathbf{4.0}$$</div>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$M^S = m_M \\times MB = 4.0 \\times 500 = \\mathbf{2.000} \\text{ nghìn tỷ đồng}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Cơ cấu cung tiền</h4>\n          <p>• Tổng tiền gửi tại hệ thống NHTM: $D = \\frac{2.000}{1.20} = \\mathbf{1.666.67}$ nghìn tỷ đồng.</p>\n          <p>• Tiền mặt lưu thông: $C = cr \\times D = \\mathbf{333.33}$ nghìn tỷ đồng.</p>\n          <p>• Tiền dự trữ tại SBV và két sắt: $R = rr \\times D = \\mathbf{166.67}$ nghìn tỷ đồng.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Điều hành nghiệp vụ thị trường mở (OMO)</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\Delta MB = \\frac{\\Delta M^S}{m_M} = \\frac{+200}{4.0} = \\mathbf{+50} \\text{ nghìn tỷ đồng}$$</div>\n          <p><strong>Kết luận:</strong> Ngân hàng Nhà nước cần <strong>mua vào 50 nghìn tỷ đồng trái phiếu chính phủ</strong> trên thị trường mở để bơm thêm 200 nghìn tỷ cung tiền vào nền kinh tế.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Ngân hàng Nhà nước Việt Nam (SBV) & Nghiệp vụ phát hành tín phiếu",
      "content": "Thông qua cơ chế số nhân tiền tệ ($m_M = 4.0$), SBV chỉ cần mua/bán 50 nghìn tỷ đồng giấy tờ có giá trên thị trường mở là có thể điều tiết được khối lượng thanh khoản gấp 4 lần (200 nghìn tỷ) trong toàn bộ nền kinh tế.",
      "takeaway": "Thị trường mở (OMO) là công cụ linh hoạt, chính xác và được sử dụng thường xuyên nhất trong điều hành chính sách tiền tệ hiện đại."
    },
    "commonMistakes": [
      "Quên tính dự trữ dư thừa $rr_e$ khi tính $rr$.",
      "Nhầm lẫn giữa Mua trái phiếu (bơm tiền) và Bán trái phiếu (hút tiền)."
    ]
  },
  {
    "id": "prob17",
    "category": "macro",
    "chapter": 11,
    "title": "Dạng 17: Gói kích thích tài khóa 350 nghìn tỷ và mô hình thu nhập - chi tiêu Keynes",
    "examLevel": "Đề thi Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Nghị quyết 43/2022/QH15 về chính sách tài khóa kích cầu phục hồi kinh tế",
    "context": "Năm 2022, Quốc hội Việt Nam thông qua gói kích thích kinh tế tài khóa 350 nghìn tỷ đồng.\nXét mô hình thu nhập - chi tiêu trong nền kinh tế đóng:\n• Tiêu dùng: $C = 100 + 0.8 Y_d$\n• Đầu tư dự kiến của doanh nghiệp: $I = 150$\n• Chi tiêu chính phủ: $G = 200$\n• Thuế ròng: $T = 50 + 0.25Y$; Trợ cấp an sinh: $Tr = 25$\n• Sản lượng tiềm năng toàn dụng: $Y_p = 1.200$ (Đơn vị tính: nghìn tỷ đồng).",
    "subQuestions": [
      "a) Xác định phương trình hàm Tổng chi tiêu dự kiến ($AE$) và tính sản lượng cân bằng quốc gia ($Y^*$).",
      "b) Tính các số nhân: Số nhân chi tiêu ($k_G$) và số nhân thuế ($k_T$).",
      "c) Chính phủ cần kích cầu chi tiêu $\\Delta G$ là bao nhiêu để đưa nền kinh tế đạt mức toàn dụng $Y_p = 1.200$?"
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Hàm AE và Sản lượng cân bằng Y*</h4>\n          <p>Thu nhập khả dụng: $Y_d = Y - (50 + 0.25Y) + 25 = 0.75Y - 25$.</p>\n          <p>Hàm tiêu dùng: $C = 100 + 0.8(0.75Y - 25) = \\mathbf{80 + 0.6Y}$.</p>\n          <p>Tổng chi tiêu dự kiến: $AE = C + I + G = (80 + 0.6Y) + 150 + 200 = \\mathbf{430 + 0.6Y}$.</p>\n          <p>Cân bằng Keynes ($Y = AE$):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$Y = 430 + 0.6Y \\iff 0.4Y = 430 \\implies \\mathbf{Y^* = 1.075} \\text{ nghìn tỷ đồng}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Hệ số nhân Keynes</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$k_G = \\frac{1}{1 - 0.6} = \\mathbf{2.5}; \\quad k_T = \\frac{-0.8}{1 - 0.6} = \\mathbf{-2.0}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Gói kích cầu tài khóa đạt toàn dụng</h4>\n          <p>Khoảng trống sản lượng suy thoái: $\\Delta Y = 1.200 - 1.075 = \\mathbf{+125}$ nghìn tỷ đồng.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\Delta G = \\frac{\\Delta Y}{k_G} = \\frac{125}{2.5} = \\mathbf{+50} \\text{ nghìn tỷ đồng}$$</div>\n          <p>Chính phủ cần tăng chi đầu tư công thêm 50 nghìn tỷ đồng để tạo ra hiệu ứng lan tỏa 125 nghìn tỷ tổng sản lượng.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Quốc hội Việt Nam & Nghị quyết 43/2022/QH15 về Phục hồi kinh tế",
      "content": "Nhờ hiệu ứng số nhân chi tiêu ($k = 2.5$), gói kích cầu đầu tư công xây dựng hạ tầng cao tốc đã tạo ra việc làm và thu nhập cho hàng triệu lao động, kích thích tiêu dùng tư nhân phục hồi mạnh mẽ sau đại dịch.",
      "takeaway": "Chi tiêu chính phủ có hệ số nhân ($k_G = 2.5$) lớn hơn so với chính sách giảm thuế ($|k_T| = 2.0$) do tiền giải ngân công đi thẳng 100% vào tổng cầu."
    },
    "commonMistakes": [
      "Không tính thuế tỷ lệ vào mẫu số của số nhân.",
      "Quên trừ thuế và cộng trợ cấp khi tính thu nhập khả dụng $Y_d$."
    ]
  },
  {
    "id": "prob18",
    "category": "macro",
    "chapter": 11,
    "title": "Dạng 18: Đầu tư cao tốc Bắc - Nam và đo lường hiện tượng lấn át đầu tư trên mô hình IS - LM",
    "examLevel": "Đề thi cuối kỳ Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Dự án Đại cao tốc Bắc - Nam và rủi ro lấn át tín dụng tư nhân",
    "context": "Xét tác động vĩ mô của dự án đầu tư công xây dựng tuyến cao tốc Bắc - Nam:\n• Thị trường hàng hóa: $C = 200 + 0.75(Y - T)$, $I = 200 - 25r$, $G = 200$, $T = 100$.\n• Thị trường tiền tệ: Hàm cầu tiền $L = Y - 100r$, Cung tiền $M = 1.000$, Mức giá $P = 2$.",
    "subQuestions": [
      "a) Thiết lập phương trình đường IS và LM. Xác định lãi suất ($r^*$) và sản lượng ($Y^*$) cân bằng đồng thời.",
      "b) Chính phủ tăng vốn giải ngân cao tốc $\\Delta G = +50$. Xác định điểm cân bằng mới và đo lường mức độ lấn át đầu tư tư nhân (Crowding-out effect).",
      "c) Phối hợp chính sách tiền tệ tài trợ (Policy Mix) như thế nào để triệt tiêu hoàn toàn hiện tượng lấn át?"
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Cân bằng IS - LM ban đầu</h4>\n          <p>• Đường IS: $Y = 200 + 0.75(Y - 100) + 200 - 25r + 200 \\implies \\mathbf{IS: Y = 2.100 - 100r}$.</p>\n          <p>• Đường LM: $M/P = 1.000/2 = 500 \\implies Y - 100r = 500 \\implies \\mathbf{LM: Y = 500 + 100r}$.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2.100 - 100r = 500 + 100r \\iff 200r = 1.600 \\implies \\mathbf{r^* = 8.0\\%}, \\quad \\mathbf{Y^* = 1.300}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Tác động tài khóa và Lấn át đầu tư</h4>\n          <p>Khi $G$ tăng 50: $IS': Y = 2.300 - 100r$.</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2.300 - 100r = 500 + 100r \\implies \\mathbf{r_1 = 9.0\\%}, \\quad \\mathbf{Y_1 = 1.400}$$</div>\n          <p>• Nếu lãi suất không đổi $r=8\\%$, sản lượng lẽ ra đạt $1.500$. Nhưng do lãi suất tăng lên $9\\%$, đầu tư tư nhân giảm: $\\Delta I = -25(9-8) = -25$.</p>\n          <p>$\\implies$ <strong>Hiện tượng lấn át làm mất đi 100 tỷ đồng tiềm năng tăng trưởng sản lượng (mất 50% hiệu lực)</strong>.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Phối hợp nới lỏng tiền tệ (Policy Mix)</h4>\n          <p>Để duy trì $r = 8.0\\%$ tại sản lượng mục tiêu $Y = 1.500$, NHTW cần tăng cung tiền:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$M'/2 = 1.500 - 100(8) = 700 \\implies M' = 1.400 \\implies \\mathbf{\\Delta M = +400} \\text{ tỷ đồng}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Bộ Tài chính & Dự án hạ tầng Giao thông trọng điểm Quốc gia",
      "content": "Khi chính phủ vay nợ ồ ạt để tài trợ các đại dự án hạ tầng, lãi suất trên thị trường trái phiếu tăng lên khiến chi phí vay vốn của các doanh nghiệp tư nhân bị đẩy cao, dẫn đến suy giảm đầu tư tư nhân (Crowding-out).",
      "takeaway": "Để chính sách tài khóa mở rộng đạt hiệu quả tối đa mà không gây nghẽn tín dụng, cần có sự phối hợp nhịp nhàng (Accommodative Monetary Policy) từ phía Ngân hàng Trung ương."
    },
    "commonMistakes": [
      "Quên chia cung tiền danh nghĩa cho mức giá $P$.",
      "Tính sai quy mô lấn át đầu tư."
    ]
  },
  {
    "id": "prob19",
    "category": "macro",
    "chapter": 8,
    "title": "Dạng 19: Kỳ tích sông Hàn và Mô hình tăng trưởng Solow - Swan đón đầu công nghệ bán dẫn",
    "examLevel": "Đề thi Olympic Kinh tế học Vĩ mô",
    "caseStudyTag": "Case study: Kỳ tích tăng trưởng kinh tế Hàn Quốc & Chiến lược bán dẫn Việt Nam 2045",
    "context": "Mô hình tăng trưởng Solow - Swan biểu diễn nền kinh tế công nghiệp hóa:\n$$Y = F(K, L) = K^{0.5} L^{0.5}$$\nTỷ lệ tiết kiệm quốc gia $s = 0.30$; Tỷ lệ khấu hao tài sản $\\delta = 0.05$; Tốc độ tăng dân số $n = 0.03$; Tốc độ tiến bộ công nghệ $g = 0.02$.",
    "subQuestions": [
      "a) Viết hàm sản xuất dưới dạng mỗi đơn vị lao động hiệu quả $y = f(k)$.",
      "b) Xác định mức trang bị tư bản ($k^*$), sản lượng ($y^*$), tiêu dùng ($c^*$) và đầu tư ($i^*$) tại trạng thái dừng (Steady State).",
      "c) Xác định mức tư bản và tỷ lệ tiết kiệm theo Quy tắc vàng ($s_{gold}$) để tối đa hóa mức sống dân cư trong dài hạn."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a & b: Trạng thái dừng Solow</h4>\n          <p>Hàm sản xuất: $y = k^{0.5}$.</p>\n          <p>Phương trình tích lũy vốn tại trạng thái dừng: $s \\cdot f(k^*) = (\\delta + n + g)k^*$</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$0.30 (k^*)^{0.5} = (0.05 + 0.03 + 0.02) k^* = 0.10 k^* \\iff \\frac{k^*}{(k^*)^{0.5}} = 3 \\implies \\mathbf{k^* = 9}$$</div>\n          <p>• Sản lượng dừng: $\\mathbf{y^* = 3.0}$.</p>\n          <p>• Đầu tư dừng: $\\mathbf{i^* = 0.30 \\times 3 = 0.9}$.</p>\n          <p>• Tiêu dùng dừng: $\\mathbf{c^* = 3 - 0.9 = 2.1}$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Quy tắc vàng tích lũy tư bản (Golden Rule)</h4>\n          <p>Điều kiện $MPK = \\delta + n + g$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$0.5 (k_{gold}^*)^{-0.5} = 0.10 \\implies \\sqrt{k_{gold}^*} = 5 \\implies \\mathbf{k_{gold}^* = 25}$$</div>\n          <p>Sản lượng quy tắc vàng: $y_{gold}^* = 5.0$.</p>\n          <p>Đầu tư quy tắc vàng: $i_{gold}^* = 0.10 \\times 25 = 2.5$.</p>\n          <p>Tỷ lệ tiết kiệm tối ưu: $\\mathbf{s_{gold} = 2.5 / 5.0 = 50\\%}$.</p>\n          <p>Mức tiêu dùng cực đại: $c_{gold}^* = 5 - 2.5 = \\mathbf{2.5} > 2.1$.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Kỳ tích sông Hàn (Hàn Quốc) & Chiến lược bán dẫn Quốc gia Việt Nam 2045",
      "content": "Giai đoạn 1960-1990, Hàn Quốc đẩy tỷ lệ tiết kiệm và tái đầu tư vào công nghiệp nặng lên tới 35-40% GDP, nhanh chóng đưa nền kinh tế tiếp cận trạng thái dừng có mức trang bị tư bản cao, chuyển mình thành quốc gia phát triển dẫn đầu về bán dẫn.",
      "takeaway": "Tăng trưởng nhờ tích lũy vốn ($K$) sẽ gặp giới hạn do quy luật lợi suất giảm dần ($MPK \\downarrow$), trong dài hạn chỉ có tiến bộ khoa học công nghệ ($g$) mới đảm bảo tăng trưởng GDP bình quân đầu người bền vững."
    },
    "commonMistakes": [
      "Quên cộng tốc độ tiến bộ công nghệ $g$ vào tỷ lệ tiêu hao tư bản hiệu dụng.",
      "Nhầm lẫn giữa điều kiện trạng thái dừng thông thường và trạng thái quy tắc vàng."
    ]
  },
  {
    "id": "prob20",
    "category": "macro",
    "chapter": 12,
    "title": "Dạng 20: Fed tăng lãi suất và bài toán điều hành tỷ giá theo mô hình Mundell - Fleming",
    "examLevel": "Đề thi Kinh tế học Vĩ mô Quốc tế / NEU",
    "caseStudyTag": "Case study: Fed thắt chặt tiền tệ & Áp lực điều hành tỷ giá USD/VND của Ngân hàng Nhà nước",
    "context": "Xét nền kinh tế mở nhỏ với vốn luân chuyển tự do hoàn hảo ($r = r^* = 5\\%$):\n• Thị trường hàng hóa: $C = 100 + 0.8(Y - T)$, $I = 200 - 10r$, $G = 200$, $T = 100$, $NX = 150 - 50e$.\n• Thị trường tiền tệ: $L = 0.5Y - 50r$, $M = 1.000$, $P = 2$.\n(Trong đó: e là tỷ giá hối đoái danh nghĩa; r tính bằng %).",
    "subQuestions": [
      "a) Xác định sản lượng ($Y^*$) và tỷ giá cân bằng ($e^*$).",
      "b) Phân tích tác động của chính sách tài khóa kích cầu (tăng $\\Delta G = 50$) dưới chế độ tỷ giá thả nổi.",
      "c) Phân tích tác động của chính sách tài khóa mở rộng dưới chế độ tỷ giá cố định và giải thích Bộ ba bất khả thi (Trilemma)."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Cân bằng Mundell - Fleming ban đầu</h4>\n          <p>Thay $r = 5\\%$ vào thị trường tiền tệ:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$0.5Y - 50(5) = 500 \\implies 0.5Y = 750 \\implies \\mathbf{Y^* = 1.500}$$</div>\n          <p>Thay $Y = 1.500$ vào thị trường hàng hóa:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$1.500 = 2.600 - 250e \\iff 250e = 1.100 \\implies \\mathbf{e^* = 4.4}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Tỷ giá thả nổi $\\to$ Tài khóa bất lực</h4>\n          <p>Khi $G$ tăng 50, $IS^*$ dịch phải thành $Y = 2.850 - 250e$.</p>\n          <p>Do $LM^*$ cố định tại $Y = 1.500$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$1.500 = 2.850 - 250e \\implies \\mathbf{e' = 5.4} \\text{ (Đồng nội tệ lên giá mạnh)}$$</div>\n          <p>Sản lượng không đổi ($Y = 1.500$), đồng tiền tăng giá làm xuất khẩu ròng giảm đúng bằng lượng tăng của $G$ ($\\Delta NX = -50$).</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Tỷ giá cố định $\\to$ Tài khóa tối đa</h4>\n          <p>Để giữ nguyên $e = 4.4$, NHTW buộc phải mua ngoại tệ bơm cung tiền $M \\uparrow$:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$Y' = 2.850 - 250(4.4) = \\mathbf{1.750} \\implies \\mathbf{\\Delta Y = +250}$$</div>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Ngân hàng Nhà nước Việt Nam (SBV) & Bộ ba bất khả thi (The Impossible Trinity)",
      "content": "Khi Cục Dự trữ Liên bang Mỹ (Fed) tăng lãi suất từ 0% lên 5.5%, áp lực chênh lệch lãi suất khiến dòng vốn có xu hướng chảy ngược về Mỹ, gây áp lực mất giá đồng VND. SBV đã linh hoạt sử dụng kết hợp bán ngoại tệ dự trữ, phát hành tín phiếu hút tiền và nới biên độ tỷ giá từ +-3% lên +-5%.",
      "takeaway": "Bộ ba bất khả thi khẳng định một quốc gia chỉ có thể chọn 2 trong 3 mục tiêu: (1) Dòng vốn tự do, (2) Tỷ giá cố định, (3) Chính sách tiền tệ độc lập."
    },
    "commonMistakes": [
      "Quên rằng trong không gian $(e, Y)$, đường $LM^*$ hoàn toàn thẳng đứng.",
      "Nhầm lẫn hiệu lực của chính sách tài khóa giữa hai chế độ tỷ giá."
    ]
  },
  {
    "id": "prob21",
    "category": "macro",
    "chapter": 11,
    "title": "Dạng 21: Fed tăng lãi suất kỷ lục 2022-2023 và phản ứng theo Quy tắc Taylor",
    "examLevel": "Đề thi Nghiệp vụ Ngân hàng Trung ương",
    "caseStudyTag": "Case study: Chiến dịch tăng lãi suất dập tắt lạm phát 9.1% của Cục Dự trữ Liên bang Mỹ (Fed)",
    "context": "Năm 2022, lạm phát tại Mỹ chạm đỉnh 40 năm ở mức 9.1%. Ngân hàng Trung ương điều hành theo Quy tắc Taylor chuẩn mực:\n$$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$$\nVới các tham số mục tiêu:\n- Lãi suất thực tế cân bằng: $r^* = 2.0\\%$\n- Lạm phát mục tiêu: $\\pi^* = 2.0\\%$\n- Tăng trưởng tiềm năng: $\\bar{y} = 6.0\\%$.",
    "subQuestions": [
      "a) Xác định lãi suất điều hành danh nghĩa tối ưu ($i_0$) khi nền kinh tế cân bằng toàn dụng ($\\pi = 2.0\\%, y = 6.0\\%$).",
      "b) Khi xảy ra cú sốc lạm phát $\\pi = 6.0\\%$ và sản lượng tăng nóng $y = 8.0\\%$, NHTW cần nâng lãi suất chính sách lên bao nhiêu?",
      "c) Giải thích Nguyên lý Taylor (The Taylor Principle) và điều gì sẽ xảy ra nếu NHTW tăng lãi suất ít hơn mức tăng của lạm phát?"
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Trạng thái cân bằng toàn dụng</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$i_0 = 2.0 + 2.0 + 0.5(2.0 - 2.0) + 0.5(6.0 - 6.0) = \\mathbf{4.0\\%}$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Phản ứng tăng lãi suất trước cú sốc</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$i_1 = 2.0 + 6.0 + 0.5(6.0 - 2.0) + 0.5(8.0 - 6.0) = 8.0 + 2.0 + 1.0 = \\mathbf{11.0\\%}$$</div>\n          <p>NHTW cần nâng lãi suất từ $4.0\\%$ lên $11.0\\%$ (tăng $7.0\\%$).</p>\n          <p>Lãi suất thực tế mới: $r_1 = i_1 - \\pi = 11.0\\% - 6.0\\% = \\mathbf{5.0\\%}$ (Tăng từ $2\\%$ lên $5\\%$!).</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Nguyên lý Taylor</h4>\n          <p>Hệ số phản ứng trước lạm phát là $1 + 0.5 = 1.5 > 1$.</p>\n          <p>Nếu NHTW tăng lãi suất danh nghĩa ít hơn lạm phát (ví dụ tăng $3\\%$ khi lạm phát tăng $4\\%$), lãi suất thực tế sẽ giảm ($r \\downarrow$). Lãi suất thực giảm càng khuyến khích vay nợ và tiêu dùng, khiến vòng xoáy lạm phát bùng nổ mất kiểm soát.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Cục Dự trữ Liên bang Mỹ (Fed) & Chủ tịch Jerome Powell",
      "content": "Trong giai đoạn 2022-2023, Fed đã thực hiện chuỗi 11 lần tăng lãi suất liên tiếp đưa lãi suất Fed Funds Rate từ 0.25% lên 5.50% theo đúng tinh thần nguyên lý Taylor, thành công kéo lạm phát từ 9.1% xuống 3.1% mà không gây ra suy thoái kinh tế sâu (Hạ cánh mềm - Soft Landing).",
      "takeaway": "Nguyên lý Taylor là kim chỉ nam bắt buộc trong điều hành tiền tệ hiện đại: Lãi suất danh nghĩa phải phản ứng mạnh hơn 1:1 trước biến động của lạm phát."
    },
    "commonMistakes": [
      "Quên cộng thành phần lạm phát thực tế $\\pi$ vào lãi suất danh nghĩa.",
      "Tính sai khoảng trống sản lượng."
    ]
  },
  {
    "id": "prob22",
    "category": "macro",
    "chapter": 12,
    "title": "Dạng 22: Khủng hoảng giá dầu OPEC, hiện tượng Đình lạm và mô hình Tổng cung - Tổng cầu AD - AS",
    "examLevel": "Đề thi Đại học Kinh tế Quốc dân (NEU)",
    "caseStudyTag": "Case study: Cú sốc giá dầu mỏ OPEC thập niên 1970 và hiện tượng Đình lạm (Stagflation)",
    "context": "Xét tác động của cú sốc giá năng lượng toàn cầu lên mô hình AD - AS:\n• Tổng cầu: $AD: Y = 2.000 - 100P$\n• Tổng cung ngắn hạn ban đầu: $SRAS: Y = 1.000 + 100P$\n• Sản lượng tiềm năng dài hạn: $LRAS = Y_p = 1.500$ (Đơn vị tính: tỷ USD).",
    "subQuestions": [
      "a) Xác định mức giá ($P^*$) và sản lượng ($Y^*$) cân bằng vĩ mô dài hạn ban đầu.",
      "b) Cú sốc nguồn cung năng lượng đẩy chi phí sản xuất tăng cao làm đường tổng cung dịch trái thành $SRAS': Y = 800 + 100P$. Xác định điểm cân bằng ngắn hạn mới và phân tích hiện tượng Đình lạm (Stagflation).",
      "c) So sánh thế tiến thoái lưỡng nan của chính phủ: Kích cầu mở rộng AD để cứu việc làm vs Thắt chặt để kiểm soát lạm phát."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Cân bằng dài hạn ban đầu</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2.000 - 100P = 1.000 + 100P \\iff 200P = 1.000 \\implies \\mathbf{P^* = 5.0}, \\quad \\mathbf{Y^* = 1.500} = Y_p$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Cú sốc cung bất lợi & Đình lạm (Stagflation)</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$2.000 - 100P = 800 + 100P \\iff 200P = 1.200 \\implies \\mathbf{P_1 = 6.0}, \\quad \\mathbf{Y_1 = 1.400}$$</div>\n          <p><strong>Hiện tượng Đình lạm:</strong> Sản lượng suy giảm ($1.400 < 1.500 \\implies$ thất nghiệp tăng) đồng thời mức giá chung tăng cao ($P$ tăng từ 5 lên 6 $\\implies$ lạm phát tăng).</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Thế tiến thoái lưỡng nan của chính sách</h4>\n          <p>• <strong>Kích cầu ($AD \\uparrow$):</strong> Kéo sản lượng về $Y_p = 1.500$ nhưng đẩy giá bùng nổ lên $P = 7.0$.</p>\n          <p>• <strong>Thắt chặt ($AD \\downarrow$):</strong> Kéo giá về $5.0$ nhưng đẩy sản lượng tụt sâu xuống $1.300$ (thất nghiệp trầm trọng hơn).</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tổ chức các nước xuất khẩu dầu mỏ (OPEC) & Khủng hoảng năng lượng 1973",
      "content": "Các cú sốc cung bất lợi là cơn ác mộng lớn nhất đối với các nhà kinh tế học vĩ mô vì chính sách quản lý tổng cầu thông thường không thể đồng thời giải quyết cả hai mục tiêu: vừa giảm lạm phát vừa giảm thất nghiệp.",
      "takeaway": "Giải pháp căn cơ cho cú sốc cung là các chính sách trọng cung (Supply-side Policies) như đầu tư năng lượng tái tạo, giảm thuế sản xuất và nâng cao năng suất lao động."
    },
    "commonMistakes": [
      "Nhầm lẫn giữa cân bằng ngắn hạn (AD = SRAS) và cân bằng dài hạn (AD = LRAS).",
      "Khai triển sai chiều dịch chuyển của đường tổng cung khi chi phí đầu vào tăng."
    ]
  },
  {
    "id": "prob23",
    "category": "macro",
    "chapter": 12,
    "title": "Dạng 23: Chiến dịch chống lạm phát của Paul Volcker và đánh đổi trên đường Phillips",
    "examLevel": "Đề thi Đại học Ngoại Thương (FTU)",
    "caseStudyTag": "Case study: Cuộc chiến chống lạm phát kinh điển của Chủ tịch Fed Paul Volcker (1979-1982)",
    "context": "Phương trình đường Phillips ngắn hạn (SRPC) của nền kinh tế:\n$$\\pi = \\pi^e - 0.5(u - u_n) + v$$\nVới: Tỷ lệ thất nghiệp tự nhiên $u_n = 5.0\\%$, kỳ vọng lạm phát ban đầu $\\pi^e = 3.0\\%$, cú sốc cung $v = 0$.",
    "subQuestions": [
      "a) Xác định mức lạm phát thực tế khi thất nghiệp lần lượt là $u = 3.0\\%, 5.0\\%, 7.0\\%$.",
      "b) Nếu NHTW mở rộng tiền tệ để ép thất nghiệp xuống $3.0\\%$, lạm phát sẽ là bao nhiêu? Sau đó trong dài hạn người dân điều chỉnh kỳ vọng thì điều gì xảy ra?",
      "c) Chứng minh đường Phillips dài hạn (LRPC) là đường thẳng đứng tại $u_n$."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Điểm cân bằng trên đường SRPC</h4>\n          <p>• $u = 7.0\\% \\implies \\pi = 3.0 - 0.5(7.0 - 5.0) = \\mathbf{2.0\\%}$.</p>\n          <p>• $u = 5.0\\% \\implies \\pi = 3.0 - 0.5(5.0 - 5.0) = \\mathbf{3.0\\%}$.</p>\n          <p>• $u = 3.0\\% \\implies \\pi = 3.0 - 0.5(3.0 - 5.0) = \\mathbf{4.0\\%}$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Điều chỉnh kỳ vọng thích nghi dài hạn</h4>\n          <p>• Trong ngắn hạn: Thất nghiệp giảm xuống $3\\%$ làm lạm phát tăng lên $4\\%$.</p>\n          <p>• Trong dài hạn: Người lao động nhận ra tiền lương thực tế bị xói mòn nên điều chỉnh kỳ vọng lạm phát lên $\\pi^e = 4\\%$. Đường SRPC dịch lên trên thành: $\\pi = 4.0\\% - 0.5(u - 5.0\\%)$.</p>\n          <p>Thất nghiệp quay trở lại mức tự nhiên $u = 5.0\\%$ nhưng lạm phát bị neo ở mức cao $4.0\\%$.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Bản chất đường LRPC thẳng đứng</h4>\n          <p>Trong dài hạn: $\\pi = \\pi^e \\implies -0.5(u - u_n) = 0 \\implies \\mathbf{u = u_n = 5.0\\%}$.</p>\n          <p>Đường Phillips dài hạn (LRPC) thẳng đứng: Không có sự đánh đổi giữa lạm phát và thất nghiệp trong dài hạn.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Chủ tịch Cục Dự trữ Liên bang Mỹ Paul Volcker (1979 - 1987)",
      "content": "Năm 1981, Chủ tịch Fed Paul Volcker chấp nhận đẩy lãi suất lên tới 20%, gây ra suy thoái ngắn hạn với thất nghiệp gần 11% để bẻ gãy hoàn toàn tâm lý kỳ vọng lạm phát của thị trường. Nhờ đó, lạm phát Mỹ hạ nhiệt bền vững từ 14% về dưới 4% và mở ra kỷ nguyên Đại ổn định (Great Moderation).",
      "takeaway": "Uy tín chính sách (Policy Credibility) của Ngân hàng Trung ương là tài sản quý giá nhất để neo giữ kỳ vọng lạm phát dài hạn mà không phải trả giá bằng tổn thất việc làm quá lớn."
    },
    "commonMistakes": [
      "Quên rằng trong dài hạn kỳ vọng $\\pi^e$ luôn đuổi kịp lạm phát thực tế $\\pi$.",
      "Nhầm lẫn độ dốc giữa đường Phillips ngắn hạn và dài hạn."
    ]
  },
  {
    "id": "prob24",
    "category": "macro",
    "chapter": 12,
    "title": "Dạng 24: Chỉ số Big Mac Index, định giá đồng VND theo PPP và xuất siêu thương mại",
    "examLevel": "Đề thi Học viện Ngân hàng (BA)",
    "caseStudyTag": "Case study: Khảo sát Big Mac Index của The Economist & Cán cân xuất siêu kỷ lục của Việt Nam",
    "context": "Tạp chí The Economist công bố khảo sát giá bánh burger Big Mac:\n• Giá một chiếc bánh Big Mac tại Việt Nam là $P = 73.500$ VND.\n• Giá một chiếc bánh Big Mac tương đương tại Hoa Kỳ là $P^* = 5.00$ USD.\n• Tỷ giá hối đoái danh nghĩa thị trường là $e = 24.500$ VND/USD.\n• Tiết kiệm quốc gia của Việt Nam $S = 500$ nghìn tỷ đồng; Tổng đầu tư nội địa $I = 450$ nghìn tỷ đồng.",
    "subQuestions": [
      "a) Tính tỷ giá danh nghĩa cân bằng theo Thuyết Ngang giá sức mua (PPP) và Tỷ giá hối đoái thực tế ($e_r$).",
      "b) Dựa vào kết quả Big Mac Index, đồng Việt Nam (VND) đang được định giá cao hơn hay thấp hơn giá trị thực bao nhiêu %?",
      "c) Tính Xuất khẩu ròng ($NX$) từ đồng nhất thức $S - I = NX$ và phân tích cơ chế xuất siêu thương mại của Việt Nam."
    ],
    "fullSolutionHtml": "\n      <div class=\"space-y-4 text-sm text-slate-800 dark:text-slate-200\">\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu a: Tỷ giá cân bằng PPP và Tỷ giá thực tế</h4>\n          <p>• Tỷ giá danh nghĩa cân bằng theo PPP:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$e_{PPP} = \\frac{P}{P^*} = \\frac{73.500}{5.00} = \\mathbf{14.700} \\text{ VND/USD}$$</div>\n          <p>• Tỷ giá hối đoái thực tế (Real Exchange Rate):</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$e_r = e \\times \\frac{P^*}{P} = 24.500 \\times \\frac{5.00}{73.500} = \\mathbf{1.667} > 1$$</div>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu b: Mức độ định giá thấp của đồng VND</h4>\n          <p>So sánh tỷ giá thị trường với tỷ giá PPP:</p>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$\\text{Mức độ định giá} = \\frac{e_{PPP} - e}{e} \\times 100\\% = \\frac{14.700 - 24.500}{24.500} \\times 100\\% = \\mathbf{-40.0\\%}$$</div>\n          <p>$\\implies$ Theo chỉ số Big Mac, <strong>đồng VND đang bị định giá thấp hơn $40.0\\%$ so với giá trị thực tế PPP</strong>. Điều này mang lại lợi thế cạnh tranh cực lớn về giá cho hàng hóa Việt Nam xuất khẩu sang Mỹ.</p>\n        </div>\n\n        <div class=\"p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700\">\n          <h4 class=\"font-bold text-indigo-600 dark:text-indigo-400 mb-1\">Lời giải câu c: Xuất siêu thương mại và Đồng nhất thức vĩ mô</h4>\n          <div class=\"my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300\">$$NX = S - I = 500 - 450 = \\mathbf{+50} \\text{ nghìn tỷ đồng}$$</div>\n          <p>Tiết kiệm quốc gia vượt đầu tư nội địa ($S > I$) giúp Việt Nam liên tục xuất siêu thặng dư thương mại ($NX > 0$), gia tăng tích lũy dự trữ ngoại hối quốc gia.</p>\n        </div>\n      </div>\n    ",
    "caseStudyInsight": {
      "entity": "Tạp chí The Economist & Chỉ số Big Mac Index tại Việt Nam",
      "content": "Chỉ số Big Mac chứng minh rằng tỷ giá thị trường thường bị lệch xa so với tỷ giá cân bằng PPP do các chi phí phi thương mại (giá thuê mặt bằng, nhân công phục vụ tại chỗ rẻ hơn nhiều ở các nước đang phát triển).",
      "takeaway": "Đồng tiền định giá thấp theo PPP kết hợp với tỷ lệ tiết kiệm quốc gia cao là nền tảng cốt lõi giúp các nền kinh tế Đông Á duy trì xuất siêu thần kỳ."
    },
    "commonMistakes": [
      "Tính ngược công thức tỷ giá PPP $e_{PPP} = P^* / P$.",
      "Nhầm lẫn giữa định giá thấp (Undervalued) và định giá cao (Overvalued)."
    ]
  }
];
