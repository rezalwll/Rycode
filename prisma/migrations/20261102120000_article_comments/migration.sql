CREATE TYPE "CommentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SPAM');
CREATE TABLE "Comment" (
  "id" TEXT NOT NULL,
  "articleId" TEXT NOT NULL,
  "locale" TEXT NOT NULL DEFAULT 'fa',
  "name" TEXT NOT NULL,
  "email" TEXT,
  "body" TEXT NOT NULL,
  "status" "CommentStatus" NOT NULL DEFAULT 'PENDING',
  "reply" TEXT,
  "requestKey" TEXT NOT NULL,
  "fingerprint" TEXT NOT NULL,
  "moderatedBy" TEXT,
  "moderatedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Comment_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "Comment_requestKey_key" ON "Comment"("requestKey");
CREATE UNIQUE INDEX "Comment_fingerprint_key" ON "Comment"("fingerprint");
CREATE INDEX "Comment_articleId_locale_status_createdAt_idx" ON "Comment"("articleId", "locale", "status", "createdAt");
CREATE INDEX "Comment_status_createdAt_idx" ON "Comment"("status", "createdAt");
