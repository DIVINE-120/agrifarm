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
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";


export default function GrowerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchOffer, setSearchOffer] = useState("");

  const grower = { name: "Farmer John", role: "Grower" };
  const [openDialog, setOpenDialog] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);


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

      {/* NAVBAR */}
      <Box sx={{ display: "flex", flex: 1, pt: 0, mt: 0, width: "100vw", overflowX: "hidden" }}>

        {/* Sidebar */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: 220,
            bgcolor: "#2E7D32",
            color: "#fff",
            flexShrink: 0,
            p: 2,
            height: "100vh",
            position: "sticky",
            top: 0,
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
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#F3F7F1" }}>

          {/* Top Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 2,
              bgcolor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
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

            {/* Dashboard */}
            {activeTab === "dashboard" && (
  <>
    <Typography
      variant="h4"
      sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}
    >
      Welcome, {grower.name}
    </Typography>

    <Grid container spacing={3}>

      {/* Total Fields */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          onClick={() => setActiveTab("fields")}
          sx={{
            p: 3,
            borderRadius: 3,
            textAlign: "center",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Total Fields
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
            {fields.length}
          </Typography>
        </Paper>
      </Grid>

      {/* Total Crops */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          onClick={() => setActiveTab("fields")}
          sx={{
            p: 3,
            borderRadius: 3,
            textAlign: "center",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Total Crops
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
            {fields.length}
          </Typography>
        </Paper>
      </Grid>

      {/* Activities */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          onClick={() => setActiveTab("activities")}
          sx={{
            p: 3,
            borderRadius: 3,
            textAlign: "center",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Pending Activities
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
            {activities.length}
          </Typography>
        </Paper>
      </Grid>

      {/* Marketplace */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          onClick={() => setActiveTab("marketplace")}
          sx={{
            p: 3,
            borderRadius: 3,
            textAlign: "center",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Marketplace Offers
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
            {marketplaceOffers.length}
          </Typography>
        </Paper>
      </Grid>

    </Grid>
  </>
)}


          {/* Fields */}
{activeTab === "fields" && (
  <Grid container spacing={3}>
    {fields.map((f) => (
      <Grid item xs={12} sm={6} md={4} key={f.id}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.03)", boxShadow: "0 8px 25px rgba(0,0,0,0.2)" },
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            {f.name}
          </Typography>

          <Typography sx={{ mb: 0.5 }}>
            <strong>Crop:</strong> {f.crop}
          </Typography>
          <Typography sx={{ mb: 0.5 }}>
            <strong>Area:</strong> {f.area}
          </Typography>
          <Typography sx={{ mb: 0.5 }}>
            <strong>Soil:</strong> {f.soil}
          </Typography>
          <Typography
            sx={{
              mb: 2,
              fontWeight: 600,
              color:
                f.status === "Healthy"
                  ? "green"
                  : f.status === "Needs Fertilizer"
                  ? "orange"
                  : "red",
            }}
          >
            <strong>Status:</strong> {f.status}
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}
              onClick={() => setActiveTab("activities")}
            >
              View Activities
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ color: "#2E7D32", borderColor: "#2E7D32", "&:hover": { bgcolor: "#e8f5e9" } }}
            >
              Upload Docs
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Button
              variant="text"
              size="small"
              sx={{ color: "#2E7D32", "&:hover": { textDecoration: "underline" } }}
            >
              Manage Inventory
            </Button>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
)}


       {/* Activities */}
{activeTab === "activities" && (
  <>
    <Grid container spacing={3}>
      {activities.map((a) => (
        <Grid item xs={12} sm={6} md={4} key={a.id}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              },
            }}
            onClick={() => {
              setSelectedItem(a);
              setOpenDialog(true);
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar sx={{ bgcolor: "#2E7D32", mr: 2 }}>
                {a.activity[0]}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {a.activity}
              </Typography>
            </Box>

            <Typography sx={{ mb: 0.5 }}>
              <strong>Field:</strong> {a.field}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Date:</strong> {a.date}
            </Typography>

            <Button
              variant="contained"
              size="small"
              fullWidth
              sx={{ bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}
              onClick={() => {
                setSelectedItem(a);
                setOpenDialog(true);
              }}
            >
              View Details
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Dialog for Activity Details */}
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Activity Details</DialogTitle>
      <DialogContent dividers>
        {selectedItem && (
          <>
            <Typography sx={{ mb: 1 }}>
              <strong>Field:</strong> {selectedItem.field}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Activity:</strong> {selectedItem.activity}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Date:</strong> {selectedItem.date}
            </Typography>
            {selectedItem.notes && (
              <Typography sx={{ mb: 1 }}>
                <strong>Notes:</strong> {selectedItem.notes}
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenDialog(false)}
          sx={{ color: "#2E7D32" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
)}



            {/* Inventory */}
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

            {/* Marketplace */}
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

            {/* Analytics */}
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
