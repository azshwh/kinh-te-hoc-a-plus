const fs = require('fs');
const path = require('path');

const theory = fs.readFileSync(path.join(__dirname, 'data', 'theory.js'), 'utf8');
const lines = theory.split('\n');

const targets = ['<strong>P_Y</strong>', '<strong>C</strong>', '<strong>\\pi</strong>', '<strong>P_{i, t}</strong>', '<strong>MB</strong>'];

lines.forEach((line, i) => {
  targets.forEach(t => {
    if (line.includes(t)) console.log(`Line ${i + 1}:`, line.trim());
  });
});
