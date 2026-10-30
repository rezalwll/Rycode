import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const brandCss = await readFile(
  new URL("../src/app/brand.css", import.meta.url),
  "utf8",
);
const brandBlue = brandCss.match(/--brand-blue:\s*(#[\da-f]{6})/i)?.[1];
if (!brandBlue) throw new Error("The wordmark's brand blue is not configured.");

// Retain the supplied silhouette and match the wordmark's exact brand blue.
const source = await readFile(
  new URL("../public/brand/source-footer/rycode-chevron.png", import.meta.url),
);
const original = await sharp(source).resize({ width: 640 }).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1109" height="1418" viewBox="0 0 1109 1418">
  <defs><mask id="artwork" mask-type="alpha"><image width="1109" height="1418" href="data:image/png;base64,${original.toString("base64")}"/></mask></defs>
  <rect width="1109" height="1418" fill="${brandBlue}" mask="url(#artwork)"/>
</svg>
`;
await writeFile(
  new URL("../public/brand/rycode-mark.svg", import.meta.url),
  svg,
);

const mark = await sharp(Buffer.from(svg))
  .resize({ height: 1024 })
  .png()
  .toBuffer();

// Keep legacy image URLs blue as well, including stored CMS image references.
for (const name of ["rycode-charcoal.webp", "rycode-white.webp"]) {
  const path = new URL(`../public/brand/${name}`, import.meta.url);
  const { width, height } = await sharp(await readFile(path)).metadata();
  const image = await sharp(mark)
    .resize({ width, height, fit: "contain", background: "#00000000" })
    .webp({ lossless: true })
    .toBuffer();
  await writeFile(path, image);
}
async function icon(size) {
  const padding = Math.max(1, Math.round(size / 24));
  return sharp(mark)
    .trim()
    .resize({
      width: size - padding * 2,
      height: size - padding * 2,
      fit: "contain",
      background: "#00000000",
    })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: "#00000000",
    })
    .png()
    .toBuffer();
}
await writeFile(
  new URL("../src/app/icon.png", import.meta.url),
  await icon(256),
);
await writeFile(
  new URL("../src/app/apple-icon.png", import.meta.url),
  await icon(180),
);

// ICO supports embedded PNGs, preserving transparent edges at each native size.
const sizes = [16, 32, 48, 64];
const images = await Promise.all(sizes.map(icon));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(
  new URL("../src/app/favicon.ico", import.meta.url),
  Buffer.concat([directory, ...images]),
);

const shareCard = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <image x="76" y="176" width="150" height="192" href="data:image/png;base64,${mark.toString("base64")}"/>
  <text x="270" y="320" font-family="Arial, Helvetica, sans-serif" font-size="110" font-weight="700"><tspan fill="${brandBlue}">RY</tspan><tspan fill="#000">CODE</tspan></text>
  <text x="80" y="530" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#666">Websites. Software. Your next stage of growth.</text>
  <path d="M60 560h1080" stroke="#e7e7e7"/>
</svg>`;
await writeFile(
  new URL("../public/brand/og-card.png", import.meta.url),
  await sharp(Buffer.from(shareCard)).png().toBuffer(),
);
process.stdout.write("Generated RYCODE emblem, app icons and share card.\n");
