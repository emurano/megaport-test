import { MveImageField } from '@app-types/mve-image-field.type';

export function regularExpressionValidator(
  field: MveImageField,
  testData: string
): string | undefined {
  // If the string is empty, it should only be an issue if the field is required
  if (testData.length === 0) return undefined;
  if (!field.regex || field.regex.length === 0) return;
  const regex = new RegExp(field.regex);
  if (!regex.test(testData)) {
    return `Test data must match the regular expression "${field.regex}"`;
  }
}
