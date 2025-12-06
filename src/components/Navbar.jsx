import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const location = useLocation();

  // Toggle Mobile Drawer
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={elevate ? 4 : 0}
        sx={{
          backgroundColor: "#2E7D32", 
          transition: "0.3s ease"
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          
          {/* Clickable Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            AgriFarm
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  color: "white",
                  mx: 1,
                  borderBottom:
                    location.pathname === link.path
                      ? "2px solid white"
                      : "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Login Button */}
            <Button
              component={Link}
              to="/login"
              sx={{
                color: "white",
                ml: 2,
                border: "1px solid white",
                "&:hover": { backgroundColor: "white", color: "#2E7D32" },
              }}
            >
              Login
            </Button>

            {/* Register Button */}
            <Button
              component={Link}
              to="/register"
              sx={{
                color: "#2E7D32",
                backgroundColor: "white",
                ml: 1,
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#C8E6C9" },
              }}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, color: "white" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 260, bgcolor: "#E8F5E9", height: "100%" }}>
          
          {/* Drawer Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.label}
                component={Link}
                to={link.path}
                onClick={toggleDrawer}
                sx={{
                  backgroundColor:
                    location.pathname === link.path ? "#C8E6C9" : "transparent",
                }}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            <ListItem
              button
              component={Link}
              to="/login"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Login" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/register"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
