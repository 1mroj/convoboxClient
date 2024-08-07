import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../auth/axiosConfig.js";
import { FB_APP_ID, FB_CONFIG_ID, SERVER_BASE_URL } from "../../constants.js";
import { Box, Button, Typography, Grid } from "@mui/material";
import WhatsAppIcon from "../../Assets/whatsapplogo.svg";

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// Facebook SDK initialization
window.fbAsyncInit = function () {
  // JavaScript SDK configuration and setup
  window.FB.init({
    appId: FB_APP_ID, // Replace with your Facebook App ID
    cookie: true, // enable cookies
    xfbml: true, // parse social plugins on this page
    version: "v19.0", // Graph API version
  });
  window.FB.AppEvents.logPageView();
};

async function launchWhatsAppSignup(setCode, setAccessToken) {
  //window.fbq && window.fbq('trackCustom', 'WhatsAppOnboardingStart', { appId: FB_APP_ID, feature: 'whatsapp_embedded_signup' });
  window.FB.login(
    function (response) {
      console?.log(response);
      if (response?.authResponse?.code) {
        console.log(response?.authResponse?.code);
        setCode(response?.authResponse?.code);
      }
      if (response?.authResponse?.accessToken) {
        setAccessToken(response?.authResponse?.accessToken);
      }
    },
    {
      config_id: FB_CONFIG_ID, // configuration ID goes here
      response_type: "code", // must be set to 'code' for System User access token
      override_default_response_type: true, // when true, any response types passed in the "response_type" will take precedence over the default types
      extras: {
        sessionInfoVersion: 2, //  Receive Session Logging Info
      },
    }
  );
}
const sessionInfoListener = (event, setSignupData) => {
  if (event.origin !== "https://www.facebook.com") return;
  try {
    const data = JSON.parse(event.data);
    if (data.type === "WA_EMBEDDED_SIGNUP") {
      if (data.event === "FINISH") {
        const { phone_number_id, waba_id } = data.data;
        console.log(data?.data);
        setSignupData({
          phoneNumberId: phone_number_id,
          whatsappBusinessAccountId: waba_id,
        });
      } else {
        const { current_step } = data.data;
      }
    }
  } catch {
    console.log("Non JSON Response");
  }
};

const FacebookLoginComponent = ({ type }) => {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [signupData, setSignupData] = useState([]);

  const handleSignupComplete = async () => {
    const response = await axiosInstance.post(`/api/whatsapp/requesttoken`, {
      code: code,
      ...signupData,
    });
  };
  // const handleDebug = async () => {
  //   const response = await axiosInstance.post(`/common/whatsapp/debugToken`, {
  //     accessToken: accessToken,
  //     ...signupData,
  //   });
  // };

  useEffect(() => {
    const listener = (event) => {
      sessionInfoListener(event, setSignupData);
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, [code]);

  useEffect(() => {
    if (code) {
      handleSignupComplete();
    }
  }, [code]);

  return (
    <>
      {type === "onboard" ? (
        <Button
          variant="contained"
          onClick={() => {
            launchWhatsAppSignup(setCode, setAccessToken);
          }}
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
              backgroundColor: "#7F2DF1", // Grayish background color
              color: "#FFF",
              boxShadow: "none",
            },
          }}
        >
          Launch WhatsApp Onboarding{" "}
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            color: "#7F2DF1",
            pl: 4,
            pr: 4,
            mr: 2,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "10px",
            backgroundColor: "#FFF",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#f5f5f5", // Grayish background color
              color: "#5e16c4",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            launchWhatsAppSignup(setCode, setAccessToken);
          }}
          startIcon={
            <img
              height="25px"
              width="25px"
              src={WhatsAppIcon}
              alt="WhatsApp Icon"
            />
          }
        >
          Apply for WhatsApp Business API ( FREE )
        </Button>
      )}
    </>
  );
};

export default FacebookLoginComponent;