# Offene TODOs (Stand 25.10.2026)

Übergabe-Hinweise und Prioritäten: `docs/uebergabe.md`.

## Inhalte und Medien (Jenny)

- [ ] Reels sind eingebaut. Offen: Untertitel (Videos laufen stumm) und optional Kunde je Reel für Bildunterschriften.
- [x] Hero-Foto ist `jenny-hero.jpg` (25.10.2026).
- [ ] Echte Fotos für „Über uns“ und „Kontakt“ (aktuell Ausschnitte von `ueber-uns-1.jpg`).
- [ ] Alt-Texte prüfen: Fotos und die vier Mockups (Entwürfe in `index.astro`, `ueber-uns.astro`, `kontakt.astro`). Kunde und Inhalt je Mockup.
- [x] Kundenlogos von Max freigegeben (25.10.2026).
- [ ] Einzugsgebiet für Local SEO (`src/lib/schema.ts`, `docs/keywords.md`).
- [ ] Helle Logo-Variante für dunklen Grund (`Footer.astro`) und ein echtes SVG-Logo (die gelieferte SVG bettet nur ein Pixelbild ein).
- [ ] Optional: Zahlen, Zitate und Kundenlogos mit Belegen für `count-up` oder Fallstudien.

## Recht und Datenschutz (Jenny, Max, Fachstelle)

- [ ] **Dringend:** Übergangsweise steht der ALTE Datenschutztext auf der Seite (Max, 25.10.2026; nennt Strato als Hoster, Kontaktformular, Cookie-Einwilligung). Neu generieren (e-recht24, Grundlage `docs/datenschutz-inventar.md`) und in `src/pages/datenschutz.astro` ersetzen.
- [ ] Impressum: DSA-Verordnungsnummer im Generator korrigieren lassen (Text sagt 2022/265, richtig 2022/2065). Telefaxzeile wurde auf Anweisung von Max entfernt, im Generator ebenfalls entfernen.
- [ ] GitHub-DPA abschließen und USA-Übermittlung bewerten, oder EU-Hoster wählen.
- [ ] Mail-Anbieter, AVV und Speicherdauer von Anfragen nennen.
- [ ] Fachstelle: `mmj-theme` im localStorage als erforderlich bestätigen.

## Betrieb (Max)

- [x] Pages-Quelle „GitHub Actions“, Deploy aus `main` läuft. Seite läuft nach Angabe von Max auf der eigenen Domain (25.10.2026).
- [x] `SITE_URL` = `https://marketingmitjenny.de`, `NOINDEX` gelöscht, Seite für Google offen (Max, 25.10.2026).
- [ ] DNS der `.de` liegt bei Microsoft 365, Nameserver nie ändern (`docs/deploy.md`). Webflow-Seite abschalten, wenn nicht mehr gebraucht.
- [ ] Liste weiterer indexierter alter URLs aus der Search Console. Auf GitHub Pages sind keine 301-Weiterleitungen möglich, für wichtige alte URLs bräuchte es kleine Weiterleitungsseiten.
- [ ] Search Console und Bing Webmaster Tools einrichten, Google-Unternehmensprofil und Bing Places pflegen.
- [ ] Nach dem Livegang: JSON-LD im Schema.org-Validator und Rich-Results-Test prüfen, Lighthouse auf der echten Domain messen.
- [ ] Monatlich `docs/aeo-testprompts.md` abarbeiten.

- [ ] `/leistungen`: Entwurfstexte (Einleitung, „Das gehört dazu“, „Im Ablauf“, FAQ) von Jenny freigeben lassen, Quellen in `content/leistungen.md`. Preis-Orientierung ergänzen, sobald Jenny sie nennt.

## Beim Rendern der Seite entschieden, bitte bestätigen

- [ ] Nicht aus `content/`, sondern aus der Referenz übernommen: kleine Kategorie-Labels (Eyebrows) und der Text des CTA-Bands.
- [ ] Heading-Texte „Über Jenny“ und „Über Leonie“ stammen aus den Abschnittsnamen von `content/ueber-uns.md`.
- [ ] Title der Startseite bleibt wie auf der alten Seite (53 Zeichen).
- [ ] Antwort-zuerst-Absätze (AEO) und FAQ sind nicht umgesetzt, weil sie neuen Text bräuchten.
- [ ] Texte liegen in Seitendateien, Content Collections (Briefing §2) sind nicht gebaut.

## Feedback vom 25.10.2026 (Jenny)

- [ ] Reels: Reel 1 und 2 sind durch die neuen Reels ersetzt (25.10.2026). Reels 3-4 warten noch auf die neuen Videos, bitte als Datei hochladen.
- [ ] Kundenstimme Altwirt Reichersbeuern ist ausgeblendet (`altwirtApproved = false` in `src/pages/referenzen.astro`), bis der Kunde sie freigibt.
- [x] Bilder und Logos (Leonie, Jenny, Kolberbräu, Altwirt) freigegeben (Max, 25.10.2026).
- [ ] Altwirt-Logo nicht verlinkt (Seite derzeit gehackt). Später prüfen, ob eine Verlinkung möglich ist.
- [ ] Kolberbräu verlinkt auf https://www.kolberbraeu.de/ (aus Websuche übernommen), bitte bestätigen.
- [ ] Leonie: Nachname fehlt (dann auch Person-Markup möglich).
- [x] Abschnitt „Arbeitsweise“ ersetzt durch „Über Leonie“.
- [ ] Impressum: DSA-Nummer 2022/265 weiterhin im Generator prüfen.
- [ ] `public/llms.txt` und OG-Bilder nennen `marketingmitjenny.de` fest, bei Domainwechsel anpassen.
