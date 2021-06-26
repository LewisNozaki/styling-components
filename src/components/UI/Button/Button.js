import React from 'react';
import './Button.css';

const Button = ( { type, onClick, children, disabled } )=> {
  return (
    <button 
      type={type} 
      className="button" 
      onClick={onClick}
      disabled={disabled}>
        {children}
    </button>
  );
};

export default Button;
