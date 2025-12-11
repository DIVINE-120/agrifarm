// src/pages/About.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import heroVideo from "../assets/images/video_preview_h264.mp4";

export default function About() {
  const coreValues = [
    { title: "Innovation", desc: "Leveraging modern technology to enhance farming operations.", icon: "💡" },
    { title: "Transparency", desc: "Clear and traceable transactions between growers and buyers.", icon: "🔍" },
    { title: "Sustainability", desc: "Promoting sustainable farming practices with data insights.", icon: "🌱" },
    { title: "Collaboration", desc: "Connecting growers, agronomists, and buyers efficiently.", icon: "🤝" },
  ];

  const features = [
    { title: "Field Management", desc: "Register fields, track geolocation, soil types, and crop seasons.", icon: "🌿" },
    { title: "Crop Logging", desc: "Record planting, spraying, irrigation, and harvest activities.", icon: "📝" },
    { title: "Marketplace", desc: "Buyers and growers interact, negotiate, and manage transactions.", icon: "🛒" },
    { title: "Analytics Dashboard", desc: "Visualize farm KPIs, yields, expenses, and crop history.", icon: "📊" },
  ];

  const stakeholders = [
    { role: "Growers", icon: "👨‍🌾" },
    { role: "Agronomists", icon: "🧑‍🔬" },
    { role: "Buyers", icon: "🛍️" },
    { role: "Administrators", icon: "🧑‍💼" },
  ];

  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "40vh", md: "60vh" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 0 }} />
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}>
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}>
            About AgriFarm
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff", mb: 4 }}>
            Modern digital platform to manage farms, crops, marketplace, and analytics.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: "#FFD54F", color: "#2E7D32", fontWeight: "bold", "&:hover": { bgcolor: "#FFCA28" } }}>
            Get Started
          </Button>
        </Box>
      </Box>

      {/* MISSION & VISION HORIZONTAL - Vision left, Mission right */}
      <Box sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {/* Vision - Left */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 12px 28px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography variant="h5" sx={{ color: "#2E7D32", fontWeight: "bold", mb: 2 }}>
                Our Vision
              </Typography>
              <Typography sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.6 }}>
                To create a fully connected, transparent, and intelligent agricultural ecosystem where technology drives efficiency, growth, and sustainability for all stakeholders.
              </Typography>
            </Paper>
          </Grid>

          {/* Mission - Right */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: "#E8F5E9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 12px 28px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography variant="h5" sx={{ color: "#2E7D32", fontWeight: "bold", mb: 2 }}>
                Our Mission
              </Typography>
              <Typography sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.6 }}>
                AgriFarm empowers growers, agronomists, and buyers with modern digital tools to optimize farm management, increase productivity, and promote sustainable agriculture.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* CORE VALUES */}
      <Box sx={{ py: 10, px: 2, backgroundColor: "#F3F7F1" }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "#2E7D32", mb: 6 }}>
          Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {coreValues.map((item, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  maxWidth: 500,
                  width: "100%",
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
                <Typography variant="h6" sx={{ fontWeight: "700", color: "#2E7D32", mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
