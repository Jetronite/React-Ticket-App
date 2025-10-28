function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2 fw-bold">TicketApp</p>

        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <a href="#features" className="text-white text-decoration-none small">Features</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#login" className="text-white text-decoration-none small">Login</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#signup" className="text-white text-decoration-none small">Sign Up</a>
          </li>
        </ul>

        <p className="text-muted small mb-0">
          © {currentYear} TicketApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
