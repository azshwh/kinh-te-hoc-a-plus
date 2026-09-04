const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Find all caps in index.html text (excluding tags)
const textOnly = html.replace(/<[^>]+>/g, ' ');
const caps = textOnly.match(/[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{4,}(?:\s+[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{1,})*/g) || [];
const ignored = new Set(['ECONMASTER', 'CTRL', 'KATE', 'KATE X', 'CHART', 'LUCIDE', 'VI MÔ', 'VĨ MÔ', 'HTML', 'CSS', 'JAVASCRIPT', 'ISLM', 'SNA']);
const suspicious = [...new Set(caps)].filter(c => !ignored.has(c));

console.log('Suspicious ALL CAPS in index.html:', suspicious);
