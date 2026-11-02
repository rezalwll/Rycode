import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
const destination = new URL(
  "../public/brand/journal/business/",
  import.meta.url,
);
await mkdir(destination, { recursive: true });
const blue = "#3a91cb",
  purple = "#9680ce",
  ink = "#344b61";
const panel = (x, y, w, h, content, fill = "#fff") =>
  `<g filter="url(#shadow)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="25" fill="${fill}" stroke="#dce5ef"/><path d="M${x},${y + 57}h${w}" stroke="#e7edf4"/><g fill="#c5d0de"><circle cx="${x + 27}" cy="${y + 28}" r="5"/><circle cx="${x + 46}" cy="${y + 28}" r="5"/><circle cx="${x + 65}" cy="${y + 28}" r="5"/></g>${content}</g>`;
const bar = (x, y, width, fill = "#e9eef5", height = 15) =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${height / 2}" fill="${fill}"/>`;
const check = (x, y, fill = blue) =>
  `<circle cx="${x}" cy="${y}" r="24" fill="${fill}"/><path d="m${x - 10},${y} 7,7 14,-15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
const drawings = {
  compare:
    panel(
      165,
      195,
      395,
      320,
      `<rect x="195" y="279" width="155" height="190" rx="12" fill="#e1edf8"/>${bar(375, 295, 145, ink)}${bar(375, 330, 115)}${bar(375, 364, 145)}${bar(375, 420, 100, blue, 32)}`,
    ) +
    panel(
      640,
      195,
      395,
      320,
      `<rect x="675" y="280" width="325" height="86" rx="12" fill="#e8e2f5"/>${bar(675, 396, 150, ink)}${bar(675, 434, 120)}${bar(856, 396, 144, purple, 67)}`,
    ) +
    `<circle cx="600" cy="352" r="37" fill="${ink}"/><path d="M582 343h36m-8-8 8 8-8 8m8 10h-36m8-8-8 8 8 8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
  budget: panel(
    260,
    145,
    680,
    460,
    `${bar(305, 238, 280, ink, 20)}${bar(305, 281, 180)}<path d="M305 332h590M305 392h590M305 452h590" stroke="#e9eef5" stroke-width="2"/>${bar(305, 354, 210)}${bar(747, 350, 105, blue, 26)}${bar(305, 414, 265)}${bar(747, 410, 105, purple, 26)}${bar(305, 474, 170)}${bar(747, 470, 105, blue, 26)}${check(820, 550)}`,
  ),
  repair: panel(
    200,
    175,
    800,
    400,
    `<rect x="235" y="270" width="295" height="240" rx="14" fill="#edf0f5"/>${bar(265, 306, 195, "#b9c5d3")}${bar(265, 348, 155)}${bar(265, 394, 210)}${bar(265, 447, 100, "#b9c5d3", 28)}<path d="M555 385h65m-15-14 15 14-15 14" fill="none" stroke="${ink}" stroke-width="4"/><rect x="650" y="270" width="315" height="80" rx="14" fill="#e6e0f6"/>${bar(650, 380, 190, ink)}${bar(650, 420, 270)}${bar(650, 467, 135, blue, 32)}${check(960, 560, purple)}`,
  ),
  growth: panel(
    220,
    160,
    760,
    440,
    `<rect x="265" y="253" width="670" height="62" rx="31" fill="#f0f4f9"/><circle cx="300" cy="282" r="12" fill="none" stroke="${ink}" stroke-width="3"/><path d="m310 292 9 9" stroke="${ink}" stroke-width="3"/>${bar(340, 277, 300, "#c3d2e1")}${bar(265, 355, 235, ink)}${bar(265, 397, 285)}${bar(265, 434, 210)}${bar(265, 490, 120, blue, 31)}<path d="M620 500V360m0 140h260" stroke="#e5ebf2" stroke-width="2"/><path d="m640 471 57-38 60 11 46-62 64-28" fill="none" stroke="${purple}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="867" cy="354" r="12" fill="${blue}"/>`,
  ),
  software:
    panel(
      240,
      140,
      720,
      410,
      `<rect x="270" y="225" width="145" height="275" rx="12" fill="${ink}"/>${bar(295, 250, 88, "#8eabc2")}${bar(295, 300, 62, blue)}${bar(295, 345, 81, "#8eabc2")}${bar(295, 390, 69, "#8eabc2")}${bar(455, 230, 200, ink, 19)}<rect x="455" y="278" width="210" height="130" rx="15" fill="#e4edf7"/><rect x="690" y="278" width="220" height="130" rx="15" fill="#e8e2f5"/>${bar(455, 440, 455)}${bar(455, 474, 320)}`,
    ) +
    `<rect x="725" y="405" width="175" height="220" rx="22" fill="#fff" stroke="#ccd9e6" filter="url(#shadow)"/>${bar(745, 435, 135, purple, 72)}${bar(745, 530, 100)}${bar(745, 563, 135)}`,
  automation: `<path d="M300 365h600M600 225v310" stroke="#c3cfe0" stroke-width="5" stroke-dasharray="10 12"/><g filter="url(#shadow)"><rect x="175" y="280" width="220" height="180" rx="28" fill="#fff"/><rect x="490" y="260" width="220" height="210" rx="28" fill="${ink}"/><rect x="805" y="280" width="220" height="180" rx="28" fill="#fff"/></g><rect x="215" y="330" width="140" height="85" rx="12" fill="#e0ecf8"/><path d="m225 343 60 43 60-43" fill="none" stroke="${blue}" stroke-width="4"/><path d="m619 302-54 73h39l-22 55 55-76h-40Z" fill="${purple}"/>${check(915, 365)}<circle cx="600" cy="193" r="35" fill="#e5def5"/><circle cx="600" cy="545" r="35" fill="#dcecf8"/><circle cx="600" cy="545" r="11" fill="${blue}"/>`,
  data: panel(
    195,
    165,
    810,
    430,
    `${bar(235, 260, 220, ink, 19)}<rect x="235" y="310" width="360" height="225" rx="13" fill="#f1f5fa"/><path d="M235 355h360M235 400h360M235 445h360M235 490h360M325 310v225M415 310v225M505 310v225" stroke="#d4e0ec" stroke-width="2"/><rect x="325" y="355" width="90" height="45" fill="#d4c9ef"/><rect x="505" y="445" width="90" height="45" fill="#cbe3f5"/><rect x="655" y="420" width="52" height="115" rx="8" fill="${blue}"/><rect x="735" y="350" width="52" height="185" rx="8" fill="${purple}"/><rect x="815" y="390" width="52" height="145" rx="8" fill="${ink}"/>${bar(650, 275, 240)}`,
  ),
  support:
    panel(
      250,
      175,
      700,
      390,
      `${bar(290, 270, 220, ink, 20)}${bar(290, 320, 185)}${bar(290, 365, 155)}${bar(290, 420, 175, blue, 32)}<path d="m760 270 100 37v88c0 66-100 113-100 113s-100-47-100-113v-88Z" fill="#e2dcf3" stroke="${purple}" stroke-width="3"/><path d="m718 380 30 30 59-65" fill="none" stroke="${blue}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>`,
    ) + check(935, 540),
};
for (const [name, drawing] of Object.entries(drawings)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#ecf4fa"/><stop offset="1" stop-color="#eeE8f7"/></linearGradient><pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0v42" fill="none" stroke="#fff" stroke-opacity=".45"/></pattern><filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dy="16" stdDeviation="22" flood-color="#536b87" flood-opacity=".12"/></filter></defs><rect width="1200" height="750" fill="url(#bg)"/><rect width="1200" height="750" fill="url(#grid)"/><circle cx="1080" cy="40" r="260" fill="#d6c9ed" opacity=".25"/><circle cx="100" cy="720" r="200" fill="#c6e2f3" opacity=".35"/><text x="55" y="68" font-family="Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="${ink}">RYCODE</text><path d="M1100 62h40m-20-20v40" stroke="${purple}" stroke-width="3"/>${drawing}<path d="M55 680h60" stroke="${blue}" stroke-width="5" stroke-linecap="round"/><circle cx="1140" cy="680" r="7" fill="${purple}"/></svg>`;
  await writeFile(
    new URL(name + ".png", destination),
    await sharp(Buffer.from(svg)).png().toBuffer(),
  );
}
console.log(
  `Generated ${Object.keys(drawings).length} original business-journal covers.`,
);
