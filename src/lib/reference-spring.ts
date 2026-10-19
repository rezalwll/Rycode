// Critically damped, zero-velocity spring used by the reference's
// { type: "spring", bounce: 0, duration: 1.2 } project entrance transitions.
// Resolve exp(-w) * (1 + w) = 0.001, the reference's duration threshold.
let frequency = 5;
for (let iteration = 1; iteration < 12; iteration++) {
  frequency -=
    (Math.exp(-frequency) * (frequency + 1) - 0.001) /
    (-frequency * Math.exp(-frequency));
}

export function referenceSpringProgress(progress: number): number {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;
  const time = frequency * progress;
  return 1 - Math.exp(-time) * (1 + time);
}

export const referenceSpringEasing = `linear(${Array.from(
  { length: 121 },
  (_, index) => referenceSpringProgress(index / 120).toFixed(6),
).join(",")})`;
