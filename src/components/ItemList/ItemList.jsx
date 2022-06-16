import React from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className='flex justify-around flex-wrap'>
        {
        items.map((item)=>(
            <Item key={item}item={item}/>
            
        ))}
        </div>
  );
};

export default ItemList;