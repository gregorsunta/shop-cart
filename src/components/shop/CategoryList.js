import React from 'react';
import components from '../../data/components';
// import Category from './Category';
import styles from '../../styles/components/CategoryList.module.css';
import LinkButton from '../common/LinkButton';
import CategoryStyles from '../../styles/components/Category.module.css';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {components.map((component) => {
        const formattedName = component.name.replaceAll('-', ' ');
        const wordArr = formattedName.split(' ');
        const formattedArr = wordArr.map(
          (word) => word[0].toUpperCase() + word.slice(1),
        );
        return (
          <LinkButton
            title={formattedArr.join(' ')}
            key={formattedName}
            styleClass={CategoryStyles}
            link={component.name}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
