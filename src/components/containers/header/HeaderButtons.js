import HeaderButton from './HeaderButton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StyledButtons = styled.div`
  display: flex;
  align-items: stretch;
`;
const buttonsInfo = [
  { id: uniqid(), title: 'home', link: '/', active: false },
  { id: uniqid(), title: 'shop', link: '/shop', active: false },
  { id: uniqid(), title: 'banana', link: '/banana', active: false },
];

const HeaderButtons = () => {
  const [buttons, setButtons] = useState(buttonsInfo);

  const changeActive = (id) => {
    const newButtons = buttons.map((btn) =>
      btn.id === id ? { ...btn, active: true } : { ...btn, active: false },
    );
    setButtons(newButtons);
  };
  const buttonList = () => {
    return buttons.map((btn) => (
      <HeaderButton
        key={btn.id}
        id={btn.id}
        title={btn.title}
        link={btn.link}
        handleClick={changeActive}
        active={btn.active}
      />
    ));
  };

  //   useEffect(() => {
  //     setButtons();
  //   });

  return <StyledButtons>{buttonList()}</StyledButtons>;
};
export default HeaderButtons;
