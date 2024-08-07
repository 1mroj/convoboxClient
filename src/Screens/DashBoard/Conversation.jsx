import { Grid, Box } from "@mui/material";
import ContactHeader from "../../components/Conversation/ContactHeader";
import ConversationSearch from "../../components/Conversation/ConversationSearch";
import { useState } from "react";
import ContactsBar from "../../components/Conversation/Contactsbar";
import ConversationHeader from "../../components/Conversation/ConversationHeader";
import ConversationBody from "../../components/Conversation/ConversationBody";
import ConversationFooter from "../../components/Conversation/ConversationFooter";
import axios from "axios";

export default function Conversations() {
  const [contact, setcontact] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const getConversation = async () => {
    try {
      const res = await axios?.post(
        "http://localhost:5000/chats/getConversations",
        {
          wabaphone: "",
        },
        {}
      );
    } catch (errro) {}
  };
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

        <ContactsBar showSearch={showSearch} />
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
          <ConversationBody />
          <ConversationFooter />
        </Box>
      </Grid>
    </Grid>
  );
}
