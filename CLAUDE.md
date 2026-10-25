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
- Rechtstexte nie selbst schreiben. Datenschutz zeigt seit 25.10.2026 übergangsweise den ALTEN e-recht24-Text (Entscheidung Max, wörtlich, nennt Strato als Hoster, passt nicht zur Seite). Ersatz: neu generierter Text, bis dahin den Wortlaut nicht ändern.
- Nach jeder Phase stoppen und Checkliste aus BRIEFING.md §9 melden.
- Code/Commits Englisch, Inhalte Deutsch mit „Sie“.

Entscheidungen (Stand Phase 0):
- Hosting: GitHub Pages (Domain bei Strato, DNS-Zone der .de bei Microsoft 365, Nameserver nie ändern, Mail hängt daran; Details `docs/deploy.md`). Kein `_headers`/`.htaccess`: Header nur per `<meta>` möglich, 301-Weiterleitungen nicht möglich.
- URLs ohne Trailing Slash (`build.format: 'file'`, `trailingSlash: 'never'`).
- Kein Kontaktformular: nur `mailto:`-Link. Keine Statistik. KI-Crawler erlaubt.
- Keine CMP nötig, solange keine Drittdienste eingebunden sind.
- /leistungen (Entscheidung Max, Variante A): fünf Leistungstexte wörtlich aus content/startseite.md; Startseite behält Sektion #leistungen.
- Reels laufen im iPhone-Rahmen (src/assets/iphone-frame.png, Video darunter).
- Hero-Foto: content/media/jenny-hero.jpg (25.10.2026). Über uns: Jenny und Leonie (Videografin, content/media/leonie.jpg), keine eigene Team-Seite.
- Telefax entfällt überall (Max). Alt-Texte für Fotos: Entwürfe im Code, Jenny kann ändern. ueber-uns-2.jpg und kontakt.jpg sind Ausschnitte von ueber-uns-1.jpg.

Betrieb (Stand 25.10.2026): Vor jeder Arbeit `docs/uebergabe.md` lesen (Arbeitsweise, Stand, offene Punkte, Reel-Rezept, DNS-Fallen). Kundenstimme Altwirt bleibt ausgeblendet bis zur Freigabe, Altwirt-Logo nie verlinken.
