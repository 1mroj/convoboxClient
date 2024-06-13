import React from "react";
import { Box, Typography } from "@mui/material";
import Facebook from "../components/FaceBook/Facebook";
import whatsappLogo from "../Assets/Whatsapp logo 1.svg";

function Setup() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#7F2DF1",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          background: "#ffffff",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          gap: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontweight: 700,
          }}
        >
          Whatsapp
        </Typography>
        <img
          src={whatsappLogo}
          alt="whatsapplogo"
          style={{
            width: 200,
            height: 200,
            objectFit: "contain",
          }}
        />

        <Facebook />
      </Box>
    </Box>
  );
}

export default Setup;
