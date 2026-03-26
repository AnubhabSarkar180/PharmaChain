import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import DistributorPortal from './pages/DistributorPortal';
import ConsumerVerificationPortal from './pages/ConsumerVerificationPortal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/manufacturer" element={<ManufacturerDashboard />} />
        <Route path="/distributor" element={<DistributorPortal />} />
        <Route path="/consumer" element={<ConsumerVerificationPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
