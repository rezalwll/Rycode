# Persian specialty service pages

Four independently written Persian landing pages complement the seven service groups:

| Path                                     | Parent     | Main decision supported                                                       |
| ---------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| `/services/corporate-website-design`     | `build`    | Corporate content, CMS choice, inquiry flow and redesign handover             |
| `/services/windows-software-development` | `software` | Local/network data, concurrent use, equipment, installation and recovery      |
| `/services/telegram-bot-development`     | `connect`  | Conversation state, ordering, external integrations and operational ownership |
| `/services/wordpress-troubleshooting`    | `rescue`   | Reproduction, backups, staging, diagnosis and acceptance of a repair          |

Each page has its own title, summary, SEO description, six substantive sections
and four FAQs. Content explains scope, decisions, delivery, cost factors and what
information helps a useful estimate. It does not invent a price, delivery period,
client result or search ranking. New English versions require editorial approval.

## Editorial management

Run `npm run db:seed` to add these initial records. Re-running preserves changed
titles/bodies, archived states, renamed slugs and edited or unpublished FAQs.
The source text lives in `src/content/specialty-services.ts`; after initial seed,
the database is the editorial source of truth.

The admin content editor manages the SERVICE pages, their SEO fields and related
group. FAQ management uses scopes such as `services/telegram-bot-development`.
Content renames move the corresponding FAQ scope in the same transaction that
saves the content and creates redirects. Stable source keys keep seeded children
out of the seven top-level cards while allowing parent titles/slugs to change.

## Discovery, metadata and conversion

Published child pages appear on their parent service page. Breadcrumbs include
that parent if it is published in the current language. Unapproved/withdrawn
children are not linked from parents. Canonical, hreflang and sitemap continue to
use actual approved translations. The existing pre-launch `INDEXABLE=false`
setting remains in effect until the separately planned launch.

Service JSON-LD describes the provider and specialty; FAQ JSON-LD matches the
visible answers. A table of contents uses real section anchors, with a compact
disclosure before the text on mobile. Header and inline inquiry links keep the
specific child slug in `contact?service=...`, so saved requests retain context.
The original black/white/red studio components, Persian font and RTL layout are
used throughout; no old-site UI is imported.

## Verification

`verify-platform.mjs` checks all four seeded pages, their parent links, exact
inquiry destinations, FAQ/schema agreement, metadata uniqueness, section anchors,
sitemap entries, seven-card catalog and missing English translations. The broader
route check now covers 64 paths. Dedicated-database tests verify seed preservation,
parent renames and locale/publication-aware child discovery. HTTP tests also
verify that FAQ scopes follow a content rename.

## Editorial references

- [Google: helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Schema.org: Service](https://schema.org/Service)
- [Telegram: bot features](https://core.telegram.org/bots/features)
- [WordPress: database and file backups](https://developer.wordpress.org/advanced-administration/security/backup/)

These references inform technical accuracy; the service text is original and
does not claim that structured data guarantees search visibility.
