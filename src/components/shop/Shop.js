import React from 'react';
import styled from 'styled-components';
import useItemList from './useItemList';
import useFilters from './useFilters';
import ItemList from './ItemList';

const StyledMain = styled.div`
  min-height: 100vh;
`;
const StyledBackground = styled.img`
  width: 100vw;
`;

const Shop = () => {
  const [filters] = useFilters(null);
  return (
    <StyledMain>
      <ItemList filters={filters} />
    </StyledMain>
  );
};

export default Shop;
