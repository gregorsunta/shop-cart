import React from 'react';
import LinkButton from '../../common/LinkButton';
import LogoImg from '../../../images/logo.svg';
import Button from '../../common/Button';
import styles from '../../../styles/components/Header.module.css';
import LogoStyles from '../../../styles/components/Logo.module.css';
import ButtonStyles from '../../../styles/components/HeaderButton.module.css';
import CartButtonStyles from '../../../styles/components/HeaderCartButton.module.css';

const Header = ({ buttons, cartItems }) => {
  console.log(ButtonStyles);

  return (
    <header className={styles.container}>
      <div className={styles['container-child']}>
        <div className={LogoStyles.container}>
          <p className={LogoStyles.text}>bytes</p>
          <img className={LogoStyles.img} src={LogoImg} alt="" />
        </div>
        <div className={styles['container-buttons']}>
          <LinkButton
            title={buttons[0].title}
            link={buttons[0].link}
            styleClass={ButtonStyles}
          />
          <LinkButton
            title={buttons[1].title}
            link={buttons[1].link}
            styleClass={ButtonStyles}
          />
          <Button
            title={buttons[2].title}
            handleClick={buttons[2].handleClick}
            styles={CartButtonStyles}
            isActive={Boolean(cartItems[0])}
          >
            <svg
              viewBox="0 0 100 100"
              display={'none'}
              className={
                cartItems[0] ? CartButtonStyles['mark-icon'] : undefined
              }
            >
              <polygon points="100 0, 0 100 , 0 0"></polygon>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
