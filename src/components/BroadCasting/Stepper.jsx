import { Box } from "@mui/material";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";

export default function BroadcastStepper(props) {
  const { steps, activeStep, completed } = props;

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22, // Adjust this value to align the connector properly
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#7F2DF1",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#7F2DF1",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",

    ...(ownerState.active && {
      backgroundColor: "#7F2DF1", // Active color
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      fontWeight: 700,
      width: 50,
      height: 50,
    }),
    ...(ownerState.completed && {
      backgroundColor: "#7F2DF1", // Completed color
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, icon } = props;

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }}>
        {icon}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        // height: "100px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: "75%",
          //   height: "80px",
          p: 2,
          pl: 4,
          pr: 4,
          backgroundColor: "#FFF",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center", // Align items in the center
        }}
      >
        <Stepper
          //   alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          sx={{ width: "100%" }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}
