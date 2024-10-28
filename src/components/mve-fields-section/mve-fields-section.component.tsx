import { MveImageField } from '@app-types/mve-image-field.type';
import { useDataMveImageFields } from '@hooks/use-data-mve-image-fields.hook';
import { LoadingElement } from '@components/loading-element';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MveField } from '../mve-field';
import styles from './mve-fields-section.module.scss';

export interface MveFieldsSectionProps {
  mveImageId: string;
}

export function MveFieldsSection({ mveImageId }: MveFieldsSectionProps) {
  const { fields, isLoading } = useDataMveImageFields(mveImageId);
  const [currentField, setCurrentField] = useState<MveImageField['id'] | undefined>();

  if (isLoading) return <LoadingElement />;
  if (!fields) throw new Error('Mve fields not found');

  return (
    <div className={styles.MveFieldsSection}>

      <div className={styles.Heading}>Fields</div>

      {fields.map((field) => (
        <ErrorBoundary fallback={<div>Could not load field {field.id}</div>}>
          <MveField
            fieldId={field.id}
            key={field.id}
            isSelected={currentField === field.id}
            onSelect={() => setCurrentField(field.id)}
          />
        </ErrorBoundary>
      ))}
    </div>
  );
}
