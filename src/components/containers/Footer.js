import React from 'react';
import styled from 'styled-components';
import { LAYOUT } from '../../styles/variables';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${LAYOUT.SPACING3};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © gregorsunta</p>
    </StyledFooter>
  );
};

export default Footer;
