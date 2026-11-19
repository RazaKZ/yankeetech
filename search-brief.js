const fs = require('fs');
const brief = fs.readFileSync('docs/brief.txt', 'utf-8');
const lines = brief.split('\n');
console.log('Brief total lines:', lines.length);
lines.forEach((l, i) => {
  const low = l.toLowerCase();
  if (low.includes('hero') || low.includes('section 2') || low.includes('section 4') || low.includes('section 5') || low.includes('mockup') || low.includes('monolith') || low.includes('services')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 110)}`);
  }
});
