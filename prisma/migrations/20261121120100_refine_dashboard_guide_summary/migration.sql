-- Existing copies of the dashboard guide store the blurb in both summary fields.
WITH copy_edit(old_text, new_text) AS (
  VALUES (
    'Choose the next step based on data ownership, shared work and the decisions your reports support.',
    'Base your choice on who owns the data, who needs to work on it together, and which decisions the reports must support.'
  )
)
UPDATE "ContentTranslation" AS translation
SET
  "summary" = CASE WHEN translation."summary" = copy_edit.old_text THEN copy_edit.new_text ELSE translation."summary" END,
  "seoDescription" = CASE WHEN translation."seoDescription" = copy_edit.old_text THEN copy_edit.new_text ELSE translation."seoDescription" END
FROM "Content" AS content
CROSS JOIN copy_edit
WHERE translation."contentId" = content.id
  AND content."sourceKey" = 'business-guide:excel-or-business-dashboard'
  AND translation.locale = 'en'
  AND (translation."summary" = copy_edit.old_text OR translation."seoDescription" = copy_edit.old_text);
