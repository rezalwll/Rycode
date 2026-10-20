#!/usr/bin/env bash
set -euo pipefail
umask 077
destination="${1:-./backups/$(date -u +%Y%m%dT%H%M%SZ)}"
mkdir -p -- "$destination"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T db pg_dump -U rycode -d "${RYCODE_DATABASE:-rycode}" --format=custom > "$destination/database.dump"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T app tar -C /app/storage -czf - media > "$destination/media.tar.gz"
(cd "$destination" && sha256sum database.dump media.tar.gz > SHA256SUMS)
echo "Backup written to $destination. Store an encrypted copy off-host."
