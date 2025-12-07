// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// API endpoints for the latest content previews
const PROJECTS_API = 'http://localhost:8000/api/projects/';
const DEVELOPERS_API = 'http://localhost:8000/api/developers/';
const RESOURCES_API = 'http://localhost:8000/api/resources/';

const HomePage = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [featuredDevelopers, setFeaturedDevelopers] = useState([]);
  const [latestResources, setLatestResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch limited data for previews
    const fetchData = async () => {
      try {
        const [projectsRes, devsRes, resourcesRes] = await Promise.all([
          axios.get(`${PROJECTS_API}?is_featured=True`), // Assume Django filters for featured
          axios.get(`${DEVELOPERS_API}`), 
          axios.get(`${RESOURCES_API}`),
        ]);

        // Get top 3 items for display
        setLatestProjects(projectsRes.data.slice(0, 3));
        setFeaturedDevelopers(devsRes.data.slice(0, 3));
        setLatestResources(resourcesRes.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="homepage">
      
      {/* 1. Hero Section (Inspired by Zimyo's layout) */}
      <section className="hero-section">
        <div className="hero-text-content">
          <h1>New-Age IT Hub for Project & Talent Management</h1>
          <p>
            Simplify collaboration, showcase cutting-edge projects, and manage developer profiles dynamically 
            with our powerful React and Django platform.
          </p>
          <Link to="/projects" className="primary-btn hero-btn">
            Explore Projects
          </Link>
          <Link to="/developers" className="secondary-btn hero-btn">
            Meet the Team
          </Link>
        </div>
        <div className="hero-image-content">
            {/* Replace this with a suitable static image or SVG */}
            
        </div>
      </section>

      {loading ? (
        <div className="loading-state-home">Loading dynamic content...</div>
      ) : (
        <>
          {/* 2. Projects Preview Section */}
          <section className="preview-section projects-preview">
            <h2 className="section-title">✨ Featured Projects</h2>
            <div className="preview-grid">
              {latestProjects.map(p => (
                <div key={p.id} className="preview-card">
                  <h3>{p.title}</h3>
                  <p>{p.description.substring(0, 80)}...</p>
                  <Link to="/projects" className="preview-link">View Details →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Developer Preview Section */}
          <section className="preview-section developers-preview">
            <h2 className="section-title">👤 Our Top Developers</h2>
            <div className="preview-grid">
              {featuredDevelopers.map(d => (
                <div key={d.id} className="preview-card developer-card-home">
                  <h4>{d.name}</h4>
                  <p className="dev-title-home">{d.title}</p>
                  <Link to="/developers" className="preview-link">View Profile →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Resources Preview Section */}
          <section className="preview-section resources-preview">
            <h2 className="section-title">📰 Latest Resources</h2>
            <div className="preview-grid">
              {latestResources.map(r => (
                <div key={r.id} className="preview-card">
                  <h3>{r.title}</h3>
                  <p>{r.content.substring(0, 80)}...</p>
                  <Link to="/resources" className="preview-link">Read More →</Link>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;