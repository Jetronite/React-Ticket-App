// src/components/StatsCard.jsx
import React from "react";

function StatsCard({ title, value, color }) {
  const colorClass = {
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  }[color] || "text-dark";

  return (
    <div className="card shadow-sm p-4 text-center">
      <h6 className="fw-semibold text-muted">{title}</h6>
      <p className={`fs-3 fw-bold ${colorClass}`}>{value}</p>
    </div>
  );
}

export default StatsCard;
