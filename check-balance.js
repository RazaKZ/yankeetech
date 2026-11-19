const fs = require('fs');

function checkTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Simple check for unclosed div, section, a, p
  const tags = ['div', 'section', 'article', 'header', 'footer', 'main', 'nav'];
  const results = {};
  tags.forEach(tag => {
    const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    const opens = (content.match(openRegex) || []).length;
    const closes = (content.match(closeRegex) || []).length;
    results[tag] = { opens, closes, diff: opens - closes };
  });
  console.log(filePath, JSON.stringify(results, null, 2));
}

checkTags('index.html');
