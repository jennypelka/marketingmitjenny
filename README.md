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

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the repo settings set Pages source to "GitHub Actions". See `docs/deploy.md` for domain setup at Strato.

## Constraints from the hosting choice

GitHub Pages cannot send custom HTTP headers or 301 redirects. Security headers are set as `<meta>` tags (CSP, referrer); `frame-ancestors`, HSTS (enable "Enforce HTTPS" in Pages) and `Permissions-Policy` are not available.

## Docs

- `docs/datenschutz-inventar.md`: all third-party contacts and the network check
- `docs/cmp-entscheidung.md`: why no consent banner (yet)
- `docs/keywords.md`, `docs/aeo-testprompts.md`: SEO and AEO working notes
- `docs/deploy.md`: GitHub Pages and Strato DNS
