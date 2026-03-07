#!/bin/bash

echo "user: $(git -C ./ config user.name)"
echo "branch: $(git -C ./ rev-parse --abbrev-ref HEAD)"
echo "[$(date '+%Y-%m-%d %H:%M:%S')]"
echo "-----"
echo "Pulling latest changes from Git..."
git fetch
git pull
echo "Code synchronization complete!"
echo ""