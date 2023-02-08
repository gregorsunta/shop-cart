import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import styles from '../../styles/components/ItemList.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';

const ItemList = ({ itemsProp, addItem }) => {
  const { category } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = () => {
      if (!category) {
        const allItems = [];
        itemsProp.forEach((category) => allItems.push(...category.items));
        return allItems;
      } else {
        return itemsProp.find((el) => el.name === category).items;
      }
    };
    setItems(getItems());
  }, [category]);

  return (
    <div className={styles.container}>
      {items?.map((item) => {
        return <Item item={item} key={item.id} addItem={addItem} />;
      })}
    </div>
  );
};

export default ItemList;
