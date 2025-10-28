// src/components/FeatureCard.jsx
function FeatureCard({ icon, title, description }) {
  return (
    <div className="card border-0 shadow-sm h-100 text-center py-4">
      <div className="card-body">
        <div className="mb-3">
          <i className={`bi ${icon} text-primary fs-1`}></i>
        </div>
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted small">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;

