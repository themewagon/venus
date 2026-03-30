import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';
import Balance from 'components/sections/dashboard/balance';
import ProfileCard from 'components/sections/dashboard/ProfileCard';
import TotalSpent from 'components/sections/dashboard/total-spent';
import SpentThisMonth from 'components/sections/dashboard/spent-this-month';

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
      <Grid size={{ xs: 12, md: 4 }}>
        <SpentThisMonth />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
