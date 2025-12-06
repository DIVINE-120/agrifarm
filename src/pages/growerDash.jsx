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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GrowerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchOffer, setSearchOffer] = useState("");

  const grower = { name: "Farmer John", role: "Grower" };

  const fields = [
    { id: 1, name: "Field A", crop: "Maize", area: "2 ha", soil: "Loamy", status: "Healthy" },
    { id: 2, name: "Field B", crop: "Beans", area: "1.5 ha", soil: "Sandy", status: "Needs Fertilizer" },
  ];

  const activities = [
    { id: 1, field: "Field A", activity: "Planting", date: "2025-12-01" },
    { id: 2, field: "Field B", activity: "Fertilizing", date: "2025-12-02" },
  ];

  const inventory = [
    { id: 1, item: "Maize Seeds", quantity: 100 },
    { id: 2, item: "Fertilizer", quantity: 50 },
  ];

  const marketplaceOffers = [
    { id: 1, crop: "Maize", quantity: 100, price: 1.5, location: "Kigali" },
    { id: 2, crop: "Beans", quantity: 50, price: 2.0, location: "Musanze" },
  ];

  const filteredOffers = marketplaceOffers.filter(
    (o) =>
      o.crop.toLowerCase().includes(searchOffer.toLowerCase()) ||
      o.location.toLowerCase().includes(searchOffer.toLowerCase())
  );

  const analytics = [
    { crop: "Maize", area: "2 ha", health: "Good", expectedYield: "500 kg" },
    { crop: "Beans", area: "1.5 ha", health: "Moderate", expectedYield: "300 kg" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      <Navbar />

      {/* Main dashboard wrapper */}
      <Box sx={{ display: "flex", flex: 1, pt: "64px", width: "100vw", overflowX: "hidden" }}>
        {/* Sidebar */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: 220,
            bgcolor: "#2E7D32",
            color: "#fff",
            flexShrink: 0,
            p: 2,
            height: "calc(100vh - 64px)",
          }}
        >
          <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
            Grower Panel
          </Typography>
          <List>
            {[
              { label: "Dashboard", key: "dashboard" },
              { label: "Fields", key: "fields" },
              { label: "Activities", key: "activities" },
              { label: "Inventory", key: "inventory" },
              { label: "Marketplace", key: "marketplace" },
              { label: "Analytics", key: "analytics" },
            ].map((item) => (
              <ListItem
                button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                sx={{
                  color: "#fff",
                  backgroundColor: activeTab === item.key ? "rgba(255,255,255,0.2)" : "transparent",
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
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

        {/* Main content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "calc(100vh - 64px)", backgroundColor: "#F3F7F1" }}>
          {/* Top Bar */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", p: 2, bgcolor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <Typography sx={{ mr: 2 }}>{grower.name}</Typography>
            <IconButton>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2 }}>{grower.name[0]}</Avatar>
          </Box>

          {/* Scrollable content */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
            {/* Dashboard KPIs */}
            {activeTab === "dashboard" && (
              <>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                  Welcome, {grower.name}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Total Fields</Typography>
                      <Typography variant="h4">{fields.length}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Total Crops</Typography>
                      <Typography variant="h4">{fields.length}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Pending Activities</Typography>
                      <Typography variant="h4">{activities.length}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Total Marketplace Offers</Typography>
                      <Typography variant="h4">{marketplaceOffers.length}</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )}

            {/* Fields Tab */}
            {activeTab === "fields" && (
              <Grid container spacing={2}>
                {fields.map((f) => (
                  <Grid item xs={12} md={6} key={f.id}>
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                      <Typography><strong>Name:</strong> {f.name}</Typography>
                      <Typography><strong>Crop:</strong> {f.crop}</Typography>
                      <Typography><strong>Area:</strong> {f.area}</Typography>
                      <Typography><strong>Soil:</strong> {f.soil}</Typography>
                      <Typography><strong>Status:</strong> {f.status}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Activities Tab */}
            {activeTab === "activities" && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Field</TableCell>
                      <TableCell>Activity</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {activities.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.field}</TableCell>
                        <TableCell>{a.activity}</TableCell>
                        <TableCell>{a.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Inventory Tab */}
            {activeTab === "inventory" && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell>Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {inventory.map((i) => (
                      <TableRow key={i.id}>
                        <TableCell>{i.item}</TableCell>
                        <TableCell>{i.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Marketplace Tab */}
            {activeTab === "marketplace" && (
              <>
                <TextField
                  fullWidth
                  label="Search Offers"
                  sx={{ mb: 3 }}
                  value={searchOffer}
                  onChange={(e) => setSearchOffer(e.target.value)}
                />
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Crop</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price ($/kg)</TableCell>
                        <TableCell>Location</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredOffers.map((o) => (
                        <TableRow key={o.id}>
                          <TableCell>{o.crop}</TableCell>
                          <TableCell>{o.quantity}</TableCell>
                          <TableCell>{o.price}</TableCell>
                          <TableCell>{o.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Crop</TableCell>
                      <TableCell>Area</TableCell>
                      <TableCell>Health</TableCell>
                      <TableCell>Expected Yield</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analytics.map((a) => (
                      <TableRow key={a.crop}>
                        <TableCell>{a.crop}</TableCell>
                        <TableCell>{a.area}</TableCell>
                        <TableCell>{a.health}</TableCell>
                        <TableCell>{a.expectedYield}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}
