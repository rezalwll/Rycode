import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import { resolve, join } from "node:path";
import sharp from "sharp";
import { requireStaff } from "@/server/auth";
import { database } from "@/server/db";
import { assertSameOrigin, consumeLimit, HttpError } from "@/server/security";
export const runtime = "nodejs";
export async function POST(request: Request) {
  let target: string | undefined;
  try {
    await assertSameOrigin(request);
    const actor = await requireStaff();
    await consumeLimit("media:" + actor.id, 40, 3600);
    const reader = request.body?.getReader();
    if (!reader) throw new HttpError(400, "Missing upload");
    const parts: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      size += result.value.length;
      if (size > 9 * 1024 * 1024) {
        await reader.cancel();
        throw new HttpError(413, "حداکثر حجم تصویر ۸ مگابایت است");
      }
      parts.push(result.value);
    }
    const body = Buffer.concat(parts);
    const multipart = new Request(request.url, {
      method: "POST",
      headers: { "content-type": request.headers.get("content-type") || "" },
      body: new Uint8Array(body),
    });
    const file = (await multipart.formData()).get("file");
    if (
      !(file instanceof File) ||
      file.size > 8 * 1024 * 1024 ||
      !["image/jpeg", "image/png", "image/webp"].includes(file.type)
    )
      throw new HttpError(422, "فرمت تصویر باید JPEG، PNG یا WebP باشد");
    const input = Buffer.from(await file.arrayBuffer());
    const image = sharp(input, {
      limitInputPixels: 40000000,
      animated: false,
      failOn: "warning",
    });
    const metadata = await image.metadata();
    if (!["jpeg", "png", "webp"].includes(metadata.format || ""))
      throw new HttpError(422, "فایل تصویر معتبر نیست");
    const result = await image
      .rotate()
      .resize({
        width: 2400,
        height: 2400,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 85 })
      .toBuffer({ resolveWithObject: true });
    const id = randomUUID();
    const root = resolve(/* turbopackIgnore: true */ process.env.MEDIA_ROOT || "storage/media");
    await mkdir(root, { recursive: true });
    target = join(root, id + ".webp");
    await writeFile(target, result.data, { flag: "wx" });
    const record = await database().media.create({
      data: {
        id,
        filename: file.name.slice(0, 180),
        mimeType: "image/webp",
        size: result.info.size,
        width: result.info.width,
        height: result.info.height,
        uploaderId: actor.id,
      },
    });
    await database().auditLog.create({
      data: { actorId: actor.id, action: "media.created", entityId: id },
    });
    target = undefined;
    return Response.json(record, { status: 201 });
  } catch (error) {
    if (target) await unlink(target).catch(() => {});
    const status = error instanceof HttpError ? error.status : 422;
    return Response.json(
      {
        error:
          error instanceof HttpError
            ? error.message
            : "ذخیرهٔ تصویر انجام نشد؛ فایل را بررسی کنید",
      },
      { status },
    );
  }
}
