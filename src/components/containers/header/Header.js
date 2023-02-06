import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { PRIMARY, LAYOUT, SECONDARY } from '../../../styles/variables';
import HeaderButton from './HeaderButton';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${PRIMARY.GRAY_2};
  width: 100vw;

  display: flex;
  justify-content: center;
`;
const StyledContainer = styled.div`
  display: flex;
  width: 880px;
  justify-content: space-between;

  height: min-content;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

const Header = ({ buttons }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <StyledButtonsContainer>
          {buttons.map((btn) => (
            <HeaderButton
              key={btn.id}
              title={btn.name}
              link={btn.link}
              handleClick={btn.handleClick}
            />
          ))}
        </StyledButtonsContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
