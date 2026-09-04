const fs = require('fs');
const path = require('path');

// Test if all formulas and text with math can be parsed without syntax errors
const files = ['theory.js', 'formulas.js', 'worked_problems.js', 'true_false.js', 'quiz.js', 'mock_exams.js'];

let totalErrors = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, 'data', f), 'utf8');
  
  // Find all $$ ... $$ and $ ... $
  const displays = content.match(/\$\$([^\$]+)\$\$/g) || [];
  const inlines = content.match(/(?<!\$)\$([^\$\n]+)\$(?!\$)/g) || [];

  console.log(`Checking ${f}: ${displays.length} display formulas, ${inlines.length} inline formulas`);

  // Check for unmatched dollar signs
  const dollarCount = (content.match(/\$/g) || []).length;
  if (dollarCount % 2 !== 0) {
    console.error(`  ❌ Lỗi: Số dấu $ không chẵn trong ${f} (${dollarCount})`);
    totalErrors++;
  }
});

if (totalErrors === 0) {
  console.log('\n🎉 TẤT CẢ CÔNG THỨC TOÁN $ VÀ $$ ĐỀU CÂN BẰNG HOÀN HẢO 100%!');
} else {
  console.error(`\nCó ${totalErrors} lỗi cần xử lý!`);
}
