import whatsappDoodle from "../../Assets/whatsappdoodle.jpeg";
import { Box } from "@mui/material";
export default function ConversationBody({ chats }) {
  console.log(chats);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        flexGrow: 1,
        backgroundImage: `url(${whatsappDoodle})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
      }}
    >
      {chats?.messages?.map((item) => (
        <Box>{item?.messages}</Box>
      ))}
    </Box>
  );
}
