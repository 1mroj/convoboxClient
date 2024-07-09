import {
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  Tabs,
  Tab,
  Switch,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileScreen from "../Templates/TemplateCreation/MobileScreen";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";

export default function SendBroadcast() {
  const [selectedCSV, setSelectedCSV] = useState();
  const [audienceSelected, setAudienceSelected] = useState(true);
  const [tabValue, setTabValue] = React.useState(0);
  const [broadcastType, setBroadcastType] = useState("sendNow");
  const [testBroadcast, setTestBroadcast] = useState(false);
  const [testName, setTestName] = useState("");
  const [testPhoneNumber, setTestPhoneNumber] = useState("");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const headerTypes = [
    { label: "Send Now", type: "sendNow" },
    { label: "Schedule", type: "schedule" },
  ];

  const apiInfo = {
    qualityRating: "High",
    templateMessageTier: 10000,
    remainingQuota: 950,
    selectedAudience: 750,
  };

  const qualityParams = [
    { header: "Quality Rating", feild: "qualityRating" },
    { header: "Template Message Tier", feild: "templateMessageTier" },
    { header: "Remaining Quota", feild: "remainingQuota" },
    { header: "Selected Audience", feild: "selectedAudience" },
  ];

  const handleChange = (event) => {
    setBroadcastType(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setTestBroadcast(event.target.checked);
  };

  function ErrorMessage({ errorMessage, buttonDetails }) {
    return (
      <Box
        sx={{
          backgroundColor: "#FFE3E3",
          borderRadius: "12px",
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography
            sx={{
              color: "#53545C",
              fontSize: "12px",
              width: "20px",
              height: "20px",
              display: "grid",
              placeItems: "center",
              fontWeight: 500,
              textAlign: "left",
              borderRadius: "50%",
              backgroundColor: "#FFF",
            }}
          >
            𝒾
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              width: "95%",
              fontWeight: 500,
              textAlign: "left",
              ml: 1,
            }}
          >
            {errorMessage}
          </Typography>
        </Box>
        {buttonDetails && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                color: "#FFF",
                m: 1,
                textTransform: "none",
                fontSize: "10px",
                fontWeight: 700,
                borderRadius: "6px",
                backgroundColor: "#7F2DF1",
                boxShadow: "none",
                "&:hover": {
                  color: "#FFF",
                  background: "#7F2DF1",
                  boxShadow: "none",
                },
              }}
            >
              {buttonDetails.title}
            </Button>
          </Box>
        )}
      </Box>
    );
  }

  const textInputProps = {
    style: {
      borderRadius: "10px",
      border: "1px solid #A3AED0",
      border: "none",
      "&:not(.Mui-disabled):before": {
        borderBottom: "none", // Remove the underline when not focused
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none", // Remove the underline when hovered
      },
      "&.Mui-focused:before": {
        borderBottom: "none",
      },
    },
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
              Send Broadcast
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#DBFFE2",
            width: "100%",
            height: "100px",
            // pt: 1,
            // pb: 1,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {qualityParams.map((param) => (
            <Box>
              <Typography
                sx={{
                  color: "#53545C",
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {param.header}
              </Typography>
              <Typography
                sx={{
                  color: "#53545C",
                  fontSize: param.feild === "qualityRating" ? "12px" : "16px",
                  fontWeight: 700,
                  backgroundColor: param.feild === "qualityRating" && "#A2FFB4",
                  p: param.feild === "qualityRating" && 1,
                  borderRadius: param.feild === "qualityRating" && "6px",
                }}
              >
                {param.feild === "templateMessageTier"
                  ? `${apiInfo[param.feild]} / 24hrs`
                  : apiInfo[param.feild]}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            backgroundColor: "#FFF",
            mt: 2,
            width: "100%",
            height: "100px",
            borderRadius: "8px",
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FFF",
              mt: 1,
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                m: 1,
                p: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  color: "#4D4D4D",
                  fontSize: "16px",
                  fontWeight: 700,
                  mt: 1,
                }}
              >
                Broadcast Name
              </Typography>

              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                placeholder="Enter a name"
                InputProps={textInputProps}
              />
              <FormControl sx={{ width: "fit-content", mt: 1 }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="none"
                  name="radio-buttons-group"
                  value={broadcastType}
                  onChange={handleChange}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  direction="row"
                >
                  {headerTypes.map((option) => (
                    <FormControlLabel
                      key={option.type}
                      value={option.type}
                      control={
                        <Radio
                          sx={{
                            color: "#B8B8B8",
                            "&.Mui-checked": { color: "#7F2DF1" },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            color: "#4D4D4D",
                            fontSize: "16px",
                            fontWeight: 500,
                          }}
                        >
                          {option.label}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              {broadcastType === "schedule" && (
                <Box sx={{ mt: 1, mb: 2, width: "100%" }}>
                  <Typography
                    sx={{
                      color: "#53545C",
                      fontSize: "14px",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                  >
                    Schedule Broadcasting up to two months from today
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    <TextField
                      label="Date"
                      type="date"
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                    <TextField
                      label="Time"
                      type="time"
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      inputProps={{ step: 300 }} // 5 min steps
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </Box>
                </Box>
              )}

              <Box sx={{ mt: 1, mb: 2, width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "16px",
                      fontWeight: 700,
                      mr: 1,
                    }}
                  >
                    Test Broadcast
                  </Typography>
                  <Switch
                    checked={testBroadcast}
                    onChange={handleSwitchChange}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#7F2DF1",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#7F2DF1",
                        },
                    }}
                  />
                </Box>

                {testBroadcast && (
                  <Box
                    sx={{
                      mt: 2,
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ flex: 2 }}>
                      <TextField
                        label="Test Name"
                        flex={2}
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        InputProps={textInputProps}
                      />
                    </Box>
                    <Box sx={{ flex: 3 }}>
                      <TextField
                        label="Test Phone Number"
                        variant="outlined"
                        flex={2}
                        size="small"
                        fullWidth
                        value={testPhoneNumber}
                        onChange={(e) => setTestPhoneNumber(e.target.value)}
                        InputProps={textInputProps}
                      />
                    </Box>

                    <IconButton
                      sx={{
                        color: "#FFF",
                        p: 1,
                        backgroundColor: "#7F2DF1",
                        borderRadius: "8px",
                        boxShadow: "none",
                        width: "60px",
                        height: "40px",
                        "&:hover": {
                          color: "#FFF",
                          background: "#7F2DF1",
                          boxShadow: "none",
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <SendIcon
                        sx={{ color: "#FFF", width: "20px", height: "20px" }}
                      />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            <ErrorMessage
              errorMessage={
                "You can send upto 500 messages from your Account for a day"
              }
            />

            <ErrorMessage
              errorMessage={
                "Your Wallet Balance is Rs.200. the approximate cost of this broadcasting for 743 contacts will be Rs.540.73 . so please recharge your wallet with atleast Rs.541 to initiate this broadcasting "
              }
              buttonDetails={{ title: "Recharge Now" }}
            />
          </Box>
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
