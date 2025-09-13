import React, { useState } from "react";
import Sidebar from './Sidebar';


export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout-container">
      <div className="top-navbar">
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
        <h3>Hospital Dashboard</h3>
      </div>
      <div className="layout-body">
        {sidebarOpen && <Sidebar />}
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
