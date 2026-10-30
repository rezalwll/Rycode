import { getTranslations } from "@/lib/i18n-server";
import { FaqSection } from "@/components/content/FaqSection";

export async function HomeFAQSection() {
  const { t } = await getTranslations();
  return (
    <FaqSection
      entries={[
        {
          question: t("How long does a typical project take?"),
          answer: t(
            "Most websites are completed within 2–4 weeks, depending on the project scope, content, and revisions.",
          ),
        },
        {
          question: t("Do you provide ongoing support?"),
          answer: t(
            "Yes, we offer ongoing support, maintenance, and updates to keep your website secure and performing smoothly.",
          ),
        },
        {
          question: t("Can you redesign an existing website?"),
          answer: t(
            "Yes, we redesign existing websites with modern layouts, improved functionality, and a better user experience.",
          ),
        },
        {
          question: t("Which platforms do you work with?"),
          answer: t(
            "We work with Framer, WordPress, Webflow, and other modern platforms based on your project requirements.",
          ),
        },
        {
          question: t("How do we get started?"),
          answer: t(
            "Simply contact us to discuss your goals, project scope, and timeline, and we'll guide you through every step.",
          ),
        },
      ]}
    />
  );
}
