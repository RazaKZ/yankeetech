const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const testStart = lines.findIndex(l => l.includes('CLIENT TESTIMONIALS'));
console.log(lines.slice(testStart, testStart + 75).join('\n'));
