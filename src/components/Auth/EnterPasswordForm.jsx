import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants.js";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

export function EnterPasswordFunction(props) {
  const { email } = props;
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    if (password.length < 8) {
      setErrors({ password: "Password should be at least 8 characters long" });
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    await changePassword();
  };

  const changePassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${SERVER_URL}/users/resetpassword`, {
        email,
        newPassword: password,
        confirmPassword: confirmPassword,
        token,
      });

      response && response.status === 200 && navigate(`/auth/login`);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
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

  const smallLabel = {
    variant: "body2",
    sx: {
      fontSize: "12px", // Set the font size of the label to 12px
      fontWeight: 600, // Set the font weight of the label to 600 (bold)
    },
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
          <Typography sx={{ fontWeight: 700, fontSize: "36px" }}>
            Enter Password
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
            id="password"
            label={
              <Typography {...smallLabel} sx={{ color: "#A3AED0" }}>
                New Password
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
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.password)}
            helperText={errors.password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({});
            }}
          />
          <TextField
            id="confirmPassword"
            label={
              <Typography {...smallLabel} sx={{ color: "#A3AED0" }}>
                Confirm Password
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
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({});
            }}
          />
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
          Submit
        </Button>
      </Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
        message={msg}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </>
  );
}
