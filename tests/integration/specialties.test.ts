import { afterAll, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";
import { database } from "../../src/server/db";
import { lookupContent, serviceHierarchy } from "../../src/server/content";
import { seedSpecialtyServices } from "../../scripts/seed-specialty-services";
import { specialtyServices } from "../../src/content/specialty-services";
const enabled = process.env.RUN_INTEGRATION === "1";
if (
  enabled &&
  !/^rycode_(test|ci)/.test(
    new URL(process.env.DATABASE_URL || "").pathname.slice(1),
  )
)
  throw new Error("Dedicated test database required");
const ids: string[] = [],
  scopes: string[] = [];
describe.skipIf(!enabled)(
  "Specialty publication and editorial ownership",
  () => {
    afterAll(async () => {
      await database().faq.deleteMany({ where: { scope: { in: scopes } } });
      await database().content.deleteMany({ where: { id: { in: ids } } });
      await database().$disconnect();
    });
    it("preserves renamed, withdrawn, edited pages and FAQ changes on seed retries", async () => {
      const slug = "seed-specialty-" + randomUUID();
      const entry = { ...specialtyServices[0], slug };
      scopes.push("services/" + slug);
      await seedSpecialtyServices(database(), [entry]);
      const record = await database().content.findUniqueOrThrow({
        where: { sourceKey: "specialty:" + slug },
      });
      ids.push(record.id);
      await database().content.update({
        where: { id: record.id },
        data: { slug: slug + "-edited", status: "ARCHIVED" },
      });
      await database().contentTranslation.updateMany({
        where: { contentId: record.id },
        data: { title: "ویرایش مستقل مدیر" },
      });
      const faq = await database().faq.findFirstOrThrow({
        where: { scope: scopes[0] },
      });
      await database().faq.update({
        where: { id: faq.id },
        data: { question: "پرسش ویرایش‌شده مدیر", published: false },
      });
      await seedSpecialtyServices(database(), [entry]);
      expect(
        await database().content.count({
          where: { sourceKey: "specialty:" + slug },
        }),
      ).toBe(1);
      expect(
        await database().content.findUnique({
          where: { kind_slug: { kind: "SERVICE", slug } },
        }),
      ).toBeNull();
      expect(
        (
          await database().content.findUniqueOrThrow({
            where: { id: record.id },
            include: { translations: true },
          })
        ).translations[0].title,
      ).toBe("ویرایش مستقل مدیر");
      expect(
        (
          await database().content.findUniqueOrThrow({
            where: { id: record.id },
          })
        ).status,
      ).toBe("ARCHIVED");
      expect(await database().faq.count({ where: { scope: scopes[0] } })).toBe(
        entry.faqs.length,
      );
      expect(
        await database().faq.findUnique({ where: { id: faq.id } }),
      ).toMatchObject({ published: false, question: "پرسش ویرایش‌شده مدیر" });
    });
    it("resolves renamed parents and limits child discovery to published translations", async () => {
      const key = "hierarchy-" + randomUUID();
      const parent = await database().content.create({
        data: {
          kind: "SERVICE",
          slug: key,
          sourceKey: "service:" + key,
          serviceId: key,
          status: "PUBLISHED",
          translations: {
            create: ["fa", "en"].map((locale) => ({
              locale,
              approved: true,
              title: locale === "fa" ? "گروه آزمایشی" : "Test group",
              summary: "Test",
              body: { type: "doc", content: [] },
            })),
          },
        },
      });
      ids.push(parent.id);
      const child = await database().content.create({
        data: {
          kind: "SERVICE",
          slug: key + "-child",
          sourceKey: "specialty:" + key,
          serviceId: key,
          status: "PUBLISHED",
          translations: {
            create: {
              locale: "fa",
              approved: true,
              title: "زیرخدمت فارسی",
              summary: "Test",
              body: { type: "doc", content: [] },
            },
          },
        },
      });
      ids.push(child.id);
      await database().content.update({
        where: { id: parent.id },
        data: { slug: key + "-renamed" },
      });
      const childDto = (await lookupContent("SERVICE", child.slug, "fa"))
        .content!;
      expect((await serviceHierarchy(childDto, "fa")).parent?.slug).toBe(
        key + "-renamed",
      );
      const faParent = (await lookupContent("SERVICE", key + "-renamed", "fa"))
        .content!;
      expect(
        (await serviceHierarchy(faParent, "fa")).children.map(
          (item) => item.id,
        ),
      ).toEqual([child.id]);
      const enParent = (await lookupContent("SERVICE", key + "-renamed", "en"))
        .content!;
      expect((await serviceHierarchy(enParent, "en")).children).toEqual([]);
      await database().content.update({
        where: { id: child.id },
        data: { status: "ARCHIVED" },
      });
      expect((await serviceHierarchy(faParent, "fa")).children).toEqual([]);
      await database().content.update({
        where: { id: parent.id },
        data: { status: "ARCHIVED" },
      });
      expect((await serviceHierarchy(childDto, "fa")).parent).toBeNull();
    });
  },
);
