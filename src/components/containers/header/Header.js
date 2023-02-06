import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import styles from '../../../styles/components/Header.module.css';

const Header = ({ buttons }) => {
  return (
    <header className={styles.container}>
      <div className={styles['container-child']}>
        <Logo />
        <div className={styles['container-buttons']}>
          {buttons.map((btn) => (
            <HeaderButton
              key={btn.id}
              title={btn.name}
              link={btn.link}
              handleClick={btn.handleClick}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
