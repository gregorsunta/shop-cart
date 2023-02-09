import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/components/Item.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';

const Item = ({ item, addItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles['img-container']}>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      <div className={styles['other-container']}>
        <p>{item.name}</p>
        <div>
          <p className={styles.price}>{item.price}€</p>
          <Button
            className={styles['add-button']}
            title={'Add to cart'}
            handleClick={() => addItem(item.id)}
            styles={ButtonStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
