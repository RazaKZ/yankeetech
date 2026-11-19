const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace('        </div>\n\n      </div>\n    </section>', '        </div>\n\n      </div>\n    </div>\n  </section>');
fs.writeFileSync('index.html', html, 'utf-8');
console.log('Fixed closing tag!');
