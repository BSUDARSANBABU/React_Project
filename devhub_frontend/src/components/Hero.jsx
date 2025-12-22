
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            We Build <span>Scalable Software</span> for Your Business
          </h1>

          <p>
            We design and develop high-quality web, mobile, and enterprise
            software solutions for startups and enterprises worldwide.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/hero-illustration.webp"
            alt="Software Development Illustration"
          />
        </div>
      </div>
    </section>
  );
}
