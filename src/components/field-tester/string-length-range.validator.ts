import { MveImageField } from '@app-types/mve-image-field.type';
import { numberIsset } from '@functions/number-isset.function';

export function stringLengthRangeValidator(field: MveImageField, testData: string): string | undefined {
  // If the string is empty, it should only be an issue if the field is required
  if (testData.length === 0) return undefined;
  if (numberIsset(field.max_length) && testData.length > field.max_length) {
    return 'Test data is longer than the field\'s maximum length';
  }
  if (numberIsset(field.min_length) && testData.length < field.min_length) {
    return 'Test data is shorter than the field\'s minimum length';
  }
}
