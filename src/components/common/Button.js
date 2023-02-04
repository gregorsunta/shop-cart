import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../styles/variables';

const StyledButton = styled.button`
  font-size: ${LAYOUT.SIZE_5};
  color: ${PRIMARY.GRAY_9};
  background-color: ${SECONDARY.YELLOW_6};
  text-transform: uppercase;
  border: none;
  padding: ${LAYOUT.SIZE_3};
  transition: background-color 0.1s;
  border: solid ${'2px'} ${PRIMARY.GRAY_9};
  &:hover {
    background-color: ${SECONDARY.YELLOW_2};
    border: solid ${'2px'} ${PRIMARY.GRAY_9};
  }
  &:active {
    background-color: ${PRIMARY.GRAY_3};
  }
`;
const Button = ({ title, link }) => {
  return (
    <>
      {link && (
        <NavLink to={link}>
          <StyledButton>{title}</StyledButton>
        </NavLink>
      )}
      {!link && <StyledButton>{title}</StyledButton>}
    </>
  );
};

export default Button;
