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

Für den Livegang auf der echten Domain siehe unten (Teil E). Die technischen Hintergründe zu DNS und Hosting stehen in `docs/deploy.md`.

---

## Prüfen und freigeben

Gehen Sie die Seite am Handy und am Computer durch, in Hell und Dunkel (Mond-Symbol oben rechts).

- [ ] Startseite, Leistungen, Über uns, Referenzen, Kontakt, Impressum, Datenschutz
- [ ] Alle Texte stimmen, Telefonnummer und E-Mail klappen (Antippen)
- [ ] Bilder und Logos sichtbar, Reels laufen (Reel 1 und 2 sind neu, 3 und 4 noch alt)
- [ ] Die Datenschutzseite zeigt den Platzhalter: **Vor dem Livegang muss die echte Datenschutzerklärung hinein** (Jenny: e-recht24, Grundlage `docs/datenschutz-inventar.md`)

Dinge, die noch fehlen: `docs/offene-todos.md`.

**Videos (Reels) nachträglich einfügen:**

Die Dateien heißen genau `reel-1.mp4` bis `reel-4.mp4` (plus `reel-N-poster.jpg`) und gehören in `content/media/`. Neue Rohvideos (Bildschirmaufnahmen mit Handy-Rahmen) werden auf den Innenbildschirm zugeschnitten, siehe `docs/uebergabe.md`, Abschnitt Reels.

*Schritt 1: Videos klein machen (empfohlen, gilt für alle Wege).* Pro Video genügen 10 bis 20 MB. Kostenlos geht das mit HandBrake (handbrake.fr): Datei öffnen, Voreinstellung „Fast 1080p30“, unter Dimensions auf **1080 × 1920** (hochkant) belassen, Reiter Video: Qualität **RF 26**, Reiter Audio: Audio ist egal (die Reels laufen stumm), speichern als MP4. Ein Reel mit 30 bis 45 Sekunden hat dann meist unter 20 MB.

*Weg A: im Browser (bis 25 MB pro Datei).*
1. GitHub, Reiter **Code**, Ordner `content`, dann `media`.
2. **Add file**, **Upload files**. Dateien hineinziehen.
3. Unten **Commit changes**, Option **Commit directly to the main branch**. Danach baut GitHub die Seite automatisch neu (Reiter **Actions**).

*Weg B: mit GitHub Desktop (bis 100 MB pro Datei, falls Weg A zu klein ist).* GitHub Desktop (desktop.github.com) installieren und anmelden, das Repository `marketingmitjenny` wählen (**Clone**), die Videos in den Ordner `content/media` kopieren, unten links Beschreibung eintragen, **Commit to main**, dann oben **Push origin**. Das ist ein Programm, kein Skript. Dateien über 100 MB nimmt GitHub nicht an, dafür bitte vorher mit HandBrake verkleinern.

Poster-Bild und Untertitel für die Reels sind noch offen.

**Texte später ändern:** Datei im Browser öffnen (Dateiliste, z. B. `src/pages/ueber-uns.astro`), Stift-Symbol, ändern, **Commit changes**. Nach 2 bis 3 Minuten ist es live. Wo welcher Text steht, steht in der `README.md` unter „Content maintenance“.

---

## Teil E: Domain auf GitHub Pages schalten (Stand 25.10.2026)

Ausgangslage: Die Domain `marketingmitjenny.de` hat ihre DNS-Zone bei **Microsoft 365** (Nameserver `ns1`–`ns4.bdm.microsoftonline.com`, in Strato eingetragen). Die Mail hängt daran. **Nameserver nie ändern.** DNS-Einträge für die Website werden im Microsoft-Adminportal gesetzt, nicht bei Strato.

**E1. Vorher**
1. Datenschutzerklärung ist eingesetzt (`src/pages/datenschutz.astro`). Aktuell steht dort übergangsweise der alte Text, siehe `docs/uebergabe.md`.
2. Alle Einträge der Zone sichern (Screenshot): admin.microsoft.com, Einstellungen, Domänen, `marketingmitjenny.de`, DNS-Einträge.
3. MX, TXT (SPF), `autodiscover`, DKIM und `_dmarc` nie ändern.

**E2. DNS (Microsoft-Adminportal)**
1. A `@` auf `185.199.108.153` (statt `198.202.211.1`). Optional drei weitere A-Records: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Prüfe die Adressen in der GitHub-Doku „Managing a custom domain for your GitHub Pages site“.
2. CNAME `www` auf `jennypelka.github.io` (ohne `https://`).
3. AAAA-Einträge für `@` und `www` löschen.
4. Gibt es einen CAA-Eintrag, muss `letsencrypt.org` erlaubt sein, sonst löschen.
5. Kontrolle auf https://dnschecker.org (A-Record muss die GitHub-Adresse zeigen).

**E3. GitHub**
1. Settings, Secrets and variables, Actions, Variables: `SITE_URL` = `https://marketingmitjenny.de` (kein Pfad, kein Schrägstrich am Ende). `NOINDEX` löschen, sobald die Seite für Google offen sein soll.
2. Settings, Pages, Custom domain: `marketingmitjenny.de`, Save. Auf „DNS check successful“ warten, dann **Enforce HTTPS** setzen (kann nach dem Check noch bis zu einer Stunde gesperrt sein, nicht mehrfach speichern).
3. Actions, Deploy to GitHub Pages, Run workflow, auf das grüne Häkchen warten.
4. Hart neu laden. Sieht die Seite ungestylt aus, steht `SITE_URL` falsch (Pfade beginnen dann mit `/marketingmitjenny/`).

**Rückweg:** Alte Einträge (A `198.202.211.1`, `www` auf die Webflow-Adresse) wieder eintragen. Die Webflow-Seite läuft weiter, solange sie veröffentlicht ist.

## Teil F: Nachkontrolle nach dem Livegang

1. `https://marketingmitjenny.de/robots.txt` muss `Allow: /` zeigen, `/sitemap.xml` muss erreichbar sein.
2. **Google Search Console**: Domain hinzufügen (Verifizierung per TXT-Eintrag im Microsoft-Portal), `sitemap.xml` einreichen. **Bing Webmaster Tools** ebenso.
3. Alte Webflow-URLs prüfen. Auf GitHub Pages sind keine 301 möglich, für wichtige Altadressen kleine Weiterleitungsseiten anlegen.
4. Strukturierte Daten prüfen: `https://validator.schema.org` und `https://search.google.com/test/rich-results`.
5. Google-Unternehmensprofil und Bing Places mit der neuen Adresse abgleichen.
6. Webflow: Seite abschalten oder Domains dort entfernen, wenn nicht mehr gebraucht.
7. Einmal im Monat `docs/aeo-testprompts.md` durchgehen.
