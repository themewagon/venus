import Grid from "@mui/material/Grid";
import AvatarCard from "components/sections/dashboard/avatar-card";
import TotalSpent from "components/sections/dashboard/total-spent";

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
      </Grid>

      <Grid item xs={12} xl={8}>
      </Grid>

      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
};

export default Dashbaord;
