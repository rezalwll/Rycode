import { z } from "zod";
export const locales = ["fa", "en"] as const;
export const kinds = ["ARTICLE", "SERVICE", "PROJECT", "PAGE"] as const;
export const normalizeDigits = (value: string) =>
  value.replace(/[۰-۹٠-٩]/g, (digit) =>
    String(
      "۰۱۲۳۴۵۶۷۸۹".includes(digit)
        ? "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
        : "٠١٢٣٤٥٦٧٨٩".indexOf(digit),
    ),
  );
export function normalizeSlug(value: string) {
  return value
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
export function safeLink(value: string) {
  return (
    /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(value) &&
    !/[\\\u0000-\u001f]/.test(value)
  );
}
export type RichNode = {
  type: string;
  text?: string;
  attrs?: Record<string, unknown>;
  marks?: { type: string; attrs?: Record<string, unknown> }[];
  content?: RichNode[];
};
const nodeTypes = new Set([
  "doc",
  "paragraph",
  "text",
  "heading",
  "bulletList",
  "orderedList",
  "listItem",
  "blockquote",
  "codeBlock",
  "horizontalRule",
  "hardBreak",
  "image",
]);
export function validateDocument(value: unknown): value is RichNode {
  let count = 0;
  const visit = (node: unknown, depth: number): boolean => {
    if (!node || typeof node !== "object" || depth > 24 || ++count > 3000)
      return false;
    const n = node as RichNode;
    if (
      !nodeTypes.has(n.type) ||
      (n.text !== undefined &&
        (typeof n.text !== "string" || n.text.length > 100000))
    )
      return false;
    if (
      n.type === "image" &&
      (typeof n.attrs?.src !== "string" ||
        !/^\/(?:media|assets|brand)\//.test(n.attrs.src) ||
        n.attrs.src.includes(".."))
    )
      return false;
    if (
      n.marks &&
      (!Array.isArray(n.marks) ||
        n.marks.some(
          (m) =>
            !m ||
            typeof m !== "object" ||
            !["bold", "italic", "strike", "code", "underline", "link"].includes(
              m.type,
            ) ||
            (m.type === "link" &&
              (typeof m.attrs?.href !== "string" || !safeLink(m.attrs.href))),
        ))
    )
      return false;
    return (
      !n.content ||
      (Array.isArray(n.content) &&
        n.content.every((child) => visit(child, depth + 1)))
    );
  };
  return visit(value, 0) && (value as RichNode).type === "doc";
}
export function documentText(node: RichNode): string {
  return [node.text || "", ...(node.content || []).map(documentText)]
    .filter(Boolean)
    .join(node.type === "doc" ? "\n\n" : " ")
    .slice(0, 200000);
}
export function textDocument(text: string): RichNode {
  return {
    type: "doc",
    content: text
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((text) => ({
        type: "paragraph",
        content: [{ type: "text", text }],
      })),
  };
}
export const translationSchema = z.object({
  locale: z.enum(locales),
  approved: z.boolean().default(false),
  title: z.string().trim().min(2).max(220),
  summary: z.string().trim().max(700),
  body: z.unknown().refine(validateDocument, "Invalid content document"),
  seoTitle: z.string().trim().max(150).optional(),
  seoDescription: z.string().trim().max(320).optional(),
  imageAlt: z.string().trim().max(300).optional(),
});
export const contentSchema = z
  .object({
    id: z.string().uuid().optional(),
    kind: z.enum(kinds),
    slug: z.string().transform(normalizeSlug).pipe(z.string().min(2).max(150)),
    status: z.enum(["DRAFT", "PUBLISHED", "SCHEDULED", "ARCHIVED"]),
    featuredImage: z
      .string()
      .regex(/^\/(assets|media|brand)\/[a-zA-Z0-9_./-]+$/)
      .refine((value) => !value.includes(".."), "Invalid image path")
      .optional(),
    author: z.string().trim().min(1).max(120).default("RYCODE"),
    category: z.string().trim().max(100).default(""),
    tags: z.array(z.string().trim().min(1).max(70)).max(15).default([]),
    relatedIds: z.array(z.string().uuid()).max(12).default([]),
    serviceId: z.string().max(160).optional(),
    noIndex: z.boolean().default(false),
    position: z.number().int().min(0).max(9999).default(0),
    scheduledAt: z.string().datetime().optional(),
    translations: z.array(translationSchema).min(1).max(2),
  })
  .superRefine((content, ctx) => {
    if (
      new Set(content.translations.map((t) => t.locale)).size !==
      content.translations.length
    )
      ctx.addIssue({ code: "custom", message: "Duplicate language" });
    if (content.status === "PUBLISHED" || content.status === "SCHEDULED") {
      if (
        !content.translations.some(
          (t) =>
            t.locale === "fa" &&
            t.approved &&
            t.title &&
            t.summary &&
            documentText(t.body as RichNode).length >= 20,
        )
      )
        ctx.addIssue({
          code: "custom",
          message:
            "An approved Persian title, summary and body are required to publish",
        });
      if (
        ["ARTICLE", "PROJECT"].includes(content.kind) &&
        !content.featuredImage
      )
        ctx.addIssue({
          code: "custom",
          message: "A featured image is required",
        });
      if (
        content.status === "SCHEDULED" &&
        (!content.scheduledAt ||
          new Date(content.scheduledAt).getTime() <= Date.now())
      )
        ctx.addIssue({
          code: "custom",
          message: "Choose a future publication time",
        });
    }
  });
export const leadSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    email: z
      .union([z.string().trim().toLowerCase().email().max(254), z.literal("")])
      .optional(),
    phone: z
      .string()
      .transform((v) => normalizeDigits(v).replace(/[\s()-]/g, ""))
      .pipe(z.string().regex(/^(?:\+?[0-9]{7,15})?$/))
      .optional(),
    message: z.string().trim().min(10).max(5000),
    service: z.string().max(160).optional(),
    locale: z.enum(locales),
    sourcePath: z.string().startsWith("/").max(300),
    requestKey: z.string().uuid(),
    website: z.string().max(200).default(""),
    startedAt: z.number().int().positive(),
  })
  .refine((v) => Boolean(v.email || v.phone), {
    message: "Enter an email address or phone number",
  });
