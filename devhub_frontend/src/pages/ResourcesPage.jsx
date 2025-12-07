// src/pages/ResourcesPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';


const API_URL = 'http://localhost:8000/api/resources/';

const CATEGORY_MAP = {
  BLOG: 'Blogs',
  GUIDE: 'Guides',
  TOOL: 'Calculators & Tools',
  GLOSSARY: 'Glossary',
};

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  
  // Get the current category from the URL query parameter (e.g., ?category=BLOG)
  const currentCategoryKey = searchParams.get('category') || 'ALL'; 

  useEffect(() => {
    setLoading(true);
    let url = API_URL;

    // Filter the API call based on the category if it's not 'ALL'
    if (currentCategoryKey !== 'ALL') {
      url = `${API_URL}?category=${currentCategoryKey}`;
    }

    axios.get(url)
      .then(response => {
        setResources(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching resources:", err);
        setError("Failed to load resources. Check API connection.");
        setLoading(false);
      });
  }, [currentCategoryKey]); // Re-fetch whenever the category changes

  const displayTitle = CATEGORY_MAP[currentCategoryKey] || 'All Resources & Content';
  
  return (
    <section className="resources-section">
      <div className="resources-header">
        <h2>📚 {displayTitle}</h2>
        <p>Your centralized hub for developer insights, guides, and professional tools.</p>
      </div>
      
      <div className="resource-navigation">
        {Object.entries(CATEGORY_MAP).map(([key, value]) => (
          <Link 
            key={key} 
            to={`/resources?category=${key}`}
            className={`nav-link ${currentCategoryKey === key ? 'active' : ''}`}
          >
            {value}
          </Link>
        ))}
         <Link 
            to={`/resources`}
            className={`nav-link ${currentCategoryKey === 'ALL' ? 'active' : ''}`}
          >
            All
          </Link>
      </div>

      <div className="resource-content">
        {loading && <div className="loading-state">Loading resources...</div>}
        {error && <div className="error-state">{error}</div>}
        
        {!loading && resources.length === 0 && (
          <div className="no-results">
            No {displayTitle} found yet. Check back soon!
          </div>
        )}

        <div className="resource-grid">
          {resources.map(resource => (
            <div key={resource.id} className="resource-card">
              <span className={`card-category tag-${resource.category.toLowerCase()}`}>
                {CATEGORY_MAP[resource.category]}
              </span>
              <h3>{resource.title}</h3>
              <p className="resource-excerpt">
                {resource.content.substring(0, 150)}...
              </p>
              <div className="card-footer">
                <span className="author-info">By **{resource.author_name || 'Admin'}**</span>
                <span className="date-info">
                  {new Date(resource.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;