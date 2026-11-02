import { z } from "zod";

export const commentStatuses = {
  PENDING: "در انتظار تأیید",
  APPROVED: "تأییدشده",
  REJECTED: "ردشده",
  SPAM: "هرزنامه",
} as const;
export const commentStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
  "SPAM",
]);
export const commentSchema = z.object({
  articleId: z.string().uuid(),
  locale: z.enum(["fa", "en"]),
  name: z.string().trim().min(2).max(80),
  email: z.union([z.email().max(254), z.literal("")]).optional(),
  body: z.string().trim().min(5).max(3000),
  requestKey: z.string().uuid(),
  website: z.string().max(200).optional(),
  startedAt: z.number().int().positive(),
});
export const moderationSchema = z.object({
  id: z.string().uuid(),
  status: commentStatusSchema,
  reply: z.string().trim().max(3000).default(""),
  // Reject stale edits instead of overwriting another administrator's decision.
  updatedAt: z.iso.datetime(),
});
export type PublicComment = {
  id: string;
  name: string;
  body: string;
  reply: string | null;
  createdAt: string;
};
export type CommentPage = {
  items: PublicComment[];
  total: number;
  page: number;
  pageSize: number;
};
