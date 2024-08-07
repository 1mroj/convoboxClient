import { Avatar, Box, IconButton, Typography } from "@mui/material";
import convoboxLogo from "../../Assets/convoboxIcon.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default function ContactHeader({ showSearch, setShowSearch }) {
  return (
    <Box
      sx={{
        height: "100%",
        pl: 2,
        pr: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          src={convoboxLogo}
          sx={{
            p: 1,
            border: "1px solid black",
            height: "25px",
            width: "25px",
            mr: 1,
            backgroundColor: "#000",
          }}
        ></Avatar>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          ConvoBox
        </Typography>
      </Box>

      <Box>
        <IconButton
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
