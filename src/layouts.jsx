import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "./Pages/Chats";
import {
  Drawer,
  IconButton,
  Box,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  AppBar,
  Typography,
  Avatar,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./Assets/ConvoBoxLogo.png";
import GridViewIcon from "@mui/icons-material/GridView";
import ChatIcon from "@mui/icons-material/Chat";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import DashBoardRoutes from "./Routes";

const drawerListItems = [
  {
    icon: <CallIcon sx={{ height: "20px", width: "20px" }} />,
    text: "Contact Us",
    color: "#848396",
  },
  {
    icon: <LogoutIcon sx={{ height: "20px", width: "20px" }} />,
    text: "Logout",
    color: "#FF0000",
  },
];

const navigation = [
  {
    to: `/dashboard/home`,
    title: "Dashboard",
    icon: <GridViewIcon sx={{ height: "20px", width: "20px" }} />,
  },
  {
    to: `/dashboard/chats`,
    title: "Conversation",
    icon: <ChatIcon sx={{ height: "20px", width: "20px" }} />,
  },
  {
    to: `/dashboard/broadcast`,
    title: "Broadcasting",
    icon: <BroadcastOnHomeIcon sx={{ height: "20px", width: "20px" }} />,
  },
  {
    to: `/dashboard/template`,
    title: "Template",
    icon: <InsertChartIcon sx={{ height: "20px", width: "20px" }} />,
  },
  {
    to: `/dashboard/contacts`,
    title: "Contacts",
    icon: <PeopleAltIcon sx={{ height: "20px", width: "20px" }} />,
  },
  {
    to: `/dashboard/settings`,
    title: "Settings",
    icon: <SettingsIcon sx={{ height: "20px", width: "20px" }} />,
  },
];

const CustomNavLink = ({ to, title, icon }) => {
  return (
    <NavLink
      exact
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "#FFFFFF" : "#848396",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
        backgroundColor: isActive ? "#7F2DF1" : "#FFFF",
      })}
    >
      <Tooltip title={title} arrow placement="right">
        <ListItem
          sx={{
            background: "inherit",
            color: "inherit",
            width: "180px",
            height: "40px",
            // minWidth: 200, // Set the minimum width
            borderRadius: "10px",
            m: 1,
          }}
        >
          <ListItemIcon sx={{ color: "inherit", mr: -3 }}>{icon}</ListItemIcon>
          <Typography>{title}</Typography>
        </ListItem>
      </Tooltip>
    </NavLink>
  );
};

function Layouts() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      {/* <div
        style={{
          flex: "0 0 20%",
          height: "100%",
          background: "black",
        }}
      >
        Nav

      </div> */}
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: `calc(100% - 210px)`, // Adjust the width to account for the drawer
          ml: 250, // Move the app bar to the right to not overlap with the drawer
          minHeight: "8vh",
          boxShadow: "none",
          backgroundColor: "#FFF",
          p: 2,
          pl: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "red",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: 700, fontSize: "18px", color: "#53545C" }}
            >
              Dashboard
            </Typography>
          </Box>

          <Box
            sx={{
              // backgroundColor: "green",
              minWidth: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography sx={{ fontWeight: "12px", color: "#53545C" }}>
              Whatsapp Business API :{" "}
              <span style={{ fontWeight: 700, color: "red" }}>PENDING</span>
            </Typography>
            <Typography sx={{ fontWeight: "12px", color: "#53545C" }}>
              Current Plan :{" "}
              <span style={{ fontWeight: 700, color: "green" }}>Trail</span>
            </Typography>
            <Avatar sx={{ backgroundColor: "#7F2DF1", ml: 2, color: "#FFF" }}>
              SA
            </Avatar>
          </Box>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: 210,
          boxShadow: "none",
          border: "none",
          flexShrink: 0,
          zIndex: 0,
          "& .MuiDrawer-paper": {
            width: 210,
            boxSizing: "border-box",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box>
            <Box>
              <IconButton disableRipple="true" sx={{ mt: 1 }}>
                <img src={logo} width="140px" height="42px" />
              </IconButton>
            </Box>

            <Box
              sx={{
                mt: 0.5,
                minHeight: "25%",
                // maxHeight: "60%",
                overflowY: "scroll",
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
              }}
            >
              <List aria-label="Sidebar">
                {navigation.map((item, i) => (
                  <CustomNavLink
                    to={item.to}
                    title={item.title}
                    icon={item.icon}
                    key={i}
                  />
                ))}
              </List>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Box sx={{ mb: 2 }}>
              {drawerListItems.map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    ml: 1,
                    pl: 1,
                  }}
                  // onClick={() => handleItemClick(item)}
                >
                  <IconButton
                    sx={{
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </IconButton>
                  <Typography sx={{ color: item.color, fontSize: "14px" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          height: "auto",
          backgroundColor: "#F7F2FE",
          overflow: "auto",
          mt: 9,
          pl: 5,
          pr: 5,
          pt: 5,
          pb: 2,
        }}
      >
        <DashBoardRoutes />
      </Box>

      {/* <div
        style={{
          flex: 1,
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="chats" element={<Chats />} />
        </Routes>
      </div> */}
    </Box>
  );
}

export default Layouts;
