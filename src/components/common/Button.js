import React from 'react';

const Button = ({ title, handleClick, styles }) => {
  return (
    <button className={styles.container} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
