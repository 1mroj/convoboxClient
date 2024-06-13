import { Box, Typography, TextField, Button } from "@mui/material";
const textInputprops = {
  border: "1px solid ##848396",
  border: "none",
  borderRadius: "12px",
  "&:not(.Mui-disabled):before": {
    borderBottom: "none", // Remove the underline when not focused
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: "none", // Remove the underline when hovered
  },
  "&.Mui-focused:before": {
    borderBottom: "none",
  },
};
export function TextInput(props) {
  const { templateData, setTemplateData } = props;
  return (
    <>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            color: "#4D4D4D",
            fontSize: "16px",
            fontWeight: 700,
            textAlign: "start",
            mb: 1,
          }}
        >
          Text
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => {
            setTemplateData({
              ...templateData,
              templateHeader: e.target.value,
            });
          }}
          placeholder="You can use this space to add a tagline ,a way to unsubscriber, etc"
          variant="outlined"
          InputProps={{ style: textInputprops }}
          InputLabelProps={{ style: { fontSize: "8px" } }}
        />
      </Box>
    </>
  );
}
