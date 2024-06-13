import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";

function ContactCard({ Name, id, setChatId }) {
  const theme = useTheme();
  const Handleclick = () => {
    setChatId(id);
  };

  return (
    <div key={id} onClick={Handleclick}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          gap: 1,
        }}
      >
        <Box sx={theme?.palette?.contactAvatar}></Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 700,
            }}
          >
            {Name}
          </Typography>
          <Typography
            style={{
              width: "85%",
              textAlign: "start",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              background: "#DFF6F4",
              color: "#128C7E",
              // position: "relative",
              // top: 0,
              // right: 0,
            }}
          >
            <Typography>2+</Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              textAlign: "start",
            }}
          >
            1 min ago
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ContactCard;
