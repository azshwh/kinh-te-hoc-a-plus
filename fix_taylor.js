const fs = require('fs');
const path = require('path');

const wpPath = path.join(__dirname, 'data', 'worked_problems.js');
let content = fs.readFileSync(wpPath, 'utf8');

// Fix the exact lines in worked_problems.js
content = content.replace(/\$1\$\^\*/g, '$\\pi^*$');
content = content.replace(/\$1\$/g, '$\\pi$');
content = content.replace(/\$\\pi\$\^\*/g, '$\\pi^*$');
content = content.replace(/\$1\s*=\s*\$\\pi\$\^\*/g, '$\\pi = \\pi^*$');
content = content.replace(/\$1\s*-\s*\$\\pi\$\^\*/g, '$\\pi - \\pi^*$');

// Also check line 620:
// $i = r^* + \pi + 0.5(\pi - \pi^*) + 0.5(y - \bar{y})$
// Ensure it is inside $$ ... $$
content = content.replace(/context:\s*`Ngân hàng Trung ương điều hành chính sách tiền tệ theo Quy tắc Taylor chuẩn:\s*[\$\s]*i\s*=\s*r\^\*\s*\+\s*\\pi\s*\+\s*0\.5\(\\pi\s*-\s*\\pi\^\*\)\s*\+\s*0\.5\(y\s*-\s*\\bar\{y\}\)[\$\s]*/g,
`context: \`Ngân hàng Trung ương điều hành chính sách tiền tệ theo Quy tắc Taylor chuẩn:
$$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$$
`);

fs.writeFileSync(wpPath, content, 'utf8');
console.log('Fixed worked_problems.js successfully!');
