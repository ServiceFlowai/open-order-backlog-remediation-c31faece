import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Feedback />
    </div>
  );
};

export default App;