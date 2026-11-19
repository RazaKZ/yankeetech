const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

// Find all <section and </section>
const sOpens = (html.match(/<section/gi) || []).length;
const sCloses = (html.match(/<\/section/gi) || []).length;
console.log('section opens:', sOpens, 'closes:', sCloses);

// Find all <div and </div
const dOpens = (html.match(/<div/gi) || []).length;
const dCloses = (html.match(/<\/div/gi) || []).length;
console.log('div opens:', dOpens, 'closes:', dCloses);
