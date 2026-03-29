import React from 'react';

const TaskManagementPage = () => {
  // Mock data for demonstration
  const tasks = [
    { id: 1, title: 'Review Order #123', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Validate Billing for Order #456', status: 'Pending', priority: 'Medium' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Tasks</h1>
      <div className="mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="border p-4 mb-2 rounded">
            <h2 className="text-xl">{task.title}</h2>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagementPage;