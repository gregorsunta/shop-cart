import React from 'react';
import styles from '../../styles/components/Home.module.css';
import ButtonStyles from '../../styles/components/Button.module.css';
import LinkButton from '../common/LinkButton';

const Home = () => {
  return (
    <div className={styles.container}>
      <LinkButton styles={ButtonStyles} title={'shop now'} link={'/shop'} />
    </div>
  );
};

export default Home;
