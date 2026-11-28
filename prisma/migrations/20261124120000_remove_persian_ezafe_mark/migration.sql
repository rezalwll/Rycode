BEGIN;

CREATE FUNCTION pg_temp.plain_persian_heh(value text)
RETURNS text LANGUAGE sql IMMUTABLE STRICT AS $$
  SELECT regexp_replace(value, U&'\0647\0654|\06C0|\0647\0674|\06D5\0654', U&'\0647', 'g');
$$;

-- Process prose and image descriptions without changing link or image paths.
CREATE FUNCTION pg_temp.plain_persian_document(value jsonb)
RETURNS jsonb LANGUAGE sql IMMUTABLE STRICT AS $$
  SELECT CASE jsonb_typeof(value)
    WHEN 'array' THEN coalesce((
      SELECT jsonb_agg(pg_temp.plain_persian_document(item) ORDER BY position)
      FROM jsonb_array_elements(value) WITH ORDINALITY AS children(item, position)
    ), '[]'::jsonb)
    WHEN 'object' THEN coalesce((
      SELECT jsonb_object_agg(key, CASE
        WHEN key IN ('text', 'alt', 'title') AND jsonb_typeof(item) = 'string'
          THEN to_jsonb(pg_temp.plain_persian_heh(item #>> '{}'))
        ELSE pg_temp.plain_persian_document(item)
      END)
      FROM jsonb_each(value) AS fields(key, item)
    ), '{}'::jsonb)
    ELSE value
  END;
$$;

UPDATE "ContentTranslation"
SET title = pg_temp.plain_persian_heh(title),
    summary = pg_temp.plain_persian_heh(summary),
    body = pg_temp.plain_persian_document(body),
    "bodyText" = pg_temp.plain_persian_heh("bodyText"),
    "seoTitle" = pg_temp.plain_persian_heh("seoTitle"),
    "seoDescription" = pg_temp.plain_persian_heh("seoDescription"),
    "imageAlt" = pg_temp.plain_persian_heh("imageAlt")
WHERE locale = 'fa'
  AND concat_ws(' ', title, summary, body::text, "bodyText", "seoTitle", "seoDescription", "imageAlt")
    ~ U&'\0647\0654|\06C0|\0647\0674|\06D5\0654';

UPDATE "Faq"
SET question = pg_temp.plain_persian_heh(question),
    answer = pg_temp.plain_persian_heh(answer)
WHERE locale = 'fa'
  AND concat_ws(' ', question, answer) ~ U&'\0647\0654|\06C0|\0647\0674|\06D5\0654';

UPDATE "Content"
SET category = pg_temp.plain_persian_heh(category),
    tags = ARRAY(
      SELECT pg_temp.plain_persian_heh(tag)
      FROM unnest(tags) WITH ORDINALITY AS original(tag, position)
      ORDER BY position
    )
WHERE concat_ws(' ', category, array_to_string(tags, ' '))
  ~ U&'\0647\0654|\06C0|\0647\0674|\06D5\0654';

UPDATE "Media"
SET alt = pg_temp.plain_persian_heh(alt)
WHERE alt ~ U&'\0647\0654|\06C0|\0647\0674|\06D5\0654';

COMMIT;
