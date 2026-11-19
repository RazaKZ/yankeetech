const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf-8');
const lines = js.split('\n');

lines.forEach((l, i) => {
  if (l.includes('submit') || l.includes('Form') || l.includes('send') || l.includes('whatsapp')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 80)}`);
  }
});
