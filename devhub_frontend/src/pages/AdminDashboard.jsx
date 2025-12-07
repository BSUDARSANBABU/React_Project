// devhub_frontend/src/pages/AdminDashboard.js

import React from 'react';
import { useAuth } from '../context/AuthContext'; 

// This URL must match your running Django backend URL
const DJANGO_ADMIN_URL = 'http://localhost:8000/admin/';

const AdminDashboard = () => {
  const { logout } = useAuth();

  const handleAdminRedirect = () => {
    // Redirect the user to the Django Admin portal
    window.location.href = DJANGO_ADMIN_URL;
  };

  return (
    <div className="admin-dashboard">
      <h2>🛠️ Dynamic Content Manager</h2>
      <p>
        Welcome, Administrator. All dynamic content (Projects, Developers, Resources) is managed directly 
        through the Django Admin portal for maximum control and ease of use.
      </p>

      <div className="admin-actions">
        <button onClick={handleAdminRedirect} className="primary-btn">
          Go to Django Admin Portal
        </button>
        <button onClick={logout} className="secondary-btn">
          Logout
        </button>
      </div>

      <p className="note">
        **NOTE:** You will need to log in separately to the Django Admin portal for content updates. 
        Logging out here only logs you out of the React site's protected route.
      </p>
    </div>
  );
};

export default AdminDashboard;