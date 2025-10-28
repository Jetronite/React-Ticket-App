function HeroSection() {
  return (
    <section className="bg-primary text-white position-relative overflow-hidden py-5">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "80vh" }}>
        {/* Decorative Circle */}
        <div
          className="position-absolute rounded-circle"
          style={{
            top: "10%",
            right: "-5%",
            width: "150px",
            height: "150px",
            background: "rgba(255,255,255,0.2)",
            opacity: "0.4",
          }}
          aria-hidden="true"
        ></div>

        {/* Hero Content */}
        <h1 className="display-4 fw-bold mb-3">Manage Your Tickets Easily</h1>
        <p className="lead mb-4">
          A unified platform to create, track, and resolve support tickets efficiently.
        </p>

        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="/auth/login" className="btn btn-outline-light btn-lg">
            Login
          </a>
          <a href="/auth/signup" className="btn btn-light btn-lg text-primary fw-semibold">
            Get Started
          </a>
        </div>
      </div>

      {/* Wavy Background */}
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute bottom-0 start-0 w-100"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,186.7C384,149,480,107,576,117.3C672,128,768,192,864,213.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default HeroSection;
