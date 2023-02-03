import React from 'react';
import components from '../../data/components';
import Category from './Category';
import uniqid from 'uniqid';
import styled from 'styled-components';

const CategoryList = () => {
  const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <StyledContainer>
      {components.map((component) => (
        <Category title={component.name} key={uniqid()} />
      ))}
    </StyledContainer>
  );
};

export default CategoryList;
