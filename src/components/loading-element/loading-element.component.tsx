import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export interface LoadingElementProps {
  testId?: string;
}

export function LoadingElement({ testId }: LoadingElementProps) {
  return (
    <Box sx={{ width: '100%' }} data-testId={testId}>
      <LinearProgress />
    </Box>
  );
}
