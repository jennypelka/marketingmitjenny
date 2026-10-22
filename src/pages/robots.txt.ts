import { site } from '../lib/site';

// AI crawlers are allowed on purpose (decision Max, Oct 2026). To block training crawlers later, switch their
// rule to "Disallow: /". /datenschutz and /404 are noindex via meta tag and must stay crawlable so the tag is seen.
// Preview builds (PUBLIC_NOINDEX=true) block everything.
const allowed = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot', 'GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot'];

export function GET() {
  const preview = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = preview
    ? 'User-agent: *\nDisallow: /\n'
    : [
        'User-agent: *\nAllow: /',
        ...allowed.map((bot) => `User-agent: ${bot}\nAllow: /`),
        `Sitemap: ${site.url}/sitemap.xml`,
      ].join('\n\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
