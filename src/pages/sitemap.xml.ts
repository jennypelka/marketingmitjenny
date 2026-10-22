import { pages } from '../lib/pages';
import { site } from '../lib/site';

// Indexable pages only, with lastmod from the page registry.
export function GET() {
  const urls = Object.values(pages)
    .filter((p) => !('noindex' in p && p.noindex))
    .map((p) => {
      const loc = p.path === '/' ? `${site.url}/` : `${site.url}${p.path}`;
      return `  <url><loc>${loc}</loc><lastmod>${p.lastmod}</lastmod></url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
