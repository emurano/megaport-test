import { MveImageField } from '@app-types/mve-image-field.type';
import { FieldTester } from '../field-tester';
import { LabelledField } from '../labelled-field';
import styles from './mve-field-summary.module.scss';
import { NumberSummary } from './number-summary.component';
import { StringSummary } from './string-summary.component';

export interface MveFieldSummaryProps {
  field: MveImageField;
}

export function MveFieldSummary({ field }: MveFieldSummaryProps) {
  return (
    <div className={styles.MveFieldSummary}>
      <LabelledField label="Required">
        <span>{field.required ? 'Yes' : 'No'}</span>
      </LabelledField>

      {field.type === 'number' && <NumberSummary field={field} />}
      {field.type === 'string' && <StringSummary field={field} />}

      <FieldTester fieldId={field.id} />
    </div>
  );
}
