import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants.js";
import {
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ShowMessage from "../Utils/snackbar";
import { getIpDetails } from "../../utils/ipDetails";
import Loading from "../Loading/Loading.jsx";

const smallLabel = {
  variant: "body2",
  sx: {
    fontSize: "12px", // Set the font size of the label to 12px
    fontWeight: 600, // Set the font weight of the label to 600 (bold)
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

export function ForgotPasswordForm(props) {
  const { email, setEmail } = props;
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${SERVER_URL}/users/forgotpassword`, {
        email,
      });
      if (response.status === 200) {
        setMsg("OTP sent to your email");
        setSeverity("success");
        setOpenSnackBar(true);
        navigate(`/auth/verifyotp`);
      } 
      console.log(response);
    } catch (error) {
      setMsg("Failed to send OTP");
      setSeverity("error");
      setOpenSnackBar(true);
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
            Reset Password
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <TextField
            id="email"
            label={
              <Typography {...smallLabel} sx={{ color: "#A3AED0" }}>
                Email
              </Typography>
            }
            fullWidth
            margin="normal"
            type="email"
            InputProps={textInputProps}
            size="medium"
            error={Boolean(errors.email)}
            helperText={errors.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({});
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          ></Box>
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
          onClick={handleSubmit}
        >
          Request OTP
        </Button>
      </Box>
      <ShowMessage
        openSnackBar={openSnackBar}
        severity={severity}
        message={msg}
        setOpenSnackBar={setOpenSnackBar}
      />
    </>
  );
}
