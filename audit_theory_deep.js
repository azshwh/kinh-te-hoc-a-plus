const fs = require('fs');
const path = require('path');

const theory = fs.readFileSync(path.join(__dirname, 'data', 'theory.js'), 'utf8');

console.log('=== 1. AUDIT CHAPTER TITLES IN THEORY.JS ===');
const titleMatches = theory.match(/"title":\s*"[^"]+"/g) || [];
titleMatches.forEach(t => console.log(t));

console.log('\n=== 2. AUDIT RAW MATH NOTATION IN <strong> OR TEXT ===');
const strongMatches = theory.match(/<strong>([^<]+)<\/strong>/g) || [];
const rawMathStrong = strongMatches.filter(s => {
  const inner = s.replace(/<\/?strong>/g, '');
  // check if it has _, ^, \, or common math variables without $
  return (!inner.includes('$') && (inner.includes('_') || inner.includes('^') || inner.includes('\\') || /^[A-Z]{1,3}$/.test(inner)));
});
console.log('Found raw math inside <strong>:', rawMathStrong);

console.log('\n=== 3. AUDIT ALL CAPS WORDS IN THEORY.JS ===');
const caps = theory.match(/[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{2,}/gu) || [];
const ignored = new Set(['GDP', 'GNP', 'NNP', 'CPI', 'OECD', 'APEC', 'EVFTA', 'CPTPP', 'RCEP', 'FED', 'FOMC', 'DWL', 'PPF', 'SNA', 'MBS', 'OMO', 'LRAS', 'SRAS', 'NHTW', 'NHTM', 'BHXH', 'TNCN', 'TNDN', 'WTP', 'WTS', 'ATC', 'AVC', 'AFC', 'MC', 'MR', 'TR', 'TC', 'VC', 'FC', 'MPK', 'MPL', 'MRS', 'MRTS', 'CRS', 'DRS', 'IRS', 'PPP', 'NCO', 'NX', 'IS', 'LM', 'USD', 'VND', 'ELI5', 'THEORY_DATA', 'ID', 'IE', 'SE', 'TR', 'MRT', 'EI', 'EXY', 'ARRA', 'HIV', 'CAB', 'WTI', 'OPEC', 'MSC', 'MPC', 'MEC', 'NFA', 'GNI', 'MPI', 'FOC', 'FDI', 'NFFI', 'NFIA', 'VMP', 'MRP', 'ECB', 'LRPC', 'SRPC', 'NEU', 'FTU', 'UEH', 'DAV', 'VNU', 'UEB', 'FPT', 'ILO', 'RRR', 'PED']);
const suspicious = [...new Set(caps)].filter(c => !ignored.has(c));
console.log('Suspicious uppercase words:', suspicious);
