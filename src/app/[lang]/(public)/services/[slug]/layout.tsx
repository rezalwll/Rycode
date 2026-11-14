import type { ReactNode } from "react";

export default function ServiceDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  // The overview uses the public site's shared buttons; detail styles stay intact.
  return (
    <div data-service-page className="public-service-boundary">
      {children}
    </div>
  );
}
