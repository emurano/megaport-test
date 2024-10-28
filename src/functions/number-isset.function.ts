export function numberIsset(value: number | null | undefined): value is number {
  if (value === 0) return true;
  return !!value;
}
