import { TextField, Box, Button, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function ConversationFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#EDEDED",
        borderRadius: "0pc 0px 12 px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        pt: 2,
        pb: 2,
      }}
    >
      <Box sx={{ width: "95%" }}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    color: "#FFF",
                    backgroundColor: "#7F2DF1",
                    fontWeight: 500,
                    fontSize: "12px",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#7F2DF1",
                      color: "#FFF",
                      boxShadow: "none",
                    },
                  }}
                >
                  Send
                </Button>
              </InputAdornment>
            ),
            style: {
              fontSize: "14px",
              height: "45px",
              borderRadius: "8px",
              backgroundColor: "#FFF",
            },
          }}
          size="small"
          fullWidth
        />
      </Box>
    </Box>
  );
}
