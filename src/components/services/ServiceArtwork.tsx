import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./ServiceArtwork.module.css";

type Bounds = [left: number, top: number, width: number, height: number];

// Frame the screen inside each mockup. The source art remains usable elsewhere.
const channelCrops: Record<string, Bounds> = {
  build: [177, 219, 544, 343],
  connect: [158, 236, 582, 311],
  continue: [251, 247, 398, 307],
  data: [220, 219, 455, 344],
  grow: [154, 240, 543, 287],
  rescue: [246, 280, 409, 224],
  software: [253, 247, 393, 309],
};

const homeCrops: Record<string, Bounds> = {
  "business-site": [65, 100, 606, 312],
  "content-work": [65, 88, 764, 333],
  "custom-excel": [90, 66, 710, 378],
  "landing-redesign": [50, 4, 794, 442],
  "online-store": [91, 104, 665, 319],
  "reporting-dashboard": [55, 58, 841, 434],
  "stalled-project": [206, 35, 497, 420],
  "technical-seo": [124, 72, 632, 354],
  "website-support": [73, 71, 758, 430],
  "workflow-automation": [253, 54, 396, 391],
};

const channelPrefix = "/brand/channel-services/capabilities/";
const homePrefix = "/brand/home-service-cards/";

export function ServiceArtwork({
  src,
  className,
  sizes,
  framing = "screen",
}: {
  src: string;
  className: string;
  sizes: string;
  framing?: "screen" | "card";
}) {
  const isChannel = src.startsWith(channelPrefix);
  const isHome = src.startsWith(homePrefix);
  const file = src.slice(src.lastIndexOf("/") + 1).replace(/\.webp$/, "");
  const crops = isChannel ? channelCrops : homeCrops;
  const bounds =
    framing === "screen" && (isChannel || isHome) ? crops[file] : undefined;
  const frameClass = `${styles.frame} ${className}`;

  if (!bounds) {
    return (
      <div
        className={framing === "card" ? `${frameClass} ${styles.card}` : frameClass}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          unoptimized={!isHome}
          draggable={false}
        />
      </div>
    );
  }

  const [left, top, width, height] = bounds;
  const [sourceWidth, sourceHeight] = isChannel ? [900, 760] : [896, 504];
  const cropStyle = {
    "--crop-ratio": width / height,
    "--source-width": `${(sourceWidth / width) * 100}%`,
    "--source-height": `${(sourceHeight / height) * 100}%`,
    "--source-left": `${(-left / width) * 100}%`,
    "--source-top": `${(-top / height) * 100}%`,
  } as CSSProperties;

  return (
    <div className={`${frameClass} ${styles.cropped}`}>
      <div className={styles.crop} style={cropStyle}>
        <Image
          src={src}
          alt=""
          width={sourceWidth}
          height={sourceHeight}
          unoptimized
          draggable={false}
        />
      </div>
    </div>
  );
}
