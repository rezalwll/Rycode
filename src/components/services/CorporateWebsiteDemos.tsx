"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import {
  corporateJourneys,
  corporateSiteTypes,
} from "./corporate-website-copy";
import styles from "./CorporateWebsitePage.module.css";

const numbering = new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 });

export function CorporateSiteTypes() {
  const [choice, setChoice] = useState(0);
  const type = corporateSiteTypes[choice];

  return (
    <div className={styles.types}>
      <fieldset className={styles.typeChoices}>
        <legend className={styles.srOnly}>نوع شرکتت رو انتخاب کن</legend>
        {corporateSiteTypes.map(({ title, goal }, index) => (
          <label key={title} className={styles.typeChoice}>
            <input
              type="radio"
              name="corporate-site-type"
              value={title}
              checked={index === choice}
              onChange={() => setChoice(index)}
              aria-controls="corporate-type-preview"
            />
            <span className={styles.typeNumber} aria-hidden="true">
              {numbering.format(index + 1)}
            </span>
            <span>
              <strong>{title}</strong>
              <small>{goal}</small>
            </span>
            <ArrowLeft size={18} aria-hidden="true" />
          </label>
        ))}
      </fieldset>
      <div id="corporate-type-preview" aria-live="polite">
        <article className={styles.typePreview} key={type.title}>
          <figure className={styles.typeImage}>
            <Image
              src={type.image}
              alt=""
              fill
              sizes="(max-width: 850px) 94vw, (max-width: 1200px) 52vw, 750px"
            />
          </figure>
          <div className={styles.typeDetails}>
            <h3>{type.title}</h3>
            <p>{type.description}</p>
            <ul>
              {type.items.map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export function CorporateCustomerJourney() {
  const [choice, setChoice] = useState(0);
  const journey = corporateJourneys[choice];

  return (
    <div className={styles.journeyDemo}>
      <fieldset className={styles.journeyChoices}>
        <legend className={styles.srOnly}>نقش بازدیدکننده رو انتخاب کن</legend>
        {corporateJourneys.map(({ audience }, index) => (
          <label key={audience}>
            <input
              type="radio"
              name="corporate-journey"
              value={audience}
              checked={index === choice}
              onChange={() => setChoice(index)}
              aria-controls="corporate-journey-preview"
            />
            <span>{audience}</span>
          </label>
        ))}
      </fieldset>
      <div id="corporate-journey-preview" aria-live="polite">
        <div key={journey.audience} className={styles.journeyResult}>
          <p>{journey.summary}</p>
          <ol className={styles.journeySteps}>
            {journey.steps.map(([title, description], index) => (
              <li key={title}>
                <span className={styles.journeyNumber} aria-hidden="true">
                  {numbering.format(index + 1)}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
