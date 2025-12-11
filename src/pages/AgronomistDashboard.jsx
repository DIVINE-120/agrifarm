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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AgronomistDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchField, setSearchField] = useState("");

  const agronomist = { name: "Dr. Green", role: "Agronomist" };

  const growerFields = [
    { id: 1, grower: "Farmer John", field: "Field A", crop: "Maize", area: "2 ha", soil: "Loamy", status: "Healthy" },
    { id: 2, grower: "Farmer Jane", field: "Field B", crop: "Beans", area: "1.5 ha", soil: "Sandy", status: "Needs Fertilizer" },
  ];

  const activities = [
    { id: 1, grower: "Farmer John", field: "Field A", activity: "Planting", date: "2025-12-01", notes: "Planted early-maturing seeds" },
    { id: 2, grower: "Farmer Jane", field: "Field B", activity: "Fertilizing", date: "2025-12-02", notes: "Used organic fertilizer" },
  ];

  const advisories = [
    { id: 1, title: "Maize Fertilization Tips", type: "Targeted", content: "Apply 50kg/ha of NPK at planting." },
    { id: 2, title: "General Irrigation Advisory", type: "General", content: "Ensure 2-3 irrigations per week depending on soil moisture." },
  ];

  const filteredFields = growerFields.filter(
    (f) =>
      f.grower.toLowerCase().includes(searchField.toLowerCase()) ||
      f.field.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      <Navbar />

      <Box sx={{ display: "flex", flex: 1, width: "100vw", overflowX: "hidden" }}>
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
            Agronomist Panel
          </Typography>

          <List>
            {[
              { label: "Dashboard", key: "dashboard" },
              { label: "Fields & Growers", key: "fields" },
              { label: "Activities", key: "activities" },
              { label: "Advisories", key: "advisories" },
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

        {/* Main Content */}
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
            <Typography sx={{ mr: 2 }}>{agronomist.name}</Typography>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon sx={{ color: "#2E7D32" }} />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2, bgcolor: "#2E7D32" }}>{agronomist.name[0]}</Avatar>
          </Box>

          {/* Scrollable content */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "#2E7D32" }}>
                  Welcome, {agronomist.name}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      onClick={() => setActiveTab("fields")}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" },
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Total Fields
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
                        {growerFields.length}
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      onClick={() => setActiveTab("activities")}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" },
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Total Activities
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
                        {activities.length}
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      onClick={() => setActiveTab("advisories")}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" },
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Total Advisories
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
                        {advisories.length}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )}

            {/* Fields & Growers */}
            {activeTab === "fields" && (
              <>
                <TextField
                  fullWidth
                  label="Search Grower or Field"
                  sx={{ mb: 3 }}
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                />
                <Grid container spacing={3}>
                  {filteredFields.map((f) => (
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
                          {f.grower} - {f.field}
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
                            color: f.status === "Healthy" ? "green" : "orange",
                          }}
                        >
                          <strong>Status:</strong> {f.status}
                        </Typography>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ bgcolor: "#2E7D32", "&:hover": { bgcolor: "#27632a" } }}
                          onClick={() => {
                            setSelectedItem(f);
                            setOpenDialog(true);
                          }}
                        >
                          View Activities
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {/* Activities */}
            {activeTab === "activities" && (
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
                        "&:hover": { transform: "translateY(-5px)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" },
                      }}
                      onClick={() => {
                        setSelectedItem(a);
                        setOpenDialog(true);
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar sx={{ bgcolor: "#2E7D32", mr: 2 }}>{a.activity[0]}</Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {a.activity}
                        </Typography>
                      </Box>
                      <Typography sx={{ mb: 0.5 }}>
                        <strong>Field:</strong> {a.field}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Grower:</strong> {a.grower}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Date:</strong> {a.date}
                      </Typography>
                      <Button
                        variant="contained"
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
            )}

            {/* Advisories */}
            {activeTab === "advisories" && (
              <Grid container spacing={3}>
                {advisories.map((ad) => (
                  <Grid item xs={12} sm={6} md={4} key={ad.id}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.03)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" },
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                        {ad.title}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Type:</strong> {ad.type}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>{ad.content}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
              <DialogTitle>Details</DialogTitle>
              <DialogContent dividers>
                {selectedItem && (
                  <>
                    {selectedItem.grower && (
                      <Typography sx={{ mb: 1 }}>
                        <strong>Grower:</strong> {selectedItem.grower}
                      </Typography>
                    )}
                    {selectedItem.field && (
                      <Typography sx={{ mb: 1 }}>
                        <strong>Field:</strong> {selectedItem.field}
                      </Typography>
                    )}
                    {selectedItem.activity && (
                      <Typography sx={{ mb: 1 }}>
                        <strong>Activity:</strong> {selectedItem.activity}
                      </Typography>
                    )}
                    {selectedItem.date && (
                      <Typography sx={{ mb: 1 }}>
                        <strong>Date:</strong> {selectedItem.date}
                      </Typography>
                    )}
                    {selectedItem.notes && (
                      <Typography sx={{ mb: 1 }}>
                        <strong>Notes:</strong> {selectedItem.notes}
                      </Typography>
                    )}
                  </>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)} sx={{ color: "#2E7D32" }}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
