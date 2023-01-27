import React from 'react';
import styled from 'styled-components';
import {
  PRIMARY,
  SECONDARY,
  LAYOUT,
  FONTSTYLE,
} from '../../../styles/variables';

const StyledLogo = styled.div`
  ${FONTSTYLE.LOGO_LIGHT}
`;

const Logo = () => {
  return <StyledLogo>BYTES</StyledLogo>;
};

export default Logo;
