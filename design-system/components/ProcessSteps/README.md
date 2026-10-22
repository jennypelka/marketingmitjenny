Der Ablauf in vier Schritten auf einer durchgehenden Linie. Ersetzt die frühere StepNumber-Kachel.

**Aufbau.** Pro Schritt eine Ziffer in `numeral` (64px, `brand-text`), Titel in `h4` und ein Satz. Über jedem Schritt sitzt ein Punkt in `brand` auf einer 2px-Linie in `border`. Die Reihenfolge ist Information, deshalb nur hier Ziffern verwenden.

**Responsiv.** Vier Spalten, ab Tablet zwei, mobil eine.

**Der Nutzer liefert:** die Ziffern als dekorativen Text (`aria-hidden`), weil der Titel die Reihenfolge nennt. Besser eine geordnete Liste (`<ol>`) verwenden.

Tokens: `numeral`, `brand-text`, `brand`, `border`, `h4`, `space-6`.
