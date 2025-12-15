// src/pages/AdminDashboard.js (UPDATED with new imports and routes)

import React from 'react';
import { useAuth } from '../context/AuthContext';
// VITAL: Use Routes and Route from 'react-router-dom'
import { Routes, Route, Link, Outlet } from 'react-router-dom'; 
// src/pages/AdminDashboard.jsx

import AddProjectForm from "../components/admin/AddProjectForm.jsx";
import AddDeveloperForm from "../components/admin/AddDevelopersForm.jsx"; 
import AddResourceForm from "../components/admin/AddResourceForm.jsx";   


const AdminHome = () => (
    <div className="admin-home-view">
        <h2>Welcome to the Content Management System</h2>
        <p>Use the navigation panel on the left to add, modify, or delete content across the site.</p>
        <div className="admin-quick-links">
            <Link to="add-project" className="quick-link-btn primary-btn">Add New Project</Link>
            <Link to="add-developer" className="quick-link-btn secondary-btn">Add New Developer</Link>
            <Link to="add-resource" className="quick-link-btn primary-btn">Add New Resource</Link>
        </div>
    </div>
);


const AdminDashboard = () => {
    const { logout } = useAuth();
    
    return (
        <div className="admin-layout">
            
            {/* Admin Sidebar Navigation */}
            <nav className="admin-sidebar">
                <h3>Admin Menu</h3>
                <Link to="/admin/dashboard" className="admin-nav-item">Dashboard Home</Link>
                
                <h4>Projects</h4>
                <Link to="add-project" className="admin-nav-item">Add Project</Link>
                <Link to="manage-projects" className="admin-nav-item">Manage Projects (Edit/Delete)</Link>

                <h4>Developers</h4>
                <Link to="add-developer" className="admin-nav-item">Add Developer</Link>
                <Link to="manage-developers" className="admin-nav-item">Manage Developers</Link>
                
                <h4>Resources</h4>
                <Link to="add-resource" className="admin-nav-item">Add Resource</Link>
                <Link to="manage-resources" className="admin-nav-item">Manage Resources</Link>
                
                <button onClick={logout} className="logout-btn">
                    Logout
                </button>
            </nav>

            {/* Admin Content Area (Forms are displayed here based on route) */}
            <div className="admin-content">
                {/* Routes render the specific component/form when a sidebar link is clicked */}
                <Routes>
                    {/* Index route shows the Home overview */}
                    <Route index element={<AdminHome />} /> 
                    
                    {/* Project Management */}
                    <Route path="add-project" element={<AddProjectForm />} />
                    
                    {/* Developer Management (Now uses the new component) */}
                    <Route path="add-developer" element={<AddDeveloperForm />} />
                    
                    {/* Resource Management (Now uses the new component) */}
                    <Route path="add-resource" element={<AddResourceForm />} />

                    {/* Placeholder routes for Manage/Edit pages (replace with real components later) */}
                    <Route path="manage-projects" element={<h3>Manage Projects Placeholder</h3>} />
                    <Route path="manage-developers" element={<h3>Manage Developers Placeholder</h3>} />
                    <Route path="manage-resources" element={<h3>Manage Resources Placeholder</h3>} />
                </Routes>
                {/* <Outlet /> is typically not needed here since Routes covers the entire content area */}
            </div>
        </div>
    );
};

export default AdminDashboard;