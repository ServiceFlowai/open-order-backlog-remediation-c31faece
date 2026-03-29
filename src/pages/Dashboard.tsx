import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Open Orders</h2>
          <p className="text-2xl">30</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Open Value</h2>
          <p className="text-2xl">$2,337,308.70</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Partially Open Orders</h2>
          <p className="text-2xl">15</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;