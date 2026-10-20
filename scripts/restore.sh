#!/usr/bin/env bash
set -euo pipefail
test "${CONFIRM_RESTORE:-}" = 'REPLACE_RYCODE_DATA' || { echo 'Restore replaces data. Rehearse on an isolated server; set CONFIRM_RESTORE=REPLACE_RYCODE_DATA intentionally.'; exit 1; }
source_dir="${1:?Usage: scripts/restore.sh backup-directory}"
test -f "$source_dir/database.dump" && test -f "$source_dir/media.tar.gz"
(cd "$source_dir" && sha256sum -c SHA256SUMS)
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" stop app
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" exec -T db pg_restore -U rycode -d "${RYCODE_DATABASE:-rycode}" --clean --if-exists --exit-on-error < "$source_dir/database.dump"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" run --rm -T --no-deps --entrypoint tar app -C /app/storage -xzf - < "$source_dir/media.tar.gz"
docker compose --env-file "${RYCODE_ENV_FILE:-.env.production}" up -d app
