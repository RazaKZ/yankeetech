const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.includes('copy') && !f.includes('test'));

const baseUrl = 'https://yankeeetech.com';
const today = '2026-11-10';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

files.forEach(file => {
  let priority = '0.7';
  let changefreq = 'weekly';

  if (file === 'index.html') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (file === 'services.html' || file === 'portfolio.html' || file === 'about.html' || file === 'use-cases.html') {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (file.startsWith('service-') || file.startsWith('use-case-')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (file.startsWith('blog-')) {
    priority = '0.8';
    changefreq = 'monthly';
  } else if (file === 'privacy-policy.html' || file === 'terms.html') {
    priority = '0.3';
    changefreq = 'yearly';
  }

  const loc = file === 'index.html' ? baseUrl + '/' : `${baseUrl}/${file}`;

  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

xml += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', xml, 'utf-8');
console.log(`Generated sitemap.xml with ${files.length} URLs!`);
