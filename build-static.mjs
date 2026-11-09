import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

await build({
  configFile: false,
  root: path.resolve('.'),
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve('.'),
    },
  },
  build: {
    outDir: 'site-estatico',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  logLevel: 'info',
});

// --- Pós-processamento: separar CSS do JS e remover dependência de módulos ES ---
const outDir = path.resolve('site-estatico');
const htmlPath = path.join(outDir, 'index.html');
const jsPath = path.join(outDir, 'assets', 'app.js');
const cssPath = path.join(outDir, 'assets', 'app.css');

let js = fs.readFileSync(jsPath, 'utf8');
const styleRe = /var ([A-Za-z_$][\w$]*)=document\.createElement\("style"\);[\w$]+\.textContent=`([\s\S]*?)`[,;]document\.head\.appendChild\([\w$]+\);/;
const match = js.match(styleRe);

if (match) {
  const varName = match[1];
  // Desfaz os escapes do template literal do bundle (\\ -> \, \` -> `, \${ -> ${)
  let css = match[2]
    .replace(/\\\\/g, '\\')
    .replace(/\\`/g, '`')
    .replace(/\\\$\{/g, '${');
  const rest = js.slice(match.index + match[0].length);
  const usedLater = new RegExp('\\b' + varName + '\\b').test(rest);
  if (!usedLater) {
    fs.writeFileSync(cssPath, css, 'utf8');
    js = js.slice(0, match.index) + js.slice(match.index + match[0].length);
    fs.writeFileSync(jsPath, js, 'utf8');
    console.log('CSS extraído para assets/app.css');
  } else {
    console.log('Aviso: CSS mantido embutido (variável reutilizada depois).');
  }
} else {
  console.log('Aviso: CSS não encontrado no bundle; mantendo embutido.');
}

let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(
  /<script type="module" crossorigin src="\.\/assets\/app\.js"><\/script>/,
  '<link rel="stylesheet" href="./assets/app.css">\n    <script defer src="./assets/app.js"></script>'
);
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('HTML ajustado para CSS externo e script clássico.');

// --- Gera também um arquivo único (HTML + CSS + JS + imagens embutidos) ---
const css = fs.readFileSync(cssPath, 'utf8');
let singleJs = fs.readFileSync(jsPath, 'utf8');
const assetDir = path.join(outDir, 'assets');
const mimeByExt = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
};

let inlined = 0;
singleJs = singleJs.replace(
  /new URL\("([^"]+)",document\.currentScript[\s\S]*?document\.baseURI\)\.href/g,
  (full, filename) => {
    const filePath = path.join(assetDir, filename);
    if (!fs.existsSync(filePath)) return full;
    const mime = mimeByExt[path.extname(filename).toLowerCase()] || 'application/octet-stream';
    const base64 = fs.readFileSync(filePath).toString('base64');
    inlined++;
    return JSON.stringify(`data:${mime};base64,${base64}`);
  }
);

const safeJs = singleJs.replace(/<\/script/gi, '<\\/script');
const safeCss = css.replace(/<\/style/gi, '<\\/style');
const singleHtml = html
  .replace(
    /<link rel="stylesheet" href="\.\/assets\/app\.css">/,
    () => `<style>\n${safeCss}\n</style>`
  )
  .replace(/<script defer src="\.\/assets\/app\.js"><\/script>/, () => '')
  .replace('</body>', () => `<script>\n${safeJs}\n</script>\n  </body>`);

fs.writeFileSync(path.resolve('Devolweb.html'), singleHtml, 'utf8');
console.log(`Arquivo único gerado: Devolweb.html (${inlined} imagens embutidas)`);
