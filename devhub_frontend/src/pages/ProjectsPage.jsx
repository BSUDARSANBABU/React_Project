// src/pages/ProjectsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/projects/';
const BASE_BACKEND_URL = 'http://localhost:8000'; 

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Check API connection.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-state">Loading Projects...</div>;
  if (error) return <div className="error-state">{error}</div>;

  return (
    <section className="projects-section">
      <div className="section-header">
        <h2>🛠️ IT Projects Showcase</h2>
        <p>Explore the innovative projects completed by our developer teams.</p>
        <div className="filter-bar">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Featured</button>
          <button className="filter-btn">Recent</button>
          <input type="text" placeholder="Search projects by technology..." className="project-search"/>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            {project.project_image && (
              <img 
                src={`${BASE_BACKEND_URL}${project.project_image}`} 
                alt={project.title} 
                className="project-image"
              />
            )}
            <div className="card-body">
                {project.is_featured && <span className="featured-tag">FEATURED</span>}
                <h3>{project.title}</h3>
                <p className="project-description">{project.description.substring(0, 150)}...</p>
                <div className="tech-stack-container">
                    **Tech:** {project.technologies_used.split(',').map((tech, index) => (
                        <span key={index} className="tech-tag">{tech.trim()}</span>
                    ))}
                </div>
                <div className="project-links">
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="link-live">
                      View Live ↗
                    </a>
                  )}
                  {project.github_repo && (
                    <a href={project.github_repo} target="_blank" rel="noopener noreferrer" className="link-github">
                      GitHub
                    </a>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;