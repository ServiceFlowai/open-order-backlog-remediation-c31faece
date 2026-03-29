import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Open Orders', value: 30 },
  { name: 'Open Value', value: 2337308.70 },
  { name: 'Partially Open Orders', value: 15 },
  { name: 'Avg Days Open', value: 10 }
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav>
          <Link to="/remediation-queue" className="text-blue-600 hover:underline">Remediation Queue</Link>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card key={index} className="shadow">
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;