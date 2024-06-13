import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { Opacity } from "@mui/icons-material";

export default function TemplateGrid() {
  const headerStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#000000",
    Opacity: "70%",
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={headerStyle}>{params.value}</Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={headerStyle}>{params.value}</Typography>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{
            ...headerStyle,
            color:
              params.value === "Approved"
                ? "#2CC84A"
                : params.value === "Pending"
                ? "blue"
                : "#FC0202",
            fontWeight: 700,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "createdOn",
      headerName: "Created On",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={headerStyle}>{params.value}</Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              marginRight: 1,
              color: "#7F2DF1",
              border: "1px solid #7F2DF1",
              borderRadius: "8px",
              textTransform: "none",
              pl: 4,
              pr: 4,
              "&:hover": {
                backgroundColor: "#7F2DF1", // Grayish background color
                color: "#FFF",
                boxShadow: "none",
              },
            }}
          >
            View
          </Button>
          <IconButton sx={{ color: "#FC0202" }}>
            <DeleteOutlineOutlined />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Replace the rows with your actual data
  const rows = [
    {
      id: 1,
      name: "Template 1",
      category: "Category 1",
      status: "Approved",
      createdOn: "2023-05-31",
    },
    {
      id: 2,
      name: "Template 2",
      category: "Category 2",
      status: "Pending",
      createdOn: "2023-05-30",
    },
    {
      id: 3,
      name: "Template 3",
      category: "Category 3",
      status: "Rejected",
      createdOn: "2023-05-29",
    },
    // Add more rows as needed
  ];

  return (
    <Box
      sx={{
        p: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: "12px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowHeight={60}
        sx={{
          height: "100%",
          border: "none",
        }}
      />
    </Box>
  );
}
