import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import RootCauseAnalytics from './pages/RootCauseAnalytics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/root-cause-analytics" element={<RootCauseAnalytics />} />
    </Routes>
  );
}

export default App;