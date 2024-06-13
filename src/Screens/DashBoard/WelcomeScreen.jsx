import { Box } from "@mui/system";
import boxBackground from "../../Assets/background.png";
import { Button, Typography, ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import WhatsAppIcon from "../../Assets/whatsapplogo.svg";
import businessApi from "../../Assets/businessApi.png";
import { ProfileDialogBox } from "../../components/Onboarding/ProfileDialogBox";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const user = "Arun";

export default function WelcomeScreen() {
  return (
    <>
      <ProfileDialogBox />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          //   height: "90vh",
          //   backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            width: "100%",

            backgroundImage: `url(${boxBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#7F2DF199",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              mr: 2,
              ml: 3,
              mt: 3,
              mb: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#FFF", fontWeight: 700, mb: 2, fontSize: "24px" }}
            >
              Hey {user} , Welcome to ConvoBox !
            </Typography>
            <Typography
              sx={{ color: "#FFF", fontWeight: 500, mb: 3, fontSize: "16px" }}
            >
              To use ConvoBox for your business, you need to apply for the
              WhatsApp Business API
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                variant="contained"
                sx={{
                  color: "#7F2DF1",
                  pl: 4,
                  pr: 4,
                  mr: 2,
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "10px",
                  backgroundColor: "#FFF",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#f5f5f5", // Grayish background color
                    color: "#5e16c4",
                    boxShadow: "none",
                  },
                }}
                startIcon={
                  <img
                    height="25px"
                    width="25px"
                    src={WhatsAppIcon}
                    alt="WhatsApp Icon"
                  />
                }
              >
                Apply for WhatsApp Business API ( FREE )
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#FFF",
                  border: "1px solid #FFF",
                  textTransform: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 500,
                  pl: 6,
                  pr: 6,
                  "&:hover": {
                    border: "1px solid #FFF",
                  },
                }}
              >
                Schedule Live Demo
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "200px",
              ml: 2,
              mt: 3,
              mb: 3,
            }}
          >
            <img src={businessApi} />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            width: "100%",
            backgroundColor: "#FFF",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Box sx={{ width: "95%", mt: 3 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={WhatsAppIcon} height="35px" width="35px" />
                <Typography
                  sx={{
                    color: "#425166",
                    fontWeight: 700,
                    ml: 1,
                    fontSize: "18px",
                  }}
                >
                  Apply for WhatsApp Business API
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  color: "#FFF",
                  pl: 5,
                  pr: 5,
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "10px",
                  backgroundColor: "#7F2DF1",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#7F2DF1", // Grayish background color
                    color: "#FFF",
                    boxShadow: "none",
                  },
                }}
                endIcon={<ArrowRightAltIcon />}
              >
                Launch WhatsApp Onboarding{" "}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "95%",
              backgroundColor: "#F7F2FE",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              mt: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                m: 4,
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "20px",
                }}
              >
                What You’ll Need:
              </Typography>
              <ListItem
                disableGutters
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <ListItemIcon sx={{ minWidth: "24px" }}>•</ListItemIcon>
                <Typography sx={{ color: "#425166", fontSize: "18px" }}>
                  A Phone number that doesn't have WhatsApp App or WhatsApp
                  Business App installed (Please DELETE if installed or you can
                  buy. a new number)
                </Typography>
              </ListItem>
              <ListItem
                disableGutters
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <ListItemIcon sx={{ minWidth: "24px" }}>•</ListItemIcon>
                <Typography sx={{ color: "#425166", fontSize: "18px" }}>
                  A Facebook account you can access
                </Typography>
              </ListItem>

              <ListItem
                disableGutters
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <ListItemIcon sx={{ minWidth: "24px" }}>•</ListItemIcon>
                <Typography sx={{ color: "#425166", fontSize: "18px" }}>
                  A Registered Business & Working Website
                </Typography>
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
