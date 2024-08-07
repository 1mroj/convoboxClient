import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layouts from "./layouts";
import { theme } from "./Theme/Theme";
import { ThemeProvider } from "@mui/material";
import SignUp from "./Screens/Auth/SignUp";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import VerifyOTP from "./Screens/Auth/VerifyOTP";
import AuthProvider from "react-auth-kit";
import store from "./auth/User.store";
import TemplateProvider from "./Context/TemplateContext";

function App() {
  return (
    <div className="App">
      <AuthProvider store={store}>
        <TemplateProvider>
          <Router basename="/app">
            <Routes>
              {/* <Route path="/auth/forgot-password" element={<ForgotPassword />} /> */}
              {/* <Route path="/auth" element={<Login />} /> */}
              {/* <Route path="/auth/signup" element={<SignUp />} /> */}
              {/* <Route path="/auth/verify-otp" element={<VerifyOTP />}></Route> */}

              <Route
                path="/dashboard/*"
                element={
                  <ThemeProvider theme={theme}>
                    <Layouts />
                  </ThemeProvider>
                }
              />
            </Routes>
            <Routes>
              <Route path="/auth/*" element={<Login />} />
            </Routes>
          </Router>
        </TemplateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
