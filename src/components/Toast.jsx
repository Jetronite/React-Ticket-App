import React from "react";

export default function Toast({ message, type = "info" }) {
  const bgClass =
    type === "success"
      ? "bg-success text-white"
      : type === "error"
      ? "bg-danger text-white"
      : type === "warning"
      ? "bg-warning text-dark"
      : "bg-info text-white";

  return (
    <div
      className={`position-fixed bottom-0 end-0 p-3`}
      style={{ zIndex: 1055 }}
    >
      <div
        className={`toast show ${bgClass} border-0 shadow`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body fs-6 fw-semibold">{message}</div>
      </div>
    </div>
  );
}
