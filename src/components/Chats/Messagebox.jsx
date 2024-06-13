import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTheme } from "@emotion/react";

function Messagebox({ chatId, sendMessage, socket }) {
  const theme = useTheme();

  socket?.on("incomingmessage", (data) => {
    console.log(data);
    const incomingmessage = {
      sender: "user",
      text: data?.message,
    };
    setMessages([...messages, incomingmessage]);
  });

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // State to store messages

  const handleMessageSend = () => {
    const newMessage = {
      sender: "Me", // You can customize this depending on the sender
      text: message,
    };
    setMessages([...messages, newMessage]); // Add the new message to the array
    sendMessage({ chatId, message }); // Send the message
    setMessage(""); // Clear the input
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {/* Render the list of messages */}
        {messages.map((msg, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={msg.sender}
              secondary={
                <Typography
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {msg.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        variant="outlined"
        label="Type your message"
        InputProps={{
          endAdornment: (
            <Button variant="contained" onClick={handleMessageSend}>
              Send
            </Button>
          ),
        }}
      />
    </Box>
  );
}

export default Messagebox;
