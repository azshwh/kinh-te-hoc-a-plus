const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');

console.log('=== UPPERCASE IN INDEX.HTML ===');
const htmlLines = html.split('\n');
htmlLines.forEach((l, i) => {
  if (l.includes('uppercase')) console.log(`Line ${i + 1}:`, l.trim());
});

console.log('\n=== UPPERCASE IN JS/APP.JS ===');
const appLines = app.split('\n');
appLines.forEach((l, i) => {
  if (l.includes('uppercase')) console.log(`Line ${i + 1}:`, l.trim());
});
