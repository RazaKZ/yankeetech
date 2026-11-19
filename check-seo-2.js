const fs = require('fs');
const seo = fs.readFileSync('docs/seo_copy.txt', 'utf-8');
const lines = seo.split('\n');
console.log(lines.slice(50, 150).join('\n'));
