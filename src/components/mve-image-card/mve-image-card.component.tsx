import { MveImage } from '@app-types/mve-image.type';
import styles from './mve-image-card.module.scss';
import { MveImageField } from './mve-image-field.component';

export interface MveImageCardProps {
  mveImage: MveImage;
}

export function MveImageCard({ mveImage }: MveImageCardProps) {
  return (
    <div className={styles.MveImageCard}>
      <div className={styles.Heading}>{mveImage.name}</div>

      {(mveImage.description && mveImage.description.length > 0) && (
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

    </div>
  );
}
