const fs = require('fs');
const html = fs.readFileSync('portfolio.html', 'utf-8');
const lines = html.split('\n');

const testStart = lines.findIndex(l => l.includes('CLIENT TESTIMONIALS & SOCIAL PROOF'));
console.log(lines.slice(testStart, testStart + 70).join('\n'));
