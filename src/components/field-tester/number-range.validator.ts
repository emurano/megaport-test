import { MveImageField } from '@app-types/mve-image-field.type';
import { numberIsset } from '@functions/number-isset.function';

export function numberRangeValidator(field: MveImageField, testData: string): string | undefined {
  if (testData.length === 0) return undefined;
  const asNumber = Number(testData);
  if (isNaN(asNumber)) return undefined;
  if (numberIsset(field.max_value) && asNumber > field.max_value) {
    return 'Test data is greater than the field\'s maximum value';
  }
  if (numberIsset(field.min_value) && asNumber < field.min_value) {
    return 'Test data is less than the field\'s minimum value';
  }
}
