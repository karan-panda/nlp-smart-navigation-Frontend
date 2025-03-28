"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container-fluid min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light"}`}>
      {/* Header */}
      <header className="d-flex align-items-center p-3 bg-white shadow-sm">
        <Link href="/profile" className="text-dark fs-4 me-3">&#8592;</Link>
        <h1 className="h5 fw-bold mb-0">Settings</h1>
      </header>

      {/* Content */}
      <div className={`bg-white rounded shadow-sm p-4 mt-4 mx-2 ${darkMode ? "bg-dark text-white" : ""}`}>
        <h2 className="h6 fw-bold">Manage App Settings</h2>
        <p className="text-muted">Customize your app experience</p>

        {/* Toggle Notifications */}
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>Push Notifications</span>
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)}
            />
          </div>
        </div>

        {/* Toggle Dark Mode */}
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span>Dark Mode</span>
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>

        {/* Account Management */}
        <div className="mt-4">
          <h2 className="h6 fw-bold">Account</h2>
          <Link href="/change-login" className="d-flex justify-content-between align-items-center text-decoration-none text-dark py-2 border-bottom">
            <span>Change Login Number</span>
            <span>&#8594;</span>
          </Link>
          <button className="btn btn-danger w-100 mt-3">Log Out</button>
        </div>
      </div>
    </div>
  );
}
