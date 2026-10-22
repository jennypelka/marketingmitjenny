// Preview helper: when PUBLIC_SITE_URL has a path (e.g. https://user.github.io/repo), prefix every root-relative
// URL in dist/ with that path so the site also works below a sub-path. Live builds (no path) are left untouched.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const siteUrl = process.env.PUBLIC_SITE_URL || '';
const base = siteUrl ? new URL(siteUrl).pathname.replace(/\/$/, '') : '';
if (!base) {
  console.log('apply-base: no base path, nothing to do');
  process.exit(0);
}

const prefix = (u) => (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(`${base}/`) && u !== base ? base + u : u);
const prefixSrcset = (v) => v.split(',').map((part) => { const t = part.trim(); const i = t.search(/\s/); return i === -1 ? prefix(t) : prefix(t.slice(0, i)) + t.slice(i); }).join(', ');

function rewrite(file, text) {
  const ext = extname(file);
  if (ext === '.html') {
    return text
      .replace(/\b(href|src|poster|action)="([^"]*)"/g, (_, a, v) => `${a}="${prefix(v)}"`)
      .replace(/\b(srcset|imagesrcset)="([^"]*)"/g, (_, a, v) => `${a}="${prefixSrcset(v)}"`);
  }
  if (ext === '.css') return text.replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${prefix(u)}${q})`);
  if (ext === '.webmanifest') return text.replace(/"(src|start_url)":\s*"(\/[^"]*)"/g, (_, k, u) => `"${k}": "${prefix(u)}"`);
  return text;
}

let changed = 0;
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (['.html', '.css', '.webmanifest'].includes(extname(p))) {
      const before = readFileSync(p, 'utf8');
      const after = rewrite(p, before);
      if (after !== before) { writeFileSync(p, after); changed++; }
    }
  }
})('dist');
console.log(`apply-base: prefixed ${changed} files with ${base}`);
