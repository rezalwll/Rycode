export function contentRoute(path: string) {
  if (path === "/privacy" || path === "/terms")
    return { kind: "PAGE" as const, slug: path.slice(1), policy: true };
  const match = /^\/(blog|work|services|pages)\/([^/]+)$/.exec(path);
  if (!match) return null;
  const kind = {
    blog: "ARTICLE",
    work: "PROJECT",
    services: "SERVICE",
    pages: "PAGE",
  } as const;
  return {
    kind: kind[match[1] as keyof typeof kind],
    slug: match[2],
    policy: false,
  };
}
