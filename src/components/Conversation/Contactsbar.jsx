import { Avatar, Box, Typography } from "@mui/material";
import convoboxLogo from "../../Assets/convoboxIcon.png";
export default function ContactsBar({ showSearch }) {
  const contacts = [
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
    {
      name: "Arun kumar",
      icon: convoboxLogo,
      lastChat: "Lorem Ipsum is simply dummy text of the printing ",
      lastchatTimeStamp: "12:00 Am",
    },
  ];
  return (
    <Box
      sx={{
        height: showSearch ? "calc(100% - 168px)" : "calc(100% - 123px)",
        // backgroundColor: "purple",
        borderTop: "1px solid #F2F2F2",
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
      }}
    >
      {contacts.map((contact) => (
        <Box
          sx={{
            p: 1,
            width: "100%",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              p: 1,
              height: "25px",
              width: "25px",
              mr: 1,
            }}
            src={contact.icon}
          ></Avatar>
          <Box
            sx={{
              //   backgroundColor: "purple",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "auto",
              width: "68%",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#030229",
              }}
            >
              {contact.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#030229",
                opacity: "60%",
              }}
            >
              {contact.lastChat}
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "12px" }}>
            {contact.lastchatTimeStamp}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
