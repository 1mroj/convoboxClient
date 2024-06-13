import React from "react";
import { Grid, TextField, Tabs, Tab, InputAdornment, Box } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function ListBroadcasting() {
  const [tabValue, setTabValue] = React.useState(0);
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 1,
        p: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="broadcasting tabs"
        sx={{
          borderBottom: "1px solid #848396",
          "& .MuiTabs-indicator": {
            backgroundColor: "#7F2DF1",
            height: "4px",
          },
          "& .MuiTab-root": {
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "none",
            color: "#848396",

            "&.Mui-selected": {
              color: "#7F2DF1",
              fontWeight: 700,
              fontSize: "16px",
            },
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Scheduled" />
      </Tabs>

      <TextField
        variant="outlined"
        size="small"
        sx={{ width: "35%" }}
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box>
        <TextField
          label="From"
          size="small"
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="To"
          size="small"
          type="date"
          sx={{ ml: 2 }}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Grid>
  );
}
