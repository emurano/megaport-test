import { MveList } from '@components/mve-list';
import { ErrorBoundary } from 'react-error-boundary';
import { FullScreenError } from '@components/full-screen-error';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <ErrorBoundary FallbackComponent={FullScreenError}>
        <MveList />
      </ErrorBoundary>
    </div>
  );
}
