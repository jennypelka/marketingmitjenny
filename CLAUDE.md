# CLAUDE.md

Arbeitsgrundlage: BRIEFING.md (vollständig lesen, verbindlich für Technik und Recht).
Inhalte: content/*.md (wörtlich, Reihenfolge der Sektionen verbindlich), Überblick in content/README.md.
Optik: design-system/README.md, Klassen in design-system/components/bundle.css, Layout-Referenz reference/startseite-neu.html.

Wichtig:
- Seiten: /, /leistungen, /ueber-uns, /referenzen, /kontakt, /impressum, /datenschutz, 404. Nichts darüber hinaus.
- tokens.css existiert nicht: in Phase 1 aus design-system/tokens.json erzeugen.
- Referenz-HTML und Previews laden Google Fonts, Webflow-CDN und Cloudinary: NICHT übernehmen.
  Schriften selbst hosten, Medien nur aus content/media/. Keine Drittdomains.
- Inhalte nicht umformulieren. Fehlendes als TODO: markieren und am Ende auflisten.
- Rechtstexte nie selbst schreiben. Datenschutz bleibt Platzhalter bis zur Neugenerierung.
- Nach jeder Phase stoppen und Checkliste aus BRIEFING.md §9 melden.
- Code/Commits Englisch, Inhalte Deutsch mit „Sie“.

Entscheidungen (Stand Phase 0):
- Hosting: GitHub Pages (Domain bei Strato, DNS zeigt auf GitHub). Kein `_headers`/`.htaccess`: Header nur per `<meta>` möglich, 301-Weiterleitungen nicht möglich.
- URLs ohne Trailing Slash (`build.format: 'file'`, `trailingSlash: 'never'`).
- Kein Kontaktformular: nur `mailto:`-Link. Keine Statistik. KI-Crawler erlaubt.
- Keine CMP nötig, solange keine Drittdienste eingebunden sind.
- /leistungen (Entscheidung Max, Variante A): fünf Leistungstexte wörtlich aus content/startseite.md; Startseite behält Sektion #leistungen.
- Reels laufen im iPhone-Rahmen (src/assets/iphone-frame.png, Video darunter).
- Hero-Foto vorerst content/media/ueber-uns-1.jpg.
