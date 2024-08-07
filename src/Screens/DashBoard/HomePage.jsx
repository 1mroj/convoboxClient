import { Box, Grid } from "@mui/material";
import MessageStats from "../../components/BroadCasting/MessageStats";
import ProfileBox from "../../components/Dashboard/HomePage/ProfileBox";
import DashboardChart from "../../components/Dashboard/HomePage/DashboardChart";
const messageStats = {
  recipients: 100,
  sent: 100,
  delivered: 95,
  read: 60,
  replied: 30,
  clicks: 25,
};
export default function HomePage() {
  return (
    <>
      <Grid container spacing={2} direction={"row"} sx={{ mt: -6 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileBox />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: -3 }}>
          <MessageStats messageStats={messageStats} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <DashboardChart />
        </Grid>
      </Grid>
    </>
  );
}
