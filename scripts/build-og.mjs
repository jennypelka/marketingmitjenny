// Generates public/og/*.png (1200x630, Cover style from the design system) with Playwright.
// Not part of the CI build: run manually after changing titles (`node scripts/build-og.mjs`, needs playwright).
import { chromium } from 'playwright';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const tokens = JSON.parse(readFileSync('design-system/tokens.json', 'utf8'));
const c = Object.fromEntries(tokens.color.tokens.filter((t) => typeof t.value === 'string').map((t) => [t.name, t.value]));
const font = (f) => pathToFileURL(resolve('public/fonts', f)).href;
const logo = pathToFileURL(resolve('public/logo.png')).href;
const tagline = 'Strategisches Social-Media-Marketing für lokale Unternehmen';

const cards = [
  ['start', 'Marketing mit Jenny'],
  ['leistungen', 'Was wir machen'],
  ['ueber-uns', 'Social-Media-Agentur aus Geretsried'],
  ['referenzen', 'Referenzen'],
  ['kontakt', 'Kontakt aufnehmen'],
];

const html = (title) => `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(${font('bricolage-grotesque-latin-wght-normal.woff2')});font-weight:200 800}
@font-face{font-family:I;src:url(${font('inter-latin-wght-normal.woff2')});font-weight:100 900}
html,body{margin:0}body{width:1200px;height:630px;background:${c.white};position:relative;overflow:hidden;font-family:I}
svg{position:absolute;left:0;top:0}
.t{position:absolute;left:64px;bottom:150px;right:64px}
h1{margin:0;font:700 88px/0.98 B;letter-spacing:-0.035em;color:${c['ink-900']};text-wrap:balance}
p{margin:20px 0 0;font:400 28px/1.35 I;color:${c['ink-500']}}
img{position:absolute;right:64px;bottom:48px;height:96px}
.u{position:absolute;left:64px;bottom:56px;font:600 24px I;color:${c['purple-700']}}
</style>
<svg width="1200" height="130" viewBox="0 0 960 104" preserveAspectRatio="none"><path fill="${c['purple-600']}" d="M0 104V96A96 96 0 0 1 96 0H232V104Z"/><circle fill="${c['peach-300']}" cx="292" cy="52" r="52"/><rect fill="${c['purple-100']}" x="352" width="200" height="104" rx="52"/><rect fill="${c['ink-900']}" x="560" width="120" height="104" rx="20"/><path fill="${c['purple-650']}" d="M688 104A104 104 0 0 1 792 0V104Z"/><circle fill="${c['purple-300']}" cx="852" cy="52" r="52"/><rect fill="${c['purple-600']}" x="912" width="48" height="104"/></svg>
<div class="t"><h1>${title}</h1><p>${tagline}</p></div>
<div class="u">marketingmitjenny.de</div><img src="${logo}" alt="">`;

mkdirSync('public/og', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [slug, title] of cards) {
  // file:// page so the local fonts and logo can load (setContent runs on about:blank)
  const tmp = join(tmpdir(), `og-${slug}.html`);
  writeFileSync(tmp, html(title));
  await page.goto(pathToFileURL(tmp).href);
  await page.evaluate(() => document.fonts.ready);
  writeFileSync(`public/og/${slug}.png`, await page.screenshot({ type: 'png' }));
  console.log('og', slug);
}
await browser.close();
