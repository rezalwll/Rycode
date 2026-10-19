# Project detail parity

Reference: https://covix.framer.website/work, audited 2026-10-19.

The six project detail routes were compared with their corresponding reference
pages, in English and Persian, at 1280×900, 820×1000, and 390×844. This covers
54 rendered documents: six routes × three widths × reference/English/Persian.

## Changes

- Project routes now select the black footer ticker and light brand treatment,
  including locale-prefixed paths. The reference's ticker heights are retained:
  244px desktop/tablet, 150px phone.
- Project entrance layers use the reference's 1200ms, zero-bounce spring from
  300px below. Title, description, and metadata start at 0/100/200ms. The spring
  is sampled into a native `linear()` easing; no Framer runtime is added.
- Gallery image entrances use the same spring, 100ms delay, and reference alpha
  curve (`min(1, progress × 3)`). Once-only playback, responsive crop/stacking,
  and reduced-motion image fallback remain supported.
- “View All Work” / “همهٔ پروژه‌ها” now returns to the index in the current
  language. Its appearance and hover styling retain the reference variant.

## Verification

All measured English content/gallery rectangles match the reference at all
three widths. This includes gallery dimensions, image gaps, text column widths,
and section heights. Persian documents have no horizontal page overflow or
overflowing text. Font, translation, reading direction, and brand differences
follow the site's existing localization and rebranding.

| Route suffix           | Desktop details height | Tablet details height | Phone details height |
| ---------------------- | ---------------------: | --------------------: | -------------------: |
| finance-saas-website   |               2610.875 |                1977.5 |            1903.6875 |
| ai-automation-platform |               2610.875 |                1977.5 |            1955.6875 |
| fashion-ecommerce      |               2610.875 |                1977.5 |           1870.09375 |
| logistics-company      |               2610.875 |                1977.5 |           1922.09375 |
| creative-agency        |               2610.875 |                1977.5 |           1896.09375 |
| ai-agency-website      |               2610.875 |                1977.5 |           1896.09375 |

Sticky text/image behavior and gallery stacking were compared while scrolling.
The Persian return link was exercised in the browser and returned to `/work`.

`scripts/fixtures/project-reference.json` records titles, descriptions, metadata,
and the ordered gallery asset URLs from the public reference documents. Run:

```powershell
$env:VERIFY_URL='http://127.0.0.1:3020'
node scripts/verify-projects.mjs
node scripts/verify.mjs
node scripts/verify-locales.mjs
node scripts/verify-line-traces.mjs
npm run typecheck
npm run lint
npm run build
```

The project check covers 14 localized Work/project pages and 48 gallery image
placements. The existing checks cover 36 pages, local assets, links, locale
preservation, and line traces. Layout comparisons are browser measurements;
they do not assert identical pixels for every frame of the GPU animations.
