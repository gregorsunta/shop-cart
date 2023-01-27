import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { PRIMARY, LAYOUT, SECONDARY } from '../../../styles/variables';
import Button from '../../common/Button';

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${PRIMARY.GRAY_8};
  width: 100vw;

  display: flex;
  justify-content: center;

  padding: ${LAYOUT.SIZE_5};
`;
const StyledDiv = styled.div`
  display: flex;
  width: 880px;
  justify-content: space-between;

  height: min-content;
`;
const StyledButtons = styled.div`
  display: flex;
  gap: ${LAYOUT.SIZE_6};
  align-items: stretch;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <Logo />
        <StyledButtons>
          <Button title={'home'} page={'/'} />
          <Button title={'shop'} page={'/shop'} />
        </StyledButtons>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
