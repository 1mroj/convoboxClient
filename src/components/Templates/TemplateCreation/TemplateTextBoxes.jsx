import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { TextInput } from "./HeaderInputFeilds";
import { FileDropZone } from "./DragDropFiles";
import BodyTextFeild from "./BodyTextFeild";
import VariablesList from "./VariablesList";
import TemplateFooter from "./TemplateFooter";
import TemplateButtons from "./TemplateButtons";

const headerTypes = [
  { label: "None", type: "none" },
  { label: "Text", type: "text" },
  { label: "Image", type: "image" },
  { label: "Video", type: "video" },
  { label: "Files", type: "file" },
  { label: "Location", type: "location" },
];

export default function TemplateForms(props) {
  const { templateData, setTemplateData } = props;
  const [headerType, setHeadertype] = React.useState("none");
  const [bodyText, setBodytext] = useState("");
  const [variables, setVariables] = useState([]);
  const [file, setFile] = useState();
  const handleChange = (event) => {
    setTemplateData({
      ...templateData,
      templateHeaderType: event.target.value,
      templateHeader: null,
    });
  };

  // console.log(templateData);

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        width: "100%",
        height: "600px",
        borderRadius: "12px",
        display: "grid",
        placeItems: "center",
        overflow: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
      }}
    >
      <Box sx={{ width: "95%", height: "95%", mb: 3, mt: 2 }}>
        <Box>
          <Typography
            sx={{
              color: "#4D4D4D",
              fontSize: "16px",
              fontWeight: 700,
              textAlign: "start",
            }}
          >
            Message Header
          </Typography>
        </Box>
        {/* Box for Radios Boxes */}
        <Box
          sx={{
            mt: 2,
            border: "1px solid #A3AED0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="none"
              name="radio-buttons-group"
              value={templateData?.templateHeaderType}
              onChange={handleChange}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              {headerTypes.map((option) => (
                <FormControlLabel
                  key={option.type}
                  value={option.type}
                  control={
                    <Radio
                      sx={{
                        color: "#B8B8B8",
                        "&.Mui-checked": { color: "#7F2DF1" },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        color: "#4D4D4D",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      {option.label}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          {templateData.templateHeaderType === "text" ? (
            <TextInput
              templateData={templateData}
              setTemplateData={setTemplateData}
            />
          ) : (
            (templateData?.templateHeaderType === "video" ||
              templateData?.templateHeaderType === "image" ||
              templateData?.templateHeaderType === "file") && (
              <FileDropZone
                templateData={templateData}
                setTemplateData={setTemplateData}
              />
            )
          )}
        </Box>
        <Box sx={{ mt: 2, flexGrow: 1 }}>
          <BodyTextFeild
            // text={templateData?.templateBody}
            // setText={setTemplateData}
            setVariables={setVariables}
            templateData={templateData}
            setTemplateData={setTemplateData}
          />
        </Box>
        <Box sx={{ mt: 2, flexGrow: 1 }}>
          <VariablesList
            templateData={templateData}
            setTemplateData={setTemplateData}
            variables={setTemplateData.templateVariables}
          />
        </Box>

        <Box sx={{ mt: 2, flexGrow: 1 }}>
          <TemplateFooter
            templateData={templateData}
            setTemplateData={setTemplateData}
          />
        </Box>
        <Box sx={{ mt: 2, flexGrow: 1 }}>
          <TemplateButtons
            templateData={templateData}
            setTemplateData={setTemplateData}
          />
        </Box>

        <Box
          sx={{
            mt: 2,
            mb: 2,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              pl: 5,
              pr: 5,
              color: "#7F2DF1",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 700,
              borderRadius: "8px",
              border: "1px solid #7F2DF1",
              boxShadow: "none",
              "&:hover": {
                border: "1px solid #7F2DF1", // Grayish background color
                color: "#7F2DF1",
                boxShadow: "none",
              },
            }}
          >
            Draft
          </Button>

          <Button
            variant="contained"
            sx={{
              pl: 2,
              pr: 2,
              ml: 2,
              color: "#FFF",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 700,
              borderRadius: "8px",
              backgroundColor: "#7F2DF1",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#7F2DF1", // Grayish background color
                color: "#FFF",
                boxShadow: "none",
              },
            }}
          >
            Submit Template
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
