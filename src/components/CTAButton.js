import React from 'react';

const CTAButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default CTAButton; 