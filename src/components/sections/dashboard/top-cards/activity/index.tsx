import { Paper, Box, Stack, Typography } from '@mui/material';

const Activity = () => {
  return (
    <Paper
      component={Stack}
      alignItems="center"
      justifyContent="space-between"
      sx={(theme) => ({
        background: `linear-gradient(135deg, ${theme.palette.gradients.primary.state} 0%, ${theme.palette.gradients.primary.main} 100%)`,
      })}
    >
      <Box>
        <Typography variant="body2" color="info.dark" fontWeight={500}>
          Activity
        </Typography>
        <Typography mt={1} variant="h3" color="info.light">
          $540.50
        </Typography>
      </Box>

      {/* <SpentChart data={[160, 100, 210, 270, 180]} sx={{ width: 90, height: '75px !important' }} /> */}
    </Paper>
  );
};

export default Activity;
