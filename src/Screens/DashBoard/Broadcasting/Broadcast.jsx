import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MessageStats from "../../../components/BroadCasting/MessageStats";
import { useNavigate } from "react-router-dom";
import ListBroadcasting from "../../../components/BroadCasting/ListBroadcasting";
import BroadcastingDataGrid from "../../../components/BroadCasting/BroadCastingDataGrid";

export default function Broadcast() {
  const navigate = useNavigate();
  const messageStats = {
    recipients: 100,
    sent: 100,
    delivered: 95,
    read: 60,
    replied: 30,
    clicks: 25,
  };
  return (
    <Grid container sx={{ mt: -4 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          pt: 2,
          pb: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "60px",
          // backgroundColor: "red",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate(`create/`)}
          endIcon={<AddIcon />}
          sx={{
            pl: 5,
            pr: 5,
            ml: 2,
            color: "#FFF",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "8px",
            backgroundColor: "#7F2DF1",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#7F2DF1", // Grayish background color
              color: "#FFF",
              boxShadow: "none",
            },
          }}
        >
          Create New Broadcast
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MessageStats messageStats={messageStats} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ListBroadcasting />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          backgroundColor: "#FFF",
          p: 1,
          borderRadius: "12px",
        }}
      >
        <BroadcastingDataGrid />
      </Grid>
    </Grid>
  );
}
