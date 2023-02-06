import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/components/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Button title={'shop now'} link={'/shop'} />
    </div>
  );
};

export default Home;
