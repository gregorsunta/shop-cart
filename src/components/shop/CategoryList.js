import React from 'react';
import components from '../../data/components';
import Category from './Category';
import uniqid from 'uniqid';
import styled from 'styled-components';
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20vw;
`;
const CategoryList = () => {
  return (
    <StyledContainer>
      {components.map((component) => {
        const formattedName = component.name.replaceAll('-', ' ');
        const wordArr = formattedName.split(' ');
        const formattedArr = wordArr.map(
          (word) => word[0].toUpperCase() + word.slice(1),
        );
        return <Category title={formattedArr.join(' ')} key={uniqid()} />;
      })}
    </StyledContainer>
  );
};

export default CategoryList;
