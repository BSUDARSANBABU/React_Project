// src/pages/DevelopersPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Base URL for your Django backend
const API_URL = 'http://localhost:8000/api/developers/'; 
const BASE_BACKEND_URL = 'http://localhost:8000'; // Needed for serving media files

const DevelopersPage = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setDevelopers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching developers:", err);
        setError("Failed to load developer profiles. Check API connection.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-state">Loading Developer Profiles...</div>;
  if (error) return <div className="error-state">{error}</div>;

  return (
    <section className="developers-section">
      <div className="section-header">
        <h2>🧑‍💻 Our Dynamic Developer Team</h2>
        <p>Browse the profiles of the talented individuals driving innovation in IT.</p>
        <div className="stat-banner">
          <div className="stat-item">
            **{developers.length}+** <br/> Developers
          </div>
          <div className="stat-item">
            **4.8** <br/> Average Project Rating
          </div>
          <div className="stat-item">
            **30+** <br/> Technologies Covered
          </div>
        </div>
      </div>
      
      <div className="developers-grid">
        {developers.map(dev => (
          <div key={dev.id} className="developer-card">
            <div className="profile-image-container">
              {/* Ensure the image path is correct, handling cases where it might be relative */}
              <img 
                src={dev.profile_image ? `${BASE_BACKEND_URL}${dev.profile_image}` : 'placeholder.png'} 
                alt={dev.name} 
                className="profile-image"
              />
            </div>
            
            <div className="card-content">
              <h3>{dev.name}</h3>
              <p className="dev-title">{dev.title}</p>
              <p className="dev-bio">{dev.bio.substring(0, 120)}...</p>
              
              <div className="social-links">
                {dev.github_link && (
                  <a href={dev.github_link} target="_blank" rel="noopener noreferrer">
                    GitHub 
                  </a>
                )}
                {dev.linkedin_link && (
                  <a href={dev.linkedin_link} target="_blank" rel="noopener noreferrer">
                    LinkedIn
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

export default DevelopersPage;