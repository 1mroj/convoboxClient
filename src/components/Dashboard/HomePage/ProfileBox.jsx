import {
  Grid,
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditIcon from "@mui/icons-material/Edit";
import convoBoxIcon from "../../../Assets/convoboxIcon.png";

export default function ProfileBox() {
  const profiledesign = {
    businessName: "ConvoBox",
    verified: "Registered",
    phoneNUmber: "+919620988054",
    registrationStatus: true,
    wabId: "ID123456678267",
    profilePicture: convoBoxIcon,
  };

  const whatsappStatus = [];
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "360px",
          height: "220px",
        }}
      >
        {/* Outer Box */}
        <Box
          sx={{
            width: "100%",
            height: "80%",
            borderRadius: "10px",
            backgroundColor: "#FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              pl: 2,
              pr: 2,
              pt: 1,
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
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 700, color: "#53545C" }}
              >
                {profiledesign.businessName}
              </Typography>
              <IconButton sx={{ color: "#48C858" }}>
                <VerifiedIcon sx={{ height: "15px", width: "15px" }} />
              </IconButton>
            </Box>
            <IconButton sx={{ color: "#696D6E" }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              pl: 2,
              pr: 2,
              //   mt: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 700, color: "#7F2DF1" }}
              >
                {profiledesign.phoneNUmber}
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#696D6E",
                  mt: 1,
                }}
              >
                Status :{" "}
                <span style={{ fontSize: "16px", fontWeight: 700 }}>
                  {profiledesign.verified}
                </span>
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  p: 2,
                  border: "1px solid #EDEDED",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={profiledesign.profilePicture}
                  height={30}
                  width={30}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              pl: 2,
              pr: 2,
              pb: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#696D6E",
                mt: 1,
              }}
            >
              ID :{" "}
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                {profiledesign.wabId}
              </span>
            </Typography>
            <Typography
              //   onClick={handleClick} //
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#7F2DF1",
                textDecoration: "underline",
                cursor: "pointer", // Add cursor style to indicate clickable text
              }}
            >
              View Profile
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "360px",
        }}
      >
        {/* Outer Box */}
        <Box
          sx={{
            height: "80%",
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "#FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 2,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 700, color: "#53545C" }}
              >
                Whatsapp Business API
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  ml: 0.5,
                  height: "15px",
                  width: "15px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "8px" }}>𝓲</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#20B038",
                textTransform: "none",
                borderRadius: "5px",
                boxShadow: "none",
                fontSize: "10px",
                fontWeight: 500,
                pl: 5,
                mt: 1,
                pr: 5,
                "&:hover": {
                  backgroundColor: "#20B038",
                },
              }}
            >
              Live
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 700, color: "#53545C" }}
              >
                Quality Rating
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  ml: 0.5,
                  height: "15px",
                  width: "15px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "8px" }}>𝓲</Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#20B038",
                textTransform: "none",
                borderRadius: "5px",
                fontSize: "10px",
                boxShadow: "none",
                fontWeight: 500,
                pl: 5,
                mt: 1,
                pr: 5,
                "&:hover": {
                  backgroundColor: "#20B038",
                },
              }}
            >
              High
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "360px",
        }}
      >
        {/* Outer Box */}
        <Box
          sx={{
            height: "80%",
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "#FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 2,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#53545C" }}
            >
              Remaining Quota
            </Typography>

            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: 700,
                color: "#53545C",
                opacity: "70%",
              }}
            >
              1000
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#7F2DF1",
                textTransform: "none",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "none",
                fontWeight: 500,
                pl: 5,
                mt: 1,
                pr: 5,
                "&:hover": {
                  backgroundColor: "#7F2DF1",
                },
              }}
            >
              Add Credits
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
