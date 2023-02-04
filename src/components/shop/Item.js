import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../styles/variables';
import Button from '../common/Button';

const StyledContainer = styled.div`
  // box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;

  box-shadow: 0px 0px 3px ${PRIMARY.GRAY_3};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02, 1.02);
  }
`;
const StyledImg = styled.img`
  max-width: 100%;
`;
const StyledPrice = styled.p`
  font-weight: 500;
  color: ${PRIMARY.GRAY_7};
`;

const Item = ({ item }) => {
  return (
    <StyledContainer>
      <StyledImg src={item.image} alt="" />
      <p>{item.name}</p>
      <StyledPrice>{item.price}€</StyledPrice>
      <Button title={'Add to cart'} />
    </StyledContainer>
  );
};

export default Item;
