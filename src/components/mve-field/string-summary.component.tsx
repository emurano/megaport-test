import { LabelledField } from '../labelled-field';
import { formatNumber } from '../../functions/format-number.function';
import { MveFieldSummaryProps } from './mve-field-summary.component';
import { numberIsset } from '../../functions/number-isset.function';
import styles from './mve-field-summary.module.scss';

export function StringSummary({ field }: MveFieldSummaryProps) {
  return (
    <>
      {numberIsset(field.min_length) && (
        <LabelledField label="Min length">
          <span className={styles.FieldValue}>
            {formatNumber(field.min_length)}
          </span>
        </LabelledField>
      )}

      {numberIsset(field.max_length) && (
        <LabelledField label="Max length">
          <span className={styles.FieldValue}>
            {formatNumber(field.max_length)}
          </span>
        </LabelledField>
      )}

      {field.regex && (
        <LabelledField label="Must match">
          <span className={styles.FieldValue}>{field.regex}</span>
        </LabelledField>
      )}
    </>
  );
}
