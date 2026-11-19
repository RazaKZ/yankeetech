const fs = require('fs');
const html = fs.readFileSync('portfolio.html', 'utf-8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('<!-- ===') || l.includes('section class=') || l.includes('TESTIMONIALS')) {
    console.log('L' + (i + 1) + ': ' + l.trim());
  }
});
