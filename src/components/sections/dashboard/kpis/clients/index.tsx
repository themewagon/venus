import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import ClientChart from './ClientChart';

const Clients = () => {
  return (
    <Paper component={Stack} px={2} py={2.5} alignItems="center" justifyContent="space-between">
      <Stack alignItems="center" justifyContent="flex-start" spacing={2}>
        <Stack
          sx={(theme) => ({
            height: 56,
            width: 56,
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${theme.palette.gradients.primary.state} 0%, ${theme.palette.gradients.primary.main} 100%)`,
            borderRadius: '50%',
          })}
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
      </Stack>

      <ClientChart data={[15, 12, 50, 45, 60]} sx={{ width: 75, height: '68px !important' }} />
    </Paper>
  );
};

export default Clients;
