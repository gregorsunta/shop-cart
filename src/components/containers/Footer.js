import React from 'react';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../styles/variables';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${LAYOUT.SIZE_5};
  background-color: ${PRIMARY.GRAY_8};

  color: ${SECONDARY.TEAL_1};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © gregorsunta</p>
    </StyledFooter>
  );
};

export default Footer;
