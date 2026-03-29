import React from 'react';

const AuditLogs = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Audit Logs</h1>
      <div className="mt-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">User</th>
              <th className="py-2">Action</th>
              <th className="py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">admin@example.local</td>
              <td className="py-2">Updated Order</td>
              <td className="py-2">2023-10-01 12:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;