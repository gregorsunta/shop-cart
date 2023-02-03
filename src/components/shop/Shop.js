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
const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 25vw;
`;
const Shop = () => {
  return (
    <>
      <StyledAside>
        <CategoryList />
      </StyledAside>
      <StyledList>
        <Routes>
          <Route path={':category'} element={<ItemList />} />
        </Routes>
      </StyledList>
    </>
  );
};

export default Shop;
