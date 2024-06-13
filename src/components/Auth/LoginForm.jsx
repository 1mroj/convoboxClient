import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants";
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
import Loading from "../Loading/Loading";

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

const smallLabel = {
  variant: "body2",
  sx: {
    fontSize: "12px", // Set the font size of the label to 12px
    fontWeight: 600, // Set the font weight of the label to 600 (bold)
  },
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newErrors = {};

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password cannot be empty";
    }

    // If any error, set errors and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no error, proceed with login
    console.log("Email:", email);
    console.log("Password:", password);

    await signUp(email, password);
  };

  const signUp = async (email, password) => {
    setLoading(true);
    try {
      // const data = await getIpDetails();
      // console.log(data);
      const response = await axios.post(`${SERVER_URL}/users/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/dashboard");
      } else if (response.status === 201) {
        setMsg("Invalid Credentails");
        setOpenSnackBar(true);
        setSeverity("error");
      }
    } catch (error) {
      setMsg("Internal Server Error");
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
            Log in
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "18px", mb: 3 }}>
            Not registered yet?{" "}
            <MuiLink
              href="signup"
              sx={{
                color: "#7F2DF1",
                textDecorationColor: "#7F2DF1",
                "&:hover": {
                  color: "#7F2DF1",
                  textDecorationColor: "#6b22b8",
                },
              }}
            >
              Create an Account{" "}
            </MuiLink>
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
            size="small"
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
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            size="small"
            id="password"
            label={
              <Typography {...smallLabel} sx={{ color: "#A3AED0" }}>
                Password
              </Typography>
            }
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            InputProps={{
              ...textInputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <MuiLink
              href="forgotpassword"
              sx={{
                fontSize: "14px",
                color: "#707EAE",
                textDecoration: "none",
                m: 1,
                "&:hover": {
                  color: "#7F2DF1",
                  textDecorationColor: "#6b22b8",
                },
              }}
            >
              Forgot Password?
            </MuiLink>
          </Box>
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
          Login
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
