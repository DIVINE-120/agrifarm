import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const users = [
    { name: "John Doe", role: "Grower", status: "Pending" },
    { name: "Jane Smith", role: "Buyer", status: "Verified" },
    { name: "Alice Johnson", role: "Agronomist", status: "Verified" },
  ];

  const systemConfig = {
    crops: ["Maize", "Beans", "Wheat"],
    soilTypes: ["Loamy", "Sandy", "Clay"],
    activityCategories: ["Planting", "Fertilizing", "Harvest"],
  };

  const reports = {
    yield: "1200 kg",
    sales: "$3500",
    orders: 45,
    growerActivity: 12,
  };

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "60px", sm: "220px" },
          bgcolor: "#2E7D32",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100vh",
          position: "sticky",
          top: 0,
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Admin Panel
        </Typography>

        <List sx={{ flex: 1 }}>
          {[
            { label: "Dashboard", key: "dashboard" },
            { label: "User Management", key: "users" },
            { label: "System Config", key: "config" },
            { label: "Reports", key: "reports" },
          ].map((item) => (
            <ListItem
              button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              sx={{
                color: "#fff",
                backgroundColor:
                  activeTab === item.key ? "rgba(255,255,255,0.2)" : "transparent",
                borderRadius: 1,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
                cursor: "pointer",
                mb: 1,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <Divider sx={{ my: 2, bgcolor: "#fff" }} />
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F3F7F1",
        }}
      >
        {/* Fixed Top Navbar */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: { xs: "60px", sm: "220px" },
            right: 0,
            height: 64,
            bgcolor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 2,
          }}
        >
          <Typography sx={{ mr: 2 }}>Admin</Typography>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ ml: 2 }}>A</Avatar>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            mt: "64px", // offset for fixed navbar
            p: 3,
          }}
        >
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <>
              <Typography
                variant="h4"
                sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}
              >
                Admin Dashboard
              </Typography>
              <Grid container spacing={4}>
                {Object.entries(reports).map(([key, value]) => (
                  <Grid item xs={12} sm={6} md={3} key={key}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, textTransform: "capitalize" }}
                      >
                        {key.replace(/([A-Z])/g, " $1")}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {/* User Management Tab */}
          {activeTab === "users" && (
            <Box>
              <Typography
                variant="h4"
                sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}
              >
                User Verification & Roles
              </Typography>
              <Grid container spacing={2}>
                {users.map((u, i) => (
                  <Grid item xs={12} md={6} key={i}>
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                      <Typography>Name: {u.name}</Typography>
                      <Typography>Role: {u.role}</Typography>
                      <Typography>Status: {u.status}</Typography>
                      {u.status === "Pending" && (
                        <Button
                          variant="contained"
                          sx={{
                            mt: 2,
                            bgcolor: "#2E7D32",
                            "&:hover": { bgcolor: "#27632a" },
                          }}
                        >
                          Verify
                        </Button>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* System Config Tab */}
          {activeTab === "config" && (
            <Box>
              <Typography
                variant="h4"
                sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}
              >
                System Configuration
              </Typography>
              <Paper sx={{ p: 3, borderRadius: 3, mb: 2 }}>
                <Typography variant="h6">Crops</Typography>
                <Typography>{systemConfig.crops.join(", ")}</Typography>
              </Paper>
              <Paper sx={{ p: 3, borderRadius: 3, mb: 2 }}>
                <Typography variant="h6">Soil Types</Typography>
                <Typography>{systemConfig.soilTypes.join(", ")}</Typography>
              </Paper>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6">Activity Categories</Typography>
                <Typography>{systemConfig.activityCategories.join(", ")}</Typography>
              </Paper>
            </Box>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
  <Box>
    <Typography
      variant="h4"
      sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}
    >
      Reporting Dashboard
    </Typography>

    {/* KPI Summary Cards */}
    <Grid container spacing={3}>
      {Object.entries(reports).map(([key, value]) => (
        <Grid item xs={12} sm={6} md={3} key={key}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 1, color: "#2E7D32", textTransform: "capitalize" }}
            >
              {key.replace(/([A-Z])/g, " $1")}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#27632a" }}
            >
              {value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Placeholder for Charts */}
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" sx={{ color: "#2E7D32" }}>
              Yield Chart Placeholder
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" sx={{ color: "#2E7D32" }}>
              Sales Chart Placeholder
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Box>
)}

        </Box>
      </Box>
    </Box>
  );
}
