import React from 'react';

const Button = ({ title, handleClick, styleClasses }) => {
  return (
    <button className={styleClasses} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
