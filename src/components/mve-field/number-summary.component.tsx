import { LabelledField } from '@components/labelled-field';
import { formatNumber } from '@functions/format-number.function';
import { numberIsset } from '@functions/number-isset.function';
import { MveFieldSummaryProps } from './mve-field-summary.component';
import styles from './mve-field-summary.module.scss';

export function NumberSummary({ field }: MveFieldSummaryProps) {
  return (
    <>
      {numberIsset(field.min_value) && (
        <LabelledField label="Min">
          <span className={styles.FieldValue}>
            {formatNumber(field.min_value)}
          </span>
        </LabelledField>
      )}

      {numberIsset(field.max_value) && (
        <LabelledField label="Max">
          <span className={styles.FieldValue}>
            {formatNumber(field.max_value)}
          </span>
        </LabelledField>
      )}
    </>
  );
}
