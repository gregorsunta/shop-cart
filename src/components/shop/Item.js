import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/components/Item.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item, addItem }) => {
  return (
    <div className={styles.container}>
      <Link to={`/products/${item.id}`} className={styles['img-container']}>
        <img className={styles.img} src={item.image} alt="" />
      </Link>
      <div className={styles['other-container']}>
        <Link className={styles.name} to={`/products/${item.id}`}>
          {item.name}
        </Link>
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
