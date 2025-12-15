import React from 'react';

const AppActionButton = ({ label, onClick, disabled }) => {
  return (
    <button 
      className="action-btn"
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default AppActionButton;