import { useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Select,
  InputLabel,
  IconButton,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import MouseRoundedIcon from "@mui/icons-material/MouseRounded";

export default function MessageStats(props) {
  const { messageStats } = props;
  const [dateRange, setDateRange] = useState("");

  const handleChange = (event) => {
    setDateRange(event.target.value);
  };

  const stats = [
    {
      title: "recipients",
      icon: <PeopleAltIcon />,
    },
    {
      title: "sent",
      icon: <DoneIcon />,
    },
    {
      title: "delivered",
      icon: <DoneAllRoundedIcon />,
    },
    {
      title: "read",
      icon: <DoneAllRoundedIcon />,
    },
    {
      title: "replied",
      icon: <ReplyRoundedIcon />,
    },
    {
      title: "clicks",
      icon: <MouseRoundedIcon />,
    },
  ];
  return (
    <Grid
      container
      sx={{
        mt: 1,
        backgroundColor: "#FFF",
        borderRadius: "12px",
        p: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                textAlign: "left",
                color: "#53545C",
              }}
            >
              Overview
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <FormControl sx={{ minWidth: 150 }} size="small">
              <InputLabel id="date-range-label">Date Range</InputLabel>
              <Select
                labelId="date-range-label"
                value={dateRange}
                onChange={handleChange}
                sx={{ textAlign: "left" }}
                label="Date Range"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#FFF",
                    },
                  },
                }}
              >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="lastWeek">Last Week</MenuItem>
                <MenuItem value="lastMonth">Last Month</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 2 }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {stats.map((stat) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={2}
              xl={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent:
                  stat.title === "recipients"
                    ? "flex-start"
                    : stat.title === "clicks"
                    ? "flex-end"
                    : "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "80px",
                  backgroundColor: "#FAF6FF",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    disableRipple
                    sx={{
                      color:
                        stat.title === "read"
                          ? "#35A7FF"
                          : stat.title === "replied" && "#2CC84A",
                    }}
                  >
                    {stat.icon}
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "DM Sans",
                      fontWeight: 700,
                      color: "#53545C",
                    }}
                  >
                    {stat.title.charAt(0).toUpperCase() + stat.title.slice(1)}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    color: "#000",
                    ml: 2,
                  }}
                >
                  {messageStats[stat.title]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
