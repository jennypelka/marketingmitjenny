import { defineConfig } from 'astro/config';

// GitHub Pages serves /ueber-uns from ueber-uns.html without a trailing slash.
export default defineConfig({
  site: 'https://marketingmitjenny.de',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  // Keep page scripts external so the meta CSP needs no 'unsafe-inline' for scripts.
  vite: { build: { assetsInlineLimit: 0 } },
});
