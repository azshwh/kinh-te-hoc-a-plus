const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const dataDir = path.join(baseDir, 'data');
const files = [
  'flashcards.js',
  'formulas.js',
  'mock_exams.js',
  'quiz.js',
  'traps.js',
  'true_false.js',
  'videos.js',
  'worked_problems.js',
  'theory.js'
];

console.log('SCANNING ALL DATA FILES FOR TEXT STANDARDIZATION...');

const reports = {};

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Math bugs:
  // Math expressions missing $ delimiter like \Delta, \delta, \tilde{k}, {\max}
  const mathIssues = [];
  const mathRegex = /(\{\\max\}|\{\\min\}|(?:[^$]|^)\\Delta[A-Za-z]|(?:[^$]|^)\\tilde\{[^\}]+\}|(?:[^$]|^)\\delta(?:\s|,|\.)|(?:[^$]|^)\\pi(?:\s|,|\.|\*)|(?:[^$]|^)\\bar\{y\})/g;
  let mm;
  while ((mm = mathRegex.exec(content)) !== null) {
    mathIssues.push(mm[0].trim());
  }

  // 2. Double parenthesis like (CS) (CS)
  const doubleParens = content.match(/\([A-Za-z0-9\s-]+\)\s*\([A-Za-z0-9\s-]+\)/g) || [];

  // 3. Raw markdown asterisks like (*...*)
  const rawAsterisks = content.match(/\(\*[^\)]+\*\)/g) || [];

  // 4. ALL CAPS
  const caps = content.match(/[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{2,}(?:\s+[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]{1,})*/g) || [];
  const ignored = new Set([
    'GDP', 'GNP', 'NNP', 'CPI', 'OECD', 'APEC', 'EVFTA', 'CPTPP', 'RCEP', 'FED', 'FOMC', 
    'DWL', 'PPF', 'SNA', 'MBS', 'OMO', 'LRAS', 'SRAS', 'NHTW', 'NHTM', 'BHXH', 'TNCN', 
    'TNDN', 'WTP', 'WTS', 'ATC', 'AVC', 'AFC', 'MC', 'MR', 'TR', 'TC', 'VC', 'FC', 
    'MPK', 'MPL', 'MRS', 'MRTS', 'CRS', 'DRS', 'IRS', 'PPP', 'NCO', 'NX', 'SNA', 'IS', 'LM',
    'USD', 'VND', 'FLASHCARDS_DATA', 'FORMULAS_DATA', 'MOCK_EXAMS_DATA', 'QUIZ_DATA', 
    'TRAPS_DATA', 'TRUE_FALSE_DATA', 'VIDEOS_DATA', 'WORKED_PROBLEMS_DATA', 'THEORY_DATA',
    'ELI5'
  ]);
  const suspiciousCaps = [...new Set(caps)].filter(c => !ignored.has(c) && c.length > 2);

  reports[file] = {
    mathIssuesCount: mathIssues.length,
    mathIssuesSample: mathIssues.slice(0, 10),
    doubleParens,
    rawAsterisks,
    suspiciousCapsCount: suspiciousCaps.length,
    suspiciousCaps
  };
});

fs.writeFileSync(path.join(baseDir, 'scan_report.json'), JSON.stringify(reports, null, 2), 'utf8');
console.log('SCAN COMPLETED! Report written to scan_report.json');
