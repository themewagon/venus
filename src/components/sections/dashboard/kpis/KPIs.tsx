import Grid from '@mui/material/Grid';
import Spent from './spent';

const KPIs = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <Spent />
      </Grid>
    </Grid>
  );
};

export default KPIs;
