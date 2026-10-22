Formularfelder für Kontakt und Erstgespräch, 48px hoch, mit sichtbarer Beschriftung über dem Feld.

**Aufbau.** `mj-field` gruppiert `mj-label`, `mj-input` und optional `mj-help` oder `mj-error`. Rand `border-control` (3:1 gegen den Grund), Rundung `radius-md`, Fläche `surface`. Platzhalter in `fg-muted`, nie als Ersatz für die Beschriftung.

**Fokus.** Rand wechselt auf `brand-action`, dazu ein 2px-Outline in `focus`.

**Fehler.** Rand und Text in `danger-fg`, Text in 14px/600 mit konkretem Hinweis, was zu korrigieren ist. `aria-invalid` und `aria-describedby` setzen.

**Checkbox.** 20px, `radius-sm`, aktiv in `brand-action` mit weißem Haken.

Tokens: `border-control`, `surface`, `danger-fg`, `focus`, `radius-md`, `label`.
