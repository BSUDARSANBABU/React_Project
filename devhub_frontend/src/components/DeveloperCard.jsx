

export default function DeveloperCard({ developer }) {
  return (
    <div className="developer-card">
      <img
        src={developer.photo}
        alt={developer.name}
        className="developer-photo"
      />

      <h3>{developer.name}</h3>
      <p className="role">{developer.role}</p>

      <p className="bio">{developer.bio}</p>
    </div>
  );
}
