import HeaderButton from './HeaderButton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StyledButtons = styled.div`
  display: flex;
  align-items: stretch;
`;
const buttonsInfo = [
  { id: uniqid(), title: 'home', link: '/' },
  { id: uniqid(), title: 'shop', link: '/shop/all-products' },
];

const HeaderButtons = () => {
  const [buttons, setButtons] = useState(buttonsInfo);

  const buttonList = () => {
    return buttons.map((btn) => (
      <HeaderButton
        key={btn.id}
        id={btn.id}
        title={btn.title}
        link={btn.link}
      />
    ));
  };

  return <StyledButtons>{buttonList()}</StyledButtons>;
};
export default HeaderButtons;
