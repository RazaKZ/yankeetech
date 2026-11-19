const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const estStart = lines.findIndex(l => l.includes('id="estimator"'));
let estEnd = -1;
for (let i = estStart + 1; i < lines.length; i++) {
  if (lines[i].includes('</section>')) {
    estEnd = i;
    break;
  }
}
console.log('Estimator end line:', estEnd);
console.log(lines.slice(estEnd - 15, estEnd + 5).join('\n'));
