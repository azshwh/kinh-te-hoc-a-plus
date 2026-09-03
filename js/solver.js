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
      <p>$$\\iff ${a} - ${b}P = ${c} + ${d}P$$</p>
      <p>$$\\iff ${b + d}P = ${a - c} \\implies P^* = \\mathbf{${P_star.toFixed(2)}}$$</p>
      <p>Thay $P^* = ${P_star.toFixed(2)}$ vào phương trình cầu:</p>
      <p>$$Q^* = ${a} - ${b}(${P_star.toFixed(2)}) = \\mathbf{${Q_star.toFixed(2)}}$$</p>
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
        <p>$$${a} - ${b}P_b = ${(c - d*t).toFixed(2)} + ${d}P_b \\implies P_b = \\mathbf{${Pb.toFixed(2)}}$$</p>
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
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EconSolver;
}

