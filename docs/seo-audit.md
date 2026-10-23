# SEO-Audit und Nischen-Strategie (Stand 23.10.2026)

Grundlage: gebauter Stand der Seite (`dist/`, Main nach Pull Request 9), automatisiert ausgelesen. **Nicht möglich waren:** Messung der Live-Domain (noch nicht umgezogen), Search-Console-Daten, Suchvolumen, Google-Maps-Ergebnisse. Die Websuche des Werkzeugs ist auf US-Ergebnisse beschränkt und diente nur als grober Hinweis. Alles, was Wettbewerb und Nachfrage betrifft, ist eine Annahme und muss im Browser (Inkognito, Standort Geretsried) und in der Search Console gegengeprüft werden.

## 1. Was bereits sauber ist

- Statisches HTML mit vollem Inhalt im Quelltext, `lang="de-DE"`, genau ein h1 je Seite, lückenlose Überschriften.
- Eindeutige Titles (31 bis 54 Zeichen) und Descriptions (128 bis 151 Zeichen), Canonical ohne Fehler, Open Graph und Twitter Card mit eigenem 1200×630-Bild.
- `sitemap.xml` (nur indexierbare Seiten, `lastmod`), `robots.txt`, `llms.txt`, eigene 404 mit Status 404 und `noindex`, `/datenschutz` bis zum Echttext `noindex`.
- JSON-LD je Seite (ProfessionalService, WebSite, Person, Seitentyp, Breadcrumbs, Service), alles aus sichtbaren Daten, keine Bewertungsmarkup-Risiken.
- Bilder mit Alt, festen Maßen und AVIF/WebP-Ersatz (WebP); Lighthouse mobil 96 bis 100 in allen vier Kategorien.
- Alle Seiten verlinken sich über Navigation und Footer gegenseitig (jede Seite hat 8 interne Verweise).

> **Update 23.10.2026:** H2 ist umgesetzt. `/leistungen` hat jetzt etwa 750 statt 220 Wörter, mit FAQ und `FAQPage`; 16 von 44 Sätzen (vorher 17 von 19) stimmen noch mit der Startseite überein. Der Startseite fehlt noch ein Ortsbezug (H1).

## 2. Befunde nach Priorität

### Hoch

| Nr. | Befund | Warum es zählt | Empfehlung |
| --- | --- | --- | --- |
| H1 | **Der Ortsbezug fehlt auf der Startseite, `/leistungen` und `/referenzen`.** „Geretsried“ kommt im Seiteninhalt dort 0-mal vor, im Footer steht keine Adresse. Nur `/ueber-uns` und `/kontakt` nennen den Ort. | Local-SEO-Signal und Nutzerbezug: Die Startseite ist die Seite, die für „Social Media Agentur Geretsried“ zuerst bewertet wird. | (a) Name, Adresse, Telefon im Footer auf allen Seiten (Entscheidung Max, `content/README.md` nennt aktuell keine Adresse im Footer). (b) Ortsbezug in Title/Description der Startseite (siehe H3). (c) Alt-Text und Brotkrumen nutzen. (d) Satz mit Ort in den Texten nur mit Jennys Freigabe, weil `content/` wörtlich gilt. |
| H2 | **`/leistungen` wiederholt 17 von 19 Sätzen der Startseite.** | Doppelter Inhalt auf zwei URLs. Suchmaschinen wählen eine aus, die andere trägt kaum. | Variante A (Ihre Entscheidung) ist nur sinnvoll, wenn `/leistungen` eigenen Inhalt bekommt: je Leistung ein neuer Absatz (80 bis 150 Wörter: für wen, was Sie bekommen, wie oft, Ergebnis) mit Antwort-zuerst-Einleitung. Alternativ die Startseite auf Kurztexte mit Link kürzen (Freigabe nötig). |
| H3 | **Title der Startseite endet auf „| Jenny“,** alle anderen Titles auf „| Marketing mit Jenny“. | Uneinheitliche Entität. Der alte Title wurde aus Rankinggründen übernommen. | Erst die Suchanfragen der alten Seite in der Search Console prüfen. Wenn der Title nicht gezielt rankt: „Social-Media-Marketing Geretsried \| Marketing mit Jenny“ (53 Zeichen). |
| H4 | **Google-Unternehmensprofil und Bing Places** sind der größte Hebel für „… in der Nähe“, liegen aber außerhalb des Codes. | Local Pack und Karten sind für lokale Suchen oft sichtbarer als organische Treffer. | Siehe Abschnitt 4, Wochen 1 bis 2. |

### Mittel

| Nr. | Befund | Empfehlung |
| --- | --- | --- |
| M1 | `/kontakt` ist dünn (32 Wörter) und hat keine Zwischenüberschrift. | Erreichbarkeit, Einzugsgebiet („Wir kommen zu Ihnen vor Ort“ steht schon auf der Startseite) und Antwortzeit ergänzen, sobald Jenny sie nennt. Schema um `geo`, `openingHoursSpecification` und `image` erweitern, nur mit echten Daten. |
| M2 | `/referenzen` ist dünn (125 Wörter, zwei Zitate). Die starken Zahlen (Reichweite 180 Tsd.+ ohne Ads) stehen nur auf der Startseite. | Pro Kunde eine kurze Fallstudie: Ausgangslage, Maßnahme, Ergebnis, mit Freigabe des Kunden. Verlinkung zum Kunden und zum Reel. Siehe Abschnitt 3. |
| M3 | Die vier Reels haben keinen Begleittext, kein `VideoObject` und keine Untertitel. | Je Reel zwei Sätze Beschreibung (sichtbar), `VideoObject` (Name, Beschreibung, `thumbnailUrl`, `uploadDate`, `contentUrl`), Untertitel (`.vtt`) für Barrierefreiheit und Maschinenlesbarkeit. |
| M4 | Interne Verlinkung nur über Navigation und Footer, keine Kontextlinks. | UI-Links wie „Alle Leistungen im Detail“ unter der Sektion Leistungen und „Alle Referenzen“ unter den Mockups (Linktext sprechend, kein neuer Fließtext). |
| M5 | Alte Webflow-URLs außer den Hauptseiten sind unbekannt, und GitHub Pages kann keine 301-Weiterleitungen. | Liste aus der Search Console holen. Für wichtige Altadressen eine kleine Weiterleitungsseite mit `<meta http-equiv="refresh">` und Canonical auf die neue Seite. |
| M6 | Scroll-Einblendungen setzen Inhalt kurz auf unsichtbar (nur mit JS). | Risiko niedrig, weil Googlebot mit hohem Viewport rendert. Nach dem Livegang in der Search Console „URL prüfen“, „Getestete Seite ansehen“ ausführen und die Screenshots kontrollieren. |
| M7 | `lastmod` ist überall 22.10.2026. | Bei jeder inhaltlichen Änderung `lastmod` in `src/lib/pages.ts` setzen, sonst verliert das Signal Wert. |

### Niedrig

- Impressum ist indexierbar (üblich). Optional `noindex`, wenn die Seite in Suchergebnissen stört.
- `Person` im Schema ohne Foto: `image` ergänzen (Portrait von der Über-uns-Seite).
- `sameAs` enthält Instagram und LinkedIn: gut. Weitere Profile (Google, Bing, Apple) nach Anlage ergänzen.
- Es gibt kein FAQ, entsprechend kein `FAQPage`. Siehe Abschnitt 3.

## 3. Nische: lokale Unternehmen in Geretsried und im Oberland

### Positionierung

Jennys Besonderheit laut Seite: Dreh **vor Ort** beim Kunden, Fokus auf **Kurzvideos/Reels**, organische Reichweite **ohne Ads**, monatliches Reporting, klarer Zyklus (Strategie, Dreh alle zwei Monate, Betreuung). Die Referenzen decken Gastronomie und Hotel (Oberhauser, Lido am Starnberger See), Fahrschule (Leirich), Kfz (Fercak), IT (WorNet), Pharma (Frinopharm) ab.

Websuche-Hinweis (grob, nur US-Ergebnisse): Für „Social Media Agentur Geretsried“ fand sich keine reine Social-Media-Agentur vor Ort, nur das Verzeichnis-Profil einer Agentur für Strategie, Design und Kommunikation (Stileffekt, Geretsried), und für Bad Tölz/Wolfratshausen nichts Passendes. Das spricht für wenig direkte Konkurrenz im Nahbereich, **ist aber nicht belegt**. Gegenprüfung: Google und Google Maps im Inkognito-Fenster mit den Suchen unten.

### Keyword-Cluster (ohne Suchvolumen, nach Intention)

- **Lokal, kaufbereit:** Social Media Agentur Geretsried · Social Media Betreuung Geretsried · Social Media Agentur Wolfratshausen / Bad Tölz / Oberland · Instagram Agentur Oberbayern · Reels erstellen lassen Oberbayern · Videoproduktion für Unternehmen Geretsried
- **Branche plus Ort:** Social Media für Gastronomie Oberbayern · Social Media für Hotels · Social Media für Fahrschulen · Social Media für Handwerker und Autohäuser
- **Fragen (AEO):** Was kostet Social-Media-Betreuung? · Wie oft sollte ein Unternehmen auf Instagram posten? · Lohnt sich Instagram für lokale Betriebe? · Wie viele Reels pro Monat? · Was ist Content-Produktion vor Ort?

Wichtig: Keyword nie in jeden zweiten Satz drücken. Pro Seite ein Hauptbegriff, wie in `docs/keywords.md`.

### Inhalte, die in dieser Nische am meisten bringen (alle mit Freigabe von Max und Jenny, teils Umfangsänderung)

1. **Fallstudien je Branche** (Oberhauser, Leirich, Lido): Problem, Maßnahme, Ergebnis, ein Reel, ein Zitat, Zahlen nur belegt. Ersetzt Dutzende Ortsseiten und baut Vertrauen auf. Ort und Branche stehen natürlich im Text.
2. **Preis-Orientierung:** „Was kostet Social-Media-Betreuung?“ mit realistischen Spannen oder „ab“-Preisen. Das ist der häufigste Wunsch lokaler Auftraggeber und eine typische Frage in KI-Antworten.
3. **FAQ-Sektion** (8 bis 10 Fragen aus echten Erstgesprächen, 40 bis 80 Wörter je Antwort) mit `FAQPage`.
4. **Erweiterte `/leistungen`** mit eigenem Text je Leistung (löst H2).
5. **Kurzes Glossar** („Reel“, „Drehplan“, „Hook“), erklärt in zwei Sätzen, hilft Menschen und Maschinen.

### Nicht empfohlen

- Dutzende „Social Media Agentur [Ort]“-Seiten (Doorway-Seiten) für jeden Nachbarort. Besser: eine Sektion „Einzugsgebiet“ mit echten Orten, die Jenny bedient.
- Gekaufte Backlinks, Bewertungen kaufen, selbst bewertete `Review`-/`AggregateRating`-Auszeichnung.
- Keyword-Wiederholung im Fließtext.

## 4. Maßnahmenplan

**Woche 1 bis 2 (Basis, ohne Code)**
1. Google-Unternehmensprofil anlegen und verifizieren: Primärkategorie passend zu „Marketingagentur“ bzw. „Social-Media-Marketing“, Leistungen einzeln eintragen, Einzugsgebiet, Fotos (Jenny bei Drehs), Website `https://marketingmitjenny.de`, Telefon und Adresse exakt wie im Impressum.
2. Bing Places, Apple Business Connect, Gelbe Seiten, Das Örtliche, 11880, IHK-Branchenbuch: gleiche Schreibweise (Name, Adresse, Telefon, nie abweichen).
3. Search Console und Bing Webmaster Tools, Sitemap einreichen; Suchanfragen der alten Seite sichern.
4. Mindestens fünf Bewertungen echter Kunden sammeln (Link zum Profil per Nachricht), auf jede antworten.

**Woche 3 bis 6 (Code und Inhalt, nach Freigabe)**
5. Footer mit Name, Adresse, Telefon (H1), kontextuelle Links (M4), Startseiten-Title (H3), `image`/`geo` im Schema (M1).
6. `/leistungen` mit eigenem Text (H2), FAQ-Sektion, Preis-Orientierung.
7. Reels: Beschreibung, Untertitel, `VideoObject` (M3).

**Woche 7 bis 12 (Autorität)**
8. Backlinks von Kunden: jede Kunden-Website verlinkt „Social Media: Marketing mit Jenny“ (Impressum oder Footer), das ist die stärkste lokale Empfehlung.
9. Lokale Presse und Verbände: Isar-Loisachbote / Merkur (Lokalteil Wolfratshausen-Geretsried), Gewerbeverband Geretsried, VHS-Workshop „Social Media für lokale Betriebe“, IHK-Veranstaltungen. Jeder Beitrag bringt Verweise und Ortsbezug.
10. Fallstudien auf `/referenzen` (M2), mit Kundenfreigabe.

## 5. Messung ohne Tracking

- **Search Console:** Suchanfragen mit Ort und Branche, Klicks, Position, Indexierung.
- **Google-Unternehmensprofil:** Aufrufe, Anrufe, Routenanfragen, Website-Klicks.
- **Manueller Rank-Check** (Inkognito, 5 Suchen mit Ortsbezug) und `docs/aeo-testprompts.md` monatlich.
- Bewertungen: Anzahl, Durchschnitt, Antwortzeit.

## 6. Sofort umsetzbar, wenn Sie zustimmen

Ohne neuen Fließtext: (1) Footer mit Adresse und Telefon, (2) Titelvorschlag Startseite (nach Search-Console-Prüfung), (3) Kontextlinks unter Leistungen und Mockups, (4) `image` im Personen-Schema, (5) `VideoObject` und Reel-Beschreibungen, sobald Texte da sind, (6) Weiterleitungsseiten nach Liste der Altadressen.
