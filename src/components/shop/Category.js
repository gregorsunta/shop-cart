import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LAYOUT, PRIMARY, SECONDARY } from '../../styles/variables';

const StyledP = styled.p`
  font-size: ${LAYOUT.SIZE_5};
  color: ${PRIMARY.GRAY_9};
  background-color: ${SECONDARY.YELLOW_5};
  text-transform: uppercase;
  border: none;
  padding: ${LAYOUT.SIZE_3};
  transition: background-color 0.1s;
  border: solid ${'2px'} ${SECONDARY.YELLOW_5};
  &:hover {
    background-color: ${SECONDARY.YELLOW_2};
    border: solid ${'2px'} ${PRIMARY.GRAY_5};
  }
`;
const Category = ({ title }) => {
  const linkFormatted = title.toLowerCase().replaceAll(' ', '-');
  return (
    <NavLink to={`/shop/${linkFormatted}`}>
      <StyledP>{title}</StyledP>
    </NavLink>
  );
};

export default Category;
