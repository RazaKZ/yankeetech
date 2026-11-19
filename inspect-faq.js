const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const faqIndex = lines.findIndex(l => l.includes('FREQUENTLY ASKED QUESTIONS'));
console.log('FAQ index:', faqIndex);
console.log(lines.slice(faqIndex, faqIndex + 40).join('\n'));
