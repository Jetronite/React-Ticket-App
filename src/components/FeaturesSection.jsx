import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  const features = [
    {
      icon: "bi-card-checklist",
      title: "Simple Ticketing",
      description: "Create and manage support tickets easily with a clean interface.",
    },
    {
      icon: "bi-lock-fill",
      title: "Secure Sessions",
      description: "Simulated authentication keeps your session safe and persistent.",
    },
    {
      icon: "bi-bar-chart-fill",
      title: "Smart Dashboard",
      description: "Visualize open, closed, and in-progress tickets at a glance.",
    },
    {
      icon: "bi-phone",
      title: "Fully Responsive",
      description: "Use the app seamlessly on mobile, tablet, or desktop devices.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose TicketApp?</h2>
          <p className="text-muted">Everything you need to manage tickets efficiently.</p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
