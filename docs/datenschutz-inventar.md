# Datenschutz-Inventar aller Drittkontakte

Stand: 22.10.2026 (Phase 7). Grundlage für die neue Datenschutzerklärung (e-recht24 oder Fachperson). Dies ist keine Rechtsberatung. Alles, was nicht aus dem Code belegt ist, steht als **TODO** bei Max oder Jenny.

## 1. Ergebnis der Netzwerk-Prüfung

Geprüft mit einem Chromium-Lauf über alle 8 Seiten (inkl. 404), Hell und Dunkel, Scrollen bis zum Seitenende, ohne Einwilligung:

- 71 Anfragen, alle an die eigene Domain. **Keine Anfrage an Drittdomains** (kein Google Fonts, CDN, Cloudinary, YouTube, Pixel).
- **0 Cookies**, kein `sessionStorage`, kein IndexedDB.
- `localStorage` bleibt leer, bis jemand den Thema-Umschalter drückt (siehe 3.).
- Im gebauten HTML stehen fremde Hostnamen nur als **Links** (Instagram, LinkedIn: Daten fließen erst nach Klick) und als Namensräume (`schema.org`, `w3.org`, `sitemaps.org`, keine Verbindung).

Prüfung wiederholen: `npm run build`, Seiten im Browser öffnen, Netzwerk-Tab und Anwendung (Cookies, Storage) ansehen.

## 2. Dienste und Verarbeitungen

| Nr. | Dienst | Zweck | Daten | Anbieter, Land | Rechtsgrundlage | AVV / Hinweis |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Hosting: GitHub Pages** | Auslieferung der Seite | IP-Adresse, Zeitpunkt, URL, Browserkennung in Server-Logs (Umfang bestimmt GitHub) | GitHub, Inc. (Microsoft), USA | Art. 6 Abs. 1 lit. f DSGVO | **TODO Max/Jenny:** GitHub-Datenverarbeitungsvertrag (DPA) abschließen bzw. bestätigen und Drittlandübermittlung (USA, Data Privacy Framework) rechtlich bewerten. Das Briefing bevorzugt einen EU-Anbieter. GitHub Pages hat keine EU-Region-Auswahl. |
| 2 | **Domain und DNS** | Domain `marketingmitjenny.de` | Domaininhaber-, Abrechnungs- und DNS-Daten | Strato (Deutschland) | Art. 6 Abs. 1 lit. b, f DSGVO | Vertrag mit Strato, **TODO Jenny:** AVV im Kundenbereich prüfen |
| 3 | **Schriften** (Inter, Bricolage Grotesque) | Darstellung | keine, selbst gehostet (`public/fonts`) | eigene Domain | – | keine Verbindung zu Google |
| 4 | **Bilder und Videos** | Darstellung | keine, selbst gehostet (`content/media`, nach Build unter eigener Domain) | eigene Domain | – | kein Cloudinary, kein YouTube |
| 5 | **Kontakt per E-Mail** | Anfragen beantworten | Inhalt der E-Mail, Absenderadresse, Zeitpunkt (Link `mailto:`, **kein Formular**) | Mail-Anbieter von Jenny (**TODO Jenny:** welcher Anbieter, Land, AVV) | Art. 6 Abs. 1 lit. b, f DSGVO | Die Seite verarbeitet nichts, die E-Mail entsteht im Mailprogramm der Nutzerin oder des Nutzers |
| 6 | **Kontakt per Telefon** | Anfragen beantworten | Rufnummer, Gesprächsinhalt (Link `tel:`) | Telefonanbieter von Jenny | Art. 6 Abs. 1 lit. b, f DSGVO | – |
| 7 | **Social-Media-Links** (Instagram, LinkedIn) | Verweis auf Profile | keine beim Laden der Seite. Erst nach Klick verarbeitet der Anbieter Daten | Meta Platforms Ireland (Instagram), LinkedIn Ireland | Art. 6 Abs. 1 lit. f DSGVO | einfache Links, **keine Einbettung, keine Plugins**. In der Datenschutzerklärung erwähnen |
| 8 | **Statistik** | – | – | – | – | **keine** (Entscheidung Max). Wird später eine ergänzt, Inventar und Erklärung anpassen |
| 9 | **Kontaktformular** | – | – | – | – | **entfällt** (Entscheidung Max) |
| 10 | **CMP / Cookie-Banner** | – | – | – | – | **nicht nötig**, siehe `docs/cmp-entscheidung.md` |

## 3. Speichern auf dem Endgerät (§ 25 TDDDG)

| Schlüssel | Wo | Zweck | Wann gesetzt | Dauer | Bewertung |
| --- | --- | --- | --- | --- | --- |
| `mmj-theme` (`hell` oder `dunkel`) | `localStorage` | Wahl des Farbthemas merken | nur, wenn die Nutzerin oder der Nutzer den Umschalter betätigt | bis zum Löschen durch die Person | Auf ausdrücklichen Wunsch gesetzte Einstellung, enthält keine Personenbezüge. Wird als „unbedingt erforderlich“ für die gewünschte Funktion eingeschätzt. **TODO Fachstelle:** bestätigen und in der Datenschutzerklärung nennen |

Es gibt **keine Cookies**. Ohne Betätigung des Umschalters wird nichts gespeichert und nichts ausgelesen außer der Systemeinstellung (`prefers-color-scheme`), die der Browser bereitstellt.

## 4. Inhalte für die Datenschutzerklärung

Mindestens aufnehmen:

1. Verantwortliche Stelle (Jennifer Pelka, Händelstraße 19, 82538 Geretsried, Telefon, E-Mail) wie auf `/datenschutz` bereits vermerkt.
2. Hosting bei GitHub Pages (USA), Server-Logs, Rechtsgrundlage, Drittlandübermittlung (Eintrag 1).
3. Domain bei Strato (Eintrag 2).
4. Kontaktaufnahme per E-Mail und Telefon (Einträge 5, 6), Speicherdauer **TODO Jenny**.
5. Social-Media-Links ohne Einbettung (Eintrag 7).
6. Lokale Speicherung `mmj-theme` (Abschnitt 3).
7. Keine Cookies, keine Statistik, kein Formular, keine Schriften von Google.
8. Betroffenenrechte, Beschwerderecht, SSL/TLS-Verschlüsselung (GitHub Pages: „Enforce HTTPS“ aktivieren).
9. Der alte Text (Strato als Hoster) passt nicht mehr und wird nicht übernommen.

## 5. Offene Punkte

- **TODO Max/Jenny:** GitHub-DPA und Bewertung der USA-Übermittlung. Alternative bei Bedenken: statischer Hoster in der EU (Strato-Webspace per FTP oder anderer EU-Anbieter). Der Build ist unabhängig davon, nur `_headers`/`.htaccess` und Weiterleitungen kämen dort dazu.
- **TODO Jenny:** Mail-Anbieter und Speicherdauer von Anfragen.
- **TODO:** Datenschutzerklärung generieren, dann auf `/datenschutz` einfügen und `noindex` in `src/lib/pages.ts` entfernen.
- Neu prüfen, sobald Reels hochgeladen sind (selbst gehostet, keine Drittverbindung) und wenn Karten, Kalender-Buchung oder Statistik dazukommen.
