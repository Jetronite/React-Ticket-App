import React, { useState } from "react";
import { signup } from "../utils/auth.js";
import { showToast } from "../utils/toast.jsx";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { success, message } = signup(form.name, form.email, form.password);

    if (success) {
      showToast(message, "success");
      setTimeout(() => {
        window.location.href = "/auth/login"; // redirect after success
      }, 1500);
    } else {
      showToast(message, "error");
    }

    setLoading(false);
  }

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4 fw-bold">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 fw-semibold"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
      <p className="text-center mt-3">
        Already have an account?{" "}
        <a href="/auth/login" className="text-decoration-none">
          Login
        </a>
      </p>
    </div>
  );
}

