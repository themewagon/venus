import { Paper, Box, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Earnings = () => {
  return (
    <Paper component={Stack} alignItems="center" justifyContent="space-between">
      <Stack alignItems="center" justifyContent="flex-start" spacing={2}>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={56}
          width={56}
          bgcolor="info.main"
          borderRadius="50%"
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h3.fontSize" />
        </Stack>
        <Box>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            Earnings
          </Typography>
          <Typography mt={1} variant="h3">
            $350.40
          </Typography>
        </Box>
      </Stack>

      {/* <SpentChart data={[160, 100, 210, 270, 180]} sx={{ width: 90, height: '75px !important' }} /> */}
    </Paper>
  );
};

export default Earnings;
