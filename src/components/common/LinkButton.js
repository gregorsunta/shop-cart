import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkButton = ({ id, title, link, handleClick, styleClass }) => {
  console.log(link);

  return (
    <NavLink
      key={id}
      to={link}
      onClick={handleClick}
      className={({ isActive }) =>
        isActive
          ? `${styleClass.container} ${styleClass.active}`
          : `${styleClass.container}`
      }
    >
      <p>{title}</p>
    </NavLink>
  );
};

export default LinkButton;
