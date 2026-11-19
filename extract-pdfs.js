const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extract() {
  try {
    const briefParser = new PDFParse({ data: fs.readFileSync('docs/Yankee Tech Website Developer Brief (1).pdf') });
    const briefText = await briefParser.getText();
    fs.writeFileSync('docs/brief.txt', typeof briefText === 'string' ? briefText : (briefText.text || JSON.stringify(briefText)), 'utf-8');
    console.log('Saved docs/brief.txt');

    const seoParser = new PDFParse({ data: fs.readFileSync('docs/Yankee Tech SEO Keyword Research & Website Copy.pdf') });
    const seoText = await seoParser.getText();
    fs.writeFileSync('docs/seo_copy.txt', typeof seoText === 'string' ? seoText : (seoText.text || JSON.stringify(seoText)), 'utf-8');
    console.log('Saved docs/seo_copy.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

extract();
