// devhub_frontend/src/pages/AdminLoginPage.js (or .jsx)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Conceptual login check
    const success = login(username, password);

    if (success) {
      navigate('/admin-dashboard');
    } else {
      setError('Invalid credentials. (Hint: Use admin/password123)');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>🔒 Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
    </div>
  );
};

// VITAL FIX: This line provides the required default export
export default AdminLoginPage;