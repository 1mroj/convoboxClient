import { Grid, Box, Typography, Divider, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileScreen from "../Templates/TemplateCreation/MobileScreen";
import { FilePicker } from "./FilePicker";
import { useState } from "react";
import ListSegments from "./ListSegments";
export default function SelectAudience() {
  const [selectedCSV, setSelectedCSV] = useState();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={7}
        xl={7}
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none", // Firefox
          "-ms-overflow-style": "none", // IE and Edge
          "&::-webkit-scrollbar": {
            width: "0.4em", // Adjust as needed
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Make the track invisible
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Make the thumb (scrollbar) invisible
          },
          maxHeight: "100%", // Adjust as needed
        }}
      >
        <Box
          sx={{
            width: "100%",
            mt: 1,
            position: "sticky",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#53545C" }}
            >
              Select Audience
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 700,
              mb: 1,
              textAlign: "left",
            }}
          >
            Upload Contacts
          </Typography>
          <FilePicker
            selectedCSV={selectedCSV}
            setSelectedCSV={setSelectedCSV}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", mt: 1, width: "80%" }}
        >
          <Divider sx={{ flexGrow: 1 }} />
          <Typography sx={{ mx: 2 }}>Or</Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        <Box sx={{ p: 1, width: "80%", height: "200px" }}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 700,
              mb: 1,
              textAlign: "left",
            }}
          >
            Previously Segmented Contacts
          </Typography>

          <ListSegments />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={5}
        xl={5}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MobileScreen />
      </Grid>
    </Grid>
  );
}
