import { Route, Routes } from 'react-router-dom';
import ItemList from './ItemList.js';
import CategoryList from './CategoryList';
import components from '../../data/components';

const StyledContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  // alignItems: 'center',
};
const StyledAside = {};
const StyledDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '80vw',
};

const Shop = ({ addItem }) => {
  return (
    <div style={StyledContainer}>
      <div style={StyledAside}>
        <CategoryList />
      </div>
      <div style={StyledDiv}>
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
