import { Box, TextField, Button, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import TemplateGrid from "../../../components/Templates/TemplateList/TemplateGrid";

const textInputProps = {
  border: "1px solid #848396",
  border: "none",
  borderRadius: "12px",
  "&:not(.Mui-disabled):before": {
    borderBottom: "none", // Remove the underline when not focused
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: "none", // Remove the underline when hovered
  },
  "&.Mui-focused:before": {
    borderBottom: "none",
  },
};

export default function Templates() {
  const navigate = useNavigate();
  const [selectedTemplateType, setSelectedTemplateType] = useState("All");
  const templateCategory = ["All", "Approved", "Pending", "Rejected", "Draft"];
  const handleChange = (event, newValue) => {
    setSelectedTemplateType(newValue);
  };
  return (
    <Box sx={{ width: "100%", height: "100%", mt: -2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton sx={{ color: "#848396", fontWeight: 500 }}>
                  <SearchIcon sx={{ height: "30px", width: "30px" }} />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              ...textInputProps,
              fontSize: "14px",
              borderRadius: "8px",
            },
          }}
          placeholder="Search Templates ( name , status )"
          sx={{ minWidth: "400px" }}
        />

        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={{
            pl: 2,
            pr: 2,
            ml: 2,
            width: "280px",
            height: "40px",
            color: "#FFF",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "8px",
            backgroundColor: "#7F2DF1",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#7F2DF1",
              color: "#FFF",
              boxShadow: "none",
            },
          }}
          onClick={() => navigate(`/dashboard/template/create`)}
        >
          Create New Template
        </Button>
      </Box>
      <Box sx={{ mt: 3, maxWidth: "60%" }}>
        <Tabs
          value={selectedTemplateType}
          onChange={handleChange}
          sx={{
            borderBottom: "1px solid #848396",
            "& .MuiTabs-indicator": {
              backgroundColor: "#7F2DF1",
              height: "4px",
            },
            "& .MuiTab-root": {
              fontSize: "14px",
              minWidth: "100px",
              fontWeight: 500,
              textTransform: "none",
              color: "#848396",
              mr: 4,
              "&.Mui-selected": {
                color: "#7F2DF1",
                fontWeight: 700,
                fontSize: "16px",
              },
            },
          }}
        >
          {templateCategory.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mt: 2, height: "80%" }}>
        <TemplateGrid />
      </Box>
    </Box>
  );
}
