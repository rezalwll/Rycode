# Background line animation

Audited all 17 public routes at https://covix.framer.website/ on 2026-10-18.
Compared rendered line geometry and moving inline transforms, then checked the
published page modules for loop distances, durations, and responsive overrides.

| Reference location                         | Segments                   | Horizontal travel                                                               | Vertical travel                   |
| ------------------------------------------ | -------------------------- | ------------------------------------------------------------------------------- | --------------------------------- |
| `/`, About section                         | 4                          | Top: 1093 / 683 / 327px; bottom: 1092 / 680 / 328px (desktop / tablet / mobile) | 640px                             |
| `/work`                                    | 4                          | 1093px                                                                          | 464px                             |
| `/contact`                                 | 5 desktop, 4 tablet/mobile | 1094px                                                                          | 703px; mobile outer edges: 1034px |
| All 6 `/work/:slug` pages, Details section | 4 desktop/tablet, 3 mobile | 1094px                                                                          | 2409px                            |
| All 6 `/blog/:slug` pages, Hero section    | 4 desktop/tablet, 3 mobile | 1094px                                                                          | 2409px                            |
| `/blog`, `/404`                            | 0                          | —                                                                               | —                                 |

All segments are solid `#ff1a05`, 16px long and 1px thick. Horizontal loops
take 6 seconds; vertical loops take 5 seconds. Both use linear easing, restart
at the original position, and have no repeat delay. Travel is to the physical
right/down in both locales. Existing reference CSS retains starting positions,
track colors, clipping, intersection icons, and responsive visibility.

`LineTrace` only animates the red segment with CSS transforms. Its stationary
track is observed to pause offscreen, and playback pauses in hidden documents.
Reduced-motion preferences leave the original stationary lines and segments.
No background line loop is added to the blog index or 404 page, or to unrelated
menu strokes, accordion icons, link underlines, and carousel indicators.

Validation: `npm run typecheck`, `npm run lint`, `npm run build`,
`node scripts/verify-line-traces.mjs`, and the existing route/locale checks.
The line check verifies all 34 localized reference documents against the route
coverage above. Browser verification covers playback, pausing offscreen,
locale navigation, and desktop/tablet/mobile geometry.
