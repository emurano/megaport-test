export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-AU', { maximumSignificantDigits: 2 }).format(
    value
  );
}
