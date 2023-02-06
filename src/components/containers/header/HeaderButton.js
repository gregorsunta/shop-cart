import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/components/HeaderButton.module.css';

const Button = ({ id, title, link, handleClick }) => {
  return (
    <NavLink
      key={id}
      to={link}
      onClick={handleClick}
      className={({ isActive }) =>
        isActive
          ? `${styles.container} ${styles.active}`
          : `${styles.container}`
      }
    >
      <p>{title}</p>
    </NavLink>
  );
};

export default Button;
