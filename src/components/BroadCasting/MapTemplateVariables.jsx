import {
  Box,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function MapTemplateVariables() {
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

  const handleInputChange = (index, key, value) => {};

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedVariables, setSelectedVariables] = useState({});
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const handleFileInputClick = (event) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCloseIconClick = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleVariableChange = (event, variable) => {
    setSelectedVariables({
      ...selectedVariables,
      [variable]: event.target.value,
    });
  };

  const variables = ["{{1}}", "{{2}}", "{{3}}"];
  const csvHeader = ["firstName", "lastName", "offerName"];
  const buttons = [
    {
      type: "PHONE_NUMBER",
    },
    { type: "URL" },
    { type: "QUICK_REPLY" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        mt: 1,
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          m: 1,
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", color: "#000", fontWeight: 700, mt: 2 }}
        >
          Header Media
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
          }}
        >
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            accept=".jpeg,.jpg,.png"
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          {selectedFile != null ? (
            <Box
              sx={{
                pl: 1,
                border: "1px solid #A3AED0",
                borderRadius: "8px",
                width: "200px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#4D4D4D",
                  fontSize: "12px",
                  fontWeight: 400,
                  whiteSpace: "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {selectedFile.name}
              </Typography>

              <IconButton onClick={handleCloseIconClick}>
                <CloseIcon />
              </IconButton>
            </Box>
          ) : (
            <Button
              sx={{
                minWidth: "150px",
                color: "#FFF",
                textTransform: "none",
                fontSize: "10px",
                fontWeight: 700,
                borderRadius: "8px",
                backgroundColor: "#7F2DF1",
                boxShadow: "none",
                "&:hover": {
                  color: "#FFF",
                  background: "#7F2DF1",
                  boxShadow: "none",
                },
              }}
              onClick={handleFileInputClick}
            >
              Upload
            </Button>
          )}
          <Typography
            sx={{ fontSize: "12px", color: "#000", fontWeight: 400, ml: 1 }}
          >
            File types: JPEG, JPG, PNG within 5MB size
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: "14px", color: "#000", fontWeight: 700, mt: 3 }}
        >
          Body Text
        </Typography>
        {/* Variable Box */}
        <Box
          sx={{
            width: "95%",
            backgroundColor: "#FAF6FF",
            borderRadius: "8px",
            mt: 1,
            p: 2,
          }}
        >
          {variables.map((variable, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 1,
                width: "10s0%",
                // backgroundColor: "red",
              }}
            >
              <Box
                sx={{
                  width: "120px",
                  height: "35px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "6px",
                  border: "1px solid #000",
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {variable}
                </Typography>
              </Box>

              <Select
                size="small"
                value={selectedVariables[variable] || ""}
                onChange={(event) => handleVariableChange(event, variable)}
                InputProps={{
                  style: {
                    borderRadius: "12px",
                    border: "1px solid #A3AED0",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      //   border: "1px solid #000",
                      backgroundColor: "#FFF",
                      borderRadius: "8px",
                    },
                  },
                }}
                sx={{
                  width: "stretch",
                  textAlign: "left",
                  //   border: "1px solid #000",
                  //   mr: 2,
                  //   backgroundColor: "#FFF",
                  //   height: "50px",
                  borderRadius: "8px",
                }}
              >
                {csvHeader.map((header, idx) => (
                  <MenuItem key={idx} value={header}>
                    {header}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))}
        </Box>
        {buttons.length > 0 && (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                mt: 1,
              }}
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#7F2DF1",
                  fontWeight: 700,
                  mb: 1,
                  textDecoration: "underline",
                }}
              >
                Advance option
              </Typography>
              <Box sx={{ ml: 1 }}>
                {showAdvanced ? (
                  <ArrowDropUpIcon sx={{ color: "#7F2DF1" }} />
                ) : (
                  <ArrowDropDownIcon sx={{ color: "#7F2DF1" }} />
                )}
              </Box>
            </Box>
            {showAdvanced && (
              <Box sx={{ mt: 1, mb: 2, width: "100%" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: 700,
                    textAlign: "left",
                    mb: 1,
                  }}
                >
                  Buttons
                </Typography>
                {buttons.map((button, index) => (
                  <>
                    {button.type === "QUICK_REPLY" && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          mt: 1,
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: "140px",
                            height: "36px",
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "6px",
                            border: "1px solid #000",
                            mr: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#4D4D4D",
                              fontSize: "14px",
                              fontWeight: 700,
                            }}
                          >
                            {button.type}
                          </Typography>
                        </Box>
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
                      </Box>
                    )}

                    {button.type === "URL" && (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "140px",
                              height: "36px",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "6px",
                              border: "1px solid #000",
                              mr: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#4D4D4D",
                                fontSize: "14px",
                                fontWeight: 700,
                              }}
                            >
                              {button.type}
                            </Typography>
                          </Box>
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
                            fullWidth
                            value={button.url}
                            onChange={(e) =>
                              handleInputChange(index, "url", e.target.value)
                            }
                            InputProps={{ style: textInputProps }}
                            sx={{ ml: 1 }}
                          />
                        </Box>
                      </>
                    )}

                    {button.type === "PHONE_NUMBER" && (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "140px",
                              height: "36px",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "6px",
                              border: "1px solid #000",
                              mr: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#4D4D4D",
                                fontSize: "14px",
                                fontWeight: 700,
                              }}
                            >
                              {button.type}
                            </Typography>
                          </Box>
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
                              handleInputChange(
                                index,
                                "phoneNumber",
                                e.target.value
                              )
                            }
                            InputProps={{ style: textInputProps }}
                            sx={{ width: "40%", ml: 1 }}
                          />
                        </Box>
                      </>
                    )}
                  </>
                ))}
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
