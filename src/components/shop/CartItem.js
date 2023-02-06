import React, { useRef } from 'react';
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

const CartItem = ({ item, addItem, setQuantity }) => {
  const { id, name, price, image, quantity } = item;
  const inputEl = useRef(null);
  const changeQuantity = (e) => {
    setQuantity(id, e.target.value);
  };
  const incrementQuantity = (id, prevQuantity) => {
    inputEl.current.value = quantity + 1;
    setQuantity(id, Number(prevQuantity) + 1);
  };
  const decrementQuantity = (id, prevQuantity) => {
    inputEl.current.value = quantity - 1;
    setQuantity(id, Number(prevQuantity) - 1);
  };
  return (
    <StyledContainer>
      <StyledImg src={image} alt="" />
      <p>{name}</p>
      <StyledPrice>{price}€</StyledPrice>
      <button onClick={(e) => decrementQuantity(id, quantity)}>-</button>
      <input
        ref={inputEl}
        type="number"
        defaultValue={item.quantity}
        onChange={changeQuantity}
      />
      <button onClick={(e) => incrementQuantity(id, quantity)}>+</button>
    </StyledContainer>
  );
};

export default CartItem;
