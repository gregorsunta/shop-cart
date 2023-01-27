import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../styles/variables';

const StyledButton = styled.button`
  font-size: ${LAYOUT.SIZE_5};
  color: ${SECONDARY.TEAL_1};
  background-color: transparent;
  text-transform: uppercase;
  height: 100%;
  border: none;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.2, 1.2);
    background-color: ${PRIMARY.GRAY_7};
  }
`;
const Button = ({ title, page }) => {
  return (
    <Link to={page}>
      <StyledButton>{title}</StyledButton>
    </Link>
  );
};

export default Button;
