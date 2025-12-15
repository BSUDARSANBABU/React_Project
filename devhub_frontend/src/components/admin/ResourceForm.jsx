// src/components/admin/ResourceForm.js

import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/resources/';

const ResourceForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'BLOG', // Default category
        author: 'Admin',
    });
    const [message, setMessage] = useState('');
    const categories = ['BLOG', 'GUIDE', 'TOOL', 'GLOSSARY'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Submitting...');

        try {
            const response = await axios.post(API_URL, formData);
            setMessage(`Success! Resource "${response.data.title}" created.`);
            setFormData({ title: '', content: '', category: 'BLOG', author: 'Admin' });
        } catch (error) {
            console.error("Error creating resource:", error);
            setMessage(`Error: Failed to create resource. Check console. (Status: ${error.response?.status})`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="admin-form">
            <h3>Add New Resource (Blog, Guide, etc.)</h3>
            
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />

            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0) + cat.slice(1).toLowerCase()}</option>
                ))}
            </select>

            <label>Content Excerpt/Summary</label>
            <textarea name="content" value={formData.content} onChange={handleChange} required />
            
            <label>Author</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} required />
            
            <button type="submit" className="primary-btn">Create Resource</button>
            {message && <p className="form-message">{message}</p>}
        </form>
    );
};

export default ResourceForm;