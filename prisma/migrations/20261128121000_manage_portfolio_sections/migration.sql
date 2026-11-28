ALTER TABLE "Content"
  ADD COLUMN "homeCardPosition" INTEGER,
  ADD COLUMN "projectYear" INTEGER,
  ADD COLUMN "projectClient" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "projectGallery" TEXT[] DEFAULT ARRAY[]::TEXT[];

UPDATE "Content"
SET "homeCardPosition" = "position"
WHERE "kind" = 'PROJECT' AND "featured" = true;
