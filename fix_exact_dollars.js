const fs = require('fs');
const path = require('path');

// 1. Fix theory.js line 56
const theoryPath = path.join(__dirname, 'data', 'theory.js');
let theory = fs.readFileSync(theoryPath, 'utf8');
theory = theory.replace('<strong>{\\max}, P_{\\min}$</strong>', '<strong>$P_{\\max}, P_{\\min}$</strong>');
theory = theory.replace('<strong>{\\max}</strong>', '<strong>$P_{\\max}$</strong>');
theory = theory.replace('<strong>{\\min}</strong>', '<strong>$P_{\\min}$</strong>');
fs.writeFileSync(theoryPath, theory, 'utf8');
console.log('Fixed theory.js unmatched dollars!');

// 2. Fix worked_problems.js
const wpPath = path.join(__dirname, 'data', 'worked_problems.js');
let wp = fs.readFileSync(wpPath, 'utf8');

wp = wp.replace(
  '<p>• Lợi nhuận kinh tế: $\\pi$ = TR - TC = 1.000 - 700 = \\mathbf{300}$ nghìn đồng.</p>',
  '<p>• Lợi nhuận kinh tế: $\\pi = TR - TC = 1.000 - 700 = \\mathbf{300}$ nghìn đồng.</p>'
);

wp = wp.replace(
  '<p>• <strong>Tổng lợi nhuận:</strong> $\\pi$ = TR - TC = 4.800 - 1.900 = \\mathbf{2.900}$.</p>',
  '<p>• <strong>Tổng lợi nhuận:</strong> $\\pi = TR - TC = 4.800 - 1.900 = \\mathbf{2.900}$.</p>'
);

wp = wp.replace(
  '<p>Lợi nhuận mỗi DN: $\\pi$_1 = $\\pi$_2 = (P - MC) \\times Q_i = (40 - 10) \\times 30 = \\mathbf{900}$.</p>',
  '<p>Lợi nhuận mỗi DN: $\\pi_1 = \\pi_2 = (P - MC) \\times Q_i = (40 - 10) \\times 30 = \\mathbf{900}$.</p>'
);

wp = wp.replace(
  '<p>• Lợi nhuận người dẫn đầu: $\\pi$_1 = (32.5 - 10) \\times 45 = \\mathbf{1.012.5}$ (Tăng so với Cournot 900!).</p>',
  '<p>• Lợi nhuận người dẫn đầu: $\\pi_1 = (32.5 - 10) \\times 45 = \\mathbf{1.012.5}$ (Tăng so với Cournot 900!).</p>'
);

wp = wp.replace(
  '<p>• Lợi nhuận người đi sau: $\\pi$_2 = (32.5 - 10) \\times 22.5 = \\mathbf{506.25}$ (Giảm một nửa so với Cournot!).</p>',
  '<p>• Lợi nhuận người đi sau: $\\pi_2 = (32.5 - 10) \\times 22.5 = \\mathbf{506.25}$ (Giảm một nửa so với Cournot!).</p>'
);

wp = wp.replace(
  'tỷ lệ khấu hao $\\pi$ = 0.05$',
  'tỷ lệ khấu hao $\\delta = 0.05$'
);

wp = wp.replace(
  '<p>Khi $\\pi$ = 6\\%$ (vượt mục tiêu $6 - 2 = 4\\%$)',
  '<p>Khi $\\pi = 6\\%$ (vượt mục tiêu $6 - 2 = 4\\%$)'
);

fs.writeFileSync(wpPath, wp, 'utf8');
console.log('Fixed worked_problems.js unmatched dollars!');
