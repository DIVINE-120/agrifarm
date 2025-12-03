import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        top: 0,
        backgroundColor: "#2E7D32",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
        >
          AgriFarm
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button
          component={Link}
          to="/login"
          sx={{
            color: "white",
            marginLeft: 2,
            border: "1px solid white",
            "&:hover": { backgroundColor: "white", color: "#2E7D32" },
          }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/register"
          sx={{
            color: "#2E7D32",
            backgroundColor: "white",
            marginLeft: 1,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#C8E6C9" },
          }}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}
