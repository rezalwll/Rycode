# Ubuntu and CI/CD preparation

This runbook is for the later deployment. No server connection, domain/DNS,
certificate, production account or live deployment is configured by this task.

## GitHub Actions

`ci.yml` runs on main/codex pushes and PRs: Node 24.20.0, PostgreSQL 18, clean
install, migrations, seed, lint/typecheck, unit/integration tests, runtime audit,
Next build and production standalone HTTP checks. The container job builds and
runs the non-root runner with PostgreSQL in an isolated Compose project. It tests
migrations, publication/forms/uploads, persistence across restart, and actual
database/media backup and restore, including intentionally changing a test
fixture after backup and verifying that the original bytes/metadata return.
The rehearsal exposes no host ports and removes only its own CI volumes.
No deployment credentials are needed. Configure `validate` and `container` as
required branch checks when setting repository protections.

`release-image.yml` is manual and requires successful `validate` and `container` checks for the same
commit. Its `release` environment should have required reviewers before use.
By default it builds without publishing. Explicit `publish_image=true` publishes
runner and migration images to GHCR, tagged with the full commit SHA. It never
connects to a server or replaces a running site.

## Future Ubuntu configuration

Use Ubuntu 24.04 with Docker Engine and Compose. Copy `.env.example` to private
`.env.production` on the server (0600), then configure:

- `SITE_URL` and `NEXT_PUBLIC_SITE_URL`: the approved HTTPS canonical origin.
- `POSTGRES_PASSWORD`: a fresh base64url secret, avoiding URL-special punctuation.
- `BETTER_AUTH_SECRET`: a different random value, at least 32 characters.
- `INDEXABLE=false` until launch approval.
- `APP_IMAGE=ghcr.io/rezalwll/rycode:<commit-sha>` and
  `MIGRATION_IMAGE=ghcr.io/rezalwll/rycode:<commit-sha>-migration`.

Generate secrets separately using
`node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.
Do not put secrets in Git, build arguments or workflow YAML. Compose constructs
the private PostgreSQL URL from the password.

The non-root runner drops capabilities, uses standalone output and persists
uploads in the `media` volume. PostgreSQL has a separate volume and no host port.
The app binds only `127.0.0.1:3014`. Migration success gates application startup.

After server/domain approval:

```bash
docker compose --env-file .env.production pull
docker compose --env-file .env.production up -d db
docker compose --env-file .env.production run --rm migrate
docker compose --env-file .env.production run --rm migrate npm run db:seed
# Set these privately in the shell first; remove them afterward:
docker compose --env-file .env.production run --rm \
  -e BOOTSTRAP_ADMIN_EMAIL -e BOOTSTRAP_ADMIN_PASSWORD migrate npm run admin:create
docker compose --env-file .env.production up -d app
curl --fail http://127.0.0.1:3014/api/health
```

For a source build, omit image variables and build `app migrate` first. Only the
migration image contains Prisma CLI, bootstrap and maintenance tools.

Add an HTTPS reverse proxy during deployment. It must overwrite forwarded
headers with verified values, enforce the public host and upload size, and keep
direct app/database ports inaccessible publicly. Only then set the Compose
`TRUST_PROXY` override to true for per-client throttling. It is false in the
prepared configuration. Confirm secure cookies, login, real form receipt/admin
lead arrival, locale routes, uploads and canonical metadata over HTTPS before
enabling indexing. DNS, TLS, proxy config and firewall changes are later work.

## Backup, restore, rollback

From the project root run `bash scripts/backup.sh`. It writes a private PostgreSQL
custom dump, media archive and SHA256 manifest. Copy an encrypted backup off-host.
Pause form/admin writes or use a maintenance window for a consistent snapshot:
database and media are captured sequentially. Dumps contain personal lead data
and credential hashes.

CI rehearses recovery on temporary Ubuntu containers. Also rehearse on an
isolated database/volume pair on the actual target server before launch. Restore only when
intentionally replacing data:
`CONFIRM_RESTORE=REPLACE_RYCODE_DATA bash scripts/restore.sh <backup-directory>`.
It checks hashes, stops app, restores database/media, then starts app. A failed
restore leaves it stopped for investigation. Media without a corresponding DB
record cannot be served.

Record the previous runner/migration SHA and back up before each release.
Keep migrations compatible while an old runner can still serve traffic. For an
app-only rollback, return to the prior runner SHA. A schema-incompatible rollback
needs an explicit restore plan; never use `prisma migrate reset` in production.

During deployment, add server-owned systemd timers for backups and
`docker compose --env-file .env.production run --rm migrate npm run maintenance`.
Monitor `/api/health`, container restarts, backup age, DB/storage capacity and CI.
No scheduler, alert destination or automatic server update is installed here.
