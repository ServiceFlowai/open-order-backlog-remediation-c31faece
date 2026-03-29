import React from 'react';
import { usePilotMode } from '../utils/pilotMode';

const Dashboard: React.FC = () => {
  const { isPilotMode, togglePilotMode } = usePilotMode();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={togglePilotMode} className="btn-toggle-pilot">
        {isPilotMode ? 'Disable Pilot Mode' : 'Enable Pilot Mode'}
      </button>
      <div className="kpi-cards">
        {/* KPI cards and other dashboard elements */}
      </div>
    </div>
  );
};

export default Dashboard;