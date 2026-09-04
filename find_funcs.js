const fs = require('fs');
const path = require('path');

const app = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');
const functions = app.match(/function\s+([a-zA-Z0-9_]+)\s*\(/g) || [];
console.log(functions);
