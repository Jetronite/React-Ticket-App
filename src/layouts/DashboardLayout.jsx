// src/layouts/DashboardLayout.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../utils/auth.js";
import { showToast } from "../utils/toast.jsx";

export default function DashboardLayout({ children }) {
  function handleLogout() {
    logout();
    showToast("Logged out successfully", "info");
    setTimeout(() => (window.location.href = "/auth/login"), 1500);
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          <a className="navbar-brand fw-bold text-white" href="/dashboard">
            🎟 TicketApp
          </a>

          <div className="d-flex gap-3 align-items-center">
            <NavLink
              to="/dashboard"
              className="text-white text-decoration-none fw-semibold"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/tickets"
              className="text-white text-decoration-none fw-semibold"
            >
              Tickets
            </NavLink>

            <NavLink
              to="/settings"
              className="text-white text-decoration-none fw-semibold"
            >
              Settings
            </NavLink>

            <button
              className="btn btn-outline-light btn-sm ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main
        className="flex-grow-1 py-4"
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-3 small mt-auto">
        © {new Date().getFullYear()} TicketApp. All rights reserved.
      </footer>
    </div>
  );
}
