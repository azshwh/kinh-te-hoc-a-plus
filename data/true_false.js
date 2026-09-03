// Ngân hàng 40+ Câu Hỏi "Nhận Định Đúng / Sai & Luận Giải Chuẩn A+"
// Dạng câu hỏi phân loại then chốt trong đề thi đại học (NEU, FTU, UEH, DAV, VNU-UEB...)

const TRUE_FALSE_DATA = [
  // ================= VI MÔ =================
  {
    id: "tf1",
    category: "micro",
    chapter: 1,
    topic: "Chi phí cơ hội & Chi phí chìm",
    statement: "Một doanh nghiệp đã chi 5 tỷ đồng để nghiên cứu một sản phẩm mới nhưng thất bại. Doanh nghiệp cần tiếp tục chi thêm tiền để thu hồi lại khoản chi phí 5 tỷ đồng này.",
    verdict: "SAI",
    explanation: "Khoản 5 tỷ đồng đã chi ra là Chi phí chìm (Sunk Cost) - khoản chi phí đã xảy ra trong quá khứ và không thể thu hồi được dù đưa ra bất kỳ quyết định nào trong hiện tại hay tương lai. Theo nguyên lý người duy lý suy nghĩ tại điểm cận biên, doanh nghiệp chỉ nên tiếp tục đầu tư nếu Lợi ích biên dự kiến trong tương lai lớn hơn hoặc bằng Chi phí biên tăng thêm (MB >= MC), hoàn toàn phải bỏ qua chi phí chìm 5 tỷ đồng này.",
    academicFormula: "MB_{tương\\,lai} \\ge MC_{tăng\\,thêm} \\quad (Bỏ\\,qua\\,Sunk\\,Cost)",
    graphTip: "Nêu rõ sự khác biệt giữa Chi phí cơ hội (Opportunity Cost) và Chi phí chìm trên đường tổng chi phí.",
    examTip: "Bẫy tâm lý 'tiếc tiền đã mất' (Sunk Cost Fallacy) là câu hỏi kinh điển của Mankiw chương 1."
  },
  {
    id: "tf2",
    category: "micro",
    chapter: 1,
    topic: "Đường PPF & Lợi thế so sánh",
    statement: "Nếu quốc gia A có lợi thế tuyệt đối so với quốc gia B ở tất cả các mặt hàng thì thương mại tự do giữa hai quốc gia sẽ không mang lại lợi ích cho quốc gia A.",
    verdict: "SAI",
    explanation: "Theo Lý thuyết Lợi thế so sánh của David Ricardo, cơ sở của thương mại quốc tế tự do không phụ thuộc vào Lợi thế tuyệt đối mà phụ thuộc vào Lợi thế so sánh (sản xuất với chi phí cơ hội thấp hơn). Miễn là chi phí cơ hội sản xuất giữa hai nước có sự khác biệt, hai quốc gia luôn có thể chuyên môn hóa vào mặt hàng mình có lợi thế so sánh và trao đổi với nhau, giúp cả hai nước tiêu dùng ở các điểm nằm bên ngoài đường giới hạn khả năng sản xuất (PPF) của mình.",
    academicFormula: "OC_X^A \\ne OC_X^B \\implies \\text{Cả hai nước cùng hưởng lợi từ mậu dịch}",
    graphTip: "Vẽ 2 đường PPF của 2 nước với độ dốc khác nhau, chỉ ra điểm tiêu dùng sau thương mại nằm ngoài PPF.",
    examTip: "Tuyệt đối không nhầm lẫn giữa Lợi thế tuyệt đối (ai làm nhanh hơn) và Lợi thế so sánh (ai có chi phí cơ hội thấp hơn)."
  },
  {
    id: "tf3",
    category: "micro",
    chapter: 2,
    topic: "Cung Cầu & Cân Bằng",
    statement: "Khi giá của hàng hóa X giảm, lượng cầu về hàng hóa X tăng lên, điều này làm cho đường cầu về hàng hóa X dịch chuyển sang phải.",
    verdict: "SAI",
    explanation: "Nhận định này nhầm lẫn nghiêm trọng giữa 'Sự thay đổi lượng cầu' (Change in quantity demanded) và 'Sự thay đổi của cầu' (Change in demand). Khi giá của chính hàng hóa X giảm ($P_X \\downarrow$), lượng cầu tăng ($Q_D \\uparrow$) là sự di chuyển dọc (Movement along) từ điểm này sang điểm khác trên CÙNG MỘT ĐƯỜNG CẦU. Đường cầu chỉ dịch chuyển (Shift) khi các yếu tố ngoài giá (thu nhập, thị hiếu, giá hàng liên quan...) thay đổi.",
    academicFormula: "P_X \\Delta \\implies \\text{Di chuyển dọc}; \\quad (I, P_{sub}, P_{comp}, T) \\Delta \\implies \\text{Dịch chuyển đường cầu}",
    graphTip: "Vẽ đường cầu dốc xuống, chấm điểm A và B trên cùng đường thẳng để chứng minh di chuyển dọc.",
    examTip: "Câu hỏi bẫy ngữ pháp chiếm 30% đề thi học kỳ vi mô tại NEU và FTU."
  },
  {
    id: "tf4",
    category: "micro",
    chapter: 2,
    topic: "Hàng hóa thay thế & bổ sung",
    statement: "Nếu X và Y là hai hàng hóa bổ sung cho nhau, sự gia tăng giá của hàng hóa Y sẽ làm đường cầu về hàng hóa X dịch chuyển sang phải.",
    verdict: "SAI",
    explanation: "Khi X và Y là hai hàng hóa bổ sung (Complements, ví dụ xăng và xe máy), người tiêu dùng tiêu dùng đồng thời cả hai. Khi giá Y tăng ($P_Y \\uparrow$), lượng cầu về Y giảm ($Q_D^Y \\downarrow$), kéo theo nhu cầu sử dụng hàng hóa X đi kèm cũng giảm theo. Do đó, đường cầu về hàng hóa X phải DỊCH CHUYỂN SANG TRÁI (giảm cầu), giá và lượng cân bằng của X đều giảm.",
    academicFormula: "E_{XY} = \\frac{\\%\\Delta Q_X}{\\%\\Delta P_Y} < 0 \\implies P_Y \\uparrow \\implies Q_X \\downarrow \\text{ (Đường cầu X dịch trái)}",
    graphTip: "Vẽ đồ thị thị trường X với đường cầu dịch sang trái ($D_1 \\to D_2$), giá giảm từ $P_1 \\to P_2$, lượng giảm từ $Q_1 \\to Q_2$.",
    examTip: "Nhớ quy tắc: Hàng thay thế ($E_{XY} > 0$) biến thiên cùng chiều; Hàng bổ sung ($E_{XY} < 0$) biến thiên nghịch chiều."
  },
  {
    id: "tf5",
    category: "micro",
    chapter: 3,
    topic: "Độ co giãn & Doanh thu",
    statement: "Để tối đa hóa doanh thu, một doanh nghiệp độc quyền bán mặt hàng có cầu co giãn ít (|Ed| < 1) nên áp dụng chính sách giảm giá bán.",
    verdict: "SAI",
    explanation: "Khi cầu co giãn ít ($|E_d| < 1$), phần trăm thay đổi của lượng cầu nhỏ hơn phần trăm thay đổi của giá ($\\%|\\Delta Q| < \\%|\\Delta P|$). Nếu doanh nghiệp giảm giá, lượng bán tăng thêm không đủ bù đắp sự sụt giảm của giá trên mỗi đơn vị, khiến Tổng doanh thu ($TR = P \\times Q$) bị GIẢM XUỐNG. Để tăng doanh thu trong trường hợp này, doanh nghiệp phải TĂNG GIÁ bán. Doanh thu chỉ đạt cực đại khi $|E_d| = 1$ (ứng với $MR = 0$).",
    academicFormula: "TR = P \\cdot Q \\implies \\frac{dTR}{dP} = Q(1 - |E_d|). \\quad \\text{Khi } |E_d| < 1 \\implies \\frac{dTR}{dP} > 0 \\implies P \\uparrow \\implies TR \\uparrow",
    graphTip: "Vẽ đồ thị quan hệ parabol ngược giữa Tổng doanh thu TR và sản lượng Q, chỉ rõ vùng $|E_d| < 1$ nằm bên phải đỉnh TR.",
    examTip: "Doanh nghiệp không bao giờ sản xuất ở nhánh cầu co giãn ít ($|E_d| < 1$) vì tại đó $MR < 0$, làm giảm cả doanh thu lẫn lợi nhuận."
  },
  {
    id: "tf6",
    category: "micro",
    chapter: 4,
    topic: "Can thiệp giá của Chính phủ",
    statement: "Việc chính phủ quy định giá trần (Price Ceiling) đối với một mặt hàng luôn dẫn đến tình trạng thiếu hụt hàng hóa trên thị trường.",
    verdict: "SAI",
    explanation: "Giá trần CHỈ gây ra thiếu hụt hàng hóa khi nó CÓ HIỆU LỰC (Binding), tức là mức giá trần được đặt THẤP HƠN mức giá cân bằng thị trường ($P_{trần} < P^*$). Khi đó lượng cầu vượt lượng cung ($Q_D > Q_S$) gây thiếu hụt. Nếu giá trần được đặt cao hơn mức giá cân bằng ($P_{trần} \\ge P^*$), giá trần này là KHÔNG CÓ HIỆU LỰC (Non-binding), thị trường vẫn tự do giao dịch tại điểm cân bằng $P^*$ và không xảy ra thiếu hụt.",
    academicFormula: "P_c \\ge P^* \\implies \\text{Không có hiệu lực, thị trường vẫn ở } (P^*, Q^*)",
    graphTip: "Vẽ đồ thị đường cung cầu cắt nhau tại $P^* = 50$, vẽ đường giá trần nằm ngang ở mức $P_c = 60$ ở phía trên để chứng minh không ảnh hưởng.",
    examTip: "Từ khóa 'luôn luôn' (always) trong câu nhận định thường là dấu hiệu của câu trả lời SAI."
  },
  {
    id: "tf7",
    category: "micro",
    chapter: 4,
    topic: "Gánh nặng thuế & Độ co giãn",
    statement: "Khi chính phủ đánh thuế 5.000 đồng/sản phẩm vào người bán, thì người bán sẽ phải chịu toàn bộ 5.000 đồng tiền thuế này.",
    verdict: "SAI",
    explanation: "Theo lý thuyết phân chia gánh nặng thuế (Tax Incidence), việc ai thực tế chịu thuế không phụ thuộc vào việc chính phủ thu tiền từ người mua hay người bán về mặt luật pháp, mà phụ thuộc vào ĐỘ CO GIÃN TƯƠNG ĐỐI của Cung và Cầu theo giá. Người bán sẽ chuyển một phần gánh nặng thuế sang cho người mua bằng cách nâng giá bán. Bên nào có độ co giãn kém hơn (ít linh hoạt hơn) sẽ phải chịu phần lớn gánh nặng thuế.",
    academicFormula: "\\frac{t_b}{t_s} = \\frac{E_S}{|E_D|} \\quad (t = t_b + t_s = 5.000)",
    graphTip: "Vẽ đường cung dịch chuyển lên trên một đoạn đúng bằng $t$, điểm cân bằng mới có $P_b > P^*$, khoảng cách $P_b - P^*$ là thuế người mua chịu.",
    examTip: "Định lý tương đương của thuế: Đánh thuế vào người mua hay người bán đều đem lại kết cục phân chia gánh nặng thuế hệt như nhau."
  },
  {
    id: "tf8",
    category: "micro",
    chapter: 4,
    topic: "Tối ưu hóa tiêu dùng (Consumer Choice)",
    statement: "Tại điểm tiêu dùng tối ưu, độ thỏa dụng biên của hai hàng hóa X và Y phải bằng nhau (MUX = MUY).",
    verdict: "SAI",
    explanation: "Điều kiện tối ưu hóa tiêu dùng không phải là $MU_X = MU_Y$, mà là Thỏa dụng biên TRÊN MỖI ĐỒNG TIỀN CHI TIÊU cho các hàng hóa phải bằng nhau: $\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$, hay Tỷ lệ thay thế biên phải bằng tỷ giá: $MRS_{XY} = \\frac{P_X}{P_Y}$. Chỉ trong trường hợp cá biệt khi hai hàng hóa có giá bằng nhau ($P_X = P_Y$) thì mới suy ra $MU_X = MU_Y$.",
    academicFormula: "MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y} \\iff \\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}",
    graphTip: "Vẽ tiếp điểm giữa Đường bàng quan (độ dốc $MRS$) và Đường ngân sách (độ dốc $-P_X/P_Y$).",
    examTip: "Bẫy sinh viên chỉ nhớ $MU$ mà quên chia cho giá $P$."
  },
  {
    id: "tf9",
    category: "micro",
    chapter: 5,
    topic: "Chi phí & Lợi nhuận",
    statement: "Khi một doanh nghiệp đạt lợi nhuận kinh tế bằng 0, chủ doanh nghiệp nên đóng cửa vì không thu được lợi nhuận gì cho công sức của mình.",
    verdict: "SAI",
    explanation: "Lợi nhuận kinh tế = Tổng doanh thu - (Chi phí hiện + Chi phí ẩn). Chi phí ẩn đã bao gồm tiền lương tương xứng cho công sức quản lý của chủ doanh nghiệp và lợi tức cơ hội của số vốn tự có bỏ vào kinh doanh. Do đó, khi Lợi nhuận kinh tế bằng 0, doanh nghiệp đang kiếm được LỢI NHUẬN BÌNH THƯỜNG (Normal Profit), tức là chủ doanh nghiệp vẫn được nhận mức thù lao hoàn toàn tương đương với cơ hội tốt nhất ở bên ngoài.",
    academicFormula: "\\pi_{kinh\\,tế} = 0 \\iff \\pi_{kế\\,toán} = \\text{Chi phí cơ hội ẩn} > 0",
    graphTip: "Vẽ đồ thị cân bằng dài hạn của cạnh tranh hoàn hảo tại $P = ATC_{\\min}$, ở đó $\\pi_{kinh\\,tế} = 0$.",
    examTip: "Lợi nhuận kinh tế bằng 0 là trạng thái cân bằng dài hạn bình thường và lý tưởng của thị trường cạnh tranh."
  },
  {
    id: "tf10",
    category: "micro",
    chapter: 5,
    topic: "Đường chi phí cận biên MC & ATC",
    statement: "Đường Chi phí cận biên (MC) cắt đường Chi phí trung bình (ATC) tại điểm cực đại của đường MC.",
    verdict: "SAI",
    explanation: "Về mặt toán học và hình học, đường Chi phí cận biên ($MC$) luôn cắt đường Chi phí trung bình ($ATC$) và đường Chi phí biến đổi trung bình ($AVC$) tại ĐIỂM CỰC TIỂU (Minimum) của các đường này. Khi $MC < ATC$, mỗi đơn vị sản xuất thêm có chi phí thấp hơn mức trung bình nên kéo $ATC$ giảm xuống. Khi $MC > ATC$, chi phí cận biên kéo $ATC$ tăng lên. Do đó, tại giao điểm $MC = ATC$, $ATC$ đạt giá trị nhỏ nhất.",
    academicFormula: "\\frac{d(ATC)}{dQ} = \\frac{MC - ATC}{Q} = 0 \\iff MC = ATC",
    graphTip: "Vẽ đường chữ U của ATC và đường MC dốc lên xuyên qua đáy của ATC.",
    examTip: "Đây là câu hỏi xuất hiện trong hầu hết các bài thi trắc nghiệm và tự luận vi mô chương Chi phí."
  },
  {
    id: "tf11",
    category: "micro",
    chapter: 5,
    topic: "Quyết định đóng cửa trong ngắn hạn",
    statement: "Một doanh nghiệp bị thua lỗ trong ngắn hạn (P < ATC) thì nên đóng cửa sản xuất ngay lập tức.",
    verdict: "SAI",
    explanation: "Trong ngắn hạn, doanh nghiệp vẫn phải gánh chịu Chi phí cố định ($FC$) dù có sản xuất hay không. Nếu giá bán vẫn lớn hơn Chi phí biến đổi trung bình ($P \\ge AVC$), doanh nghiệp vẫn bù đắp được toàn bộ chi phí biến đổi và còn dư một phần để bù đắp chi phí cố định, giúp mức lỗ nhỏ hơn việc đóng cửa. Doanh nghiệp chỉ nên đóng cửa trong ngắn hạn khi giá bán rơi xuống dưới điểm cực tiểu của AVC ($P < AVC_{\\min}$).",
    academicFormula: "AVC_{\\min} \\le P < ATC \\implies \\text{Tiếp tục sản xuất để giảm lỗ}; \\quad P < AVC_{\\min} \\implies \\text{Đóng cửa}",
    graphTip: "Vẽ vùng giá giữa $AVC_{\\min}$ và $ATC_{\\min}$, chỉ ra diện tích lỗ nhỏ hơn $FC$.",
    examTip: "Quy tắc: Ngắn hạn so sánh với $AVC$; Dài hạn mới so sánh với $ATC$."
  },
  {
    id: "tf12",
    category: "micro",
    chapter: 6,
    topic: "Cạnh tranh hoàn hảo",
    statement: "Đường cầu đối với sản phẩm của một doanh nghiệp trong thị trường cạnh tranh hoàn hảo là một đường thẳng dốc xuống từ trái sang phải.",
    verdict: "SAI",
    explanation: "Đường cầu của TOÀN BỘ NGÀNH (thị trường) là đường dốc xuống, nhưng đường cầu đối với MỘT DOANH NGHIỆP RIÊNG LẺ trong thị trường cạnh tranh hoàn hảo là một ĐƯỜNG NẰM NGANG HOÀN TOÀN (co giãn hoàn toàn tại mức giá cân bằng thị trường $P^*$). Doanh nghiệp là người chấp nhận giá (Price-taker), có thể bán bất kỳ sản lượng nào ở mức giá $P^*$ và có $P = MR = AR$.",
    academicFormula: "\\text{Thị trường: } P = a - bQ; \\quad \\text{Doanh nghiệp riêng lẻ: } P = P^* \\text{ (Co giãn vô hạn, nằm ngang)}",
    graphTip: "Vẽ 2 đồ thị song song: Đồ thị bên trái là Cung-Cầu thị trường giao nhau tại $P^*$; Đồ thị bên phải kéo đường $P^*$ nằm ngang sang cho doanh nghiệp.",
    examTip: "Bẫy lẫn lộn giữa Đường cầu thị trường và Đường cầu của một hãng."
  },
  {
    id: "tf13",
    category: "micro",
    chapter: 6,
    topic: "Độc quyền thuần túy",
    statement: "Doanh nghiệp độc quyền có thể ấn định cả giá bán và sản lượng ở bất kỳ mức nào mà họ mong muốn để kiếm lợi nhuận vô hạn.",
    verdict: "SAI",
    explanation: "Mặc dù là người bán duy nhất và có quyền lực thị trường, nhà độc quyền vẫn bị ràng buộc bởi ĐƯỜNG CẦU CỦA THỊ TRƯỜNG. Nhà độc quyền chỉ có thể chọn một điểm nằm trên đường cầu: nếu chọn bán giá cao thì lượng cầu sẽ giảm, và nếu muốn bán sản lượng lớn thì buộc phải hạ giá. Hơn nữa, nhà độc quyền tối đa hóa lợi nhuận tại $MR = MC$, tại đó lợi nhuận bị giới hạn bởi quy mô thị trường và chi phí sản xuất, hoàn toàn không thể đạt 'lợi nhuận vô hạn'.",
    academicFormula: "TR(Q) = P(Q) \\cdot Q \\implies MR(Q) = MC(Q) \\implies (Q_M^*, P_M^*)",
    graphTip: "Vẽ đường cầu dốc xuống ràng buộc nhà độc quyền, chỉ ra không thể chọn điểm nằm ngoài đường cầu.",
    examTip: "Độc quyền có quyền định giá nhưng không thể ép người tiêu dùng mua giá cao với số lượng tùy thích."
  },
  {
    id: "tf14",
    category: "micro",
    chapter: 6,
    topic: "Phân biệt giá cấp 1",
    statement: "Khi nhà độc quyền thực hiện chính sách phân biệt giá hoàn hảo (cấp 1), tổn thất vô ích (DWL) của xã hội sẽ đạt mức lớn nhất.",
    verdict: "SAI",
    explanation: "Khi phân biệt giá hoàn hảo, nhà độc quyền bán mỗi đơn vị hàng hóa cho từng khách hàng đúng bằng mức giá sẵn lòng trả tối đa của họ (WTP). Nhà độc quyền sẽ mở rộng sản xuất đến điểm mà giá bán bằng Chi phí cận biên ($P = MC$), tương đương với sản lượng của cạnh tranh hoàn hảo ($Q_M = Q_C$). Vì không có giao dịch có lợi nào bị bỏ sót nên Tổn thất vô ích bằng 0 ($DWL = 0$). Toàn bộ thặng dư tiêu dùng ($CS$) được chuyển hóa thành lợi nhuận độc quyền.",
    academicFormula: "P(Q) = MC(Q) \\implies Q^* = Q_C \\implies DWL = 0, \\quad CS = 0, \\quad PS = TS",
    graphTip: "Vẽ đồ thị độc quyền phân biệt giá cấp 1 với toàn bộ diện tích dưới đường cầu và trên đường MC biến thành thặng dư nhà sản xuất.",
    examTip: "Phân biệt giá cấp 1 đạt hiệu quả phân bổ Pareto ($DWL = 0$) nhưng hoàn toàn bất công đối với người tiêu dùng."
  },
  {
    id: "tf15",
    category: "micro",
    chapter: 6,
    topic: "Cạnh tranh độc quyền trong dài hạn",
    statement: "Trong dài hạn, doanh nghiệp trong thị trường cạnh tranh độc quyền sản xuất ở mức sản lượng tối thiểu hóa chi phí trung bình (ATC min) giống như cạnh tranh hoàn hảo.",
    verdict: "SAI",
    explanation: "Trong dài hạn, cạnh tranh độc quyền có lợi nhuận kinh tế bằng 0 ($P = ATC$) do rào cản gia nhập tự do. Tuy nhiên, vì sản phẩm có sự phân biệt, đường cầu của doanh nghiệp dốc xuống, tiếp xúc với đường $ATC$ tại nhánh dốc xuống của $ATC$ chứ KHÔNG PHẢI tại đáy cực tiểu $ATC_{\\min}$. Khoảng cách giữa sản lượng thực tế và sản lượng tại $ATC_{\\min}$ được gọi là Năng lực sản xuất dư thừa (Excess Capacity).",
    academicFormula: "P = ATC > MC \\quad \\text{và} \\quad Q_{ctdq} < Q_{hiệu\\,quả} \\implies \\text{Có năng lực thừa}",
    graphTip: "Vẽ đường cầu dốc xuống tiếp xúc với ATC tại điểm dốc xuống, so sánh với đáy ATC.",
    examTip: "Đặc trưng dài hạn cạnh tranh độc quyền: Lợi nhuận bằng 0, có năng lực thừa, bán giá cao hơn chi phí cận biên ($P > MC$)."
  },

  // ================= VĨ MÔ =================
  {
    id: "tf16",
    category: "macro",
    chapter: 7,
    topic: "Đo lường GDP & Hàng hóa trung gian",
    statement: "Một giao dịch mua bán thép giữa một nhà máy luyện kim và một nhà máy sản xuất ô tô sẽ được cộng trực tiếp vào GDP của năm đó.",
    verdict: "SAI",
    explanation: "Thép bán cho nhà máy ô tô là Hàng hóa trung gian (Intermediate good) - được sử dụng làm đầu vào để tiếp tục sản xuất ra ô tô. Theo định nghĩa, GDP chỉ tính giá trị của HÀNG HÓA VÀ DỊCH VỤ CUỐI CÙNG. Giá trị của thép sẽ được phản ánh trọn vẹn trong giá bán cuối cùng của chiếc ô tô khi bán ra thị trường. Nếu cộng trực tiếp giá trị thép vào GDP sẽ phạm phải lỗi Tính trùng (Double Counting), thổi phồng GDP thực tế.",
    academicFormula: "GDP = \\sum VA = \\text{Giá trị hàng hóa cuối cùng} \\quad (\\text{Loại bỏ chi phí trung gian})",
    graphTip: "Nêu chuỗi giá trị gia tăng qua 3 khâu: Quặng -> Thép -> Ô tô để chứng minh GDP chỉ bằng giá bán ô tô.",
    examTip: "Luôn kiểm tra mục đích sử dụng: mua để tiêu dùng cuối cùng hay mua làm nguyên liệu đầu vào."
  },
  {
    id: "tf17",
    category: "macro",
    chapter: 7,
    topic: "Thành phần Đầu tư (I) trong GDP",
    statement: "Khi một người dân bỏ 1 tỷ đồng mua cổ phiếu VinFast trên sàn chứng khoán, khoản tiền này được tính vào thành phần Đầu tư (I) trong GDP.",
    verdict: "SAI",
    explanation: "Trong kinh tế học vĩ mô, Đầu tư ($I$) là chi tiêu để mua sắm TƯ BẢN THỰC TẾ MỚI (máy móc thiết bị mới, xây dựng nhà xưởng mới, hàng tồn kho mới, và nhà ở mới của hộ gia đình). Mua cổ phiếu, trái phiếu hay gửi tiết kiệm chỉ là 'Đầu tư tài chính' cá nhân - một sự chuyển giao quyền sở hữu tài sản tài chính từ người này sang người khác, không trực tiếp tạo ra tư bản sản xuất mới nào cho nền kinh tế, nên không được tính vào $I$ trong GDP.",
    academicFormula: "I_{vĩ\\,mô} = \\Delta K + \\Delta Hàng\\,tồn\\,kho + Nhà\\,mới \\quad (\\ne \\text{Giao dịch cổ phiếu})",
    graphTip: "Phân biệt thị trường tài chính (vốn vay) và thị trường hàng hóa tư bản thực.",
    examTip: "Bẫy ngôn ngữ phổ biến nhất giữa đời sống thực tế và định nghĩa vĩ mô của Mankiw."
  },
  {
    id: "tf18",
    category: "macro",
    chapter: 7,
    topic: "GDP vs GNP",
    statement: "Lợi nhuận của tập đoàn Samsung kiếm được từ nhà máy sản xuất tại Bắc Ninh (Việt Nam) được tính vào GNP của Việt Nam.",
    verdict: "SAI",
    explanation: "GDP tính theo LÃNH THỔ (bất kỳ ai sản xuất trong biên giới quốc gia), còn GNP/GNI tính theo QUỐC TỊCH (công dân hoặc doanh nghiệp mang quốc tịch nước đó tạo ra). Samsung là doanh nghiệp Hàn Quốc, nhà máy đặt tại Việt Nam nên giá trị sản xuất được tính vào GDP của Việt Nam, nhưng lợi nhuận sau khi chuyển về nước sẽ được tính vào GNP của HÀN QUỐC (chứ không phải GNP của Việt Nam).",
    academicFormula: "GNP_{VN} = GDP_{VN} + NPI \\quad (NPI = \\text{Thu nhập từ nước ngoài} - \\text{Thu nhập trả ra nước ngoài} < 0)",
    graphTip: "Vẽ 2 vòng tròn giao nhau: Vòng tròn GDP (trong lãnh thổ) và Vòng tròn GNP (công dân mang quốc tịch).",
    examTip: "Việt Nam có FDI rất lớn nên GDP thường lớn hơn đáng kể so với GNP ($NPI < 0$)."
  },
  {
    id: "tf19",
    category: "macro",
    chapter: 8,
    topic: "Tăng trưởng kinh tế Solow",
    statement: "Tăng tỷ lệ tiết kiệm và đầu tư máy móc trong nước có thể duy trì tốc độ tăng trưởng kinh tế cao vô hạn trong dài hạn.",
    verdict: "SAI",
    explanation: "Theo Mô hình tăng trưởng Solow, tư bản chịu quy luật Lợi suất giảm dần (Diminishing returns to capital). Khi mức tích lũy tư bản ngày càng cao, mỗi đồng vốn đầu tư thêm vào máy móc mang lại sản lượng biên ngày càng nhỏ, trong khi chi phí khấu hao tăng tuyến tính theo lượng tư bản. Nền kinh tế sẽ đạt tới Trạng thái dừng (Steady State), tại đó đầu tư mới chỉ đủ bù đắp khấu hao, tăng trưởng GDP trên đầu người sẽ dừng lại. Trong dài hạn, động lực duy nhất duy trì tăng trưởng liên tục là TIẾN BỘ CÔNG NGHỆ ($A$).",
    academicFormula: "Y = A \\cdot F(K, L) \\implies MP_K \\downarrow \\text{ khi } K \\uparrow \\implies \\text{Hội tụ về trạng thái dừng } s \\cdot f(k^*) = (n + g + \\delta)k^*",
    graphTip: "Vẽ đồ thị Solow với hàm đầu tư $s \\cdot f(k)$ cong xuống cắt đường khấu hao $(\\delta + n)k$ tại điểm dừng $k^*$.",
    examTip: "Tiết kiệm cao chỉ làm tăng MỨC sản lượng trong trạng thái dừng, không làm thay đổi TỐC ĐỘ tăng trưởng dài hạn."
  },
  {
    id: "tf20",
    category: "macro",
    chapter: 9,
    topic: "Chỉ số giá CPI vs GDP Deflator",
    statement: "Khi giá máy bay tiêm kích quân sự do quân đội quốc gia đặt mua trong nước tăng giá mạnh, chỉ số giá tiêu dùng CPI sẽ tăng vọt.",
    verdict: "SAI",
    explanation: "Chỉ số CPI chỉ đo lường giá của 'Giỏ hàng hóa và dịch vụ tiêu dùng điển hình của HỘ GIA ĐÌNH'. Máy bay quân sự là chi tiêu mua sắm của Chính phủ ($G$), không nằm trong giỏ hàng tiêu dùng của người dân, nên CPI hoàn toàn KHÔNG THAY ĐỔI. Ngược lại, vì máy bay được sản xuất trong nước, nó được tính vào GDP nên Chỉ số điều chỉnh GDP (GDP Deflator) mới là chỉ số tăng lên.",
    academicFormula: "CPI = \\frac{\\sum P_t Q_{basket}^{Hộ\\,gia\\,đình}}{\\sum P_0 Q_{basket}^{Hộ\\,gia\\,đình}} \\times 100; \\quad GDP\\,Deflator = \\frac{GDP_n}{GDP_r} \\times 100",
    graphTip: "Lập bảng đối chiếu 2 cột so sánh phạm vi tính toán của CPI và GDP Deflator.",
    examTip: "Câu hỏi kinh điển kiểm tra sự hiểu biết sâu sắc về sự khác biệt giữa CPI và Deflator."
  },
  {
    id: "tf21",
    category: "macro",
    chapter: 9,
    topic: "Thất nghiệp tự nhiên & Toàn dụng",
    statement: "Một nền kinh tế đạt mức Toàn dụng nhân công (Full Employment) nghĩa là tỷ lệ thất nghiệp của nền kinh tế bằng 0%.",
    verdict: "SAI",
    explanation: "Toàn dụng nhân công KHÔNG PHẢI là tỷ lệ thất nghiệp bằng 0%. Nền kinh tế thị trường luôn tồn tại Thất nghiệp tự nhiên ($u_n$, thường khoảng 4-5%) bao gồm Thất nghiệp ma sát (người lao động đổi việc, tìm việc phù hợp) và Thất nghiệp cơ cấu (thay đổi công nghệ, kỹ năng chưa khớp). Toàn dụng nhân công xảy ra khi Thất nghiệp chu kỳ bằng 0 ($u_{chu\\,kỳ} = 0$), khi đó Tỷ lệ thất nghiệp thực tế bằng đúng Tỷ lệ thất nghiệp tự nhiên ($u = u_n$).",
    academicFormula: "u = u_n + u_{chu\\,kỳ} = (u_{ma\\,sát} + u_{cơ\\,cấu}) + u_{chu\\,kỳ}. \\quad \\text{Toàn dụng } \\iff u = u_n > 0",
    graphTip: "Vẽ đường Phillips dài hạn thẳng đứng tại mức thất nghiệp tự nhiên $u_n$.",
    examTip: "Tỷ lệ thất nghiệp bằng 0% là điều bất khả thi và phi thực tế trong nền kinh tế thị trường tự do."
  },
  {
    id: "tf22",
    category: "macro",
    chapter: 10,
    topic: "Cung tiền & Số nhân tiền",
    statement: "Khi người dân lo sợ khủng hoảng kinh tế và ồ ạt rút tiền gửi ngân hàng về cất giữ dưới dạng tiền mặt tại nhà, lượng cung tiền (MS) của nền kinh tế sẽ không đổi vì tổng số tiền không mất đi đâu.",
    verdict: "SAI",
    explanation: "Khi người dân rút tiền mặt về giữ tại nhà, tỷ lệ nắm giữ tiền mặt so với tiền gửi ($cr = C/D$) tăng vọt. Theo công thức số nhân tiền $m_M = \\frac{cr + 1}{cr + rr}$, khi $cr$ tăng sẽ làm SỐ NHÂN TIỀN $m_M$ GIẢM MẠNH. Hệ thống ngân hàng thương mại bị mất thanh khoản, buộc phải thu hồi nợ và không thể tiếp tục cho vay để tạo tiền gửi mới. Với cơ số tiền tệ $MB$ không đổi, Khối lượng cung tiền toàn nền kinh tế ($MS = m_M \\times MB$) sẽ bị CO CỤM TRẦM TRỌNG (đây chính là nguyên nhân gây ra Đại suy thoái 1929-1933 tại Mỹ).",
    academicFormula: "cr \\uparrow \\implies m_M = \\frac{cr + 1}{cr + rr} \\downarrow \\implies MS = m_M \\cdot MB \\downarrow \\downarrow",
    graphTip: "Mô tả bảng cân đối kế toán của ngân hàng thương mại khi tiền gửi $D$ bị rút đột ngột.",
    examTip: "Tiền nằm trong ngân hàng được nhân lên nhiều lần; tiền rút về két sắt làm đóng băng cơ chế tạo tiền."
  },
  {
    id: "tf23",
    category: "macro",
    chapter: 10,
    topic: "Tính trung tính của tiền tệ",
    statement: "Theo học thuyết kinh tế cổ điển, Ngân hàng Trung ương in thêm nhiều tiền sẽ thúc đẩy sản xuất và làm tăng trưởng GDP thực tế trong dài hạn.",
    verdict: "SAI",
    explanation: "Theo Thuyết nhị phân cổ điển (Classical Dichotomy) và Tính trung tính của tiền tệ (Monetary Neutrality), tiền tệ là tấm màn che danh nghĩa. Trong dài hạn, GDP thực tế ($Y$) được xác định hoàn toàn bởi các biến số thực: lao động ($L$), tư bản ($K$), tài nguyên ($N$) và công nghệ ($A$). Tăng cung tiền ($M$) chỉ làm thay đổi tỷ lệ thuận mức giá chung ($P$) gây ra lạm phát theo phương trình số lượng $M \\cdot V = P \\cdot Y$, hoàn toàn KHÔNG THỂ làm tăng sản lượng thực tế trong dài hạn.",
    academicFormula: "M \\cdot V = P \\cdot Y \\implies \\%\\Delta M = \\%\\Delta P \\quad (V \\text{ và } Y \\text{ cố định trong dài hạn})",
    graphTip: "Vẽ đường Tổng cung dài hạn (LRAS) thẳng đứng tại $Y_p$, in tiền làm AD dịch phải chỉ đẩy giá P tăng.",
    examTip: "Nguyên lý 9 của Mankiw: Giá cả tăng khi chính phủ in quá nhiều tiền."
  },
  {
    id: "tf24",
    category: "macro",
    chapter: 11,
    topic: "Chính sách tài khóa & Hiện tượng lấn át",
    statement: "Khi chính phủ tăng chi tiêu đầu tư công (G) 100 tỷ đồng, sản lượng cân bằng quốc gia sẽ tăng đúng bằng 100 tỷ đồng nhân với số nhân chi tiêu Keynes (ΔY = k × ΔG).",
    verdict: "SAI",
    explanation: "Công thức $\\Delta Y = k \\times \\Delta G$ chỉ đúng trong mô hình Keynes giản đơn khi bỏ qua thị trường tiền tệ và lãi suất. Trong thực tế, khi chính phủ vay nợ để chi tiêu, cầu vốn vay tăng làm LÃI SUẤT THỊ TRƯỜNG BỊ ĐẨY LÊN CAO ($r \\uparrow$). Lãi suất tăng làm chi phí vốn đắt đỏ, khiến các doanh nghiệp tư nhân cắt giảm đầu tư ($I \\downarrow$). Hiện tượng này gọi là 'HIỆN TƯỢNG LẤN ÁT ĐẦU TƯ TƯ NHÂN' (Crowding-out effect). Việc $I$ sụt giảm đã triệt tiêu một phần tác động mở rộng ban đầu của $G$, khiến sản lượng thực tế tăng ít hơn nhiều so với lý thuyết số nhân ban đầu.",
    academicFormula: "G \\uparrow \\implies AD \\uparrow \\implies Y \\uparrow \\implies M^D \\uparrow \\implies r \\uparrow \\implies I \\downarrow \\implies \\Delta Y_{thực\\,tế} < k \\cdot \\Delta G",
    graphTip: "Vẽ mô hình IS-LM: G tăng làm IS dịch phải, lãi suất tăng từ $r_1 \\to r_2$, sản lượng bị lấn át một đoạn so với khi lãi suất cố định.",
    examTip: "Luôn phải nhắc tới 'Hiện tượng lấn át' khi làm bài thi tự luận về chính sách tài khóa mở rộng."
  },
  {
    id: "tf25",
    category: "macro",
    chapter: 11,
    topic: "Đường Phillips & Đánh đổi ngắn hạn/dài hạn",
    statement: "Chính phủ có thể dùng chính sách tiền tệ mở rộng để duy trì vĩnh viễn mức thất nghiệp thấp hơn mức thất nghiệp tự nhiên.",
    verdict: "SAI",
    explanation: "Đường Phillips chỉ thể hiện sự đánh đổi nghịch biến giữa Lạm phát và Thất nghiệp TRONG NGẮN HẠN khi kỳ vọng giá cả chưa kịp điều chỉnh. Trong dài hạn, người lao động và doanh nghiệp sẽ nhận ra lạm phát tăng cao và điều chỉnh kỳ vọng tiền lương danh nghĩa tăng lên, làm chi phí sản xuất tăng, kéo đường Tổng cung ngắn hạn ($SRAS$) dịch chuyển sang trái, đưa sản lượng về lại mức tiềm năng và thất nghiệp quay trở về mức Thất nghiệp tự nhiên ($u_n$). Do đó, Đường Phillips trong dài hạn (LRPC) là một ĐƯỜNG THẲNG ĐỨNG tại mức $u_n$. Mọi nỗ lực duy trì thất nghiệp thấp bằng cách in tiền sẽ chỉ dẫn đến lạm phát phi mã.",
    academicFormula: "u - u_n = -a(P - P^e). \\quad \\text{Dài hạn: } P = P^e \\implies u = u_n \\quad (\\text{LRPC thẳng đứng})",
    graphTip: "Vẽ đồ thị đường Phillips với SRPC dốc xuống và LRPC thẳng đứng tại $u_n$.",
    examTip: "Friedman và Phelps đã đoạt giải Nobel kinh tế nhờ chứng minh đường Phillips dài hạn là thẳng đứng."
  },
  {
    id: "tf26",
    category: "macro",
    chapter: 12,
    topic: "Chính sách thương mại quốc tế",
    statement: "Áp đặt thuế quan và hạn ngạch nhập khẩu cao sẽ giúp một quốc gia cải thiện được Cán cân thương mại (tăng Xuất khẩu ròng NX).",
    verdict: "SAI",
    explanation: "Theo đồng nhất thức tài khoản quốc gia trong nền kinh tế mở: $NX = S - I$ (Xuất khẩu ròng luôn bằng Tiết kiệm quốc dân trừ Đầu tư nội địa). Hàng rào thuế quan không làm thay đổi trực tiếp Tiết kiệm quốc dân hay Đầu tư nội địa, nên không thể làm thay đổi $NX$. Cơ chế truyền dẫn: Thuế quan làm giảm Nhập khẩu ($IM$), làm giảm cung nội tệ trên thị trường ngoại hối, khiến ĐỒNG NỘI TỆ TĂNG GIÁ THỰC TẾ ($e_r \\uparrow$). Đồng nội tệ tăng giá làm hàng xuất khẩu trở nên đắt đỏ hơn, bóp nghẹt Xuất khẩu ($X$). Lượng sụt giảm của $X$ bù trừ đúng bằng lượng giảm của $IM$, khiến $NX$ giữ nguyên không đổi, trong khi quy mô thương mại toàn cầu bị thu hẹp và người tiêu dùng chịu thiệt.",
    academicFormula: "NX = S - I. \\quad \\text{Thuế quan } \\implies IM \\downarrow \\implies e_r \\uparrow \\implies X \\downarrow \\implies \\Delta NX = 0",
    graphTip: "Vẽ thị trường ngoại hối với đường cung nội tệ thẳng đứng $S - I$ không đổi, đường cầu ngoại tệ dịch phải làm tỷ giá tăng.",
    examTip: "Nghịch lý thuế quan: Muốn giảm thâm hụt thương mại phải tăng Tiết kiệm ($S$) hoặc giảm Thâm hụt ngân sách ($G - T$), không thể dùng thuế quan."
  },
  {
    id: "tf27",
    category: "macro",
    chapter: 11,
    topic: "Mô hình IS-LM & Bẫy thanh khoản",
    statement: "Trong trạng thái Bẫy thanh khoản (Liquidity Trap), chính sách tiền tệ mở rộng (bơm tiền) có hiệu quả kích thích kinh tế cao nhất.",
    verdict: "SAI",
    explanation: "Trong Bẫy thanh khoản (khi lãi suất thị trường đã chạm đáy xấp xỉ 0%), đường $LM$ trở nên NẰM NGANG HOÀN TOÀN vì người dân có nhu cầu giữ tiền mặt vô hạn, sẵn sàng giữ bất kỳ lượng tiền nào mà không mua trái phiếu. Khi NHTW bơm thêm tiền vào lưu thông, lãi suất không thể giảm thêm được nữa, do đó không thể kích thích thêm đầu tư tư nhân ($I$). Chính sách tiền tệ lúc này hoàn toàn mất tác dụng (vô hiệu hóa). Ngược lại, CHÍNH SÁCH TÀI KHÓA (tăng $G$) đạt hiệu quả tối đa vì không hề bị hiện tượng lấn át đầu tư ($LM$ nằm ngang thì lãi suất không đổi).",
    academicFormula: "LM \\text{ nằm ngang } \\implies \\frac{\\Delta Y}{\\Delta M} = 0 \\text{ (Tiền tệ vô hiệu)}; \\quad \\Delta Y = k \\cdot \\Delta G \\text{ (Tài khóa tối đa)}",
    graphTip: "Vẽ đường LM nằm ngang ở đáy lãi suất, dịch LM sang phải không làm đổi giao điểm IS, nhưng dịch IS sang phải sẽ mở rộng sản lượng tối đa.",
    examTip: "Bẫy thanh khoản là trường phái Keynes đặc trưng gắn liền với cuộc khủng hoảng tài chính toàn cầu 2008 và Nhật Bản suốt 2 thập kỷ."
  },
  {
    id: "tf28",
    category: "macro",
    chapter: 12,
    topic: "Ngang giá sức mua (PPP)",
    statement: "Theo học thuyết Ngang giá sức mua (PPP), nếu quốc gia có tỷ lệ lạm phát cao hơn nước ngoài thì đồng tiền của quốc gia đó sẽ có xu hướng tăng giá trên thị trường ngoại hối.",
    verdict: "SAI",
    explanation: "Theo PPP, tỷ giá danh nghĩa phản ánh tỷ lệ giá cả giữa hai quốc gia: $e = P^* / P$. Lấy logarit và đạo hàm theo thời gian: $\\%\\Delta e = \\pi^* - \\pi$. Nếu quốc gia trong nước có lạm phát cao hơn nước ngoài ($\\pi > \\pi^*$), sức mua nội tệ giảm nhanh hơn ngoại tệ, dẫn đến đồng nội tệ phải GIẢM GIÁ (mất giá) so với đồng ngoại tệ để duy trì sự cân bằng sức mua hàng hóa giữa hai quốc gia.",
    academicFormula: "\\%\\Delta e \\approx \\pi^* - \\pi < 0 \\implies \\text{Đồng nội tệ giảm giá (Depreciation)}",
    graphTip: "Nêu quy luật Một giá (Law of One Price) làm nền tảng cho học thuyết PPP.",
    examTip: "Lạm phát cao luôn làm suy yếu và giảm giá đồng tiền quốc gia trong dài hạn."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRUE_FALSE_DATA;
}
