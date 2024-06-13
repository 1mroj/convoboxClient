import { Box, Typography } from "@mui/material";
import logo from "../../Assets/ConvoBoxLogo.png";
import banner from "../../Assets/loginbanner.png";
import metaProvider from "../../Assets/metaTechProvider.png";

export function LoginBanner() {
  return (
    <>
      <Box sx={{ width: "90%", height: "90%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <img src={logo} height="15%" width="30%" />
        </Box>
        <img
          src={banner}
          height="70%"
          width="70%"
          // style={{ backgroundColor: "green" }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={metaProvider} />
          <Typography
            sx={{
              font: "Inter",
              fontWeight: 400,
              fontSize: "24px",
              color: "#000000",
              mt: 2,
            }}
          >
            Powered by{" "}
            <span
              style={{
                // fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "20px",
                color: "#000000", // Add any other styles you want
              }}
            >
              Official WhatsApp Business API
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
