import { Route, Routes } from 'react-router-dom';
import ItemList from './ItemList.js';
import CategoryList from './CategoryList';
import components from '../../data/components';
import styles from '../../styles/components/Shop.module.css';

const Shop = ({ addItem }) => {
  return (
    <div className={styles.container}>
      <div>
        <CategoryList />
      </div>
      <div className={styles['list-container']}>
        <Routes>
          <Route
            path={'/'}
            element={<ItemList itemsProp={components} addItem={addItem} />}
          />
          <Route
            path={':category'}
            element={<ItemList itemsProp={components} addItem={addItem} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Shop;
