import { MveImageField } from '@app-types/mve-image-field.type';

export function numberValidator(_: MveImageField, testData: string): string | undefined {
  if (testData.length === 0) return undefined;
  const asNumber = Number(testData);
  if (isNaN(asNumber)) return 'Test data must be number';
}
