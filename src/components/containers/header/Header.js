import React from 'react';
import LinkButton from '../../common/LinkButton';
import LogoImg from '../../../images/logo.svg';
import Button from '../../common/Button';
import styles from '../../../styles/components/Header.module.css';
import LogoStyles from '../../../styles/components/Logo.module.css';
import HeaderButtonStyles from '../../../styles/components/HeaderButton.module.css';

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
            styleClasses={
              cartItems[0]
                ? `${HeaderButtonStyles.container} ${HeaderButtonStyles['special-active']}`
                : `${HeaderButtonStyles.container}`
            }
          ></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
