import React, { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import { getSession } from "../../utils/auth.js";
import {
  getTickets,
  createTicket,
  deleteTicket,
  updateTicketStatus,
} from "../../utils/tickets.js";
import { showToast } from "../../utils/toast.jsx";

export default function TicketPage() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load all tickets on mount
  useEffect(() => {
    const data = getTickets();
    setTickets(data);
  }, []);

  function handleCreateTicket(e) {
    e.preventDefault();

    const user = getSession();
    const result = createTicket(title, description, user);

    if (result.success) {
      showToast(result.message, "success");
      setTickets(getTickets());
      setTitle("");
      setDescription("");
    } else {
      showToast(result.message, "error");
    }
  }

  function handleDeleteTicket(id) {
    deleteTicket(id);
    showToast("Ticket deleted", "warning");
    setTickets(getTickets());
  }

  function handleStatusChange(id, newStatus) {
    updateTicketStatus(id, newStatus);
    showToast(`Status updated to ${newStatus}`, "info");
    setTickets(getTickets());
  }

  return (
    <DashboardLayout>
      <div className="container py-4">
        <h3 className="fw-bold mb-4 text-center">🎫 Ticket Manager</h3>

        {/* Create Form */}
        <form
          onSubmit={handleCreateTicket}
          className="card shadow-sm p-4 mb-4"
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Login button not working"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details about the issue..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Ticket
          </button>
        </form>

        {/* Ticket List */}
        <div className="row g-3">
          {tickets.length === 0 && (
            <p className="text-center text-muted">No tickets yet.</p>
          )}

          {tickets.map((t) => (
            <div className="col-md-6 col-lg-4" key={t.id}>
              <div className="card shadow-sm p-3 h-100">
                <h5 className="fw-bold">{t.title}</h5>
                <p className="small text-muted">{t.description}</p>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span
                    className={`badge ${
                      t.status === "open"
                        ? "bg-success"
                        : t.status === "in_progress"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {t.status}
                  </span>

                  <div className="btn-group">
                    {t.status !== "closed" && (
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() =>
                          handleStatusChange(
                            t.id,
                            t.status === "open" ? "in_progress" : "closed"
                          )
                        }
                      >
                        Next
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDeleteTicket(t.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
