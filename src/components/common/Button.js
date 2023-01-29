import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../styles/variables';

const StyledButton = styled.button`
  font-size: ${LAYOUT.SIZE_5};
  color: ${PRIMARY.GRAY_9};
  background-color: ${SECONDARY.YELLOW_5};
  text-transform: uppercase;
  border: none;
  padding: ${LAYOUT.SIZE_3};
  transition: background-color 0.1s;
  border: solid ${'2px'} ${PRIMARY.GRAY_9};
  &:hover {
    background-color: ${SECONDARY.YELLOW_2};
    border: solid ${'2px'} ${PRIMARY.GRAY_9};
  }
`;
const Button = ({ title, link }) => {
  return (
    <>
      {link && (
        <Link to={link}>
          <StyledButton>{title}</StyledButton>
        </Link>
      )}
      {!link && <StyledButton>{title}</StyledButton>}
    </>
  );
};

export default Button;
