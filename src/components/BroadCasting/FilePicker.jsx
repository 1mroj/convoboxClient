import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function FilePicker(props) {
  const { selectedCSV, setSelectedCSV } = props;

  const validateFile = (file) => {
    return file.type === "text/csv" && file.size <= 2 * 1024 * 1024
      ? file
      : null;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    const validFile = validateFile(droppedFile);
    if (validFile) {
      setSelectedCSV(validFile);
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    const validFile = validateFile(selectedFile);
    if (validFile) {
      setSelectedCSV(validFile);
    }
  };

  const handleFileInputClick = (event) => {
    event.preventDefault();
    document.querySelector("#file-input").click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCloseIconClick = () => {
    setSelectedCSV(null);
  };

  return (
    <Box
      sx={{
        mt: 1,
        backgroundColor: "#FFF",
        borderRadius: "12px",
        maxWidth: "80%",
        p: 2,
      }}
    >
      {selectedCSV ? (
        <Box
          sx={{
            mt: 2,
            pl: 1,
            border: "1px solid #A3AED0",
            borderRadius: "8px",
            minWidth: "50%",
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
        <div
          style={{
            width: "100%",
            height: "150px",
            border: "1px dotted #A3AED0",
            backgroundColor: "#FAF6FF",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            accept=".csv"
            onChange={handleFileInputChange}
          />
          <Button
            variant="contained"
            sx={{
              color: "#FFF",
              pl: 5,
              pr: 5,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              borderRadius: "10px",
              backgroundColor: "#7F2DF1",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#7F2DF1",
                color: "#FFF",
                boxShadow: "none",
              },
            }}
            onClick={handleFileInputClick}
          >
            Upload
          </Button>

          <Typography
            sx={{ mt: 1, mb: 0.5, fontSize: "12px", fontWeight: 400 }}
          >
            Drag and drop your CSV files here
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            File types: CSV within 2MB size
          </Typography>
        </div>
      )}
    </Box>
  );
}
