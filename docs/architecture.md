# Local setup and architecture

Use Node **24.20.0** and npm. Run `npm ci`, then `npm run db:dev` in one terminal.
This optional helper binds PostgreSQL to `127.0.0.1:5434`, persists its cluster
under ignored `.reference/postgres-dev`, and creates ignored `.env.local` with
random local secrets when needed. Keep it running. For your own PostgreSQL,
copy `.env.example` to `.env.local` and provide a separate development database
and random `BETTER_AUTH_SECRET` instead.

In another terminal run `npm run db:migrate`, `npm run db:seed`, `npm run dev`.
The site is <http://127.0.0.1:3014/> and staff login is
<http://127.0.0.1:3014/admin/login>.

Create staff accounts with private `BOOTSTRAP_ADMIN_EMAIL` and
`BOOTSTRAP_ADMIN_PASSWORD` environment variables, then `npm run admin:create`.
Passwords require 16+ characters, uppercase, lowercase and digits. The optional
`BOOTSTRAP_ADMIN_ROLE=EDITOR` creates an editor; default is ADMIN. The command
refuses to overwrite existing accounts. Remove bootstrap values afterward.
There are no customer accounts or public registration.

## Boundaries and access

`src/app/layout.tsx` owns the document, fonts and locale. `[lang]/(public)` owns
the existing studio header/footer and pages. `[lang]/admin` has a new independent
staff interface. `src/server` contains PostgreSQL, authorization, content
visibility, settings and redirects. Generated Prisma files are recreated during
install. No earlier site's UI/CSS/components or customer panel were imported.

Better Auth uses hashed credentials, HttpOnly sessions, secure production cookies
and database login throttling. Every admin API request checks the current role
in PostgreSQL; writes require the configured origin. ADMIN publishes and manages
leads/settings/roles. EDITOR can edit drafts and upload media. Editors cannot
change already published content. Demotions lock the admin set and recheck the
actor so the last administrator cannot be removed.

Content saves transact translations, snapshots, redirects and audit records.
Restoring a revision loads it into the editor; save to apply it. Uploads accept
bounded PNG/JPEG/WebP, validate actual bytes/pixels, re-encode WebP without
metadata, and use UUID names outside `public/`. Rich content is validated JSON
rendered using React elements, never arbitrary HTML.

## Public content and SEO

Draft/archived content is private. Scheduled publication is visible after its
timestamp without a cron. Publication requires approved meaningful Persian
content; English is optional and appears only when explicitly approved. Hreflang
and sitemap describe actual approved translations. Articles/projects require a
featured image. Private previews require a staff session and use noindex.

The seed preserves existing data and adds seven service groups and six articles.
It also adds four Persian specialty services and their editable FAQ sets; see
[specialty page notes](service-specialties.md) for paths and editorial behavior.
Existing article detail layouts remain until their first CMS save.
The blog listing and featured slideshow always
use the original responsive templates, including newly published and edited
articles and filtered/paginated results. Search opens within the light article
section rather than introducing a separate full-height section. Original dates
are retained only for untouched seed articles; editorial publication dates remain owned by the CMS.

Seeded services have a stable source key so renaming their slug updates the catalog and adds an
internal redirect. Existing sample projects, testimonials and statistics remain
untouched. CMS-created project records can supplement the supplied work section.

FAQ scopes are `home`, `work` or a path such as `services/build`. Publishing a
managed FAQ set replaces the built-in set for that scope; withdrawing all managed
FAQs restores the built-in set. `/privacy` and `/terms` can be overridden with
published PAGE records using those slugs.

The proxy canonicalizes Persian URLs, resolves managed redirects and sends
unavailable public content to the global 404. This avoids the empty server HTML
shell produced by `notFound()` in dynamic routes in this Next.js version. The
page checks visibility again. Missing assets return actual 404 responses. Final
metadata origin is read from `SITE_URL`; indexing defaults off until launch.

## Requests, analytics and retention

Contact requests use UUID retry protection, unique receipts, server validation,
honeypot/time checks and atomic PostgreSQL rate limiting. A receipt means saved
in the database; no email or SMS service is configured. Rate keys use HMACs.
Forwarded IPs are only trusted when `TRUST_PROXY=true` behind a verified proxy.
With the current false setting, limits are shared conservatively across clients.

The admin-only report at `/admin/analytics` uses hourly PostgreSQL counters in
Asia/Tehran. A batched increment records an allowed public path, event, coarse
device/browser information and normalized traffic source/campaign labels.
Tab storage keeps these labels for attribution during a visit without assigning
a visitor ID. Browser collectors omit credentials and full referrer URLs. Page
exits depend on the browser sending a pagehide event. Counts measure events and
can be affected by client-side blocking and automation.

Confirmed submissions are counted from the Lead table, including after a client
retry. Attribution labels can be attached to a lead. Contact information and
message contents stay in the inquiry. Lead status transitions record previous
and new status in the staff audit log. The overview still includes legacy
daily page-view and contact-click aggregates. Detailed dimensions and local
hours are available from the start of the new collector.

Operational logs retain structured event codes for form and upload failures,
staff sign-in, server errors, application start and backup attempts. They store
application route templates where available. The report uses a live database
check and process metrics. It also surfaces aggregated browser errors and 404s.

`npm run maintenance` removes expired sessions/verifications/rate buckets and
analytics older than 90 days. It retains operational logs for 30 days and
backup/startup events for 90 days. Leads, revisions and audit logs remain for
staff operations and backups. Configure a maintenance timer on the server.

## Verification

Run lint, typecheck, `npm test`, `npm run test:local`, build and `npm run verify`.
`test:local` migrates and tests only the helper's separate `rycode_test...` database.
CI uses `RUN_INTEGRATION=1` with a database named `rycode_test...` or `rycode_ci...`.
`verify` checks languages, routes, metadata, RTL, assets and links against a running
server; set `VERIFY_URL` for a different port. `node scripts/verify-platform.mjs`
also tests login/permissions/publishing/forms/uploads; write scenarios require
the dedicated test database and `RUN_INTEGRATION=1`.

`/api/health` checks PostgreSQL and returns 503 if unavailable. CI also runs the
non-root production container on Ubuntu, verifies persisted uploads after restart,
and rehearses database/media backup restoration against deliberately changed test
fixtures. Production server configuration still needs verification on the target server.
No Lighthouse score or production uptime is claimed from local checks.
