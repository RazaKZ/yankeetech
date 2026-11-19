const fs = require('fs');
const brief = fs.readFileSync('docs/brief.txt', 'utf-8');
const lines = brief.split('\n');
console.log(lines.slice(760).join('\n'));
