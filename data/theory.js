// Cơ sở dữ liệu Lý thuyết Chuyên sâu 12 Chương môn Kinh tế học đại cương
// Biên soạn chuẩn mực theo giáo trình N. Gregory Mankiw, Paul Samuelson và Hal Varian
const THEORY_DATA = [
  {
    "id": "chap-1",
    "category": "micro",
    "number": 1,
    "title": "Mười Nguyên Lý Kinh Tế Học & Tư Duy Cận Biên",
    "subtitle": "Bản chất của sự khan hiếm, chi phí cơ hội, đường PPF và lợi thế so sánh",
    "overview": "Kinh tế học là môn khoa học nghiên cứu cách xã hội quản lý các nguồn lực khan hiếm để thỏa mãn những nhu cầu vô hạn. Nền tảng được đúc kết qua 10 Nguyên lý kinh điển của GS. N. Gregory Mankiw (Đại học Harvard).",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 1: Ten Principles of Economics & Chương 2: Thinking Like an Economist & Chương 3: Interdependence and the Gains from Trade",
    "sections": [
      {
        "heading": "1. Mười Nguyên Lý Kinh Tế Học Của N. Gregory Mankiw",
        "content": "\n          <p class=\"mb-3 text-sm\">Mankiw chia 10 nguyên lý thành 3 nhóm lớn phản ánh toàn bộ tư duy kinh tế học:</p>\n          <div class=\"grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs\">\n            <div class=\"p-3 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-blue-700 dark:text-blue-300 mb-1.5 uppercase\">A. Con người ra quyết định như thế nào?</h5>\n              <ul class=\"space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n                <li><strong>NL 1:</strong> Con người đối mặt với sự đánh đổi (Trade-offs).</li>\n                <li><strong>NL 2:</strong> Chi phí của một thứ là cái mà bạn phải từ bỏ để có được nó (Chi phí cơ hội).</li>\n                <li><strong>NL 3:</strong> Người duy lý suy nghĩ tại điểm cận biên ($MB \\ge MC$).</li>\n                <li><strong>NL 4:</strong> Con người phản ứng với các động cơ khuyến khích (Incentives).</li>\n              </ul>\n            </div>\n            <div class=\"p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-emerald-700 dark:text-emerald-300 mb-1.5 uppercase\">B. Con người tương tác với nhau như thế nào?</h5>\n              <ul class=\"space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n                <li><strong>NL 5:</strong> Thương mại làm cho mọi người đều có lợi (Lợi thế so sánh).</li>\n                <li><strong>NL 6:</strong> Thị trường thường là phương thức tốt để tổ chức hoạt động kinh tế (Bàn tay vô hình).</li>\n                <li><strong>NL 7:</strong> Đôi khi chính phủ có thể cải thiện kết quả thị trường (Thất bại thị trường: Ngoại ứng, Quyền lực thị trường).</li>\n              </ul>\n            </div>\n            <div class=\"p-3 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-purple-700 dark:text-purple-300 mb-1.5 uppercase\">C. Nền kinh tế vận hành như thế nào?</h5>\n              <ul class=\"space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n                <li><strong>NL 8:</strong> Mức sống phụ thuộc vào năng lực sản xuất của quốc gia (Năng suất lao động).</li>\n                <li><strong>NL 9:</strong> Giá cả tăng khi chính phủ in quá nhiều tiền (Lạm phát).</li>\n                <li><strong>NL 10:</strong> Xã hội đối mặt với sự đánh đổi ngắn hạn giữa Lạm phát và Thất nghiệp (Đường Phillips).</li>\n              </ul>\n            </div>\n          </div>\n        "
      },
      {
        "heading": "2. Chi Phí Cơ Hội (Opportunity Cost) & Chi Phí Chìm (Sunk Cost)",
        "content": "\n          <div class=\"p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 my-2 text-sm\">\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 mb-1\">Công thức chuẩn:</p>\n            <p>$$\\text{Chi phí cơ hội} = \\text{Chi phí hiện (Explicit Cost)} + \\text{Chi phí ẩn (Implicit Cost)}$$</p>\n            <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">Chi phí hiện: Tiền thực tế phải chi trả (học phí, tiền ăn ở tăng thêm). Chi phí ẩn: Giá trị cơ hội tốt nhất bị bỏ qua (tiền lương bạn có thể kiếm được nếu không đi học).</p>\n          </div>\n          <p class=\"text-sm mt-2\"><strong>Chi phí chìm (Sunk Cost):</strong> Khoản chi phí đã xảy ra trong quá khứ và không thể thu hồi được dù đưa ra bất kỳ quyết định nào trong hiện tại hay tương lai. <em>Quy tắc vàng: Người duy lý bỏ qua chi phí chìm khi ra quyết định!</em></p>\n        "
      },
      {
        "heading": "3. Đường Giới Hạn Khả Năng Sản Xuất (PPF) & Lợi Thế So Sánh (Comparative Advantage)",
        "content": "\n          <p class=\"text-sm mb-2\">Đường PPF minh họa sự đánh đổi và chi phí cơ hội. Độ dốc của đường PPF chính là <strong>Tỷ lệ chuyển đổi biên (MRT)</strong>, đo lường chi phí cơ hội của việc sản xuất thêm 1 đơn vị hàng hóa nằm trên trục hoành.</p>\n          <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 text-xs text-amber-900 dark:text-amber-300\">\n            <strong>Nguyên lý Lợi Thế So Sánh của David Ricardo:</strong><br>\n            • <em>Lợi thế tuyệt đối (Absolute Advantage):</em> Khả năng sản xuất một hàng hóa với ít nguồn lực (thời gian) hơn đối tác.<br>\n            • <em>Lợi thế so sánh (Comparative Advantage):</em> Khả năng sản xuất một hàng hóa với <strong>chi phí cơ hội thấp hơn</strong> đối tác.<br>\n            • <em>Quy luật:</em> Thương mại quốc tế tự do dựa trên LỢI THẾ SO SÁNH, cho phép cả hai quốc gia tiêu dùng ở các điểm NẰM BÊN NGOÀI đường PPF ban đầu của mình!\n          </div>\n        "
      },
      {
        "heading": "4. Bảng Đối Chiếu: Kinh Tế Học Thực Chứng vs Chuẩn Tắc",
        "content": "\n          <table class=\"w-full text-xs text-left border border-slate-200 dark:border-slate-700 my-2\">\n            <thead class=\"bg-slate-100 dark:bg-slate-800 font-bold\">\n              <tr>\n                <th class=\"p-2 border-b\">Tiêu chí</th>\n                <th class=\"p-2 border-b text-indigo-600 dark:text-indigo-400\">Kinh tế học Thực chứng (Positive)</th>\n                <th class=\"p-2 border-b text-emerald-600 dark:text-emerald-400\">Kinh tế học Chuẩn tắc (Normative)</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800\">\n              <tr><td class=\"p-2 font-semibold\">Bản chất</td><td class=\"p-2\">Mô tả thế giới \"như nó vốn có\" (What is)</td><td class=\"p-2\">Khuyến nghị \"nên như thế nào\" (What ought to be)</td></tr>\n              <tr><td class=\"p-2 font-semibold\">Kiểm chứng</td><td class=\"p-2\">Có thể kiểm chứng bằng số liệu thực nghiệm</td><td class=\"p-2\">Không thể kiểm chứng bằng dữ liệu vì mang tính phán xét giá trị</td></tr>\n              <tr><td class=\"p-2 font-semibold\">Dấu hiệu nhận biết</td><td class=\"p-2\">Chứa từ: \"dẫn đến\", \"làm tăng/giảm\", \"nếu... thì...\"</td><td class=\"p-2\">Chứa từ: \"nên\", \"cần phải\", \"đáng lẽ\", \"bất công\"</td></tr>\n            </tbody>\n          </table>\n        "
      }
    ]
  },
  {
    "id": "chap-2",
    "category": "micro",
    "number": 2,
    "title": "Cung - Cầu & Cơ Chế Hoạt Động Của Thị Trường",
    "subtitle": "Cân bằng thị trường, 3 lý do đường cầu dốc xuống, thặng dư tiêu dùng (CS) và thặng dư sản xuất (PS)",
    "overview": "Cung và Cầu là hai khái niệm nền tảng mà các nhà kinh tế học sử dụng thường xuyên nhất. Thị trường tự do điều tiết giá cả qua cơ chế 'Bàn tay vô hình' để đạt được trạng thái hiệu quả phân bổ tài nguyên.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 4: The Market Forces of Supply and Demand & Chương 7: Consumers, Producers, and the Efficiency of Markets",
    "sections": [
      {
        "heading": "1. Tại Sao Đường Cầu Dốc Xuống? (3 Hiệu Ứng Nền Tảng)",
        "content": "\n          <p class=\"text-sm mb-2\">Quy luật cầu: Giá và lượng cầu biến thiên nghịch chiều ($P \\uparrow \\implies Q_D \\downarrow$). Có 3 cơ chế kinh tế giải thích hiện tượng này:</p>\n          <ul class=\"space-y-1.5 text-sm list-disc list-inside\">\n            <li><strong>Hiệu ứng thay thế (Substitution Effect):</strong> Khi giá hàng X tăng, nó trở nên đắt tương đối so với các hàng hóa thay thế khác, người tiêu dùng chuyển hướng sang mua hàng thay thế.</li>\n            <li><strong>Hiệu ứng thu nhập (Income Effect):</strong> Khi giá hàng X tăng, với cùng mức thu nhập danh nghĩa, sức mua thực tế của bạn giảm đi, buộc bạn phải cắt giảm lượng mua.</li>\n            <li><strong>Quy luật thỏa dụng biên giảm dần (Diminishing Marginal Utility):</strong> Mức độ thỏa mãn tăng thêm từ mỗi đơn vị tiêu dùng kế tiếp ngày càng giảm, nên người tiêu dùng chỉ chấp nhận mua thêm khi giá giảm xuống.</li>\n          </ul>\n        "
      },
      {
        "heading": "2. Phân Biệt: Di Chuyển Dọc vs Dịch Chuyển Đường Cong",
        "content": "\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-xs\">\n            <div class=\"p-3 bg-red-50 dark:bg-slate-800 rounded-xl border border-red-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-red-700 dark:text-red-300 mb-1\">DI CHUYỂN DỌC (Movement along)</h5>\n              <p>• <strong>Nguyên nhân:</strong> CHỈ DO GIÁ ($P$) của chính hàng hóa đó thay đổi.</p>\n              <p>• <strong>Kết quả:</strong> Lượng cầu ($Q_D$) hoặc Lượng cung ($Q_S$) thay đổi từ điểm A sang điểm B trên cùng một đường cong.</p>\n            </div>\n            <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-indigo-700 dark:text-indigo-300 mb-1\">DỊCH CHUYỂN CẢ ĐƯỜNG (Shift of curve)</h5>\n              <p>• <strong>Nguyên nhân:</strong> Do các yếu tố NGOÀI GIÁ thay đổi.</p>\n              <p>• <em>Yếu tố dịch Cầu:</em> Thu nhập ($I$), Giá hàng hóa liên quan ($P_{sub}, P_{comp}$), Thị hiếu, Kỳ vọng, Số lượng người mua.</p>\n              <p>• <em>Yếu tố dịch Cung:</em> Giá nguyên liệu đầu vào, Công nghệ sản xuất, Kỳ vọng của người bán, Thuế/trợ cấp, Số lượng người bán.</p>\n            </div>\n          </div>\n        "
      },
      {
        "heading": "3. Thặng Dư Tiêu Dùng (CS), Thặng Dư Sản Xuất (PS) & Hiệu Quả Thị Trường",
        "content": "\n          <p class=\"text-sm mb-2\">Đo lường phúc lợi kinh tế (Welfare Economics):</p>\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1.5 font-mono\">\n            <p>• Thặng dư tiêu dùng: CS = Tổng giá trị sẵn lòng chi trả (WTP) - Số tiền thực tế phải trả</p>\n            <p>• Thặng dư sản xuất: PS = Số tiền thực tế nhận được - Chi phí cơ hội sản xuất (WTS)</p>\n            <p>• Tổng thặng dư xã hội: TS = CS + PS = Giá trị đối với người mua - Chi phí của người bán</p>\n          </div>\n          <p class=\"text-xs text-emerald-700 dark:text-emerald-300 font-semibold mt-2\">Định lý cơ bản của Kinh tế học Phúc lợi: Điểm cân bằng thị trường tự do tối đa hóa Tổng thặng dư xã hội ($TS$). Bất kỳ can thiệp nào làm sai lệch sản lượng khỏi $Q^*$ đều sinh ra Tổn thất vô ích (Deadweight Loss).</p>\n        "
      }
    ]
  },
  {
    "id": "chap-3",
    "category": "micro",
    "number": 3,
    "title": "Độ Co Giãn Của Cầu & Cung Và Ứng Dụng",
    "subtitle": "Co giãn theo giá, co giãn theo thu nhập, co giãn chéo và bài toán tối đa hóa doanh thu",
    "overview": "Độ co giãn đo lường mức độ phản ứng của lượng cung hoặc lượng cầu trước sự thay đổi của giá cả hoặc các biến số kinh tế khác. Đây là công cụ định lượng trung tâm để hoạch định giá cả và chính sách thuế.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 5: Elasticity and Its Application",
    "sections": [
      {
        "heading": "1. Công Thức Tính Độ Co Giãn Theo Phương Pháp Trung Điểm",
        "content": "\n          <p class=\"text-sm mb-2\">Để loại bỏ hiện tượng độ co giãn phụ thuộc vào chiều tăng hay giảm của giá, Mankiw chuẩn hóa bằng <strong>Phương pháp trung điểm (Midpoint Method)</strong>:</p>\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-center my-2\">\n            <p class=\"text-sm font-bold text-indigo-800 dark:text-indigo-200\">$$E_d = \\frac{(Q_2 - Q_1) / [(Q_1 + Q_2)/2]}{(P_2 - P_1) / [(P_1 + P_2)/2]}$$</p>\n          </div>\n          <ul class=\"text-xs space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n            <li>$|E_d| > 1$: Cầu co giãn nhiều (Elastic) - Hàng xa xỉ, có nhiều hàng thay thế.</li>\n            <li>$|E_d| < 1$: Cầu co giãn ít (Inelastic) - Hàng thiết yếu, ít hàng thay thế (xăng, muối, điện).</li>\n            <li>$|E_d| = 1$: Cầu co giãn đơn vị (Unitary elastic) - Doanh thu đạt cực đại.</li>\n          </ul>\n        "
      },
      {
        "heading": "2. Quy Tắc Vàng: Mối Quan Hệ Giữa Độ Co Giãn Và Tổng Doanh Thu (TR)",
        "content": "\n          <div class=\"overflow-x-auto my-2\">\n            <table class=\"w-full text-xs text-left border border-slate-200 dark:border-slate-700\">\n              <thead class=\"bg-slate-100 dark:bg-slate-800 font-bold\">\n                <tr>\n                  <th class=\"p-2 border-b\">Loại co giãn</th>\n                  <th class=\"p-2 border-b\">Khi Giá TĂNG ($P \\uparrow$)</th>\n                  <th class=\"p-2 border-b\">Khi Giá GIẢM ($P \\downarrow$)</th>\n                  <th class=\"p-2 border-b\">Chiến lược tối ưu</th>\n                </tr>\n              </thead>\n              <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800\">\n                <tr>\n                  <td class=\"p-2 font-bold text-indigo-600\">Co giãn nhiều ($|E| > 1$)</td>\n                  <td class=\"p-2 text-rose-600 font-semibold\">Doanh thu GIẢM ($TR \\downarrow$)</td>\n                  <td class=\"p-2 text-emerald-600 font-semibold\">Doanh thu TĂNG ($TR \\uparrow$)</td>\n                  <td class=\"p-2\">Nên GIẢM GIÁ để kích cầu</td>\n                </tr>\n                <tr>\n                  <td class=\"p-2 font-bold text-amber-600\">Co giãn ít ($|E| < 1$)</td>\n                  <td class=\"p-2 text-emerald-600 font-semibold\">Doanh thu TĂNG ($TR \\uparrow$)</td>\n                  <td class=\"p-2 text-rose-600 font-semibold\">Doanh thu GIẢM ($TR \\downarrow$)</td>\n                  <td class=\"p-2\">Nên TĂNG GIÁ để tối đa hóa thu nhập</td>\n                </tr>\n                <tr>\n                  <td class=\"p-2 font-bold text-purple-600\">Co giãn đơn vị ($|E| = 1$)</td>\n                  <td class=\"p-2\" colspan=\"2\">Doanh thu KHÔNG ĐỔI (Đạt giá trị CỰC ĐẠI tại $MR = 0$)</td>\n                  <td class=\"p-2\">Duy trì mức giá hiện tại</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        "
      },
      {
        "heading": "3. Độ Co Giãn Theo Thu Nhập (EI) & Độ Co Giãn Chéo (EXY)",
        "content": "\n          <p class=\"text-sm mb-1\"><strong>1. Độ co giãn theo thu nhập ($E_I = \\%\\Delta Q / \\%\\Delta I$):</strong></p>\n          <p class=\"text-xs text-slate-700 dark:text-slate-300 ml-3 mb-2\">\n            • $E_I > 0$: Hàng hóa thông thường (Normal good). Trong đó $0 < E_I \\le 1$ là Hàng thiết yếu; $E_I > 1$ là Hàng xa xỉ.<br>\n            • $E_I < 0$: Hàng hóa cấp thấp / thứ cấp (Inferior good) như mì gói, phương tiện công cộng.\n          </p>\n          <p class=\"text-sm mb-1\"><strong>2. Độ co giãn chéo của cầu ($E_{XY} = \\%\\Delta Q_X / \\%\\Delta P_Y$):</strong></p>\n          <p class=\"text-xs text-slate-700 dark:text-slate-300 ml-3\">\n            • $E_{XY} > 0$: X và Y là hai hàng hóa THAY THẾ (Giá Pepsi tăng làm Cầu Coca tăng).<br>\n            • $E_{XY} < 0$: X và Y là hai hàng hóa BỔ SUNG (Giá xăng tăng làm Cầu xe máy giảm).<br>\n            • $E_{XY} = 0$: Hai hàng hóa độc lập không liên quan.\n          </p>\n        "
      }
    ]
  },
  {
    "id": "chap-4",
    "category": "micro",
    "number": 4,
    "title": "Chính Sách Chính Phủ & Lý Thuyết Tiêu Dùng Tối Ưu",
    "subtitle": "Giá trần, giá sàn, tác động của thuế, tổn thất vô ích (DWL) và đường bàng quan",
    "overview": "Phân tích tác động của các biện pháp can thiệp trực tiếp của nhà nước vào thị trường và cách người tiêu dùng tối ưu hóa ngân sách theo giáo trình Hal Varian và Mankiw.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 6: Supply, Demand, and Government Policies & Chương 8: Application: The Costs of Taxation & Chương 21: The Theory of Consumer Choice",
    "sections": [
      {
        "heading": "1. Kiểm Soát Giá: Giá Trần (Price Ceiling) & Giá Sàn (Price Floor)",
        "content": "\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs\">\n            <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-amber-800 dark:text-amber-200 mb-1\">GIÁ TRẦN (Price Ceiling)</h5>\n              <p>• Mức giá TỐI ĐA hợp pháp do chính phủ quy định (ví dụ: giá thuê nhà, giá xăng trần).</p>\n              <p>• <strong>Có hiệu lực (Binding):</strong> Khi $P_c < P^*$.</p>\n              <p>• <strong>Hệ lụy:</strong> Gây thiếu hụt hàng hóa ($Q_D > Q_S$), phát sinh xếp hàng, phân bổ phi hiệu quả, thị trường chợ đen.</p>\n            </div>\n            <div class=\"p-3 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-blue-800 dark:text-blue-200 mb-1\">GIÁ SÀN (Price Floor)</h5>\n              <p>• Mức giá TỐI THIỂU hợp pháp do chính phủ quy định (ví dụ: tiền lương tối thiểu, giá sàn lúa gạo).</p>\n              <p>• <strong>Có hiệu lực (Binding):</strong> Khi $P_f > P^*$.</p>\n              <p>• <strong>Hệ lụy:</strong> Gây dư thừa hàng hóa ($Q_S > Q_D$), phát sinh thất nghiệp ở lao động kỹ năng thấp.</p>\n            </div>\n          </div>\n        "
      },
      {
        "heading": "2. Gánh Nặng Thuế (Tax Incidence) & Tổn Thất Vô Ích (DWL)",
        "content": "\n          <p class=\"text-sm mb-2\">Khi chính phủ áp thuế đơn vị $t$:</p>\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono space-y-1\">\n            <p>• Mức giá người mua trả: P_b = P_s + t</p>\n            <p>• Tỷ lệ chia sẻ gánh nặng thuế: (P_b - P*) / (P* - P_s) = E_s / |E_d|</p>\n            <p>• Tổn thất vô ích của thuế: DWL = 0.5 × t × (Q* - Q_t)</p>\n          </div>\n          <p class=\"text-xs text-rose-600 dark:text-rose-400 font-semibold mt-2\">Bên nào kém co giãn hơn (ít phương án thay thế hơn) sẽ chịu phần lớn gánh nặng thuế. DWL tỷ lệ thuận với BÌNH PHƯƠNG của thuế suất ($t^2$).</p>\n        "
      },
      {
        "heading": "3. Tối Ưu Hóa Lựa Chọn Tiêu Dùng (Consumer Utility Maximization)",
        "content": "\n          <p class=\"text-sm mb-2\">Người tiêu dùng phân bổ ngân sách $I = P_X X + P_Y Y$ để tối đa hóa hàm thỏa dụng $U(X, Y)$:</p>\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-center my-2 text-xs font-bold text-indigo-900 dark:text-indigo-200\">\n            $$MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y} \\iff \\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$$\n          </div>\n          <p class=\"text-xs text-slate-700 dark:text-slate-300\">Ý nghĩa kinh tế: Điểm cân bằng tiêu dùng tối ưu là tiếp điểm giữa <strong>Đường bàng quan (Indifference Curve)</strong> và <strong>Đường ngân sách (Budget Line)</strong>. Tại đó, mỗi đồng tiền chi tiêu cuối cùng vào các hàng hóa khác nhau đều mang lại mức thỏa dụng biên ngang nhau.</p>\n        "
      },
      {
        "heading": "4. ⭐ Chuyên Đề Phân Loại A+: Phân Rã Slutsky, Hàng Giffen & Nghiệm Góc",
        "content": "\n          <div class=\"p-3.5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-slate-900 dark:to-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 my-2 text-xs space-y-2\">\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase\">A. Phân rã Hiệu ứng thay thế (SE) và Hiệu ứng thu nhập (IE) theo Slutsky:</p>\n            <p class=\"text-slate-700 dark:text-slate-300\">Khi giá $P_X$ tăng: Tổng thay đổi $\\Delta X = SE + IE$.</p>\n            <ul class=\"list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 pl-1\">\n              <li><strong>Hiệu ứng thay thế (SE):</strong> Đo lường sự thay đổi lượng cầu chỉ do giá tương đối thay đổi, giữ sức mua thực tế không đổi (ở mức thu nhập bù đắp $I' = P_X' X_A + P_Y Y_A$). <em>SE luôn mang dấu âm khi giá tăng!</em></li>\n              <li><strong>Hiệu ứng thu nhập (IE):</strong> Đo lường sự thay đổi lượng cầu khi sức mua thực tế sụt giảm từ $I'$ về $I$ ban đầu.</li>\n              <li><strong>Hàng thông thường:</strong> $IE < 0$ (cùng chiều với SE làm giảm mạnh lượng cầu).</li>\n              <li><strong>Hàng cấp thấp thông thường:</strong> $IE > 0$ nhưng $|IE| < |SE|$ (tổng lượng cầu vẫn giảm khi giá tăng).</li>\n              <li><strong>Hàng Giffen:</strong> $IE > 0$ và <strong>$|IE| > |SE|$</strong>, tổng lượng cầu tăng khi giá tăng (Đường cầu dốc lên vi phạm quy luật cầu).</li>\n            </ul>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase pt-1\">B. Các dạng hàm thỏa dụng đặc thù:</p>\n            <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1\">\n              <div class=\"p-2.5 bg-white dark:bg-slate-800 rounded border border-indigo-100 dark:border-slate-700\">\n                <p class=\"font-bold text-indigo-600 dark:text-indigo-400\">1. Hàng thay thế hoàn hảo: $U = aX + bY$</p>\n                <p class=\"text-slate-600 dark:text-slate-300 mt-0.5\">Đường bàng quan là đường thẳng $MRS = a/b$. Nếu $MRS > P_X/P_Y \\implies$ mua 100% X ($X^* = I/P_X, Y^* = 0$). Đây là <strong>Nghiệm góc (Corner Solution)</strong>.</p>\n              </div>\n              <div class=\"p-2.5 bg-white dark:bg-slate-800 rounded border border-indigo-100 dark:border-slate-700\">\n                <p class=\"font-bold text-emerald-600 dark:text-emerald-400\">2. Hàng bổ sung hoàn hảo (Leontief): $U = \\min(aX, bY)$</p>\n                <p class=\"text-slate-600 dark:text-slate-300 mt-0.5\">Đường bàng quan hình chữ L. Điểm tối ưu luôn nằm tại đỉnh nhọn: $aX = bY$, hoàn toàn không có đạo hàm!</p>\n              </div>\n            </div>\n          </div>\n        "
      }
    ]
  },
  {
    "id": "chap-5",
    "category": "micro",
    "number": 5,
    "title": "Lý Thuyết Sản Xuất & Chi Phí Doanh Nghiệp",
    "subtitle": "Quy luật năng suất cận biên giảm dần, họ đường chi phí ngắn hạn, điểm hòa vốn và điểm đóng cửa",
    "overview": "Phân tích cấu trúc chi phí sản xuất làm nền tảng cho hành vi của doanh nghiệp. Đạo hàm các quyết định tối đa hóa lợi nhuận trong ngắn hạn và dài hạn.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 13: The Costs of Production & Chương 14: Firms in Competitive Markets",
    "sections": [
      {
        "heading": "1. Lợi Nhuận Kinh Tế vs Lợi Nhuận Kế Toán",
        "content": "\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1\">\n            <p>• <strong>Lợi nhuận kế toán:</strong> $\\pi_{kt} = TR - Chi\\,phí\\,hiện$</p>\n            <p>• <strong>Lợi nhuận kinh tế:</strong> $\\pi_{kinh\\,tế} = TR - (Chi\\,phí\\,hiện + Chi\\,phí\\,ẩn) = \\pi_{kt} - Chi\\,phí\\,cơ\\,hội\\,của\\,vốn$</p>\n            <p class=\"text-slate-500 italic\">Do đó, Lợi nhuận kinh tế luôn NHỎ HƠN Lợi nhuận kế toán. Khi $\\pi_{kinh\\,tế} = 0$, doanh nghiệp đang kiếm được Lợi nhuận bình thường (Normal Profit) và hoàn toàn không bị lỗ.</p>\n          </div>\n        "
      },
      {
        "heading": "2. Quy Luật Năng Suất Cận Biên Giảm Dần & Họ Đường Chi Phí",
        "content": "\n          <p class=\"text-sm mb-2\">Trong ngắn hạn, khi gia tăng yếu tố biến đổi (lao động L) trên một quy mô tư bản cố định (nhà xưởng K), <strong>Năng suất cận biên của lao động ($MP_L = \\Delta Q / \\Delta L$)</strong> ban đầu tăng, nhưng sau đó chắc chắn sẽ GIẢM DẦN.</p>\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-xs space-y-1 font-mono\">\n            <p>• Tổng chi phí: TC = FC + VC</p>\n            <p>• Chi phí biến đổi trung bình: AVC = VC / Q</p>\n            <p>• Chi phí trung bình: ATC = TC / Q = AFC + AVC</p>\n            <p>• Chi phí cận biên: MC = d(TC)/dQ = d(VC)/dQ</p>\n          </div>\n          <p class=\"text-xs text-indigo-700 dark:text-indigo-300 font-bold mt-2\">Chứng minh toán học: $d(ATC)/dQ = 0 \\iff MC = ATC$. Do đó, đường Chi phí cận biên ($MC$) luôn cắt đường $ATC$ và $AVC$ tại điểm CỰC TIỂU của hai đường này!</p>\n        "
      },
      {
        "heading": "3. Điểm Hòa Vốn, Điểm Đóng Cửa & Đường Cung Ngắn Hạn",
        "content": "\n          <ul class=\"text-xs space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside my-2\">\n            <li><strong>Điều kiện tối đa hóa lợi nhuận cạnh tranh:</strong> $P = MC$ (với điều kiện $MC$ đang dốc lên).</li>\n            <li><strong>Điểm hòa vốn:</strong> $P = ATC_{\\min}$. Doanh nghiệp đạt $\\pi_{kinh\\,tế} = 0$.</li>\n            <li><strong>Điểm đóng cửa (Shutdown point):</strong> $P = AVC_{\\min}$. Nếu $P < AVC_{\\min}$, doanh nghiệp đóng cửa ngay trong ngắn hạn (sản xuất $Q = 0$, chịu lỗ đúng bằng $FC$).</li>\n            <li><strong>Đường cung ngắn hạn của doanh nghiệp:</strong> Chính là <em>nhánh đường $MC$ nằm phía trên điểm cực tiểu của đường $AVC$</em>.</li>\n          </ul>\n        "
      }
    ]
  },
  {
    "id": "chap-6",
    "category": "micro",
    "number": 6,
    "title": "Bốn Cấu Trúc Thị Trường & Lý Thuyết Trò Chơi",
    "subtitle": "Cạnh tranh hoàn hảo, cạnh tranh độc quyền, độc quyền nhóm, độc quyền thuần túy và cân bằng Nash",
    "overview": "Phân loại các hình thái thị trường theo số lượng người bán, tính đồng nhất của sản phẩm và rào cản gia nhập. Nghiên cứu chiến lược định giá và tổn thất phúc lợi xã hội.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 14 (Competitive Markets), 15 (Monopoly), 16 (Monopolistic Competition), 17 (Oligopoly)",
    "sections": [
      {
        "heading": "1. Bảng So Sánh Toàn Diện 4 Cấu Trúc Thị Trường",
        "content": "\n          <div class=\"overflow-x-auto my-2\">\n            <table class=\"w-full text-xs text-left border border-slate-200 dark:border-slate-700\">\n              <thead class=\"bg-slate-100 dark:bg-slate-800 font-bold\">\n                <tr>\n                  <th class=\"p-2 border-b\">Đặc điểm</th>\n                  <th class=\"p-2 border-b\">Cạnh tranh hoàn hảo</th>\n                  <th class=\"p-2 border-b\">Cạnh tranh độc quyền</th>\n                  <th class=\"p-2 border-b\">Độc quyền nhóm</th>\n                  <th class=\"p-2 border-b\">Độc quyền thuần túy</th>\n                </tr>\n              </thead>\n              <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800\">\n                <tr><td class=\"p-2 font-semibold\">Số lượng người bán</td><td class=\"p-2\">Rất nhiều</td><td class=\"p-2\">Nhiều</td><td class=\"p-2\">Một vài doanh nghiệp lớn</td><td class=\"p-2\">Duy nhất 1 người bán</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Tính chất sản phẩm</td><td class=\"p-2\">Đồng nhất 100%</td><td class=\"p-2\">Có sự phân biệt</td><td class=\"p-2\">Đồng nhất hoặc phân biệt</td><td class=\"p-2\">Duy nhất, không có thay thế</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Quyền lực định giá</td><td class=\"p-2\">Chấp nhận giá (P = MR)</td><td class=\"p-2\">Nhỏ (P > MC)</td><td class=\"p-2\">Lớn (phụ thuộc đối thủ)</td><td class=\"p-2\">Định giá độc quyền (P > MC)</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Rào cản gia nhập</td><td class=\"p-2\">Tự do hoàn toàn</td><td class=\"p-2\">Tự do</td><td class=\"p-2\">Đáng kể</td><td class=\"p-2\">Rất cao (độc quyền tự nhiên, pháp lý)</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Lợi nhuận dài hạn</td><td class=\"p-2\">π = 0 (P = ATC_min)</td><td class=\"p-2\">π = 0 (P = ATC, năng lực thừa)</td><td class=\"p-2\">Có thể > 0</td><td class=\"p-2\">Bền vững > 0</td></tr>\n              </tbody>\n            </table>\n          </div>\n        "
      },
      {
        "heading": "2. Độc Quyền Thuần Túy: Quyết Định Giá & Chỉ Số Lerner",
        "content": "\n          <p class=\"text-sm mb-2\">Nhà độc quyền sản xuất tại $MR = MC$. Vì đường cầu dốc xuống nên $MR < P$ ở mọi $Q > 0$.</p>\n          <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-700 text-xs font-mono space-y-1\">\n            <p>• Hàm cầu tuyến tính P = a - bQ => Doanh thu cận biên MR = a - 2bQ</p>\n            <p>• Chỉ số Lerner đo quyền lực thị trường: L = (P - MC) / P = 1 / |E_d|</p>\n            <p>• Nguyên tắc định giá độc quyền: P = MC / (1 - 1/|E_d|)</p>\n          </div>\n          <p class=\"text-xs text-rose-600 dark:text-rose-400 font-semibold mt-2\">Hậu quả của độc quyền: Bán giá cao hơn ($P_M > P_C$) và sản lượng ít hơn ($Q_M < Q_C$) so với cạnh tranh hoàn hảo, tạo ra Tam giác Tổn thất vô ích ($DWL$).</p>\n        "
      },
      {
        "heading": "3. Độc Quyền Nhóm & Lý Thuyết Trò Chơi (Game Theory)",
        "content": "\n          <p class=\"text-sm mb-2\">Đặc trưng cốt lõi của Độc quyền nhóm là <strong>Tính phụ thuộc lẫn nhau (Strategic Interdependence)</strong>.</p>\n          <ul class=\"text-xs space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n            <li><strong>Thế lưỡng nan của người tù (Prisoner's Dilemma):</strong> Cả 2 bên đều có chiến lược thống trị là phản bội/cạnh tranh, dẫn đến kết cục tệ hơn cho cả hai so với khi hợp tác.</li>\n            <li><strong>Cân bằng Nash (Nash Equilibrium):</strong> Trạng thái mà mỗi người chơi chọn chiến lược tốt nhất cho mình với điều kiện đã biết trước chiến lược của đối thủ. Không ai có động cơ đơn phương thay đổi chiến lược.</li>\n            <li><strong>Cartel (Liên minh cấu kết như OPEC):</strong> Rất khó duy trì bền vững vì mỗi thành viên luôn có động cơ ngầm lén lút gian lận sản lượng để kiếm thêm lợi nhuận.</li>\n          </ul>\n        "
      },
      {
        "heading": "4. ⭐ Chuyên Đề Phân Loại A+: Cournot, Stackelberg, Đường Cầu Gãy Khúc & Bất Đối Xứng Thông Tin",
        "content": "\n          <div class=\"p-3.5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-slate-900 dark:to-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 my-2 text-xs space-y-2\">\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase\">A. Ba mô hình độc quyền nhóm định lượng:</p>\n            <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2\">\n              <div class=\"p-2.5 bg-white dark:bg-slate-800 rounded border border-indigo-100 dark:border-slate-700\">\n                <p class=\"font-bold text-indigo-600 dark:text-indigo-400\">1. Cournot (Đồng thời)</p>\n                <p class=\"text-slate-600 dark:text-slate-300 mt-0.5\">Mỗi bên coi sản lượng của đối phương là cố định để giải $MR_i = MC_i \\implies$ Lập hàm phản ứng $Q_i = R_i(Q_{-i})$. Cân bằng là giao điểm 2 hàm phản ứng.</p>\n              </div>\n              <div class=\"p-2.5 bg-white dark:bg-slate-800 rounded border border-indigo-100 dark:border-slate-700\">\n                <p class=\"font-bold text-purple-600 dark:text-purple-400\">2. Stackelberg (Dẫn đầu)</p>\n                <p class=\"text-slate-600 dark:text-slate-300 mt-0.5\">Doanh nghiệp dẫn đầu (Leader) đi trước, thế trực tiếp hàm phản ứng của Follower vào hàm cầu của mình $\\implies$ Chiếm thị phần áp đảo và đạt lợi nhuận cực đại.</p>\n              </div>\n              <div class=\"p-2.5 bg-white dark:bg-slate-800 rounded border border-indigo-100 dark:border-slate-700\">\n                <p class=\"font-bold text-emerald-600 dark:text-emerald-400\">3. Sweezy (Cầu gãy khúc)</p>\n                <p class=\"text-slate-600 dark:text-slate-300 mt-0.5\">Giả định: 'Tăng giá đối thủ không theo, hạ giá đối thủ hạ theo' $\\implies$ Đường $MR$ đứt đoạn thẳng đứng, giải thích tính cứng nhắc của giá cả.</p>\n              </div>\n            </div>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase pt-1\">B. Bất đối xứng thông tin (Nobel George Akerlof & Joseph Stiglitz):</p>\n            <ul class=\"list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 pl-1\">\n              <li><strong>Lựa chọn bất lợi (Adverse Selection - Thông tin ẩn TRƯỚC ký kết):</strong> Thị trường xe cũ (Market for Lemons) và thị trường bảo hiểm y tế. Người mua chỉ trả giá trung bình khiến hàng tốt rút lui, thị trường suy thoái. <em>Giải pháp:</em> Phát tín hiệu (Signaling - bảo hành, bằng cấp) và Sàng lọc (Screening).</li>\n              <li><strong>Rủi ro đạo đức (Moral Hazard - Hành vi ẩn SAU ký kết):</strong> Khi được bảo hiểm bảo vệ đầy đủ, người được bảo hiểm hành xử bất cẩn hơn. <em>Giải pháp:</em> Mức khấu trừ (Deductible) và Đồng chi trả (Copay).</li>\n            </ul>\n          </div>\n        "
      }
    ]
  },
  {
    "id": "chap-7",
    "category": "macro",
    "number": 7,
    "title": "Đo Lường Sản Lượng Quốc Gia (GDP)",
    "subtitle": "3 phương pháp tính GDP, phân biệt GDP danh nghĩa vs thực tế, và chỉ số điều chỉnh GDP Deflator",
    "overview": "Kinh tế vĩ mô nghiên cứu nền kinh tế trên giác độ tổng thể. Tổng sản phẩm quốc nội (GDP) là thước đo quan trọng nhất về quy mô sản xuất và thu nhập của một quốc gia.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 23: Measuring a Nation's Income",
    "sections": [
      {
        "heading": "1. Định Nghĩa Chuẩn Về GDP & 3 Phương Pháp Đo Lường",
        "content": "\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-xs mb-3\">\n            <strong>Định nghĩa Mankiw:</strong> GDP là giá trị thị trường của tất cả hàng hóa và dịch vụ <strong>CUỐI CÙNG</strong> được sản xuất ra <strong>TRONG PHẠM VI MỘT QUỐC GIA</strong> trong một <strong>THỜI KỲ NHẤT ĐỊNH</strong>.\n          </div>\n          <div class=\"space-y-2 text-xs\">\n            <p><strong>1. Phương pháp chi tiêu (Expenditure Approach):</strong> $$GDP = C + I + G + NX$$</p>\n            <p class=\"ml-3 text-slate-600 dark:text-slate-300\">• $C$: Tiêu dùng hộ gia đình (không gồm nhà mới).<br>• $I$: Đầu tư tư nhân (máy móc mới, hàng tồn kho mới, và NHÀ MỚI).<br>• $G$: Chi mua sắm của chính phủ (KHÔNG gồm trợ cấp $Tr$).<br>• $NX = X - IM$: Xuất khẩu ròng.</p>\n            <p><strong>2. Phương pháp thu nhập (Income Approach):</strong> $$GDP = W + R + i + \\pi + De + Te$$ (Tiền lương + Tiền thuê đất + Tiền lãi + Lợi nhuận + Khấu hao + Thuế gián thu ròng).</p>\n            <p><strong>3. Phương pháp giá trị gia tăng (Value-Added Approach):</strong> $$GDP = \\sum VA = \\sum (Giá\\,trị\\,xuất\\,xưởng - Chi\\,phí\\,trung\\,gian)$$</p>\n          </div>\n        "
      },
      {
        "heading": "2. GDP Danh Nghĩa vs GDP Thực Tế & GDP Deflator",
        "content": "\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono space-y-1.5\">\n            <p>• GDP danh nghĩa (Nominal GDP): GDP_n = ∑ (P_t × Q_t)</p>\n            <p>• GDP thực tế (Real GDP): GDP_r = ∑ (P_base × Q_t)</p>\n            <p>• Chỉ số điều chỉnh GDP: GDP Deflator = (GDP_n / GDP_r) × 100</p>\n            <p>• Tốc độ tăng trưởng kinh tế: g = (GDP_r(t) - GDP_r(t-1)) / GDP_r(t-1) × 100%</p>\n          </div>\n          <p class=\"text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-2\">Chỉ có sự gia tăng của GDP THỰC TẾ mới phản ánh sự gia tăng thực sự về sản lượng hàng hóa và mức sống của người dân!</p>\n        "
      }
    ]
  },
  {
    "id": "chap-8",
    "category": "macro",
    "number": 8,
    "title": "Tăng Trưởng Kinh Tế & Năng Suất Lao Động",
    "subtitle": "Hàm sản xuất Solow, 4 nhân tố quyết định năng suất, hiệu ứng đuổi kịp và chính sách công",
    "overview": "Mức sống của một quốc gia phụ thuộc trực tiếp vào khả năng sản xuất hàng hóa và dịch vụ. Nghiên cứu các yếu tố dài hạn thúc đẩy sự thịnh vượng của các quốc gia.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 25: Production and Growth",
    "sections": [
      {
        "heading": "1. Hàm Sản Xuất & 4 Nhân Tố Quyết Định Năng Suất (Productivity)",
        "content": "\n          <p class=\"text-sm mb-2\">Hàm sản xuất có lợi suất không đổi theo quy mô biểu diễn dưới dạng: $$Y = A \\cdot F(L, K, H, N)$$</p>\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs my-2\">\n            <div class=\"p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong>K (Tư bản thể chất - Physical Capital):</strong> Máy móc, thiết bị, nhà xưởng dùng để sản xuất.\n            </div>\n            <div class=\"p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong>H (Vốn nhân lực - Human Capital):</strong> Tri thức, kỹ năng, kinh nghiệm và sức khỏe của lao động.\n            </div>\n            <div class=\"p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong>N (Tài nguyên thiên nhiên - Natural Resources):</strong> Đất đai, khoáng sản, tài nguyên nước.\n            </div>\n            <div class=\"p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700\">\n              <strong>A (Tri thức công nghệ - Technological Knowledge):</strong> Sự hiểu biết của xã hội về cách thức tốt nhất để sản xuất.\n            </div>\n          </div>\n        "
      },
      {
        "heading": "2. Hiệu Ứng Đuổi Kịp (Catch-up Effect) & Vai Trò Của Tiết Kiệm",
        "content": "\n          <p class=\"text-sm mb-2\">Quy luật <strong>Lợi suất giảm dần của tư bản (Diminishing returns to capital)</strong>: Khi mức tư bản trên mỗi lao động đã rất cao, việc trang bị thêm máy móc chỉ tạo ra rất ít sản lượng tăng thêm.</p>\n          <div class=\"p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 text-xs text-emerald-900 dark:text-emerald-300\">\n            <strong>Hiệu ứng đuổi kịp (Catch-up Effect):</strong> Các nước nghèo bắt đầu với mức trang bị tư bản rất thấp, nên mỗi đơn vị vốn đầu tư bổ sung mang lại mức tăng năng suất vượt bậc, giúp các nước nghèo có xu hướng tăng trưởng nhanh hơn các nước giàu. Trong dài hạn, tăng trưởng bền vững bắt buộc phải nhờ vào Tiến bộ công nghệ (A).\n          </div>\n        "
      }
    ]
  },
  {
    "id": "chap-9",
    "category": "macro",
    "number": 9,
    "title": "Lạm Phát, Chỉ Số CPI & Thị Trường Lao Động",
    "subtitle": "Cách tính CPI, 3 sai lệch của CPI, phân biệt CPI vs Deflator, 3 loại thất nghiệp và quy luật Okun",
    "overview": "Hai thách thức vĩ mô lớn nhất đối với mọi nền kinh tế là kiểm soát giá cả (lạm phát) và duy trì việc làm (hạ thấp tỷ lệ thất nghiệp).",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 24: Measuring the Cost of Living & Chương 28: Unemployment",
    "sections": [
      {
        "heading": "1. Chỉ Số Giá Tiêu Dùng (CPI) & 3 Sai Lệch Kinh Điển",
        "content": "\n          <p class=\"text-sm mb-2\">CPI đo lường mức giá trung bình của một <strong>giỏ hàng hóa cố định</strong> do người tiêu dùng điển hình mua sắm: $$CPI = \\frac{\\text{Chi phí giỏ hàng năm t}}{\\text{Chi phí giỏ hàng năm gốc}} \\times 100$$</p>\n          <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 text-xs text-amber-900 dark:text-amber-300 space-y-1\">\n            <strong>3 sai lệch khiến CPI thường thổi phồng chi phí sinh hoạt thực tế:</strong><br>\n            1. <em>Sai lệch thay thế (Substitution bias):</em> Người tiêu dùng chuyển sang mua hàng rẻ hơn khi giá biến động, nhưng giỏ hàng CPI cố định không cập nhật kịp.<br>\n            2. <em>Sự ra đời của hàng hóa mới:</em> Hàng hóa mới tăng sự lựa chọn và làm tăng sức mua của đồng tiền.<br>\n            3. <em>Thay đổi chất lượng không được lượng hóa:</em> Giá tăng do sản phẩm thông minh hơn, bền hơn chứ không đơn thuần do lạm phát.\n          </div>\n        "
      },
      {
        "heading": "2. Bảng Đối Chiếu: CPI vs Chỉ Số Điều Chỉnh GDP (GDP Deflator)",
        "content": "\n          <div class=\"overflow-x-auto my-2\">\n            <table class=\"w-full text-xs text-left border border-slate-200 dark:border-slate-700\">\n              <thead class=\"bg-slate-100 dark:bg-slate-800 font-bold\">\n                <tr><th class=\"p-2 border-b\">Tiêu chí</th><th class=\"p-2 border-b\">CPI</th><th class=\"p-2 border-b\">GDP Deflator</th></tr>\n              </thead>\n              <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800\">\n                <tr><td class=\"p-2 font-semibold\">Phạm vi hàng hóa</td><td class=\"p-2\">Chỉ tính hàng tiêu dùng của hộ gia đình</td><td class=\"p-2\">Tính TẤT CẢ hàng hóa sản xuất trong nước (gồm cả máy móc, chi tiêu chính phủ)</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Hàng nhập khẩu</td><td class=\"p-2 font-bold text-rose-600\">CÓ tính (nếu là hàng tiêu dùng nhập khẩu)</td><td class=\"p-2 font-bold text-emerald-600\">KHÔNG tính (vì chỉ đo lường sản xuất nội địa)</td></tr>\n                <tr><td class=\"p-2 font-semibold\">Cơ cấu giỏ hàng</td><td class=\"p-2\">Giỏ hàng CỐ ĐỊNH (chỉ số Laspeyres)</td><td class=\"p-2\">Giỏ hàng THAY ĐỔI theo năm hiện hành (chỉ số Paasche)</td></tr>\n              </tbody>\n            </table>\n          </div>\n        "
      },
      {
        "heading": "3. Ba Loại Thất Nghiệp & Tỷ Lệ Thất Nghiệp Tự Nhiên (un)",
        "content": "\n          <p class=\"text-sm mb-2\">Lực lượng lao động (Labor Force) = Số người có việc + Số người thất nghiệp. Tỷ lệ thất nghiệp: $u = (\\text{Thất nghiệp} / \\text{Lực lượng lao động}) \\times 100\\%$.</p>\n          <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2 my-2 text-xs\">\n            <div class=\"p-2.5 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700\">\n              <strong>1. Thất nghiệp ma sát (Frictional):</strong> Xảy ra do người lao động cần thời gian tìm kiếm công việc phù hợp với sở thích và kỹ năng (tự nguyện, ngắn hạn).\n            </div>\n            <div class=\"p-2.5 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700\">\n              <strong>2. Thất nghiệp cơ cấu (Structural):</strong> Xảy ra do sự không ăn khớp giữa kỹ năng của người lao động và yêu cầu công việc mới, hoặc do mức lương bị cứng nhắc trên mức cân bằng (luật lương tối thiểu, công đoàn).\n            </div>\n            <div class=\"p-2.5 bg-rose-50 dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-slate-700\">\n              <strong>3. Thất nghiệp chu kỳ (Cyclical):</strong> Biến động gắn liền với chu kỳ kinh tế ngắn hạn (suy thoái kinh tế làm tổng cầu sụt giảm).\n            </div>\n          </div>\n          <p class=\"text-xs text-indigo-700 dark:text-indigo-300 font-bold mt-1\">Tỷ lệ thất nghiệp tự nhiên: $u_n = u_{ma\\,sát} + u_{cơ\\,cấu}$. Đây là mức thất nghiệp bình thường mà nền kinh tế duy trì trong dài hạn.</p>\n        "
      }
    ]
  },
  {
    "id": "chap-10",
    "category": "macro",
    "number": 10,
    "title": "Hệ Thống Tiền Tệ & Chính Sách Tiền Tệ",
    "subtitle": "Hệ thống ngân hàng dự trữ một phần, số nhân tiền mm, 3 công cụ của NHTW và phương trình số lượng",
    "overview": "Nghiên cứu bản chất của tiền tệ, cơ chế tạo tiền của các ngân hàng thương mại và cách Ngân hàng Trung ương điều tiết cung tiền để kiểm soát lạm phát và ổn định kinh tế vĩ mô.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 29: The Monetary System & Chương 30: Money Growth and Inflation",
    "sections": [
      {
        "heading": "1. Cơ Chế Tạo Tiền & Số Nhân Tiền Tệ (Money Multiplier)",
        "content": "\n          <p class=\"text-sm mb-2\">Hệ thống ngân hàng dự trữ một phần (Fractional Reserve Banking): Ngân hàng nhận tiền gửi, giữ lại một tỷ lệ dự trữ ($rr$) và cho vay phần còn lại, tạo ra tiền mới cho lưu thông.</p>\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-xs font-mono space-y-1 my-2\">\n            <p>• Cơ số tiền tệ: MB = C (Tiền mặt ngoài NH) + R (Dự trữ trong NH)</p>\n            <p>• Khối tiền cung ứng: MS = C + D (Tiền gửi không kỳ hạn)</p>\n            <p>• Đặt cr = C/D (tỷ lệ tiền mặt), rr = R/D (tỷ lệ dự trữ)</p>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200\">• Số nhân tiền thực tế: mm = (cr + 1) / (cr + rr)</p>\n            <p>• Cung tiền toàn nền kinh tế: MS = mm × MB</p>\n          </div>\n        "
      },
      {
        "heading": "2. Ba Công Cụ Điều Hành Của Ngân Hàng Trung Ương",
        "content": "\n          <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2 my-2 text-xs\">\n            <div class=\"p-2.5 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700\">\n              <strong>1. Nghiệp vụ thị trường mở (OMO):</strong> Mua/bán trái phiếu chính phủ. Mua = Bơm tiền (MS tăng). Bán = Hút tiền về (MS giảm).\n            </div>\n            <div class=\"p-2.5 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700\">\n              <strong>2. Tỷ lệ dự trữ bắt buộc (rr):</strong> Tăng rr làm giảm số nhân tiền tệ mm -> Giảm cung tiền MS.\n            </div>\n            <div class=\"p-2.5 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700\">\n              <strong>3. Lãi suất chiết khấu (Discount Rate):</strong> Lãi suất NHTW cho NHTM vay. Tăng lãi suất chiết khấu làm NHTM hạn chế đi vay -> Giảm cung tiền.\n            </div>\n          </div>\n        "
      },
      {
        "heading": "3. Phương Trình Số Lượng & Tính Trung Tính Của Tiền Tệ",
        "content": "\n          <p class=\"text-sm mb-2\">Phương trình số lượng tiền tệ kinh điển của Fisher: $$M \\cdot V = P \\cdot Y$$</p>\n          <p class=\"text-xs text-slate-700 dark:text-slate-300 mb-2\">• $M$: Khối lượng tiền; $V$: Tốc độ lưu thông tiền; $P$: Mức giá chung; $Y$: GDP thực tế.</p>\n          <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 text-xs text-amber-900 dark:text-amber-300\">\n            <strong>Tính trung tính của tiền tệ (Monetary Neutrality):</strong> Trong dài hạn, tốc độ lưu thông tiền $V$ và GDP thực tế $Y$ được xác định bởi nguồn lực thực (lao động, tư bản, công nghệ). Do đó, sự thay đổi cung tiền $M$ chỉ làm thay đổi tỷ lệ thuận mức giá danh nghĩa $P$ (gây ra lạm phát), hoàn toàn KHÔNG THỂ làm tăng sản lượng thực tế trong dài hạn!\n          </div>\n        "
      }
    ]
  },
  {
    "id": "chap-11",
    "category": "macro",
    "number": 11,
    "title": "Mô Hình Tổng Cung - Tổng Cầu (AD-AS) & Chính Sách Tài Khóa",
    "subtitle": "Độ dốc đường AD, tổng cung ngắn hạn vs dài hạn, số nhân Keynes và hiện tượng lấn át đầu tư",
    "overview": "Mô hình AD-AS là công cụ trung tâm để giải thích các biến động kinh tế ngắn hạn và phân tích tác động của các chính sách ổn định hóa nền kinh tế.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 33: Aggregate Demand and Aggregate Supply & Chương 34: The Influence of Monetary and Fiscal Policy on Aggregate Demand & Chương 35: The Short-Run Trade-off between Inflation and Unemployment",
    "sections": [
      {
        "heading": "1. Tại Sao Đường Tổng Cầu (AD) Dốc Xuống? (3 Hiệu Ứng Vĩ Mô)",
        "content": "\n          <p class=\"text-sm mb-2\">Khác biệt hoàn toàn với vi mô (không phải do hiệu ứng thay thế), đường $AD$ dốc xuống bởi 3 lý do vĩ mô:</p>\n          <ul class=\"text-xs space-y-1.5 text-slate-700 dark:text-slate-300 list-disc list-inside\">\n            <li><strong>1. Hiệu ứng của cải Pigou ($P \\downarrow \\implies C \\uparrow$):</strong> Mức giá giảm làm tăng giá trị thực của lượng tiền người dân nắm giữ, họ cảm thấy giàu có hơn và chi tiêu tiêu dùng ($C$) nhiều hơn.</li>\n            <li><strong>2. Hiệu ứng lãi suất Keynes ($P \\downarrow \\implies I \\uparrow$):</strong> Mức giá giảm làm giảm nhu cầu giữ tiền mặt, người dân mua trái phiếu hoặc gửi ngân hàng -> Lãi suất giảm -> Doanh nghiệp vay vốn đầu tư ($I$) nhiều hơn.</li>\n            <li><strong>3. Hiệu ứng tỷ giá Mundell-Fleming ($P \\downarrow \\implies NX \\uparrow$):</strong> Lãi suất trong nước giảm làm dòng vốn chảy ra nước ngoài, đồng nội tệ giảm giá -> Hàng xuất khẩu rẻ hơn, nhập khẩu đắt hơn -> Xuất khẩu ròng ($NX$) tăng.</li>\n          </ul>\n        "
      },
      {
        "heading": "2. Đường Tổng Cung: Ngắn Hạn (SRAS) vs Dài Hạn (LRAS)",
        "content": "\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs\">\n            <div class=\"p-3 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-blue-700 dark:text-blue-300 mb-1\">TỔNG CUNG NGẮN HẠN (SRAS)</h5>\n              <p>• Dốc lên từ trái sang phải: Khi mức giá $P$ tăng cao hơn kỳ vọng, sản lượng thực tế tạm thời vượt sản lượng tiềm năng.</p>\n              <p>• Giải thích bằng 3 lý thuyết: Tiền lương kết dính (Sticky-wage), Giá cả kết dính (Sticky-price), và Sự ngộ nhận của người sản xuất (Misperceptions).</p>\n            </div>\n            <div class=\"p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700\">\n              <h5 class=\"font-bold text-emerald-700 dark:text-emerald-300 mb-1\">TỔNG CUNG DÀI HẠN (LRAS)</h5>\n              <p>• Là một ĐƯỜNG THẲNG ĐỨNG tại mức Sản lượng tiềm năng tự nhiên ($Y_p$).</p>\n              <p>• Trong dài hạn, mức giá không ảnh hưởng đến sản lượng. Sản lượng chỉ phụ thuộc vào Lao động, Tư bản và Trình độ công nghệ.</p>\n            </div>\n          </div>\n        "
      },
      {
        "heading": "3. Số Nhân Chi Tiêu Keynes & Hiện Tượng Lấn Át (Crowding-out)",
        "content": "\n          <p class=\"text-sm mb-2\">Chính sách tài khóa mở rộng thông qua tăng chi tiêu chính phủ $\\Delta G$ hoặc giảm thuế $\\Delta T$:</p>\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono space-y-1\">\n            <p>• Số nhân chi tiêu: k = 1 / [1 - MPC(1 - t)]</p>\n            <p>• Mức tăng sản lượng lý thuyết: ΔY = k × ΔG</p>\n          </div>\n          <p class=\"text-xs text-rose-600 dark:text-rose-400 font-semibold mt-2\">Hiện tượng lấn át (Crowding-out effect): Khi chính phủ vay mượn để chi tiêu, lãi suất thị trường bị đẩy lên cao, làm giảm bớt đầu tư tư nhân ($I$), khiến sản lượng thực tế mở rộng ít hơn mức dự tính ban đầu của số nhân Keynes.</p>\n        "
      },
      {
        "heading": "4. Đường Cong Phillips: Đánh Đổi Trong Ngắn Hạn vs Thẳng Đứng Trong Dài Hạn",
        "content": "\n          <p class=\"text-xs text-slate-700 dark:text-slate-300\">\n            • Trong ngắn hạn: Có sự đánh đổi nghịch biến giữa Lạm phát và Thất nghiệp.<br>\n            • Trong dài hạn: Khi kỳ vọng lạm phát được điều chỉnh, Đường Phillips dài hạn (LRPC) là một đường thẳng đứng tại mức Tỷ lệ thất nghiệp tự nhiên ($u_n$). Mọi nỗ lực hạ thấp thất nghiệp dưới mức tự nhiên bằng chính sách tiền tệ chỉ dẫn đến lạm phát phi mã.\n          </p>\n        "
      },
      {
        "heading": "5. ⭐ Chuyên Đề Phân Loại A+: Quy Tắc Taylor, Cú Sốc Đình Lạm & Tương Đương Ricardo",
        "content": "\n          <div class=\"p-3.5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-slate-900 dark:to-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 my-2 text-xs space-y-2\">\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase\">A. Quy tắc điều hành lãi suất Taylor (Taylor Rule):</p>\n            <p class=\"text-slate-700 dark:text-slate-300\">$$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$$</p>\n            <p class=\"text-slate-600 dark:text-slate-300\"><em>Nguyên lý Taylor:</em> Khi lạm phát tăng thêm 1%, NHTW phải tăng lãi suất danh nghĩa $i$ nhiều hơn 1% (hệ số $1 + 0.5 = 1.5$) để đảm bảo <strong>lãi suất thực tế $r = i - \\pi$ tăng lên</strong>, kéo giảm tổng cầu để dập tắt lạm phát.</p>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase pt-1\">B. Cú sốc cung & Đình lạm (Stagflation):</p>\n            <p class=\"text-slate-600 dark:text-slate-300\">Cú sốc giá nguyên liệu đẩy $SRAS$ dịch trái $\\implies$ Sản lượng $Y$ giảm (suy thoái/thất nghiệp) trong khi Mức giá $P$ tăng (lạm phát). Cơ chế tự điều chỉnh: Thất nghiệp cao làm tiền lương danh nghĩa giảm dần trong dài hạn, đưa $SRAS$ dịch chuyển trở lại điểm cân bằng tiềm năng $LRAS$.</p>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase pt-1\">C. Học thuyết Tương đương Ricardo (Ricardian Equivalence):</p>\n            <p class=\"text-slate-600 dark:text-slate-300\">Cắt giảm thuế tài trợ bằng nợ công không kích thích tiêu dùng vì người dân duy lý sẽ tăng tiết kiệm để dành tiền đóng thuế tương lai, làm triệt tiêu số nhân tài khóa.</p>\n          </div>\n        "
      }
    ]
  },
  {
    "id": "chap-12",
    "category": "macro",
    "number": 12,
    "title": "Kinh Tế Vĩ Mô Trong Nền Kinh Tế Mở",
    "subtitle": "Đồng nhất thức S = I + NCO, tỷ giá danh nghĩa vs thực tế, ngang giá sức mua (PPP) và chính sách thương mại",
    "overview": "Trong thế giới toàn cầu hóa, một nền kinh tế tương tác với các quốc gia khác thông qua xuất nhập khẩu hàng hóa dịch vụ và các dòng vốn đầu tư xuyên biên giới.",
    "mankiwRef": "Principles of Economics (Mankiw) - Chương 31: Open-Economy Macroeconomics: Basic Concepts & Chương 32: A Macroeconomic Theory of the Open Economy",
    "sections": [
      {
        "heading": "1. Đồng Nhất Thức Tài Khoản Quốc Dân Trong Nền Kinh Tế Mở",
        "content": "\n          <div class=\"p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 text-xs font-mono space-y-1.5 my-2\">\n            <p>• Dòng vốn ra ròng (NCO) = Mua tài sản nước ngoài của cư dân - Mua tài sản trong nước của người nước ngoài</p>\n            <p>• Đồng nhất thức cơ bản: NCO = NX (Dòng vốn ra ròng luôn bằng Xuất khẩu ròng)</p>\n            <p>• Tiết kiệm quốc dân: S = I + NCO = I + NX</p>\n            <p class=\"text-indigo-900 dark:text-indigo-200 font-bold\">• Thâm hụt thương mại (NX < 0) <=> S < I (Tiết kiệm trong nước nhỏ hơn Đầu tư trong nước)</p>\n          </div>\n        "
      },
      {
        "heading": "2. Tỷ Giá Thực Tế & Học Thuyết Ngang Giá Sức Mua (PPP)",
        "content": "\n          <p class=\"text-sm mb-2\">Tỷ giá thực tế ($e_r$) đo lường tỷ lệ trao đổi hàng hóa giữa hai quốc gia: $$e_r = \\frac{e \\times P}{P^*}$$</p>\n          <div class=\"p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1\">\n            <p>• $e$: Tỷ giá hối đoái danh nghĩa (VND/USD).</p>\n            <p>• $P$: Mức giá trong nước; $P^*$: Mức giá nước ngoài.</p>\n            <p class=\"font-bold text-emerald-600 dark:text-emerald-400\">• Học thuyết Ngang giá sức mua (PPP):</p>\n            <p>Trong dài hạn, 1 đơn vị tiền tệ phải mua được cùng một lượng hàng hóa ở mọi quốc gia (Quy luật một giá). Khi đó tỷ giá danh nghĩa cân bằng là: $e = P^* / P$.</p>\n          </div>\n        "
      },
      {
        "heading": "3. Tác Động Của Hàng Rào Thuế Quan & Hạn Ngạch Nhập Khẩu",
        "content": "\n          <div class=\"p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 text-xs text-amber-900 dark:text-amber-300\">\n            <strong>Kết luận gây ngạc nhiên của Mankiw:</strong> Chính sách thuế quan hoặc hạn ngạch nhập khẩu KHÔNG HỀ LÀM THAY ĐỔI Cán cân thương mại ($NX$) của một quốc gia!<br>\n            <em>Giải thích:</em> Đánh thuế nhập khẩu làm giảm nhập khẩu, nhưng đồng thời làm đồng nội tệ tăng giá thực tế, khiến xuất khẩu bị sụt giảm đúng bằng lượng nhập khẩu giảm đi. Kết quả: $NX = S - I$ vẫn giữ nguyên không đổi, trong khi quy mô thương mại toàn cầu bị thu hẹp và phúc lợi xã hội bị tổn thất!\n          </div>\n        "
      },
      {
        "heading": "4. ⭐ Chuyên Đề Phân Loại A+: Mô Hình Mundell - Fleming & Bộ Ba Bất Khả Thi (Trilemma)",
        "content": "\n          <div class=\"p-3.5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-slate-900 dark:to-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 my-2 text-xs space-y-2\">\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase\">A. Hiệu lực chính sách trong Mô hình Mundell - Fleming (IS-LM-BP):</p>\n            <div class=\"overflow-x-auto\">\n              <table class=\"w-full text-xs text-left border border-slate-200 dark:border-slate-700\">\n                <thead class=\"bg-white dark:bg-slate-800 font-bold\">\n                  <tr>\n                    <th class=\"p-2 border-b\">Chính sách vĩ mô</th>\n                    <th class=\"p-2 border-b text-indigo-600 dark:text-indigo-400\">TỶ GIÁ THẢ NỔI</th>\n                    <th class=\"p-2 border-b text-emerald-600 dark:text-emerald-400\">TỶ GIÁ CỐ ĐỊNH</th>\n                  </tr>\n                </thead>\n                <tbody class=\"divide-y divide-slate-100 dark:divide-slate-800\">\n                  <tr><td class=\"p-2 font-semibold\">Tài khóa mở rộng (G ↑, T ↓)</td><td class=\"p-2 text-rose-600 font-bold\">VÔ HIỆU (e ↑ làm NX ↓ triệt tiêu hết)</td><td class=\"p-2 text-emerald-600 font-bold\">HIỆU LỰC TỐI ĐA (Y ↑ rất mạnh)</td></tr>\n                  <tr><td class=\"p-2 font-semibold\">Tiền tệ mở rộng (M ↑)</td><td class=\"p-2 text-emerald-600 font-bold\">HIỆU LỰC TỐI ĐA (e ↓ làm NX ↑ rất mạnh)</td><td class=\"p-2 text-rose-600 font-bold\">VÔ HIỆU (NHTW mất quyền tự chủ tiền tệ)</td></tr>\n                  <tr><td class=\"p-2 font-semibold\">Hạn chế thương mại (Thuế quan)</td><td class=\"p-2\">VÔ HIỆU với Y (chỉ làm e ↑)</td><td class=\"p-2\">Làm tăng Y (nhưng gây tổn thất phúc lợi)</td></tr>\n                </tbody>\n              </table>\n            </div>\n            <p class=\"font-bold text-indigo-900 dark:text-indigo-200 uppercase pt-1\">B. Bộ Ba Bất Khả Thi (The Impossible Trinity / Trilemma):</p>\n            <p class=\"text-slate-600 dark:text-slate-300\">Một quốc gia không bao giờ có thể đạt được cùng lúc cả 3 điều kiện: (1) Tỷ giá hối đoái cố định, (2) Dòng vốn tự do luân chuyển, và (3) Chính sách tiền tệ độc lập. Bắt buộc phải hy sinh 1 trong 3 đỉnh của tam giác Trilemma.</p>\n          </div>\n        "
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = THEORY_DATA;
}
