# marketingmitjenny.de

Static Astro site for Marketing mit Jenny. Briefing: `BRIEFING.md`, working rules: `CLAUDE.md`, content source: `content/`, design: `design-system/`.

## Commands

| Command | Action |
| --- | --- |
| `npm ci` | Install dependencies |
| `npm run dev` | Dev server (regenerates `src/styles/tokens.css` first) |
| `npm run build` | Generate tokens, build to `dist/`, run `scripts/check-build.mjs` |
| `npm run preview` | Serve `dist/` locally |

`src/styles/tokens.css` is generated from `design-system/tokens.json`. Do not edit it by hand.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the repo settings set Pages source to "GitHub Actions". See `docs/anleitung-live-gang.md` for preview and go-live (repository variables `SITE_URL`/`NOINDEX`; a `SITE_URL` with a path, e.g. the github.io project URL, makes `scripts/apply-base.mjs` prefix all URLs).

## Constraints from the hosting choice

GitHub Pages cannot send custom HTTP headers or 301 redirects. Security headers are set as `<meta>` tags (CSP, referrer); `frame-ancestors`, HSTS (enable "Enforce HTTPS" in Pages) and `Permissions-Policy` are not available.

## Content maintenance

Texts are not in a CMS. They live in the page files and shared modules:

| What | Where |
| --- | --- |
| Start page texts, Ablauf, Nutzen, clients | `src/pages/index.astro` |
| The five services (start page and /leistungen) | `src/lib/leistungen.ts` |
| Über uns, Referenzen, Kontakt, Impressum, Datenschutz | `src/pages/<page>.astro` |
| Title, description, last-modified date per page | `src/lib/pages.ts` (update `lastmod` when content changes) |
| Name, address, phone, e-mail, social links, navigation | `src/lib/site.ts` |
| Reels | drop `reel-1.mp4` to `reel-4.mp4` into `content/media/`, they are picked up automatically |
| Open Graph images | `node scripts/build-og.mjs` (needs `playwright`) |

The briefing proposed Markdown content collections so texts can be changed without code. That is not built yet and can be added on request. `content/*.md` stays the verbatim source of truth for texts.

## Docs

- `docs/datenschutz-inventar.md`: all third-party contacts and the network check
- `docs/cmp-entscheidung.md`: why no consent banner (yet)
- `docs/keywords.md`, `docs/aeo-testprompts.md`: SEO and AEO working notes
- `docs/deploy.md`: GitHub Pages and Strato DNS
