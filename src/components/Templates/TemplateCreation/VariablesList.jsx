import { Box, TextField, Typography } from "@mui/material";
import {
  handleTextChange,
  handleAddVariable,
  handleSubstitutionValueChange,
  handleMappingValueChange,
} from "./templateFunctions";

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

const variableProps = {
  border: "1px solid #848396",
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

export default function VariablesList({
  templateData,
  setTemplateData,
  component,
}) {
  return (
    <>
      {templateData.components
        .filter((component) => component.type === "BODY")
        .map((bodyComponent, bodyIndex) => (
          <Box
            key={bodyIndex}
            sx={{
              width: "95%",
              backgroundColor: "#FAF6FF",
              borderRadius: "8px",
              mt: 1,
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "120px",
                  flex: 0.5,
                  height: "35px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "6px",
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
                  Variable
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "120px",
                  flex: 2,
                  ml: 0.5,
                  height: "35px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "6px",
                }}
              >
                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Variable Name
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "120px",
                  flex: 2,
                  ml: 0.5,
                  height: "35px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Sample Value
                </Typography>
              </Box>
            </Box>
            {bodyComponent.mappings &&
              Object.keys(bodyComponent.mappings).map((key, i) => (
                <Box
                  key={`${bodyIndex}-${i}`}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "120px",
                      flex: 0.5,
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
                      {key}
                    </Typography>
                  </Box>

                  <TextField
                    InputProps={{
                      style: variableProps,
                    }}
                    onChange={(e) => {
                      handleMappingValueChange(
                        "BODY",
                        key,
                        e?.target?.value,
                        setTemplateData
                      );
                    }}
                    sx={{ flex: 2 }}
                    size="small"
                  />
                  <TextField
                    InputProps={{
                      style: variableProps,
                    }}
                    onChange={(e) => {
                      handleSubstitutionValueChange(
                        "BODY",
                        i,
                        e?.target?.value,
                        setTemplateData
                      );
                    }}
                    sx={{ flex: 2, ml: 1 }}
                    size="small"
                  />
                </Box>
              ))}
          </Box>
        ))}
    </>
  );
}
