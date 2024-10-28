import { MveImageField } from '@app-types/mve-image-field.type';
import { BaseFieldTester } from './base-field-tester.component';
import { regularExpressionValidator } from './regular-expression.validator';
import { requiredValidator } from './required.validator';
import { stringLengthRangeValidator } from './string-length-range.validator';

export interface StringFieldTesterProps {
  field: MveImageField;
}

const validators = [
  requiredValidator,
  stringLengthRangeValidator,
  regularExpressionValidator,
];

export function StringFieldTester({ field }: StringFieldTesterProps) {
  return (
    <BaseFieldTester
      field={field}
      validators={validators}
      placeholder="Test your string here"
    />
  );
}
