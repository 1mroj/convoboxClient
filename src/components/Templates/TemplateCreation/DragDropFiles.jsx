import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function FileDropZone(props) {
  const { templateData, setTemplateData, component } = props;
  console.log(component);
  const validateFile = (file) => {
    console.log(file.type);
    if (
      (component.format === "image" &&
        ["image/jpeg", "image/png", "image/jpg"].includes(file.type) &&
        file.size <= 5 * 1024 * 1024) ||
      (component.format === "video" && file.type === "video/mp4") ||
      (component.format === "file" &&
        file.type === "application/pdf" &&
        file.size <= 10 * 1024 * 1024)
    ) {
      // console.log("valid  file");
      return file;
    }
    return null;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    console.log("Dropped file:", droppedFile);
    const validFile = validateFile(droppedFile);
    if (validFile) {
      setTemplateData((oldData) => {
        const updatedComponents = oldData?.components?.map((item) => {
          if (item?.type === "HEADER") {
            return {
              ...item,
              substitution: [droppedFile], // Update the substitution array
            };
          }
          return item; // Return other components unchanged
        });

        return { ...oldData, components: updatedComponents };
      });
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    const validFile = validateFile(selectedFile);
    if (validFile) {
      console.log("Inside Valid File");
      setTemplateData((oldData) => {
        const updatedComponents = oldData?.components?.map((item) => {
          if (item?.type === "HEADER") {
            return {
              ...item,
              substitution: [selectedFile], // Update the substitution array
            };
          }
          return item; // Return other components unchanged
        });

        return { ...oldData, components: updatedComponents };
      });
      console.log(templateData);
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
    // console.log(templateData);
    setTemplateData((oldData) => {
      const updatedComponents = oldData?.components?.map((item) => {
        if (item?.type === "HEADER") {
          return {
            ...item,
            substitution: null, // Update the substitution array
          };
        }
        return item; // Return other components unchanged
      });

      return { ...oldData, components: updatedComponents };
    });
  };

  return (
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
        {component.format?.charAt(0)?.toUpperCase() +
          component.format?.slice(1)}
      </Typography>

      {component?.substitution?.length > 0 ? (
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
              }}
            >
              {component?.substitution[0].name}
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
            accept={
              component.format === "image"
                ? "image/jpeg,image/png,image/jpg"
                : component.format === "video"
                ? "video/mp4"
                : "application/pdf"
            }
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
            Drag and drop your files here
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            {component.format === "image"
              ? "File types: JPEG, JPG, PNG within 5MB size"
              : component.format === "video"
              ? "File types: Mp4 within 10MB size"
              : "File types: Pdf within 10MB size"}
          </Typography>
        </div>
      )}
    </Box>
  );
}
