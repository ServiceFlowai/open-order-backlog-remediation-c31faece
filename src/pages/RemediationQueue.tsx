import React, { useState } from 'react';

const mockOrders = [
  { orderNumber: '001', customer: 'Customer A', orderValue: 10000, status: 'Fully Open', daysOpen: 5, priorityScore: 90, rootCauseTag: 'Delay', assignedAgent: 'Agent 1', lastActivity: '2023-10-01' },
  { orderNumber: '002', customer: 'Customer B', orderValue: 5000, status: 'Partially Open', daysOpen: 10, priorityScore: 80, rootCauseTag: 'Billing', assignedAgent: 'Agent 2', lastActivity: '2023-10-02' },
  // More mock data...
];

const RemediationQueue: React.FC = () => {
  const [orders, setOrders] = useState(mockOrders);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Remediation Queue</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Order#</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Order Value</th>
            <th className="py-2">Status</th>
            <th className="py-2">Days Open</th>
            <th className="py-2">Priority Score</th>
            <th className="py-2">Root Cause Tag</th>
            <th className="py-2">Assigned Agent</th>
            <th className="py-2">Last Activity</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{order.orderNumber}</td>
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.orderValue}</td>
              <td className="py-2">{order.status}</td>
              <td className="py-2">{order.daysOpen}</td>
              <td className="py-2">{order.priorityScore}</td>
              <td className="py-2">{order.rootCauseTag}</td>
              <td className="py-2">{order.assignedAgent}</td>
              <td className="py-2">{order.lastActivity}</td>
              <td className="py-2">
                <button className="text-blue-600 hover:underline">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemediationQueue;