import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Box,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { handleTextChange, handleEmojiClick } from "./templateFunctions.js";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { handleAddVariable } from "./templateFunctions.js";
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
  const { templateData, setTemplateData, component } = props;

  const handleEmojiIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setText(props.templateData?.templateBody || "");
  }, [props.templateData?.templateBody]);

  console.log(templateData);
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
          id="BODY"
          multiline
          fullWidth
          minRows={10}
          value={component.text}
          onChange={(e) => {
            handleTextChange("BODY", e?.target?.value, setTemplateData);
          }}
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
            onEmojiClick={(e) => {
              handleEmojiClick(
                "BODY",
                e.emoji,
                templateData,
                setTemplateData,
                handleClose
              );
            }}
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
          {component.text.length}/1024
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="text"
          onClick={() => {
            handleAddVariable("BODY", templateData, setTemplateData);
          }}
          sx={{
            textTransform: "none",
            fontFamily: "DM Sans Medium",
            color: "black",
          }}
          startIcon={<AddRoundedIcon />}
        >
          Add Variable
        </Button>
      </Box>
    </>
  );
}
