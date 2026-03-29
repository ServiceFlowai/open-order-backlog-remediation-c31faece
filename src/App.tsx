import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderDetailPage from './pages/OrderDetailPage';
import TaskManagementPage from './pages/TaskManagementPage';

function App() {
  return (
    <Routes>
      <Route path="/order/:orderId" element={<OrderDetailPage />} />
      <Route path="/tasks" element={<TaskManagementPage />} />
    </Routes>
  );
}

export default App;