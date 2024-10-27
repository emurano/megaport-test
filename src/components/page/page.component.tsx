import { ReactNode } from 'react';
import styles from './page.module.scss';

export interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className={styles.Page}>
      {children}
    </div>
  );
}
