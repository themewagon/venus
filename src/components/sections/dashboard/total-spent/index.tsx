import { Paper, Box, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import TotalSpentChart from './TotalSpentChart';

const TotalSpent = () => {
  return (
    <Paper sx={{height: 355}}>
      <Stack alignItems="flex-start" justifyContent="space-between">
        <Box>
          <Typography variant="caption" color="text.disabled" fontWeight={500}>
            Total Spent
          </Typography>
          <Typography variant="h2" color="text.primary" mt={0.25}>
            $682.5
          </Typography>
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={42}
          width={42}
          bgcolor="info.main"
          borderRadius={1.75}
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h3.fontSize" />
        </Stack>
      </Stack>

      <TotalSpentChart data={[160, 320, 210, 270, 180, 350, 230, 290, 200, 330, 150, 220]} sx={{ height: '230px !important' }} />
    </Paper>
  );
};

export default TotalSpent;
