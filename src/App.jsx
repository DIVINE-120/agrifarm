import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
// Import other pages if needed
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AgronomistDashboard from "./pages/AgronomistDashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import GrowerDashboard from "./pages/growerDash";

function App() {
  const NAVBAR_HEIGHT = 64; // adjust if your Navbar height is different

  return (
    <>
      <Navbar />

      {/* Main content wrapper to avoid Navbar overlapping */}
      <div
        style={{
          paddingTop: NAVBAR_HEIGHT,
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          backgroundColor: "white", // main background
          color: "black", // default text color
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/agronomistDash" element={<AgronomistDashboard />} />
          <Route path="/grower" element={<GrowerDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
