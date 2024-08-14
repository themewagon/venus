import { Paper, Box, Stack, Typography } from '@mui/material';
import SpentChart from './SpentChart';

const Spent = () => {
  return (
    <Paper component={Stack} alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="body2" color="text.disabled" fontWeight={500}>
          Spent this month
        </Typography>
        <Typography mt={1} variant="h3">
          $682.5
        </Typography>
      </Box>

      <SpentChart data={[160, 100, 210, 270, 180]} sx={{ width: 90, height: '75px !important' }} />
    </Paper>
  );
};

export default Spent;
