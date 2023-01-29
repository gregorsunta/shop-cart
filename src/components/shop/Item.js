import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div``;

const Item = ({ item }) => {
  return (
    <StyledContainer>
      <img src={item.src} alt="" />
      <p>{item.name}</p>
    </StyledContainer>
  );
};

export default Item;
