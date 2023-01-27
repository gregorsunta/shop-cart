import React from 'react';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../../styles/variables';

const StyledLogo = styled.div`
  color: ${SECONDARY.TEAL_2};
  font-size: ${LAYOUT.SIZE_7};
`;

const Logo = () => {
  return <StyledLogo>BYTES</StyledLogo>;
};

export default Logo;
