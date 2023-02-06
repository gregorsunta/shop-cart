import React from 'react';
import Logo from './Logo';
import LinkButton from '../../common/LinkButton';
import Button from '../../common/Button';
import styles from '../../../styles/components/Header.module.css';
import ButtonStyles from '../../../styles/components/HeaderButton.module.css';

const Header = ({ buttons }) => {
  return (
    <header className={styles.container}>
      <div className={styles['container-child']}>
        <Logo />
        <div className={styles['container-buttons']}>
          {buttons.map((btn) =>
            btn.link ? (
              <LinkButton
                key={btn.id}
                title={btn.name}
                link={btn.link}
                handleClick={btn.handleClick}
                styles={ButtonStyles}
              />
            ) : (
              <Button
                key={btn.id}
                title={btn.name}
                link={btn.link}
                handleClick={btn.handleClick}
                styleClasses={ButtonStyles.container}
              ></Button>
            ),
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
