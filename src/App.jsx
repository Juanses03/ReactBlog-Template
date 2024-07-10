import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BlogDetail from "./components/Blog/BlogDetail";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const App = () => (
  <AuthProvider>
    <ThemeProvider>
      <FirebaseProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
        </Router>
      </FirebaseProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
