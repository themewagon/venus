import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';

const Dashboard = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <KPIs />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
