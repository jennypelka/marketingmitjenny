# Briefing: Neubau marketingmitjenny.de

> Dieses Dokument ist die Arbeitsgrundlage für Claude Code. Lies es vollständig, bevor du Code schreibst. Lege es als `BRIEFING.md` im Repo-Root ab und verweise in der `CLAUDE.md` darauf.

## 0. Rolle, Ziel, Arbeitsweise

**Ziel.** Die Website von Jennifer Pelka (Marketing mit Jenny, Social-Media-Marketing für lokale Unternehmen) wird neu gebaut: gleiche Inhalte, deutlich moderneres Design, technisch sauber für SEO und KI-Suche (AEO/GEO), datenschutzkonform nach deutschem Recht, konsistent im Aufbau.

**Rolle.** Du bist Senior Frontend-Entwickler mit SEO- und Datenschutz-Know-how. Du lieferst produktionsreifen Code, keinen Prototyp.

**Arbeitsweise.**

1. Lies zuerst `/design-system/` und `/reference/` (siehe Abschnitt 1).
2. Schreibe vor dem Bauen einen kurzen Plan (Struktur, Komponenten, Reihenfolge) und stelle offene Fragen gesammelt. Rate nicht bei Fakten (Adresse, Preise, Zahlen, Rechtstexte).
3. Arbeite in kleinen, einzeln prüfbaren Schritten mit sprechenden Commits.
4. Erfinde keine Inhalte. Fehlendes wird als klar markierter Platzhalter (`TODO:`) angelegt und am Ende in einer Liste gemeldet.
5. Beende jede Phase mit der Checkliste aus Abschnitt 9.

**Sprache.** Seiteninhalte Deutsch (`de-DE`), Ansprache **Sie**. Code, Kommentare und Commit-Messages Englisch.

---

## 1. Ausgangsmaterial

Lege diese Dateien vor Projektstart ins Repo (Max liefert sie):

| Pfad | Inhalt |
| --- | --- |
| `/design-system/` | Export des Design Systems Version 2: `tokens.json`, `bundle.css`, `README.md`, Komponenten-READMEs und -Previews, Logos |
| `/reference/startseite-alt.html` | Gespeichertes HTML der aktuellen Startseite (alle Texte) samt `_files`-Ordner mit Bildern |
| `/reference/startseite-neu.html` | Fertige Vorschau der neuen Startseite (Layout-Referenz) |
| `/content/` | Inhalte aller Seiten, ausgelesen von der Live-Seite (`content/README.md`), plus Medienliste und Download-Skript (`content/media/`) |

**Inhalte und Aufbau der alten Seite werden übernommen.** Texte stehen wörtlich in `/content/*.md`, ebenso die Reihenfolge der Sektionen je Seite. Nicht umformulieren, nicht kürzen, nichts ergänzen. Abweichungen (Korrekturen, Überschriften-Hierarchie) sind dort ausdrücklich vermerkt. Wo `startseite-neu.html` Texte gekürzt hat, gilt `/content/`.

Das Design System ist verbindlich. Bei Widerspruch zwischen diesem Briefing und `design-system/README.md` zählt das README für Optik, dieses Briefing für Technik und Recht.

**Design-System-Kurzfassung** (Details im README):

- Marken-Farben Lila (`#ac55f9` Fläche, `#9a3fe8` für Buttons mit weißem Text, `#6b36c2` für Text) und Pfirsich (`#ffc68b`, Text darauf immer `#14101c`). Neutrale Grautöne mit leichtem Violettstich.
- Semantische Tokens mit Hell- und Dunkelwert (`bg`, `fg`, `brand`, `accent`, …). Das dunkle Thema ist ein vollwertiges zweites Thema.
- Schriften: Bricolage Grotesque (Überschriften), Inter (Fließtext). **Selbst hosten**, nicht von Google laden (siehe Abschnitt 6). Das Design-System-README, alle Previews und `startseite-neu.html` laden Google Fonts bzw. nennen Cloudinary: das gilt nur für die Vorschauen und wird **nicht** übernommen.
- `bundle.css` liegt unter `design-system/components/` und erwartet `tokens.css`. Diese Datei gibt es nicht: In Phase 1 aus `tokens.json` erzeugen.
- Große Typografie (`display-xl`), Bento-Raster, Marquee, Prozess-Schritte, große Radien, Signatur-Radius oben links, weiche Verläufe.
- Tokens werden 1:1 als CSS-Variablen übernommen. Keine Hex-Werte im Komponenten-CSS.

---

## 2. Technik

**Empfehlung (bitte bestätigen oder begründet ändern):**

- **Astro** (statisch generiert, `output: 'static'`), TypeScript, kein Client-Framework nötig. Interaktion über kleine Inseln oder Vanilla-JS.
- Inhalte als Markdown/MDX bzw. Content Collections (`/src/content`), damit Jenny Texte ohne Code ändern kann. Optional später ein Git-basiertes CMS (z. B. Decap), erst nach Freigabe.
- Plain CSS mit Design-Tokens (keine Utility-Frameworks nötig). Komponenten als Astro-Komponenten mit den Klassen aus `bundle.css`.
- Bilder über `astro:assets` (AVIF/WebP, `srcset`, feste Breite und Höhe).
- Hosting: EU-Anbieter oder EU-Region mit Auftragsverarbeitungsvertrag (AVV). Statische Auslieferung mit CDN. Entscheidung trifft Max, du bereitest eine `_headers`-Datei und Deploy-Doku vor.
- Performance-Budget: kein JS außer Theme-Toggle, Animationen, CMP und Menü. Gesamt unter 60 KB JS gzip.

**Seitenplan** (URL-Slugs der alten Seite **beibehalten**, damit Rankings und Links erhalten bleiben):

| URL | Zweck |
| --- | --- |
| `/` | Startseite |
| `/ueber-uns` | Über Jenny, Team, Arbeitsweise |
| `/leistungen` | Die fünf Leistungen (Entscheidung Max, Variante A: Texte wörtlich aus `content/startseite.md`, Sektion 2) |
| `/referenzen` | Fallstudien, Kundenstimmen |
| `/kontakt` | Kontaktformular, Erstgespräch buchen |
| `/impressum`, `/datenschutz` | Rechtstexte (Inhalte von Jenny bzw. Rechtsgenerator, nicht selbst formulieren) |
| `/404` | Eigene Fehlerseite mit Weiterleitungs-Links |

**Umfang ist fest:** genau diese Seiten. Keine einzelnen Leistungsseiten je Leistung, keine FAQ-Seite, kein Blog. Neu gegenüber der alten Seite ist nur `/leistungen` (Entscheidung Max, Variante A): eine Seite mit den fünf Leistungstexten wörtlich aus `content/startseite.md`. Die Sektion `#leistungen` bleibt zusätzlich auf der Startseite. Alle anderen Slugs sind identisch mit der alten Seite.

**Navigation:** Leistungen (`/leistungen`), Über uns, Referenzen, Kontakt (als Button).

---

## 3. Konsistenz im Seitenaufbau und Scroll-Animationen

### 3.1 Seitenaufbau

- Ein gemeinsames `BaseLayout` mit Navigation (schwebende Glas-Pille), `<main>`, Footer. Footer immer im dunklen Thema.
- Jede Inhaltsseite besteht aus **Sektionen** mit demselben Gerüst: `Eyebrow` (kleine Kategorie), `h2`, optional `lead`, Inhalt. Vertikaler Abstand ausschließlich über `--section-y`, Seitenrand über `--gutter`, maximale Breite `--container-max`. Keine Einzel-Abstände pro Sektion.
- Abwechselnde Sektionshintergründe (`bg`, `bg-subtle`) in festem Rhythmus. Jede Seite endet mit dem CTA-Band, dann Footer.
- Pro Seite genau ein `h1`. Überschriften-Hierarchie lückenlos (`h1` → `h2` → `h3`).
- Buttons: ein primärer Button pro Sichtbereich (Lila), Sekundäres als Outline. Pfirsich nur für Akzent-CTAs auf Lila oder dunklem Grund.
- Alle Links mit sichtbarem Fokus, Mindest-Tippfläche 44 × 44 px.
- Responsive Breakpoints wie im Design System (991, 767, 479). Mobile zuerst prüfen.
- Hell/Dunkel: System-Einstellung als Standard, Umschalter in der Navigation, Wahl in `localStorage` merken (mit `try/catch`). Kein Aufblitzen des falschen Themes beim Laden (kleines Inline-Skript im `<head>`).

### 3.2 Scroll-Animationen (modern, ruhig, ein System)

Ein einziges, zentrales Animationssystem. Keine Einzellösungen pro Komponente.

- **Technik:** Bevorzugt CSS Scroll-driven Animations (`animation-timeline: view()`), mit `IntersectionObserver` als Fallback für Browser ohne Unterstützung. Keine schwere Bibliothek, kein Scroll-Hijacking, kein Smooth-Scroll-Plugin.
- **Nur `transform` und `opacity` animieren.** Nie `top`, `left`, `width`, `height`.
- **Progressive Enhancement:** Inhalte sind ohne JavaScript und ohne Animation sichtbar. Der Versteckt-Zustand (`opacity: 0`) wird erst gesetzt, wenn das Skript geladen ist (Klasse `js` am `<html>`). Crawler und Screenshots sehen immer den fertigen Inhalt.
- **Kein Layout-Shift:** Animierte Elemente reservieren ihren Platz. Ziel CLS unter 0,1.
- **`prefers-reduced-motion: reduce`** schaltet alles auf sofort sichtbar und ohne Bewegung (auch Marquee, Parallax, Hover-Bewegungen).

**Katalog (nur diese Effekte, über Attribute wie `data-anim="rise"` steuerbar):**

| Effekt | Verhalten | Einsatz |
| --- | --- | --- |
| `rise` | 16 px nach oben + einblenden, 0,6 s, `--ease-out` | Überschriften, Absätze, Karten |
| `stagger` | Kinder nacheinander, 60 ms Versatz, maximal 6 | Bento-Kacheln, Prozess-Schritte, Chips |
| `mask-reveal` | Textzeilen gleiten aus einer Maske | Nur `h1` im Hero |
| `parallax-soft` | Verlaufs-Blobs und Hero-Bild bewegen sich 20–40 px langsamer | Hero, CTA-Band |
| `scale-in` | Handy-Mockups fächern sich beim Einblenden auf | Reels-Sektion |
| `marquee` | Endlos-Laufband, pausiert bei Hover und Fokus | Leistungen, Kundenlogos |
| `count-up` | Zahl zählt hoch | **Nur** bei echten, belegten Zahlen |
| `progress-line` | Linie über den Prozess-Schritten füllt sich | Ablauf-Sektion |

Zusätzlich Mikro-Interaktionen (Button-Hover mit Glow, Kachel-Hover hebt 4 px, Pfeil verschiebt sich 3 px), alle in `--dur-1…3`.

**Nicht umsetzen:** 3D-Szenen, Cursor-Effekte, Seitenübergänge mit Wipes, horizontales Scroll-Jacking, automatisch abspielende Videos mit Ton, Animationen über 0,8 s.

Videos (Reels): muted, `playsinline`, `loop`, `preload="none"` mit Posterbild, laden erst im Sichtbereich, pausieren außerhalb. Selbst hosten oder über einen EU-konformen Dienst (Abschnitt 6).

---

## 4. SEO

### 4.1 Technische Basis

- Statisches HTML mit vollständigem Inhalt im Quelltext (kein Inhalt, der nur per JS erscheint).
- `<html lang="de-DE">`, semantische Elemente (`header`, `nav`, `main`, `section`, `article`, `footer`), ein `h1` je Seite.
- Saubere URLs, Kleinschreibung, keine Umlaute. **Trailing-Slash-Regel festlegen und konsequent** (Canonical, Sitemap, interne Links).
- Alte URLs, die wegfallen, per 301 auf die passende neue Seite. Liste der alten URLs liefert Max (Search Console oder Sitemap der alten Seite).
- `robots.txt`, `sitemap.xml` (automatisch, nur indexierbare Seiten, mit `lastmod`), eigene 404-Seite mit Status 404.
- Canonical auf jeder Seite (selbstreferenzierend). `noindex` für 404, Danke-Seiten und ggf. Rechtstexte nach Absprache.
- Favicons (SVG + PNG, `apple-touch-icon`), `manifest.webmanifest`, `theme-color` für Hell und Dunkel.
- Security- und Performance-Header in `_headers` (HSTS, `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, CSP, Cache-Control mit Hash-Dateinamen).

### 4.2 Meta-Daten

Jede Seite hat über ein zentrales `<SEO>`-Component:

- `<title>` (maximal 60 Zeichen, Muster: `Hauptbegriff | Nutzen – Marketing mit Jenny`), `meta description` (120–155 Zeichen, mit Handlungsaufforderung). Jede Seite einmalig.
- Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image` 1200 × 630, `og:locale=de_DE`) und Twitter Card (`summary_large_image`).
- OG-Bilder je Seite im Design System (Cover-Stil), automatisch generiert oder manuell, mit Alt-Text.
- Vorschlag Startseite: Title `Social-Media-Marketing für lokale Unternehmen | Marketing mit Jenny`, Description wie in der alten Seite (`Strategisches Social-Media-Marketing für lokale Unternehmen: Content-Erstellung, Community Management und Reporting. Jetzt kostenloses Erstgespräch vereinbaren!`). Prüfe Länge und schärfe nach.

### 4.3 Inhalt und interne Verlinkung

- Keyword-Recherche vor dem Schreiben der Meta-Daten: Liste je Seite (Haupt-, Neben-Suchbegriff, Suchintention) als `docs/keywords.md` vorschlagen. Max bestätigt. Schätze keine Suchvolumen, ohne Quelle zu nennen.
- Local-SEO-Signale: Standort ist **Geretsried** (Händelstraße 19, 82538 Geretsried), Einzugsgebiet `TODO:` (Jenny). Der alte Title von Über uns („Social-Media-Agentur Geretsried | Marketing mit Jenny“) bleibt erhalten. Name, Adresse, Telefon überall identisch. Google-Unternehmensprofil und Bing Places liegen außerhalb des Codes, stehen aber auf der Aufgabenliste für Max.
- Interne Links mit sprechendem Linktext (nicht „hier klicken“). Jede Seite ist von mindestens zwei anderen verlinkt. Breadcrumbs auf Unterseiten.
- Bilder: sprechender Dateiname, aussagekräftiger Alt-Text (Dekoratives `alt=""`), feste Maße, `loading="lazy"` unterhalb des Sichtbereichs, Hero-Bild mit `fetchpriority="high"` und Preload.

### 4.4 Core Web Vitals

Ziele (mobil, Lighthouse und Felddaten): **LCP unter 2,5 s, INP unter 200 ms, CLS unter 0,1**, Lighthouse Performance/SEO/Best Practices/Accessibility je mindestens 95. Schriften als `woff2` mit `font-display: swap` und `size-adjust`-Fallback, nur benötigte Schnitte und Zeichensätze. Kritisches CSS inline, Rest nicht blockierend.

### 4.5 Strukturierte Daten (JSON-LD)

Pro Seite aus einer zentralen Funktion erzeugt, valide gegen Schema.org:

- Global: `Organization` bzw. `ProfessionalService` (Name, URL, Logo, `sameAs` mit Instagram und LinkedIn, Kontakt, Einzugsgebiet `areaServed`), `WebSite`, `Person` (Jennifer Pelka, `jobTitle`, `worksFor`, `sameAs`).
- `BreadcrumbList` auf Unterseiten, `Service` je Leistungsseite, `FAQPage` wo FAQ-Inhalte stehen, `Article` nur falls ein Blog entsteht.
- Nur Daten markieren, die auch sichtbar auf der Seite stehen. Keine erfundenen Bewertungen (`AggregateRating` nur mit echten, belegbaren Daten).

### 4.6 Messung und Betrieb

- Search Console und Bing Webmaster Tools einrichten (Verifizierung per DNS oder Meta-Tag, kein Tracking-Skript nötig).
- Lighthouse CI und ein Link-Check im Build. Build bricht ab bei: fehlendem Title/Description, doppeltem `h1`, Bild ohne Alt, defektem internen Link.

---

## 5. AEO / GEO (Antwortmaschinen und KI-Suche)

Ziel: Die Seite wird von Google AI Overviews, ChatGPT, Perplexity, Claude und Co. als Quelle verstanden und zitiert. Vieles davon ist gute Heuristik und nicht belegt. Setze es um, miss es (siehe unten) und passe es an.

**Inhalt**

- **Antwort zuerst:** Jede Seite und jede `h2`-Sektion beginnt mit 1–3 Sätzen, die die Frage direkt beantworten (ca. 40–60 Wörter), danach Details.
- Überschriften als Fragen, wo Menschen so suchen („Was kostet Social-Media-Betreuung für lokale Unternehmen?“). Sonst klare Aussagen.
- FAQ: **nicht im Umfang**, da nur bestehende Inhalte übernommen werden. Später als Startseiten-Sektion möglich, wenn Jenny Fragen liefert.
- Listen für Schritte, Tabellen für Vergleiche (z. B. „Was ist inklusive“), kurze Absätze, definierte Fachbegriffe beim ersten Auftreten.
- Eindeutige Selbstbeschreibung („Wer ist Marketing mit Jenny, was wird gemacht, für wen, wo“) im ersten Sichtbereich und auf `/ueber-uns`. Entitäten konsistent benennen (Firmenname, Personenname, Leistungsnamen immer gleich).
- E-E-A-T: Autorin sichtbar (Jennifer Pelka mit Foto, Kurzprofil), echte Referenzen mit Namen und Ergebnissen, Datum der letzten Aktualisierung (`dateModified`) auf inhaltlichen Seiten. Zahlen nur mit Quelle oder Beleg.

**Technik**

- Vollständiger Inhalt im serverseitig erzeugten HTML (Crawler führen oft kein JS aus).
- Schema.org wie in 4.5, inklusive `FAQPage`. Hinweis: Google zeigt FAQ-Rich-Results seit 2023 nur noch für wenige Seitentypen, die Auszeichnung hilft aber beim Verständnis durch Maschinen. `HowTo`-Rich-Results gibt es nicht mehr, dafür nutzbar für Prozessbeschreibung nur, wenn sie semantisch passt.
- **`robots.txt` mit bewusster Entscheidung für KI-Crawler.** Voreinstellung (Max bestätigt): Such- und Zitier-Crawler **erlauben** (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Googlebot`, `Bingbot`). Trainings-Crawler (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`) als Option dokumentieren, Standard: erlauben, solange kein Grund dagegen spricht. Für Kunden-Ergebnisse und Rechtstexte keine Sperre nötig.
- `llms.txt` im Root als kurze Markdown-Übersicht (Wer, Was, wichtigste URLs) anlegen. Aufwand gering, Nutzen bislang nicht belegt, daher nur zusätzlich, nicht als Ersatz für gutes HTML.
- Schnelle Seite, stabile URLs, Sitemap mit `lastmod`, keine Inhalte hinter Login oder Cookie-Wand (CMP darf Inhalt nicht verdecken, den Crawler sehen sollen).

**Messung (manuell, ohne Tracking-Zusatz)**

- `docs/aeo-testprompts.md`: 15–20 Fragen, die Zielkunden stellen würden („Welche Agentur macht Social Media für Handwerker in …“). Monatlich in ChatGPT, Perplexity, Google AI Overviews prüfen und festhalten, ob die Seite genannt oder zitiert wird.
- Auswertung von Verweisen aus KI-Diensten in der gewählten datenschutzfreundlichen Statistik (Referrer wie `chatgpt.com`, `perplexity.ai`).

---

## 6. Datenschutz und Einwilligung (CMP)

Rechtsrahmen: DSGVO und **§ 25 TDDDG** (Einwilligung für Speichern und Auslesen auf Endgeräten, außer unbedingt erforderlich). Dieses Briefing ist keine Rechtsberatung. Rechtstexte und die finale Bewertung prüft eine fachkundige Stelle.

### 6.1 Grundprinzip: so wenig Drittkontakt wie möglich

Eine Seite ohne Drittanbieter und ohne nicht notwendige Cookies braucht gar kein Banner. Das ist das Ziel für den Start.

- **Schriften selbst hosten** (`woff2` im Repo, z. B. über Fontsource). Keine Verbindung zu `fonts.googleapis.com` oder `fonts.gstatic.com` (IP-Übermittlung, in Deutschland bereits abgemahnt).
- **Keine externen CDNs** für Skripte, Styles, Bilder, Icons. Alles aus der eigenen Domain.
- **Videos** (Reels): selbst gehostet oder bei EU-Dienst mit AVV. Kein Cloudinary, YouTube, Vimeo oder Instagram-Embed ohne Einwilligung. Für Social-Embeds gilt **Zwei-Klick-Lösung** (Platzhalter mit Hinweis, Laden erst nach Klick und Einwilligung, `youtube-nocookie.com` nur als Zusatz).
- **Statistik:** Standard ist **keine** oder eine cookiefreie, datensparsame Messung ohne Geräte-Speicherung (z. B. selbst gehostetes Umami oder Plausible/Matomo in EU-Hosting). Ob dafür eine Einwilligung nötig ist, hängt von der Konfiguration ab und wird dokumentiert und rechtlich bestätigt. Kein Google Analytics, Meta-Pixel, TikTok-Pixel oder Hotjar ohne ausdrückliche Freigabe von Max.
- **Kontaktformular:** Verarbeitung in der EU, AVV, Zweckbindung, Hinweis auf die Datenschutzerklärung am Formular, Einwilligung nicht vorangekreuzt, Spam-Schutz ohne Google reCAPTCHA (z. B. Honeypot, Zeitprüfung oder ein selbst gehostetes Proof-of-Work-Captcha wie Altcha). E-Mail-Adresse nicht im Klartext einbetten (Spam).
- **Karten, Kalender-Buchung, Chat-Widgets:** nur nach Einwilligung laden, mit Zwei-Klick-Platzhalter.

### 6.2 CMP-Auswahl (kostenlos zuerst)

Du erstellst vor dem Einbau eine kurze Entscheidungsvorlage. Mein Vorschlag:

| Option | Kosten | Stärken | Grenzen |
| --- | --- | --- | --- |
| **Klaro** (Open Source, selbst gehostet) | kostenlos | Keine Drittverbindung, volle Kontrolle über Texte und Design, unterstützt Google Consent Mode v2, blockiert Skripte bis zur Einwilligung | Kein Rechtstext-Pflegeservice, Einwilligungs-Nachweis (Consent-Log) musst du selbst lösen |
| **vanilla-cookieconsent** (orestbida, MIT) | kostenlos | Sehr klein und schnell, gut anpassbar, Kategorien und Revisions-Verwaltung | Ebenfalls kein Nachweis-Server |
| **Cookiebot** (Free-Tarif) | kostenlos für 1 Domain bis ca. 50 Unterseiten | Automatischer Cookie-Scan, Nachweis, Consent Mode | US-nahes Unternehmen (Usercentrics-Gruppe), Limits prüfen, Branding-Hinweise |
| **consentmanager** | Einstiegs-Tarif kostenlos mit Limits | Deutscher Anbieter, Nachweis inklusive | Limits und Funktionsumfang vor Einsatz prüfen |
| **Usercentrics** | kostenpflichtig | Marktführer, rechtssicher dokumentiert, Support | Kosten, Drittanbieter-Skript |

**Empfehlung:** Für diese Seite **Klaro oder vanilla-cookieconsent**, selbst gehostet, wenn überhaupt Drittdienste eingebunden werden. Wird der Start ohne Tracking und ohne Embeds gemacht, ist zunächst nur ein dezenter Link „Datenschutz“ nötig, und die CMP wird erst mit dem ersten einwilligungspflichtigen Dienst ergänzt. Wechsel auf Cookiebot oder Usercentrics ist ein späterer Schritt, falls Nachweis und Pflege ausgelagert werden sollen.

### 6.3 Anforderungen an jede Umsetzung

- **Vorherige Blockierung:** Nicht notwendige Skripte, Iframes und Cookies werden erst nach Einwilligung geladen (`type="text/plain"` bzw. Dienst-Konfiguration). Prüfung im Netzwerk-Tab: vor Klick keine Anfragen an Dritte.
- **Gleichwertige Buttons** „Alle akzeptieren“, „Nur notwendige“ (Ablehnen) und „Einstellungen“ auf erster Ebene, gleiche Größe und Hervorhebung. Keine Dark Patterns, keine vorausgewählten Kategorien, keine Cookie-Wand.
- **Granulare Auswahl** nach Zweck (Notwendig, Statistik, Marketing, Externe Medien), Dienste einzeln benannt mit Anbieter, Zweck, Speicherdauer, Empfängerland.
- **Widerruf jederzeit:** Dauerhafter Link „Cookie-Einstellungen“ im Footer und in der Datenschutzerklärung.
- **Nachweis:** Zeitpunkt, Version des Banners und Auswahl protokollieren (bei Selbst-Hosting eigene, datensparsame Lösung, ohne IP-Speicherung) oder CMP mit Nachweisfunktion wählen.
- **Google Consent Mode v2** (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`) mit Standard `denied`, sobald Google-Dienste eingesetzt werden.
- **Design:** Banner im Design System (beide Themes), barrierefrei (Fokusfalle, Tastatur, Kontrast, Screenreader-Beschriftung), mobil nicht bildschirmfüllend.
- Wahl in `localStorage` oder Cookie mit begrenzter Laufzeit (maximal 6–12 Monate), Neuabfrage bei geänderten Diensten.

### 6.4 Rechtstexte und Pflichtangaben

- **Impressum** (§ 5 DDG): Name, ladungsfähige Anschrift, E-Mail, Telefon oder gleichwertiger schneller Kontakt, ggf. USt-IdNr. Angaben liefert Jenny. Du erfindest nichts.
- **Datenschutzerklärung:** Entwurf aus einem Rechtsgenerator oder von einer Fachperson. Muss die tatsächlich eingesetzten Dienste enthalten (Hosting, Formular, Statistik, Schriften, Videos, CMP, Social-Links). Du lieferst eine **Inventarliste aller Drittkontakte** (`docs/datenschutz-inventar.md`) als Grundlage.
- Social-Media-Links (Instagram, LinkedIn) als einfache Links ohne Einbettung und ohne Plugins.
- AVV mit Hosting und Formular-Anbieter, Verzeichnis von Verarbeitungstätigkeiten liegt bei Jenny.

### 6.5 Barrierefreiheit (Pflicht für den Anspruch, kein Extra)

Ziel WCAG 2.2 AA: Kontraste (im Design System geprüft), Tastaturbedienung, Fokus sichtbar, Skip-Link, `aria-current`, Formularlabels und Fehlermeldungen, Videos mit Untertiteln, keine reine Farbcodierung. Das Barrierefreiheitsstärkungsgesetz betrifft viele Kleinstunternehmen nicht direkt, die Umsetzung ist trotzdem Qualitätsmerkmal und gut für SEO.

---

## 7. Inhalte, die noch fehlen (Aufgabenliste für Max und Jenny)

- Foto von Jennifer Pelka (Hero), Teamfotos, Referenz-Mockups, Reels als Video-Dateien mit Poster und Untertiteln
- Kundenlogos mit Nutzungserlaubnis, Zitate, belegbare Zahlen
- Logo als SVG sowie helle Variante für dunklen Grund
- Offene Punkte aus `content/README.md` (Alt-Texte, h1 Referenzen, Wir-Form auf Kontakt)
- Einzugsgebiet (Ort, Telefon und Impressum liegen in `/content/` vor)
- Neu generierte Datenschutzerklärung (alte nennt Strato statt Webflow und ist unvollständig)
- Ziel des Kontaktformulars (E-Mail-Postfach, Kalender-Buchung), Hosting-Entscheidung, Domain-Zugang
- Liste der alten URLs aus der Search Console (alle Haupt-Slugs bleiben gleich; prüfen, ob es weitere indexierte URLs gibt)
- Entscheidung zu Statistik (keine, Umami, Plausible, Matomo) und zu KI-Crawlern

---

## 8. Reihenfolge der Umsetzung

1. **Fundament:** Repo, Astro, Tokens/CSS aus dem Design System, Layout, Navigation, Footer, Theme-Umschalter, selbst gehostete Schriften, `<SEO>`-Component.
2. **Komponenten:** Button, Badge, Bento, Prozess, Marquee, Handy-Mockup, CTA-Band, FAQ-Akkordeon, Formular, jeweils mit Hell/Dunkel und Animationsattribut.
3. **Animationssystem** (Abschnitt 3.2) zentral, dann auf Komponenten anwenden.
4. **Startseite** gemäß `/reference/startseite-neu.html` mit echten Inhalten und Medien.
5. **Unterseiten**, Rechtstexte, 404, Weiterleitungen.
6. **SEO/AEO:** Meta, JSON-LD, Sitemap, robots, `llms.txt`, FAQ-Inhalte.
7. **Datenschutz:** Inventar, Netzwerk-Prüfung, CMP falls nötig, Datenschutz-Seite verlinken.
8. **QA** (Abschnitt 9), Deploy-Doku, Übergabe.

---

## 9. Definition of Done (Checkliste je Phase und am Ende)

**Technik und Design**

- [ ] Alle Seiten in Hell und Dunkel, bei 360, 768, 1280 und 1920 px ohne horizontales Scrollen
- [ ] Nur Tokens aus dem Design System, keine Hex-Werte im Komponenten-CSS
- [ ] Gleiches Sektionsgerüst, Abstände nur über `--section-y` und `--gutter`
- [ ] Animationen nur aus dem Katalog, mit `prefers-reduced-motion` getestet, Inhalt ohne JS sichtbar
- [ ] Lighthouse mobil: Performance, Accessibility, Best Practices, SEO je mindestens 95; LCP unter 2,5 s, CLS unter 0,1

**SEO und AEO**

- [ ] Einmaliger Title und Description je Seite, Canonical, OG und Twitter Card, ein `h1`
- [ ] `sitemap.xml`, `robots.txt`, `llms.txt`, 404 mit Status 404, 301-Weiterleitungen getestet
- [ ] JSON-LD validiert (Schema.org Validator und Rich-Results-Test), nur sichtbare Inhalte
- [ ] Alle Texte aus `/content/` wörtlich und in der dortigen Reihenfolge übernommen
- [ ] Bilder mit Alt-Text, Maßen und modernen Formaten

**Datenschutz**

- [ ] Netzwerk-Tab vor jeder Einwilligung: **keine** Anfragen an Drittdomains
- [ ] Keine Google-Fonts-, CDN-, Cloudinary-, YouTube- oder Pixel-Verbindungen ohne Einwilligung
- [ ] Falls CMP: gleichwertige Buttons, Widerruf im Footer, Consent Mode `denied` als Standard, Banner barrierefrei
- [ ] `docs/datenschutz-inventar.md` vollständig, Impressum und Datenschutz mit echten Angaben, Formular mit Hinweis
- [ ] Security-Header gesetzt

**Übergabe**

- [ ] `README.md` mit Start, Build, Deploy, Inhaltspflege
- [ ] Liste aller offenen `TODO:`-Platzhalter

---

## 10. Start-Prompt für Claude Code (zum Kopieren)

```
Lies BRIEFING.md vollständig sowie /design-system/README.md und /reference/.
Fasse in höchstens 15 Zeilen zusammen, was du verstanden hast, nenne deine
Annahmen und stelle alle offenen Fragen gesammelt (Hosting, Statistik, Formular-Ziel,
KI-Crawler, fehlende Inhalte). Schreibe danach einen Umsetzungsplan nach Abschnitt 8.
Beginne erst mit Code, wenn ich den Plan bestätigt habe. Beginne dann mit Phase 1
und melde dich nach jeder Phase mit der Checkliste aus Abschnitt 9.
```
