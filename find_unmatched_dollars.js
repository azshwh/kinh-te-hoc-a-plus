const fs = require('fs');
const path = require('path');

function findUnmatchedDollars(filename) {
  const filePath = path.join(__dirname, 'data', filename);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  console.log(`\n=== TÌM LỖI DẤU $ TRONG ${filename} ===`);
  lines.forEach((line, idx) => {
    // Count dollars on this line (excluding escaped \$ if any)
    const dollars = line.match(/\$/g) || [];
    // If a line has an odd number of dollars, and it's not a multi-line $$ block
    if (dollars.length % 2 !== 0) {
      console.log(`Dòng ${idx + 1} (${dollars.length} dấu $): ${line.trim()}`);
    }
  });
}

findUnmatchedDollars('theory.js');
findUnmatchedDollars('worked_problems.js');
