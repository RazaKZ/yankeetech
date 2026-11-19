const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

// Use a simple regex-based tag tokenizer to find unmatched tags
const regex = /<\/?([a-zA-Z0-9]+)(\s+[^>]*)?>/g;
let match;
const stack = [];

while ((match = regex.exec(html)) !== null) {
  const isClosing = match[0].startsWith('</');
  const tag = match[1].toLowerCase();
  
  if (['div', 'section', 'article', 'header', 'footer', 'main', 'nav'].includes(tag)) {
    if (!isClosing) {
      stack.push({ tag, index: match.index });
    } else {
      if (stack.length > 0 && stack[stack.length - 1].tag === tag) {
        stack.pop();
      } else {
        console.log(`Mismatched closing </${tag}> at index ${match.index}. Stack top was:`, stack.length ? stack[stack.length - 1] : 'empty');
      }
    }
  }
}

console.log('Unclosed tags remaining on stack:', stack.length);
stack.forEach(s => {
  const lineNo = html.slice(0, s.index).split('\n').length;
  console.log(`Unclosed <${s.tag}> at line ${lineNo}`);
});
