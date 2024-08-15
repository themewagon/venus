import { Paper, Stack } from '@mui/material';
// import IconifyIcon from 'components/base/IconifyIcon';
import ClientChart from './ClientChart';

const Clients = () => {
  return (
    <Paper component={Stack} alignItems="center" justifyContent="space-between">
      {/* <Stack alignItems="center" justifyContent="flex-start" spacing={2}>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={56}
          width={56}
          sx={(theme) => ({
            background: `linear-gradient(135deg, ${theme.palette.gradients.primary.state} 0%, ${theme.palette.gradients.primary.main} 100%)`,
          })}
          borderRadius="50%"
        >
          <IconifyIcon icon="ic:baseline-people-alt" color="info.light" fontSize="h3.fontSize" />
        </Stack>
        <Box>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            New clients
          </Typography>
          <Typography mt={0.5} variant="h4">
            321
          </Typography>
        </Box>
      </Stack> */}
      <ClientChart data={[10, 20, 50, 45, 60]} sx={{ width: 1, height: '75px !important' }} />
    </Paper>
  );
};

export default Clients;
