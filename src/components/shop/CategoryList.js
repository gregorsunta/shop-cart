import React from 'react';
import components from '../../data/components';
import Category from './Category';
import styles from '../../styles/components/CategoryList.module.css';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {components.map((component) => {
        const formattedName = component.name.replaceAll('-', ' ');
        const wordArr = formattedName.split(' ');
        const formattedArr = wordArr.map(
          (word) => word[0].toUpperCase() + word.slice(1),
        );
        return <Category title={formattedArr.join(' ')} key={formattedName} />;
      })}
    </div>
  );
};

export default CategoryList;
