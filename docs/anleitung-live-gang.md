# Anleitung: Vorschau ansehen und live gehen (Strato + GitHub Pages)

Für Max. Alles passiert im Browser, nichts muss lokal installiert werden. Die Menünamen bei GitHub und Strato ändern sich gelegentlich. Wenn ein Punkt anders heißt, nehmen Sie den sinngemäß passenden.

## Schnellvorschau ohne Strato (empfohlen als erster Schritt)

Sie sehen die Seite sofort unter `https://jennypelka.github.io/marketingmitjenny/`. Der Build schreibt dafür alle Pfade passend um, die Seite ist für Suchmaschinen gesperrt.

1. GitHub, **Settings**, **Pages**: Bei **Source** muss **GitHub Actions** stehen (nicht „Deploy from a branch“).
2. **Settings**, **Secrets and variables**, **Actions**, Reiter **Variables**: Legen Sie diese zwei Variablen an. Gibt es `SITE_URL` schon, klicken Sie auf den Stift und ändern den Wert.
   - `SITE_URL` = `https://jennypelka.github.io/marketingmitjenny`
   - `NOINDEX` = `true`
3. **Actions**, links **Deploy to GitHub Pages**, rechts **Run workflow**, **Run workflow**. Warten, bis ein grünes Häkchen erscheint (1 bis 3 Minuten).
4. Adresse öffnen und hart neu laden (Strg+Umschalt+R, am Handy im privaten Tab).

Weitere Änderungen an der Seite erscheinen nach jedem Merge nach `main` automatisch (Reiter **Actions** zeigt den Lauf).

Für den Livegang gibt es danach zwei Wege: direkt auf die Hauptdomain (Teil E) oder zuerst eine Vorschau-Unterdomain (Teile A bis C). Die Unterdomain ist nur nötig, wenn Sie die Seite unter einer eigenen Adresse zeigen wollen, zum Beispiel Jenny.

---

Gesamtablauf:

1. GitHub vorbereiten (Teil A)
2. Vorschau-Unterdomain bei Strato anlegen (Teil B)
3. Vorschau mit GitHub verbinden und ansehen (Teil C)
4. Prüfen und freigeben (Teil D)
5. Live schalten (Teil E)
6. Nachkontrolle (Teil F)

Die Teile D bis F machen Sie erst, wenn Sie alles in der Vorschau gesehen haben.

---

## Teil A: GitHub vorbereiten

**A1. Pages einschalten**

1. Öffnen Sie `https://github.com/jennypelka/marketingmitjenny` und melden Sie sich an.
2. Klicken Sie oben auf **Settings** (Zahnrad).
3. Links in der Liste auf **Pages**.
4. Bei **Source** (Build and deployment) wählen Sie **GitHub Actions**. Es gibt nichts zu speichern, die Auswahl gilt sofort.

**A2. Vorschau-Einstellungen setzen (zwei Variablen)**

1. In **Settings** links auf **Secrets and variables**, dann **Actions**.
2. Oben auf den Reiter **Variables**.
3. Klicken Sie **New repository variable**.
   - Name: `SITE_URL`
   - Value: `https://vorschau.marketingmitjenny.de`
   - **Add variable**
4. Noch einmal **New repository variable**.
   - Name: `NOINDEX`
   - Value: `true`
   - **Add variable**

Diese beiden Variablen sorgen dafür, dass die Vorschau Google nicht angezeigt wird und die Adressen in der Seite zur Vorschau passen.

**A3. Den Pull Request zusammenführen (Merge)**

1. Klicken Sie oben auf **Pull requests**.
2. Öffnen Sie den Pull Request „Build marketingmitjenny.de with Astro“.
3. Scrollen Sie nach unten. Wenn alle Prüfungen grün sind (Häkchen), klicken Sie **Merge pull request**, dann **Confirm merge**.
4. Klicken Sie oben auf **Actions**. Dort läuft jetzt „Deploy to GitHub Pages“. Warten Sie, bis der Lauf ein grünes Häkchen hat (ca. 1 bis 3 Minuten).

Falls der Lauf rot wird, klicken Sie ihn an und schicken Sie mir einen Screenshot der roten Zeile.

---

## Teil B: Vorschau-Unterdomain bei Strato

Ziel: `vorschau.marketingmitjenny.de` soll auf GitHub zeigen. Dafür legen Sie bei Strato einen DNS-Eintrag an.

1. Melden Sie sich im **Strato Kundenservicebereich** an.
2. Öffnen Sie **Domains** und wählen Sie `marketingmitjenny.de`. Je nach Oberfläche heißt der Weg **Domainverwaltung** oder **Domains verwalten**.
3. Suchen Sie **DNS-Einstellungen** (manchmal unter „Subdomains“ oder „Erweiterte DNS-Einstellungen“ / „CNAME“).
4. Legen Sie einen **neuen Eintrag** an:
   - Typ: **CNAME**
   - Name / Präfix: `vorschau`
   - Ziel / Wert: `jennypelka.github.io` (ohne `https://`, ohne Schrägstrich)
5. Speichern.

Falls Strato nach „Subdomain“ fragt statt nach DNS: Legen Sie die Subdomain `vorschau` an und wählen Sie als Verweis **externes Ziel / CNAME** `jennypelka.github.io`.

Die Änderung kann einige Minuten bis wenige Stunden dauern. Sie müssen nichts weiter tun, nur warten.

**Wichtig:** Ändern Sie hier nichts an den bestehenden Einträgen von `marketingmitjenny.de` und `www`. Die laufen noch für die alte Seite.

---

## Teil C: Vorschau verbinden und ansehen

1. GitHub, **Settings**, **Pages**.
2. Bei **Custom domain** tragen Sie `vorschau.marketingmitjenny.de` ein und klicken **Save**.
3. GitHub prüft die Domain („DNS check“). Meldet es einen Fehler, warten Sie 10 bis 30 Minuten und klicken Sie erneut **Save**, bis „DNS check successful“ erscheint.
4. Sobald der Haken **Enforce HTTPS** anklickbar ist, setzen Sie ihn. Das kann nach der Domainprüfung bis zu einer Stunde dauern.
5. Gehen Sie zu **Actions**, öffnen Sie links **Deploy to GitHub Pages**, klicken Sie rechts **Run workflow**, dann **Run workflow** im Fenster. Warten Sie auf das grüne Häkchen.
6. Öffnen Sie `https://vorschau.marketingmitjenny.de` im Browser.

So prüfen Sie, dass es die Vorschau ist: In der Seitenquelle steht `noindex`, und `https://vorschau.marketingmitjenny.de/robots.txt` zeigt `Disallow: /`.

---

## Teil D: Prüfen und freigeben

Gehen Sie die Seite am Handy und am Computer durch, in Hell und Dunkel (Mond-Symbol oben rechts).

- [ ] Startseite, Leistungen, Über uns, Referenzen, Kontakt, Impressum, Datenschutz
- [ ] Alle Texte stimmen, Telefonnummer und E-Mail klappen (Antippen)
- [ ] Bilder und Logos sichtbar, Reels zeigen noch „TODO: Video und Poster folgen“ (siehe unten)
- [ ] Die Datenschutzseite zeigt den Platzhalter: **Vor dem Livegang muss die echte Datenschutzerklärung hinein** (Jenny: e-recht24, Grundlage `docs/datenschutz-inventar.md`)

Dinge, die noch fehlen: `docs/offene-todos.md`.

**Videos (Reels) nachträglich einfügen:**

1. GitHub, Reiter **Code**, Ordner `content`, dann `media`.
2. **Add file**, **Upload files**. Ziehen Sie `reel-1.mp4` bis `reel-4.mp4` hinein (genau diese Namen). Pro Datei erlaubt der Browser höchstens 25 MB, am besten Format hochkant 9:16 mit unter 15 MB.
3. Unten **Commit changes**. Danach baut GitHub die Seite automatisch neu (siehe Reiter Actions).
4. Zu große Videos: Mir im Chat schicken oder mit einem Konverter (z. B. HandBrake) verkleinern.

**Texte später ändern:** Datei im Browser öffnen (Dateiliste, z. B. `src/pages/ueber-uns.astro`), Stift-Symbol, ändern, **Commit changes**. Nach 2 bis 3 Minuten ist es live. Wo welcher Text steht, steht in der `README.md` unter „Content maintenance“.

---

## Teil E: Live schalten (erst nach Freigabe)

Voraussetzungen: Teil D abgehakt, echte Datenschutzerklärung eingesetzt (dabei `noindex` in `src/lib/pages.ts` für Datenschutz entfernen, das erledige ich auf Zuruf).

**E1. Alte Einstellungen sichern**

1. Öffnen Sie bei Strato die DNS-Einstellungen von `marketingmitjenny.de`.
2. Machen Sie einen **Screenshot** oder kopieren Sie alle Einträge in eine Notiz. Das ist Ihr Rückweg, falls etwas schiefgeht.
3. **E-Mail-Einträge (MX, SPF, DKIM, DMARC, TXT) nie löschen oder ändern.** Sonst funktioniert `info@marketingmitjenny.de` nicht mehr.

**E2. DNS umstellen (Strato)**

Ändern Sie nur diese Einträge:

1. Alle **A-Einträge** der Hauptdomain (`marketingmitjenny.de` bzw. `@`) ersetzen Sie durch diese vier (Typ **A**):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   (Prüfen Sie diese Adressen vorher in der GitHub-Dokumentation „Managing a custom domain for your GitHub Pages site“, sie können sich ändern.)
2. **AAAA-Einträge** der Hauptdomain: löschen oder durch die IPv6-Adressen aus der GitHub-Dokumentation ersetzen. Alte IPv6-Einträge der bisherigen Seite dürfen nicht stehenbleiben.
3. Eintrag für `www`: Typ **CNAME**, Ziel `jennypelka.github.io`.

Die alte Webflow-Seite ist dann nicht mehr erreichbar, sobald das DNS umgestellt ist. Das kann einige Minuten bis wenige Stunden dauern. Am besten machen Sie das zu einer ruhigen Zeit.

**E3. GitHub auf die Hauptdomain umstellen**

1. **Settings**, **Secrets and variables**, **Actions**, Reiter **Variables**.
2. Löschen Sie die beiden Variablen `SITE_URL` und `NOINDEX` (Papierkorb-Symbol). Ohne sie baut GitHub die Live-Version.
3. **Settings**, **Pages**: Bei **Custom domain** `marketingmitjenny.de` eintragen, **Save**. Auf „DNS check successful“ warten, dann **Enforce HTTPS** setzen.
4. **Actions**, **Deploy to GitHub Pages**, **Run workflow**. Auf grünes Häkchen warten.
5. Öffnen Sie `https://marketingmitjenny.de` und `https://www.marketingmitjenny.de` (leitet automatisch auf die Hauptdomain).

Die Vorschau-Domain funktioniert danach nicht mehr (GitHub erlaubt nur eine Domain). Den CNAME `vorschau` bei Strato können Sie löschen.

**Rückweg, falls etwas schiefgeht:** Tragen Sie bei Strato die gesicherten alten Einträge aus E1 wieder ein.

---

## Teil F: Nachkontrolle nach dem Livegang

1. Öffnen Sie `https://marketingmitjenny.de/robots.txt` (muss `Allow: /` zeigen) und `https://marketingmitjenny.de/sitemap.xml`.
2. **Google Search Console** (`search.google.com/search-console`): Domain hinzufügen (Verifizierung per DNS-Eintrag bei Strato), dann unter **Sitemaps** `sitemap.xml` einreichen. **Bing Webmaster Tools** ebenso.
3. Gleiche Seiten in der Search Console auf Fehler prüfen, wenn alte URLs aus der alten Seite 404 zeigen. Auf GitHub Pages sind keine Weiterleitungen möglich, für wichtige alte Adressen sagen Sie mir Bescheid.
4. Strukturierte Daten prüfen: `https://validator.schema.org` und `https://search.google.com/test/rich-results`, jeweils die Adresse der Startseite eintragen.
5. Google-Unternehmensprofil und Bing Places mit der neuen Adresse abgleichen.
6. Einmal im Monat `docs/aeo-testprompts.md` durchgehen.
