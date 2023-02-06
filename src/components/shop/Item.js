import React from 'react';
import styled from 'styled-components';
import { PRIMARY, LAYOUT, SECONDARY } from '../../styles/variables';
import Button from '../common/Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  aspect-ratio: 1/1.4;

  padding: ${LAYOUT.SIZE_6};
  box-shadow: 0px 0px 3px ${PRIMARY.GRAY_3};
  transition: background-color 0.2s;
`;
const StyledImg = styled.img`
  max-width: 100%;
`;
const StyledPrice = styled.p`
  font-weight: 500;
  color: ${PRIMARY.GRAY_7};
`;

const Item = ({ item, addItem }) => {
  return (
    <StyledContainer>
      <StyledImg src={item.image} alt="" />
      <p>{item.name}</p>
      <StyledPrice>{item.price}€</StyledPrice>
      <Button
        title={'Add to cart'}
        handleClick={addItem?.bind(this, item.id)}
      />
    </StyledContainer>
  );
};

export default Item;
