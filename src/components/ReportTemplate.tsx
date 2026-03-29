import React from 'react';

const ReportTemplate = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ReportTemplate;