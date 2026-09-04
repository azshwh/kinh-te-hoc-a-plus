const fs = require('fs');
const path = require('path');

const theoryPath = path.join(__dirname, 'data', 'theory.js');
let theory = fs.readFileSync(theoryPath, 'utf8');

// Replacements for remaining math notation
const finalMathFixes = [
  ['<strong>P_{i, t}</strong>', '<strong>$P_{i, t}$</strong>'],
  ['<strong>B</strong> (hoặc <strong>MB</strong>)', '<strong>$B$</strong> (hoặc <strong>$MB$</strong>)'],
  ['<strong>cr</strong>:', '<strong>$cr$</strong>:'],
  ['<strong>rr</strong>:', '<strong>$rr$</strong>:'],
  ['<strong>P_Y</strong>:', '<strong>$P_Y$</strong>:'],
  ['<strong>Q_X</strong>:', '<strong>$Q_X$</strong>:'],
  ['<strong>MR</strong>:', '<strong>$MR$</strong>:'],
  ['<strong>\\pi</strong>:', '<strong>$\\pi$</strong>:'],
  ['<strong>\\\\pi</strong>:', '<strong>$\\pi$</strong>:'],
  ['<strong>C</strong>:', '<strong>$C$</strong>:'],
  ['<strong>I</strong>:', '<strong>$I$</strong>:'],
  ['<strong>G</strong>:', '<strong>$G$</strong>:'],
  ['<strong>NX</strong>:', '<strong>$NX$</strong>:'],
  ['<strong>MB</strong>:', '<strong>$MB$</strong>:'],
  ['CỐ định ở năm gốc', 'cố định ở năm gốc'],
  ['lượng hàng $Q$ là CỐ định', 'lượng hàng $Q$ là cố định'],
  ['ĐỔI', 'đổi'],
  ['LÊN', 'lên'],
  ['SAI', 'sai'],
  ['SAU', 'sau'],
  ['CỐ', 'cố'],
  ['CÓ', 'có'],
  ['VÀ', 'và'],
  ['MỤC', 'mục']
];

finalMathFixes.forEach(([from, to]) => {
  theory = theory.replaceAll(from, to);
});

// Also fix multiline formula for CPI to wrap cleanly on mobile
theory = theory.replace(
  '$$CPI_t = \\frac{\\sum (P_{i, t} \\times Q_{i, \\text{gốc}})}{\\sum (P_{i, \\text{gốc}} \\times Q_{i, \\text{gốc}})} \\times 100; \\quad \\pi_t = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%$$',
  '$$\\begin{aligned} CPI_t &= \\frac{\\sum (P_{i, t} \\times Q_{i, \\text{gốc}})}{\\sum (P_{i, \\text{gốc}} \\times Q_{i, \\text{gốc}})} \\times 100 \\\\ \\pi_t &= \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\% \\end{aligned}$$'
);

// Fix multiline formula for money multiplier
theory = theory.replace(
  '$$m_M = \\frac{cr + 1}{cr + rr}; \\quad M^S = m_M \\times B$$',
  '$$\\begin{aligned} m_M &= \\frac{cr + 1}{cr + rr} \\\\ M^S &= m_M \\times B \\end{aligned}$$'
);

fs.writeFileSync(theoryPath, theory, 'utf8');
console.log('Applied final math fixes and mobile formula wrapping to theory.js!');
