const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

let divStack = 0;
let sectionStack = 0;

lines.forEach((line, i) => {
  const dOpens = (line.match(/<div(\s+[^>]*)?>/gi) || []).length;
  const dCloses = (line.match(/<\/div>/gi) || []).length;
  divStack += dOpens - dCloses;

  const sOpens = (line.match(/<section(\s+[^>]*)?>/gi) || []).length;
  const sCloses = (line.match(/<\/section>/gi) || []).length;
  sectionStack += sOpens - sCloses;

  if (sectionStack < 0) {
    console.log(`NEGATIVE SECTION at line ${i+1}: ${line}`);
  }
  if (divStack < 0) {
    console.log(`NEGATIVE DIV at line ${i+1}: ${line}`);
  }
});

console.log('Final divStack:', divStack, 'sectionStack:', sectionStack);
