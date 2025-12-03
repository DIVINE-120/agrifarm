// src/pages/Homepage.jsx
import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/farm-hero.jpg";
import Footer from "../components/Footer"; // Only footer used

export default function Homepage() {
  const services = [
    {
      title: "Farm & Field Management",
      desc: "Register fields, track geolocation, soil types, crop seasons, and monitor farm operations.",
      icon: "🌿",
    },
    {
      title: "Crop Activities Logging",
      desc: "Track planting, fertilizer usage, spraying, irrigation, and harvest activities effortlessly.",
      icon: "📝",
    },
    {
      title: "Agronomy Insights",
      desc: "Get expert recommendations and advisory alerts based on soil, crop, and weather data.",
      icon: "🔍",
    },
    {
      title: "Marketplace",
      desc: "Growers list produce, buyers place orders, negotiate prices, and track transactions.",
      icon: "🛒",
    },
    {
      title: "Inventory Tracking",
      desc: "Monitor seeds, fertilizers, chemicals, tools, and input stock levels in real-time.",
      icon: "📦",
    },
    {
      title: "Analytics Dashboard",
      desc: "Visualize yields, expenses, farm KPIs, crop history, and operational insights.",
      icon: "📊",
    },
  ];

  return (
    <Box sx={{ width: "100vw", overflowX: "hidden", p: 0, m: 0 }}>
      {/* NAVBAR */}
      <Box
        sx={{
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: { xs: 2, md: 6 },
          zIndex: 20,
          backgroundColor: "rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "white", letterSpacing: 0.8 }}
        >
          AgriFarm
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {["HOME", "ABOUT", "CONTACT"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "white", fontWeight: 500 }}>
                {link}
              </Typography>
            </Link>
          ))}

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                borderRadius: "6px",
                px: 2,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
              }}
            >
              LOGIN
            </Button>
          </Link>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#2E7D32",
                fontWeight: "bold",
                borderRadius: "6px",
                "&:hover": { bgcolor: "#f2f2f2" },
              }}
            >
              REGISTER
            </Button>
          </Link>
        </Box>
      </Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3.2rem" },
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Digital Agriculture Starts Here
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.3rem" },
              mb: 4,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Manage fields, crops, marketplace, analytics and agronomy — all in one global farm management platform.
          </Typography>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              bgcolor: "#FFD54F",
              color: "#2E7D32",
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": { bgcolor: "#FFCA28" },
            }}
          >
            GET STARTED
          </Button>
        </Box>
      </Box>

      {/* WHAT WE DO SECTION */}
      <Box
        sx={{
          py: 10,
          px: { xs: 2, md: 4 },
          backgroundColor: "#F3F7F1",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1200px" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "800",
              color: "#2E7D32",
              mb: 6,
            }}
          >
            What We Do
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {services.map((item) => (
              <Grid
                item
                xs={12}
                md={6}
                key={item.title}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    maxWidth: 500,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch",
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

     
    </Box>
  );
}
