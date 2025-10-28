// src/logic/tickets.js

export const TICKETS_KEY = "ticketapp_tickets";

// Get all tickets from localStorage
export function getTickets() {
  const data = localStorage.getItem(TICKETS_KEY);
  return data ? JSON.parse(data) : [];
}

// Save tickets back to localStorage
export function saveTickets(tickets) {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

// Create a new ticket
export function createTicket(title, description, createdBy) {
  if (!title.trim()) return { success: false, message: "Title cannot be empty." };

  const tickets = getTickets();
  const newTicket = {
    id: Date.now(),
    title,
    description,
    createdBy,
    status: "open",
    createdAt: new Date().toISOString(),
  };

  tickets.push(newTicket);
  saveTickets(tickets);

  return { success: true, message: "Ticket created successfully!", ticket: newTicket };
}

// Update ticket status
export function updateTicketStatus(id, newStatus) {
  const tickets = getTickets();
  const ticket = tickets.find(t => t.id === id);
  if (!ticket) return { success: false, message: "Ticket not found." };

  ticket.status = newStatus;
  saveTickets(tickets);

  return { success: true, message: "Ticket status updated." };
}

// Delete a ticket
export function deleteTicket(id) {
  let tickets = getTickets();
  tickets = tickets.filter(t => t.id !== id);
  saveTickets(tickets);

  return { success: true, message: "Ticket deleted successfully." };
}
