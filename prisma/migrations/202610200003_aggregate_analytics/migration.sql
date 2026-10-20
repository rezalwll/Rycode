BEGIN;

CREATE TABLE "AnalyticsDaily" (
  "day" DATE NOT NULL,
  "name" TEXT NOT NULL,
  "path" TEXT NOT NULL,
  "count" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "AnalyticsDaily_pkey" PRIMARY KEY ("day", "name", "path")
);

-- Preserve historical totals, then discard individual events and identifiers.
INSERT INTO "AnalyticsDaily" ("day", "name", "path", "count")
SELECT "createdAt"::date, "name", "path", COUNT(*)::integer
FROM "AnalyticsEvent"
GROUP BY "createdAt"::date, "name", "path";

DROP TABLE "AnalyticsEvent";

COMMIT;
