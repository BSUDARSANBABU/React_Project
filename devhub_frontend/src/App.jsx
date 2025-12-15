// devhub_frontend/src/App.jsx (UPDATED)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; 
import { AuthProvider } from './context/AuthContext';    

// Page Components
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import DevelopersPage from './pages/DevelopersPage';
import ResourcesPage from './pages/ResourcesPage';
import AdminLoginPage from './pages/AdminLoginPage'; 
import AdminDashboard from './pages/AdminDashboard'; 

function App() {
  return (
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

          
            <Route 
                path="/admin/*" 
                element={
                    <ProtectedRoute>
                        <AdminDashboard /> 
                    </ProtectedRoute>
                } 
            />
            
            {/* Fallback/Redirect */}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;