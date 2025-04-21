export function randomStringGenerator(length = 12): string {
  return Math.random()
    .toString(36)
    .slice(2, 2 + length);
}
