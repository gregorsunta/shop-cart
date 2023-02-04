import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';
import components from '../../data/components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 2rem;
`;

const ItemList = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <StyledDiv>
      {components
        .find((el) => el.name === category)
        .items.map((item) => {
          return <Item item={item} />;
        })}
    </StyledDiv>
  );
};

export default ItemList;
