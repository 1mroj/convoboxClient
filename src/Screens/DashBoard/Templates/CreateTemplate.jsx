import { Box, Grid, Typography, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TemplateForms from "../../../components/Templates/TemplateCreation/TemplateTextBoxes";
import MobileScreen from "../../../components/Templates/TemplateCreation/MobileScreen";
import { useState } from "react";

const categories = ["IT", "NGO", "accounting", "management"];
const languages = ["tamil", "english", "kannada", "hindi"];

const comboBoxData = [
  { title: "Categories ", options: categories },
  { title: "Languages", options: languages },
];

export default function CreateTemplate() {
  const [templateData, setTemplateData] = useState({
    templateName: "",
    templateCategory: "",
    templateLanguage: "",
    templateHeaderType: "none",
    templateHeader: "",
    templateheaderType: "none",
    templateBody: "",
    templateFooter: "",
    templateVariables: [],
    templateButtons: [],
  });
  return (
    <Grid container columnSpacing={2} sx={{ mt: -2 }}>
      {/* Text Feilds and ComboBox */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              sx={{
                width: "100%",
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
                }}
              >
                Template Name
              </Typography>

              <TextField
                size="small"
                InputProps={{
                  style: { borderRadius: "6px" },
                }}
                placeholder="template name"
                InputLabelProps={{
                  style: {
                    color: "#A3AED0",
                    fontSize: "8px",
                    fontWeight: 500,
                  },
                }}
                sx={{
                  width: "100%",
                  mt: 1,
                  fontSize: "8px",
                }}
              />
            </Box>
          </Grid>

          {comboBoxData.map((data) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  width: "100%",
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
                  }}
                >
                  {data.title}
                </Typography>

                <Select
                  size="small"
                  //   value={}
                  //   onChange={(e) => setCategory(e.target.value)}
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
                    width: "100%",
                    mt: 1,
                    textAlign: "start",
                    // fontSize: "8px",
                    borderRadius: "6px",
                  }}
                >
                  {data.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <TemplateForms
              templateData={templateData}
              setTemplateData={setTemplateData}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <MobileScreen
              templateData={templateData}
              setTemplateData={setTemplateData}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
