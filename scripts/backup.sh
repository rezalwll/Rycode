#!/usr/bin/env bash
set -euo pipefail
umask 077
destination="${1:-./backups/$(date -u +%Y%m%dT%H%M%SZ)}"
backup_status() {
  local status=$?
  local code=backup-complete level=info
  if (( status != 0 )); then
    code=backup-failed
    level=error
  fi
  docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T db \
    psql -q -v ON_ERROR_STOP=1 -U rycode -d "${RYCODE_DATABASE:-rycode}" \
    -v "event_code=$code" -v "event_level=$level" >/dev/null <<'SQL' || true
INSERT INTO "OperationalLog" ("id", "area", "code", "path", "level")
VALUES (gen_random_uuid()::text, 'backup', :'event_code', '/ops/backup', :'event_level');
SQL
  return "$status"
}
trap backup_status EXIT
mkdir -p -- "$destination"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T db pg_dump -U rycode -d "${RYCODE_DATABASE:-rycode}" --format=custom > "$destination/database.dump"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T app tar -C /app/storage -czf - media > "$destination/media.tar.gz"
(cd "$destination" && sha256sum database.dump media.tar.gz > SHA256SUMS)
echo "Backup written to $destination. Store an encrypted copy off-host."
