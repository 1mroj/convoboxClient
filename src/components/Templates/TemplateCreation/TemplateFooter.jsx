import { Typography, TextField } from "@mui/material";
import { useState } from "react";

const textInputprops = {
  border: "1px solid ##848396",
  border: "none",
  borderRadius: "8px",
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
export default function TemplateFooter(props) {
  const { templateData, setTemplateData } = props;
  const [text, setText] = useState(props.templateData?.templateFooter || "");

  const handleTextChange = (event) => {
    if (event.target.value.length <= 500) {
      const newText = event.target.value;
      setTemplateData((prevTemplateData) => ({
        ...prevTemplateData,
        templateFooter: newText,
      }));
      setText(newText);
    }
  };
  return (
    <>
      <Typography
        sx={{
          color: "#4D4D4D",
          fontSize: "16px",
          fontWeight: 700,
          textAlign: "start",
          mb: 2,
        }}
      >
        Footer
      </Typography>

      <TextField
        fullWidth
        size="small"
        value={text}
        onChange={handleTextChange}
        placeholder="You can use this space to add a tagline ,a way to unsubscriber, etc"
        variant="outlined"
        InputProps={{ style: textInputprops }}
        InputLabelProps={{ style: { fontSize: "8px" } }}
      />
    </>
  );
}
