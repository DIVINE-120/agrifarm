import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Link as MuiLink, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    setSuccess(true);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#F3F7F1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, color: "#2E7D32", fontWeight: "bold", textAlign: "center" }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#2E7D32",
              "&:hover": { bgcolor: "#27632a" },
              width: "100%",
              py: 1.5,
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Login
          </Button>

          {/* Forgot Password Link */}
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            <MuiLink component={Link} to="/forgot-password" sx={{ color: "#2E7D32", fontWeight: "bold" }}>
              Forgot Password?
            </MuiLink>
          </Typography>
        </form>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login simulated (no backend yet)
        </Alert>
      </Snackbar>
    </Box>
  );
}
