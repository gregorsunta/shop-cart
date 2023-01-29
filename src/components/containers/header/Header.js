import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { PRIMARY, LAYOUT, SECONDARY } from '../../../styles/variables';
import HeaderButtons from './HeaderButtons';

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${PRIMARY.GRAY_2};
  width: 100vw;

  display: flex;
  justify-content: center;

  // padding: ${LAYOUT.SIZE_5};
`;
const StyledContainer = styled.div`
  display: flex;
  width: 880px;
  justify-content: space-between;

  height: min-content;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <HeaderButtons />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
