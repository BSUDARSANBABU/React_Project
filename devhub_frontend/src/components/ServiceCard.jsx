

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={service.icon} alt={service.title} />
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}
