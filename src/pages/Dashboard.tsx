import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';
import Balance from 'components/sections/dashboard/balance';
import ProfileCard from 'components/sections/dashboard/ProfileCard';
import TotalSpent from 'components/sections/dashboard/total-spent';
import SpentThisMonth from 'components/sections/dashboard/spent-this-month';
import Transactions from 'components/sections/dashboard/Transactions';
import Tasks from 'components/sections/dashboard/Tasks';
import Earnings from 'components/sections/dashboard/earnings';

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
      <Grid size={{ xs: 12, md: 4 }}>
        <Transactions />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Tasks />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Earnings />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
