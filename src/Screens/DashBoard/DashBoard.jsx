import { Box } from "@mui/material";
import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import HomePage from "./HomePage";

export default function DashBoard() {
  const [showDashboard, setShowDashboard] = useState(true);

  return <>{showDashboard ? <HomePage /> : <WelcomeScreen />}</>;
}
