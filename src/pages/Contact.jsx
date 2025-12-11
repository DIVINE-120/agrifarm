// src/pages/Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box sx={{ width: "100vw", backgroundColor: "#F3F7F1", pb: 10 }}>
      {/* Contact Form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 2,
          pt: { xs: "64px", md: "64px" }, // height of navbar, flush under navbar
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            width: "100%",
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: "#2E7D32",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#555",
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Have questions or need support? Fill out the form below and we’ll get back to you as soon as possible.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
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
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />

            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={5}
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
                fontSize: "1rem",
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
