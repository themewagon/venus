import Grid from "@mui/material/Grid";
import AvatarCard from "components/sections/dashboard/avatar-card";
import SpentThisMonth from "components/sections/dashboard/spent-this-month";
import Tasks from "components/sections/dashboard/tasks";
import TotalSpent from "components/sections/dashboard/total-spent";
import Transactions from "components/sections/dashboard/transactions";

const Dashbaord = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12}>
        {/* <TopCards /> */}
      </Grid>

      <Grid item xs={12} xl={8}>
        <TotalSpent/>
      </Grid>

      <Grid item xs={12} xl={4}>
        <AvatarCard/>
      </Grid>

      <Grid item xs={12} xl={4}>
        <SpentThisMonth/>
      </Grid>

      <Grid item xs={12} xl={4}>
        <Transactions/>
      </Grid>

      <Grid item xs={12} xl={4}>
        <Tasks/>
      </Grid>
    </Grid>
  );
};

export default Dashbaord;
