import React from 'react';

const BodyContainer = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen min-w-full">
      {children}
    </div>
  );
};

export default BodyContainer;
