// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAdminLoggedIn } = useAuth();
    
    if (!isAdminLoggedIn) {
        // Redirect non-authenticated users to the login page
        return <Navigate to="/admin-login" replace />;
    }

    return children;
};

export default ProtectedRoute;