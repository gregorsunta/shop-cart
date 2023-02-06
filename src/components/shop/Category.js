import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LAYOUT, PRIMARY, SECONDARY } from '../../styles/variables';

const StyledP = styled.p`
  font-size: ${LAYOUT.SIZE_5};
  color: ${PRIMARY.GRAY_9};
  border: none;
  padding: ${LAYOUT.SIZE_3};
  text-decoration: none !important;
  transition: background-color 0.1s;
  &:hover {
    background-color: ${SECONDARY.YELLOW_2};
  }
`;
const activeStyle = {
  backgroundColor: `${SECONDARY.YELLOW_2}`,
};
const Category = ({ title }) => {
  const linkFormatted = title.toLowerCase().replaceAll(' ', '-');
  return (
    <NavLink
      style={({ isActive }) =>
        isActive
          ? { ...activeStyle, textDecoration: 'none' }
          : { textDecoration: 'none' }
      }
      to={`/shop/${linkFormatted}`}
    >
      <StyledP>{title}</StyledP>
    </NavLink>
  );
};

export default Category;
