# CMP: Entscheidungsvorlage

Stand: 22.10.2026. Ergebnis: **Zum Start keine CMP.**

## Begründung

- Die Seite setzt keine Cookies und bindet keine Drittanbieter-Skripte, -Schriften, -Medien oder -Dienste ein (Prüfung in `docs/datenschutz-inventar.md`).
- Statistik und Kontaktformular entfallen (Entscheidung Max).
- Die einzige lokale Speicherung ist die vom Nutzer ausgelöste Themenwahl (`mmj-theme`). Sie wird als erforderlich für die gewünschte Funktion eingeschätzt (Fachstelle bestätigt).
- Ohne einwilligungspflichtige Dienste gibt es nichts, wofür eine Einwilligung eingeholt werden müsste. Ein Banner wäre überflüssig und verschlechtert Bedienbarkeit und Ladezeit.
- Der Footer enthält den Link „Datenschutz“. Ein Link „Cookie-Einstellungen“ ist nicht nötig, weil es keine Einwilligungen gibt, die widerrufen werden könnten.

## Wann eine CMP nötig wird

Bei jedem einwilligungspflichtigen Dienst, zum Beispiel Statistik mit Geräte-Speicherung, Google Maps, Kalender-Buchung (Calendly o. Ä.), YouTube/Vimeo/Instagram-Einbettungen, Chat-Widget, Pixel.

## Empfehlung für dann

| Option | Kosten | Passt wenn |
| --- | --- | --- |
| **vanilla-cookieconsent** (MIT, selbst gehostet) | kostenlos | kleinster Aufwand, sehr klein im Download, gutes Design-Anpassen |
| **Klaro** (Open Source, selbst gehostet) | kostenlos | Skripte und Iframes sollen bis zur Einwilligung blockiert werden, Consent Mode v2 nötig |
| Cookiebot, consentmanager, Usercentrics | Free-Tarif bzw. kostenpflichtig | Nachweis und Rechtstext-Pflege sollen ausgelagert werden. Drittanbieter-Skript, Limits prüfen |

Anforderungen aus `BRIEFING.md` §6.3 gelten dann unverändert: vorherige Blockierung, gleichwertige Buttons, Widerruf im Footer, Consent Mode v2 `denied` als Standard, Banner in beiden Themes und barrierefrei, Zwei-Klick-Lösung für Einbettungen. Gleichzeitig `docs/datenschutz-inventar.md` und die Datenschutzerklärung aktualisieren.
