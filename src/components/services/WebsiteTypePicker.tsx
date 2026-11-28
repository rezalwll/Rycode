"use client";

import { ArrowLeft } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import styles from "./WebsiteDesignPage.module.css";

type SiteType = {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
};

export function WebsiteTypePicker({ items }: { items: SiteType[] }) {
  const groupId = useId();
  const [selected, setSelected] = useState(items[0]?.id);

  return (
    <div className={styles.typePicker}>
      <fieldset className={styles.typeChoices}>
        <legend className="sr-only">نوع سایت</legend>
        {items.map(({ id, number, title }) => (
          <label key={id} className={styles.typeChoice}>
            <input
              type="radio"
              name={groupId}
              value={id}
              checked={id === selected}
              onChange={() => setSelected(id)}
              aria-controls={`${groupId}-${id}`}
            />
            <span
              className={`${styles.number} ${styles.choiceNumber}`}
              aria-hidden="true"
            >
              {number}
            </span>
            <span>{title}</span>
            <ArrowLeft
              size={16}
              className={styles.choiceArrow}
              aria-hidden="true"
            />
          </label>
        ))}
      </fieldset>
      <div className={styles.typeStage}>
        {items.map(({ id, title, content }) => (
          <section
            key={id}
            id={`${groupId}-${id}`}
            aria-labelledby={`${groupId}-${id}-title`}
            data-active={id === selected}
            inert={id !== selected}
            className={styles.typePanel}
          >
            <h3 id={`${groupId}-${id}-title`}>{title}</h3>
            {content}
          </section>
        ))}
      </div>
    </div>
  );
}
