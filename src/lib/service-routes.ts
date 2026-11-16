export const automationServiceId = "connect";
export const automationServiceSlug = "integrations-bots";
export const dataServiceId = "data";
export const dataServiceSlug = "data-tools";
export const supportServiceId = "continue";
export const supportServiceSlug = "support";

const persianServiceSlugs = new Map([
  [automationServiceId, automationServiceSlug],
  [dataServiceId, dataServiceSlug],
  [supportServiceId, supportServiceSlug],
]);
const canonicalServiceIds = new Map(
  Array.from(persianServiceSlugs, ([id, slug]) => [slug, id]),
);

export function canonicalServiceId(slug: string) {
  return canonicalServiceIds.get(slug) ?? slug;
}

export function localizedServicePath(path: string, locale: "en" | "fa") {
  if (/^\/services\/windows-software-development(?=\/?(?:[?#]|$))/.test(path)) {
    return path.replace(
      "/windows-software-development",
      "/software/windows-software",
    );
  }
  return path.replace(
    /^\/services\/([^/?#]+)(?=\/?(?:[?#]|$))/,
    (_, slug: string) => {
      const id = canonicalServiceId(slug);
      return `/services/${locale === "fa" ? (persianServiceSlugs.get(id) ?? id) : id}`;
    },
  );
}
