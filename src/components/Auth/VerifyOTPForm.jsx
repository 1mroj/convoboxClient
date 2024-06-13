import React, { useState, useRef, createRef, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants.js";
import {
  Typography,
  Box,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import ShowMessage from "../Utils/snackbar.jsx";
const smallLabel = {
  variant: "body2",
  sx: {
    fontSize: "12px", // Set the font size of the label to 12px
    fontWeight: 600, // Set the font weight of the label to 600 (bold)
    color: "#425166",
  },
};

const textInputProps = {
  style: {
    borderRadius: "10px",
    border: "1px solid #A3AED0",
    border: "none",
    "&:not(.Mui-disabled):before": {
      borderBottom: "none", // Remove the underline when not focused
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none", // Remove the underline when hovered
    },
    "&.Mui-focused:before": {
      borderBottom: "none",
    },
  },
};

export function VerifyOTPForm(props) {
  const { email } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [securityKey, setSecurityKey] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(60);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const inputRefs = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]);

  useEffect(() => {
    let intervalId;

    if (resendTimer > 0 && resendDisabled) {
      intervalId = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0 && resendDisabled) {
      setResendDisabled(false);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [resendTimer, resendDisabled]);

  const handleChange = (index, value) => {
    if (value.match(/^\d*$/) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 0) {
        // If the value is empty, check if we need to focus on the previous input
        if (index > 0) {
          inputRefs.current[index - 1].current.focus();
        }
      } else if (index < 3) {
        // If the value is not empty and we're not on the last input, focus on the next input
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${SERVER_URL}/users/resendotp`, {
        email,
      });

      if (response && response?.status === 200) {
        setResendDisabled(true);
        setResendTimer(60);
        setMsg("OTP resent ");
        setOpenSnackBar(true);
        setSeverity("success");
      } else {
        setMsg("Failed to send OTP ");
        setOpenSnackBar(true);
        setSeverity("error");
      }
    } catch (error) {
      setMsg("Failed to send OTP ");
      setOpenSnackBar(true);
      setSeverity("error");
    } finally {
      setLoading(false);
    }

    // Call your function to resend OTP here
    console.log("Resend OTP clicked");
  };

  const submitOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${SERVER_URL}/users/verifyotp`, {
        otp: otp.join(""),
        email,
      });

      if (response.status === 200) {
        setMsg("OTP Verified ");
        setOpenSnackBar(true);
        setSeverity("success");
        // response &&
        //   response?.data &&
        //   window.open(
        //     `/app/auth/changepassword?token=${response?.data?.token}`,
        //     "_blank"
        //   );
        response &&
          response?.data &&
          navigate(`/auth/changepassword?token=${response?.data?.token}`);
        // navigate(`/auth/login`);
      } else {
        setMsg("Failed to Verify OTP ");
        setOpenSnackBar(true);
        setSeverity("error");
      }
    } catch (error) {
      setMsg("Failed to Verify OTP ");
      setOpenSnackBar(true);
      setSeverity("error");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box minWidth={400} maxWidth={600}>
        <Loading loading={loading} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "36px",
            }}
          >
            Enter OTP
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={inputRefs.current[index]}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              variant="outlined"
              margin="normal"
              size="medium"
              sx={{
                width: "70px",
                margin: "0 5px",
                height: "70px",
              }}
              inputProps={{
                maxLength: 1,
                style: {
                  fontSize: "24px",
                  textAlign: "center", // Align text in the center
                },
                ...textInputProps,
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="body2" sx={smallLabel}>
            {`Didn't receive the code? `}
          </Typography>
          {resendDisabled ? (
            <Typography variant="body2" sx={smallLabel}>
              Resend in {resendTimer} seconds
            </Typography>
          ) : (
            <MuiLink
              onClick={handleResendOTP}
              sx={{
                ml: 1,
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                color: "#7F2DF1",
              }}
            >
              Resend OTP
            </MuiLink>
          )}
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#7F2DF1",
            borderRadius: "10px",
            mt: 2,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#6b22b8",
              boxShadow: "none",
            },
          }}
          onClick={submitOtp}
        >
          Verify OTP
        </Button>
        <ShowMessage
          openSnackBar={openSnackBar}
          severity={severity}
          message={msg}
          setOpenSnackBar={setOpenSnackBar}
        />
      </Box>
    </>
  );
}
