"use client";

import type { HTMLAttributes } from "react";
import { Reveal } from "./Motion";
import { referenceSpringEasing } from "@/lib/reference-spring";

/** Project title, description, and metadata enter with 0/100/200ms stagger. */
export function ProjectReveal({
  delay = 0,
  ...props
}: HTMLAttributes<HTMLDivElement> & { delay?: number }) {
  return (
    <Reveal
      {...props}
      from="translateY(300px)"
      duration={1200}
      delay={delay}
      initialOpacity={0.001}
      easing={referenceSpringEasing}
    />
  );
}
