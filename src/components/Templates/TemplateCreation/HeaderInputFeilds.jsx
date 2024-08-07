import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  handleTextChange,
  handleAddVariable,
  handleSubstitutionValueChange,
  handleMappingValueChange,
} from "./templateFunctions";
import { useState } from "react";

const textInputprops = {
  border: "1px solid ##848396",
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

export function TextInput(props) {
  const { templateData, setTemplateData, component } = props;
  const [headerComponent, setHeaderComponent] = useState(
    templateData.components.filter((component) => component.type === "HEADER")
  );

  console.log(component?.substitutions?.length);

  return (
    <>
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
          Text
        </Typography>
        <TextField
          id="HEADER"
          fullWidth
          onChange={(e) => {
            handleTextChange("HEADER", e?.target?.value, setTemplateData);
          }}
          placeholder="You can use this space to add a tagline, a way to unsubscribe, etc"
          variant="outlined"
          InputProps={{
            style: textInputprops,
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  fontFamily: "DM Sans Medium",
                  fontSize: "14px",
                }}
              >
                {component?.text ? component?.text?.length : "0"}
                /60
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: "8px" } }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <Button
            disabled={component?.substitutions?.length > 0 ? true : false}
            variant="text"
            onClick={() => {
              handleAddVariable("HEADER", templateData, setTemplateData);
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

          <Tooltip title="Your title can't include more than one variable.">
            <IconButton
              size="small"
              disableRipple
              disableFocusRipple
              disableTouchRipple
              sx={{ color: "#ADB0B3" }}
            >
              <InfoOutlinedIcon fontSize="20" />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Variable List */}
        {templateData.components
          .filter((component) => component.type === "HEADER")
          .map((headerComponent, headerIndex) => (
            <>
              {headerComponent.mappings &&
                Object.keys(headerComponent.mappings).map((key, i) => (
                  <Box
                    key={headerIndex}
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

                    <Box
                      key={`${headerIndex}-${i}`}
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
                            "HEADER",
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
                            "HEADER",
                            i,
                            e?.target?.value,
                            setTemplateData
                          );
                        }}
                        sx={{ flex: 2, ml: 1 }}
                        size="small"
                      />
                    </Box>
                  </Box>
                ))}
            </>
          ))}
      </Box>
    </>
  );
}
