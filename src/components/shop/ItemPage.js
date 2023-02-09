import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../styles/components/ItemPage.module.css';
import Button from '../common/Button.js';
import ButtonStyles from '../../styles/components/Button.module.css';

const ItemPage = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  return (
    <div className={styles.container}>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{item.name}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptates dicta minus officia fugit excepturi eius sint itaque
          obcaecati? Explicabo, facilis. Voluptatum quo sunt unde porro placeat
          ratione omnis maxime.
        </p>
        <Button title={'Add to cart'} styles={ButtonStyles}></Button>
      </div>
    </div>
  );
};

export default ItemPage;
