import {
  Button,
  Dialog,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Box,
  InputLabel,
  styled,
} from "@mui/material";

const labelStyles = {
  fontStyle: "DM Sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "#4D4D4D",
};

const headingStyle = {
  fontStyle: "DM Sans",
  fontWeight: 800,
  fontSize: "20px",
  color: "#4D4D4D",
};

const profileDetails = [
  "Max size of 5MB allowed",
  "Image size of 640*640 is recommended",
  "Images with a height or width of less than 192px may cause Issues ",
];
const options = ["Option 1", "Option 2", "Option 3"];
export function ProfileDialogBox() {
  return (
    <>
      <Dialog
        open={true}
        maxWidth={false}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            width: "50vw",
          },
        }}
      >
        <Grid
          container
          direction="row"
          spacing={1}
          sx={{
            // backgroundColor: "red",
            borderRadius: "20px",
            border: "none",
            display: "flex",
            flexDirection: "column",
            p: 5,
            borderRadius: "20px",
            backgroundColor: "#FFF",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            // sx={{ backgroundColor: "red" }}
          >
            <Typography sx={{ ...headingStyle, mb: 1 }}>
              Profile Picture
            </Typography>
            {profileDetails.map((detail) => (
              <Typography sx={labelStyles}>{detail}</Typography>
            ))}

            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                mt: 2,
                pl: 2,
                pr: 2,
                textTransform: "none",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "10px",
                backgroundColor: "#7F2DF1",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#7F2DF1", // Grayish background color
                  color: "#FFF",
                  boxShadow: "none",
                },
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid container direction="row" spacing={1} sx={{ ml: -0.5, mt: 1 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ backgroundColor: "red" }}
            >
              <Typography sx={{ ...headingStyle, mb: 0.5 }}>
                Description
              </Typography>
              <Typography sx={{ ...labelStyles }}>
                Maximum of 256 characters
              </Typography>
              <TextField
                multiline
                rows={2}
                InputProps={{ style: { borderRadius: "12px" } }}
                placeholder="Description of your business"
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                }}
                sx={{ width: "90%", mt: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography sx={{ ...headingStyle, mb: 0.5 }}>Address</Typography>
              <Typography sx={{ ...labelStyles }}>
                Maximum of 256 characters
              </Typography>
              <TextField
                multiline
                rows={2}
                placeholder="Address of the business"
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                }}
                InputProps={{ style: { borderRadius: "12px" } }}
                sx={{ width: "90%", mt: 1 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1} sx={{ ml: -0.5, mt: 2 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ backgroundColor: "red" }}
            >
              <Typography sx={{ ...headingStyle, mb: 0.5 }}>Email</Typography>
              <Typography sx={{ ...labelStyles }}>
                Email address to contact the business
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter email address"
                InputProps={{ style: { borderRadius: "12px" } }}
                sx={{ mt: 1, width: "90%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ backgroundColor: "red" }}
            >
              <Typography sx={{ ...headingStyle, mb: 0.5 }}>
                Industry
              </Typography>
              <Typography sx={{ ...labelStyles }}>
                Industry of the business
              </Typography>
              <FormControl
                sx={{ width: "90%", mt: 1, backgroundColor: "#FFF" }}
              >
                <Select
                  labelId="select-label"
                  id="select"
                  value={""}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#FFF",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      },
                    },
                  }}
                  displayEmpty
                  renderValue={(selected) => {
                    if (selected === "") {
                      return (
                        <Typography
                          sx={{
                            color: "#A3AED0",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Select an Industry
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                  onChange={() => {}}
                  variant="outlined"
                  sx={{ borderRadius: "12px", backgroundColor: "#FFF" }}
                >
                  {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1} sx={{ ml: -0.5, mt: 2 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              // sx={{ backgroundColor: "red" }}
            >
              <Typography sx={{ ...headingStyle, mb: 0.5 }}>Website</Typography>
              <Typography sx={{ ...labelStyles }}>
                Enter your website
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Eg: https://www.convobox.in/"
                InputProps={{ style: { borderRadius: "12px" } }}
                sx={{ mt: 1, width: "90%" }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1} sx={{ ml: -0.5, mt: 2 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "#7F2DF1",
                    border: "1px solid #7F2DF1",
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: 500,
                    pl: 2,
                    pr: 2,
                    "&:hover": {
                      border: "1px solid #7F2DF1",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#FFF",
                    pl: 2,
                    pr: 2,
                    ml: 2,
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 700,
                    borderRadius: "10px",
                    backgroundColor: "#7F2DF1",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#7F2DF1", // Grayish background color
                      color: "#FFF",
                      boxShadow: "none",
                    },
                  }}
                >
                  Upload
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
