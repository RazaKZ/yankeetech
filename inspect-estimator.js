const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const estStart = lines.findIndex(l => l.includes('id="estimator"'));
console.log('Estimator start line:', estStart);
console.log(lines.slice(estStart - 5, estStart + 45).join('\n'));
