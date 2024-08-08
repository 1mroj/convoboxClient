import { Box, Icon, IconButton, Typography } from "@mui/material";
import adobeIcon from "../../../Assets/adobeFIleIcon.svg";
import React, { useEffect, useState } from "react";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import CallIcon from "@mui/icons-material/Call";
import ReplyIcon from "@mui/icons-material/Reply";
import ListIcon from "@mui/icons-material/List";
import { esES } from "@mui/material/locale";

export default function ChatBubble(props) {
  const { templateData } = props;
  const { components } = templateData;
  console.log("this  is the  template data ", components);
  const [templateBody, setTemplateBody] = useState(
    templateData?.templateBody || ""
  );

  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  useEffect(() => {
    setTemplateBody(
      replaceVariablesWithValues(
        templateData?.templateBody,
        templateData?.templateVariables
      )
    );
  }, [templateData?.templateVariables]);

  const replaceVariablesWithValues = (templateBody, templateVariables) => {
    let newTemplateBody = templateBody;
    templateVariables?.forEach((variable) => {
      if (variable?.value) {
        const variablePlaceholder = variable?.variable;
        let variableIndex = newTemplateBody?.indexOf(variablePlaceholder);
        while (variableIndex !== -1) {
          newTemplateBody =
            newTemplateBody?.slice(0, variableIndex) +
            variable.value +
            newTemplateBody.slice(variableIndex + variablePlaceholder.length);
          variableIndex = newTemplateBody.indexOf(
            variablePlaceholder,
            variableIndex + variable.value.length
          );
        }
      }
    });
    return newTemplateBody;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        // minHeight: "80%",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: "80%",
        position: "relative",
        p: 1,
        pt: 1,
        pb: 2,
        mb: 2,
        top: "20px",
        left: "10px",
        borderRadius: "8px",
      }}
    >
      {templateData?.components?.map((component, index) => {
        if (component?.type === "HEADER") {
          if (component?.format === "IMAGE") {
            return (
              <Box
                key={index} // Include the key prop here
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "8px" }}
                  src={
                    component?.example && component?.example?.header_handle[0]
                  }
                  alt="-"
                />
              </Box>
            );
          } else if (component?.format === "TEXT") {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textAlign: "start",
                  }}
                >
                  {/* Render some text here */}
                </Typography>
              </Box>
            );
          }
        } else if (component?.type === "BODY") {
          return (
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                {component?.text}
              </Typography>
            </Box>
          );
        } else {
          return null;
        }
      })}

      {/* {templateData?.templateHeaderType === "image" &&
        templateData?.templateHeader && (
          <Box
            sx={{
              width: "100%",

              // height: "150px",
              // border: "1px solid black",
              borderRadius: "8px",
            }}
          >
            <img
              width="100%"
              height="100%"
              style={{ borderRadius: "8px" }}
              src={
                templateData?.templateHeader &&
                URL.createObjectURL(templateData?.templateHeader)
              }
              alt="-"
            />
          </Box>
        )}
      {templateData?.templateHeaderType === "video" &&
        templateData?.templateHeader && (
          <>
            <Box
              sx={{
                width: "100%",
                // height: "150px",
                borderRadius: "8px",
                zIndex: 1,
              }}
            >
              <video
                src={
                  templateData?.templateHeader &&
                  URL.createObjectURL(templateData?.templateHeader)
                }
                width="100%"
                // height="100%"
                style={{ borderRadius: "8px" }}
                autoPlay
                muted
              >
                <track kind="captions" />
              </video>
            </Box>
          </>
        )}

      {templateData?.templateHeaderType === "file" &&
        templateData?.templateHeader && (
          <Box
            sx={{
              backgroundImage: `url(${adobeIcon})`,
              backgroundSize: "50px", // Set the size of the background image
              backgroundPosition: "center", // Position the background image in the center
              backgroundRepeat: "no-repeat", // Do not repeat the background image
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Background color with opacity
              borderRadius: "8px",
              height: "150px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{
                mb: 1,
                width: "100%",
                height: "18px",
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {templateData?.templateHeader.name}
            </Typography>
          </Box>
        )}
      {templateData?.templateHeaderType === "text" &&
        templateData?.templateHeader && (
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              {templateData?.templateHeader}
            </Typography>
          </Box>
        )}

      {templateData && templateData?.templateBody && (
        <Box sx={{ mt: 1 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textAlign: "start",
              width: "100%",
              maxWidth: "95%",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
            dangerouslySetInnerHTML={{
              __html: templateBody || "",
            }}
          ></div>
        </Box>
      )}

      {templateData && templateData?.templateFooter && (
        <Box sx={{ mt: 1 }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 500,
              color: "#A3AED0",
              textAlign: "start",
              width: "100%",
              maxWidth: "95%",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          >
            {templateData?.templateFooter}
          </div>
        </Box>
      )}

      {templateData &&
        templateData?.templateButtons &&
        templateData?.templateButtons[0] && (
          <div
            style={{
              cursor: templateData?.templateButtons[0].url
                ? "pointer"
                : "default",
            }}
          >
            <Box
              sx={{
                marginTop: 2,
                borderTop: "0.2px solid #EAEAEA",
                borderBottom: "0.2px solid #EAEAEA",
                height: "35px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {templateData?.templateButtons[0].type &&
              templateData?.templateButtons[0].type === "URL" ? (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <LaunchOutlinedIcon sx={{ height: "20px", width: "20px" }} />
                </IconButton>
              ) : templateData?.templateButtons[0].type === "PHONE_NUMBER" ? (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <CallIcon sx={{ height: "20px", width: "20px" }} />
                </IconButton>
              ) : (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <ReplyIcon sx={{ height: "20px", width: "20px", ml: -2 }} />
                </IconButton>
              )}

              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#32a4a8" }}
              >
                {templateData?.templateButtons[0].text}
              </Typography>
            </Box>
          </div>
        )}

      {templateData &&
        templateData?.templateButtons &&
        templateData?.templateButtons[1] && (
          <div
            style={{
              cursor: templateData?.templateButtons[1].url
                ? "pointer"
                : "default",
            }}
          >
            <Box
              sx={{
                borderBottom: "0.2px solid #EAEAEA",
                height: "35px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {templateData?.templateButtons[1].type &&
              templateData?.templateButtons[1].type === "URL" ? (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <LaunchOutlinedIcon sx={{ height: "20px", width: "20px" }} />
                </IconButton>
              ) : templateData?.templateButtons[1].type === "PHONE_NUMBER" ? (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <CallIcon sx={{ height: "20px", width: "20px" }} />
                </IconButton>
              ) : (
                <IconButton sx={{ color: "#32a4a8" }}>
                  <ReplyIcon sx={{ height: "20px", width: "20px" }} />
                </IconButton>
              )}
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#32a4a8" }}
              >
                {templateData?.templateButtons[1].text}
              </Typography>
            </Box>
          </div>
        )}

      {templateData &&
        templateData?.templateButtons &&
        templateData?.templateButtons?.length > 2 && (
          <div
            style={{
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                borderBottom: "0.2px solid #EAEAEA",
                height: "35px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton disableRipple sx={{ color: "#32a4a8" }}>
                <ListIcon sx={{ height: "20px", width: "20px" }} />
              </IconButton>

              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#32a4a8" }}
              >
                see all options
              </Typography>
            </Box>
          </div>
        )} */}
    </Box>
  );
}
