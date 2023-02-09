import React from 'react';
import styles from '../../styles/components/Home.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';
import LinkButton from '../common/LinkButton';
import Background from '../../images/background.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <h2>Want to beat them all?</h2>
        <h1>We got you.</h1>
        <LinkButton
          styleClass={ButtonStyles}
          title={'shop now'}
          link={'/shop'}
        />
      </div>
      <div className={styles.background}>
        <img src={Background} alt="" />
      </div>
    </div>
  );
};

export default Home;
