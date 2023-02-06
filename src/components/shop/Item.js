import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/components/Item.module.css';

const Item = ({ item, addItem }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.image} alt="" />
      <p>{item.name}</p>
      <p className={styles.price}>{item.price}€</p>
      <Button
        title={'Add to cart'}
        handleClick={addItem?.bind(this, item.id)}
      />
    </div>
  );
};

export default Item;
