// Post-build checks (BRIEFING 4.6): fails on missing title/description, not exactly one h1,
// images without alt, and broken internal links. Title/description length only warns.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const pages = readdirSync(dist).filter((f) => f.endsWith('.html'));
const errors = [];
const warnings = [];

const exists = (urlPath) => {
  const p = urlPath.replace(/^\//, '').replace(/\/$/, '');
  if (p === '') return existsSync(join(dist, 'index.html'));
  return [p, `${p}.html`, join(p, 'index.html')].some((c) => existsSync(join(dist, c)) && statSync(join(dist, c)).isFile());
};

for (const file of pages) {
  const html = readFileSync(join(dist, file), 'utf8');
  const tag = (re) => [...html.matchAll(re)];
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
  if (!title) errors.push(`${file}: missing <title>`);
  else if (title.length > 60) warnings.push(`${file}: title ${title.length} chars (max 60)`);
  if (!desc) errors.push(`${file}: missing meta description`);
  else if (desc.length < 120 || desc.length > 155) warnings.push(`${file}: description ${desc.length} chars (120-155)`);
  if (!/<link rel="canonical" href="https:\/\/marketingmitjenny\.de[^"]*"/.test(html)) errors.push(`${file}: missing canonical`);
  for (const prop of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale']) {
    if (!html.includes(`property="${prop}"`)) errors.push(`${file}: missing ${prop}`);
  }
  if (!html.includes('name="twitter:card"')) errors.push(`${file}: missing twitter:card`);
  const ld = html.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/)?.[1];
  if (!ld) errors.push(`${file}: missing JSON-LD`);
  else {
    try {
      JSON.parse(ld);
    } catch {
      errors.push(`${file}: JSON-LD is not valid JSON`);
    }
  }
  const h1 = tag(/<h1[\s>]/g).length;
  if (h1 !== 1) errors.push(`${file}: ${h1} <h1> elements`);
  for (const [img] of tag(/<img\b[^>]*>/g)) if (!/\balt(=|\s|>|\/)/.test(img)) errors.push(`${file}: <img> without alt`);
  for (const [, href] of tag(/<a\b[^>]*\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const [pathOnly] = href.split('#');
    if (pathOnly && !exists(pathOnly)) errors.push(`${file}: broken internal link ${href}`);
  }
}

warnings.forEach((w) => console.warn('warn  ', w));
if (errors.length) {
  errors.forEach((e) => console.error('error ', e));
  process.exit(1);
}
console.log(`check-build: ${pages.length} pages ok`);
