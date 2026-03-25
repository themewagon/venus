import Grid from '@mui/material/Grid';
import Spent from './spent';
import Clients from './clients';
import Earnings from './Earnings';

const KPIs = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <Spent />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <Clients />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <Earnings />
      </Grid>
    </Grid>
  );
};

export default KPIs;
