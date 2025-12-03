// src/pages/UserDashboard.jsx
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
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dummy user info
  const user = { name: "Jane Smith", email: "jane@example.com", role: "Buyer" };

  // Dummy marketplace offers
  const offers = [
    { crop: "Tomatoes", quantity: 100, price: 1.5, location: "Kigali", grower: "Farmer A" },
    { crop: "Maize", quantity: 200, price: 0.8, location: "Musanze", grower: "Farmer B" },
    { crop: "Carrots", quantity: 50, price: 2.0, location: "Huye", grower: "Farmer C" },
  ];

  // Dummy order history
  const orders = [
    { crop: "Tomatoes", quantity: 50, status: "Delivered" },
    { crop: "Maize", quantity: 100, status: "Pending" },
  ];

  // Filters for marketplace
  const [search, setSearch] = useState("");

  const filteredOffers = offers.filter(
    (o) =>
      o.crop.toLowerCase().includes(search.toLowerCase()) ||
      o.location.toLowerCase().includes(search.toLowerCase()) ||
      o.grower.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "60px", sm: "220px" },
          bgcolor: "#2E7D32",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          p: 2,
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Buyer Dashboard
        </Typography>

        <List sx={{ flex: 1 }}>
          {[
            { label: "Dashboard", key: "dashboard" },
            { label: "Marketplace", key: "marketplace" },
            { label: "Orders", key: "orders" },
            { label: "Profile", key: "profile" },
          ].map((item) => (
            <ListItem
              button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              sx={{ color: "#fff" }}
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
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#F3F7F1" }}>
        {/* Top Navbar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", p: 2, bgcolor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <Typography sx={{ mr: 2 }}>{user.name} ({user.role})</Typography>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ ml: 2 }}>{user.name[0]}</Avatar>
        </Box>

        {/* Scrollable Content */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                Welcome, {user.name}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                    <Typography>Total Offers</Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {offers.length}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                    <Typography>Total Orders</Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {orders.length}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                    <Typography>Pending Orders</Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {orders.filter(o => o.status === "Pending").length}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </>
          )}

          {/* Marketplace Tab */}
          {activeTab === "marketplace" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#2E7D32" }}>
                Marketplace
              </Typography>
              <TextField
                label="Search by crop, grower or location"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Crop</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price ($/kg)</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Grower</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredOffers.map((offer, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{offer.crop}</TableCell>
                        <TableCell>{offer.quantity}</TableCell>
                        <TableCell>{offer.price}</TableCell>
                        <TableCell>{offer.location}</TableCell>
                        <TableCell>{offer.grower}</TableCell>
                        <TableCell>
                          <Button variant="contained" size="small" sx={{ bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}>
                            Place Order
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#2E7D32" }}>
                Order History
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Crop</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{order.crop}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                Profile
              </Typography>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography>Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Role: {user.role}</Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}>
                  Edit Profile
                </Button>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
