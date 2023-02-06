import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LAYOUT } from '../../styles/variables';
import Item from './Item';

const StyledList = styled.ul`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 2rem;
  justify-items: stretch;
  align-items: stretch;
`;

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
    <StyledList>
      {items?.map((item) => {
        return <Item item={item} key={item.id} addItem={addItem} />;
      })}
    </StyledList>
  );
};

export default ItemList;
