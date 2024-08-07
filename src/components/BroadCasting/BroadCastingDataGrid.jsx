import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, CircularProgress } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Box } from "@mui/material";

const bradcastData = [
  {
    id: 1,
    name: "orderCreated",
    recipient: 100,
    createdOn: "21/12/24",
    sent: 98,
    delivered: 95,
    read: 80,
    failed: 3,
  },
  {
    id: 2,
    name: "paymentFailed",
    recipient: 50,
    createdOn: "21/12/23",
    sent: 48,
    delivered: 45,
    read: 30,
    failed: 3,
  },
  {
    id: 3,
    name: "shipmentDelayed",
    recipient: 70,
    createdOn: "21/12/22",
    sent: 68,
    delivered: 65,
    read: 50,
    failed: 3,
  },
  {
    id: 4,
    name: "offerSent",
    recipient: 120,
    createdOn: "21/12/21",
    sent: 118,
    delivered: 115,
    read: 90,
    failed: 3,
  },
];

const formatProgress = (value, total) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return `${value}/${total} (${percentage}%)`;
};

const RenderProgress = (value, total) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CircularProgressbar
          value={percentage}
          strokeWidth={12}
          styles={buildStyles({
            textColor: "red",
            pathColor: "#7F2DF1",
            trailColor: "#FFB156",
            pathTransitionDuration: 0.5,
            trailTransitionDuration: 0.5,
          })}
        />
      </Box>
      <Box sx={{ ml: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "left",
            fontWeight: 500,
            color: "#4D4D4D",
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "left",
            fontWeight: 500,
            color: "#4D4D4D",
          }}
        >
          {`${parseInt(percentage)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const columns = [
  {
    field: "name",
    headerName: "Event Name",
    flex: 2,
    renderCell: (params) => (
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "left",
          fontWeight: 500,
          color: "#4D4D4D",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "recipient",
    headerName: "Recipients",
    flex: 2,
    renderCell: (params) => (
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "left",
          fontWeight: 500,
          color: "#4D4D4D",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "createdOn",
    headerName: "Created On",
    flex: 2,
    renderCell: (params) => (
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "left",
          fontWeight: 500,
          color: "#4D4D4D",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "sent",
    headerName: "Sent",
    flex: 2,
    renderCell: (params) => RenderProgress(params.value, params.row.recipient),
  },
  {
    field: "delivered",
    headerName: "Delivered",
    flex: 2,
    renderCell: (params) => RenderProgress(params.value, params.row.recipient),
  },
  {
    field: "read",
    headerName: "Read",
    flex: 2,
    renderCell: (params) => RenderProgress(params.value, params.row.recipient),
  },
  {
    field: "failed",
    headerName: "Failed",
    flex: 2,
    renderCell: (params) => RenderProgress(params.value, params.row.recipient),
  },
];

export default function BroadcastingDataGrid() {
  return (
    <DataGrid
      rows={bradcastData}
      columns={columns}
      pageSize={10}
      rowHeight={70}
      sx={{
        height: "550px",
        border: "none",
      }}
    />
  );
}
