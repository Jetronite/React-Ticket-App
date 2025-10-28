// src/logic/toast.js
import React from "react";
import { createRoot } from "react-dom/client";
import Toast from "../components/Toast.jsx";

let toastRoot = null;
let hideTimeout = null;

export function showToast(message, type = "info") {
  // Create container once
  if (!toastRoot) {
    const container = document.createElement("div");
    container.id = "toast-root";
    document.body.appendChild(container);
    toastRoot = createRoot(container);
  }

  // Clear any running toast
  if (hideTimeout) clearTimeout(hideTimeout);

  // Render new toast
  toastRoot.render(<Toast message={message} type={type} />);

  // Auto-hide after 3 seconds
  hideTimeout = setTimeout(() => {
    toastRoot.render(null);
  }, 3000);
}
