Schwebende Navigationsleiste in Pillenform mit Glaseffekt. Sie bleibt beim Scrollen oben stehen und lässt Inhalt durchschimmern.

**Aufbau.** Logo (`assets/Logos`, 44px) links, rechts „Über uns“, „Referenzen“, „Log in“ und „Kontakt“ als Primary-Button in klein. Aktive Seite als Pille in `wash`. Hintergrund `surface` zu 80 %, Blur 16px, Rand `border`, `shadow-md`.

**Responsiv.** Unter 991px bleibt nur die aktive Seite sichtbar, die übrigen Links wandern in ein Menü, das als Karte unter der Leiste öffnet. Das Menü-Icon braucht eine Beschriftung für Screenreader.

**Der Nutzer liefert:** `aria-current="page"` auf dem aktiven Link, Logo als Link zur Startseite.

Tokens: `surface`, `border`, `wash`, `wash-fg`, `hover`, `nav-height`, `shadow-md`, `radius-pill`.
