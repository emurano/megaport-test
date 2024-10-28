import {
  MveImagesSortDirection,
  MveImagesSortItem,
  useDataMveImages,
} from '@hooks/use-data-mve-images.hook';
import { MveImageCard } from '@components/mve-image-card';
import { useState } from 'react';
import { LoadingElement } from '../loading-element';

import styles from './mve-list.module.scss';

export interface MveListProps {
  sortBy?: MveImagesSortItem;
  sortDirection?: MveImagesSortDirection;
  searchText?: string;
}

export function MveList({ sortBy, sortDirection, searchText }: MveListProps) {
  const { isLoading, mveImages } = useDataMveImages({
    sortBy,
    sortDirection,
    searchText,
  });
  const [selectedImageId, setSelectedImageId] = useState('');

  if (isLoading) {
    return <LoadingElement />;
  }

  if (!mveImages) {
    throw new Error('Mve images not found');
  }

  if (mveImages.length === 0) {
    return (
      <div>No Matching images</div>
    );
  }

  return (
    <div className={styles.MveList}>
      {mveImages.map((mveImage) => (
        <MveImageCard
          mveImage={mveImage}
          key={mveImage.id}
          isExpanded={selectedImageId === mveImage.id}
          onExpand={() => {
            setSelectedImageId(mveImage.id);
          }}
        />
      ))}
    </div>
  );
}
