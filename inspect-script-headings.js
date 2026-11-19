const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf-8');
const lines = js.split('\n');

lines.forEach((l, i) => {
  if (l.includes('// ===') || l.includes('// 3.') || l.includes('MULTI-STEP')) {
    console.log('L' + (i + 1) + ': ' + l.trim());
  }
});
