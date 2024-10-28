import { ReactNode } from 'react';
import styles from './labelled-field.module.scss';

export interface LabelledFieldProps {
  label: string;
  children?: ReactNode;
}

export function LabelledField({ label, children }: LabelledFieldProps) {
  return (
    <div className={styles.LabelledField}>
      <label className={styles.Label}>{label}</label>
      <div className={styles.Field}>{children}</div>
    </div>
  );
}
