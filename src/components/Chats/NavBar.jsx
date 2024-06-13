import { useTheme } from "@emotion/react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

function NavBar({ setChatId }) {
  const [Roomid, setRoomId] = useState("");
  const GetContacts = async () => {
    try {
      console.log("contacts");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetContacts();
  }, []);

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          paddingX: 2,
          paddingTop: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontWeight: 400,
            }}
          >
            Message
          </Typography>
          <Box sx={theme?.palette?.notificationBox}>
            <p>30+</p>
          </Box>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 2,
          }}
        >
          <TextField sx={{}} type="date" />
          <TextField sx={{}} type="date" />
        </Box>

        <TextField
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        />
      </Box>
      {/* GetContacts */}
      <Box
        sx={{
          marginTop: 2,
          flex: 1,
          overflow: "scroll",
        }}
      >
        <Stack sx={{}} divider={<Divider orientation="horizontal" />}>
          <ContactCard
            id={"917339213046"}
            Name={"Ares"}
            setChatId={setChatId}
          />
          <ContactCard
            id={"918680938236"}
            Name={"imroj"}
            setChatId={setChatId}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default NavBar;
