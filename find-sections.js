const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('</section>')) {
    console.log(`L${i + 1}: ${l.trim().slice(0, 60)}`);
  }
});
