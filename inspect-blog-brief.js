const fs = require('fs');
const brief = fs.readFileSync('docs/brief.txt', 'utf-8');
const lines = brief.split('\n');

lines.forEach((l, i) => {
  if (l.toLowerCase().includes('blog') || l.toLowerCase().includes('article') || l.toLowerCase().includes('gohighlevel api v2') || l.toLowerCase().includes('saas mvp in 2026') || l.toLowerCase().includes('laravel vs node')) {
    console.log('L' + (i + 1) + ': ' + l.trim());
  }
});
