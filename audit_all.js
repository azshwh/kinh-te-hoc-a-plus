const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(baseDir, 'js', 'app.js'), 'utf8');
const style = fs.readFileSync(path.join(baseDir, 'css', 'style.css'), 'utf8');

console.log('=== 1. AUDIT ICONS & SVGS ===');
const htmlLucides = html.match(/data-lucide="[^"]+"/g) || [];
console.log('data-lucide in index.html:', htmlLucides.length);

const appLucides = app.match(/data-lucide="[^"]+"/g) || [];
console.log('data-lucide in js/app.js:', appLucides.length);

const htmlSvgs = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Inline <svg> in index.html:', htmlSvgs.length);

const appSvgs = app.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Inline <svg> in js/app.js:', appSvgs.length);

// Check CSS rules targeting svg / lucide
console.log('\n=== 2. AUDIT CSS FOR ICONS ===');
const cssRules = style.split('\n').filter(l => l.includes('lucide') || l.includes('svg'));
console.log(cssRules.join('\n'));

// Check data files for remaining uppercase words & formatting issues
console.log('\n=== 3. AUDIT DATA FILES ===');
const dataDir = path.join(baseDir, 'data');
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

dataFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // check for broken katex like {\max}, {\min}, \Delta without $
  const brokenMath = content.match(/\{\\max\}|\{\\min\}|(?:[^$]|^)\\Delta[A-Za-z](?:[^$]|$)|(?:[^$]|^)\\tilde\{[^\}]+\}(?:[^$]|$)|(?:[^$]|^)\\delta(?:\s|,|\.)/g) || [];
  
  // check for double parenthesis like (CS) (CS) or (PS) (PS) or (DWL) (DWL)
  const doubleParens = content.match(/\([A-Za-z0-9\s-]+\)\s*\([A-Za-z0-9\s-]+\)/g) || [];

  // check for raw asterisks like (*...*)
  const rawAsterisks = content.match(/\(\*[^\)]+\*\)/g) || [];

  // check for uppercase words >= 4 chars (Vietnamese)
  const allCaps = content.match(/[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{4,}(?:\s+[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{1,})*/g) || [];
  
  // Filter out normal acronyms
  const acronyms = new Set(['GDPR', 'OECD', 'APEC', 'CPTPP', 'EVFTA', 'RCEP', 'FED', 'FOMC', 'MUNDELL', 'FLEMING', 'SOLOW', 'MANKIW', 'RICARDO', 'PHILLIPS', 'KEYNES', 'SLUTSKY', 'LEONTIEF', 'GIFFEN', 'COURNOT', 'STACKELBERG', 'NASH', 'WALRAS', 'MARSHALL', 'LERNER', 'OKUN', 'STIGLITZ', 'TAYLOR', 'PINDYCK', 'VARIAN', 'SAMUELSON']);
  const suspiciousCaps = allCaps.filter(c => !acronyms.has(c) && !/^[A-Z0-9_\-\s]{2,5}$/.test(c));

  console.log(`\nFile: ${file}`);
  if (brokenMath.length) console.log('  ⚠️ Broken Math:', brokenMath.slice(0, 5));
  if (doubleParens.length) console.log('  ⚠️ Double Parens:', doubleParens.slice(0, 5));
  if (rawAsterisks.length) console.log('  ⚠️ Raw Asterisks (*...*):', rawAsterisks.slice(0, 5));
  if (suspiciousCaps.length) console.log('  ⚠️ Suspicious Caps (first 10):', suspiciousCaps.slice(0, 10));
});
