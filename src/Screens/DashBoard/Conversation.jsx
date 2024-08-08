import { Grid, Box } from "@mui/material";
import ContactHeader from "../../components/Conversation/ContactHeader";
import ConversationSearch from "../../components/Conversation/ConversationSearch";
import { useEffect, useState } from "react";
import ContactsBar from "../../components/Conversation/Contactsbar";
import ConversationHeader from "../../components/Conversation/ConversationHeader";
import ConversationBody from "../../components/Conversation/ConversationBody";
import ConversationFooter from "../../components/Conversation/ConversationFooter";
import axios from "axios";
import io from "socket.io-client";
const wabaphone = "15550717907";

export default function Conversations() {
  const [contact, setcontact] = useState([]);
  const [selectedconvo, setselectedconvo] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [chats, setchats] = useState({});
  const [socket, setSocket] = useState(null);
  // console.log(process?.env?.REACT_APP_SERVER_BASE_URL);

  const getConversation = async () => {
    try {
      const res = await axios?.post(
        `http://localhost:5000/chats/getConversations`,
        {
          wabaphone: wabaphone,
        }
      );
      if (res?.status === 200) {
        setcontact(res?.data?.conversations);
        console.log(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getmessage = async () => {
    try {
      const res = await axios?.post(
        `http://localhost:5000/chats/getmessages/${selectedconvo}`,
        {},
        {}
      );
      setchats(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = (message) => {
    socket?.emit("sendmessage", message);
  };

  useEffect(() => {
    getConversation();
  }, []);

  useEffect(() => {
    const newsocket = io("http://localhost:5000", {
      auth: {
        token: {
          id: "275986335588625",
        },
      },
    }); // Replace "your-server-address" with your actual server address
    setSocket(newsocket);
    // Example event listeners
    socket?.on("connect", () => {
      console.log("Connected to server");
    });

    socket?.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket?.disconnect(); // Clean up the socket connection when component unmounts
    };
  }, []);

  useEffect(() => {
    if (selectedconvo !== null) {
      getmessage();
    }
  }, [selectedconvo]);
  // const [showSearch, setShowSearch] = useState(false);
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        backgroundColor: "#FFF",
      }}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        sx={{
          height: "100%",
          //   backgroundColor: "purple",
          borderRadius: "12px 0px 0px 12px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #F2F2F2",
            borderRadius: "12px 0px 0px 0px",
          }}
        >
          <ContactHeader
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        </Box>
        <ConversationSearch
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />

        <ContactsBar
          showSearch={showSearch}
          conversation={contact}
          setconvo={(id) => setselectedconvo(id)}
        />
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            borderRadius: "0px 12px 12px 0px",
            overflowX: "hidden",
            overflowY: "auto",
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
          }}
        >
          <ConversationHeader />
          <ConversationBody chats={chats} />
          <ConversationFooter
            sendmessage={sendMessage}
            socket={socket}
            selectedconvo={selectedconvo}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
