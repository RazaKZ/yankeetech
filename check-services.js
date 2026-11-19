const fs = require('fs');
const brief = fs.readFileSync('docs/brief.txt', 'utf-8');
const lines = brief.split('\n');

// Find section 5 or Appendix B
let inServices = false;
lines.forEach((l, i) => {
  if (l.includes('Services (four cards') || l.includes('Appendix B') || l.includes('Primary row') || l.includes('Quick solutions')) {
    console.log(`--- MATCH L${i+1} ---`);
    console.log(lines.slice(Math.max(0, i-5), Math.min(lines.length, i+35)).join('\n'));
  }
});
