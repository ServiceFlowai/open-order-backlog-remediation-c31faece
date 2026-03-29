import React from 'react';

const AuditLogEntry = ({ user, action, timestamp }: { user: string, action: string, timestamp: string }) => {
  return (
    <tr>
      <td className="py-2">{user}</td>
      <td className="py-2">{action}</td>
      <td className="py-2">{timestamp}</td>
    </tr>
  );
};

export default AuditLogEntry;