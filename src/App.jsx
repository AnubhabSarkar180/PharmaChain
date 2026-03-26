import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import DistributorPortal from './pages/DistributorPortal';
import ConsumerVerificationPortal from './pages/ConsumerVerificationPortal';

import ManufacturerLogin from './pages/auth/ManufacturerLogin';
import ManufacturerSignup from './pages/auth/ManufacturerSignup';
import DistributorLogin from './pages/auth/DistributorLogin';
import DistributorSignup from './pages/auth/DistributorSignup';
import ConsumerLogin from './pages/auth/ConsumerLogin';
import ConsumerSignup from './pages/auth/ConsumerSignup';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Core Portals - Protected */}
          <Route element={<ProtectedRoute allowedRole="manufacturer" />}>
            <Route path="/manufacturer" element={<ManufacturerDashboard />} />
          </Route>
          
          <Route element={<ProtectedRoute allowedRole="distributor" />}>
            <Route path="/distributor" element={<DistributorPortal />} />
          </Route>
          
          <Route element={<ProtectedRoute allowedRole="consumer" />}>
            <Route path="/consumer" element={<ConsumerVerificationPortal />} />
          </Route>
          
          {/* Authentication Routes - Unprotected */}
          <Route path="/login/manufacturer" element={<ManufacturerLogin />} />
          <Route path="/signup/manufacturer" element={<ManufacturerSignup />} />
          
          <Route path="/login/distributor" element={<DistributorLogin />} />
          <Route path="/signup/distributor" element={<DistributorSignup />} />
          
          <Route path="/login/consumer" element={<ConsumerLogin />} />
          <Route path="/signup/consumer" element={<ConsumerSignup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
