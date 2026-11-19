const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const blogStart = lines.findIndex(l => l.includes('id="blog"'));
console.log('Blog start:', blogStart);
console.log(lines.slice(blogStart - 2, blogStart + 90).join('\n'));
