import { ErrorBoundary } from 'react-error-boundary';
import { FullScreenError } from '@components/full-screen-error';
import { MveImagePage } from '@pages/mve-images-page';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <ErrorBoundary FallbackComponent={FullScreenError}>
        <MveImagePage />
      </ErrorBoundary>
    </div>
  );
}
