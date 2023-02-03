import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';
import components from '../../data/components';

const StyledDiv = styled.div`
  width: 500px;
  height: 500px;
`;

const ItemList = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <StyledDiv>
      {components
        .find((el) => el.name === category)
        .items.map((el) => {
          return (
            <>
              <p>{el.name}</p>
              <p>{el.price}</p>
            </>
          );
        })}
    </StyledDiv>
  );
};

export default ItemList;
