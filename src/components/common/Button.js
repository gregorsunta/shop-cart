import React from 'react';

const Button = ({ isActive, title, handleClick, styles, children }) => {
  return (
    <button
      className={
        isActive ? `${styles.container} ${styles.active}` : styles.container
      }
      onClick={handleClick}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
