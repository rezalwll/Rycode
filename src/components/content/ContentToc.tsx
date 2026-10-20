import styles from "./Content.module.css";
type Props = {
  headings: { id: string; title: string }[];
  fa: boolean;
  hasFaq: boolean;
  mobile?: boolean;
};
export function ContentToc({ headings, fa, hasFaq, mobile = false }: Props) {
  const title = fa ? "در این صفحه" : "On this page";
  const links = (
    <>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={"#" + heading.id}>{heading.title}</a>
          </li>
        ))}
      </ol>
      {hasFaq && (
        <a href="#faq">
          {fa ? "پرسش‌های متداول" : "Frequently asked questions"}
        </a>
      )}
    </>
  );
  return mobile ? (
    <details className={styles.toc + " " + styles.mobileToc}>
      <summary>{title}</summary>
      <nav aria-label={title}>{links}</nav>
    </details>
  ) : (
    <nav className={styles.toc + " " + styles.desktopToc} aria-label={title}>
      <h3>{title}</h3>
      {links}
    </nav>
  );
}
