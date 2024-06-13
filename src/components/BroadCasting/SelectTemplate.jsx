import React, { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  CardHeader,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import metaTechProvider from "../../Assets/businessApi.png";

export default function SelectTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: "OrderCreated",
      status: "approved",
      type: "utility",
      headerType: "image",
      header: metaTechProvider,
      body: "Welcome to {{2}}One stop Solutions for all your Business needs",
      language: "en",
      createdDate: "23/11/2023",
    },
    {
      id: 2,
      name: "OrderCreated",
      status: "approved",
      type: "utility",
      headerType: "text",
      header: "Welcome To Our APP",
      body: "Welcome to {{2}}One stop Solutions for all your Business needs",
      language: "en",
      createdDate: "23/11/2023",
    },

    // Add more templates as needed
  ];

  const handleSelectTemplate = (templateId) => {
    if (selectedTemplate === templateId) {
      setSelectedTemplate(null);
    } else {
      setSelectedTemplate(templateId);
    }
  };

  return (
    <Box
      sx={{
        overflowY: "auto",
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
        maxHeight: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mt: 1,
          position: "sticky",
          height: "50px",
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
          }}
        >
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#53545C" }}
          >
            Select template
          </Typography>
        </Box>

        <TextField
          size="small"
          placeholder="Search template"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{ width: "30%" }}
        />
      </Box>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {templates.map((template) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            sx={{ mt: 1 }}
            key={template.id}
          >
            <Card
              sx={{
                width: "95%",
                backgroundColor: "#EEF0F7",
                borderRadius: "12px",
                boxShadow: "none",
                border:
                  selectedTemplate === template.id
                    ? "2px solid #7F2DF1"
                    : "none",
              }}
            >
              <CardHeader
                sx={{
                  backgroundColor: "#E0E2E7",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                title={template.name}
                titleTypographyProps={{
                  sx: {
                    color: "#53545C",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "8px",
                    ml: -3,
                  },
                }}
                subheader={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        p: 0.5,
                        backgroundColor: "#C7FBD3",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#425166",
                          fontSize: "12px",
                          fontWeight: 700,
                          ml: 1,
                          mr: 1,
                        }}
                      >
                        {template.status.charAt(0).toUpperCase() +
                          template.status.slice(1)}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#425166",
                        fontSize: "12px",
                        fontWeight: 700,
                        ml: 1,
                        mr: 1,
                      }}
                    >
                      {template.type.charAt(0).toUpperCase() +
                        template.type.slice(1)}
                    </Typography>
                  </Box>
                }
              />
              <CardContent
                sx={{
                  height: "200px",
                  overflowY: "auto",
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
                <Card
                  sx={{
                    backgroundColor: "#FFF",
                    borderRadius: "12px",
                    boxShadow: "none",
                  }}
                >
                  {template.headerType === "text" ? (
                    <CardHeader
                      title={template.header}
                      titleTypographyProps={{
                        sx: {
                          color: "#53545C",
                          fontWeight: 600,
                          fontSize: "14px",
                          textAlign: "left",
                        },
                      }}
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      image={template.header}
                      alt="Paella dish"
                    />
                  )}
                  <CardContent>
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#53545C",
                        fontSize: "14px",
                      }}
                    >
                      {template.body}
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  backgroundColor: "#E0E2E7",
                }}
              >
                <Box sx={{ ml: 2 }}>
                  <Typography
                    sx={{
                      color: "#53545C",
                      fontSize: "12px",
                      fontWeight: 700,
                      textAlign: "left",
                    }}
                  >
                    {template.language}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#53545C",
                      fontSize: "12px",
                      fontWeight: 700,
                      textAlign: "left",
                    }}
                  >
                    {template.createdDate}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    pl: 5,
                    pr: 5,
                    ml: 2,
                    color:
                      selectedTemplate === template.id ? "#FFF" : "#7F2DF1",
                    border: "1px solid #7F2DF1",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontSize: "12px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    backgroundColor:
                      selectedTemplate === template.id
                        ? "#7F2DF1"
                        : "transparent",
                    "&:hover": {
                      backgroundColor:
                        selectedTemplate === template.id
                          ? "#7F2DF1"
                          : "rgba(127, 45, 241, 0.08)",
                      color:
                        selectedTemplate === template.id ? "#FFF" : "#7F2DF1",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  {selectedTemplate === template.id ? "Remove" : "Select"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
