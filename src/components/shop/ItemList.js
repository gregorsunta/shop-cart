import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';
import components from '../../data/components';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 2rem;
`;

const ItemList = () => {
  const { category } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = () => {
      if (category === 'all-products') {
        const allItems = [];
        components.forEach((cat) => allItems.push(...cat.items));
        return allItems.map((item) => {
          return <Item item={item} />;
        });
      } else {
        return components
          .find((el) => el.name === category)
          .items.map((item) => {
            return <Item item={item} />;
          });
      }
    };
    setItems(getItems());
  }, [category]);

  return <StyledList>{items}</StyledList>;
};

export default ItemList;
