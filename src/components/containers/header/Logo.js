import React from 'react';
import LogoImg from '../../../images/logo.svg';
import styles from '../../../styles/components/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>BYTES</p>
      <img className={styles.img} src={LogoImg} alt="" />
    </div>
  );
};

export default Logo;
