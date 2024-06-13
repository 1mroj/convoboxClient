import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../auth/axiosConfig.js";
import { FB_APP_ID, FB_CONFIG_ID, SERVER_BASE_URL } from "../../contants.js";
import { Box, Button, Typography, Grid } from "@mui/material";

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
      if (response.authResponse.code) {
        setCode(response.authResponse.code);
      }
      if (response.authResponse.accessToken) {
        setAccessToken(response.authResponse.accessToken);
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

const FacebookLoginComponent = (props) => {
  const [instanceId, setInstanceId] = useState(props.instanceId);
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [signupData, setSignupData] = useState([]);

  const handleSignupComplete = async () => {
    const response = await axiosInstance.post(
      `/common/whatsapp/requestAccessToken`,
      { instanceId: instanceId, code: code, ...signupData }
    );
  };
  const handleDebug = async () => {
    const response = await axiosInstance.post(`/common/whatsapp/debugToken`, {
      instanceId: instanceId,
      accessToken: accessToken,
      ...signupData,
    });
  };

  useEffect(() => {
    const listener = (event) => {
      sessionInfoListener(event, setSignupData);
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, [code, instanceId]);

  useEffect(() => {
    if (code) {
      handleSignupComplete();
    }
  }, [code]);

  useEffect(() => {
    if (accessToken) {
      handleDebug();
    }
  }, [accessToken]);
  return (
    <Button
      onClick={() => {
        launchWhatsAppSignup(setCode, setAccessToken);
      }}
      variant="contained"
      sx={{
        fontFamily: "DM Sans Bold",
        minHeight: "40px",
        minWidth: "180px",
        borderRadius: "12px",
        color: "#FFFFFF",
        backgroundColor: "#7F2DF1",
        textTransform: "none",
        fontSize: "16px",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "#1877F2", // Change the background color on hover
          color: "#FFFFFF", // Change the text color on hover
        },
      }}
    >
      Launch Whatsapp Signup
    </Button>
  );
};

export default FacebookLoginComponent;
