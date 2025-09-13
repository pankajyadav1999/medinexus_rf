import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  // Login function
  const login = (username, password) => {
    // Dummy authentication
    if (username === "Admin" && password === "A@123") {
      localStorage.setItem("token", "dummy_token");
      return true;
    } else {
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return { login, logout, isAuthenticated };
};
