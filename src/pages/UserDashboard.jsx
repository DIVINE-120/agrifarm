import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  TableRow
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [search, setSearch] = useState("");

  const user = { name: "Jane Smith", email: "jane@example.com", role: "Buyer" };

  const offers = [
    { crop: "Tomatoes", quantity: 100, price: 1.5, location: "Kigali", grower: "Farmer A" },
    { crop: "Maize", quantity: 200, price: 0.8, location: "Musanze", grower: "Farmer B" },
    { crop: "Carrots", quantity: 50, price: 2.0, location: "Huye", grower: "Farmer C" }
  ];

  const orders = [
    { crop: "Tomatoes", quantity: 50, status: "Delivered" },
    { crop: "Maize", quantity: 100, status: "Pending" }
  ];

  const filteredOffers = offers.filter(
    (o) =>
      o.crop.toLowerCase().includes(search.toLowerCase()) ||
      o.location.toLowerCase().includes(search.toLowerCase()) ||
      o.grower.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      
      {/* Navbar */}
      <Navbar />

      {/* Dashboard wrapper (space removed) */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "65px", sm: "220px" },
            bgcolor: "#2E7D32",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 2,
            height: "100vh",
            position: "sticky",
            top: 0, // Fix: Remove the top offset
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 4, fontWeight: "bold", display: { xs: "none", sm: "block" } }}
          >
            Buyer Dashboard
          </Typography>

          <List sx={{ flex: 1 }}>
            {[
              { label: "Dashboard", key: "dashboard" },
              { label: "Marketplace", key: "marketplace" },
              { label: "Orders", key: "orders" },
              { label: "Profile", key: "profile" }
            ].map((item) => (
              <ListItem
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                sx={{
                  cursor: "pointer",
                  color: activeTab === item.key ? "#C8E6C9" : "#fff",
                  backgroundColor: activeTab === item.key ? "rgba(255,255,255,0.2)" : "transparent",
                  borderRadius: 1,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" }
                }}
              >
                <ListItemText primary={item.label} sx={{ display: { xs: "none", sm: "block" } }} />
              </ListItem>
            ))}

            <Divider sx={{ my: 2, bgcolor: "#fff" }} />

            <ListItem button>
              <ListItemText primary="Logout" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItem>
          </List>
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          
          {/* Top user bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 2,
              bgcolor: "#fff",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <Typography sx={{ mr: 2, display: { xs: "none", sm: "block" } }}>
              {user.name} ({user.role})
            </Typography>
            <IconButton>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2 }}>{user.name[0]}</Avatar>
          </Box>

          {/* Scrollable content */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 3, bgcolor: "#F3F7F1" }}>
            
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
                      <Typography variant="h4">{offers.length}</Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Total Orders</Typography>
                      <Typography variant="h4">{orders.length}</Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Typography>Pending Orders</Typography>
                      <Typography variant="h4">
                        {orders.filter((o) => o.status === "Pending").length}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )}

            {/* Marketplace Tab */}
            {activeTab === "marketplace" && (
              <>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#2E7D32" }}>
                  Marketplace
                </Typography>

                <TextField
                  fullWidth
                  label="Search crops, growers or locations"
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
                      {filteredOffers.map((o, i) => (
                        <TableRow key={i}>
                          <TableCell>{o.crop}</TableCell>
                          <TableCell>{o.quantity}</TableCell>
                          <TableCell>{o.price}</TableCell>
                          <TableCell>{o.location}</TableCell>
                          <TableCell>{o.grower}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              size="small"
                              sx={{ bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}
                            >
                              Place Order
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <>
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
                      {orders.map((o, i) => (
                        <TableRow key={i}>
                          <TableCell>{o.crop}</TableCell>
                          <TableCell>{o.quantity}</TableCell>
                          <TableCell>{o.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}

           {/* Profile Tab */}
{activeTab === "profile" && (
  <>
    <Typography
      variant="h4"
      sx={{ mb: 3, fontWeight: 700, color: "#2E7D32" }}
    >
      My Profile
    </Typography>

    <Paper
      sx={{
        p: 4,
        borderRadius: 3,
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        boxShadow: 3,
        flexWrap: "wrap",
      }}
    >
      {/* Profile Avatar */}
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          alt={user.name}
          src={user.avatar || "/default-avatar.png"}
          sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ textTransform: "none" }}
        >
          Upload Photo
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => setUser({ ...user, avatar: reader.result });
                reader.readAsDataURL(file);
              }
            }}
          />
        </Button>
      </Box>

      {/* Profile Details */}
      <Box sx={{ flexGrow: 1, minWidth: 250 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {user.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
          Email: {user.email}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
          Phone: {user.phone || "Not provided"}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            display: "inline-block",
            px: 1.5,
            py: 0.5,
            bgcolor: "#E8F5E9",
            color: "#2E7D32",
            borderRadius: 1,
            fontWeight: 500,
          }}
        >
          {user.role}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2E7D32",
              "&:hover": { bgcolor: "#27632a" },
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Paper>
  </>
)}


          </Box>
        </Box>
      </Box>
    </Box>
  );
}
