const FEATURE_SPEED = 44;
/** Pause at the current offset so the cards resume without jumping. */
export function advanceFeatureMarquee(
  offset: number,
  elapsedMs: number,
  period: number,
  hovered: boolean,
): number {
  if (hovered || !Number.isFinite(period) || period <= 0) return offset;
  const seconds = Number.isFinite(elapsedMs)
    ? Math.max(0, Math.min(elapsedMs, 64)) / 1000
    : 0;
  return (offset + FEATURE_SPEED * seconds) % period;
}
