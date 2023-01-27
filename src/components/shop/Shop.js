import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  height: 100vh;
`;
const StyledBackground = styled.img`
  width: 100vw;
`;

const Shop = () => {
  return (
    <StyledMain>
      <StyledBackground />
    </StyledMain>
  );
};

export default Shop;
