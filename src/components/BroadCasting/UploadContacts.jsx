import { Box, Button, Typography, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CloseIcon from "@mui/icons-material/Close";

export default function UploadContacts() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCSV, setSelectedCSV] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setSelectedCSV(selectedFile);
  };

  const handleCloseIconClick = () => {
    setSelectedCSV(null);
    // Reset the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleFileInputClick = (event) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    console.log(selectedCSV);
  }, [selectedCSV]);

  const steps = [
    {
      stepValue: 0,
      label: "Download .csv file",
      description:
        "Download this file and fill your contacts and message variable first",
      icon: <FileDownloadIcon size="small" />,
    },
    {
      stepValue: 1,
      label: "Upload .csv file",
      description: "Upload the .CSV file, with the filled data here",
      function: handleFileInputClick,
      icon: <FileUploadIcon size="small" />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        mt: 2,
        pt: 1,
        pb: 1,
        borderRadius: "8px",
      }}
    >
      {steps.map((step, index) => (
        <Box key={index}>
          <Box
            sx={{
              m: 1,
              ml: 2,
              p: 1,
              display: "flex",
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
                width: "auto",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor:
                    step?.stepValue <= activeStep ? "#7F2DF1" : "#848396",
                  p: 1,
                  width: "30px",
                  height: "30px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, fontSize: "14px", color: "#FFF" }}
                >
                  {step.stepValue + 1}
                </Typography>
              </Box>

              <Typography
                sx={{
                  ml: 2,
                  fontSize: "12px",
                  width: "80%",
                  textAlign: "left",
                  color: step?.stepValue <= activeStep ? "#000" : "#848396",
                }}
              >
                {step.description}
              </Typography>
            </Box>
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              accept=".csv"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            {step.stepValue === 0 ? (
              <Button
                startIcon={step.icon}
                disabled={step?.stepValue > activeStep}
                sx={{
                  minWidth: "150px",
                  color: "#FFF",
                  textTransform: "none",
                  fontSize: "10px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  backgroundColor:
                    step?.stepValue <= activeStep ? "#7F2DF1" : "#848396",
                  boxShadow: "none",
                  "&:hover": {
                    color: "#FFF",
                    background:
                      step?.stepValue <= activeStep ? "#7F2DF1" : "#848396",
                    boxShadow: "none",
                  },
                }}
              >
                {step.label}
              </Button>
            ) : selectedCSV != null ? (
              <Box
                sx={{
                  mt: 2,
                  pl: 1,
                  border: "1px solid #A3AED0",
                  borderRadius: "8px",
                  width: "150px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "16px",
                      fontWeight: 400,
                      whiteSpace: "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {selectedCSV.name}
                  </Typography>

                  <IconButton onClick={handleCloseIconClick}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Button
                startIcon={step.icon}
                disabled={step?.stepValue > activeStep}
                sx={{
                  minWidth: "150px",
                  color: "#FFF",
                  textTransform: "none",
                  fontSize: "10px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  backgroundColor:
                    step?.stepValue <= activeStep ? "#7F2DF1" : "#848396",
                  boxShadow: "none",
                  "&:hover": {
                    color: "#FFF",
                    background:
                      step?.stepValue <= activeStep ? "#7F2DF1" : "#848396",
                    boxShadow: "none",
                  },
                }}
                onClick={handleFileInputClick}
              >
                {step.label}
              </Button>
            )}
          </Box>
          {step.stepValue === 0 && (
            <Box
              sx={{
                borderRight: "1px dashed #000",
                height: "30px",
                width: "50px",
                ml: -0.6,
              }}
            ></Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
