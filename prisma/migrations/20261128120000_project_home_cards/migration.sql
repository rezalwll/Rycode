ALTER TABLE "Content" ADD COLUMN "homeCardImage" TEXT;

ALTER TABLE "ContentTranslation"
    ADD COLUMN "homeCardTitle" TEXT NOT NULL DEFAULT '',
    ADD COLUMN "homeCardSummary" TEXT NOT NULL DEFAULT '';
