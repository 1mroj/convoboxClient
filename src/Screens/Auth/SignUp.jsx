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
import { SignUpForm } from "../../components/Auth/SignupForm";

export default function SignUp() {
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
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
}
