// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import AppRoutes from "./routes/AppRoutes"; // optional for nested routes

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        
        {/* Include AppRoutes if you have more complex nested routes */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>

      {/* Footer rendered only once here */}
      <Footer />
    </Router>
  );
}

export default App;
