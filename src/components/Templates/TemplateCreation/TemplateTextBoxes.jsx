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
import axiosInstance from "../../../auth/axiosConfig";
import { SERVER_URL } from "../../../constants";

const headerTypes = [
  { label: "None", type: "none" },
  { label: "Text", type: "text" },
  { label: "Image", type: "image" },
  { label: "Video", type: "video" },
  { label: "Files", type: "file" },
  { label: "Location", type: "location" },
];

export default function TemplateForms(props) {
  const { templateData, setTemplateData, mode } = props;
  const [headerType, setHeadertype] = React.useState("none");
  const [bodyText, setBodytext] = useState("");
  const [variables, setVariables] = useState([]);
  const [file, setFile] = useState();
  const handleChange = (newForrmat) => {
    setTemplateData((oldData) => {
      const updatedComponents = oldData?.components?.map((component) =>
        component.type === "HEADER"
          ? {
              ...component,
              format: newForrmat,
            }
          : component
      );
      return { ...oldData, components: updatedComponents };
    });
  };

  const createTemplate = async () => {
    try {
      let header;
      // console.log(templateData);

      if (templateData?.templateHeaderType === "text") {
        header = {
          "content-type": "application/json",
        };
        console.log("this is text");
        const res = await axiosInstance?.post(
          "/templates/create",
          templateData,
          header
        );
        console.log(res);
      } else {
        header = {
          "content-type": "multipart/form-data",
        };
        console.log("this is Media");
        console.log(templateData);
        const formdata = new FormData();
        for (let component of templateData?.components) {
          console.log(component);
          if (component?.type === "HEADER" && component?.format !== "text") {
            const file = component?.substitution[0];
            formdata.set("file", file);
          }
        }
        formdata.append("category", templateData.category);
        formdata.append("language", templateData.language);
        formdata.append("name", templateData.name);
        formdata.append("templateId", templateData.templateId);
        formdata?.append("components", templateData?.components);
        formdata?.append("Button", templateData?.templateButtons);

        // for (let pair of formdata.entries()) {
        //   console.log(`${pair[0]}: ${pair[1]}`);
        // }

        const res = await axiosInstance?.post(
          "/templates/create",
          formdata,
          header
        );
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(templateData);

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
              onChange={(e) => handleChange(e?.target?.value)}
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
          {templateData?.components?.map((component) => {
            if (component?.type === "HEADER" && component?.format === "text") {
              return (
                <TextInput
                  templateData={templateData}
                  setTemplateData={setTemplateData}
                  component={component}
                />
              );
            } else if (
              (component?.type === "HEADER" && component?.format === "image") ||
              component?.format === "video" ||
              component?.format === "file"
            ) {
              return (
                <FileDropZone
                  key={component.id} // Ensure each element has a unique key
                  templateData={templateData}
                  setTemplateData={setTemplateData}
                  component={component}
                />
              );
            }
          })}
        </Box>
        <>
          {templateData?.components?.map((component) => {
            if (component?.type === "BODY") {
              return (
                <Box sx={{ mt: 2, flexGrow: 1 }}>
                  <BodyTextFeild
                    // text={templateData?.templateBody}
                    // setText={setTemplateData}
                    setVariables={setVariables}
                    templateData={templateData}
                    setTemplateData={setTemplateData}
                    component={component}
                  />
                </Box>
              );
            }
          })}
        </>
        <>
          {templateData?.components?.map((component) => {
            if (component?.type === "BODY") {
              return (
                component.mappings &&
                Object.keys(component.mappings).length > 0 && (
                  <Box sx={{ mt: 2, flexGrow: 1 }}>
                    <VariablesList
                      templateData={templateData}
                      setTemplateData={setTemplateData}
                      variables={setTemplateData.templateVariables}
                    />
                  </Box>
                )
              );
            }
          })}
        </>
        <>
          {templateData?.components?.map((component) => {
            if (component?.type === "FOOTER") {
              return (
                <Box sx={{ mt: 2, flexGrow: 1 }}>
                  <TemplateFooter
                    templateData={templateData}
                    setTemplateData={setTemplateData}
                    component={component}
                  />
                </Box>
              );
            }
          })}
        </>

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
          {mode === "create" && (
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
          )}

          <Button
            onClick={createTemplate}
            variant="contained"
            disabled={mode !== "create" ? true : false}
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
