import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import { FallbackProps } from 'react-error-boundary';
import { Page } from '@components/page';
import styles from './full-screen-error.module.scss';

export function FullScreenError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Page>
      <div className={styles.FullScreenError}>
        <Box maxWidth="400px" width="100%">
          <Alert icon={<AccessAlarmIcon fontSize="inherit" />} severity="error">
            <AlertTitle>An error occurred</AlertTitle>
            {error.message}
            <Button variant="contained" onClick={() => resetErrorBoundary()}>
              Retry
            </Button>
          </Alert>
        </Box>
      </div>
    </Page>
  );
}
