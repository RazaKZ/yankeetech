const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let anyError = false;
files.forEach(file => {
  const html = fs.readFileSync(file, 'utf-8');
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
          anyError = true;
          console.log(`[${file}] Mismatched closing </${tag}> at index ${match.index}`);
        }
      }
    }
  }

  if (stack.length > 0) {
    anyError = true;
    console.log(`[${file}] Unclosed tags: ${stack.map(s => s.tag).join(', ')}`);
  }
});

if (!anyError) {
  console.log(`SUCCESS: All ${files.length} HTML files have 100% balanced tags!`);
}
