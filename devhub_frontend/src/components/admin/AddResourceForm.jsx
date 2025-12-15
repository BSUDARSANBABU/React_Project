// src/components/admin/AddResourceForm.js

import React, { useState } from 'react';
import axios from 'axios';

// IMPORTANT: Update this URL to match your Django API endpoint for Resources
const API_URL = 'http://localhost:8000/api/resources/';

const AddResourceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'BLOG', // Default category
    content: '',
    author: '',
    publication_date: new Date().toISOString().slice(0, 10), // Default to today's date
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setError('');

    try {
      // API POST call to create the resource
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // Include JWT here
        },
      });
      
      if (response.status === 201) {
        setStatus(`Resource "${response.data.title}" added successfully!`);
        // Reset form (keep author and date for convenience)
        setFormData(prev => ({ 
            ...prev, 
            title: '', 
            content: '', 
        }));
      }
    } catch (err) {
      console.error("Submission error:", err.response ? err.response.data : err);
      setError('Failed to add resource. Check API connectivity and authorization.');
      setStatus('Error');
    }
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Resource (Blog/Guide/Tool)</h3>
      <form onSubmit={handleSubmit} className="crud-form">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="BLOG">Blog & Insights</option>
            <option value="GUIDE">Guide & Tutorial</option>
            <option value="TOOL">Calculator/Tool</option>
            <option value="GLOSSARY">Glossary Entry</option>
        </select>
        
        <label>Content (Full Text/HTML):</label>
        <textarea name="content" value={formData.content} onChange={handleChange} required />
        
        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        
        <label>Publication Date:</label>
        <input type="date" name="publication_date" value={formData.publication_date} onChange={handleChange} required />

        <button type="submit" className="primary-btn" disabled={status === 'Submitting...'}>
          {status === 'Submitting...' ? 'Adding Resource...' : 'Add Resource'}
        </button>
        
        {status && status !== 'Submitting...' && <p className="success-message">{status}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddResourceForm;