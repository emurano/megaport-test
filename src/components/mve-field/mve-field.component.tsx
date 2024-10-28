import { useDataMveImageField } from '@hooks/use-data-mve-field.hook';
import { LoadingElement } from '../loading-element';
import { MveFieldSummary } from './mve-field-summary.component';
import styles from './mve-field.module.scss';

export interface MveFieldProps {
  fieldId: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function MveField({ fieldId, onSelect, isSelected }: MveFieldProps) {
  const { field, isLoading } = useDataMveImageField(fieldId);

  if (isLoading) return <LoadingElement testId="mve-field-loading"/>;
  if (!field) throw new Error(`No MVE field with id '${fieldId}'`);

  return (
    <div key={field.id} onClick={() => onSelect()} className={styles.MveField}>
      <div>
        <div className={styles.Heading}>
          <span>
            <span className={styles.FieldKey}>{field.key}</span>
            {field.required && (<span className={styles.Required}>{' '}*</span>)}
          </span>

          <div className={styles.TypePill}>({field.type})</div>
        </div>
        {isSelected && (<MveFieldSummary field={field} /> )}
      </div>
    </div>
  );
}
