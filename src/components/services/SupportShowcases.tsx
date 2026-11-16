"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { supportScenarios, supportServices } from "./support-copy";
import styles from "./SupportServicePage.module.css";

export function SupportGallery({
  items,
  label,
}: {
  items: typeof supportServices;
  label: string;
}) {
  const [active, setActive] = useState(items[0].id);

  return (
    <div className={styles.gallery} role="group" aria-label={label}>
      {items.map(({ id, title, description, points, image }) => (
        <article
          key={id}
          className={styles.galleryCard}
          data-active={id === active}
        >
          <div className={styles.galleryImage}>
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 720px) 92vw, 48vw"
            />
          </div>
          <button
            type="button"
            aria-expanded={id === active}
            aria-controls={`support-service-${id}`}
            onClick={() => setActive(id)}
          >
            <span>{title}</span>
            <ArrowUpLeft size={16} aria-hidden="true" />
          </button>
          <div
            className={styles.galleryCopy}
            id={`support-service-${id}`}
            hidden={id !== active}
          >
            <p>{description}</p>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SupportScenarios() {
  const [active, setActive] = useState(0);
  const scenario = supportScenarios[active];

  return (
    <div>
      <div
        className={styles.scenarioControls}
        role="group"
        aria-label="نوع پروژه"
      >
        {supportScenarios.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            aria-pressed={index === active}
            aria-controls="support-scenario-panel"
            onClick={() => setActive(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <article
        className={styles.scenario}
        id="support-scenario-panel"
        aria-live="polite"
      >
        <div className={styles.scenarioInner} key={scenario.title}>
          <div className={styles.scenarioPhoto}>
            <Image
              src={scenario.image}
              fill
              alt=""
              sizes="(max-width: 720px) 92vw, 48vw"
            />
          </div>
          <div className={styles.scenarioCopy}>
            <h3>{scenario.title}</h3>
            <dl>
              <div>
                <dt>مسئله</dt>
                <dd>{scenario.issue}</dd>
              </div>
              <div>
                <dt>مسیر رسیدگی</dt>
                <dd>{scenario.plan}</dd>
              </div>
            </dl>
          </div>
        </div>
      </article>
    </div>
  );
}
