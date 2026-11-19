const fs = require('fs');
const lines = fs.readFileSync('script.js', 'utf-8').split('\n');
console.log(lines.slice(200, 270).join('\n'));
