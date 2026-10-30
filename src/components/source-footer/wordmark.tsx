export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      dir="ltr"
      className={["rycode-wordmark", className].filter(Boolean).join(" ")}
    >
      <span className="rycode-wordmark-prefix">
        <span className="brand-letter-r">R</span>
        <span className="brand-letter-y">Y</span>
      </span>
      <span className="rycode-wordmark-suffix brand-code">CODE</span>
    </span>
  );
}
