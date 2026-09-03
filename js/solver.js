// Module giải toán và mô phỏng kinh tế học đại cương tự động
const EconSolver = {
  /**
   * Giải bài toán Cung - Cầu, Cân bằng và Can thiệp chính sách
   * QD = a - b*P <=> P = (a/b) - (1/b)*QD
   * QS = c + d*P <=> P = (-c/d) + (1/d)*QS
   */
  solveEquilibrium(a, b, c, d, policy = { type: 'none', value: 0 }) {
    // Kiểm tra tính hợp lệ
    if (b <= 0 || d <= 0) {
      throw new Error("Hệ số b và d phải lớn hơn 0 (Đường cầu dốc xuống, đường cung dốc lên).");
    }
    if (a <= c) {
      throw new Error("Hệ số a phải lớn hơn c để cung và cầu cắt nhau ở góc phần tư thứ nhất.");
    }

    // 1. Cân bằng ban đầu
    const P_star = (a - c) / (b + d);
    const Q_star = a - b * P_star;

    // Tung độ góc (Giá mà lượng cầu = 0 và lượng cung = 0)
    const P_max_demand = a / b; // P khi QD = 0
    const P_min_supply = c >= 0 ? 0 : -c / d; // P khi QS = 0

    // Thặng dư ban đầu
    const CS_0 = 0.5 * (P_max_demand - P_star) * Q_star;
    const PS_0 = 0.5 * (P_star - P_min_supply) * Q_star;
    const TS_0 = CS_0 + PS_0;

    let result = {
      initial: {
        P: Number(P_star.toFixed(2)),
        Q: Number(Q_star.toFixed(2)),
        P_max: Number(P_max_demand.toFixed(2)),
        P_min: Number(P_min_supply.toFixed(2)),
        CS: Number(CS_0.toFixed(2)),
        PS: Number(PS_0.toFixed(2)),
        TS: Number(TS_0.toFixed(2))
      },
      policy: { ...policy },
      new: null,
      stepsHtml: ""
    };

    let steps = [];
    steps.push(`<div class="step-box">
      <h4 class="font-bold text-indigo-700 dark:text-indigo-300">1. Xác định điểm cân bằng ban đầu (E₀)</h4>
      <p>Phương trình cân bằng thị trường: $Q_D = Q_S$</p>
      <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\iff ${a} - ${b}P = ${c} + ${d}P$$</div>
      <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$\\iff ${b + d}P = ${a - c} \\implies P^* = \\mathbf{${P_star.toFixed(2)}}$$</div>
      <p>Thay $P^* = ${P_star.toFixed(2)}$ vào phương trình cầu:</p>
      <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$Q^* = ${a} - ${b}(${P_star.toFixed(2)}) = \\mathbf{${Q_star.toFixed(2)}}$$</div>
      <p>• Thặng dư người tiêu dùng: $CS_0 = \\frac{1}{2}(${P_max_demand.toFixed(2)} - ${P_star.toFixed(2)}) \\times ${Q_star.toFixed(2)} = \\mathbf{${CS_0.toFixed(2)}}$</p>
      <p>• Thặng dư nhà sản xuất: $PS_0 = \\frac{1}{2}(${P_star.toFixed(2)} - ${P_min_supply.toFixed(2)}) \\times ${Q_star.toFixed(2)} = \\mathbf{${PS_0.toFixed(2)}}$</p>
      <p>• Tổng thặng dư xã hội: $TS_0 = CS_0 + PS_0 = \\mathbf{${TS_0.toFixed(2)}}$</p>
    </div>`);

    // 2. Xử lý các chính sách can thiệp
    if (policy.type === 'tax' && policy.value > 0) {
      const t = Number(policy.value);
      // Đánh thuế t lên người bán: P_s = P_b - t => QS = c + d*(P_b - t) = (c - d*t) + d*P_b
      // Cân bằng mới: a - b*P_b = c - d*t + d*P_b => (b+d)*P_b = a - c + d*t
      const Pb = (a - c + d * t) / (b + d);
      const Ps = Pb - t;
      const Qt = a - b * Pb;

      if (Qt <= 0) {
        throw new Error("Mức thuế quá cao làm thị trường ngưng trệ (sản lượng sau thuế <= 0)!");
      }

      const buyerTaxShare = Pb - P_star;
      const sellerTaxShare = P_star - Ps;
      const taxRevenue = t * Qt;
      const CS_new = 0.5 * (P_max_demand - Pb) * Qt;
      const PS_new = 0.5 * (Ps - P_min_supply) * Qt;
      const DWL = 0.5 * t * (Q_star - Qt);
      const TS_new = CS_new + PS_new + taxRevenue;

      result.new = {
        Pb: Number(Pb.toFixed(2)),
        Ps: Number(Ps.toFixed(2)),
        Q: Number(Qt.toFixed(2)),
        buyerShare: Number(buyerTaxShare.toFixed(2)),
        sellerShare: Number(sellerTaxShare.toFixed(2)),
        taxRevenue: Number(taxRevenue.toFixed(2)),
        CS: Number(CS_new.toFixed(2)),
        PS: Number(PS_new.toFixed(2)),
        DWL: Number(DWL.toFixed(2)),
        TS: Number(TS_new.toFixed(2))
      };

      steps.push(`<div class="step-box mt-3">
        <h4 class="font-bold text-amber-700 dark:text-amber-300">2. Phân tích tác động của Thuế ($t = ${t}$)</h4>
        <p>Khi Chính phủ đánh thuế $t = ${t}$/đơn vị sản phẩm, người bán nhận được $P_s = P_b - ${t}$.</p>
        <p>Hàm cung mới theo giá người mua trả: $Q_S' = ${c} + ${d}(P_b - ${t}) = ${(c - d*t).toFixed(2)} + ${d}P_b$</p>
        <p>Cân bằng mới:</p>
        <div class="my-1.5 overflow-x-auto text-indigo-700 dark:text-indigo-300">$$${a} - ${b}P_b = ${(c - d*t).toFixed(2)} + ${d}P_b \\implies P_b = \\mathbf{${Pb.toFixed(2)}}$$</div>
        <p>• Giá người mua trả: $P_b = \\mathbf{${Pb.toFixed(2)}}$</p>
        <p>• Giá người bán nhận: $P_s = P_b - t = ${Pb.toFixed(2)} - ${t} = \\mathbf{${Ps.toFixed(2)}}$</p>
        <p>• Sản lượng giao dịch mới: $Q_t = ${a} - ${b}(${Pb.toFixed(2)}) = \\mathbf{${Qt.toFixed(2)}}$</p>
        <div class="bg-indigo-50 dark:bg-indigo-950/40 p-3 rounded-lg my-2 border border-indigo-200 dark:border-indigo-800">
          <p><strong>Phân chia gánh nặng thuế:</strong></p>
          <p>• Người mua chịu: $P_b - P^* = ${Pb.toFixed(2)} - ${P_star.toFixed(2)} = \\mathbf{${buyerTaxShare.toFixed(2)}}$ (${((buyerTaxShare/t)*100).toFixed(1)}%)</p>
          <p>• Người bán chịu: $P^* - P_s = ${P_star.toFixed(2)} - ${Ps.toFixed(2)} = \\mathbf{${sellerTaxShare.toFixed(2)}}$ (${((sellerTaxShare/t)*100).toFixed(1)}%)</p>
          <p>• Doanh thu thuế chính phủ thu được ($T$): $t \\times Q_t = ${t} \\times ${Qt.toFixed(2)} = \\mathbf{${taxRevenue.toFixed(2)}}$</p>
          <p>• <strong>Tổn thất vô ích xã hội ($DWL$):</strong> $\\frac{1}{2} \\times t \\times (Q^* - Q_t) = \\frac{1}{2} \\times ${t} \\times (${Q_star.toFixed(2)} - ${Qt.toFixed(2)}) = \\mathbf{${DWL.toFixed(2)}}$</p>
        </div>
      </div>`);
    } else if (policy.type === 'ceiling' && policy.value > 0) {
      const P_ceil = Number(policy.value);
      if (P_ceil >= P_star) {
        steps.push(`<div class="step-box mt-3 bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg border border-yellow-300">
          <h4 class="font-bold text-yellow-800 dark:text-yellow-300">Cảnh báo về Giá trần:</h4>
          <p>Mức giá trần quy định $P_{trần} = ${P_ceil} \\ge P^* = ${P_star.toFixed(2)}$.</p>
          <p><strong>Kết luận:</strong> Giá trần KHÔNG CÓ HIỆU LỰC (Không ràng buộc). Thị trường vẫn tự do giao dịch tại mức giá cân bằng $P^* = ${P_star.toFixed(2)}$ và sản lượng $Q^* = ${Q_star.toFixed(2)}$.</p>
        </div>`);
      } else {
        const Qd_ceil = Math.max(0, a - b * P_ceil);
        const Qs_ceil = Math.max(0, c + d * P_ceil);
        const shortage = Qd_ceil - Qs_ceil;
        const DWL_ceil = 0.5 * (P_star - P_ceil) * (Q_star - Qs_ceil);

        result.new = {
          P: P_ceil,
          Q_traded: Qs_ceil,
          Qd: Qd_ceil,
          Qs: Qs_ceil,
          shortage: shortage,
          DWL: DWL_ceil
        };

        steps.push(`<div class="step-box mt-3">
          <h4 class="font-bold text-red-600 dark:text-red-400">2. Phân tích Giá trần có hiệu lực ($P_{trần} = ${P_ceil} < P^*$)</h4>
          <p>Tại mức giá trần $P = ${P_ceil}$:</p>
          <p>• Lượng cầu: $Q_D = ${a} - ${b}(${P_ceil}) = \\mathbf{${Qd_ceil.toFixed(2)}}$</p>
          <p>• Lượng cung: $Q_S = ${c} + ${d}(${P_ceil}) = \\mathbf{${Qs_ceil.toFixed(2)}}$</p>
          <p>• <strong>Tình trạng thị trường:</strong> Thiếu hụt hàng hóa (Shortage) = $Q_D - Q_S = ${Qd_ceil.toFixed(2)} - ${Qs_ceil.toFixed(2)} = \\mathbf{${shortage.toFixed(2)}}$ đơn vị sản phẩm.</p>
          <p>• Lượng thực tế giao dịch chỉ là $Q_{giao\\,dịch} = Q_S = \\mathbf{${Qs_ceil.toFixed(2)}}$. Hệ quả dẫn đến xếp hàng, phân phối theo hạn mức hoặc chợ đen.</p>
        </div>`);
      }
    } else if (policy.type === 'floor' && policy.value > 0) {
      const P_floor = Number(policy.value);
      if (P_floor <= P_star) {
        steps.push(`<div class="step-box mt-3 bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg border border-yellow-300">
          <h4 class="font-bold text-yellow-800 dark:text-yellow-300">Cảnh báo về Giá sàn:</h4>
          <p>Mức giá sàn quy định $P_{sàn} = ${P_floor} \\le P^* = ${P_star.toFixed(2)}$.</p>
          <p><strong>Kết luận:</strong> Giá sàn KHÔNG CÓ HIỆU LỰC (Không ràng buộc). Thị trường vẫn cân bằng tại $P^* = ${P_star.toFixed(2)}$ và $Q^* = ${Q_star.toFixed(2)}$.</p>
        </div>`);
      } else {
        const Qd_floor = Math.max(0, a - b * P_floor);
        const Qs_floor = Math.max(0, c + d * P_floor);
        const surplus = Qs_floor - Qd_floor;

        result.new = {
          P: P_floor,
          Q_traded: Qd_floor,
          Qd: Qd_floor,
          Qs: Qs_floor,
          surplus: surplus
        };

        steps.push(`<div class="step-box mt-3">
          <h4 class="font-bold text-blue-600 dark:text-blue-400">2. Phân tích Giá sàn có hiệu lực ($P_{sàn} = ${P_floor} > P^*$)</h4>
          <p>Tại mức giá sàn $P = ${P_floor}$:</p>
          <p>• Lượng cầu: $Q_D = ${a} - ${b}(${P_floor}) = \\mathbf{${Qd_floor.toFixed(2)}}$</p>
          <p>• Lượng cung: $Q_S = ${c} + ${d}(${P_floor}) = \\mathbf{${Qs_floor.toFixed(2)}}$</p>
          <p>• <strong>Tình trạng thị trường:</strong> Dư thừa hàng hóa (Surplus) = $Q_S - Q_D = ${Qs_floor.toFixed(2)} - ${Qd_floor.toFixed(2)} = \\mathbf{${surplus.toFixed(2)}}$ đơn vị sản phẩm.</p>
          <p>• Lượng thực tế người mua chấp nhận mua chỉ là $Q_{giao\\,dịch} = Q_D = \\mathbf{${Qd_floor.toFixed(2)}}$. Để duy trì giá sàn, Chính phủ phải bỏ ngân sách thu mua lượng dư thừa này.</p>
        </div>`);
      }
    }

    result.stepsHtml = steps.join("");
    return result;
  },

  /**
   * Tính độ co giãn khoảng theo phương pháp trung điểm (Midpoint)
   */
  calculateMidpointElasticity(P1, Q1, P2, Q2) {
    if (P1 === P2 || Q1 === Q2) {
      throw new Error("P và Q ở hai thời điểm phải khác nhau.");
    }
    const deltaQ = Q2 - Q1;
    const avgQ = (Q1 + Q2) / 2;
    const pctQ = (deltaQ / avgQ) * 100;

    const deltaP = P2 - P1;
    const avgP = (P1 + P2) / 2;
    const pctP = (deltaP / avgP) * 100;

    const Ed = deltaQ / avgQ / (deltaP / avgP);
    const absEd = Math.abs(Ed);

    const TR1 = P1 * Q1;
    const TR2 = P2 * Q2;
    const deltaTR = TR2 - TR1;

    let elasticityType = "";
    let trAnalysis = "";
    let businessAdvice = "";

    if (absEd > 1.05) {
      elasticityType = "Cầu co giãn nhiều (|Ed| > 1)";
      if (P2 > P1) {
        trAnalysis = "Giá tăng làm Doanh thu GIẢM (% giảm của lượng lớn hơn % tăng của giá).";
        businessAdvice = "Doanh nghiệp không nên tăng giá. Chiến lược tối ưu để tăng doanh thu là GIẢM GIÁ.";
      } else {
        trAnalysis = "Giá giảm làm Doanh thu TĂNG (% tăng của lượng bù đắp nhiều hơn % giảm của giá).";
        businessAdvice = "Chiến lược hạ giá là đúng đắn, đã giúp doanh thu tăng thêm!";
      }
    } else if (absEd < 0.95) {
      elasticityType = "Cầu co giãn ít / Không co giãn nhiều (|Ed| < 1, hàng thiết yếu)";
      if (P2 > P1) {
        trAnalysis = "Giá tăng làm Doanh thu TĂNG (% tăng giá lớn hơn % giảm sản lượng).";
        businessAdvice = "Doanh nghiệp nên xem xét tiếp tục TĂNG GIÁ để tối đa hóa doanh thu!";
      } else {
        trAnalysis = "Giá giảm làm Doanh thu GIẢM (% tăng lượng không đủ bù % giảm giá).";
        businessAdvice = "Không nên hạ giá đối với mặt hàng thiết yếu co giãn ít này.";
      }
    } else {
      elasticityType = "Cầu co giãn đơn vị (|Ed| ≈ 1)";
      trAnalysis = "Doanh thu hầu như không thay đổi khi thay đổi giá.";
      businessAdvice = "Doanh thu đang ở vùng cực đại.";
    }

    return {
      P1, Q1, P2, Q2,
      pctQ: Number(pctQ.toFixed(2)),
      pctP: Number(pctP.toFixed(2)),
      Ed: Number(Ed.toFixed(2)),
      absEd: Number(absEd.toFixed(2)),
      elasticityType,
      TR1: Number(TR1.toFixed(2)),
      TR2: Number(TR2.toFixed(2)),
      deltaTR: Number(deltaTR.toFixed(2)),
      trAnalysis,
      businessAdvice
    };
  },

  /**
   * Giải bài toán Chi phí doanh nghiệp TC = a*Q^2 + b*Q + c
   */
  solveCostFunctions(a, b, c, marketPrice = null) {
    if (a <= 0 || c < 0) {
      throw new Error("Hệ số a phải > 0 và chi phí cố định c (FC) phải >= 0.");
    }

    // FC = c
    const FC = c;
    // VC = a*Q^2 + b*Q
    // MC = 2*a*Q + b
    // AVC = a*Q + b
    // ATC = a*Q + b + c/Q

    // Điểm cực tiểu ATC: MC = ATC => 2aQ + b = aQ + b + c/Q => aQ = c/Q => Q^2 = c/a => Q_breakeven = sqrt(c/a)
    const Q_breakeven = Math.sqrt(c / a);
    const ATC_min = 2 * a * Q_breakeven + b; // hoặc a*Q_breakeven + b + c/Q_breakeven

    // Điểm cực tiểu AVC: AVC = a*Q + b. Khi Q -> 0, AVC_min = b. (Điểm đóng cửa P < b)
    const AVC_min = b;

    let analysis = {
      FC,
      formulaMC: `${2 * a}Q + ${b}`,
      formulaATC: `${a}Q + ${b} + ${c}/Q`,
      formulaAVC: `${a}Q + ${b}`,
      Q_breakeven: Number(Q_breakeven.toFixed(2)),
      ATC_min: Number(ATC_min.toFixed(2)),
      shutdownPrice: Number(AVC_min.toFixed(2)),
      marketAnalysis: null
    };

    if (marketPrice !== null && marketPrice > 0) {
      const P = Number(marketPrice);
      // Tối ưu cạnh tranh hoàn hảo: P = MC => P = 2aQ + b => Q_opt = (P - b) / (2a)
      if (P < AVC_min) {
        analysis.marketAnalysis = {
          status: "ĐÓNG CỬA SẢN XUẤT (Shutdown)",
          explanation: `Giá thị trường P = ${P} < AVC_min = ${AVC_min.toFixed(2)}. Nếu sản xuất, doanh nghiệp không bù đắp nổi chi phí biến đổi, thua lỗ sẽ lớn hơn chi phí cố định. Doanh nghiệp nên ngừng sản xuất (Q = 0), chịu lỗ đúng bằng FC = ${FC}.`,
          Q_opt: 0,
          profit: -FC
        };
      } else {
        const Q_opt = (P - b) / (2 * a);
        const TC_opt = a * Q_opt * Q_opt + b * Q_opt + c;
        const TR_opt = P * Q_opt;
        const profit = TR_opt - TC_opt;

        let statusText = "";
        if (profit > 0) {
          statusText = "SẢN XUẤT VÀ CÓ LỢI NHUẬN DƯƠNG (Economic Profit > 0)";
        } else if (Math.abs(profit) < 0.01) {
          statusText = "HÒA VỐN (Lợi nhuận kinh tế = 0)";
        } else {
          statusText = "TIẾP TỤC SẢN XUẤT TRONG NGẮN HẠN ĐỂ GIẢM LỖ (Loss minimization)";
        }

        analysis.marketAnalysis = {
          status: statusText,
          Q_opt: Number(Q_opt.toFixed(2)),
          TR: Number(TR_opt.toFixed(2)),
          TC: Number(TC_opt.toFixed(2)),
          profit: Number(profit.toFixed(2)),
          explanation: `Điều kiện tối đa hóa lợi nhuận P = MC => ${P} = ${2 * a}Q + ${b} => Q* = ${Q_opt.toFixed(2)}. Tại đây TR = ${TR_opt.toFixed(2)}, TC = ${TC_opt.toFixed(2)}, Lợi nhuận π = ${profit.toFixed(2)}.`
        };
      }
    }

    return analysis;
  },

  /**
   * Tính toán Vĩ mô: Số nhân tiền & Cung tiền
   */
  solveMoneySupply(cr, rr, MB) {
    if (cr < 0 || rr <= 0 || rr > 1) {
      throw new Error("Tỷ lệ tiền mặt cr >= 0 và tỷ lệ dự trữ rr phải trong khoảng (0, 1].");
    }
    const mm = (cr + 1) / (cr + rr);
    const MS = mm * MB;
    return {
      cr, rr, MB,
      moneyMultiplier: Number(mm.toFixed(3)),
      moneySupply: Number(MS.toFixed(2))
    };
  },

  /**
   * Tính toán Vĩ mô: GDP Deflator, CPI và Lạm phát
   */
  solveMacroIndicators(nominalGDP, realGDP, CPI_old, CPI_new) {
    const deflator = (nominalGDP / realGDP) * 100;
    const inflation = ((CPI_new - CPI_old) / CPI_old) * 100;
    return {
      deflator: Number(deflator.toFixed(2)),
      inflation: Number(inflation.toFixed(2))
    };
  },

  /**
   * Solver 4: Tối ưu hóa lựa chọn người tiêu dùng (Consumer Choice)
   * Hàm thỏa dụng Cobb-Douglas: U(X, Y) = X^alpha * Y^beta
   * Đường ngân sách: Px * X + Py * Y = I
   */
  solveConsumerChoice(alpha, beta, I, Px, Py) {
    if (alpha <= 0 || beta <= 0 || I <= 0 || Px <= 0 || Py <= 0) {
      throw new Error("Tất cả các thông số (alpha, beta, I, Px, Py) phải lớn hơn 0.");
    }
    const X_star = (alpha / (alpha + beta)) * (I / Px);
    const Y_star = (beta / (alpha + beta)) * (I / Py);
    const maxUtility = Math.pow(X_star, alpha) * Math.pow(Y_star, beta);
    const spendingX = Px * X_star;
    const spendingY = Py * Y_star;
    const MRS = (alpha * Y_star) / (beta * X_star); // MRS = Px / Py

    return {
      X_star: Number(X_star.toFixed(2)),
      Y_star: Number(Y_star.toFixed(2)),
      maxUtility: Number(maxUtility.toFixed(2)),
      spendingX: Number(spendingX.toFixed(2)),
      spendingY: Number(spendingY.toFixed(2)),
      MRS: Number(MRS.toFixed(3)),
      priceRatio: Number((Px / Py).toFixed(3)),
      explanation: `Tại điểm tối ưu E*(X* = ${X_star.toFixed(2)}, Y* = ${Y_star.toFixed(2)}), độ dốc đường bàng quan MRS = Px/Py = ${(Px / Py).toFixed(2)}. Tổng mức thỏa dụng đạt U_max = ${maxUtility.toFixed(2)}.`
    };
  },

  /**
   * Solver 5: Độc quyền thuần túy vs Cạnh tranh hoàn hảo
   * Cầu thị trường: P = a - b*Q
   * Chi phí: TC = c*Q^2 + d*Q + e  => MC = 2*c*Q + d
   */
  solveMonopoly(a, b, c, d, e) {
    if (a <= d || b <= 0 || c < 0) {
      throw new Error("Hệ số a phải lớn hơn d, b > 0 và c >= 0 để tồn tại sản lượng dương.");
    }
    // 1. Độc quyền: MR = MC => a - 2bQ = 2cQ + d => Q_M = (a - d) / (2b + 2c)
    const Q_M = (a - d) / (2 * b + 2 * c);
    const P_M = a - b * Q_M;
    const TR_M = P_M * Q_M;
    const TC_M = c * Math.pow(Q_M, 2) + d * Q_M + e;
    const profit_M = TR_M - TC_M;
    const MC_M = 2 * c * Q_M + d;
    const CS_M = 0.5 * (a - P_M) * Q_M;

    // 2. Cạnh tranh hoàn hảo: P = MC => a - bQ = 2cQ + d => Q_C = (a - d) / (b + 2c)
    const Q_C = (a - d) / (b + 2 * c);
    const P_C = a - b * Q_C;
    const CS_C = 0.5 * (a - P_C) * Q_C;

    // 3. Tổn thất xã hội (DWL) do độc quyền
    const DWL = 0.5 * (P_M - MC_M) * (Q_C - Q_M);
    const lerner = (P_M - MC_M) / P_M;

    return {
      monopoly: {
        Q: Number(Q_M.toFixed(2)),
        P: Number(P_M.toFixed(2)),
        TR: Number(TR_M.toFixed(2)),
        TC: Number(TC_M.toFixed(2)),
        profit: Number(profit_M.toFixed(2)),
        MC: Number(MC_M.toFixed(2)),
        CS: Number(CS_M.toFixed(2)),
        lernerIndex: Number(lerner.toFixed(3))
      },
      competitive: {
        Q: Number(Q_C.toFixed(2)),
        P: Number(P_C.toFixed(2)),
        CS: Number(CS_C.toFixed(2))
      },
      DWL: Number(DWL.toFixed(2)),
      comparison: `Độc quyền bán giá cao hơn (P_M = ${P_M.toFixed(2)} > P_C = ${P_C.toFixed(2)}) và sản lượng ít hơn (Q_M = ${Q_M.toFixed(2)} < Q_C = ${Q_C.toFixed(2)}), gây ra tổn thất vô ích DWL = ${DWL.toFixed(2)}.`
    };
  },

  /**
   * Solver 6: Mô hình số nhân chi tiêu Keynes (Keynesian Cross & Multiplier)
   * C = C0 + MPC*(1 - t)*Y
   * AE = C0 + I0 + G0 + NX0 + MPC*(1 - t)*Y
   */
  solveKeynesianCross(C0, MPC, I0, G0, NX0, taxRate = 0, Y_potential = null) {
    if (MPC <= 0 || MPC >= 1) {
      throw new Error("Xu hướng tiêu dùng cận biên MPC phải trong khoảng (0, 1).");
    }
    if (taxRate < 0 || taxRate >= 1) {
      throw new Error("Thuế suất t phải trong khoảng [0, 1).");
    }

    const A0 = C0 + I0 + G0 + NX0; // Chi tiêu tự định
    const slope = MPC * (1 - taxRate); // Độ dốc đường AE
    const k = 1 / (1 - slope); // Số nhân chi tiêu
    const Y_star = k * A0; // Sản lượng cân bằng

    let gapAnalysis = null;
    if (Y_potential !== null && Y_potential > 0) {
      const deltaY = Y_potential - Y_star;
      const deltaG = deltaY / k; // Cần tăng/giảm G
      gapAnalysis = {
        Y_potential: Number(Y_potential.toFixed(2)),
        deltaY: Number(deltaY.toFixed(2)),
        type: deltaY > 0 ? "Suy thoái (Recessionary Gap)" : deltaY < 0 ? "Lạm phát (Inflationary Gap)" : "Cân bằng tiềm năng",
        requiredDeltaG: Number(deltaG.toFixed(2))
      };
    }

    return {
      A0: Number(A0.toFixed(2)),
      slope: Number(slope.toFixed(3)),
      multiplier: Number(k.toFixed(3)),
      Y_star: Number(Y_star.toFixed(2)),
      taxMultiplier: Number((-MPC / (1 - slope)).toFixed(3)),
      gapAnalysis
    };
  },

  /**
   * Solver 7: Mô hình Cân bằng đồng thời IS - LM và Phối hợp chính sách
   */
  solveISLM(C0, MPC, T, I0, d, G, NX = 0, MSP = 500, k_money = 0.5, h_money = 40, deltaG = 0, deltaM = 0) {
    if (MPC <= 0 || MPC >= 1) throw new Error("MPC phải trong khoảng (0, 1).");
    if (k_money <= 0 || h_money <= 0 || d <= 0) throw new Error("Các hệ số độ nhạy (d, k, h) phải lớn hơn 0.");

    // 1. Phương trình IS ban đầu: Y = [A0 / (1 - MPC)] - [d / (1 - MPC)] * r
    const A0_IS = C0 - MPC * T + I0 + G + NX;
    const mult_exp = 1 / (1 - MPC);
    const is_intercept = mult_exp * A0_IS;
    const is_slope = mult_exp * d;

    // 2. Phương trình LM ban đầu: Y = (1 / k_money) * MSP + (h_money / k_money) * r
    const lm_intercept = MSP / k_money;
    const lm_slope = h_money / k_money;

    // 3. Cân bằng đồng thời IS = LM
    const r_star = (is_intercept - lm_intercept) / (is_slope + lm_slope);
    const Y_star = lm_intercept + lm_slope * r_star;
    const I_star = I0 - d * r_star;

    // 4. Phân tích chính sách nếu có deltaG hoặc deltaM
    let policyAnalysis = null;
    if (deltaG !== 0 || deltaM !== 0) {
      const new_G = G + deltaG;
      const new_MSP = MSP + deltaM;
      const new_A0 = C0 - MPC * T + I0 + new_G + NX;
      const new_is_intercept = mult_exp * new_A0;
      const new_lm_intercept = new_MSP / k_money;

      const new_r = (new_is_intercept - new_lm_intercept) / (is_slope + lm_slope);
      const new_Y = new_lm_intercept + lm_slope * new_r;
      const new_I = I0 - d * new_r;

      const deltaI = new_I - I_star;
      const keynesDeltaY = mult_exp * deltaG;
      const actualDeltaY = new_Y - Y_star;
      const crowdedOutY = keynesDeltaY - actualDeltaY;

      policyAnalysis = {
        new_G, new_MSP,
        new_r: Number(new_r.toFixed(3)),
        new_Y: Number(new_Y.toFixed(2)),
        new_I: Number(new_I.toFixed(2)),
        deltaI: Number(deltaI.toFixed(2)),
        actualDeltaY: Number(actualDeltaY.toFixed(2)),
        crowdedOutY: Number(crowdedOutY.toFixed(2))
      };
    }

    return {
      IS: {
        formula: `Y = ${is_intercept.toFixed(1)} - ${is_slope.toFixed(1)}r`,
        intercept: Number(is_intercept.toFixed(2)),
        slope: Number(is_slope.toFixed(2))
      },
      LM: {
        formula: `Y = ${lm_intercept.toFixed(1)} + ${lm_slope.toFixed(1)}r`,
        intercept: Number(lm_intercept.toFixed(2)),
        slope: Number(lm_slope.toFixed(2))
      },
      equilibrium: {
        r: Number(r_star.toFixed(3)),
        Y: Number(Y_star.toFixed(2)),
        I: Number(I_star.toFixed(2))
      },
      policyAnalysis
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EconSolver;
}

