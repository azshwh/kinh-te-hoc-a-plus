// EconMaster A+ Main Application Logic
let currentTab = 'market';
let marketChart = null;

// Quiz State
let quizState = {
  mode: 'practice', // 'practice', 'exam', 'trap'
  activeQuestions: [],
  currentIndex: 0,
  userAnswers: {}, // { [index]: selectedOptionIndex }
  isSubmitted: false,
  timerInterval: null,
  timeRemaining: 40 * 60, // 40 minutes for exam
  examStartTime: null
};

// Flashcard State
let flashcardState = {
  activeCards: [],
  currentIndex: 0,
  isFlipped: false
};

// Khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initMarketSolver();
  initTheoryHub();
  initMicroSolvers();
  initMacroSolvers();
  initTrapsTab();
  initFormulasTab();
  initQuizTab();
  initFlashcardsTab();
  initUniversalSearch();
  updateReadinessMeter();

  // Khởi tạo Lucide icons nếu có
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Render toán học lần đầu
  renderMath();
});

// ================= THEME (DARK / LIGHT) =================
function initTheme() {
  const savedTheme = localStorage.getItem('econ_theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('econ_theme', isDark ? 'dark' : 'light');
      // Update chart colors if chart exists
      if (marketChart) updateMarketChart();
    });
  }
}

// ================= NAVIGATION =================
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  const activePane = document.getElementById(`pane-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white');
      btn.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
    }
  });

  if (tabId === 'market' && marketChart) {
    marketChart.resize();
  }
  if (window.lucide) {
    window.lucide.createIcons();
  }
  renderMath();
}

// ================= HÀM HỖ TRỢ RENDER KATEX =================
function renderMath(element = document.body) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(element, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX render error:", e);
    }
  }
}

// ================= 1. MODULE CUNG CẦU & ĐỒ THỊ =================
function initMarketSolver() {
  const inputs = ['input-a', 'input-b', 'input-c', 'input-d', 'policy-type', 'policy-value'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateMarketSimulation);
      el.addEventListener('change', updateMarketSimulation);
    }
  });

  // Nút thiết lập nhanh ví dụ mẫu
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const preset = e.currentTarget.getAttribute('data-preset');
      loadMarketPreset(preset);
    });
  });

  // Khởi tạo đồ thị
  buildMarketChart();
  updateMarketSimulation();
}

function loadMarketPreset(preset) {
  const aInput = document.getElementById('input-a');
  const bInput = document.getElementById('input-b');
  const cInput = document.getElementById('input-c');
  const dInput = document.getElementById('input-d');
  const polType = document.getElementById('policy-type');
  const polVal = document.getElementById('policy-value');

  if (preset === 'standard') {
    aInput.value = 100; bInput.value = 2; cInput.value = 10; dInput.value = 1;
    polType.value = 'none'; polVal.value = 0;
  } else if (preset === 'tax') {
    aInput.value = 120; bInput.value = 2; cInput.value = 30; dInput.value = 1;
    polType.value = 'tax'; polVal.value = 15;
  } else if (preset === 'ceiling') {
    aInput.value = 150; bInput.value = 2.5; cInput.value = 20; dInput.value = 1.5;
    polType.value = 'ceiling'; polVal.value = 25;
  } else if (preset === 'floor') {
    aInput.value = 200; bInput.value = 3; cInput.value = 40; dInput.value = 2;
    polType.value = 'floor'; polVal.value = 40;
  }
  updateMarketSimulation();
}

function updateMarketSimulation() {
  const a = parseFloat(document.getElementById('input-a').value) || 100;
  const b = parseFloat(document.getElementById('input-b').value) || 2;
  const c = parseFloat(document.getElementById('input-c').value) || 10;
  const d = parseFloat(document.getElementById('input-d').value) || 1;
  const policyType = document.getElementById('policy-type').value;
  const policyVal = parseFloat(document.getElementById('policy-value').value) || 0;

  const stepsContainer = document.getElementById('market-steps');
  const statsContainer = document.getElementById('market-stats-summary');

  try {
    const solution = EconSolver.solveEquilibrium(a, b, c, d, { type: policyType, value: policyVal });
    stepsContainer.innerHTML = solution.stepsHtml;

    // Render Stats
    let statsHtml = `
      <div class="bg-indigo-50 dark:bg-slate-800 p-3 rounded-xl border border-indigo-100 dark:border-slate-700">
        <p class="text-xs text-indigo-500 font-medium">Giá cân bằng (P*)</p>
        <p class="text-2xl font-bold text-indigo-700 dark:text-indigo-400">${solution.initial.P}</p>
      </div>
      <div class="bg-emerald-50 dark:bg-slate-800 p-3 rounded-xl border border-emerald-100 dark:border-slate-700">
        <p class="text-xs text-emerald-500 font-medium">Sản lượng (Q*)</p>
        <p class="text-2xl font-bold text-emerald-700 dark:text-emerald-400">${solution.initial.Q}</p>
      </div>
      <div class="bg-blue-50 dark:bg-slate-800 p-3 rounded-xl border border-blue-100 dark:border-slate-700">
        <p class="text-xs text-blue-500 font-medium">Thặng dư TD (CS)</p>
        <p class="text-2xl font-bold text-blue-700 dark:text-blue-400">${solution.initial.CS}</p>
      </div>
      <div class="bg-amber-50 dark:bg-slate-800 p-3 rounded-xl border border-amber-100 dark:border-slate-700">
        <p class="text-xs text-amber-500 font-medium">Thặng dư SX (PS)</p>
        <p class="text-2xl font-bold text-amber-700 dark:text-amber-400">${solution.initial.PS}</p>
      </div>
    `;

    if (solution.new && policyType === 'tax') {
      statsHtml += `
        <div class="bg-purple-50 dark:bg-slate-800 p-3 rounded-xl border border-purple-100 dark:border-slate-700">
          <p class="text-xs text-purple-500 font-medium">Giá người mua (Pb)</p>
          <p class="text-2xl font-bold text-purple-700 dark:text-purple-400">${solution.new.Pb}</p>
        </div>
        <div class="bg-rose-50 dark:bg-slate-800 p-3 rounded-xl border border-rose-100 dark:border-slate-700">
          <p class="text-xs text-rose-500 font-medium">Tổn thất vô ích (DWL)</p>
          <p class="text-2xl font-bold text-rose-700 dark:text-rose-400">${solution.new.DWL}</p>
        </div>
      `;
    }

    statsContainer.innerHTML = statsHtml;
    updateMarketChartData(a, b, c, d, solution);
    renderMath(stepsContainer);
  } catch (err) {
    stepsContainer.innerHTML = `<div class="p-4 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
      <strong>Lỗi thông số:</strong> ${err.message}
    </div>`;
  }
}

function buildMarketChart() {
  const ctx = document.getElementById('market-chart-canvas').getContext('2d');
  marketChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Sản lượng (Q)',
            font: { weight: 'bold', size: 13 }
          },
          grid: {
            color: 'rgba(156, 163, 175, 0.15)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Mức giá (P)',
            font: { weight: 'bold', size: 13 }
          },
          grid: {
            color: 'rgba(156, 163, 175, 0.15)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: P = ${ctx.parsed.y.toFixed(2)} tại Q = ${ctx.parsed.x.toFixed(2)}`
          }
        },
        legend: {
          position: 'top',
          labels: {
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 'bold' }
          }
        }
      }
    }
  });
}

function updateMarketChartData(a, b, c, d, solution) {
  if (!marketChart) return;

  const maxQ = Math.max(solution.initial.Q * 1.8, 50);
  const step = maxQ / 20;

  // Điểm đường cầu: QD = a - bP => P = (a - Q) / b
  const demandPoints = [];
  // Điểm đường cung: QS = c + dP => P = (Q - c) / d
  const supplyPoints = [];
  // Điểm đường cung sau thuế: P = (Q - (c - d*t)) / d
  const supplyTaxPoints = [];

  for (let q = 0; q <= maxQ; q += step) {
    const pDemand = (a - q) / b;
    if (pDemand >= 0) demandPoints.push({ x: q, y: pDemand });

    const pSupply = (q - c) / d;
    if (pSupply >= 0) supplyPoints.push({ x: q, y: pSupply });

    if (solution.new && solution.policy.type === 'tax') {
      const t = Number(solution.policy.value);
      const pTax = (q - (c - d * t)) / d;
      if (pTax >= 0) supplyTaxPoints.push({ x: q, y: pTax });
    }
  }

  const datasets = [
    {
      label: 'Đường Cầu (D)',
      data: demandPoints,
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.1
    },
    {
      label: 'Đường Cung (S)',
      data: supplyPoints,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.1
    },
    {
      label: 'Điểm cân bằng E₀',
      data: [{ x: solution.initial.Q, y: solution.initial.P }],
      borderColor: '#4f46e5',
      backgroundColor: '#4f46e5',
      pointRadius: 7,
      pointHoverRadius: 9,
      showLine: false
    }
  ];

  if (solution.new && solution.policy.type === 'tax') {
    datasets.push({
      label: `Đường Cung sau thuế S' (t=${solution.policy.value})`,
      data: supplyTaxPoints,
      borderColor: '#8b5cf6',
      borderDash: [5, 5],
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.1
    });

    datasets.push({
      label: 'Cân bằng mới sau thuế Et',
      data: [{ x: solution.new.Q, y: solution.new.Pb }],
      borderColor: '#ec4899',
      backgroundColor: '#ec4899',
      pointRadius: 7,
      pointHoverRadius: 9,
      showLine: false
    });
  }

  marketChart.data.datasets = datasets;
  marketChart.update();
}

// ================= 2. MODULE BỘ TÍNH VI MÔ (CO GIÃN & CHI PHÍ) =================
function initMicroSolvers() {
  // Solver co giãn
  const elastCalcBtn = document.getElementById('btn-calc-elasticity');
  if (elastCalcBtn) {
    elastCalcBtn.addEventListener('click', handleElasticityCalculation);
  }

  // Solver chi phí
  const costCalcBtn = document.getElementById('btn-calc-cost');
  if (costCalcBtn) {
    costCalcBtn.addEventListener('click', handleCostCalculation);
  }

  // Solver 3: Tối ưu hóa tiêu dùng Cobb-Douglas
  const consCalcBtn = document.getElementById('btn-calc-consumer');
  if (consCalcBtn) {
    consCalcBtn.addEventListener('click', handleConsumerCalculation);
  }

  // Solver 4: Độc quyền vs Cạnh tranh
  const monoCalcBtn = document.getElementById('btn-calc-monopoly');
  if (monoCalcBtn) {
    monoCalcBtn.addEventListener('click', handleMonopolyCalculation);
  }
}

function handleConsumerCalculation() {
  const alpha = parseFloat(document.getElementById('cons-alpha').value);
  const beta = parseFloat(document.getElementById('cons-beta').value);
  const income = parseFloat(document.getElementById('cons-income').value);
  const px = parseFloat(document.getElementById('cons-px').value);
  const py = parseFloat(document.getElementById('cons-py').value);
  const resDiv = document.getElementById('cons-result');

  try {
    const res = EconSolver.solveConsumerChoice(alpha, beta, income, px, py);
    resDiv.innerHTML = `
      <div class="p-4 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 space-y-2 text-sm">
        <div class="grid grid-cols-2 gap-2 text-slate-800 dark:text-slate-100 font-medium text-xs">
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Lượng hàng X* tối ưu: <strong class="text-amber-600">${res.X_star}</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Lượng hàng Y* tối ưu: <strong class="text-amber-600">${res.Y_star}</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Thỏa dụng cực đại ($U_{max}$): <strong>${res.maxUtility}</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Độ dốc $MRS = P_X/P_Y$: <strong>${res.MRS}</strong>
          </div>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 mt-2">${res.explanation}</p>
      </div>
    `;
    renderMath(resDiv);
  } catch (err) {
    resDiv.innerHTML = `<p class="text-red-500 font-bold p-3">${err.message}</p>`;
  }
}

function handleMonopolyCalculation() {
  const a = parseFloat(document.getElementById('mono-a').value);
  const b = parseFloat(document.getElementById('mono-b').value);
  const c = parseFloat(document.getElementById('mono-c').value);
  const d = parseFloat(document.getElementById('mono-d').value);
  const e = parseFloat(document.getElementById('mono-e').value);
  const resDiv = document.getElementById('mono-result');

  try {
    const res = EconSolver.solveMonopoly(a, b, c, d, e);
    resDiv.innerHTML = `
      <div class="p-4 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-slate-700 space-y-3 text-sm">
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
            <p class="font-bold text-purple-700 dark:text-purple-300 uppercase">1. Độc quyền thuần túy (MR = MC)</p>
            <p>• Sản lượng: $Q_M = \\mathbf{${res.monopoly.Q}}$</p>
            <p>• Mức giá bán: $P_M = \\mathbf{${res.monopoly.P}}$</p>
            <p>• Lợi nhuận: $\\pi_M = \\mathbf{${res.monopoly.profit}}$</p>
            <p>• Chỉ số Lerner ($L$): $\\mathbf{${res.monopoly.lernerIndex}}$</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <p class="font-bold text-emerald-700 dark:text-emerald-300 uppercase">2. Cạnh tranh hoàn hảo (P = MC)</p>
            <p>• Sản lượng: $Q_C = \\mathbf{${res.competitive.Q}}$</p>
            <p>• Mức giá bán: $P_C = \\mathbf{${res.competitive.P}}$</p>
            <p>• Thặng dư người mua: $CS_C = \\mathbf{${res.competitive.CS}}$</p>
          </div>
        </div>
        <div class="p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-200 font-semibold">
          ⚠️ Tổn thất vô ích của xã hội ($DWL$): $\\mathbf{${res.DWL}}$<br>
          <span class="font-normal text-slate-600 dark:text-slate-300">${res.comparison}</span>
        </div>
      </div>
    `;
    renderMath(resDiv);
  } catch (err) {
    resDiv.innerHTML = `<p class="text-red-500 font-bold p-3">${err.message}</p>`;
  }
}

// ================= 3. MODULE BỘ TÍNH VĨ MÔ =================
function initMacroSolvers() {
  const calcMoneyBtn = document.getElementById('btn-calc-money');
  if (calcMoneyBtn) {
    calcMoneyBtn.addEventListener('click', () => {
      const cr = parseFloat(document.getElementById('macro-cr').value);
      const rr = parseFloat(document.getElementById('macro-rr').value);
      const mb = parseFloat(document.getElementById('macro-mb').value);
      const resDiv = document.getElementById('macro-money-result');

      try {
        const res = EconSolver.solveMoneySupply(cr, rr, mb);
        resDiv.innerHTML = `
          <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-2 text-sm">
            <p>• <strong>Số nhân tiền ($m_M$):</strong> $\\frac{cr + 1}{cr + rr} = \\frac{${cr} + 1}{${cr} + ${rr}} = \\mathbf{${res.moneyMultiplier}}$</p>
            <p>• <strong>Tổng mức cung tiền ($MS$):</strong> $MS = m_M \\times MB = ${res.moneyMultiplier} \\times ${mb} = \\mathbf{${res.moneySupply}}$ tỷ đồng.</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">💡 Ý nghĩa: Cứ mỗi 1 đồng cơ sở tiền (MB) được NHTW đưa vào lưu thông sẽ tạo ra ${res.moneyMultiplier} đồng cung tiền trong nền kinh tế qua hệ thống tạo tiền gửi của NHTM.</p>
          </div>
        `;
        renderMath(resDiv);
      } catch (e) {
        resDiv.innerHTML = `<p class="text-red-500 p-2">${e.message}</p>`;
      }
    });
  }

  const calcGdpBtn = document.getElementById('btn-calc-gdp');
  if (calcGdpBtn) {
    calcGdpBtn.addEventListener('click', () => {
      const c = parseFloat(document.getElementById('gdp-c').value) || 0;
      const i = parseFloat(document.getElementById('gdp-i').value) || 0;
      const g = parseFloat(document.getElementById('gdp-g').value) || 0;
      const x = parseFloat(document.getElementById('gdp-x').value) || 0;
      const im = parseFloat(document.getElementById('gdp-im').value) || 0;
      const resDiv = document.getElementById('macro-gdp-result');

      const nx = x - im;
      const gdp = c + i + g + nx;

      resDiv.innerHTML = `
        <div class="p-4 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-2 text-sm">
          <p>• <strong>Xuất khẩu ròng ($NX$):</strong> $X - IM = ${x} - ${im} = \\mathbf{${nx}}$ tỷ đồng.</p>
          <p>• <strong>Tổng sản phẩm quốc nội ($GDP$):</strong> $C + I + G + NX = ${c} + ${i} + ${g} + (${nx}) = \\mathbf{${gdp}}$ tỷ đồng.</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">⚠️ Lưu ý thi: Khoản chi trợ cấp (Transfer payments - Tr) của chính phủ KHÔNG được tính vào $G$!</p>
        </div>
      `;
      renderMath(resDiv);
    });
  }

  // Solver 3: Mô hình số nhân chi tiêu Keynes
  const calcKeynesBtn = document.getElementById('btn-calc-keynes');
  if (calcKeynesBtn) {
    calcKeynesBtn.addEventListener('click', () => {
      const c0 = parseFloat(document.getElementById('keynes-c0').value) || 0;
      const mpc = parseFloat(document.getElementById('keynes-mpc').value) || 0.8;
      const t = parseFloat(document.getElementById('keynes-t').value) || 0;
      const i0 = parseFloat(document.getElementById('keynes-i0').value) || 0;
      const g0 = parseFloat(document.getElementById('keynes-g0').value) || 0;
      const nx0 = parseFloat(document.getElementById('keynes-nx0').value) || 0;
      const yp = parseFloat(document.getElementById('keynes-yp').value) || null;
      const resDiv = document.getElementById('macro-keynes-result');

      try {
        const res = EconSolver.solveKeynesianCross(c0, mpc, i0, g0, nx0, t, yp);
        let gapHtml = '';
        if (res.gapAnalysis) {
          gapHtml = `
            <div class="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-900 text-xs space-y-1 mt-2">
              <p class="font-bold text-amber-800 dark:text-amber-200">Phân tích Khoảng trống sản lượng (Output Gap):</p>
              <p>• Trạng thái nền kinh tế: <strong>${res.gapAnalysis.type}</strong></p>
              <p>• Chênh lệch sản lượng: $\\Delta Y = Y_p - Y^* = ${res.gapAnalysis.Y_potential} - ${res.Y_star} = \\mathbf{${res.gapAnalysis.deltaY}}$ tỷ</p>
              <p>• <strong>Khuyến nghị Chính sách Tài khóa:</strong> Cần điều chỉnh chi tiêu chính phủ $\\Delta G = \\frac{\\Delta Y}{k} = \\mathbf{${res.gapAnalysis.requiredDeltaG}}$ tỷ đồng để đưa nền kinh tế về mức toàn dụng.</p>
            </div>
          `;
        }

        resDiv.innerHTML = `
          <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-2 text-sm">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                • Chi tiêu tự định ($A_0$): <strong>${res.A0}</strong>
              </div>
              <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                • Số nhân chi tiêu ($k$): <strong class="text-indigo-600 dark:text-indigo-400">${res.multiplier}</strong>
              </div>
              <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                • Số nhân thuế ($k_T$): <strong>${res.taxMultiplier}</strong>
              </div>
              <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                • Sản lượng cân bằng ($Y^*$): <strong class="text-emerald-600 dark:text-emerald-400">${res.Y_star}</strong>
              </div>
            </div>
            ${gapHtml}
          </div>
        `;
        renderMath(resDiv);
      } catch (err) {
        resDiv.innerHTML = `<p class="text-red-500 font-bold p-3">${err.message}</p>`;
      }
    });
  }
}

function handleElasticityCalculation() {
  const p1 = parseFloat(document.getElementById('elast-p1').value);
  const q1 = parseFloat(document.getElementById('elast-q1').value);
  const p2 = parseFloat(document.getElementById('elast-p2').value);
  const q2 = parseFloat(document.getElementById('elast-q2').value);
  const resultDiv = document.getElementById('elast-result');

  try {
    const res = EconSolver.calculateMidpointElasticity(p1, q1, p2, q2);
    resultDiv.innerHTML = `
      <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between">
          <span class="font-bold text-lg text-indigo-900 dark:text-indigo-200">Hệ số co giãn (Ed):</span>
          <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400">${res.Ed} (|Ed| = ${res.absEd})</span>
        </div>
        <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">➡️ Kết luận: ${res.elasticityType}</p>
        <div class="grid grid-cols-2 gap-2 text-sm pt-2 border-t border-indigo-100 dark:border-slate-700">
          <div>% thay đổi Lượng: <strong>${res.pctQ}%</strong></div>
          <div>% thay đổi Giá: <strong>${res.pctP}%</strong></div>
          <div>Doanh thu ban đầu (TR₁): <strong>${res.TR1}</strong></div>
          <div>Doanh thu mới (TR₂): <strong>${res.TR2}</strong> (ΔTR = ${res.deltaTR >= 0 ? '+' : ''}${res.deltaTR})</div>
        </div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg text-sm border border-slate-200 dark:border-slate-700">
          <p class="font-bold text-slate-800 dark:text-slate-200">📊 Phân tích & Tư vấn chiến lược giá:</p>
          <p class="text-slate-600 dark:text-slate-400 mt-1">${res.trAnalysis}</p>
          <p class="text-indigo-600 dark:text-indigo-400 font-medium mt-1">💡 Lời khuyên: ${res.businessAdvice}</p>
        </div>
      </div>
    `;
    renderMath(resultDiv);
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-500 font-bold p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">${err.message}</p>`;
  }
}

function handleCostCalculation() {
  const a = parseFloat(document.getElementById('cost-a').value);
  const b = parseFloat(document.getElementById('cost-b').value);
  const c = parseFloat(document.getElementById('cost-c').value);
  const p = parseFloat(document.getElementById('cost-market-p').value) || null;
  const resultDiv = document.getElementById('cost-result');

  try {
    const res = EconSolver.solveCostFunctions(a, b, c, p);
    let html = `
      <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
        <h4 class="font-bold text-slate-800 dark:text-slate-200">Hàm chi phí suy diễn:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Chi phí cố định ($FC$): <strong>${res.FC}</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Chi phí cận biên ($MC$): <strong>$${res.formulaMC}$</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Chi phí trung bình ($ATC$): <strong>$${res.formulaATC}$</strong>
          </div>
          <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            • Chi phí biến đổi TB ($AVC$): <strong>$${res.formulaAVC}$</strong>
          </div>
        </div>

        <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-sm border border-indigo-200 dark:border-indigo-800">
          <p>🎯 <strong>Điểm hòa vốn ($ATC_{min}$):</strong> Đạt tại $Q = ${res.Q_breakeven}$ với mức giá hòa vốn $P = ${res.ATC_min}$.</p>
          <p class="mt-1">🚫 <strong>Điểm đóng cửa ($AVC_{min}$):</strong> Mức giá đóng cửa $P_{đóng\\,cửa} = ${res.shutdownPrice}$. (Nếu $P < ${res.shutdownPrice}$, đóng cửa ngay lập tức).</p>
        </div>
    `;

    if (res.marketAnalysis) {
      html += `
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-sm border border-emerald-200 dark:border-emerald-800">
          <p class="font-bold text-emerald-800 dark:text-emerald-300">Quyết định sản xuất khi Giá thị trường P = ${p}:</p>
          <p class="text-base font-semibold text-indigo-700 dark:text-indigo-400 mt-1">${res.marketAnalysis.status}</p>
          <p class="mt-1 text-slate-700 dark:text-slate-300">${res.marketAnalysis.explanation}</p>
          ${res.marketAnalysis.Q_opt > 0 ? `
            <div class="grid grid-cols-3 gap-2 mt-2 font-medium">
              <div>Sản lượng tối ưu: <strong>${res.marketAnalysis.Q_opt}</strong></div>
              <div>Tổng doanh thu (TR): <strong>${res.marketAnalysis.TR}</strong></div>
              <div>Lợi nhuận (π): <strong>${res.marketAnalysis.profit}</strong></div>
            </div>
          ` : ''}
        </div>
      `;
    }

    html += `</div>`;
    resultDiv.innerHTML = html;
    renderMath(resultDiv);
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-500 font-bold p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">${err.message}</p>`;
  }
}

// ================= 3. MODULE BỘ TÍNH VĨ MÔ =================
function initMacroSolvers() {
  const calcMoneyBtn = document.getElementById('btn-calc-money');
  if (calcMoneyBtn) {
    calcMoneyBtn.addEventListener('click', () => {
      const cr = parseFloat(document.getElementById('macro-cr').value);
      const rr = parseFloat(document.getElementById('macro-rr').value);
      const mb = parseFloat(document.getElementById('macro-mb').value);
      const resDiv = document.getElementById('macro-money-result');

      try {
        const res = EconSolver.solveMoneySupply(cr, rr, mb);
        resDiv.innerHTML = `
          <div class="p-4 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 space-y-2 text-sm">
            <p>• <strong>Số nhân tiền ($m_M$):</strong> $\\frac{cr + 1}{cr + rr} = \\frac{${cr} + 1}{${cr} + ${rr}} = \\mathbf{${res.moneyMultiplier}}$</p>
            <p>• <strong>Tổng mức cung tiền ($MS$):</strong> $MS = m_M \\times MB = ${res.moneyMultiplier} \\times ${mb} = \\mathbf{${res.moneySupply}}$ tỷ đồng.</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">💡 Ý nghĩa: Cứ mỗi 1 đồng cơ sở tiền (MB) được NHTW đưa vào lưu thông sẽ tạo ra ${res.moneyMultiplier} đồng cung tiền trong nền kinh tế qua hệ thống tạo tiền gửi của NHTM.</p>
          </div>
        `;
        renderMath(resDiv);
      } catch (e) {
        resDiv.innerHTML = `<p class="text-red-500 p-2">${e.message}</p>`;
      }
    });
  }

  const calcGdpBtn = document.getElementById('btn-calc-gdp');
  if (calcGdpBtn) {
    calcGdpBtn.addEventListener('click', () => {
      const c = parseFloat(document.getElementById('gdp-c').value) || 0;
      const i = parseFloat(document.getElementById('gdp-i').value) || 0;
      const g = parseFloat(document.getElementById('gdp-g').value) || 0;
      const x = parseFloat(document.getElementById('gdp-x').value) || 0;
      const im = parseFloat(document.getElementById('gdp-im').value) || 0;
      const resDiv = document.getElementById('macro-gdp-result');

      const nx = x - im;
      const gdp = c + i + g + nx;

      resDiv.innerHTML = `
        <div class="p-4 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-2 text-sm">
          <p>• <strong>Xuất khẩu ròng ($NX$):</strong> $X - IM = ${x} - ${im} = \\mathbf{${nx}}$ tỷ đồng.</p>
          <p>• <strong>Tổng sản phẩm quốc nội ($GDP$):</strong> $C + I + G + NX = ${c} + ${i} + ${g} + (${nx}) = \\mathbf{${gdp}}$ tỷ đồng.</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">⚠️ Lưu ý thi: Khoản chi trợ cấp (Transfer payments - Tr) của chính phủ KHÔNG được tính vào $G$!</p>
        </div>
      `;
      renderMath(resDiv);
    });
  }
}

// ================= 4. SỔ TAY CÔNG THỨC (FORMULA HUB) =================
function initFormulasTab() {
  const container = document.getElementById('formulas-list');
  const searchInput = document.getElementById('formula-search');
  const categorySelect = document.getElementById('formula-category-filter');

  function renderFormulas() {
    const query = (searchInput ? searchInput.value : '').toLowerCase();
    const category = categorySelect ? categorySelect.value : 'all';

    const filtered = FORMULAS_DATA.filter(item => {
      const matchCat = category === 'all' || item.category === category;
      const matchQuery = item.title.toLowerCase().includes(query) ||
                         item.chapter.toLowerCase().includes(query) ||
                         item.description.toLowerCase().includes(query) ||
                         (item.notes && item.notes.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<p class="col-span-full text-center py-8 text-slate-500">Không tìm thấy công thức phù hợp với từ khóa "${query}".</p>`;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full ${item.category === 'micro' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}">
            ${item.category === 'micro' ? 'VI MÔ' : 'VĨ MÔ'}
          </span>
          <span class="text-xs text-slate-400">${item.chapter}</span>
        </div>
        <h3 class="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">${item.title}</h3>
        <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl my-3 text-center border border-slate-100 dark:border-slate-800">
          <span class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">$$${item.formula}$$</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">${item.description}</p>
        
        ${item.example ? `
          <div class="text-xs bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800 mb-3 text-slate-700 dark:text-slate-300">
            <strong>Ví dụ áp dụng:</strong> ${item.example}
          </div>
        ` : ''}

        ${item.examTrap ? `
          <div class="text-xs bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300">
            <strong>⚠️ BẪY ĐỀ THI:</strong> ${item.examTrap}
          </div>
        ` : ''}
      </div>
    `).join('');

    renderMath(container);
  }

  if (searchInput) searchInput.addEventListener('input', renderFormulas);
  if (categorySelect) categorySelect.addEventListener('change', renderFormulas);
  renderFormulas();
}

// ================= 5. ĐẤU TRƯỜNG TRẮC NGHIỆM (QUIZ ARENA) =================
function initQuizTab() {
  const btnPractice = document.getElementById('quiz-mode-practice');
  const btnExam = document.getElementById('quiz-mode-exam');
  const btnTrap = document.getElementById('quiz-mode-trap');

  if (btnPractice) btnPractice.addEventListener('click', () => startQuiz('practice'));
  if (btnExam) btnExam.addEventListener('click', () => startQuiz('exam'));
  if (btnTrap) btnTrap.addEventListener('click', () => startQuiz('trap'));

  const chapFilter = document.getElementById('quiz-chapter-filter');
  const diffFilter = document.getElementById('quiz-diff-filter');
  if (chapFilter) chapFilter.addEventListener('change', () => startQuiz(quizState.mode));
  if (diffFilter) diffFilter.addEventListener('change', () => startQuiz(quizState.mode));

  document.getElementById('btn-prev-question')?.addEventListener('click', () => {
    if (quizState.currentIndex > 0) {
      quizState.currentIndex--;
      renderQuestion();
    }
  });

  document.getElementById('btn-next-question')?.addEventListener('click', () => {
    if (quizState.currentIndex < quizState.activeQuestions.length - 1) {
      quizState.currentIndex++;
      renderQuestion();
    }
  });

  document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
    if (confirm("Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?")) {
      finishExam();
    }
  });

  document.getElementById('btn-restart-quiz')?.addEventListener('click', () => {
    startQuiz(quizState.mode);
  });

  // Khởi động chế độ Luyện tập mặc định
  startQuiz('practice');
}

function startQuiz(mode) {
  quizState.mode = mode;
  quizState.currentIndex = 0;
  quizState.userAnswers = {};
  quizState.isSubmitted = false;
  clearInterval(quizState.timerInterval);

  // Cập nhật giao diện nút chế độ
  ['practice', 'exam', 'trap'].forEach(m => {
    const btn = document.getElementById(`quiz-mode-${m}`);
    if (btn) {
      if (m === mode) {
        btn.classList.add('bg-indigo-600', 'text-white');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      }
    }
  });

  // Lựa chọn danh sách câu hỏi
  let pool = [...QUIZ_DATA];

  // Lọc theo chương nếu chọn
  const chapVal = document.getElementById('quiz-chapter-filter')?.value || 'all';
  if (chapVal !== 'all') {
    const cNum = parseInt(chapVal, 10);
    pool = pool.filter(q => q.chapter === cNum);
  }

  // Lọc theo độ khó nếu chọn
  const diffVal = document.getElementById('quiz-diff-filter')?.value || 'all';
  if (diffVal !== 'all') {
    pool = pool.filter(q => q.difficulty === diffVal);
  }

  if (mode === 'trap') {
    pool = pool.filter(q => q.isTrap);
  } else if (mode === 'exam') {
    // Trộn ngẫu nhiên câu hỏi
    pool = pool.sort(() => Math.random() - 0.5).slice(0, 30);
  }

  const countBadge = document.getElementById('quiz-filter-count');
  if (countBadge) {
    countBadge.textContent = `Hiển thị: ${pool.length} câu`;
  }

  if (pool.length === 0) {
    alert("Không tìm thấy câu hỏi nào phù hợp với bộ lọc đã chọn. Hệ thống sẽ hiển thị toàn bộ câu hỏi.");
    pool = [...QUIZ_DATA];
  }

  quizState.activeQuestions = pool;

  // Hiển thị / ẩn bộ đếm giờ và nút nộp bài
  const timerContainer = document.getElementById('quiz-timer-container');
  const submitBtn = document.getElementById('btn-submit-exam');
  const resultsContainer = document.getElementById('quiz-results-summary');
  const activeQuizCard = document.getElementById('quiz-active-card');

  if (resultsContainer) resultsContainer.classList.add('hidden');
  if (activeQuizCard) activeQuizCard.classList.remove('hidden');

  if (mode === 'exam') {
    if (timerContainer) timerContainer.classList.remove('hidden');
    if (submitBtn) submitBtn.classList.remove('hidden');
    quizState.timeRemaining = 40 * 60; // 40 phút
    startQuizTimer();
  } else {
    if (timerContainer) timerContainer.classList.add('hidden');
    if (submitBtn) submitBtn.classList.add('hidden');
  }

  renderQuestion();
  renderQuestionPalette();
}

function startQuizTimer() {
  const timerEl = document.getElementById('quiz-timer');
  quizState.timerInterval = setInterval(() => {
    quizState.timeRemaining--;
    if (quizState.timeRemaining <= 0) {
      clearInterval(quizState.timerInterval);
      alert("Đã hết thời gian làm bài thi! Hệ thống sẽ tự động nộp bài.");
      finishExam();
      return;
    }
    const mins = Math.floor(quizState.timeRemaining / 60);
    const secs = quizState.timeRemaining % 60;
    if (timerEl) {
      timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function renderQuestion() {
  const q = quizState.activeQuestions[quizState.currentIndex];
  if (!q) return;

  const total = quizState.activeQuestions.length;
  const currNum = quizState.currentIndex + 1;

  // Update progress text & bar
  const progressText = document.getElementById('quiz-progress-text');
  if (progressText) progressText.textContent = `Câu ${currNum} / ${total}`;

  const progressBar = document.getElementById('quiz-progress-bar');
  if (progressBar) progressBar.style.width = `${(currNum / total) * 100}%`;

  // Question metadata & content
  const qTopic = document.getElementById('quiz-question-topic');
  if (qTopic) qTopic.textContent = `${q.category === 'micro' ? 'Vi mô' : 'Vĩ mô'} • ${q.topic}`;

  const trapBadge = document.getElementById('quiz-trap-badge');
  if (trapBadge) {
    if (q.isTrap) trapBadge.classList.remove('hidden');
    else trapBadge.classList.add('hidden');
  }

  const qText = document.getElementById('quiz-question-text');
  if (qText) qText.textContent = q.question;

  // Render 4 options
  const optionsContainer = document.getElementById('quiz-options-container');
  const selected = quizState.userAnswers[quizState.currentIndex];
  const isAnswered = selected !== undefined;
  const isPracticeOrSubmitted = quizState.mode !== 'exam' || quizState.isSubmitted;

  optionsContainer.innerHTML = q.options.map((opt, idx) => {
    let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ";
    const optLetter = String.fromCharCode(65 + idx);

    if (isPracticeOrSubmitted && isAnswered) {
      if (idx === q.correct) {
        btnClass += "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold";
      } else if (idx === selected) {
        btnClass += "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold";
      } else {
        btnClass += "border-slate-200 dark:border-slate-700 opacity-60 text-slate-700 dark:text-slate-300";
      }
    } else {
      if (idx === selected) {
        btnClass += "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-medium";
      } else {
        btnClass += "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800";
      }
    }

    return `
      <button class="quiz-opt-btn ${btnClass}" data-index="${idx}" ${quizState.isSubmitted ? 'disabled' : ''}>
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-200 flex-shrink-0">
          ${optLetter}
        </span>
        <span class="text-sm leading-relaxed">${opt}</span>
      </button>
    `;
  }).join('');

  // Gắn sự kiện click chọn đáp án
  optionsContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chosenIdx = parseInt(e.currentTarget.getAttribute('data-index'));
      quizState.userAnswers[quizState.currentIndex] = chosenIdx;
      renderQuestion();
      renderQuestionPalette();
    });
  });

  // Explanation box (chỉ hiện trong practice mode hoặc sau khi nộp bài exam)
  const expBox = document.getElementById('quiz-explanation-box');
  if (expBox) {
    if (isPracticeOrSubmitted && isAnswered) {
      expBox.classList.remove('hidden');
      expBox.innerHTML = `
        <div class="p-4 rounded-xl border ${selected === q.correct ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300' : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300'}">
          <div class="flex items-center gap-2 mb-2 font-bold ${selected === q.correct ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}">
            <span>${selected === q.correct ? '🎉 CHÍNH XÁC!' : '❌ CHƯA ĐÚNG!'} Đáp án đúng là: ${String.fromCharCode(65 + q.correct)}</span>
          </div>
          <p class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">${q.explanation}</p>
          ${q.trapAdvice ? `
            <div class="mt-3 p-3 bg-amber-100/70 dark:bg-amber-950/50 rounded-lg text-xs text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
              <strong>💡 Phân tích bẫy thi cử:</strong> ${q.trapAdvice}
            </div>
          ` : ''}
        </div>
      `;
      renderMath(expBox);
    } else {
      expBox.classList.add('hidden');
    }
  }

  // Cập nhật trạng thái nút Prev / Next
  const btnPrev = document.getElementById('btn-prev-question');
  const btnNext = document.getElementById('btn-next-question');
  if (btnPrev) btnPrev.disabled = quizState.currentIndex === 0;
  if (btnNext) btnNext.disabled = quizState.currentIndex === total - 1;
}

function renderQuestionPalette() {
  const palette = document.getElementById('quiz-palette-container');
  if (!palette) return;

  palette.innerHTML = quizState.activeQuestions.map((q, idx) => {
    const isCurrent = idx === quizState.currentIndex;
    const ans = quizState.userAnswers[idx];
    const isAnswered = ans !== undefined;

    let bgClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
    if (quizState.isSubmitted) {
      if (ans === q.correct) bgClass = "bg-emerald-500 text-white font-bold";
      else if (isAnswered) bgClass = "bg-rose-500 text-white font-bold";
      else bgClass = "bg-slate-300 dark:bg-slate-700 text-slate-500";
    } else if (isAnswered) {
      bgClass = "bg-indigo-600 text-white font-bold";
    }

    let borderClass = isCurrent ? "ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-slate-900 scale-105" : "";

    return `
      <button class="w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${bgClass} ${borderClass}" onclick="jumpToQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

window.jumpToQuestion = function(idx) {
  quizState.currentIndex = idx;
  renderQuestion();
  renderQuestionPalette();
};

function finishExam() {
  clearInterval(quizState.timerInterval);
  quizState.isSubmitted = true;

  let correctCount = 0;
  const total = quizState.activeQuestions.length;

  quizState.activeQuestions.forEach((q, idx) => {
    if (quizState.userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const score10 = (correctCount / total) * 10;
  let letterGrade = 'F';
  let comment = '';
  let badgeColor = 'text-rose-600';

  if (score10 >= 8.5) {
    letterGrade = score10 >= 9.0 ? 'A+' : 'A';
    comment = 'Xuất sắc! Bạn đã hoàn toàn làm chủ tư duy kinh tế học và sẵn sàng đạt điểm A+ trong kỳ thi đại học!';
    badgeColor = 'text-emerald-600 dark:text-emerald-400';
  } else if (score10 >= 7.0) {
    letterGrade = score10 >= 8.0 ? 'B+' : 'B';
    comment = 'Khá tốt! Bạn đã nắm chắc nền tảng, hãy rà soát lại các câu bẫy ở tab "Khắc chế bẫy" để nâng lên điểm A+.';
    badgeColor = 'text-blue-600 dark:text-blue-400';
  } else if (score10 >= 5.0) {
    letterGrade = score10 >= 6.5 ? 'C+' : 'C';
    comment = 'Trung bình. Cần ôn tập kỹ lại các công thức tính toán và phân biệt kỹ giữa vi mô và vĩ mô.';
    badgeColor = 'text-amber-600 dark:text-amber-400';
  } else {
    letterGrade = 'D/F';
    comment = 'Cảnh báo: Lượng kiến thức chưa vững. Hãy dùng tab Sổ tay công thức và Flashcard ôn tập ngay!';
    badgeColor = 'text-rose-600 dark:text-rose-400';
  }

  const resultsSummary = document.getElementById('quiz-results-summary');
  if (resultsSummary) {
    resultsSummary.classList.remove('hidden');
    resultsSummary.innerHTML = `
      <div class="text-center p-8 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-indigo-100 dark:border-slate-700 shadow-sm">
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Kết Quả Thi Thử Kinh Tế Học Đại Cương</h3>
        <div class="text-6xl font-black my-4 ${badgeColor}">${letterGrade}</div>
        <div class="text-2xl font-bold text-slate-800 dark:text-slate-200">
          ${score10.toFixed(1)} / 10.0 <span class="text-base text-slate-500">(${correctCount}/${total} câu đúng)</span>
        </div>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">${comment}</p>
        <div class="mt-6 flex justify-center gap-4">
          <button class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors" onclick="startQuiz('exam')">
            Thi lại đề khác
          </button>
          <button class="px-5 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" onclick="startQuiz('trap')">
            Luyện các câu bẫy
          </button>
        </div>
      </div>
    `;
  }

  // Re-render current question with explanation
  renderQuestion();
  renderQuestionPalette();
}

// ================= 6. FLASHCARDS ÔN NHANH 3D =================
function initFlashcardsTab() {
  const cardElement = document.getElementById('flashcard-card');
  const btnPrev = document.getElementById('fc-prev');
  const btnNext = document.getElementById('fc-next');
  const btnFlip = document.getElementById('fc-flip');
  const btnShuffle = document.getElementById('fc-shuffle');
  const filterCat = document.getElementById('fc-category-filter');

  flashcardState.activeCards = [...FLASHCARDS_DATA];

  function updateFlashcard() {
    const card = flashcardState.activeCards[flashcardState.currentIndex];
    if (!card) return;

    // Reset flip state
    cardElement.classList.remove('flipped');
    flashcardState.isFlipped = false;

    // Text content
    document.getElementById('fc-topic').textContent = `${card.category === 'micro' ? 'Vi mô' : 'Vĩ mô'} • ${card.topic}`;
    document.getElementById('fc-counter').textContent = `${flashcardState.currentIndex + 1} / ${flashcardState.activeCards.length}`;
    document.getElementById('fc-front-text').textContent = card.front;
    document.getElementById('fc-back-text').textContent = card.back;
    document.getElementById('fc-tip-text').textContent = card.tip || '';

    renderMath(cardElement);
  }

  function toggleFlip() {
    cardElement.classList.toggle('flipped');
    flashcardState.isFlipped = !flashcardState.isFlipped;
  }

  if (cardElement) cardElement.addEventListener('click', toggleFlip);
  if (btnFlip) btnFlip.addEventListener('click', toggleFlip);

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (flashcardState.currentIndex < flashcardState.activeCards.length - 1) {
        flashcardState.currentIndex++;
      } else {
        flashcardState.currentIndex = 0; // quay vòng
      }
      updateFlashcard();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (flashcardState.currentIndex > 0) {
        flashcardState.currentIndex--;
      } else {
        flashcardState.currentIndex = flashcardState.activeCards.length - 1;
      }
      updateFlashcard();
    });
  }

  if (btnShuffle) {
    btnShuffle.addEventListener('click', () => {
      flashcardState.activeCards.sort(() => Math.random() - 0.5);
      flashcardState.currentIndex = 0;
      updateFlashcard();
    });
  }

  if (filterCat) {
    filterCat.addEventListener('change', () => {
      const cat = filterCat.value;
      if (cat === 'all') {
        flashcardState.activeCards = [...FLASHCARDS_DATA];
      } else {
        flashcardState.activeCards = FLASHCARDS_DATA.filter(c => c.category === cat);
      }
      flashcardState.currentIndex = 0;
      updateFlashcard();
    });
  }

  // Keyboard shortcut (Space: flip, ArrowRight: Next, ArrowLeft: Prev)
  document.addEventListener('keydown', (e) => {
    if (currentTab === 'flashcards') {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight') {
        btnNext?.click();
      } else if (e.code === 'ArrowLeft') {
        btnPrev?.click();
      }
    }
  });

  updateFlashcard();
}

// ================= 7. GIẢNG ĐƯỜNG QUỐC TẾ & LÝ THUYẾT CHUYÊN SÂU =================
function initTheoryHub() {
  let activeChapterId = 'chap-1';
  let selectedChannel = 'all';
  let selectedCategory = 'all';
  let searchQuery = '';
  let currentTheatreIndex = 0;

  // Subtab Elements
  const btnSubTheory = document.getElementById('btn-subtab-theory');
  const btnSubVideos = document.getElementById('btn-subtab-videos');
  const subpaneTheory = document.getElementById('subpane-theory');
  const subpaneVideos = document.getElementById('subpane-videos');

  // Video Theatre Elements (Split-screen Left/Right)
  const theatreIframe = document.getElementById('theatre-iframe');
  const theatreCounter = document.getElementById('theatre-counter');
  const theatreChannelBadge = document.getElementById('theatre-channel-badge');
  const theatreCategoryBadge = document.getElementById('theatre-category-badge');
  const theatreDuration = document.getElementById('theatre-duration');
  const theatreTitleVi = document.getElementById('theatre-title-vi');
  const theatreTitleEn = document.getElementById('theatre-title-en');
  const theatreSummary = document.getElementById('theatre-summary');
  const theatreTakeaways = document.getElementById('theatre-takeaways');
  const theatreExamTip = document.getElementById('theatre-exam-tip');
  const theatreTerms = document.getElementById('theatre-terms');
  const btnTheatrePrev = document.getElementById('btn-theatre-prev');
  const btnTheatreNext = document.getElementById('btn-theatre-next');
  const btnTheatreYoutubeDirect = document.getElementById('btn-theatre-youtube-direct');

  // Video Modal Elements (2-column Split)
  const videoModal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-video-iframe');
  const modalTitle = document.getElementById('modal-video-title');
  const modalBadge = document.getElementById('modal-video-channel-badge');
  const modalSummary = document.getElementById('modal-video-summary');
  const modalTakeaways = document.getElementById('modal-video-takeaways');
  const modalExamTip = document.getElementById('modal-video-exam-tip');
  const modalYoutubeDirect = document.getElementById('modal-video-youtube-direct');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Subtab Navigation logic
  function switchSubtab(tab) {
    if (tab === 'theory') {
      btnSubTheory.classList.add('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-300', 'shadow-sm');
      btnSubTheory.classList.remove('text-slate-600', 'dark:text-slate-400');
      btnSubVideos.classList.remove('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-300', 'shadow-sm');
      btnSubVideos.classList.add('text-slate-600', 'dark:text-slate-400');
      subpaneTheory.classList.remove('hidden');
      subpaneVideos.classList.add('hidden');
      renderActiveChapter();
    } else {
      btnSubVideos.classList.add('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-300', 'shadow-sm');
      btnSubVideos.classList.remove('text-slate-600', 'dark:text-slate-400');
      btnSubTheory.classList.remove('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-300', 'shadow-sm');
      btnSubTheory.classList.add('text-slate-600', 'dark:text-slate-400');
      subpaneVideos.classList.remove('hidden');
      subpaneTheory.classList.add('hidden');
      loadTheatreVideo(currentTheatreIndex);
      renderVideos();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (btnSubTheory) btnSubTheory.addEventListener('click', () => switchSubtab('theory'));
  if (btnSubVideos) btnSubVideos.addEventListener('click', () => switchSubtab('videos'));

  // --- LÝ THUYẾT 12 CHƯƠNG ---
  function renderChapterPills() {
    const pillsContainer = document.getElementById('theory-chapter-pills');
    if (!pillsContainer || typeof THEORY_DATA === 'undefined') return;

    pillsContainer.innerHTML = THEORY_DATA.map(chap => {
      const isActive = chap.id === activeChapterId;
      const isMicro = chap.category === 'micro';
      const catColor = isMicro ? 'text-indigo-500' : 'text-emerald-500';
      return `
        <button class="chapter-pill px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isActive ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}" data-id="${chap.id}">
          <span class="${isActive ? 'text-indigo-200' : catColor}">C${chap.number}</span>
          <span>${chap.title.split('&')[0].replace('Khái Quát Về ', '').trim()}</span>
        </button>
      `;
    }).join('');

    pillsContainer.querySelectorAll('.chapter-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeChapterId = e.currentTarget.getAttribute('data-id');
        renderChapterPills();
        renderActiveChapter();
      });
    });
  }

  function renderActiveChapter() {
    const contentContainer = document.getElementById('theory-chapter-content');
    if (!contentContainer || typeof THEORY_DATA === 'undefined') return;

    const chap = THEORY_DATA.find(c => c.id === activeChapterId) || THEORY_DATA[0];
    const isMicro = chap.category === 'micro';

    // Tìm video liên quan
    let relatedVideos = [];
    if (typeof VIDEOS_DATA !== 'undefined') {
      relatedVideos = VIDEOS_DATA.filter(v => v.chapter.includes(`Chương ${chap.number}:`));
    }

    let html = `
      <!-- Chapter Header -->
      <div class="border-b border-slate-100 dark:border-slate-800 pb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold ${isMicro ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}">
            ${isMicro ? 'KINH TẾ VI MÔ' : 'KINH TẾ VĨ MÔ'} • CHƯƠNG ${chap.number}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
          ${chap.title}
        </h2>
        <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
          ${chap.subtitle}
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
          💡 <strong>Tổng quan chương:</strong> ${chap.overview}
        </p>
      </div>

      <!-- Sections -->
      <div class="space-y-6 pt-2">
        ${chap.sections.map(sec => `
          <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <i data-lucide="bookmark" class="w-4 h-4 text-indigo-500"></i>
              ${sec.heading}
            </h3>
            <div class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              ${sec.content}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Phần Video Quốc tế đề xuất cho chương này
    if (relatedVideos.length > 0) {
      html += `
        <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <i data-lucide="youtube" class="w-5 h-5 text-red-500"></i>
              Video Quốc Tế Khuyên Xem Cho Chương Này (${relatedVideos.length} bài giảng)
            </h3>
            <button id="btn-jump-to-all-videos" class="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              Xem tất cả video →
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${relatedVideos.map(v => `
              <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-indigo-400 transition-all flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs mb-2">
                    <span class="font-bold px-2 py-0.5 rounded-full ${getChannelBadgeClass(v.channel)}">${v.channelName}</span>
                    <span class="text-slate-400 font-medium">${v.duration}</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">${v.titleVi}</h4>
                  <p class="text-xs text-slate-500 line-clamp-2">${v.summary}</p>
                </div>
                <button class="mt-3 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors" onclick="handleOpenVideo('${v.id}')">
                  <i data-lucide="play" class="w-3.5 h-3.5"></i>
                  <span>Xem bài giảng ngay</span>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    contentContainer.innerHTML = html;
    document.getElementById('btn-jump-to-all-videos')?.addEventListener('click', () => switchSubtab('videos'));
    if (window.lucide) window.lucide.createIcons();
    renderMath(contentContainer);
  }

  // --- GIẢNG ĐƯỜNG VIDEO QUỐC TẾ: STUDIO THEATRE (SPLIT-SCREEN) ---
  function getChannelBadgeClass(channel) {
    if (channel === 'MRUniversity') return 'badge-mru';
    if (channel === 'CrashCourse') return 'badge-crashcourse';
    if (channel === 'Jacob Clifford') return 'badge-jacob';
    if (channel === 'Khan Academy') return 'badge-khan';
    return 'bg-slate-100 text-slate-700';
  }

  function loadTheatreVideo(index) {
    if (typeof VIDEOS_DATA === 'undefined' || VIDEOS_DATA.length === 0) return;
    if (index < 0) index = VIDEOS_DATA.length - 1;
    if (index >= VIDEOS_DATA.length) index = 0;
    currentTheatreIndex = index;

    const v = VIDEOS_DATA[currentTheatreIndex];
    if (!v) return;

    if (theatreCounter) theatreCounter.textContent = `${currentTheatreIndex + 1} / ${VIDEOS_DATA.length} Bài giảng`;
    if (theatreIframe) {
      // Dùng youtube-nocookie.com và các cờ tối ưu để tránh bị trình duyệt chặn embed
      theatreIframe.src = `https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&enablejsapi=1`;
    }
    if (btnTheatreYoutubeDirect) {
      btnTheatreYoutubeDirect.href = `https://www.youtube.com/watch?v=${v.youtubeId}`;
    }

    if (theatreChannelBadge) {
      theatreChannelBadge.textContent = v.channelName;
      theatreChannelBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold ${getChannelBadgeClass(v.channel)}`;
    }
    if (theatreCategoryBadge) {
      theatreCategoryBadge.textContent = v.category === 'micro' ? 'VI MÔ' : 'VĨ MÔ';
      theatreCategoryBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold ${v.category === 'micro' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}`;
    }
    if (theatreDuration) theatreDuration.textContent = v.duration;
    if (theatreTitleVi) theatreTitleVi.textContent = v.titleVi;
    if (theatreTitleEn) theatreTitleEn.textContent = v.titleEn;
    if (theatreSummary) theatreSummary.textContent = v.summary;

    if (theatreTakeaways) {
      theatreTakeaways.innerHTML = v.keyTakeaways.map(t => `<li class="leading-relaxed">${t}</li>`).join('');
    }
    if (theatreExamTip) {
      theatreExamTip.textContent = v.examRelevance;
    }
    if (theatreTerms) {
      theatreTerms.innerHTML = v.keyTerms.map(t => `
        <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm" title="${t.vi}">
          <strong>${t.en}</strong>: ${t.vi}
        </span>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Navigation Prev / Next trong Theatre
  if (btnTheatrePrev) {
    btnTheatrePrev.addEventListener('click', () => {
      loadTheatreVideo(currentTheatreIndex - 1);
    });
  }

  if (btnTheatreNext) {
    btnTheatreNext.addEventListener('click', () => {
      loadTheatreVideo(currentTheatreIndex + 1);
    });
  }

  function renderVideos() {
    const grid = document.getElementById('video-cards-grid');
    if (!grid || typeof VIDEOS_DATA === 'undefined') return;

    const filtered = VIDEOS_DATA.filter(v => {
      const matchChannel = selectedChannel === 'all' || v.channel === selectedChannel;
      const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = q === '' ||
        v.titleEn.toLowerCase().includes(q) ||
        v.titleVi.toLowerCase().includes(q) ||
        v.summary.toLowerCase().includes(q) ||
        v.chapter.toLowerCase().includes(q) ||
        v.keyTerms.some(t => t.en.toLowerCase().includes(q) || t.vi.toLowerCase().includes(q));

      return matchChannel && matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-slate-400">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-2 opacity-50"></i>
        <p class="font-semibold text-sm">Không tìm thấy video nào phù hợp với bộ lọc hiện tại.</p>
      </div>`;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = filtered.map(v => {
      const isCurrentPlaying = VIDEOS_DATA[currentTheatreIndex] && VIDEOS_DATA[currentTheatreIndex].id === v.id;
      return `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border-2 ${isCurrentPlaying ? 'border-indigo-600 ring-2 ring-indigo-500/30' : 'border-slate-200 dark:border-slate-800'} shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
          <!-- Thumbnail Container -->
          <div class="relative w-full aspect-video bg-slate-900 cursor-pointer overflow-hidden" onclick="handleOpenVideo('${v.id}')">
            <img src="${v.thumbnail}" alt="${v.titleVi}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
              </div>
            </div>
            <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-bold">
              ${v.duration}
            </span>
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${v.category === 'micro' ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'}">
              ${v.category === 'micro' ? 'VI MÔ' : 'VĨ MÔ'}
            </span>
            ${isCurrentPlaying ? '<span class="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white animate-pulse">ĐANG PHÁT</span>' : ''}
          </div>

          <!-- Video Details -->
          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${getChannelBadgeClass(v.channel)}">
                  ${v.channelName}
                </span>
                <span class="text-[11px] text-slate-400 font-medium">${v.chapter.split(':')[0]}</span>
              </div>

              <h3 class="font-bold text-base text-slate-900 dark:text-slate-100 leading-snug cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onclick="handleOpenVideo('${v.id}')">
                ${v.titleVi}
              </h3>
              <p class="text-xs text-slate-400 font-mono italic">${v.titleEn}</p>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${v.summary}</p>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2 pt-2">
              <button class="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm" onclick="handleOpenVideo('${v.id}')">
                <i data-lucide="play" class="w-3.5 h-3.5"></i>
                <span>Phát Lên Rạp</span>
              </button>
              <a href="https://www.youtube.com/watch?v=${v.youtubeId}" target="_blank" rel="noopener noreferrer" class="py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1">
                <i data-lucide="external-link" class="w-3 h-3 text-red-500"></i>
                <span>YouTube ↗</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Event Listeners
  document.querySelectorAll('.channel-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedChannel = e.currentTarget.getAttribute('data-channel');
      document.querySelectorAll('.channel-filter-btn').forEach(b => {
        if (b === e.currentTarget) {
          b.classList.add('bg-indigo-600', 'text-white');
          b.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
        } else {
          b.classList.remove('bg-indigo-600', 'text-white');
          b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
        }
      });
      renderVideos();
    });
  });

  const searchInput = document.getElementById('video-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderVideos();
    });
  }

  const categorySelect = document.getElementById('video-category-select');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      selectedCategory = e.target.value;
      renderVideos();
    });
  }

  // Handle Play Video in Split-Screen Theatre
  window.handleOpenVideo = function(videoId) {
    if (typeof VIDEOS_DATA === 'undefined') return;
    const targetIdx = VIDEOS_DATA.findIndex(item => item.id === videoId);
    if (targetIdx === -1) return;

    // Chuyển sang subtab Videos nếu đang ở subtab Theory
    switchSubtab('videos');

    // Tải video vào Theatre Player
    loadTheatreVideo(targetIdx);

    // Cuộn mượt mà lên vị trí Theatre Player để người dùng xem ngay
    const theatreEl = document.getElementById('video-theatre');
    if (theatreEl) {
      theatreEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Cập nhật lại danh sách video để highlight thẻ đang phát
    renderVideos();
  };

  // Khởi tạo ban đầu
  renderChapterPills();
  renderActiveChapter();
}

