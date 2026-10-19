import { readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { database } from "@/server/db";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/.test(id)) return new Response(null, { status: 404 });
  try {
    const media = await database().media.findUnique({ where: { id } });
    if (!media) return new Response(null, { status: 404 });
    const bytes = await readFile(
      join(resolve(/* turbopackIgnore: true */ process.env.MEDIA_ROOT || "storage/media"), id + ".webp"),
    );
    return new Response(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "image/webp",
        "Content-Length": String(bytes.length),
        "Cache-Control": "public,max-age=31536000,immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}
