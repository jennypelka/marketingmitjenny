# Deploy: GitHub Pages, Domain bei Strato, DNS bei Microsoft 365

Stand 25.10.2026. Technische Referenz. Schrittfolge für Menschen: `docs/anleitung-live-gang.md`.

## Wie deployt wird

- `.github/workflows/deploy.yml` baut bei jedem Push auf `main` (und bei PRs nur zum Testen) und veröffentlicht über GitHub Pages. Repo-Einstellung: Settings, Pages, Source = **GitHub Actions**.
- Gesteuert wird der Build über zwei Repository-Variablen (Settings, Secrets and variables, Actions, Variables):
  - `SITE_URL`: öffentliche Adresse ohne Schrägstrich am Ende, z. B. `https://marketingmitjenny.de`. Mit Pfad (github.io-Projekt-URL) schreibt `scripts/apply-base.mjs` alle Pfade um. Nicht gesetzt = Standard `https://marketingmitjenny.de`.
  - `NOINDEX`: `true` sperrt die Seite für Suchmaschinen (robots.txt `Disallow: /` und `noindex`). Für die Live-Seite muss die Variable **gelöscht** sein.
- Eine Datei `public/CNAME` ist nicht nötig, die Custom Domain steht in den Pages-Einstellungen.
- GitHub Pages erlaubt **genau eine** Custom Domain. Die zweite Domain liefert dort einen GitHub-404.

## Domains und DNS (wichtig)

- Registrar ist Strato. Für `marketingmitjenny.de` sind in Strato **eigene Nameserver** eingetragen: `ns1`–`ns4.bdm.microsoftonline.com`. Die DNS-Zone der `.de` liegt deshalb bei **Microsoft 365** (admin.microsoft.com, Einstellungen, Domänen, `marketingmitjenny.de`, DNS-Einträge). Einträge bei Strato sind für die `.de` wirkungslos und werden dort gesperrt.
- Die Nameserver der `.de` **nicht** auf Strato zurückstellen: Die E-Mail (`info@marketingmitjenny.de`) läuft über Microsoft 365 und hängt an diesen Einträgen der Zone:
  - MX `@` → `marketingmitjenny-de.mail.protection.outlook.com`, Priorität 0
  - TXT `@` → `v=spf1 include:spf.protection.outlook.com -all`
  - CNAME `autodiscover` → `autodiscover.outlook.com`
  - Nie ändern oder löschen: MX, TXT, `autodiscover`, DKIM (`selector1/2._domainkey`, falls vorhanden), `_dmarc`.
- Website-Einträge der `.de` (bei Microsoft): A `@` → `185.199.108.153` (optional zusätzlich `.109.153`, `.110.153`, `.111.153`), CNAME `www` → `jennypelka.github.io`, keine AAAA-Einträge. Ein CAA-Eintrag muss `letsencrypt.org` erlauben, sonst gibt es kein HTTPS.
- `marketingmitjenny.com` hat Strato-Nameserver (frei bearbeitbar). Sie war eine zweite Webflow-Domain und diente als Test für den GitHub-Livegang. Prüfe vor Änderungen, welche der beiden Domains gerade bei GitHub eingetragen ist.
- Die alte Webflow-Seite (A-Record `198.202.211.1`) wird mit dem Umstellen der A-Records abgelöst. Webflow selbst schreibt keine DNS-Einträge.

## Grenzen von GitHub Pages

Keine serverseitigen 301-Weiterleitungen, keine eigenen HTTP-Header, keine `.htaccess`. Sicherheitsheader laufen als `<meta>` (CSP, Referrer). Für alte URLs sind nur kleine Weiterleitungsseiten (`<meta http-equiv="refresh">` plus Canonical) möglich.
