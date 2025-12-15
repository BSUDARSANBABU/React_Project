// src/components/admin/DeveloperForm.js

import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/developers/';

const DeveloperForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        bio: '',
        github_url: '',
        linkedin_url: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Submitting...');

        try {
            const response = await axios.post(API_URL, formData);
            setMessage(`Success! Developer "${response.data.name}" added.`);
            setFormData({ name: '', title: '', bio: '', github_url: '', linkedin_url: '' });
        } catch (error) {
            console.error("Error creating developer:", error);
            setMessage(`Error: Failed to add developer. Check console. (Status: ${error.response?.status})`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="admin-form">
            <h3>Add New Developer Profile</h3>
            
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Title/Role</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />

            <label>Short Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} />
            
            <label>GitHub URL</label>
            <input type="url" name="github_url" value={formData.github_url} onChange={handleChange} />
            
            <label>LinkedIn URL</label>
            <input type="url" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
            
            <button type="submit" className="primary-btn">Add Developer</button>
            {message && <p className="form-message">{message}</p>}
        </form>
    );
};

export default DeveloperForm;