import { useDataMveImages } from '@hooks/use-data-mve-images.hook';
import { MveImageCard } from '@components/mve-image-card';
import { LoadingElement } from '../loading-element';

import styles from './mve-list.module.scss';


export function MveList() {
  const { isLoading, mveImages } = useDataMveImages();

  if (isLoading) {
    return <LoadingElement />;
  }

  if (!mveImages) {
    throw new Error('Mve images not found');
  }

  return (
    <div className={styles.MveList}>
      {mveImages.map((mveImage) => (
        <MveImageCard mveImage={mveImage} />
      ))}
    </div>
  );
}
