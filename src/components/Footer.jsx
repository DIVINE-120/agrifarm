// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#2E7D32", color: "#fff", py: 4, px: 2, mt: 4 }}>
      <Typography variant="body2" align="center">
        © 2025 AgriFarm. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        Contact: info@agrifarm.com | +25 078 153 830
      </Typography>
      <Typography variant="body2" align="center">
        Follow us on{" "}
        <Link href="#" color="inherit">Facebook</Link>,{" "}
        <Link href="#" color="inherit">Twitter</Link>,{" "}
        <Link href="#" color="inherit">Instagram</Link>
      </Typography>
    </Box>
  );
}
