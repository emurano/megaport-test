import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function LoadingElement() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
