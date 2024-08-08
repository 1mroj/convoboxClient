import { Avatar, Box, Typography } from "@mui/material";
import convoboxLogo from "../../Assets/convoboxIcon.png";
export default function ContactsBar({ showSearch, conversation, setconvo }) {
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
  console.log(conversation);
  return (
    <Box
      sx={{
        height: showSearch ? "calc(100% - 168px)" : "calc(100% - 123px)",
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
      {conversation?.map((contact) => {
        const timestamp = contact?.timestamp * 1000; // Convert to milliseconds
        const messageDate = new Date(timestamp);
        const currentTime = new Date();

        // Calculate if the timestamp is older than 24 hours
        const isOlderThan24Hours = currentTime - messageDate > 86400000;

        return (
          <Box
            key={contact?.conversationId} // Assuming each contact has a unique ID
            sx={{
              p: 1,
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => setconvo(contact?.conversationId)}
          >
            <Avatar
              sx={{
                p: 1,
                height: "25px",
                width: "25px",
                mr: 1,
              }}
              src={contact?.icon}
            />
            <Box
              sx={{
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
                {contact?.conversationName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#030229",
                  opacity: "60%",
                }}
              >
                {contact?.message}
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "12px" }}>
              {isOlderThan24Hours
                ? messageDate.toLocaleDateString()
                : messageDate.toLocaleTimeString()}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
