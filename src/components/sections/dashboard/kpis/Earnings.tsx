import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

const Earnings = () => {
  return (
    <Paper component={Stack} sx={{ p: 3, alignItems: 'center', justifyContent: 'space-between' }}>
      <Stack alignItems="center" justifyContent="flex-start" spacing={2}>
        <Stack
          width={56}
          height={56}
          alignItems="center"
          justifyContent="center"
          bgcolor="info.main"
          borderRadius="50%"
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h3.fontSize" />
        </Stack>
        <Box>
          <Typography variant="body2" color="text.disabled" fontWeight={500} mb={1}>
            Earnings
          </Typography>
          <Typography variant="h3">$350.40</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Earnings;
