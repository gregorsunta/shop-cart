import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../../styles/variables';

const StyledButton = styled.button`
  font-size: ${LAYOUT.SIZE_5};
  color: ${PRIMARY.GRAY_9};
  background-color: transparent;
  text-transform: uppercase;
  height: 100%;
  border: none;
  width: ${LAYOUT.SIZE_8};
  transition: border-bottom 0.1s;
  &:hover {
    background-color: ${PRIMARY.GRAY_3};
    border-bottom: solid ${'3px'} ${PRIMARY.GRAY_9};
  }
`;
let ActiveStyle = {
  backgroundColor: `${PRIMARY.GRAY_3}`,
  borderBottom: `solid 3px ${PRIMARY.GRAY_5}`,
};
const Button = ({ id, title, link, handleClick }) => {
  return (
    <NavLink
      key={id}
      to={link}
      style={({ isActive }) => (isActive && link ? ActiveStyle : undefined)}
      onClick={handleClick}
    >
      <StyledButton>{title}</StyledButton>
    </NavLink>
  );
};

export default Button;
