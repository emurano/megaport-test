import { MveImageField } from '@app-types/mve-image-field.type';
import { BaseFieldTester } from './base-field-tester.component';
import { numberRangeValidator } from './number-range.validator';
import { numberValidator } from './number.validator';
import { requiredValidator } from './required.validator';

export interface NumberFieldTesterProps {
  field: MveImageField;
}

const validators = [requiredValidator, numberValidator, numberRangeValidator];

export function NumberFieldTester({ field }: NumberFieldTesterProps) {
  return (
    <BaseFieldTester
      field={field}
      validators={validators}
      placeholder="Test your number here"
    />
  );
}
