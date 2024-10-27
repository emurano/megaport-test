import { MveImage } from '@app-types/mve-image.type';
import Button from '@mui/material/Button';
import { ErrorBoundary } from 'react-error-boundary';
import { MveFieldsSection } from '../mve-fields-section';
import styles from './mve-image-card.module.scss';
import { MveImageField } from './mve-image-field.component';

export interface MveImageCardProps {
  mveImage: MveImage;
  isExpanded?: boolean;
  onExpand?: () => void;
}

export function MveImageCard({
  mveImage,
  isExpanded = false,
  onExpand,
}: MveImageCardProps) {
  return (
    <div className={styles.MveImageCard}>
      <div className={styles.Heading}>
        <div className={styles.Name}>{mveImage.name}</div>
        <div className={styles.Id}>{mveImage.id}</div>
      </div>

      {mveImage.description && mveImage.description.length > 0 && (
        <div className={styles.Description}>
          {mveImage.description}
        </div>
      )}

      <div className={styles.Summary}>
        <MveImageField name="Minumum CPUs">{mveImage.min_cpu}</MveImageField>
        <MveImageField name="Maximum CPUs">{mveImage.max_cpu}</MveImageField>
        <MveImageField name="Memory Options">
          {mveImage.memory_options?.join(',')}
        </MveImageField>
      </div>

      <div className={styles.ExpandFieldSection}>
        {!isExpanded && !!onExpand && (
          <Button type="button" variant="text" onClick={() => onExpand()}>
            Show Fields
          </Button>
        )}

        {isExpanded && (
          <ErrorBoundary fallback={<div>Could not load fields!</div>}>
            <MveFieldsSection mveImageId={mveImage.id} />
          </ErrorBoundary>
        )}
      </div>


    </div>
  );
}
