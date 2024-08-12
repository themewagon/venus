import { Paper, Stack, Box, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const SpentThisMonth = () => {
  return (
    <Paper sx={{ height: 355 }}>
      <Stack justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            Spent this month
          </Typography>
          <Typography mt={0.35} variant="h2" color="text.primary">
            $682.5
          </Typography>
          <Stack mt={0.55} alignItems="center" spacing={0.25}>
            <IconifyIcon icon="ic:round-check-circle" color="success.main" fontSize="h6.fontSize" />
            <Typography variant="body1" color="success.main" fontWeight={700}>
              On track
            </Typography>
          </Stack>
        </Box>

        <Stack alignItems="center" spacing={0.25}>
          <IconifyIcon
            icon="ic:baseline-arrow-drop-up"
            color="success.main"
            fontSize="h6.fontSize"
          />
          <Typography variant="body2" color="success.main" fontWeight={700}>
            +2.45%
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SpentThisMonth;
