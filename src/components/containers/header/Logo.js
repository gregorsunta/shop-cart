import React from 'react';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, LAYOUT } from '../../../styles/variables';
import LogoImg from '../../../images/logo.svg';

const StyledText = styled.p`
  color: ${SECONDARY.TEAL_9};
  font-size: ${LAYOUT.SIZE_6};
`;
const StyledImg = styled.img`
  height: 50px;
  transform: rotate(-90deg);
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = () => {
  return (
    <StyledLogo>
      <StyledText>BYTES</StyledText>
      <StyledImg src={LogoImg} />
    </StyledLogo>
  );
};

export default Logo;
