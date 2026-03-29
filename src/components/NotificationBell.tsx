import React from 'react';
import { Bell } from 'lucide-react';

const NotificationBell = () => {
  return (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
    </div>
  );
};

export default NotificationBell;