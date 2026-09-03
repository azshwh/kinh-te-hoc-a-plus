// Cơ sở dữ liệu Lý thuyết Chuyên sâu 12 Chương môn Kinh tế học đại cương
// Biên soạn chuẩn mực theo giáo trình N. Gregory Mankiw và đề thi đại học
const THEORY_DATA = [
  {
    id: "chap-1",
    category: "micro",
    number: 1,
    title: "Khái Quát Về Kinh Tế Học & 10 Nguyên Lý Cơ Bản",
    subtitle: "Bản chất của sự khan hiếm, chi phí cơ hội và tư duy cận biên",
    overview: "Kinh tế học là môn khoa học xã hội nghiên cứu cách thức xã hội quản lý các nguồn lực khan hiếm của mình để thỏa mãn những nhu cầu vô hạn của con người. Nền tảng của toàn bộ kinh tế học hiện đại được tóm lược qua 10 nguyên lý của GS. N. Gregory Mankiw (Đại học Harvard).",
    sections: [
      {
        heading: "1. Sự Khan Hiếm & Chi Phí Cơ Hội (Opportunity Cost)",
        content: `
          <p class="mb-2"><strong>Sự khan hiếm (Scarcity):</strong> Bản chất nguồn lực của xã hội (lao động, đất đai, tư bản, công nghệ) là có hạn, trong khi nhu cầu của con người là vô hạn. Do đó, mọi cá nhân và xã hội đều phải <em>đánh đổi (Trade-off)</em>.</p>
          <div class="bg-indigo-50 dark:bg-slate-800 p-4 rounded-xl border border-indigo-200 dark:border-slate-700 my-3 text-sm">
            <p class="font-bold text-indigo-900 dark:text-indigo-200 mb-1">Định nghĩa Chuẩn Điểm A+ về Chi Phí Cơ Hội:</p>
            <p>Chi phí cơ hội của một phương án là <strong>giá trị của cơ hội tốt nhất bị bỏ qua</strong> khi thực hiện phương án đó. Nó bao gồm cả <em>Chi phí hiện (Explicit cost)</em> là số tiền thực tế phải chi trả, và <em>Chi phí ẩn (Implicit cost)</em> là khoản thu nhập hoặc lợi ích bị mất đi do không lựa chọn phương án thay thế.</p>
          </div>
          <p class="text-sm"><strong>Ví dụ thi cử:</strong> Khi bạn quyết định dành 4 năm học đại học, chi phí cơ hội KHÔNG CHỈ là tiền học phí + tiền sách vở (chi phí hiện), mà khoản lớn nhất chính là <em>tiền lương bạn có thể kiếm được nếu đi làm ngay sau khi tốt nghiệp cấp 3 (chi phí ẩn)</em>!</p>
        `
      },
      {
        heading: "2. Đường Giới Hạn Khả Năng Sản Xuất (PPF - Production Possibilities Frontier)",
        content: `
          <p class="mb-2">Đường PPF thể hiện các kết hợp tối đa giữa hai loại hàng hóa mà nền kinh tế có thể sản xuất khi sử dụng toàn bộ và hiệu quả các nguồn lực hiện có.</p>
          <ul class="list-disc list-inside space-y-1 text-sm mb-3">
            <li><strong>Các điểm nằm TRÊN đường PPF:</strong> Sản xuất hiệu quả (không lãng phí nguồn lực).</li>
            <li><strong>Các điểm nằm BÊN TRONG đường PPF:</strong> Sản xuất không hiệu quả (còn lãng phí nguồn lực, thất nghiệp).</li>
            <li><strong>Các điểm nằm BÊN NGOÀI đường PPF:</strong> Không thể đạt tới được với trình độ công nghệ và nguồn lực hiện tại (chỉ đạt được khi có tăng trưởng kinh tế).</li>
          </ul>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300">
            <strong>Tại sao đường PPF có dạng cong lồi ra ngoài (Bowed out)?</strong> Vì quy luật <em>Chi phí cơ hội tăng dần</em>: các nguồn lực không hoàn toàn thích hợp như nhau cho mọi ngành sản xuất. Khi chuyển dần lao động từ trồng trọt sang sản xuất ô tô, những người chuyển sang sau cùng sẽ làm việc kém năng suất hơn, khiến chi phí cơ hội ngày càng cao.
          </div>
        `
      },
      {
        heading: "3. Phân Biệt: Kinh Tế Học Thực Chứng vs Kinh Tế Học Chuẩn Tắc",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700">
              <thead class="bg-slate-100 dark:bg-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border-b">Tiêu chí</th>
                  <th class="p-2.5 border-b text-indigo-600 dark:text-indigo-400">Kinh tế học Thực chứng (Positive)</th>
                  <th class="p-2.5 border-b text-emerald-600 dark:text-emerald-400">Kinh tế học Chuẩn tắc (Normative)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Bản chất</td>
                  <td class="p-2.5">Mô tả thế giới "như nó vốn có" (What is)</td>
                  <td class="p-2.5">Đưa ra khuyến nghị "nên như thế nào" (What ought to be)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Kiểm chứng</td>
                  <td class="p-2.5">Có thể kiểm chứng đúng/sai bằng dữ liệu thực nghiệm</td>
                  <td class="p-2.5">Không thể kiểm chứng bằng dữ liệu vì dựa trên giá trị đạo đức, quan điểm cá nhân</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Từ khóa nhận diện</td>
                  <td class="p-2.5">"sẽ làm...", "dẫn đến...", "tăng/giảm..."</td>
                  <td class="p-2.5">"nên...", "cần phải...", "đáng lẽ...", "công bằng/bất công"</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Ví dụ</td>
                  <td class="p-2.5">"Tăng lương tối thiểu sẽ làm tăng thất nghiệp ở lao động trẻ."</td>
                  <td class="p-2.5">"Chính phủ nên tăng lương tối thiểu để giúp người nghèo."</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-2",
    category: "micro",
    number: 2,
    title: "Cung - Cầu, Cân Bằng Thị Trường & Can Thiệp Chính Sách",
    subtitle: "Cơ chế thị trường, thặng dư xã hội, giá trần, giá sàn và tổn thất vô ích",
    overview: "Cung và Cầu là hai khái niệm nền tảng mà các nhà kinh tế học sử dụng thường xuyên nhất. Cơ chế giá cả điều tiết thị trường tự do đạt trạng thái hiệu quả, nhưng các chính sách can thiệp của chính phủ (thuế, giá trần, giá sàn) thường tạo ra sự đánh đổi giữa công bằng và hiệu quả.",
    sections: [
      {
        heading: "1. Bản Chất Đường Cầu & Phân Biệt Di Chuyển vs Dịch Chuyển",
        content: `
          <p class="mb-2 text-sm">Đường cầu thị trường phản ánh mối quan hệ nghịch biến giữa Mức giá ($P$) và Lượng cầu ($Q_D$). Có 3 lý do khiến đường cầu dốc xuống:</p>
          <ol class="list-decimal list-inside space-y-1 text-sm mb-3">
            <li><strong>Hiệu ứng thu nhập (Income Effect):</strong> Khi giá giảm, với cùng mức thu nhập danh nghĩa, sức mua thực tế của bạn tăng lên, cho phép bạn mua nhiều hàng hóa hơn.</li>
            <li><strong>Hiệu ứng thay thế (Substitution Effect):</strong> Khi giá hàng hóa X giảm, nó trở nên rẻ hơn một cách tương đối so với các hàng hóa khác, khiến bạn chuyển sang mua nhiều hàng hóa X hơn.</li>
            <li><strong>Quy luật lợi ích cận biên giảm dần (Diminishing Marginal Utility):</strong> Càng tiêu dùng nhiều một hàng hóa, sự thỏa mãn tăng thêm từ mỗi đơn vị sau càng ít đi, nên bạn chỉ chịu mua thêm khi giá giảm xuống.</li>
          </ol>
          <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800 text-xs text-red-900 dark:text-red-200">
            <strong>BẪY THI CỬ LỚN NHẤT CHƯƠNG 2:</strong><br>
            • <em>Di chuyển dọc đường cầu (Movement along):</em> CHỈ XẢY RA khi <strong>Giá của chính mặt hàng đó ($P$)</strong> thay đổi. Lượng cầu thay đổi từ $Q_1$ sang $Q_2$.<br>
            • <em>Dịch chuyển cả đường cầu (Shift of curve):</em> XẢY RA khi các <strong>yếu tố ngoài giá</strong> thay đổi: Thu nhập ($I$), Giá hàng liên quan ($P_{thay\\,thế}, P_{bổ\\,sung}$), Thị hiếu/sở thích, Kỳ vọng tương lai, Số lượng người mua.
          </div>
        `
      },
      {
        heading: "2. Cân Bằng Thị Trường, Thặng Dư Tiêu Dùng (CS) & Thặng Dư Sản Xuất (PS)",
        content: `
          <p class="text-sm mb-2">Thị trường tự do đạt cân bằng tại giao điểm $E_0 (P^*, Q^*)$ nơi $Q_D = Q_S$.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700">
              <p class="font-bold text-blue-700 dark:text-blue-300">Thặng dư tiêu dùng (CS):</p>
              <p class="mt-1">Là diện tích tam giác nằm DƯỚI đường cầu và nằm TRÊN giá cân bằng thị trường:</p>
              <p class="font-mono mt-1 font-bold">CS = 0.5 × (P_max - P*) × Q*</p>
              <p class="mt-1 text-slate-500">Phản ánh phần lợi ích ròng mà người mua nhận được thêm so với số tiền họ sẵn lòng trả.</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
              <p class="font-bold text-amber-700 dark:text-amber-300">Thặng dư sản xuất (PS):</p>
              <p class="mt-1">Là diện tích tam giác nằm TRÊN đường cung và nằm DƯỚI giá cân bằng thị trường:</p>
              <p class="font-mono mt-1 font-bold">PS = 0.5 × (P* - P_min) × Q*</p>
              <p class="mt-1 text-slate-500">Phản ánh phần doanh thu nhận được vượt trên chi phí cơ hội của việc sản xuất hàng hóa.</p>
            </div>
          </div>
        `
      },
      {
        heading: "3. Tác Động Của Thuế & Tổn Thất Vô Ích (Deadweight Loss - DWL)",
        content: `
          <p class="text-sm mb-2">Khi chính phủ đánh thuế $t$ đồng trên mỗi đơn vị sản phẩm:</p>
          <ul class="list-disc list-inside space-y-1 text-sm mb-2">
            <li>Tạo ra một <em>miếng nêm thuế (Tax Wedge)</em>: $P_b - P_s = t$.</li>
            <li>Sản lượng giao dịch trên thị trường sụt giảm từ $Q^*$ xuống $Q_t$.</li>
            <li>Doanh thu thuế của chính phủ: $T = t \times Q_t$.</li>
            <li><strong>Tổn thất vô ích (DWL):</strong> $DWL = \frac{1}{2} \times t \times (Q^* - Q_t)$.</li>
          </ul>
          <p class="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
            💡 <strong>Ý nghĩa kinh tế của DWL:</strong> Thuế ngăn cản những người mua sẵn sàng trả cao hơn chi phí của người bán thực hiện giao dịch. Phần giá trị thặng dư tiềm năng này bị triệt tiêu hoàn toàn (không ai nhận được, kể cả chính phủ).
          </p>
        `
      }
    ]
  },
  {
    id: "chap-3",
    category: "micro",
    number: 3,
    title: "Độ Co Giãn Của Cung - Cầu & Ứng Dụng",
    subtitle: "Co giãn theo giá, thu nhập, chéo và quy tắc tối đa hóa doanh thu",
    overview: "Độ co giãn đo lường độ nhạy cảm hay mức độ phản ứng của người mua và người bán trước sự thay đổi của giá cả hoặc thu nhập. Đây là công cụ quyền lực giúp doanh nghiệp quyết định chiến lược giá và chính phủ dự đoán nguồn thu thuế.",
    sections: [
      {
        heading: "1. Bảng Phân Loại 4 Loại Hệ Số Co Giãn Trọng Yếu",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700">
              <thead class="bg-slate-100 dark:bg-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border-b">Loại Co Giãn</th>
                  <th class="p-2.5 border-b">Công Thức</th>
                  <th class="p-2.5 border-b">Giá Trị & Kết Luận Kinh Tế</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Cầu theo Giá ($E_D$)</td>
                  <td class="p-2.5 font-mono">%ΔQ / %ΔP</td>
                  <td class="p-2.5">
                    • $|E_D| > 1$: Co giãn nhiều (xa xỉ, nhiều hàng thay thế)<br>
                    • $|E_D| < 1$: Co giãn ít (thiết yếu, ít hàng thay thế)<br>
                    • $|E_D| = 1$: Co giãn đơn vị
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Theo Thu Nhập ($E_I$)</td>
                  <td class="p-2.5 font-mono">%ΔQ / %ΔI</td>
                  <td class="p-2.5">
                    • $E_I > 1$: Hàng cao cấp / xa xỉ<br>
                    • $0 < E_I \le 1$: Hàng thiết yếu<br>
                    • $E_I < 0$: <strong>Hàng cấp thấp / thứ cấp</strong> (Inferior good)
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Co giãn chéo ($E_{XY}$)</td>
                  <td class="p-2.5 font-mono">%ΔQ_X / %ΔP_Y</td>
                  <td class="p-2.5">
                    • $E_{XY} > 0$: <strong>Hàng thay thế</strong> (Pepsi vs Coca)<br>
                    • $E_{XY} < 0$: <strong>Hàng bổ sung</strong> (Xăng vs Xe máy)<br>
                    • $E_{XY} = 0$: Hai hàng hóa độc lập
                  </td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Cung theo Giá ($E_S$)</td>
                  <td class="p-2.5 font-mono">%ΔQ_S / %ΔP</td>
                  <td class="p-2.5">
                    Đo lường khả năng mở rộng sản xuất của doanh nghiệp khi giá tăng. Trong dài hạn, cung luôn co giãn nhiều hơn ngắn hạn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Quy Tắc Vàng: Độ Co Giãn & Tổng Doanh Thu (TR = P × Q)",
        content: `
          <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-2 text-sm">
            <p>• <strong>Khi Cầu co giãn nhiều ($|E_D| > 1$):</strong> % thay đổi của lượng lớn hơn % thay đổi của giá (%ΔQ > %ΔP). Muốn tăng Tổng doanh thu, doanh nghiệp <strong>BẮT BUỘC PHẢI HẠ GIÁ</strong> (Giảm giá -> Doanh thu TĂNG; Tăng giá -> Doanh thu GIẢM).</p>
            <p>• <strong>Khi Cầu co giãn ít ($|E_D| < 1$):</strong> % thay đổi của lượng nhỏ hơn % thay đổi của giá (%ΔQ < %ΔP). Muốn tăng Tổng doanh thu, doanh nghiệp <strong>BẮT BUỘC PHẢI TĂNG GIÁ</strong> (Tăng giá -> Doanh thu TĂNG; Giảm giá -> Doanh thu GIẢM).</p>
            <p>• <strong>Khi Co giãn đơn vị ($|E_D| = 1$):</strong> Tổng doanh thu đạt giá trị cực đại ($TR_{max}$).</p>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-4",
    category: "micro",
    number: 4,
    title: "Lý Thuyết Hành Vi Người Tiêu Dùng",
    subtitle: "Thỏa dụng, đường bàng quan, đường ngân sách và điểm tiêu dùng tối ưu",
    overview: "Người tiêu dùng hướng tới việc tối đa hóa mức thỏa mãn (độ thỏa dụng) với ràng buộc nguồn lực có hạn (ngân sách chi tiêu).",
    sections: [
      {
        heading: "1. Thỏa Dụng Cận Biên & Tỷ Lệ Thay Thế Cận Biên (MRS)",
        content: `
          <p class="text-sm mb-2"><strong>Lợi ích cận biên (Marginal Utility - MU):</strong> Là mức thỏa dụng tăng thêm khi tiêu dùng thêm 1 đơn vị hàng hóa: $MU = \\frac{\\Delta TU}{\\Delta Q} = TU'(Q)$.</p>
          <p class="text-sm mb-2"><strong>Đường bàng quan (Indifference Curve):</strong> Tập hợp các kết hợp hàng hóa mang lại cùng một mức tổng thỏa dụng ($TU$) cho người tiêu dùng. Có 4 đặc điểm: dốc xuống từ trái sang phải, không cắt nhau, lồi về phía gốc tọa độ, và đường càng xa gốc tọa độ thì mức thỏa dụng càng cao.</p>
          <p class="text-sm"><strong>Tỷ lệ thay thế cận biên ($MRS_{XY}$):</strong> Số lượng hàng hóa Y mà người tiêu dùng sẵn sàng từ bỏ để lấy thêm 1 đơn vị hàng hóa X mà vẫn giữ nguyên mức thỏa dụng: $MRS_{XY} = -\\frac{\\Delta Y}{\\Delta X} = \\frac{MU_X}{MU_Y}$.</p>
        `
      },
      {
        heading: "2. Điều Kiện Tối Đa Hóa Lợi Ích Của Người Tiêu Dùng",
        content: `
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-sm space-y-2">
            <p class="font-bold text-emerald-900 dark:text-emerald-200">Hệ phương trình tối ưu hóa thỏa dụng:</p>
            <p>$$\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\quad \\text{và} \\quad X \\cdot P_X + Y \\cdot P_Y = I$$</p>
            <p>• <em>Ý nghĩa kinh tế:</em> Tại điểm tối ưu, độ dốc của đường bàng quan ($MRS_{XY} = MU_X / MU_Y$) tiếp xúc với độ dốc của đường ngân sách ($P_X / P_Y$).</p>
            <p>• Đồng tiền cuối cùng chi ra cho hàng hóa X phải đem lại mức thỏa dụng biên bằng đúng đồng tiền cuối cùng chi ra cho hàng hóa Y.</p>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-5",
    category: "micro",
    number: 5,
    title: "Lý Thuyết Sản Xuất Và Chi Phí",
    subtitle: "Hàm sản xuất, năng suất cận biên giảm dần, hệ thống các đường chi phí ngắn hạn",
    overview: "Mục tiêu tối thượng của doanh nghiệp là tối đa hóa lợi nhuận kinh tế. Để đạt được điều này, doanh nghiệp cần hiểu rõ cấu trúc chi phí trong ngắn hạn và dài hạn.",
    sections: [
      {
        heading: "1. Quy Luật Năng Suất Cận Biên Giảm Dần (Diminishing Marginal Returns)",
        content: `
          <p class="text-sm mb-2">Trong ngắn hạn, khi một yếu tố sản xuất cố định (ví dụ diện tích nhà xưởng, máy móc), việc thuê thêm lao động liên tục ban đầu sẽ làm tăng năng suất, nhưng vượt qua một ngưỡng nhất định, <strong>Năng suất cận biên của lao động ($MP_L$) bắt đầu giảm sút</strong> do người lao động phải chia sẻ không gian làm việc và máy móc thiết bị.</p>
          <p class="text-xs text-slate-500 italic mb-2">Chính quy luật này giải thích tại sao đường Chi phí cận biên ($MC$) sau đó lại dốc ngược lên!</p>
        `
      },
      {
        heading: "2. Mối Quan Hệ Giữa Đường MC, ATC và AVC",
        content: `
          <div class="space-y-2 text-sm bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p>• $TC = FC + VC$ (Tổng chi phí = Chi phí cố định + Chi phí biến đổi)</p>
            <p>• $ATC = TC / Q = AFC + AVC$</p>
            <p>• $MC = \\Delta TC / \\Delta Q = TC'(Q) = VC'(Q)$ (Đạo hàm của chi phí cố định $FC$ bằng 0)</p>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-900 dark:text-indigo-200 font-medium">
              🎯 <strong>ĐỊNH LÝ CẮT TẠI CỰC TIỂU:</strong><br>
              Đường $MC$ luôn cắt đường $AVC$ tại điểm cực tiểu của $AVC$ ($MC = AVC_{min}$).<br>
              Đường $MC$ luôn cắt đường $ATC$ tại điểm cực tiểu của $ATC$ ($MC = ATC_{min}$).
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-6",
    category: "micro",
    number: 6,
    title: "Các Cấu Trúc Thị Trường & Tối Đa Hóa Lợi Nhuận",
    subtitle: "So sánh toàn diện 4 cấu trúc thị trường: Cạnh tranh hoàn hảo, Cạnh tranh độc quyền, Độc quyền nhóm, Độc quyền thuần túy",
    overview: "Mức độ cạnh tranh trên thị trường quyết định quyền lực định giá của doanh nghiệp và hiệu quả kinh tế của toàn xã hội.",
    sections: [
      {
        heading: "1. Bảng So Sánh Toàn Diện 4 Cấu Trúc Thị Trường",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700">
              <thead class="bg-slate-100 dark:bg-slate-800 font-bold">
                <tr>
                  <th class="p-2 border-b">Đặc điểm</th>
                  <th class="p-2 border-b text-indigo-600 dark:text-indigo-400">Cạnh tranh hoàn hảo</th>
                  <th class="p-2 border-b text-blue-600 dark:text-blue-400">Cạnh tranh độc quyền</th>
                  <th class="p-2 border-b text-amber-600 dark:text-amber-400">Độc quyền nhóm (Oligopoly)</th>
                  <th class="p-2 border-b text-rose-600 dark:text-rose-400">Độc quyền thuần túy</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="p-2 font-semibold">Số lượng người bán</td>
                  <td class="p-2">Rất nhiều (vô số)</td>
                  <td class="p-2">Nhiều</td>
                  <td class="p-2">Một vài doanh nghiệp lớn</td>
                  <td class="p-2">Duy nhất một người bán</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Tính chất sản phẩm</td>
                  <td class="p-2">Đồng nhất hoàn hảo</td>
                  <td class="p-2">Có sự khác biệt hóa</td>
                  <td class="p-2">Đồng nhất hoặc khác biệt</td>
                  <td class="p-2">Duy nhất, không có hàng thay thế tốt</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Quyền lực định giá</td>
                  <td class="p-2">Bằng 0 (Price Taker)</td>
                  <td class="p-2">Nhỏ (Price Maker hạn chế)</td>
                  <td class="p-2">Lớn (phụ thuộc chiến lược đối thủ)</td>
                  <td class="p-2">Rất lớn (Price Maker hoàn toàn)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Rào cản gia nhập</td>
                  <td class="p-2">Hoàn toàn tự do (bằng 0)</td>
                  <td class="p-2">Dễ dàng (rất thấp)</td>
                  <td class="p-2">Cao</td>
                  <td class="p-2">Rất cao (không thể gia nhập)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Lợi nhuận kinh tế dài hạn</td>
                  <td class="p-2">Bằng 0 ($\pi = 0$)</td>
                  <td class="p-2">Bằng 0 ($\pi = 0$)</td>
                  <td class="p-2">Có thể dương ($\pi \ge 0$)</td>
                  <td class="p-2">Có thể dương lớn ($\pi > 0$)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Điều kiện tối ưu</td>
                  <td class="p-2">$P = MR = MC$</td>
                  <td class="p-2">$MR = MC, P > MC$</td>
                  <td class="p-2">Cân bằng Nash / Lý thuyết trò chơi</td>
                  <td class="p-2">$MR = MC, P > MC$ (có $DWL$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-7",
    category: "macro",
    number: 7,
    title: "Đo Lường Sản Lượng Quốc Gia (GDP & GNP)",
    subtitle: "3 phương pháp tính GDP, GDP danh nghĩa vs thực tế, và hệ số điều chỉnh GDP",
    overview: "Tổng sản phẩm quốc nội (GDP) là thước đo phổ biến nhất về quy mô và sức khỏe tổng thể của một nền kinh tế.",
    sections: [
      {
        heading: "1. Khái Niệm Cốt Lõi Về GDP & Những Thứ Tuyệt Đối Không Tính",
        content: `
          <p class="text-sm mb-2"><strong>Định nghĩa:</strong> GDP là tổng giá trị thị trường của tất cả hàng hóa và dịch vụ <em>cuối cùng</em> được sản xuất ra <em>trong phạm vi lãnh thổ một quốc gia</em> trong một <em>thời kỳ nhất định</em>.</p>
          <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800 text-xs text-red-900 dark:text-red-200 space-y-1">
            <p class="font-bold">⚠️ 4 LOẠI GIAO DỊCH TUYỆT ĐỐI KHÔNG TÍNH VÀO GDP:</p>
            <p>1. <strong>Hàng hóa trung gian (Intermediate goods):</strong> Ví dụ bột mì bán cho lò bánh mì (đã tính gộp trong giá bánh mì, tính nữa sẽ bị trùng).</p>
            <p>2. <strong>Hàng hóa đã qua sử dụng:</strong> Mua bán xe máy cũ, nhà cũ (đã được tính vào GDP của năm nó được sản xuất ra ban đầu).</p>
            <p>3. <strong>Chi chuyển nhượng của chính phủ (Transfer payments - Tr):</strong> Tiền trợ cấp người nghèo, tiền lương hưu, học bổng (không đổi lấy hàng hóa dịch vụ mới).</p>
            <p>4. <strong>Giao dịch tài chính thuần túy:</strong> Mua bán cổ phiếu, trái phiếu trên sàn chứng khoán.</p>
          </div>
        `
      },
      {
        heading: "2. Phân Biệt: GDP Danh Nghĩa, GDP Thực Tế & Chỉ Số Điều Chỉnh (Deflator)",
        content: `
          <div class="space-y-2 text-sm bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p>• <strong>GDP danh nghĩa ($GDP_n$):</strong> Tính theo giá hiện hành của năm đó: $\\sum (P_t \\times Q_t)$. Có thể tăng do sản lượng tăng HOẶC do giá cả tăng (lạm phát).</p>
            <p>• <strong>GDP thực tế ($GDP_r$):</strong> Tính theo giá cố định của năm gốc: $\\sum (P_0 \\times Q_t)$. Chỉ tăng khi sản lượng hàng hóa thực tế được tạo ra tăng lên.</p>
            <p>• <strong>Chỉ số điều chỉnh GDP (GDP Deflator):</strong> $DGDP = \\frac{GDP_n}{GDP_r} \\times 100$.</p>
            <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">💡 Để đo lường tốc độ tăng trưởng kinh tế giữa 2 năm, BẮT BUỘC phải dùng GDP thực tế: $g = \\frac{GDP_{r, t} - GDP_{r, t-1}}{GDP_{r, t-1}} \\times 100\\%$.</p>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-8",
    category: "macro",
    number: 8,
    title: "Chi Phí Sinh Hoạt, Lạm Phát & Thất Nghiệp",
    subtitle: "CPI, phân biệt CPI vs GDP Deflator, hiệu ứng Fisher và phân loại thất nghiệp",
    overview: "Lạm phát và thất nghiệp là hai vấn đề kinh tế vĩ mô nhức nhối tác động trực tiếp nhất đến đời sống hàng ngày của người dân.",
    sections: [
      {
        heading: "1. Bảng So Sánh Chi Tiết: CPI vs GDP Deflator",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700">
              <thead class="bg-slate-100 dark:bg-slate-800 font-bold">
                <tr>
                  <th class="p-2.5 border-b">Tiêu chí</th>
                  <th class="p-2.5 border-b text-indigo-600 dark:text-indigo-400">Chỉ số giá tiêu dùng (CPI)</th>
                  <th class="p-2.5 border-b text-emerald-600 dark:text-emerald-400">Chỉ số điều chỉnh GDP (GDP Deflator)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Đối tượng đo lường</td>
                  <td class="p-2.5">Giá của giỏ hàng hóa và dịch vụ cố định người tiêu dùng điển hình mua</td>
                  <td class="p-2.5">Mức giá chung của tất cả hàng hóa dịch vụ sản xuất trong nước</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Hàng hóa nhập khẩu</td>
                  <td class="p-2.5"><strong>CÓ TÍNH</strong> (nếu người tiêu dùng mua, ví dụ iPhone nhập)</td>
                  <td class="p-2.5"><strong>KHÔNG TÍNH</strong> (chỉ tính hàng sản xuất trong nước)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Giỏ hàng hóa</td>
                  <td class="p-2.5">Cố định theo năm gốc (Chỉ số Laspeyres)</td>
                  <td class="p-2.5">Thay đổi tự động theo năm hiện hành (Chỉ số Paasche)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Hàng tư liệu sản xuất / Thiết bị quân sự</td>
                  <td class="p-2.5"><strong>KHÔNG TÍNH</strong> (người tiêu dùng không mua máy bay chiến đấu)</td>
                  <td class="p-2.5"><strong>CÓ TÍNH</strong> (nếu được sản xuất trong nước)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Ba Loại Thất Nghiệp Cốt Lõi",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-2 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700">
              <p class="font-bold text-blue-700 dark:text-blue-300">1. Thất nghiệp Ma sát (Frictional)</p>
              <p class="mt-1">Phát sinh do quá trình dịch chuyển, chuyển đổi công việc, tìm kiếm vị trí phù hợp với sở thích và kỹ năng cá nhân. Là dạng thất nghiệp ngắn hạn, tất yếu và lành mạnh.</p>
            </div>
            <div class="p-3 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700">
              <p class="font-bold text-purple-700 dark:text-purple-300">2. Thất nghiệp Cơ cấu (Structural)</p>
              <p class="mt-1">Phát sinh do sự mất cân đối giữa cơ cấu kỹ năng của người lao động và yêu cầu công việc mới của nền kinh tế (ví dụ AI thay thế công việc lặp lại). Thường mang tính dài hạn.</p>
            </div>
            <div class="p-3 bg-rose-50 dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-slate-700">
              <p class="font-bold text-rose-700 dark:text-rose-300">3. Thất nghiệp Chu kỳ (Cyclical)</p>
              <p class="mt-1">Phát sinh do nền kinh tế rơi vào suy thoái, tổng cầu suy giảm khiến các doanh nghiệp cắt giảm sản lượng và sa thải bớt nhân công. Bằng 0 khi nền kinh tế toàn dụng ($Y = Y^*$).</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-9",
    category: "macro",
    number: 9,
    title: "Tiền Tệ, Hệ Thống Ngân Hàng & Số Nhân Tiền",
    subtitle: "Cơ chế tạo tiền của ngân hàng thương mại, 3 công cụ của Ngân hàng trung ương",
    overview: "Tiền tệ không chỉ là giấy bạc do Ngân hàng Trung ương in ra; phần lớn tiền tệ trong nền kinh tế hiện đại được tạo ra từ quá trình cho vay của hệ thống Ngân hàng Thương mại.",
    sections: [
      {
        heading: "1. Ba Công Cụ Điều Hành Cung Tiền Của Ngân Hàng Trung Ương",
        content: `
          <div class="space-y-3 text-sm">
            <div class="p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700">
              <p class="font-bold text-indigo-900 dark:text-indigo-200">1. Nghiệp vụ thị trường mở (OMO - Open Market Operations):</p>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">• <strong>Bơm tiền (Mở rộng):</strong> NHTW MUA trái phiếu chính phủ -> Tiền mặt đổ vào hệ thống ngân hàng -> Cơ sở tiền $MB$ tăng -> Cung tiền $MS$ tăng.</p>
              <p class="text-xs text-slate-600 dark:text-slate-300">• <strong>Hút tiền (Thắt chặt):</strong> NHTW BÁN trái phiếu chính phủ -> Thu hồi tiền mặt về -> $MB$ giảm -> $MS$ giảm.</p>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700">
              <p class="font-bold text-emerald-900 dark:text-emerald-200">2. Tỷ lệ dự trữ bắt buộc ($rr_b$):</p>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">NHTW hạ tỷ lệ dự trữ bắt buộc -> Các ngân hàng thương mại được cho vay nhiều hơn -> Số nhân tiền $m_M$ tăng lên -> Cung tiền $MS$ tăng.</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
              <p class="font-bold text-amber-900 dark:text-amber-200">3. Lãi suất tái chiết khấu:</p>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Là lãi suất NHTW cho các NHTM vay. Hạ lãi suất chiết khấu -> Khuyến khích NHTM vay vốn để mở rộng tín dụng -> Cung tiền tăng.</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-10",
    category: "macro",
    number: 10,
    title: "Mô Hình Tổng Cung - Tổng Cầu (AD - AS)",
    subtitle: "3 lý do đường AD dốc xuống, cân bằng ngắn hạn, cú sốc cung cầu và sự tự điều chỉnh dài hạn",
    overview: "Mô hình AD-AS là mô hình trung tâm của kinh tế vĩ mô hiện đại, dùng để giải thích các biến động kinh tế ngắn hạn và xu hướng dài hạn của sản lượng và mức giá.",
    sections: [
      {
        heading: "1. Tại Sao Đường Tổng Cầu (AD) Dốc Xuống?",
        content: `
          <p class="text-sm mb-2">Đường AD biểu diễn lượng hàng hóa và dịch vụ mà các hộ gia đình, doanh nghiệp, chính phủ và khách hàng nước ngoài muốn mua ở mỗi mức giá $P$. Có 3 lý do giải thích:</p>
          <ul class="list-disc list-inside space-y-2 text-xs mb-3">
            <li><strong>1. Hiệu ứng của cải (Pigou's Wealth Effect):</strong> Khi mức giá $P$ giảm, giá trị thực của tiền mặt mà người dân nắm giữ tăng lên, họ cảm thấy giàu có hơn và tăng chi tiêu tiêu dùng ($C$ tăng).</li>
            <li><strong>2. Hiệu ứng lãi suất (Keynes's Interest-Rate Effect):</strong> Khi $P$ giảm, người dân cần giữ ít tiền mặt hơn cho giao dịch, họ gửi tiền vào ngân hàng hoặc mua trái phiếu. Lượng cung vốn vay tăng làm lãi suất $r$ giảm, kích thích doanh nghiệp vay tiền đầu tư ($I$ tăng).</li>
            <li><strong>3. Hiệu ứng tỷ giá hối đoái (Mundell-Fleming's Exchange-Rate Effect):</strong> Lãi suất trong nước giảm khiến nhà đầu tư chuyển vốn ra nước ngoài, làm đồng nội tệ giảm giá trên thị trường ngoại hối. Hàng xuất khẩu rẻ đi và hàng nhập khẩu đắt lên, làm xuất khẩu ròng tăng ($NX$ tăng).</li>
          </ul>
        `
      },
      {
        heading: "2. Hiện Tượng Đình Lạm (Stagflation) Khi Có Cú Sốc Cung",
        content: `
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
            <strong>Đình lạm (Stagflation):</strong> Xảy ra khi một cú sốc cung tiêu cực (như giá dầu mỏ toàn cầu tăng vọt) làm đường $SRAS$ dịch chuyển sang trái.<br>
            • Sản lượng $Y$ sụt giảm (kinh tế đình đốn, thất nghiệp tăng).<br>
            • Mức giá $P$ đồng thời tăng vọt (lạm phát cao).<br>
            Đây là tình huống nan giải nhất cho các nhà hoạch định chính sách vì dùng kích cầu sẽ làm lạm phát tăng cao hơn, còn thắt chặt để chống lạm phát sẽ làm suy thoái trầm trọng hơn.
          </div>
        `
      }
    ]
  },
  {
    id: "chap-11",
    category: "macro",
    number: 11,
    title: "Chính Sách Tài Khóa & Hiện Tượng Lấn Át",
    subtitle: "Số nhân chi tiêu, xu hướng tiêu dùng cận biên MPC, và hiệu ứng thoái lui đầu tư tư nhân",
    overview: "Chính phủ sử dụng thuế và chi tiêu ngân sách để tác động vào tổng cầu nhằm ổn định nền kinh tế trước các biến động chu kỳ.",
    sections: [
      {
        heading: "1. Số Nhân Chi Tiêu Chính Phủ vs Số Nhân Thuế",
        content: `
          <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-2 text-sm">
            <p>• <strong>Số nhân chi tiêu chính phủ:</strong> $m_G = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$.</p>
            <p>• <strong>Số nhân thuế:</strong> $m_T = -\\frac{MPC}{1 - MPC} = -m_G \\times MPC$.</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">💡 <em>So sánh quan trọng:</em> $|m_G| > |m_T|$ vì toàn bộ 1 đồng chi tiêu của chính phủ ($G$) tác động trực tiếp ngay vào tổng cầu $AD$. Trong khi giảm 1 đồng thuế thì người dân sẽ đem một phần đi tiết kiệm (theo tỷ lệ $MPS$) chứ không tiêu dùng hết toàn bộ.</p>
          </div>
        `
      },
      {
        heading: "2. Hiện Tượng Lấn Át (Crowding-Out Effect)",
        content: `
          <div class="p-3 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <p class="font-bold text-purple-700 dark:text-purple-300">Chuỗi truyền dẫn của hiện tượng lấn át:</p>
            <p>Chính phủ tăng chi tiêu ($G \\uparrow$) $\\implies$ Ngân sách bị thâm hụt $\\implies$ Chính phủ phát hành thêm trái phiếu để vay mượn $\\implies$ Cầu vốn vay trên thị trường tài chính tăng $\\implies$ Lãi suất cân bằng $r$ bị đẩy lên cao $\\implies$ Chi phí đi vay của doanh nghiệp tư nhân đắt đỏ $\\implies$ Doanh nghiệp cắt giảm đầu tư tư nhân ($I \\downarrow$).</p>
            <p class="font-semibold text-rose-600 dark:text-rose-400">Kết luận: Việc $I$ giảm đã triệt tiêu bớt một phần tác động mở rộng sản lượng ban đầu của $G$!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "chap-12",
    category: "macro",
    number: 12,
    title: "Kinh Tế Mở, Tỷ Giá Hối Đoái & Cán Cân Thanh Toán",
    subtitle: "Tỷ giá danh nghĩa vs tỷ giá thực tế, cán cân thương mại và dòng vốn quốc tế",
    overview: "Trong nền kinh tế toàn cầu hóa, thương mại quốc tế và các dòng vốn xuyên biên giới liên kết các thị trường hàng hóa và tài chính giữa các quốc gia.",
    sections: [
      {
        heading: "1. Tỷ Giá Danh Nghĩa vs Tỷ Giá Thực Tế",
        content: `
          <p class="text-sm mb-2"><strong>Tỷ giá danh nghĩa ($e$):</strong> Tỷ lệ trao đổi tiền tệ giữa hai quốc gia (ví dụ: $1\\text{ USD} = 25.000\\text{ VND}$).</p>
          <p class="text-sm mb-2"><strong>Tỷ giá thực tế ($e_r$):</strong> Tỷ lệ trao đổi hàng hóa và dịch vụ giữa hai quốc gia:</p>
          <p class="text-sm font-mono text-center my-2 font-bold text-indigo-600 dark:text-indigo-400">e_r = (e × P_trong_nước) / P_nước_ngoài</p>
          <p class="text-xs text-slate-600 dark:text-slate-300">💡 Khi đồng nội tệ giảm giá thực tế (hàng trong nước rẻ hơn so với hàng nước ngoài), xuất khẩu ($X$) tăng lên và nhập khẩu ($IM$) giảm xuống, làm Xuất khẩu ròng ($NX$) tăng, kích thích Tổng cầu $AD$.</p>
        `
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = THEORY_DATA;
}
