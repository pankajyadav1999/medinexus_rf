import React, { useState } from "react";
import { useAuth } from "../../core/hooks/useAuth";
import "../../App.css";

export default function Login() {
  const { login } = useAuth(); // import login from hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login(username, password)) { // call login from hook
      window.location.href = "/dashboard"; // redirect
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
