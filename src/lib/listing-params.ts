export type ListingSearchParams = Record<string, string | string[] | undefined>;

export function listingPage(value: unknown) {
  const number = Number(Array.isArray(value) ? value[0] : value);
  return Number.isFinite(number)
    ? Math.max(1, Math.min(10000, Math.floor(number)))
    : 1;
}

export function listingParams(params: ListingSearchParams = {}) {
  const text = (value: string | string[] | undefined) =>
    (Array.isArray(value) ? value[0] : value)?.trim().slice(0, 100) || "";
  return {
    page: listingPage(params.page),
    q: text(params.q),
    category: text(params.category),
  };
}

export function listingHref(
  kind: "ARTICLE" | "PROJECT",
  page: number,
  filters: { q: string; category: string },
) {
  const query = new URLSearchParams({ page: String(listingPage(page)) });
  if (filters.q) query.set("q", filters.q);
  if (filters.category) query.set("category", filters.category);
  return `${kind === "PROJECT" ? "/work" : "/blog"}?${query}`;
}
