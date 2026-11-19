const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const blogStart = lines.findIndex(l => l.includes('13. BLOG & TECHNICAL INSIGHTS'));
console.log(lines.slice(blogStart + 110, blogStart + 135).join('\n'));
