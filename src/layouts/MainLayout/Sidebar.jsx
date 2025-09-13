import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openModule, setOpenModule] = useState("");

  const toggleModule = (module) => {
    setOpenModule(openModule === module ? "" : module);
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Hospital</h3>
      <input type="text" placeholder="Search..." className="sidebar-search" />
      <ul className="sidebar-menu">
        <li>
          <div className="sidebar-link" onClick={() => toggleModule("patients")}>Patients</div>
          {openModule === "patients" && (
            <ul className="sidebar-submenu">
              <li><Link to="#">Patient List</Link></li>
              <li><Link to="#">Add Patient</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="sidebar-link" onClick={() => toggleModule("doctors")}>Doctors</div>
          {openModule === "doctors" && (
            <ul className="sidebar-submenu">
              <li><Link to="#">Doctor List</Link></li>
              <li><Link to="#">Add Doctor</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="sidebar-link" onClick={() => toggleModule("appointments")}>Appointments</div>
          {openModule === "appointments" && (
            <ul className="sidebar-submenu">
              <li><Link to="#">Schedule</Link></li>
            </ul>
          )}
        </li>
        <li><Link className="sidebar-link" to="#">Billing</Link></li>
        <li><Link className="sidebar-link" to="#">Pharmacy</Link></li>
        <li><Link className="sidebar-link" to="#">Inventory</Link></li>
      </ul>
    </div>
  );
}
