import React, { useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Select,
  InputLabel,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Defs,
  LinearGradient,
  Stop,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { date: "Day 1", conversations: 45 },
  { date: "Day 2", conversations: 60 },
  { date: "Day 3", conversations: 30 },
  { date: "Day 4", conversations: 80 },
  { date: "Day 5", conversations: 50 },
  { date: "Day 6", conversations: 70 },
  { date: "Day 7", conversations: 40 },
  { date: "Day 8", conversations: 90 },
  { date: "Day 9", conversations: 55 },
  { date: "Day 10", conversations: 65 },
];

const ChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={730}
      height="100%"
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#7F2DF1" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#7F2DF1" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="date"
        stroke="#e0e0e0"
        tick={{ fontSize: 12, fontFamily: "Arial", fill: "#53545C" }}
      />
      <YAxis
        tick={{ fontSize: 12, fontFamily: "Arial", fill: "#53545C" }}
        stroke="#e0e0e0"
      />
      {/* <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> */}
      <Tooltip />
      <Area
        type="monotone"
        dataKey="conversations"
        stroke="#7F2DF1"
        fillOpacity={1}
        fill="url(#colorConversations)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default function DashboardChart() {
  const [dateRange, setDateRange] = useState("");

  const handleChange = (event) => {
    setDateRange(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "12px",
        p: 2,
      }}
    >
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "left",
                color: "#53545C",
              }}
            >
              Conversation Summary
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
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
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Box sx={{ width: "100%", height: 320 }}>
          <ChartComponent />
        </Box>
      </Grid>
    </Grid>
  );
}
