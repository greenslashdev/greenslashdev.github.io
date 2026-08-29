import React from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  href,
  className = '',
  ...props 
}) {
  const classes = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
