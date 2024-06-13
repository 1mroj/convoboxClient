import React, { useState, useEffect } from "react";
import { Typography, TextField, Box, IconButton, Popover } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Picker from "emoji-picker-react";

const textInputProps = {
  border: "1px solid #848396",
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

export default function BodyTextField(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [text, setText] = useState(props.templateData?.templateBody || "");
  const { templateData, setTemplateData } = props;

  const handleTextChange = (event) => {
    if (event.target.value.length <= 1024) {
      let newText = event.target.value;
      const variableMatches = newText.match(/{{\d+}}/g);
      console.log(variableMatches);
      if (variableMatches) {
        const lastVariableMatch = variableMatches[variableMatches.length - 1];
        const lastVariableNumber = parseInt(lastVariableMatch.slice(2, -2));
        console.log(lastVariableMatch, lastVariableNumber);
        // If the last variable is not in the correct format
        if (lastVariableNumber !== variableMatches.length) {
          // Calculate the last variable index and the new variable number before updating the newText string
          const lastVariableIndex = newText.lastIndexOf(lastVariableMatch);
          const newVariableNumber = variableMatches.length;
          newText =
            newText.slice(0, lastVariableIndex) +
            `{{${newVariableNumber}}}` +
            newText.slice(lastVariableIndex + lastVariableMatch.length);
          // Set the cursor position based on the updated newText string
          event.target.selectionStart =
            lastVariableIndex + `{{${newVariableNumber}}`.length;
          event.target.selectionEnd =
            lastVariableIndex + `{{${newVariableNumber}}`.length;
        }
      }
      setTemplateData((prevTemplateData) => ({
        ...prevTemplateData,
        templateBody: newText,
      }));
      setText(newText);
      const newVariables = extractVariables(newText);
      setTemplateData((prevTemplateData) => ({
        ...prevTemplateData,
        templateVariables: newVariables,
      }));
    }
  };

  const extractVariables = (text) => {
    const variablePattern = /{{\d+}}/g;
    const matches = text.match(variablePattern);
    if (matches) {
      const uniqueMatches = Array.from(new Set(matches));
      console.log(uniqueMatches);
      return uniqueMatches.map((variable) => ({ variable, value: "" }));
    }
    return [];
  };

  const handleEmojiIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEmojiSelect = (emoji) => {
    const cursorPosition =
      document.getElementById("bodyTextField").selectionStart;
    const newText = [
      text.slice(0, cursorPosition),
      emoji.emoji,
      text.slice(cursorPosition),
    ].join("");
    console.log(newText);
    setText(newText);
    setTemplateData({ ...templateData, templateBody: newText });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setText(props.templateData?.templateBody || "");
  }, [props.templateData?.templateBody]);

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
        Message Body
      </Typography>
      <Box sx={{ position: "relative" }}>
        <TextField
          id="bodyTextField"
          multiline
          fullWidth
          minRows={10}
          value={text}
          onChange={handleTextChange}
          placeholder={`Hi {{1}}\nWelcome to {{2}}\nOne stop Solutions for all your Business needs`}
          variant="outlined"
          InputProps={{ style: textInputProps }}
          InputLabelProps={{ style: { fontSize: "8px" } }}
        />
        <IconButton
          aria-controls={anchorEl ? "emoji-picker" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleEmojiIconClick}
          sx={{ position: "absolute", bottom: 8, left: 8, mt: 1 }}
        >
          <EmojiEmotionsOutlinedIcon />
        </IconButton>
        <Popover
          id="emoji-picker"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Picker
            onEmojiClick={handleEmojiSelect}
            disableSearchBar={true}
            native={true}
          />
        </Popover>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#4D4D4D",
            position: "absolute",
            bottom: 8,
            right: 8,
            mt: 1,
          }}
        >
          {text.length}/1024
        </Typography>
      </Box>
    </>
  );
}
