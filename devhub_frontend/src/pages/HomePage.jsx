import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import DeveloperCard from "../components/DeveloperCard";

import { getServices } from "../services/serviceApi";
import { getProjects } from "../services/projectApi";
import { getDevelopers } from "../services/developerApi";


export default function HomePage() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    getServices().then(setServices);
    getProjects().then(setProjects);
    getDevelopers().then(setDevelopers);
  }, []);

  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <div className="container">
          <h2>Our Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="developers">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="subtitle">
            Experienced developers building scalable software.
          </p>

          <div className="developers-grid">
            {developers.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
