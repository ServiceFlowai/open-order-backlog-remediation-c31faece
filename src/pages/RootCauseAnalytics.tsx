import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Cause A', volume: 4000, value: 2400 },
  { name: 'Cause B', volume: 3000, value: 1398 },
  { name: 'Cause C', volume: 2000, value: 9800 },
  { name: 'Cause D', volume: 2780, value: 3908 },
  { name: 'Cause E', volume: 1890, value: 4800 },
];

const RootCauseAnalytics = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Root Cause Analytics</h1>
      <div className="mt-4">
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#8884d8" />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default RootCauseAnalytics;