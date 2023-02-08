import React from 'react';
import LinkButton from '../../common/LinkButton';
import LogoImg from '../../../images/logo.svg';
import Button from '../../common/Button';
import styles from '../../../styles/components/Header.module.css';
import LogoStyles from '../../../styles/components/Logo.module.css';
import HeaderButtonStyles from '../../../styles/components/HeaderButton.module.css';
import TriangleIcon from '../../../styles/icons/right-triangle.jsx';

const Header = ({ buttons, cartItems }) => {
  console.log(HeaderButtonStyles);

  return (
    <header className={styles.container}>
      <div className={styles['container-child']}>
        <div className={LogoStyles.container}>
          <p className={LogoStyles.text}>BYTES</p>
          <img className={LogoStyles.img} src={LogoImg} alt="" />
        </div>
        <div className={styles['container-buttons']}>
          <LinkButton
            title={buttons[0].title}
            link={buttons[0].link}
            styleClass={HeaderButtonStyles}
          />
          <LinkButton
            title={buttons[1].title}
            link={buttons[1].link}
            styleClass={HeaderButtonStyles}
          />

          <Button
            title={buttons[2].title}
            handleClick={buttons[2].handleClick}
            styleClasses={`${HeaderButtonStyles['special-active']} ${HeaderButtonStyles.container}`}
          >
            <svg
              width="0px"
              height="0px"
              viewBox="0 0 100 100"
              className={
                cartItems[0] ? HeaderButtonStyles['special-mark'] : undefined
              }
            >
              <polygon fill="#E91E63" points="100 0, 0 100 , 0 0"></polygon>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
