# Rycode Studio — رایکد استودیو

Creative studio website built with Next.js 16 App Router, React 19, strict
TypeScript and Tailwind CSS 4. Includes 17 public routes: home, work, six project
details, blog, six articles, contact and a custom 404 page.

## Development

```powershell
npm ci
npm run dev
```

Preview at http://127.0.0.1:3014/.

## Validation and production

```powershell
npm run typecheck
npm run lint
npm run build
npm start
node scripts/verify.mjs
```

## Branding and source

- `src/components/BrandLogo.tsx` renders the shared Rycode Studio identity.
- `src/app/brand.css` controls the header, footer and scrolling wordmarks.
- `public/brand` includes the supplied original logos and optimized WebP assets.
  Red/white is used on dark backgrounds; red/charcoal on light backgrounds.
- `src/app/icon.png` and `apple-icon.png` use the supplied emblem.
- `src/components/pages` contains editable page sections, and `src/components`
  contains shared interactions. All fonts, videos and images are stored locally.
- `.reference/routes.json` and `assets.json` support the existing verification
  script. Other local capture files are excluded from Git.

The contact form currently validates locally and displays a preview status; it
does not deliver messages. Email links from the source template now point to the
contact form until Rycode contact details are supplied. Other template contact
details, social destinations, projects and testimonials still need real content.

Layout and reference capture tooling originated from the
[Covix Framer template](https://covix.framer.website/). Historical capture scripts
in `scripts/` are development utilities and are not loaded in production.
