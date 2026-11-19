const fs = require('fs');
const html = fs.readFileSync('portfolio.html', 'utf-8');
const lines = html.split('\n');

const gridStart = lines.findIndex(l => l.includes('portfolio-card') || l.includes('id="portfolioGrid"') || l.includes('data-category'));
console.log('Grid start line:', gridStart);
console.log(lines.slice(gridStart - 5, gridStart + 35).join('\n'));
