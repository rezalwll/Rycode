import { database, databaseConfigured } from "./db";
import { safeInternalPath } from "./security";

async function findRedirect(source: string) {
  try {
    return await database().redirect.findUnique({ where: { source } });
  } catch {
    // Redirects are an optional database-backed enhancement. If the local
    // database is unavailable, continue rendering the requested page.
    return null;
  }
}

export async function managedRedirect(path: string) {
  if (!databaseConfigured()) return null;
  const first = await findRedirect(path);
  if (!first) return null;
  const seen = new Set([path]);
  let destination = first.destination;
  for (let depth = 0; depth < 8; depth++) {
    safeInternalPath(destination);
    if (seen.has(destination)) return null;
    seen.add(destination);
    const next = await findRedirect(destination.split(/[?#]/)[0]);
    if (!next) return { destination, permanent: first.permanent };
    destination = next.destination;
  }
  return null;
}
