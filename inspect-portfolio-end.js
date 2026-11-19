const fs = require('fs');
const html = fs.readFileSync('portfolio.html', 'utf-8');
const lines = html.split('\n');

const gridStart = lines.findIndex(l => l.includes('id="portfolioGrid"'));
let gridEnd = -1;
for (let i = gridStart + 1; i < lines.length; i++) {
  if (lines[i].includes('</section>')) {
    gridEnd = i;
    break;
  }
}
console.log('Grid start:', gridStart, 'Grid end:', gridEnd);
console.log(lines.slice(gridEnd - 5, gridEnd + 35).join('\n'));
