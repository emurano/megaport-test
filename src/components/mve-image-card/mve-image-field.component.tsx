import { ReactNode } from 'react';
import styles from './mve-image-field.module.scss'

export interface MveImageFieldProps {
  name: string;
  children: ReactNode;
}

export function MveImageField({ name, children }: MveImageFieldProps) {
  return (
    <div className={styles.MveImageField}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
}
