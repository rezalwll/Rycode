import Image from "next/image";
import styles from "./ServicePhoto.module.css";

export function ServicePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.photo}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1280px) 53vw, 650px"
      />
    </div>
  );
}
