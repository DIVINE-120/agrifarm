import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Snackbar, Alert } from "@mui/material";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration submitted", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        pt: { xs: 10, md: 12 },
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
          maxWidth: 500,
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
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 3 }}
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
            }}
          >
            Register
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Registration successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}
