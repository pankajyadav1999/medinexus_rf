import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Admin" && password === "A@123") {
      localStorage.setItem("token", "dummy_token"); 
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">MediNexus Hospital</h2>
        <p className="login-subtitle">Sign in to your account</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-btn">Login</button>
        <p className="login-footer">Username: Admin | Password: A@123</p>
      </div>
    </div>
  );
}
