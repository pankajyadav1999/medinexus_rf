import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate,Outlet } from "react-router-dom";
import { useAuth } from "../../core/hooks/useAuth"; // import your auth hook
import "../../App.css";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth(); // get logout function from hook
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    logout();           // clears token
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="layout-container">
      <div className="top-navbar">
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
        <h3>Hospital Dashboard</h3>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="layout-body">
        {sidebarOpen && <Sidebar />}
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
