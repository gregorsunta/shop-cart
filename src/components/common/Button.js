import React from 'react';

const Button = ({ title, handleClick, styleClasses, children }) => {
  return (
    <button className={styleClasses} onClick={handleClick}>
      {title}
      {children}
    </button>
  );
};

export default Button;
