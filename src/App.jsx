import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChildHome from './pages/ChildHome';
import SeniorHome from './pages/SeniorHome';
import SOSCountdown from './pages/SOSCountdown';
import ParentDashboard from './pages/ParentDashboard';
import MapMonitor from './pages/MapMonitor';
import GeofenceSetup from './pages/GeofenceSetup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/child" element={<ChildHome />} />
        <Route path="/senior" element={<SeniorHome />} />
        <Route path="/sos" element={<SOSCountdown />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/map" element={<MapMonitor />} />
        <Route path="/geofence" element={<GeofenceSetup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
