import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/Button.module.css';

const Button = ({ title, link, handleClick }) => {
  return (
    <>
      {link ? (
        <NavLink className={styles.container} to={link}>
          <p>{title}</p>
        </NavLink>
      ) : (
        <p
          className={styles.container}
          onClick={handleClick ? handleClick : undefined}
        >
          {title}
        </p>
      )}
    </>
  );
};

export default Button;
