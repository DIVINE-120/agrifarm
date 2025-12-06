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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      {/* Top Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 56, sm: 64 },
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
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          pt: { xs: "56px", sm: "64px" }, // push content below navbar
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "60px", sm: "220px" },
            bgcolor: "#2E7D32",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 2,
            height: `calc(100vh - 64px)`, // full viewport minus navbar
            position: "sticky",
            top: { xs: 56, sm: 64 },
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
                  backgroundColor: activeTab === item.key ? "rgba(255,255,255,0.2)" : "transparent",
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
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#F3F7F1" }}>
          {/* Scrollable content */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                  Admin Dashboard
                </Typography>
                <Grid container spacing={4}>
                  {Object.entries(reports).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={3} key={key}>
                      <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                        <Typography variant="h6" sx={{ mb: 1, textTransform: "capitalize" }}>
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
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
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
                            sx={{ mt: 2, bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}
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
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
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
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                  Reporting Dashboard
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(reports).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={3} key={key}>
                      <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                        <Typography variant="h6" sx={{ mb: 1, textTransform: "capitalize" }}>
                          {key.replace(/([A-Z])/g, " $1")}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                          {value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
