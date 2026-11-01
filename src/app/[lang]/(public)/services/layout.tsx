import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <div data-service-page className="public-service-boundary">{children}</div>;
}
