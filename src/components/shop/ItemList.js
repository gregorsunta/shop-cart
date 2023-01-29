import React, { useEffect } from 'react';
import useItemList from './useItemList';
import Item from './Item';

const ItemList = ({ filters }) => {
  const [itemList, updateItemList] = useItemList();
  useEffect(() => {
    console.log(itemList);
    updateItemList(filters);
    console.log(itemList);
  }, [filters]);

  return (
    <div>
      {itemList?.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default ItemList;
