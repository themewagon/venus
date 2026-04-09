import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SpentChart from './SpentChart';

const Spent = () => {
  return (
    <Paper
      component={Stack}
      sx={{ px: 3, py: 2.5, alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <Typography variant="body2" color="text.disabled" fontWeight={500} mb={1}>
          Spent this month
        </Typography>
        <Typography variant="h3">$682.5</Typography>
      </div>

      <SpentChart data={[160, 100, 210, 270, 180]} sx={{ width: 75, height: '68px !important' }} />
    </Paper>
  );
};

export default Spent;
