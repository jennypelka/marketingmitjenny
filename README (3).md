Leistungen als Bento-Raster: Kacheln in unterschiedlichen Größen und Farben statt gleich großer Karten. Ersetzt die frühere ServiceCard.

**Aufbau.** Sechs Spalten, `space-4` Abstand. Eine große Kachel (`mj-tile--w4`, Markenverlauf, weißer Text) für die Hauptleistung, danach Kacheln mit zwei Spalten in `bg-subtle`, `accent` und `wash`. Jede Kachel hat einen runden Icon-Chip, einen Titel in `h3` und einen Satz Text. Radius `radius-lg`, Mindesthöhe 15rem, beim Hover hebt sie sich um 4px.

**Regeln.** Höchstens eine Kachel im Markenverlauf und eine in Pfirsich pro Raster. Icons im gleichen Strichstil (24px, 2px). Titel nennen die Leistung, Texte den Nutzen.

**Responsiv.** Unter 991px zwei Spalten, unter 767px eine.

Tokens: `bg-subtle`, `accent`, `wash`, `radius-lg`, `h3`, `space-4`, `shadow-md`.
