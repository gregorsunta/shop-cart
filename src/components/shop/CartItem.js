import React, { useRef } from 'react';
import styles from '../../styles/components/CartItem.module.css';

const CartItem = ({ item, addItem, setQuantity }) => {
  const { id, name, price, image, quantity } = item;
  const inputEl = useRef(null);
  const changeQuantity = (e) => {
    setQuantity(id, e.target.value);
  };
  const incrementQuantity = (id, prevQuantity) => {
    inputEl.current.value = Number(quantity) + 1;
    setQuantity(id, Number(prevQuantity) + 1);
  };
  const decrementQuantity = (id, prevQuantity) => {
    inputEl.current.value = Number(quantity) - 1;
    setQuantity(id, Number(prevQuantity) - 1);
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="" />
      <p>{name}</p>
      <p className={styles.price}>{price}€</p>
      <button onClick={(e) => decrementQuantity(id, quantity)}>-</button>
      <input
        ref={inputEl}
        type="number"
        defaultValue={item.quantity}
        onChange={changeQuantity}
      />
      <button onClick={(e) => incrementQuantity(id, quantity)}>+</button>
    </div>
  );
};

export default CartItem;
