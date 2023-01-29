import React, { useState } from 'react';
import Components from '../../data/Components';

const useItemList = () => {
  const [items, setItems] = useState(null);
  const updateItems = (filters) => {
    if (filters) {
      const newItems = [];
      newItems.push();
      setItems(newItems);
    } else {
      setItems(Components);
    }
  };
  return [items, updateItems];
};

export default useItemList;
