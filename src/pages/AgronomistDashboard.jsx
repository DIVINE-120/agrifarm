import React from "react";
import { Box, Typography } from "@mui/material";

export default function AgronomistDashboard() {
  return (
    <Box sx={{ p: 3, mt: 2 }}>
      <Typography variant="h4" sx={{ mb: 2, color: "#2E7D32" }}>
        Agronomist Dashboard
      </Typography>
      <Typography>
        Welcome! This is where you will manage your fields, view grower activities, and provide recommendations.
      </Typography>
    </Box>
  );
}
