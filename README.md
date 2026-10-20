# RYCODE STUDIO — رایکد

Creative studio website built with Next.js 16 App Router, React 19, strict
TypeScript and Tailwind CSS 4. Includes 17 public routes: home, work, six project
details, blog, six articles, contact and a custom 404 page. The staff CMS now
adds PostgreSQL 18, Prisma 7, Better Auth, editable services/articles/projects/
pages, media, leads, FAQs, settings, redirects and anonymous aggregate analytics.

See [local setup and architecture](docs/architecture.md) and
[Ubuntu / CI operations](docs/ubuntu.md). No UI from the earlier RYCODE project
or customer portal is included. Existing statistics, testimonials and sample
projects remain as supplied.

## Development

```powershell
npm ci
npm run db:dev
```

Keep the local PostgreSQL helper running. In a second terminal:

```powershell
npm run db:migrate
npm run db:seed
npm run dev
```

Preview at http://127.0.0.1:3014/.

If the default port is occupied, run `npm run dev -- --port 3020`.

Persian is the default language at `/`, `/work`, `/blog` and `/contact`.
English pages use `/en`, `/en/work`, `/en/blog` and `/en/contact`.
Old `/fa` URLs redirect permanently to the Persian canonical URLs.
The header language switch preserves the current page, query string and anchor.
Persian is rendered on the server with RTL layout and the locally hosted
IRANYekan font supplied for the project (`public/fonts`, WOFF2 with TTF fallback).
Translations are maintained in `src/locales/fa.json`; English source copy is
preserved in the page components. Animated Persian headings reveal complete
words so connected letters remain intact.

## Validation and production

```powershell
npm run typecheck
npm run lint
npm test
npm run test:local
npm run build
npm start
node scripts/verify.mjs
node scripts/verify-locales.mjs
```

Set `VERIFY_URL` to the running server URL when using a different port.
Both verification scripts cover English and Persian routes, including missing
pages. The locale check also validates translated copy, metadata and links.

## Branding and source

- `src/components/BrandLogo.tsx` renders the shared uppercase RYCODE STUDIO identity.
- `src/app/brand.css` controls the header, footer and scrolling wordmarks.
- `public/brand` includes the supplied original logos and optimized WebP assets.
  Red/white is used on dark backgrounds; red/charcoal on light backgrounds.
- `src/app/icon.png` and `apple-icon.png` use the supplied emblem.
- `src/components/pages` contains editable page sections, and `src/components`
  contains shared interactions. All fonts, videos and images are stored locally.
- `.reference/routes.json` and `assets.json` support the existing verification
  script. Other local capture files are excluded from Git.
- `src/app/hover.css` restores button fills, arrow travel, rotating SVGs,
  footer underlines, and project/article previews for hover and keyboard focus.
  Hidden hover layers are plain elements; scroll reveals never activate them.
  Reveal observers measure the final box so entrance transforms cannot leave
  controls permanently clipped. Reduced-motion preferences are respected.

The contact form validates on the server and saves each request once in
PostgreSQL, returning a receipt. Staff handle requests at `/admin/leads`.
Email/SMS delivery is not configured. Contact details and Instagram/Telegram/Bale
destinations are editable in the panel. Staff login is `/admin/login`; there is
no public account registration. Keep `INDEXABLE=false` until domain/launch approval.

Layout and reference capture tooling originated from the
[Covix Framer template](https://covix.framer.website/). Historical capture scripts
in `scripts/` are development utilities and are not loaded in production.
