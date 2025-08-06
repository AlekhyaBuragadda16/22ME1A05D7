import React from "react";
import { Typography, Box } from "@mui/material";
import { useLogger } from "../hooks/useLogger";

const Logs = () => {
  useLogger("Viewed Logs Page");
  const logs = JSON.parse(localStorage.getItem("logs")) || [];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Application Logs</Typography>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </Box>
  );
};

export default Logs;