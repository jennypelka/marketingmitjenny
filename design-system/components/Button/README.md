Buttons lösen genau eine Aktion aus, ein Primary-Button pro Bildschirmbereich. Alle sind Pillen, 48px hoch.

**Varianten.** `mj-btn` ist der Primary-Button in `brand-action` (weißer Text hell, dunkler Text im dunklen Thema). `mj-btn--accent` in Pfirsich für Abschlussbänder und dunkle Flächen. `mj-btn--outline` für zweite Aktionen, `mj-btn--ghost` für „Log in“. `mj-link` für Links im Text in `brand-text`.

**Größen.** `mj-btn--lg` (56px) im Hero und CTA-Band, Standard 48px, `mj-btn--sm` (40px) in der Navigation.

**Bewegung.** Beim Hover hebt sich der Button um 2px und leuchtet in `shadow-glow`, ein Pfeil-Icon rückt 3px vor. Nur transform und Schatten, 0,3s. Mit `prefers-reduced-motion` entfällt die Bewegung.

**Fokus.** 2px Outline in `focus` mit 3px Abstand.

**Der Nutzer liefert:** Beschriftung als Verb oder Verb-Objekt, ohne Punkt. `<a>` für Navigation, `<button>` für Aktionen.

Tokens: `brand-action`, `brand-on-action`, `accent`, `border-control`, `radius-pill`, `shadow-glow`, `button`.
