import React from 'react';
import styles from '../../styles/components/CartItem.module.css';

const CartTotal = ({ value }) => {
  return (
    <div>
      <p>Total Price: {value}€</p>
    </div>
  );
};

export default CartTotal;
