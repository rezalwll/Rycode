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

Analytics increments one PostgreSQL counter per UTC day, event and public page.
There are no individual visit records, visitor/session identifiers, analytics
cookies, referrers, campaign parameters or inquiry details. Browser requests omit
credentials and referrers; no consent banner or status badge is rendered. The
migration preserves old event totals and discards their individual records and
identifiers. The dashboard separates these approximate totals from actual saved
Lead totals. Client events may be blocked or spoofed and are not unique people.

`npm run maintenance` removes expired sessions/verifications/rate buckets and
analytics older than 90 days. Leads, revisions and audit logs remain for staff
operations and backups; revisit their retention when finalizing production policy.
No OS scheduler is installed by this task.

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
