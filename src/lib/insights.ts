import { z } from "zod";

export const insightsZone = "Asia/Tehran";
export const devices = ["mobile", "tablet", "desktop", "unknown"] as const;
export const platforms = [
  "android",
  "ios",
  "windows",
  "macos",
  "linux",
  "other",
  "unknown",
] as const;
export const browsers = [
  "chrome",
  "safari",
  "firefox",
  "edge",
  "samsung",
  "other",
  "unknown",
] as const;
export const viewports = ["compact", "medium", "large", "unknown"] as const;
export const sources = [
  "google",
  "bing",
  "instagram",
  "telegram",
  "bale",
  "other-search",
  "other-social",
  "referral",
  "tagged",
  "unknown",
] as const;
export const sections = [
  "hero",
  "services",
  "portfolio",
  "process",
  "blog",
  "faq",
  "contact-banner",
  "article",
  "header",
  "footer",
] as const;
export const formErrors = [
  "name",
  "phone",
  "email",
  "message",
  "other",
  "network",
] as const;
export const contactActions = [
  "form",
  "phone",
  "email",
  "instagram",
  "telegram",
  "bale",
] as const;
export const publicEvents = [
  "page_view",
  "page_entry",
  "page_exit",
  "navigate",
  "section_view",
  "section_click",
  "contact_click",
  "link_click",
  "form_view",
  "form_start",
  "form_submit",
  "form_invalid",
  "scroll_depth",
  "active_time",
  "page_not_found",
  "browser_error",
  "web_vital",
] as const;
export type PublicEvent = (typeof publicEvents)[number];

export function analyticsPath(raw: string): string | null {
  if (raw.length > 240) return null;
  try {
    const path =
      decodeURIComponent(raw)
        .normalize("NFC")
        .replace(/^\/fa(?=\/|$)/, "")
        .replace(/\/$/, "") || "/";
    return /^\/(?:en(?:\/|$))?(?:(?:about|contact|privacy|terms)|(?:blog|work|pages|services)(?:\/[\p{L}\p{N}_-]+)?|services\/[\p{L}\p{N}_-]+\/[\p{L}\p{N}_-]+)?$/u.test(
      path,
    )
      ? path
      : null;
  } catch {
    return null;
  }
}

const campaignLabel = z
  .string()
  .max(48)
  .regex(/^(?:[a-z][a-z0-9_-]{0,47})?$/);

export function campaignTag(raw: string | null) {
  const value = raw?.trim().toLowerCase() || "";
  return campaignLabel.safeParse(value).success ? value : "";
}

export const analyticsContext = z
  .object({
    source: z.enum(sources).default("unknown"),
    landing: z
      .string()
      .max(240)
      .transform(analyticsPath)
      .pipe(z.string())
      .optional(),
    campaign: campaignLabel.default(""),
    creative: campaignLabel.default(""),
    device: z.enum(devices).default("unknown"),
    platform: z.enum(platforms).default("unknown"),
    browser: z.enum(browsers).default("unknown"),
    viewport: z.enum(viewports).default("unknown"),
  })
  .strict();

export type AnalyticsContext = z.output<typeof analyticsContext>;

const eventSchema = z
  .object({
    name: z.enum(publicEvents),
    path: z.string().max(240),
    detail: z.string().max(240).default(""),
    context: analyticsContext,
  })
  .strict();

export const insightBatchSchema = z
  .object({
    events: z.array(eventSchema).min(1).max(12),
  })
  .strict();

export function analyticsDetail(name: PublicEvent, detail: string) {
  switch (name) {
    case "navigate":
      return analyticsPath(detail);
    case "section_view":
    case "section_click":
      return sections.some((section) => section === detail) ? detail : null;
    case "link_click": {
      const [section, target, extra] = detail.split("|");
      if (
        extra !== undefined ||
        !target ||
        (!sections.some((item) => item === section) && section !== "other")
      )
        return null;
      const path = analyticsPath(target);
      return path ? section + "|" + path : null;
    }
    case "contact_click":
      return contactActions.some((action) => action === detail) ? detail : null;
    case "form_invalid":
      return formErrors.some((error) => error === detail) ? detail : null;
    case "scroll_depth":
      return ["25", "50", "75", "90"].includes(detail) ? detail : null;
    case "active_time":
      return ["15", "45", "120"].includes(detail) ? detail : null;
    case "browser_error":
      return ["script", "promise", "resource"].includes(detail) ? detail : null;
    case "web_vital":
      return /^(?:LCP|INP|CLS|TTFB|FCP)\|(?:good|needs-improvement|poor)$/.test(
        detail,
      )
        ? detail
        : null;
    default:
      return "";
  }
}
