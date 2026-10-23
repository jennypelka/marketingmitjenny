# Offene TODOs (Stand Phase 8, 22.10.2026)

## Inhalte und Medien (Jenny)

- [ ] Reels sind eingebaut. Offen: Untertitel (Videos laufen stumm) und optional Kunde je Reel für Bildunterschriften.
- [ ] Hero-Foto `hero-jennifer-pelka.jpg` (Stand-in: `ueber-uns-1.jpg`, `src/pages/index.astro`).
- [ ] Echte Fotos für „Über uns“ und „Kontakt“ (aktuell Ausschnitte von `ueber-uns-1.jpg`).
- [ ] Alt-Texte prüfen: Fotos und die vier Mockups (Entwürfe in `index.astro`, `ueber-uns.astro`, `kontakt.astro`). Kunde und Inhalt je Mockup.
- [ ] Freigabe der Kundenlogos durch die Kunden (`index.astro`).
- [ ] Einzugsgebiet für Local SEO (`src/lib/schema.ts`, `docs/keywords.md`).
- [ ] Helle Logo-Variante für dunklen Grund (`Footer.astro`) und ein echtes SVG-Logo (die gelieferte SVG bettet nur ein Pixelbild ein).
- [ ] Optional: Zahlen, Zitate und Kundenlogos mit Belegen für `count-up` oder Fallstudien.

## Recht und Datenschutz (Jenny, Max, Fachstelle)

- [ ] Datenschutzerklärung neu generieren (e-recht24, Grundlage `docs/datenschutz-inventar.md`), in `src/pages/datenschutz.astro` einsetzen, `noindex` in `src/lib/pages.ts` entfernen.
- [ ] Impressum: DSA-Verordnungsnummer im Generator korrigieren lassen (Text sagt 2022/265, richtig 2022/2065). Telefaxzeile wurde auf Anweisung von Max entfernt, im Generator ebenfalls entfernen.
- [ ] GitHub-DPA abschließen und USA-Übermittlung bewerten, oder EU-Hoster wählen.
- [ ] Mail-Anbieter, AVV und Speicherdauer von Anfragen nennen.
- [ ] Fachstelle: `mmj-theme` im localStorage als erforderlich bestätigen.

## Betrieb (Max)

- [ ] Pages-Quelle auf „GitHub Actions“ stellen, Branch nach `main` mergen (`.github/workflows/deploy.yml`). Dafür ist ein Pull Request nötig, den ich nur auf Wunsch erstelle.
- [ ] Domain umziehen (`docs/deploy.md`): DNS bei Strato, `public/CNAME` anlegen, „Enforce HTTPS“ aktivieren.
- [ ] Liste weiterer indexierter alter URLs aus der Search Console. Auf GitHub Pages sind keine 301-Weiterleitungen möglich, für wichtige alte URLs bräuchte es kleine Weiterleitungsseiten.
- [ ] Search Console und Bing Webmaster Tools einrichten, Google-Unternehmensprofil und Bing Places pflegen.
- [ ] Nach dem Livegang: JSON-LD im Schema.org-Validator und Rich-Results-Test prüfen, Lighthouse auf der echten Domain messen.
- [ ] Monatlich `docs/aeo-testprompts.md` abarbeiten.

- [ ] `/leistungen`: Entwurfstexte (Einleitung, „Das gehört dazu“, „Im Ablauf“, FAQ) von Jenny freigeben lassen, Quellen in `content/leistungen.md`. Preis-Orientierung ergänzen, sobald Jenny sie nennt.

## Beim Rendern der Seite entschieden, bitte bestätigen

- [ ] Nicht aus `content/`, sondern aus der Referenz übernommen: kleine Kategorie-Labels (Eyebrows) und der Text des CTA-Bands.
- [ ] Heading-Texte „Über Jenny“ und „Arbeitsweise“ stammen aus den Abschnittsnamen von `content/ueber-uns.md`.
- [ ] Title der Startseite bleibt wie auf der alten Seite (53 Zeichen).
- [ ] Antwort-zuerst-Absätze (AEO) und FAQ sind nicht umgesetzt, weil sie neuen Text bräuchten.
- [ ] Texte liegen in Seitendateien, Content Collections (Briefing §2) sind nicht gebaut.
