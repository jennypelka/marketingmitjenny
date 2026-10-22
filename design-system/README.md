# Marketing mit Jenny

Design System für marketingmitjenny.de, den Social-Media-Marketing-Auftritt von Jennifer Pelka für lokale Unternehmen. Version 2 ist die aufgeräumte und modernisierte Fassung des Bestands und die Grundlage für den Neubau der Website.

**Herkunft und Stand.** Die Werte stammen aus dem Webflow-Stylesheet der bestehenden Seite, dem Logo und einer Recherche zu aktuellen Agentur-Websites (siehe unten). Der Name „Marketing mit Jenny“ ist aus der Domain abgeleitet, die Wortmarke schreibt sich „marketingmitjenny“.

## Was sich gegenüber Version 1 geändert hat

**Aufgeräumt**

- **Eine Neutral-Skala statt zwölf Grautönen.** Die Skala `ink-50` bis `ink-900` ist leicht violett getönt und passt zum Lila der Marke. Template-Reste (Radiant-Blau, Webflow-Blau, `surface-soft`, `border-soft`, `gray-25`, `purple-25`, `purple-500`) sind entfernt.
- **Primitive und semantische Farben getrennt.** Komponenten nutzen nur semantische Tokens (`bg`, `surface`, `fg`, `brand-action`, `wash` …). Dadurch wechselt ein Bereich mit `data-theme="dark"` das Thema, ohne dass Komponenten sich ändern.
- **Ein Abstandsraster** aus 4 und 8px: `space-1` (4px) bis `space-10` (128px). Sektionsabstand und Seitenrand sind fluid (`--section-y`, `--gutter`).
- **Eine Schriftfamilie weniger.** Outfit aus dem Template entfällt. Es gelten zwei Familien: Bricolage Grotesque für Überschriften, Inter für Text.
- **Eine Rundungsskala:** 8, 12, 20 und 28px, Pille, Kreis und die Signaturrundung des Hero-Bilds.
- **Fokus und Kontrast** sind jetzt Teil der Tokens (siehe Barrierefreiheit).

**Moderner** (abgeleitet aus der Recherche)

- Größere Typografie: Hero bis 96px, enger gesetzt, mit Marker unter einem Wort.
- Pillenformen für Buttons, Navigation und Badges, schwebende Navigationsleiste mit Glaseffekt.
- Bento-Raster statt gleich großer Karten, Laufband, Ablauf auf einer Linie, Abschlussband.
- Weiche Farbflecken und Verläufe aus Lila und Pfirsich statt harter Flächen.
- Ruhige Bewegung: Lift und Glow am Button, Pfeil rückt vor, Kacheln heben sich. Nur transform und opacity.
- Dunkles Thema für Footer und Abschnitte mit Betonung.

### Alte und neue Tokens

| Bisher | Jetzt |
| --- | --- |
| `gray-900`, `black` | `ink-900` (`fg`) |
| `gray-700`, `gray-500` | `ink-700` (`fg-soft`), `ink-500` (`fg-muted`) |
| `gray-300`, `gray-200` | `ink-400` (`border-control`), `ink-200` (`border`) |
| `gray-50`, `gray-25`, `surface-soft` | `ink-50` (`bg-subtle`) |
| `purple-600` als Button | `purple-650` (`brand-action`), `purple-600` bleibt `brand` für Flächen |
| `purple-800` | `purple-700` (`brand-text`) |
| `lilac-wash` | `purple-100` (`wash`) |
| `space-2xs` bis `space-3xl`, `section-y` | `space-2` bis `space-10`, `--section-y` fluid |
| `radius-md` 8px, `radius-xl` 16px | `radius-sm` 8px, `radius-lg` 20px |
| `h-display`, `h-section`, `h-card` … | `display-xl`, `h1` bis `h4` |

## Recherche: Was starke Agentur-Websites 2026 tun

Gesichtet wurden Ranking- und Trendartikel sowie die Startseiten einzelner Agenturen. Die Quellen beschreiben Aufbau, Typografie und Bewegung, aber kaum exakte Farbwerte. Übernommen sind deshalb Prinzipien, keine fremden Designs oder Farben.

- **Typografie als Hero.** Sehr große Headlines ersetzen das Stockfoto, dazu höchstens zwei Schriftfamilien und variable Schriften (Trendartikel von [Line25](https://line25.com/articles/web-design-trends-2026/) und [Bellaworks](https://bellaworksweb.com/website-design-trends-2026/)). Die Award-Gewinner By-Kin und Mat Voyce arbeiten typografisch geführt (laut [Hon Tran](https://www.hontran.dev/blog/best-award-winning-websites-2026)). Wir gehen bis 96px statt 150px, weil die Zielgruppe lokale Unternehmen sind und Lesbarkeit vor Show steht.
- **Bento-Raster.** Modulare Kacheln, je eine Aussage, sind der Standard für Leistungs- und Feature-Seiten ([Line25](https://line25.com/articles/web-design-trends-2026/)).
- **Haltung statt Leistungsliste.** Huge führt mit einer Haltung und Ergebnissen statt mit einer Liste von Leistungen ([Krishaweb](https://www.krishaweb.com/blog/best-creative-agency-websites/)). Daher die Headline mit Marker und wenige, klare Aufrufe.
- **Menschliche Sprache und knapper Prozess.** Ueno schreibt freundlich und konkret, Koto hält die Prozess-Sektion kurz (Krishaweb). Daher bleibt der Ablauf bei vier kurzen Schritten.
- **Laufband mit Namen.** Ueno zeigt Kundennamen als durchlaufende Zeile ([Ueno](https://ueno.co/)). Das Laufband übernimmt das Prinzip für Leistungen und später Kunden.
- **Case-Karten und Video.** We Are Social führt mit Videoheader und einem Karussell aus Fallstudien mit Kategorie, Kunde und Teaser ([We Are Social](https://wearesocial.com/)). Hello Monday zeigt ein ruhiges Loop-Video über dem Raster ([Hello Monday](https://www.hellomonday.com/)). Für eine Video-Agentur ist das der nächste Baustein (siehe Offen).
- **Bewegung mit Zweck.** Mikro-Interaktionen, Scroll-Reveals und sparsames Parallax, nur über transform und opacity (Line25, Bellaworks).
- **Kontrast in den Tokens.** Barrierefreie Farbsysteme gelten 2026 als Standard und führen zu mutigeren Paletten (Line25).
- **Vorsicht bei Hype.** Schweres 3D, Anti-Design und Experimentalnavigation bleiben draußen: Sie passen zu Studios, nicht zu lokalen Dienstleistern (Bellaworks).

## Inhalt und Ton

Die Marke spricht lokale Unternehmerinnen und Unternehmer direkt und sachlich an.

- **Anrede:** immer „Sie“. Wir sprechen als „wir“, nie als „ich“.
- **Satzbau:** kurze Sätze, Ergebnis vor Methode. „Einzigartiger Social-Media-Auftritt für Ihr Unternehmen“ steht vor jeder Erklärung.
- **Positionierung:** „Strategisches Social-Media-Marketing für lokale Unternehmen“ bleibt Tagline und Meta-Beschreibung.
- **Aufruf:** ein klarer Schritt, meist „Kontakt aufnehmen“. Das Erstgespräch ist kostenlos und wird genannt.
- **Überschriften:** Nomen oder Frage, keine Ausrufezeichen, keine erfundenen Zahlen.
- **Emojis:** Im Web ersetzt ein einheitlicher Icon-Chip die Emojis aus den Leistungstiteln. In Social-Media-Texten bleiben sie Teil des Tons.
- **Korrektur:** In „Warum jedes Unternehmen einen einzigarten Social-Media-Auftritt haben sollte“ fehlt ein „ig“ („einzigartigen“). Beim Neubau korrigieren.

## Visuelle Grundlagen

**Farbe.** Weißer Grund mit zart lila getönten Sektionen, tief violettschwarzer Text, Lila als Markenfarbe und Pfirsich als Akzent. Die Logofarben sind `purple-600` (#ac55f9) und `peach-300` (#ffc68b). Flächen und Verläufe nutzen `brand` (#ac55f9), Buttons und Flächen mit weißem Text nutzen `brand-action` (#9a3fe8), Text in Lila nutzt `brand-text` (#6b36c2). Pfirsich trägt immer dunklen Text.

**Schrift.** Bricolage Grotesque in 600 und 700 für Überschriften (enger Zeilenabstand, negative Laufweite), Inter in 400 bis 600 für Text. Beide laufen über Google Fonts. Größen sind fluid über `clamp()` in `bundle.css`, die Tokenwerte sind das Desktop-Maximum.

**Form.** Pillen für alles Klickbare, 20px für Karten, 28px für große Flächen. Die Signatur bleibt: Das Hero-Bild hat nur oben links eine große Rundung (`radius-hero`).

**Raum.** Inhalt höchstens 76rem breit, Seitenrand fluid 1 bis 2rem, Sektionen 4 bis 7rem Luft oben und unten. Bento-Lücke 16px, Sektionslücke 32px.

**Tiefe.** Violett getönte, weiche Schatten (`shadow-sm` bis `shadow-lg`) und ein Glow unter dem Primary-Button. Haarlinien in `border` statt harter Rahmen.

**Verläufe.** Zwei Verläufe, beide in `bundle.css`: `--grad-brand` von `purple-700` nach `purple-650` für dunkle Flächen mit weißem Text, `--grad-warm` von Lila nach Pfirsich für Platzhalter und Medienrahmen. Darauf kein Text.

**Bewegung.** `--ease-out` für alles, `--dur-1` 0,15s (Farbe), `--dur-2` 0,3s (Hover), `--dur-3` 0,6s (Einblenden). Animiert werden nur transform und opacity. `prefers-reduced-motion` schaltet Bewegung ab, das Laufband steht dann still.

**Dunkles Thema.** Jeder Bereich mit `data-theme="dark"` wechselt auf `night-950` mit hellem Text. Dort bekommt der Primary-Button helles Lila (`purple-400`) mit dunklem Text. Das Logo ist auf Dunkel nicht geprüft; eine helle Fassung wäre besser.

## Komponenten

| Komponente | Zweck |
| --- | --- |
| Button | Primary, Accent, Outline, Ghost, Link in drei Größen. |
| Input | Textfeld, Bereich, Checkbox, Hilfe und Fehler. |
| Navbar | Schwebende Pille mit Glaseffekt. |
| HeroHeader | Headline mit Marker, Bild mit Rundung, schwebende Chips. |
| BentoGrid | Leistungen als Kacheln in gemischten Größen. |
| ProcessSteps | Ablauf in vier Schritten auf einer Linie. |
| Marquee | Laufband für Leistungen oder Kundennamen. |
| CtaBand | Abschlussband mit Verlauf und einem Button. |
| Badge | Pille mit Punkt. |
| Footer | Dunkler Seitenabschluss. |
| PhoneMockup | Rahmen für Kurzvideos, einzeln oder gefächert. |

Die Klassen stehen in `components/bundle.css`, Präfix `mj`. Sie nutzen nur Variablen aus `tokens.css`.

## Barrierefreiheit

- **Weißer Text auf Lila:** `purple-600` erreicht 3,9:1. Darum steht auf Buttons und Flächen mit Text `purple-650` (4,9:1). `purple-600` bleibt für Flächen ohne Text, Linien und Verläufe.
- **Text in Lila:** `brand-text` (7,2:1 auf Weiß).
- **Pfirsich:** immer mit `ink-900` (12,2:1), nie mit Weiß (1,5:1).
- **Fokus:** 2px-Outline in `focus` mit 3px Abstand, im dunklen Thema in Pfirsich.
- **Eingabefelder:** Rand mit mindestens 3:1 gegen den Grund (`border-control`).
- **Bewegung:** abschaltbar, kein Inhalt nur in Bewegung.
- **Logo:** Der Pfirsich-Teil des Logos hat auf Weiß wenig Kontrast. Das ist Teil der Marke, ein Alternativtext ist Pflicht.

## Assets

- **Logo:** `assets/Logos/marketingmitjenny-logo.png` (Kamera mit handgeschriebenem „J“ und Wortmarke, transparent, 494 × 350px) und `marketingmitjenny-mark.png` (nur die Kamera). Die Wortmarke schreibt sich klein und zusammen, „marketingmit“ im Lila-Verlauf, „jenny“ in Pfirsich. Mindesthöhe 44px. Nicht umfärben oder strecken. Eine SVG-Fassung wäre für den Neubau besser.
- **Icons:** keine Bibliothek im Bestand. Die Vorschauen nutzen Strichicons (24px, 2px). Für den Neubau eine Bibliothek festlegen, zum Beispiel Lucide.
- **Fotos und Videos:** Porträt, Mockups, Kundenlogos und Videos aus dem Bestand übernehmen. Videos liegen bei Cloudinary.

## Regeln für den Neubau

- Ein Primary-Button pro Bildschirmbereich, zweite Aktionen als Outline oder Ghost.
- Abstände nur aus `space-*`, Rundungen nur aus `radius-*`, Farben nur über semantische Tokens.
- Höchstens ein Markenverlauf und eine Pfirsich-Kachel pro Sektion.
- Marker in der Headline nur unter einem Wort.
- Keine Textflächen auf Verläufen, die nicht in `bundle.css` stehen.
- Bilder und Videos mit Alternativtext, Videos ohne Autoplay mit Ton.

## Offen

- **Fallstudien-Karten und Video-Header** nach dem Vorbild von We Are Social und Hello Monday, sobald Referenzmaterial vorliegt.
- **Helle Logofassung** für dunkle Flächen und **SVG-Logo**.
- **Echte Kennzahlen** für Chips und Hero, sobald Jenny belegbare Zahlen freigibt.
- **Kundenlogos** für das Laufband mit Freigabe der Kunden.
