#!/bin/bash

cd /home/c4rnage/projects/forms-app-web || exit 1 # Esta linea debe ser cambiada por la ruta del proyecto

echo "user: $(git -C ./ config user.name)"
echo "branch: $(git -C ./ rev-parse --abbrev-ref HEAD)"
echo "[$(date '+%Y-%m-%d %H:%M:%S')]"
echo "-----"
echo "[+] Fetching latest changes from Git..."
git fetch
echo "[+] Pulling latest changes from Git..."
git pull
echo "[+] Code synchronization complete!"
echo ""