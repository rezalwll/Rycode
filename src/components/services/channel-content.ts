import type { Locale } from "@/lib/i18n";

export const channelSteps: Record<
  Locale,
  readonly (readonly [string, string])[]
> = {
  fa: [
    [
      "شناخت و برنامه‌ریزی",
      "هدف، مسئله و اولویت‌های پروژه را با هم مشخص می‌کنیم.",
    ],
    [
      "طراحی و اجرا",
      "راه‌حل را مرحله‌به‌مرحله می‌سازیم و با بازخورد تو بهترش می‌کنیم.",
    ],
    [
      "تحویل و همراهی",
      "کار را تست و تحویل می‌دهیم و مسیر پشتیبانی و توسعه را روشن می‌کنیم.",
    ],
  ],
  en: [
    [
      "Discover",
      "We clarify the goals, the problem and the project priorities together.",
    ],
    [
      "Design & build",
      "We build in stages and improve the result with your feedback.",
    ],
    [
      "Launch & support",
      "We test and hand over the work with a clear plan for support and further improvements.",
    ],
  ],
};
