import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BUTTONS } from '../../styles/variables';

const StyledButton = styled.button`
  ${BUTTONS.HEADER}
  border: none;
`;
const Button = ({ title, page }) => {
  return (
    <Link to={page}>
      <StyledButton>{title}</StyledButton>
    </Link>
  );
};

export default Button;
