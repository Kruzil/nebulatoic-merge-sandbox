// Dummy scoring helpers for sandbox PRs.
export function addScore(total, points) {
  if (!Number.isInteger(points) || points < 0) throw new RangeError('points must be a non-negative integer');
  return total + points;
}

export function comboMultiplier(streak) {
  if (streak >= 10) return 3;
  if (streak >= 5) return 2;
  return 1;
}
