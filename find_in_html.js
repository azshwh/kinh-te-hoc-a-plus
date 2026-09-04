const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('GIẢI ĐẠT ĐIỂM') || l.includes('NHTW')) {
    console.log(i + 1, l);
  }
});
