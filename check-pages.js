const fs = require('fs');
const brief = fs.readFileSync('docs/brief.txt', 'utf-8');
const lines = brief.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Page 1:') || l.includes('Page 2:') || l.includes('Page 3:') || l.includes('Page 4:') || l.includes('Page 5:') || l.includes('Page 6:') || l.includes('URL:')) {
    console.log('L' + (i + 1) + ': ' + l.trim());
  }
});
