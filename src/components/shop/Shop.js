import React from 'react';
import styled from 'styled-components';
import { Route, Routes, useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import CategoryList from './CategoryList';

const StyledAside = styled.aside`
  position: fixed;
  width: min-content;
  height: 7rem;
`;
const StyledDiv = styled.div`
  padding-left: 25vw;
`;
const Shop = () => {
  return (
    <div>
      <StyledAside>
        <CategoryList />
      </StyledAside>
      <StyledDiv>
        <Routes>
          <Route path={':category'} element={<ItemList />} />
        </Routes>
      </StyledDiv>
    </div>
  );
};

export default Shop;
