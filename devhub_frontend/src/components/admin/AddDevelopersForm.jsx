// src/components/admin/AddDeveloperForm.js

import React, { useState } from 'react';
import axios from 'axios';

// IMPORTANT: Update this URL to match your Django API endpoint for Developers
const API_URL = 'http://localhost:8000/api/developers/';

const AddDevelopersForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    github_link: '',
    linkedin_link: '',
    profile_image: null,
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    // Files must be handled separately
    setFormData({ ...formData, profile_image: e.target.files[0] });
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
      // API POST call to create the developer
      const response = await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${token}` // Include JWT here
        },
      });
      
      if (response.status === 201) {
        setStatus(`Developer "${response.data.name}" added successfully!`);
        // Reset form
        setFormData({ name: '', title: '', bio: '', github_link: '', linkedin_link: '', profile_image: null });
        document.getElementById('profile_image').value = ''; // Reset file input
      }
    } catch (err) {
      console.error("Submission error:", err.response ? err.response.data : err);
      setError('Failed to add developer. Check API connectivity and authorization.');
      setStatus('Error');
    }
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Developer Profile</h3>
      <form onSubmit={handleSubmit} className="crud-form">
        <label>Full Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Job Title/Role:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Bio/Short Summary:</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} required />
        
        <label>GitHub Link (Optional):</label>
        <input type="url" name="github_link" value={formData.github_link} onChange={handleChange} />
        
        <label>LinkedIn Link (Optional):</label>
        <input type="url" name="linkedin_link" value={formData.linkedin_link} onChange={handleChange} />

        <label>Profile Image:</label>
        <input type="file" id="profile_image" name="profile_image" onChange={handleFileChange} accept="image/*" />

        <button type="submit" className="primary-btn" disabled={status === 'Submitting...'}>
          {status === 'Submitting...' ? 'Adding Developer...' : 'Add Developer'}
        </button>
        
        {status && status !== 'Submitting...' && <p className="success-message">{status}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddDevelopersForm;