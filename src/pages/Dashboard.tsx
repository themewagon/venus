import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';
import Balance from 'components/sections/dashboard/balance';
import ProfileCard from 'components/sections/dashboard/ProfileCard';
import TotalSpent from 'components/sections/dashboard/total-spent';

const Dashboard = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <KPIs />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <TotalSpent />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ProfileCard />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Balance />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
