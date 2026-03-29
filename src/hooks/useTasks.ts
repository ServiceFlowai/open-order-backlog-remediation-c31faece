import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Mock fetching tasks
    setTasks([
      { id: 1, title: 'Review Order #123', status: 'In Progress', priority: 'High' },
      { id: 2, title: 'Validate Billing for Order #456', status: 'Pending', priority: 'Medium' }
    ]);
  }, []);

  return { tasks };
};