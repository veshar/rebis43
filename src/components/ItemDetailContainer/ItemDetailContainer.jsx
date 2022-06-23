import React, {useState, useEffect} from 'react'
import {productos} from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    //apis, llamados al backend
    const traerProducto = new Promise ((res, rej) => {
      setTimeout(() => {
        const itemFound = productos.find((ropa) =>{
          return ropa.id === parseInt(itemId);
        })
        res(itemFound);
      }, 2000);
      });
      //console.log(traerProductos)
      traerProducto
      .then((res) => {
        //console.log(res)
        setProduct(res);
      })
      /*.catch((error)=>{
        console.log(error)
      })*/
    },[itemId]);

    //console.log(products);

    return (
      <div className='text-center container mx-auto mx-5'>
      <div className='font-bold text-pink-600 text-4x1 mb-2'></div>
      <ItemDetail item={product} />
      </div>
    );

};
export default ItemDetailContainer;