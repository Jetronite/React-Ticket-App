// src/pages/auth/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { requireAuth, getSession, logout } from "../../utils/auth.js";
import { showToast } from "../../utils/toast.jsx";
import { getTickets } from "../../utils/tickets.js"; // assuming you have this
import DashboardLayout from "../../layouts/DashboardLayout.jsx";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState("");
  const [stats, setStats] = useState({ total: 0, open: 0, closed: 0 });

  useEffect(() => {
    const isLoggedIn = requireAuth();

    if (!isLoggedIn) {
      showToast("Please log in first!", "error");
      setTimeout(() => (window.location.href = "/auth/login"), 1500);
    } else {
      const email = getSession();
      setUserEmail(email);

      const allTickets = getTickets();
      const userTickets = allTickets.filter((t) => t.user === email);
      const open = userTickets.filter((t) => t.status === "open").length;
      const closed = userTickets.filter((t) => t.status === "closed").length;

      setStats({
        total: userTickets.length,
        open,
        closed,
      });
    }
  }, []);

  function handleLogout() {
    logout();
    showToast("Logged out successfully", "info");
    setTimeout(() => (window.location.href = "/auth/login"), 1500);
  }

  if (!userEmail) return null;

  return (
    <DashboardLayout onLogout={handleLogout}>
      <div className="py-4">
        <h2 className="fw-bold mb-4">Welcome, {userEmail} 👋</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h5>Total Tickets</h5>
              <p className="fs-4 fw-bold text-primary">{stats.total}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h5>Open Tickets</h5>
              <p className="fs-4 fw-bold text-warning">{stats.open}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h5>Closed Tickets</h5>
              <p className="fs-4 fw-bold text-success">{stats.closed}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
