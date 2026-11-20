const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.resolve(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('out directory does not exist! Run npm run build first.');
  process.exit(1);
}

// 1. Rename *.html.html to *.html
const files = fs.readdirSync(outDir);
files.forEach(file => {
  if (file.endsWith('.html.html')) {
    const correctName = file.replace(/\.html\.html$/, '.html');
    const oldPath = path.join(outDir, file);
    const newPath = path.join(outDir, correctName);

    if (file === 'index.html.html') {
      fs.unlinkSync(oldPath);
      console.log('Removed duplicate index.html.html');
    } else {
      if (fs.existsSync(newPath)) {
        fs.unlinkSync(newPath);
      }
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${correctName}`);
    }
  }
});

// 2. Add .htaccess
const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirect HTTP to HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Clean URLs: map /services to /services.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # Error documents
  ErrorDocument 404 /404.html
</IfModule>

# Cache-Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;

fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent, 'utf8');
console.log('Generated .htaccess');

// 3. Create deploy_public_html.zip if on Windows or zip available
try {
  const zipPath = path.resolve(__dirname, '..', 'deploy_public_html.zip');
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }
  if (process.platform === 'win32') {
    execSync(`powershell.exe -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force"`);
    console.log(`Created deploy_public_html.zip successfully at: ${zipPath}`);
  } else {
    execSync(`cd "${outDir}" && zip -r "${zipPath}" ./*`);
    console.log(`Created deploy_public_html.zip at: ${zipPath}`);
  }
} catch (err) {
  console.warn('Could not auto-create zip file:', err.message);
}
