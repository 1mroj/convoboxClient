import { Box, Grid, Typography, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TemplateForms from "../../../components/Templates/TemplateCreation/TemplateTextBoxes";
import MobileScreen from "../../../components/Templates/TemplateCreation/MobileScreen";
import { useState } from "react";

const categories = ["AUTHENTICATION", "MARKETING", "UTILITY"];

const languages = [
  { language: "Afrikaans", code: "af" },
  { language: "Albanian", code: "sq" },
  { language: "Arabic", code: "ar" },
  { language: "Azerbaijani", code: "az" },
  { language: "Bengali", code: "bn" },
  { language: "Bulgarian", code: "bg" },
  { language: "Catalan", code: "ca" },
  { language: "Chinese (CHN)", code: "zh_CN" },
  { language: "Chinese (HKG)", code: "zh_HK" },
  { language: "Chinese (TAI)", code: "zh_TW" },
  { language: "Croatian", code: "hr" },
  { language: "Czech", code: "cs" },
  { language: "Danish", code: "da" },
  { language: "Dutch", code: "nl" },
  { language: "English", code: "en" },
  { language: "English (UK)", code: "en_GB" },
  { language: "English (US)", code: "en_US" },
  { language: "Estonian", code: "et" },
  { language: "Filipino", code: "fil" },
  { language: "Finnish", code: "fi" },
  { language: "French", code: "fr" },
  { language: "Georgian", code: "ka" },
  { language: "German", code: "de" },
  { language: "Greek", code: "el" },
  { language: "Gujarati", code: "gu" },
  { language: "Hausa", code: "ha" },
  { language: "Hebrew", code: "he" },
  { language: "Hindi", code: "hi" },
  { language: "Hungarian", code: "hu" },
  { language: "Indonesian", code: "id" },
  { language: "Irish", code: "ga" },
  { language: "Italian", code: "it" },
  { language: "Japanese", code: "ja" },
  { language: "Kannada", code: "kn" },
  { language: "Kazakh", code: "kk" },
  { language: "Kinyarwanda", code: "rw_RW" },
  { language: "Korean", code: "ko" },
  { language: "Kyrgyz (Kyrgyzstan)", code: "ky_KG" },
  { language: "Lao", code: "lo" },
  { language: "Latvian", code: "lv" },
  { language: "Lithuanian", code: "lt" },
  { language: "Macedonian", code: "mk" },
  { language: "Malay", code: "ms" },
  { language: "Malayalam", code: "ml" },
  { language: "Marathi", code: "mr" },
  { language: "Norwegian", code: "nb" },
  { language: "Persian", code: "fa" },
  { language: "Polish", code: "pl" },
  { language: "Portuguese (BR)", code: "pt_BR" },
  { language: "Portuguese (POR)", code: "pt_PT" },
  { language: "Punjabi", code: "pa" },
  { language: "Romanian", code: "ro" },
  { language: "Russian", code: "ru" },
  { language: "Serbian", code: "sr" },
  { language: "Slovak", code: "sk" },
  { language: "Slovenian", code: "sl" },
  { language: "Spanish", code: "es" },
  { language: "Spanish (ARG)", code: "es_AR" },
  { language: "Spanish (SPA)", code: "es_ES" },
  { language: "Spanish (MEX)", code: "es_MX" },
  { language: "Swahili", code: "sw" },
  { language: "Swedish", code: "sv" },
  { language: "Tamil", code: "ta" },
  { language: "Telugu", code: "te" },
  { language: "Thai", code: "th" },
  { language: "Turkish", code: "tr" },
  { language: "Ukrainian", code: "uk" },
  { language: "Urdu", code: "ur" },
  { language: "Uzbek", code: "uz" },
  { language: "Vietnamese", code: "vi" },
  { language: "Zulu", code: "zu" },
];
const comboBoxData = [
  { title: "Categories ", options: categories },
  { title: "Languages", options: languages },
];

export default function CreateTemplate() {
  const mode = "create";
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

  const handleCategoryandLanguages = (e, data) => {
    console?.log(data?.title);

    if (data?.title === "Languages") {
      setTemplateData({
        ...templateData,
        templateLanguage: e?.target?.value,
      });
    } else {
      setTemplateData({
        ...templateData,
        templateCategory: e?.target?.value,
      });
    }
  };

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
                onChange={(e) => {
                  setTemplateData({
                    ...templateData,

                    templateName: e?.target?.value,
                  });
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
                  onChange={(e) => handleCategoryandLanguages(e, data)}
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
                  {data?.title === "Languages"
                    ? data?.options?.map((item) => (
                        <MenuItem key={item?.language} value={item?.code}>
                          {item?.language}
                        </MenuItem>
                      ))
                    : data.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                  {/* {data.options.map((option) => (
          
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))} */}
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
              mode={mode}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
