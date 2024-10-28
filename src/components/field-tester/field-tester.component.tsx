import { useDataMveImageField } from '@hooks/use-data-mve-field.hook';
import { LoadingElement } from '../loading-element';
import { NumberFieldTester } from './number-field-tester.component';
import { StringFieldTester } from './string-field-tester.component';

export interface FieldTesterProps {
  fieldId: string;
}

export function FieldTester({ fieldId }: FieldTesterProps) {
   const { field, isLoading } = useDataMveImageField(fieldId);
   if (isLoading) return <LoadingElement />;
   if (!field) throw new Error(`No field with id ${fieldId}`);
   if (field.type === 'number') return <NumberFieldTester field={field} />;
   if (field.type === 'string') return <StringFieldTester field={field} />;
   return <></>;
}
