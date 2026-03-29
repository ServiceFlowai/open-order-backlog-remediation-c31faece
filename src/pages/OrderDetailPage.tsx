import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const { orderId } = useParams();
  // Mock data for demonstration
  const order = {
    orderId: orderId,
    status: 'Partially Open',
    customer: 'Acme Corp',
    orderValue: 123456.78,
    daysOpen: 15,
    actions: ['Assign', 'Create Task', 'Add Note', 'Trigger Billing Validation', 'Request Delivery Update']
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order #{order.orderId}</h1>
      <div className="mt-2">
        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">{order.status}</span>
      </div>
      <div className="mt-4">
        <h2 className="text-xl">Customer: {order.customer}</h2>
        <p>Order Value: ${order.orderValue.toFixed(2)}</p>
        <p>Days Open: {order.daysOpen}</p>
      </div>
      <div className="mt-4">
        {order.actions.map((action) => (
          <button key={action} className="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailPage;