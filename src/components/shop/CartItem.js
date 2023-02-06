import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/components/CartItem.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';

const CartItem = ({ item, setQuantity }) => {
  const { id, name, price, image, quantity } = item;

  const changeQuantity = (e) => {
    setQuantity(id, Number(e.target.value));
  };
  const incrementQuantity = (id, prevQuantity) => {
    setQuantity(id, Number(prevQuantity) + 1);
  };
  const decrementQuantity = (id, prevQuantity) => {
    setQuantity(id, Number(prevQuantity) - 1);
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="" />
      <p>{name}</p>
      <p className={styles.price}>{price}€</p>
      <Button
        title={'-'}
        styleClasses={ButtonStyles.container}
        handleClick={(e) => decrementQuantity(id, quantity)}
      />
      <input type="number" value={item.quantity} onChange={changeQuantity} />
      <Button
        title={'+'}
        styleClasses={ButtonStyles.container}
        handleClick={(e) => incrementQuantity(id, quantity)}
      />
    </div>
  );
};

export default CartItem;
