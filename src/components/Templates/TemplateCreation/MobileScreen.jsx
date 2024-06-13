import {
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import whatsappDoodle from "../../../Assets/whatsappdoodle.jpeg";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import Battery80Icon from "@mui/icons-material/Battery80";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import whatsappLogo from "../../../Assets/whatsapplogo.svg";
import VerifiedIcon from "@mui/icons-material/Verified";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import ChatBubble from "./ChatBubble";
import BottomDrawer from "./BottomDrawer";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const getCurrentTime = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return currentTime;
};

const headerIcons = [
  <SignalCellularAltIcon sx={{ width: "15px", height: "15px" }} />,
  <WifiIcon sx={{ width: "15px", height: "15px" }} />,
  <Battery80Icon sx={{ width: "15px", height: "15px" }} />,
];

const businessInfo = {
  name: "Arun kjsankjsdfkjadsfks",
  profileImage: whatsappLogo,
};
export default function MobileScreen(props) {
  const { templateData, setTemplateData } = props;
  const boxRef = useRef(null);
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [templateData]);

  return (
    <Box
      sx={{
        ml: 2,
        width: "290px",
        height: "540px",
        backgroundColor: "#475164",
        borderRadius: "30px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: "91%",
          height: "95%",
          m: 3,

          border: "5px solid #2C3546",
          overflow: "auto",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          backgroundColor: "#FFF",
          borderRadius: "25px",
        }}
      >
        {/* Phone Header */}
        <Box
          sx={{
            height: "13%",
            width: "100%",
            backgroundColor: "#FFF",
            borderRadius: "20px 25px 0px 0px",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
            borderBottom: "0.2px solid #2C3546",
          }}
        >
          <Box
            sx={{
              height: "50%",
              width: "100%",
              borderRadius: "20px 20px 0px 0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "20%",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#2C3546" }}
              >
                {getCurrentTime()}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "80%",
                backgroundColor: "#2C3546",
                borderRadius: "0px 0px 20px 20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "20%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {headerIcons.map((icon) => (
                <IconButton
                  sx={{ width: "2px", height: "2px", color: "#000", mt: 1 }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              height: "50%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
                <ArrowBackIosIcon sx={{ height: "15px" }} />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={businessInfo?.profileImage}
                  sx={{
                    height: "30px",
                    width: "30px",
                  }}
                >
                  AR
                </Avatar>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2C3546",
                    width: "80px",
                    ml: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {businessInfo.name}
                </Typography>
                <IconButton disableRipple sx={{ color: "#25D467" }}>
                  <VerifiedIcon sx={{ height: "15px", ml: -1 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
                <VideocamOutlinedIcon sx={{ height: "30px" }} />
              </IconButton>
              <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
                <PhoneSharpIcon sx={{ height: "20px", width: "20px" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        {/* Phone Text Area */}
        <Box
          ref={boxRef}
          sx={{
            height: "76%",
            width: "100%",
            pb: 2,
            backgroundImage: `url(${whatsappDoodle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "auto",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
            "& .MuiDrawer-paper": {
              width: "100%",
              position: "absolute", // Set position to absolute
              bottom: 0, // Align to bottom of the box
            },
          }}
        >
          {(templateData?.templateBody ||
            templateData?.templateFooter ||
            templateData?.templateButtons.length > 0 ||
            templateData?.templateHeader) && (
            <ChatBubble templateData={templateData} />
          )}
        </Box>
        {/* Phone Action Area  */}
        <Box
          sx={{
            height: "7%",
            //   backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderRadius: "0px 0px 22px 22px",
          }}
        >
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
              <AddSharpIcon sx={{ height: "25px" }} />
            </IconButton>
            <TextField
              size="small"
              variant="outlined"
              // placeholder="Search"
              InputProps={{
                endAdornment: (
                  <IconButton disableRipple sx={{ mr: -2 }}>
                    <SendRoundedIcon
                      sx={{ color: "#0A7EFF", height: "15px" }}
                    />
                  </IconButton>
                ),
                style: {
                  borderRadius: "20px 20px 20px 20px",
                  height: "25px",
                  width: "100%",
                },
              }}
            />
          </Box>
          <Box sx={{ width: "30%" }}>
            <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
              <CameraAltOutlinedIcon sx={{ height: "25px" }} />
            </IconButton>
            <IconButton disableRipple sx={{ color: "#0A7EFF" }}>
              <KeyboardVoiceOutlinedIcon sx={{ height: "25px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
