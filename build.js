const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// 1. Read global assets
const styleCss = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf-8');
const appJs = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf-8');

// Read all data js files
const dataFiles = fs.readdirSync(path.join(rootDir, 'data')).filter(f => f.endsWith('.js'));
let dataJsContent = '';
for (const file of dataFiles) {
    dataJsContent += fs.readFileSync(path.join(rootDir, 'data', file), 'utf-8') + '\n';
}

// 2. Read all HTML files
function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && file !== 'index.html') {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = getAllHtmlFiles(rootDir);

// 3. Build the SPA HTML
let spaHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Family Rules</title>
    <style>
${styleCss}
    </style>
    <script>
// Mock environment for dynamic script loading
window.__isSPA = true;
// Inline DATA JS
${dataJsContent}
// Inline APP JS
${appJs}

// Override loadJSON to return pre-loaded data instead of injecting scripts
const originalLoadJSON = window.loadJSON;
window.loadJSON = async function(url) {
    const match = url.match(/data\\/(.+)\\.json$/);
    if (match) {
        const varName = 'DATA_' + match[1];
        if (window[varName]) return window[varName];
    }
    return null;
};
    </script>
</head>
<body>
    <div id="app-root"></div>
    <script>
        const vfs = {};
`;

// 4. Process all HTML files
const allHtmlFiles = ['index.html', ...htmlFiles];
for (const file of allHtmlFiles) {
    const isIndex = file === 'index.html';
    const relativePath = isIndex ? 'index.html' : path.relative(rootDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(isIndex ? path.join(rootDir, 'index.html') : file, 'utf-8');
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : '';
    
    // Strip app.js script tags
    body = body.replace(/<script src="[^"]*app\.js"><\/script>/g, '');
    
    // Escape for template string
    body = body.replace(/`/g, '\\`').replace(/\\$/g, '\\\\$');
    
    spaHtml += `        vfs["${relativePath}"] = \`${body}\`;\n`;
}

// 5. Inject SPA Router
spaHtml += `
        let currentPath = "index.html";
        window.__mockQuery = '';
        
        // Override getQueryParam
        window.getQueryParam = function(name) {
            const params = new URLSearchParams(window.__mockQuery);
            return params.get(name);
        };

        function resolvePath(base, href) {
            if (href.startsWith('/')) return href.substring(1);
            const baseParts = base.split('/').filter(Boolean);
            baseParts.pop(); // remove file name
            const hrefParts = href.split('/').filter(Boolean);
            for (const part of hrefParts) {
                if (part === '.') continue;
                if (part === '..') baseParts.pop();
                else baseParts.push(part);
            }
            return baseParts.join('/');
        }

        function renderPage(targetPath) {
            if (!vfs[targetPath]) {
                console.error("Page not found:", targetPath);
                return;
            }
            
            document.getElementById('app-root').innerHTML = vfs[targetPath];
            currentPath = targetPath;
            window.scrollTo(0, 0);

            // Execute scripts in the target page
            const scripts = document.getElementById('app-root').querySelectorAll('script');
            scripts.forEach(script => {
                let code = script.textContent;
                if (code) {
                    // Replace DOMContentLoaded wrapper with IIFE
                    code = code.replace(/document\\.addEventListener\\s*\\(\\s*['"\`]DOMContentLoaded['"\`]\\s*,\\s*async\\s*\\(\\s*\\)\\s*=>\\s*\\{([\\s\\S]*)\\}\\s*\\)\\s*;/g, '(async () => {$1})();');
                    code = code.replace(/document\\.addEventListener\\s*\\(\\s*['"\`]DOMContentLoaded['"\`]\\s*,\\s*\\(\\s*\\)\\s*=>\\s*\\{([\\s\\S]*)\\}\\s*\\)\\s*;/g, '(() => {$1})();');
                    
                    try {
                        const newScript = document.createElement('script');
                        newScript.textContent = code;
                        document.body.appendChild(newScript);
                    } catch(e) {
                        console.error("Error executing script for " + targetPath, e);
                    }
                }
            });
            
            // Hack for app.js global back-btn setup
            const backBtn = document.getElementById('back-btn');
            if (backBtn && backBtn.getAttribute('href') === 'javascript:history.back()') {
                backBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    renderPage('index.html'); // fallback
                });
            }
        }

        document.addEventListener('click', (e) => {
            const a = e.target.closest('a');
            if (a && a.getAttribute('href') && !a.getAttribute('href').startsWith('http') && !a.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                let href = a.getAttribute('href');
                
                // Handle special app.js history.back() case
                if (href === 'javascript:history.back()') {
                    renderPage('index.html');
                    return;
                }

                let targetPath = href.split('?')[0];
                let query = href.split('?')[1] || '';
                window.__mockQuery = query;

                targetPath = resolvePath(currentPath, targetPath);
                renderPage(targetPath);
            }
        });

        // Initial render for index.html
        renderPage('index.html');
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'FamilyRules_Distribution.html'), spaHtml);
console.log('Build successful: dist/FamilyRules_Distribution.html');
