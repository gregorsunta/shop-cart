import React from 'react';
import styled from 'styled-components';
import Background from './background.jpg';

const StyledMain = styled.div`
  height: 100vh;
  overflow: clip;
`;
const StyledBackground = styled.img`
  width: 100vw;
`;

const Home = () => {
  return (
    <StyledMain>
      <StyledBackground src={Background} alt="" />
    </StyledMain>
  );
};

export default Home;
