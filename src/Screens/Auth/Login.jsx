import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { LoginBanner } from "../../components/Auth/LoginBanner";
import frameBackground from "../../Assets/LoginBannerBackground.png";
import LoginForm from "../../components/Auth/LoginForm";
import AuthRoutes from "./AuthLayouts";
import { Route, Routes } from "react-router-dom";
import { SignUpForm } from "../../components/Auth/SignupForm";
import { VerifyOTPForm } from "../../components/Auth/VerifyOTPForm";
import { ForgotPasswordForm } from "../../components/Auth/ForgotPasswordForm";
import { useState } from "react";
import { EnterPasswordFunction } from "../../components/Auth/EnterPasswordForm";
export default function Login() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6.5}
          xl={6.5}
          sx={{
            minHeight: "100vh",
            backgroundImage: `url(${frameBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoginBanner />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5.5}
          xl={5.5}
          sx={{
            minHeight: "100vh",
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route
              path="/verifyotp"
              element={<VerifyOTPForm email={email} />}
            />
            <Route
              path="/forgotpassword"
              element={<ForgotPasswordForm email={email} setEmail={setEmail} />}
            />
            <Route
              path="/changepassword"
              element={<EnterPasswordFunction email={email} />}
            />

            <Route path="/*" element={<LoginForm />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}
