ALTER TABLE "Lead" ADD COLUMN "attribution" JSONB;
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");

CREATE TABLE "AnalyticsHourly" (
    "bucket" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "viewport" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "landing" TEXT NOT NULL,
    "campaign" TEXT NOT NULL,
    "creative" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "AnalyticsHourly_pkey" PRIMARY KEY ("bucket", "name", "path", "detail", "device", "platform", "browser", "viewport", "source", "landing", "campaign", "creative")
);

CREATE TABLE "OperationalLog" (
    "id" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "elapsedMs" INTEGER,
    "release" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OperationalLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "OperationalLog_createdAt_idx" ON "OperationalLog"("createdAt");
CREATE INDEX "OperationalLog_area_createdAt_idx" ON "OperationalLog"("area", "createdAt");
