import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const textInputProps = {
  // border: "1px solid #848396",
  borderRadius: "8px",
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

const whatsappButtonTypes = ["PHONE_NUMBER", "URL", "QUICK_REPLY"];

export default function TemplateButtons(props) {
  const { templateData, setTemplateData } = props;
  const [buttons, setButtons] = useState(templateData?.templateButtons || []);

  useEffect(() => {
    console.log(templateData.templateButtons);
  }, [templateData.templateButtons]);

  const handleAddButton = () => {
    const newButtons = [
      ...buttons,
      { type: "URL", url: "", text: "", phoneNumber: "" },
    ];
    setButtons(newButtons);
    setTemplateData({ ...templateData, templateButtons: newButtons });
  };

  const handleDeleteButton = (index) => {
    const newButtons = buttons.filter((_, i) => i !== index);
    setButtons(newButtons);
    setTemplateData({ ...templateData, templateButtons: newButtons });
  };

  const handleInputChange = (index, key, value) => {
    const newButtons = [...buttons];
    newButtons[index][key] = value;
    setButtons(newButtons);
    setTemplateData({ ...templateData, templateButtons: newButtons });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            color: "#4D4D4D",
            fontSize: "16px",
            fontWeight: 700,
            textAlign: "start",
            mb: 1,
          }}
        >
          Buttons
        </Typography>

        <Typography
          sx={{
            color: "#4D4D4D",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "start",
            color: "#A3AED0",
          }}
        >
          Create buttons that let customers respond to your message or take
          action
        </Typography>

        <Typography
          sx={{
            color: "#4D4D4D",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "start",
            color: "#A3AED0",
            mb: 2,
          }}
        >
          If you add more than three buttons, they will appear in a list
        </Typography>

        <Button
          variant="outlined"
          endIcon={<AddSharpIcon />}
          sx={{
            color: "#7F2DF1",
            border: "1px solid #7F2DF1",
            fontSize: "12px",
            fontWeight: 700,
            width: "150px",
            textTransform: "none",
          }}
          onClick={handleAddButton}
        >
          Add a Button
        </Button>
      </Box>
      {templateData.templateButtons.length > 0 && (
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            borderRadius: "12px",
            backgroundColor: "#FAF6FF",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            mt: 2,
          }}
        >
          {buttons.map((button, index) => (
            <Box
              key={index}
              sx={{
                ml: 2,
                mb: 2,
                mt: 2,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Select
                size="small"
                value={button.type}
                onChange={(e) =>
                  handleInputChange(index, "type", e.target.value)
                }
                InputProps={{
                  style: {
                    borderRadius: "12px",
                    border: "1px solid #A3AED0",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#fff", // Set the background color to white
                    },
                  },
                }}
                sx={{
                  width: "30%",
                  textAlign: "start",
                  borderRadius: "6px",
                }}
              >
                {whatsappButtonTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>

              {button.type === "QUICK_REPLY" && (
                <TextField
                  size="small"
                  label="Text"
                  fullWidth
                  variant="outlined"
                  value={button.text}
                  onChange={(e) =>
                    handleInputChange(index, "text", e.target.value)
                  }
                  InputProps={{ style: textInputProps }}
                  sx={{ width: "80%", ml: 1 }}
                />
              )}

              {button.type === "URL" && (
                <>
                  <TextField
                    size="small"
                    label="Text"
                    value={button.text}
                    onChange={(e) =>
                      handleInputChange(index, "text", e.target.value)
                    }
                    InputProps={{ style: textInputProps }}
                    sx={{ width: "40%", ml: 1 }}
                  />
                  <TextField
                    size="small"
                    label="URL"
                    value={button.url}
                    onChange={(e) =>
                      handleInputChange(index, "url", e.target.value)
                    }
                    InputProps={{ style: textInputProps }}
                    sx={{ width: "40%", ml: 1 }}
                  />
                </>
              )}

              {button.type === "PHONE_NUMBER" && (
                <>
                  <TextField
                    size="small"
                    label="Text"
                    value={button.text}
                    onChange={(e) =>
                      handleInputChange(index, "text", e.target.value)
                    }
                    InputProps={{ style: textInputProps }}
                    sx={{ width: "40%", ml: 1 }}
                  />
                  <TextField
                    size="small"
                    label="Phone Number"
                    value={button.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(index, "phoneNumber", e.target.value)
                    }
                    InputProps={{ style: textInputProps }}
                    sx={{ width: "40%", ml: 1 }}
                  />
                </>
              )}

              <IconButton
                sx={{ ml: 1, color: "red" }}
                onClick={() => handleDeleteButton(index)}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}
