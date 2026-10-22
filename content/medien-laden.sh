#!/usr/bin/env bash
# Lädt alle Bilder und Videos der alten Seite nach content/media/.
# Einmal lokal ausführen, SOLANGE Webflow und Cloudinary noch laufen:
#   bash content/medien-laden.sh
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p media
tail -n +2 medien.csv | while IFS=, read -r name use url; do
  echo "→ $name"
  curl -fsSL "$url" -o "media/$name"
done
echo "Fertig: $(ls media | wc -l) Dateien in content/media/"
