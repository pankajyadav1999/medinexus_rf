import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openModule, setOpenModule] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModule = (module) => {
    setOpenModule(openModule === module ? "" : module);
  };

  // menu items
  const menuItems = [
    {
      name: "Dashboard",
      type: "link",
      path: "/dashboard",
    },
    {
      name: "Patients",
      type: "module",
      sub: [
        { name: "Patient List", path: "/dashboard/patients/PatientList" },
        { name: "Add Patient", path: "/dashboard/patients/AddPatient" },
      ],
    },
    {
      name: "Doctors",
      type: "module",
      sub: [
        { name: "Doctor List", path: "/dashboard/doctors/DoctorList" },
        { name: "Add Doctor", path: "/dashboard/doctors/AddDoctor" },
      ],
    },
    {
      name: "Appointments",
      type: "module",
      sub: [
        { name: "Schedule", path: "/dashboard/appointments/schedule" },
      ],
    },
    { name: "Billing", type: "link", path: "/dashboard/billing" },
    { name: "Pharmacy", type: "link", path: "/dashboard/pharmacy" },
    { name: "Inventory", type: "link", path: "/dashboard/inventory" },
  ];

  // search filter
  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Hospital</h3>

      {/* search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="sidebar-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="sidebar-menu">
        {filteredMenu.map((item, idx) => (
          <li key={idx}>
            {/* direct links */}
            {item.type === "link" && (
              <Link className="sidebar-link" to={item.path}>
                {item.name}
              </Link>
            )}

            {/* expandable modules */}
            {item.type === "module" && (
              <>
                <div
                  className="sidebar-link"
                  onClick={() => toggleModule(item.name)}
                >
                  {item.name}
                </div>
                {openModule === item.name && (
                  <ul className="sidebar-submenu">
                    {item.sub
                      .filter((sub) =>
                        sub.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link to={sub.path}>{sub.name}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
