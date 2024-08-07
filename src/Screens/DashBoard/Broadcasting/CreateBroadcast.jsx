import { Box, Button } from "@mui/material";
import BroadcastStepper from "../../../components/BroadCasting/Stepper";
import { useState } from "react";
import SelectAudience from "../../../components/BroadCasting/SelectAudience";
import SelectTemplate from "../../../components/BroadCasting/SelectTemplate";
import SendBroadcast from "../../../components/BroadCasting/SendBroadcast";

export default function CreateBroadcast() {
  const [steps, setSteps] = useState([
    "Select Template",
    "Select Audience",
    "Send Broadcast",
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const getComponentByLabel = (label) => {
    switch (label) {
      case "Select Template":
        return <SelectTemplate />;
      case "Select Audience":
        return <SelectAudience />;
      case "Send Broadcast":
        return <SendBroadcast />;
      default:
        return <></>;
    }
  };

  function moveToNextStep() {
    if (activeStep === 2) {
      return;
    }
    setActiveStep((currentStep) => currentStep + 1);
  }

  function moveToPrevStep() {
    if (activeStep != 0) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  }
  return (
    <Box sx={{ width: "100%", height: "100%", mt: -2 }}>
      <BroadcastStepper
        steps={steps}
        activeStep={activeStep}
        completed={completed}
      />

      <Box
        sx={{
          width: "100%",
          mt: 2,
          height: "80%",
        }}
      >
        {getComponentByLabel(steps[activeStep])}
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            pl: 5,
            pr: 5,
            color: "#7F2DF1",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "8px",
            border: "1px solid #7F2DF1",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #7F2DF1", // Grayish background color
              color: "#7F2DF1",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            moveToPrevStep();
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            pl: 5,
            pr: 5,
            ml: 2,
            color: "#FFF",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "8px",
            backgroundColor: "#7F2DF1",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#7F2DF1", // Grayish background color
              color: "#FFF",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            moveToNextStep();
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
