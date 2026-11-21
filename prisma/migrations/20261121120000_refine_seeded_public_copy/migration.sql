-- Update only the original passages in records that have already been seeded.
-- Keep other editorial changes and historical revision snapshots intact.
WITH copy_edits(source_key, locale, old_text, new_text) AS (
  VALUES
    (
      'specialty:corporate-website-design',
      'fa',
      'همکاری با شرکتت برای چه کسانی مناسب است و قدم بعدی چیست.',
      'خدماتت برای چه کسانی مناسب است و چطور می‌تواند درخواستش را ثبت کند.'
    ),
    (
      'business-guide:excel-or-business-dashboard',
      'en',
      'Choose the next step based on data ownership, shared work and the decisions your reports support.',
      'Base your choice on who owns the data, who needs to work on it together, and which decisions the reports must support.'
    ),
    (
      'journal-sample:sample-javascript-async-await',
      'fa',
      'جمع‌بندی و قدم بعدی',
      'تمرین کار با درخواست‌های ناهمگام'
    )
)
UPDATE "ContentTranslation" AS translation
SET
  "body" = replace(translation."body"::text, copy_edits.old_text, copy_edits.new_text)::jsonb,
  "bodyText" = replace(translation."bodyText", copy_edits.old_text, copy_edits.new_text)
FROM "Content" AS content
JOIN copy_edits ON copy_edits.source_key = content."sourceKey"
WHERE translation."contentId" = content.id
  AND translation.locale = copy_edits.locale
  AND strpos(translation."body"::text, copy_edits.old_text) > 0;
