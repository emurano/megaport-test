import { MveImageField } from '@app-types/mve-image-field.type';
import TextField from '@mui/material/TextField';
import { useMemo, useState } from 'react';
import styles from './base-field-tester.module.scss';

type ValidatorType = (
  field: MveImageField,
  testData: string
) => string | undefined;

export interface NumberFieldTesterProps {
  field: MveImageField;
  placeholder: string;
  validators: ValidatorType[];
}

export function BaseFieldTester({
  field,
  placeholder,
  validators,
}: NumberFieldTesterProps) {
  const [testData, setTestData] = useState<string>('');

  const errors = useMemo(() => {
    return validators
      .map((validator) => validator(field, testData))
      .filter((errorMessage): errorMessage is string => !!errorMessage)
      .filter((errorMessage) => errorMessage.length > 0);
  }, [field, testData, validators]);

  return (
    <div className={styles.NumberFieldTester}>
      <TextField
        label="Test Data"
        placeholder={placeholder}
        variant="outlined"
        value={testData}
        onChange={(e) => setTestData(e.target.value)}
      />

      {errors.length > 0 && (
        <ul className={styles.Errors}>
          {errors.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
