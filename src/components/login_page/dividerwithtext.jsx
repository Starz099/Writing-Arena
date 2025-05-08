import React from 'react';

const DividerWithText = ({ text = 'OR', className = '' }) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500 text-sm font-medium">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default DividerWithText;