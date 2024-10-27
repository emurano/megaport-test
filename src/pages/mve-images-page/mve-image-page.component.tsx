import { FullScreenError } from '@components/full-screen-error';
import { MveList } from '@components/mve-list';
import { Page } from '@components/page';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './mve-image-page.module.scss';

export function MveImagePage() {
  return (
    <Page>
      <ErrorBoundary FallbackComponent={FullScreenError}>
        <div className={styles.MveListPage}>
          <div className={styles.MveListContainer}>
            <MveList />
          </div>
        </div>
      </ErrorBoundary>
    </Page>
  );
}
