import type { ReactNode } from "react";

type IllustrationProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  title?: string;
};

function Illustration({
  size = 88,
  strokeWidth = 1.7,
  className,
  title,
  children,
}: IllustrationProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      fill="none"
      height={size}
      role={title ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 120 120"
      width={size}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function BoxIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <path d="m60 90 40-20V30L60 10 20 30v40l40 20Z" />
      <path d="m20 30 40 20 40-20M60 50v40" />
      <path d="M60 90v20M45 100l15 15 15-15" />
    </Illustration>
  );
}

export function HeadsetIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <path d="M25 60a35 35 0 0 1 70 0" />
      <path d="M29 58H19c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V62c0-2.2-1.8-4-4-4ZM91 58h10c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H91c-2.2 0-4-1.8-4-4V62c0-2.2 1.8-4 4-4Z" />
      <path d="M96 88c0 12-8 18-24 18h-10" />
      <rect height="10" rx="3" width="14" x="50" y="100" />
    </Illustration>
  );
}

export function DocumentIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <path d="M30 10h40l20 20v80H30V10Z" />
      <path d="M70 10v20h20M40 50h40M40 63h40M40 76h26" />
      <path d="M20 30v90h60" />
    </Illustration>
  );
}

export function GlobeIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <circle cx="60" cy="60" r="36" />
      <path d="M60 24c8 0 14 16 14 36s-6 36-14 36-14-16-14-36 6-36 14-36ZM24 60h72M30 42h60M30 78h60" />
      <circle cx="96" cy="96" r="10" />
      <path d="m103 103 12 12" />
    </Illustration>
  );
}

export function FlowIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <circle cx="23" cy="60" r="10" />
      <circle cx="60" cy="28" r="10" />
      <circle cx="97" cy="60" r="10" />
      <circle cx="60" cy="92" r="10" />
      <path d="m31 55 20-18M69 37l20 18M89 65 69 83M51 83 31 65" />
    </Illustration>
  );
}

export function CalendarIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <rect height="74" rx="8" width="78" x="21" y="28" />
      <path d="M21 48h78M40 18v20M80 18v20M38 64h8M56 64h8M74 64h8M38 80h8M56 80h8M74 80h8" />
      <circle cx="89" cy="93" r="13" />
      <path d="M89 86v8l5 3" />
    </Illustration>
  );
}

export function FileStackIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <path d="M28 30h48l16 16v58H28V30Z" />
      <path d="M76 30v16h16M40 62h40M40 76h40M40 90h24" />
      <path d="M18 20h48l8 8M18 20v68" />
    </Illustration>
  );
}

export function PanelIllustration(props: IllustrationProps) {
  return (
    <Illustration {...props}>
      <rect height="78" rx="6" width="92" x="14" y="20" />
      <path d="M14 40h92M28 56h22M28 68h34M28 80h16M74 56v28M84 56v28M94 56v28" />
      <circle cx="24" cy="30" r="2" />
      <circle cx="32" cy="30" r="2" />
      <circle cx="40" cy="30" r="2" />
    </Illustration>
  );
}

export const automationIllustrations = [
  BoxIllustration,
  HeadsetIllustration,
  FlowIllustration,
  GlobeIllustration,
  DocumentIllustration,
  FileStackIllustration,
  CalendarIllustration,
  PanelIllustration,
] as const;
