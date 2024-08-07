import { Box } from "@mui/material";
export default function ConversationHeader() {
  return (
    <Box
      sx={{
        top: 0,
        height: "70px",
        // backgroundColor: "#FFFFFF",
        border: "1px solid #F2F2F2",
        borderRadius: "0px 12px 0px 0px",
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
      }}
    ></Box>
  );
}
