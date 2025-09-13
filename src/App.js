import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./modules/auth/Login";
import Dashboard from "./modules/dashboard/Dashboard";
import PatientList from "./modules/patients/PatientList";
import AddPatient from "./modules/patients/AddPatient";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}>
          {/* Default Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Submodules */}
          <Route path="patients/list" element={<PatientList />} />
          <Route path="patients/add" element={<AddPatient />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
