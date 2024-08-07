import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const textInputProps = {
  border: "1px solid #848396",
  border: "none",
  borderRadius: "12px",
  "&:not(.Mui-disabled):before": {
    borderBottom: "none",
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: "none",
  },
  "&.Mui-focused:before": {
    borderBottom: "none",
  },
};

export default function ConversationSearch({ showSearch, setShowSearch }) {
  const [selectedChatType, setChatType] = useState("All");
  const chatType = ["All", "Unopened"];

  const handleChange = (event, newValue) => {
    setChatType(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          mt: showSearch && 1,
          ml: 1,
          mr: 1,
        }}
      >
        <Collapse in={showSearch} timeout="auto">
          <TextField
            fullWidth
            size="small"
            InputProps={{
              // endAdornment: (
              //   <InputAdornment>
              //     <IconButton sx={{ color: "#848396", fontWeight: 500 }}>
              //       <SearchIcon sx={{ height: "20px", width: "20px" }} />
              //     </IconButton>
              //   </InputAdornment>
              // ),
              style: {
                ...textInputProps,
                fontSize: "14px",
                borderRadius: "8px",
              },
            }}
            placeholder="Search"
          />
        </Collapse>
        <Box sx={{ mt: 0, maxWidth: "100%" }}>
          <Tabs
            value={selectedChatType}
            onChange={handleChange}
            sx={{
              width: "100%",
              borderBottom: "1px solid #030229",
              "& .MuiTabs-indicator": {
                backgroundColor: "#7F2DF1",
                height: "4px",
              },
              "& .MuiTab-root": {
                fontSize: "14px",
                minWidth: "100px",
                fontWeight: 500,
                textTransform: "none",
                color: "#848396",
                "&.Mui-selected": {
                  color: "#7F2DF1",
                  fontWeight: 700,
                  fontSize: "16px",
                },
              },
            }}
          >
            {chatType.map((category) => (
              <Tab
                key={category}
                value={category}
                label={category}
                sx={{ flex: 1 }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
