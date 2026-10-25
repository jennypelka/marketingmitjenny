# Übergabe: Betrieb der Seite durch eine andere Claude-Code-Instanz

Stand 25.10.2026. Diese Datei zuerst lesen, danach `CLAUDE.md`, `README.md`, `docs/deploy.md`, `docs/offene-todos.md`.

## Projekt in drei Sätzen

Statische Astro-Seite (Astro 6, Node 22) für „Marketing mit Jenny“ (Jennifer Pelka, Social-Media-Agentur, Geretsried). Hosting: GitHub Pages (Actions-Workflow), Domain bei Strato, DNS-Zone bei Microsoft 365. Der Auftraggeber ist Max (Deutsch, Sie-Form nur auf der Seite, im Chat duzen), Inhaberin ist Jenny.

## Arbeitsweise

- Entwicklungsbranch: `claude/upbeat-bohr-y8ixoz` (oder der Branch der Session). Nach einem Merge neu von `main` abzweigen (`git fetch origin main && git checkout -B <branch> origin/main`), nie auf bereits gemergte Historie stapeln.
- Pull Requests nach `main` über die GitHub-MCP-Tools. Max lässt PRs oft direkt mergen („mergen“). PR-Texte Deutsch, Code und Commits Englisch.
- Jeder Push auf `main` deployt automatisch (1 bis 3 Minuten).
- Vor jedem Push: `npm run build` (führt `scripts/check-build.mjs` aus: Title, Description, Canonical, OG, JSON-LD, h1, Alt-Texte, interne Links).
- Texte nur aus `content/*.md` oder von Jenny/Max. Keine erfundenen Fakten, Preise oder Zahlen. Rechtstexte nie selbst schreiben.
- Keine Drittdomains, keine Cookies, keine Tracker (Datenschutz-Konzept hängt daran, `docs/datenschutz-inventar.md`).
- Max kann lokal nichts ausführen. Alles muss über GitHub im Browser steuerbar sein.

## Stand der Seite

Seiten: `/`, `/leistungen`, `/ueber-uns`, `/referenzen`, `/kontakt`, `/impressum`, `/datenschutz`, 404. Keine weiteren Seiten ohne Auftrag.

Zuletzt umgesetzt (Jennys Feedback vom 25.10.2026):
- Neues Hero-Foto `content/media/jenny-hero.jpg`.
- Leistungs-Kacheln: alle pfirsichfarben (`accent`) mit lila Icon, Überschrift oben ausgerichtet (`src/styles/site.css`, Ende der Datei).
- `/ueber-uns`: Abschnitt „Arbeitsweise“ ersetzt durch „Über Leonie“ (Videografin, Foto `content/media/leonie.jpg`). Eine eigene Team-Seite gibt es bewusst nicht.
- Kundenband: Posthotel Kolberbräu (verlinkt auf `https://www.kolberbraeu.de/`, URL per Websuche übernommen, bestätigen lassen) und Landgasthaus zum Altwirt Reichersbeuern (**nicht verlinken**, deren Seite war gehackt). Logos in `src/assets/clients/`.
- Kundenstimme Altwirt ist eingebaut, aber ausgeblendet (`altwirtApproved = false` in `src/pages/referenzen.astro`), bis der Kunde sie freigibt.
- Impressum, Datenschutz-Kopf, Footer, Kontakt: „marketingmitjenny - Social Media Agentur“, im Impressum „Jennifer Laetitia Pelka“.
- Reel 1 (Frühstücksbuffet) und Reel 2 sind neu. Reels 3 und 4 sind noch die alten.
- Verlinkte Logos im Band sind klickbar: `src/scripts/marquee.ts` startet Pointer-Capture erst nach 5 px Ziehen (sonst gehen Klicks verloren).

## Hosting und DNS (nicht verwechseln)

Details in `docs/deploy.md`. Kurzfassung:
- DNS der `marketingmitjenny.de` liegt bei Microsoft 365 (Nameserver `ns1`–`ns4.bdm.microsoftonline.com`, bei Strato eingetragen). Website-Einträge dort setzen, **Nameserver nie ändern**, Mail-Einträge (MX, SPF-TXT, autodiscover, DKIM, `_dmarc`) nie anfassen.
- `marketingmitjenny.com` hat Strato-DNS und war zeitweise die GitHub-Testadresse. GitHub Pages kennt nur eine Custom Domain.
- Steuerung des Builds über die Repository-Variablen `SITE_URL` und `NOINDEX`. Falsche `SITE_URL` zeigt sich als Seite ohne CSS.
- Keine 301-Weiterleitungen und keine `.htaccess` möglich (GitHub Pages). Alte Webflow-URLs nur über Weiterleitungsseiten lösbar. Die Liste der alten URLs fehlt noch (Search Console).

## Offene Punkte mit Priorität

1. **Datenschutzerklärung ist übergangsweise der ALTE Text** (`src/pages/datenschutz.astro`, wörtlich von Max geliefert, e-recht24, Entscheidung Max 25.10.2026, Seite ist indexierbar). Er passt nicht zur Seite: nennt Strato als Hoster (tatsächlich GitHub Pages, USA), erwähnt Kontaktformular und Cookie-Einwilligung, nennt nicht Instagram/LinkedIn-Links und `mmj-theme` im Browserspeicher. Nur der Block „Hinweis zur verantwortlichen Stelle“ nennt den aktuellen Namen aus dem Impressum. Der Text muss durch eine neu bei e-recht24 generierte Erklärung ersetzt werden (Grundlage `docs/datenschutz-inventar.md`). Wortlaut nicht von Hand ändern, `lastmod` in `src/lib/pages.ts` setzen. Das ist der dringendste Punkt.
2. Erledigt (Max, 25.10.2026): `SITE_URL` = `https://marketingmitjenny.de`, `NOINDEX` ist gelöscht, die Seite ist für Google offen. Nur die Datenschutzseite trägt noch `noindex` (Platzhalter).
3. Reels 3 und 4 ersetzen, sobald Max neue Videos schickt.
4. Leonies Nachname fehlt (dann Person-Markup in `src/lib/schema.ts` möglich). Foto- und Textfreigabe liegt laut Max vor.
5. Altwirt-Kundenstimme erst nach Kundenfreigabe einblenden.
6. Impressum: DSA-Verordnungsnummer im Generator prüfen (Text sagt 2022/265, richtig 2022/2065).
7. Search Console und Bing Webmaster Tools, Google-Unternehmensprofil, Liste alter URLs.
8. `public/llms.txt` und die Vorschaubilder (`scripts/build-og.mjs`) nennen die Domain `marketingmitjenny.de` fest. Bei Domainwechsel anpassen.

Die vollständige Liste steht in `docs/offene-todos.md`.

## Reels neu einsetzen

Max liefert iOS-Bildschirmaufnahmen (1080x1920, mit Handy-Rahmen auf weißem Grund, mit Ton). Der Rahmen liegt bei 608x1080 etwa bei x 66–541, der Innenbildschirm bei x 92–517, y 80–1001. Rezept (ffmpeg), ersetzt `reel-N.mp4`:

```
ffmpeg -i INPUT.mp4 -an -vf "scale=608:1080,crop=417:880:96:114,fps=30" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart content/media/reel-N.mp4
ffmpeg -ss 3 -i content/media/reel-N.mp4 -frames:v 1 -q:v 3 content/media/reel-N-poster.jpg
```

Poster ansehen und den Zuschnitt prüfen: Kein schwarzer Streifen oben (Dynamic Island der Aufnahme), kein weißer Rand. Ziel unter 5 MB pro Reel, ohne Ton (die Reels laufen stumm). Der iPhone-Rahmen (`src/assets/iphone-frame.png`) liegt im Player über dem Video. Das Karussell steuert `src/scripts/reels.ts`.

## Hinweise für Tests

- Das mitgelieferte Chromium spielt kein H.264. Videos erzeugen Fehler, das Karussell springt dann weiter. Das ist kein Bug der Seite. Für Screenshots reichen Poster.
- Scroll-Animationen blenden Inhalte erst beim Scrollen ein. Für Vollbild-Screenshots `reducedMotion: 'reduce'` setzen.
- Tests und Screenshots mit Playwright laufen mit `/opt/node22/lib/node_modules/playwright/index.mjs` und `npm run preview`.
- Playwright und Browser nicht neu installieren.

## Gestaltung

- Design-System ist verbindlich (`design-system/README.md`, Bricolage Grotesque + Inter, Violett/Pfirsich). `src/styles/tokens.css` ist generiert und wird nicht von Hand bearbeitet.
- Max hat zuletzt Entwürfe für eine „luxuriösere“ Optik verlangt (Richtung „Pearl & Violet“, hell). Es gibt drei Startseiten-Entwürfe (Drehtag, Boutique, Collage) als Claude-Artifact, eine Entscheidung steht aus. Umgesetzt ist davon noch nichts. Nicht ohne Auftrag am Design arbeiten.
