import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2E7D32",
        color: "#fff",
        mt: 0,
        py: 4,
        px: { xs: 2, sm: 8 },
        textAlign: { xs: "center", sm: "left" }
      }}
    >
      <Grid container spacing={3}>
        
        {/* Brand Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            AgriFarm
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            Connecting farmers & buyers for a sustainable food market.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="/" underline="hover" sx={{ color: "#fff" }}>
              Home
            </Link>
            <Link href="/about" underline="hover" sx={{ color: "#fff" }}>
              About Us
            </Link>
            <Link href="/contact" underline="hover" sx={{ color: "#fff" }}>
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Contact
          </Typography>
          <Typography>Email: support@agrifarm.com</Typography>
          <Typography>Phone: +250 789 123 456</Typography>
          <Typography>Location: Kigali, Rwanda</Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          mt: 3,
          pt: 2,
          textAlign: "center"
        }}
      >
        <Typography sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} AgriFarm — All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
