import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    background: "#FFFFFF",

    contactAvatar: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "#C4C4C4",
    },
    contactMsgAvatar: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "#DF6437",
    },

    notificationBox: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#DFF6F4",
      color: "#128C7E",
      fontWeight: 500,
    },
  },
});
