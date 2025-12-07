// devhub_frontend/src/App.jsx

import React from 'react';
// VITAL FIX: Navigate must be imported from react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; // Assumes you've created this
import { AuthProvider } from './context/AuthContext';    // Assumes you've created this

// Page Components
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import DevelopersPage from './pages/DevelopersPage';
import ResourcesPage from './pages/ResourcesPage';

// Admin Components 
import AdminLoginPage from './pages/AdminLoginPage'; // Assumes you've created this
import AdminDashboard from './pages/AdminDashboard'; // Assumes you've created this

function App() {
  return (
    // Wrap the entire application in the AuthProvider
    <AuthProvider>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            
            {/* Admin Login Route */}
            <Route path="/admin-login" element={<AdminLoginPage />} />

            {/* Protected Route */}
            {/* Access is guarded by the ProtectedRoute component */}
            <Route 
                path="/admin-dashboard" 
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                } 
            />
            
            {/* Redirect /admin to the login page */}
            {/* The Navigate component is now correctly imported and used */}
            <Route path="/admin" element={<Navigate to="/admin-login" replace />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;