#!/usr/bin/env bash
set -euo pipefail
test "${GITHUB_ACTIONS:-}" = true || { echo 'This rehearsal is restricted to an isolated GitHub Actions runner.'; exit 1; }
export COMPOSE_FILE=compose.ci.yaml
export COMPOSE_PROJECT_NAME="rycode-smoke-${GITHUB_RUN_ID:?}"
export RYCODE_ENV_FILE=.env.example
export RYCODE_DATABASE=rycode_ci
mkdir -p test-results
cleanup() {
  docker compose logs --no-color > test-results/container.log 2>&1 || true
  docker compose down --volumes --remove-orphans || true
}
trap cleanup EXIT
docker compose up -d --wait --wait-timeout 180 app
test "$(docker compose exec -T app id -u)" = 1001
docker compose run --rm --no-deps checks
docker compose restart app
docker compose run --rm --no-deps checks node scripts/verify-media-persistence.mjs
backup_dir="${RUNNER_TEMP:?}/rycode-backup-rehearsal"
bash scripts/backup.sh "$backup_dir"
docker compose run --rm --no-deps checks node scripts/verify-media-persistence.mjs corrupt
CONFIRM_RESTORE=REPLACE_RYCODE_DATA bash scripts/restore.sh "$backup_dir"
docker compose run --rm --no-deps checks node scripts/verify-media-persistence.mjs
echo 'PASS: non-root container, migrations, HTTP behavior, persisted uploads, database and media backup/restore.'
