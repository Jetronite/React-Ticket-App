export const USERS_KEY = "ticketapp_users";
export const SESSION_KEY = "ticketapp_session";

export function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

export function setSession(email) {
  localStorage.setItem(SESSION_KEY, email);
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function validatePassword(password) {
  return password && password.length >= 6;
}

export function validateName(name) {
  return name && name.trim().length >= 2;
}

export function signup(name, email, password) {
  const users = getUsers();

  if (!validateName(name)) return { success: false, message: "Name is too short." };
  if (!validateEmail(email)) return { success: false, message: "Invalid email address." };
  if (!validatePassword(password)) return { success: false, message: "Password must be at least 6 characters." };

  const existing = users.find(u => u.email === email);
  if (existing) return { success: false, message: "User already exists." };

  users.push({ name, email, password });
  saveUsers(users);
  setSession(email);

  return { success: true, message: "Account created successfully!" };
}

export function login(email, password) {
  const users = getUsers();

  if (!validateEmail(email)) return { success: false, message: "Invalid email format." };
  if (!validatePassword(password)) return { success: false, message: "Password must be at least 6 characters." };

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { success: false, message: "Invalid email or password." };

  setSession(email);
  return { success: true, message: "Login successful!" };
}

export function requireAuth() {
  const session = getSession();
  return !!session; // true if logged in, false if not
}

// src/utils/auth.js

export function logout() {
  // Clear session key
  localStorage.removeItem("ticketapp_session");
  // Redirect to login
  window.location.href = "/auth/login";
}
