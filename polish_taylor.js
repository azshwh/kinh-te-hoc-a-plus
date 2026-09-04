const fs = require('fs');
const path = require('path');

const wpPath = path.join(__dirname, 'data', 'worked_problems.js');
let content = fs.readFileSync(wpPath, 'utf8');

content = content.replace(
`Ngân hàng Trung ương điều hành chính sách tiền tệ theo Quy tắc Taylor chuẩn:
$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$
Cho biết:
- Lãi suất thực tế cân bằng dài hạn: $r^* = 2\\\\%$
- Tỷ lệ lạm phát mục tiêu: $\\pi^*$ = 2\\\\%$
- Tốc độ tăng trưởng sản lượng tiềm năng: $\\\\bar{y} = 6\\\\%$.`,
`Ngân hàng Trung ương điều hành chính sách tiền tệ theo Quy tắc Taylor chuẩn:
$$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$$
Cho biết:
- Lãi suất thực tế cân bằng dài hạn: $r^* = 2\\%$
- Tỷ lệ lạm phát mục tiêu: $\\pi^* = 2\\%$
- Tốc độ tăng trưởng sản lượng tiềm năng: $\\bar{y} = 6\\%$.`
);

content = content.replace(
  '"b) Giả sử xảy ra cú sốc tổng cầu khiến lạm phát tăng lên $\\pi$ = 6\\\\%$ và sản lượng tăng nóng lên $y = 8\\\\%$.',
  '"b) Giả sử xảy ra cú sốc tổng cầu khiến lạm phát tăng lên $\\pi = 6\\%$ và sản lượng tăng nóng lên $y = 8\\%$.'
);

content = content.replace(
  '<p>Khi lạm phát đạt mục tiêu ($\\pi$ = $\\pi^*$ = 2\\\\%$) và sản lượng ở mức tiềm năng ($y = \\\\bar{y} = 6\\\\%$):</p>',
  '<p>Khi lạm phát đạt mục tiêu ($\\pi = \\pi^* = 2\\%$) và sản lượng ở mức tiềm năng ($y = \\bar{y} = 6\\%$):</p>'
);

content = content.replace(
  '<p>Khoảng trống lạm phát: $\\pi$ - $\\pi^*$ = 2 - 2 = 0$.</p>',
  '<p>Khoảng trống lạm phát: $\\pi - \\pi^* = 2 - 2 = 0$.</p>'
);

fs.writeFileSync(wpPath, content, 'utf8');
console.log('Polished worked_problems.js Taylor math!');
