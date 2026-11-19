const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf-8');

console.log('Has trackConversionEvent:', js.includes('trackConversionEvent'));
console.log('Has gtag:', js.includes('gtag'));
