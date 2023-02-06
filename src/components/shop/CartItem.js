import React from 'react';
import styled from 'styled-components';
import { PRIMARY, LAYOUT, SECONDARY } from '../../styles/variables';
import Button from '../common/Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  aspect-ratio: 1/1.4;
  height: 50px;
  // padding: ${LAYOUT.SIZE_4};
  box-shadow: 0px 0px 3px ${PRIMARY.GRAY_3};
  transition: background-color 0.2s;
`;
const StyledImg = styled.img`
  max-height: 100%;
`;
const StyledPrice = styled.p`
  font-weight: 500;
  color: ${PRIMARY.GRAY_7};
`;

const CartItem = ({
  item,
  addItem,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
}) => {
  return (
    <StyledContainer>
      <StyledImg src={item.image} alt="" />
      <p>{item.name}</p>
      <StyledPrice>{item.price}€</StyledPrice>
      <Button
        title={'-'}
        handleClick={(e) => decrementQuantity(item.id, item.quantity)}
      />
      <input
        type="number"
        defaultValue={item.quantity}
        onChange={(e) => {
          setQuantity(item.id, e.target.value);
        }}
      />
      <Button
        title={'+'}
        handleClick={(e) => incrementQuantity(item.id, item.quantity)}
      />
    </StyledContainer>
  );
};

export default CartItem;
