import { Height } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

const textInputProps = {
  border: "1px solid #848396",
  height: "50px",
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

export default function VariablesList({ templateData, setTemplateData }) {
  const handleVariableValueChange = (event, variable) => {
    const newVariableValue = event.target.value;
    const newTemplateVariables = templateData.templateVariables.map(
      (templateVariable) => {
        if (templateVariable.variable === variable.variable) {
          return { ...templateVariable, value: newVariableValue };
        }
        return templateVariable;
      }
    );
    setTemplateData((prevTemplateData) => ({
      ...prevTemplateData,
      templateVariables: newTemplateVariables,
    }));
  };

  return (
    <>
      {templateData.templateVariables?.length > 0 && (
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            borderRadius: "12px",
            backgroundColor: "#FAF6FF",
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              p: 2,
              width: "20%",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontSize: "16px",
                fontWeight: 700,
                textAlign: "start",
                // border: "1px solid black",
                mb: 1,
                pt: 1,
                pb: 1,
              }}
            >
              Variable Name
            </Typography>
            {templateData.templateVariables.map((variable) => (
              <Typography
                sx={{
                  color: "#4D4D4D",
                  fontSize: "16px",
                  fontWeight: 700,
                  width: "80%",
                  height: "30px",
                  textAlign: "center",
                  border: "1px solid black",
                  borderRadius: "6px",
                  p: 1,
                  mb: 1,
                }}
              >
                {variable.variable}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              p: 2,
              width: "80%",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontSize: "16px",
                fontWeight: 700,
                textAlign: "start",
                // border: "1px solid black",
                pt: 1,
                pb: 1,
                mb: 1,
              }}
            >
              Sample value
            </Typography>
            {templateData.templateVariables.map((variable) => (
              <TextField
                fullWidth
                size="small"
                onChange={(event) => handleVariableValueChange(event, variable)}
                InputProps={{ style: textInputProps }}
                sx={{ mb: 1 }}
              ></TextField>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
