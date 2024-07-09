import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";

export default function ListSegments() {
  const headerStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#000000",
    opacity: "70%",
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
      field: "contacts",
      headerName: "Contacts",
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{
            ...headerStyle,
            fontWeight: 700,
          }}
        >
          {params.value}
        </Typography>
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
            Select
          </Button>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "New Leads",
      contacts: 500,
    },
    {
      id: 2,
      name: "Cold Leads",
      contacts: 900,
    },
    {
      id: 3,
      name: "Premium Clients",
      contacts: 100,
    },
  ];

  return (
    <Box
      sx={{
        p: 1,
        height: "400px",
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
