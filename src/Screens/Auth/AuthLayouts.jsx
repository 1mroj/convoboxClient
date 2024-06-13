import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "../../components/Auth/LoginForm";
import { SignUpForm } from "../../components/Auth/SignupForm";
import { ForgotPasswordForm } from "../../components/Auth/ForgotPasswordForm";
import { VerifyOTPForm } from "../../components/Auth/VerifyOTPForm";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/verifyotp" element={<VerifyOTPForm />} />
      <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
    </Routes>
  );
}
