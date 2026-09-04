const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');

console.log('=== CHAPTER TITLES IN INDEX.HTML ===');
const htmlChapters = html.match(/Chương \d+:[^<]+/g) || [];
htmlChapters.forEach(c => console.log(c));

console.log('=== CHAPTER TITLES IN JS/APP.JS ===');
const appChapters = app.match(/Chương \d+:[^'"`<]+/g) || [];
appChapters.forEach(c => console.log(c));
