# Inhalte der alten Seite (Quelle: marketingmitjenny.de, ausgelesen am 22.10.2026)

Diese Dateien sind die verbindliche Inhaltsquelle für den Neubau.
**Inhalte und Sektionsreihenfolge werden übernommen**, die Optik kommt aus dem Design System
und `reference/startseite-neu.html`.

| Datei | URL | Hinweis |
| --- | --- | --- |
| startseite.md | `/` | 7 Sektionen + CTA-Band |
| ueber-uns.md | `/ueber-uns` | h1 nach oben ziehen |
| leistungen.md | `/leistungen` | neu (Variante A), Texte aus startseite.md Sektion 2 |
| referenzen.md | `/referenzen` | braucht eigenes h1 |
| kontakt.md | `/kontakt` | Formular braucht neues Ziel |
| impressum.md | `/impressum` | wörtlich übernehmen |
| datenschutz.md | `/datenschutz` | muss neu generiert werden |
| medien.csv + medien-laden.sh | – | 20 Bilder, 4 Videos → `content/media/` |

Navigation: Über uns, Referenzen, Kontakt (Button). Optional „Leistungen“ als Anker `/#leistungen`.
Footer: Logo, Impressum, Datenschutz, Kontakt, Instagram, LinkedIn, ©-Zeile.

- Instagram: https://www.instagram.com/marketingmitjenny/
- LinkedIn: https://www.linkedin.com/in/jennifer-pelka-a216b6237/

## Was auf der alten Seite fehlerhaft ist und NICHT übernommen wird

- Kundenlogos auf der Startseite haben falsche Alt-Texte aus dem Template
  („AriseHealth logo“, „OE logo“, „2020INC logo“, „The Paak logo“, „Ephicient logo“).
- Toter „Log in“-Link und leere `#`-Links in Navigation und Footer.
- Überschriften-Hierarchie: Über uns hat das h1 am Seitenende, Referenzen kopiert das h1 von
  Über uns, Kontakt hat gar kein h1.
- Kontakt: keine Meta-Description, englische Fehlermeldung, Ich-Form.
- Wortwolke „Warum jedes Unternehmen …“ wird per JavaScript gezeichnet und lädt Google Fonts →
  neu als statisches HTML.
- Videos von Cloudinary mit Autoplay → neu selbst gehostet.
- Tippfehler „einzigarten“ → „einzigartigen“.

## Offen für Jenny

- Alt-Texte für Hero, Über-uns-, Kontakt- und Mockup-Bilder.
- Kunde je Mockup und je Reel, Posterbilder, Untertitel für Reels.
- Freigabe der Kundenlogos.
- Eigenes h1 für Referenzen.
- Ich-Form auf Kontakt in Wir-Form ändern?
- Telefax noch aktuell?
- Impressum: DSA-Verordnungsnummer im Generator prüfen.
- Datenschutzerklärung neu generieren (nach Datenschutz-Inventar).
- Einzugsgebiet für Local SEO (nur „Geretsried“ und „Region“ belegt).
