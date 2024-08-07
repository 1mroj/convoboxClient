import React, { useState } from "react";
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
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants";
import ShowMessage from "../Utils/snackbar";
import axios from "axios";
import Loading from "../Loading/Loading";

const textInputProps = {
  style: {
    borderRadius: "10px",
    border: "1px solid #A3AED0",
    border: "none",
    "&:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "&.Mui-focused:before": {
      borderBottom: "none",
    },
  },
};

const smallLabel = {
  variant: "body2",
  sx: {
    fontSize: "12px",
    fontWeight: 600,
  },
};

const textFields = [
  { label: "Name", type: "text", key: "name" },
  { label: "Email", type: "email", key: "email" },
  { label: "Phone Number", type: "text", key: "phoneNumber" },
  { label: "Business Name", type: "text", key: "businessName" },
  { label: "Business Website", type: "text", key: "businessWebsite" },
  { label: "Password", type: "password", key: "password" },
];

export function SignUpForm() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    businessWebsite: "",
    password: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" })); // Clear error for this field
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    let isError = false;
    const newErrors = {};

    // Check for empty fields
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        // newErrors[key] = "This field is required";
        // isError = true;
        setMsg("Fill All the feilds to continue");
        setOpenSnackBar(true);
        setSeverity("error");
      }
    });

    // Validate name (no special characters or numbers)
    if (!/^[a-zA-Z\s]*$/.test(formValues.name)) {
      newErrors.name = "Name should only contain alphabets and spaces";
      isError = true;
    }

    // Validate phone number (10 digits and no non-numeric characters)
    if (!/^\d{10}$/.test(formValues.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should be 10 digits long";
      isError = true;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email address";
      isError = true;
    }

    // Validate website (basic validation)
    if (!/^(http|https):\/\/[^ "]+$/.test(formValues.businessWebsite)) {
      newErrors.businessWebsite = "Invalid website URL";
      isError = true;
    }

    // Check if terms are checked
    if (!formValues.agreeToTerms) {
      newErrors.agreeToTerms =
        "Please agree to the Terms of Use and Privacy Policy";
      isError = true;
    }

    if (!formValues.agreeToTerms) {
      newErrors.agreeToTerms =
        "Please agree to the Terms of Use and Privacy Policy";
      setMsg("Please agree to the Terms of Use and Privacy Policy");
      setOpenSnackBar(true);
      setSeverity("error");
    }

    // If any error, set error messages and severity to "error"
    if (isError) {
      setErrors(newErrors);
    } else {
      await signUp(formValues);
    }
    // If no error, proceed with signup
    console.log(JSON.stringify(formValues));
  };

  const signUp = async (formValues) => {
    setLoading(true);
    try {
      const response = await axios.post(`${SERVER_URL}/users/signup`, {
        businessName: formValues.businessName,
        businessWebsite: formValues.businessWebsite,
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phoneNumber,
        password: formValues.password,
      });
      if (response.status === 201) {
        setMsg("User Already Exists, proceed to Signin");
        setOpenSnackBar(true);
        setSeverity("error");
      } else if (response.status === 200) {
        console.log(response?.data);
        signIn({
          userState: {
            name: response?.data?.user?.name,
            email: response?.data?.user?.email,
            phone: response?.data?.user?.phone,
            userid: response?.data?.user?.id,
          },
        });

        navigate("/dashboard");
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
      <Box maxWidth={400}>
        <Loading loading={loading} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "36px" }}>
            Create a Free Account
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "18px", mb: 3 }}>
            Already have an account?{" "}
            <MuiLink
              href="login"
              sx={{
                color: "#7F2DF1",
                textDecorationColor: "#7F2DF1",
                "&:hover": { color: "#7F2DF1", textDecorationColor: "#6b22b8" },
              }}
            >
              Sign in
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
          {textFields.map((field, index) => (
            <React.Fragment key={index}>
              <TextField
                label={
                  <Typography {...smallLabel} sx={{ color: "#A3AED0" }}>
                    {field.label}
                  </Typography>
                }
                fullWidth
                margin="normal"
                type={
                  field.type === "password" && showPassword
                    ? "text"
                    : field.type
                }
                InputProps={{
                  ...textInputProps,
                  endAdornment: field.type === "password" && (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                size="small"
                onChange={(e) => handleChange(field.key, e.target.value)}
                error={Boolean(errors[field.key])}
                helperText={errors[field.key]}
              />
            </React.Fragment>
          ))}
          <FormControlLabel
            sx={{ alignSelf: "flex-start", mt: 1, color: "#A3AED0" }}
            control={
              <Checkbox
                checked={formValues.agreeToTerms}
                onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                sx={{
                  borderRadius: "10px",
                  color: "#7F2DF1",
                  "&.Mui-checked": { color: "#7F2DF1" },
                }}
              />
            }
            label={
              <Typography {...smallLabel}>
                I agree to the{" "}
                <MuiLink
                  href="/terms"
                  sx={{
                    color: "#7F2DF1",
                    textDecorationColor: "#7F2DF1",
                    "&:hover": {
                      color: "#7F2DF1",
                      textDecorationColor: "#6b22b8",
                    },
                  }}
                >
                  Terms of Use
                </MuiLink>{" "}
                and{" "}
                <MuiLink
                  href="/privacy"
                  sx={{
                    color: "#7F2DF1",
                    textDecorationColor: "#7F2DF1",
                    "&:hover": {
                      color: "#7F2DF1",
                      textDecorationColor: "#6b22b8",
                    },
                  }}
                >
                  Privacy Policy
                </MuiLink>
              </Typography>
            }
            error={Boolean(errors.agreeToTerms)}
            helperText={errors.agreeToTerms}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#7F2DF1",
            borderRadius: "10px",
            mt: 2,
            boxShadow: "none",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#6b22b8",
              boxShadow: "none",
            },
          }}
          onClick={handleSubmit}
        >
          Sign Up
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
