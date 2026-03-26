import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ allowedRole }) {
  const { userRole } = useAuth();

  if (!userRole) {
    // Guest accessing a protected route -> redirect to the relevant login page
    return <Navigate to={`/login/${allowedRole}`} replace />;
  }

  if (userRole !== allowedRole) {
    // Logged in as X but trying to access Y -> redirect to X's dashboard
    return <Navigate to={`/${userRole}`} replace />;
  }

  // Authorized
  return <Outlet />;
}
