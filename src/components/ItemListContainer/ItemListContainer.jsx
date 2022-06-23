import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {productos} from '../../data/products'
import ItemList from '../ItemList/ItemList';

function traerDatos(categoryId){
  return new Promise ((res, rej) => {
    setTimeout(() => {
      let responseList =[]
      if(categoryId ){
      responseList = productos.filter(item =>
        item.category=== categoryId)}

      else{
        responseList=productos;
        }
        res(responseList);
      
    }, 1000);
    });
}

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
   
      traerDatos(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error)=>{
        console.log(error)
      })
    },[categoryId]);


    return (
      <div className='text-center container mx-auto mt-5'>
      <div className='font-bold text-pink-600 text-4x1 mb-2'>{greeting}</div>
      <ItemList items={products} />
      </div>
    );

};
export default ItemListContainer;