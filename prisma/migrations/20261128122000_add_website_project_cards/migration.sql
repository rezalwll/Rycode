ALTER TABLE "Content"
  ADD COLUMN "websiteCardImage" TEXT,
  ADD COLUMN "websiteCardPosition" INTEGER,
  ADD COLUMN "websiteFeatured" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "ContentTranslation"
  ADD COLUMN "websiteCardTitle" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "websiteCardSummary" TEXT NOT NULL DEFAULT '';
