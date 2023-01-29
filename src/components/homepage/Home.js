import React from 'react';
import styled from 'styled-components';
import Background from '../../images/background.jpg';
import Button from '../common/Button';

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

const Home = () => {
  return (
    <StyledMain>
      <Button title={'shop now'} link={'/shop'} />
    </StyledMain>
  );
};

export default Home;
