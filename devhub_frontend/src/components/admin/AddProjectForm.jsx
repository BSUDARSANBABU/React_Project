// src/components/admin/AddProjectForm.js

import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/projects/';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies_used: '',
    live_link: '',
    github_repo: '',
    is_featured: false,
    project_image: null, // For file uploads
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    // Files must be handled separately from other data
    setFormData({ ...formData, project_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setError('');

    // Use FormData for multipart/form-data when sending files
    const data = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    try {
      // In a real app, you would include the JWT Authorization header here
      const response = await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${token}` 
        },
      });
      
      if (response.status === 201) {
        setStatus(`Project "${response.data.title}" added successfully!`);
        // Reset form after successful submission
        setFormData({
            title: '', description: '', technologies_used: '',
            live_link: '', github_repo: '', is_featured: false, project_image: null,
        });
        document.getElementById('project_image').value = ''; // Reset file input
      }
    } catch (err) {
      console.error("Submission error:", err.response ? err.response.data : err);
      setError('Failed to add project. Check API and authorization.');
      setStatus('Error');
    }
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit} className="crud-form">
        {/* Title */}
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        {/* Description */}
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
        
        {/* Technologies Used */}
        <label>Technologies (Comma separated):</label>
        <input type="text" name="technologies_used" value={formData.technologies_used} onChange={handleChange} />

        {/* Live Link */}
        <label>Live Link (Optional):</label>
        <input type="url" name="live_link" value={formData.live_link} onChange={handleChange} />
        
        {/* GitHub Repo */}
        <label>GitHub Repository (Optional):</label>
        <input type="url" name="github_repo" value={formData.github_repo} onChange={handleChange} />

        {/* Project Image */}
        <label>Project Image:</label>
        <input type="file" id="project_image" name="project_image" onChange={handleFileChange} accept="image/*" />

        {/* Is Featured */}
        <label className="checkbox-label">
            <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleChange} />
            Mark as Featured
        </label>

        <button type="submit" className="primary-btn" disabled={status === 'Submitting...'}>
          {status === 'Submitting...' ? 'Adding Project...' : 'Add Project'}
        </button>
        
        {status && status !== 'Submitting...' && <p className="success-message">{status}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddProjectForm;