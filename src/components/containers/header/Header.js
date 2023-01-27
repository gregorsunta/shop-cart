import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { PRIMARY, LAYOUT, BUTTONS } from '../../../styles/variables';
import Button from '../../common/Button';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${LAYOUT.SPACING3};
  background-color: white;
  position: fixed;
  width: 100vw;
  opacity: 0.8;
`;
const StyledIcons = styled.div`
  display: flex;
  gap: ${LAYOUT.SPACING3};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledIcons>
        <Button title={'home'} page={'/'} />
        <Button title={'shop'} page={'/shop'} />
      </StyledIcons>
    </StyledHeader>
  );
};

export default Header;
