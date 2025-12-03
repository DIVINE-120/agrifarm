// src/pages/About.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import heroImg from "../assets/images/farm-hero.jpg";

export default function About() {
  const values = [
    {
      title: "Innovation",
      desc: "We leverage modern technology to bring digital solutions to farming operations.",
      icon: "💡",
    },
    {
      title: "Transparency",
      desc: "Our platform ensures clear and traceable transactions between growers and buyers.",
      icon: "🔍",
    },
    {
      title: "Sustainability",
      desc: "We promote sustainable farming practices through data-driven insights.",
      icon: "🌱",
    },
    {
      title: "Collaboration",
      desc: "Connecting growers, agronomists, and buyers to enhance productivity and efficiency.",
      icon: "🤝",
    },
  ];

  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "30vh", md: "50vh" },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#fff", fontWeight: "bold", textAlign: "center", px: 2 }}
        >
          About AgriFarm
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          px: 2,
          py: 8,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#555",
            fontSize: "1.1rem",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          AgriFarm is a digital agriculture management platform designed to empower growers,
          agronomists, and buyers. Our mission is to modernize farming operations, improve
          productivity, and provide transparent marketplaces for agricultural products.
          With features like field management, crop activity logging, inventory tracking,
          marketplace listings, and analytics dashboards, AgriFarm is your partner in
          achieving smarter and more efficient farming.
        </Typography>

        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#2E7D32", fontWeight: "bold", mb: 6 }}
        >
          Our Core Values
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {values.map((item, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  maxWidth: 500,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#ffffff",
                  textAlign: "center",
                  border: "1px solid #e0e6dd",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 12px 28px rgba(0,0,0,0.12)",
                    borderColor: "#c5d2c0",
                  },
                }}
              >
                <Typography sx={{ fontSize: "2.5rem", mb: 1 }}>{item.icon}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "700", color: "#2E7D32", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
