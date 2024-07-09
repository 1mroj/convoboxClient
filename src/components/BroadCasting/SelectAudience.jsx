import {
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileScreen from "../Templates/TemplateCreation/MobileScreen";
import { FilePicker } from "./FilePicker";
import { useState } from "react";
import ListSegments from "./ListSegments";
import UploadContacts from "./UploadContacts";
import MapTemplateVriables from "./MapTemplateVariables";
export default function SelectAudience() {
  const [selectedCSV, setSelectedCSV] = useState();
  const [audienceSelected, setAudienceSelected] = useState(true);
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
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
            <IconButton
              onClick={() => {
                audienceSelected && setAudienceSelected(false);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#53545C" }}
            >
              {audienceSelected ? "Map Template variables" : "Select Audience"}
            </Typography>
          </Box>
        </Box>
        {audienceSelected ? (
          <MapTemplateVriables />
        ) : (
          <>
            {/* <Box sx={{ p: 1 }}>
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
        </Box> */}
            {/* <Box
          sx={{ display: "flex", alignItems: "center", mt: 1, width: "80%" }}
        >
          <Divider sx={{ flexGrow: 1 }} />
          <Typography sx={{ mx: 2 }}>Or</Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box> */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="broadcasting tabs"
              sx={{
                width: "fit-content",
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
              <Tab label="Select Contacts" />
              <Tab label="Import from file" />
            </Tabs>
            {tabValue === 0 ? (
              <Box sx={{ p: 1, width: "80%", height: "200px" }}>
                {/* <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: 700,
                mb: 1,
                textAlign: "left",
              }}
            >
              Previously Segmented Contacts
            </Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    mr: -1,
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "60%", mb: 2, mt: 1 }}
                    placeholder="Search"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <ListSegments />
              </Box>
            ) : (
              <UploadContacts />
            )}
          </>
        )}
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
