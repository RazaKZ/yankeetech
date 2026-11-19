const fs = require('fs');
const seo = fs.readFileSync('docs/seo_copy.txt', 'utf-8');
const lines = seo.split('\n');
console.log('SEO copy total lines:', lines.length);
lines.slice(0, 50).forEach((l, i) => {
  console.log('L' + (i + 1) + ': ' + l.trim());
});
