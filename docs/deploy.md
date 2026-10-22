# Deploy: GitHub Pages with a Strato domain

1. Repo settings, Pages: source "GitHub Actions". Merge to `main` to deploy.
2. Add `public/CNAME` containing `marketingmitjenny.de` only when the domain is switched (TODO: Max decides the date). Until then the site is served at the `github.io` URL.
3. At Strato, DNS: set the apex `A` records to GitHub Pages IPs (185.199.108.153, .109.153, .110.153, .111.153) and `www` as `CNAME` to `<user>.github.io`. Check the current IPs in the GitHub Pages docs before switching.
4. In repo settings enable "Enforce HTTPS" once the certificate is issued.
5. Strato web hosting for the old Webflow/Strato site must not be removed before DNS has switched.

Limits: no server-side redirects and no custom headers (see README).
