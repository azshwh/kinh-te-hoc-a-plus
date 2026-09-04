const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');

console.log('=== SCANNING INDEX.HTML FOR TITLE CASE HEADINGS ===');
const headingRegex = /<(h[1-6]|span|p|button|div)[^>]*>([^<]+)<\/\1>/g;
let m;
while ((m = headingRegex.exec(html)) !== null) {
  const text = m[2].trim();
  // Check if text has multiple capitalized words in Vietnamese
  const words = text.split(/\s+/);
  if (words.length >= 3) {
    const capitalizedCount = words.filter(w => /^[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/.test(w)).length;
    if (capitalizedCount >= 3 && !text.includes('EconMaster') && !text.includes('Ctrl+K')) {
      console.log(`Tag <${m[1]}>:`, text);
    }
  }
}

console.log('\n=== SCANNING JS/APP.JS FOR TITLE CASE STRINGS ===');
const strRegex = /["'`]([^"'`\n]{10,80})["'`]/g;
while ((m = strRegex.exec(app)) !== null) {
  const text = m[1].trim();
  if (text.startsWith('<') || text.includes('http') || text.includes('px') || text.includes('rgba')) continue;
  const words = text.split(/\s+/);
  if (words.length >= 3) {
    const capitalizedCount = words.filter(w => /^[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/.test(w)).length;
    if (capitalizedCount >= 3 && !text.includes('EconMaster') && !text.includes('Principles of Economics')) {
      console.log('JS string:', text);
    }
  }
}
