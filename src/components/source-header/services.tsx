"use client";
import { createContext, useContext, type ReactNode } from "react";
import { services } from "@/content/services";

const slugs: Record<string, string> = {
  build: "web-development",
  grow: "seo-growth",
  software: "custom-software",
  rescue: "project-rescue",
  connect: "api-integration",
  data: "data-analytics",
  continue: "ongoing-support",
};
export const serviceHighlights = services.map((service) => ({
  ...service,
  slug: slugs[service.id] || service.id,
}));
type HeaderService = { id: string; title: string };
const Context = createContext<HeaderService[] | null>(null);
export function HeaderServicesProvider({
  services,
  children,
}: {
  services: HeaderService[];
  children: ReactNode;
}) {
  return <Context.Provider value={services}>{children}</Context.Provider>;
}
export function useHeaderServices() {
  const current = useContext(Context);
  return current
    ? current.map((service) => ({
        id: service.id,
        slug: slugs[service.id] || service.id,
        title: { fa: service.title, en: service.title },
      }))
    : serviceHighlights;
}
