import { MveImageField } from '@app-types/mve-image-field.type';

export function requiredValidator(field: MveImageField, testData: string): string | undefined {
  if (!field.required) return undefined;
  if (testData.length === 0) return 'Field is required but test data is empty';
}
