ALTER TABLE "Content" ADD COLUMN "sourceKey" TEXT;
CREATE UNIQUE INDEX "Content_sourceKey_key" ON "Content"("sourceKey");
UPDATE "Content" SET "sourceKey" = 'service:' || "slug" WHERE "kind" = 'SERVICE' AND "slug" IN ('build','grow','software','rescue','connect','data','continue');
