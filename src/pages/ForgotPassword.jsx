import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Snackbar, Alert } from "@mui/material";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({ emailOrPhone: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password requested for:", formData);

    setSuccess(true);
    setFormData({ emailOrPhone: "" });
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
          Forgot Password
        </Typography>

        <Typography
          sx={{ mb: 4, textAlign: "center", color: "#555", fontSize: "0.95rem" }}
        >
          Enter your registered email or phone number to receive a password reset link or code.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email or Phone"
            name="emailOrPhone"
            value={formData.emailOrPhone}
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
            Send Reset Link
          </Button>
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
          Reset instructions sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
