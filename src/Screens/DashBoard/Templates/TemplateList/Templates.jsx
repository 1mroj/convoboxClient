import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const handleDelete = (id) => {
  // handle delete logic here
};

export default function TemplateList() {
  const [selectedTemplateType, setSelectedTemplateType] = useState("All");
  const templateCategory = ["All", "Approved", "Pending", "Rejected", "Draft"];

  const handleChange = (event, newValue) => {
    setSelectedTemplateType(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="start"
                // sx={{ color: "#848396", fontWeight: 500 }}
              >
                <SearchIcon sx={{ height: "35px", width: "35px" }} />
              </InputAdornment>
            ),
          }}
          placeholder="Search Templates ( name , status )"
          sx={{ minWidth: "400px", borderRadius: "12px" }}
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
        >
          Create New Template
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          width: "80%",
        }}
      >
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

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
