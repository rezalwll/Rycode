import { database, databaseConfigured } from "./db";
import { safeInternalPath } from "./security";
export async function managedRedirect(path: string) {
  if (!databaseConfigured()) return null;
  const first = await database().redirect.findUnique({
    where: { source: path },
  });
  if (!first) return null;
  const seen = new Set([path]);
  let destination = first.destination;
  for (let depth = 0; depth < 8; depth++) {
    safeInternalPath(destination);
    if (seen.has(destination)) return null;
    seen.add(destination);
    const next = await database().redirect.findUnique({
      where: { source: destination.split(/[?#]/)[0] },
    });
    if (!next) return { destination, permanent: first.permanent };
    destination = next.destination;
  }
  return null;
}
