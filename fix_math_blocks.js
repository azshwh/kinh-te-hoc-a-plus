const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = ['formulas.js', 'theory.js', 'true_false.js', 'worked_problems.js'];

files.forEach(f => {
  let content = fs.readFileSync(path.join(dataDir, f), 'utf8');

  // Fix any accidental \$\pi, \$\delta, \$\tilde, \$\bar
  content = content.replace(/\\\$(\\pi|\\delta|\\tilde|\\bar)/g, '$$$1');
  content = content.replace(/\$\$(\\pi|\\delta|\\tilde|\\bar)/g, '$$1');
  content = content.replace(/\\\$(\w)/g, '$$$1');

  // Fix line 620 in worked_problems.js specifically if broken
  content = content.replace(/\$\$i = r\^\* \+ \S+ \+ 0\.5\([^\)]+\) \+ 0\.5\(y - [^\)]+\)\$\$/g, 
    '$$i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - \\bar{y})$$');
  content = content.replace(/\(\$\S+ = \S+ = 2\\%\)/g, '($\\pi = \\pi^* = 2\\%$)');

  // Remove any nested dollars inside math blocks
  // Find all $$ ... $$ blocks and remove any inner $
  content = content.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
    return '$$' + p1.replace(/\$/g, '') + '$$';
  });

  fs.writeFileSync(path.join(dataDir, f), content, 'utf8');
});

console.log('Done fixing KaTeX math blocks!');
