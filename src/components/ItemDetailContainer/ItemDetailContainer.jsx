import React, {useState, useEffect} from 'react'
import {productos} from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ saludo, itemId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    //apis, llamados al backend
    const traerProducto = new Promise ((res, rej) => {
      setTimeout(() => {
        res(productos[itemId]);
      }, 2000);
      });
      //console.log(traerProductos)
      traerProducto
      .then((res) => {
        //console.log(res)
        setProduct(res);
      })
      .catch((error)=>{
        console.log(error)
      })
    },[]);

    //console.log(products);

    return (
      <div className='container mx-auto mt-5'>
      <div>{saludo}</div>
      <ItemDetail item={product} />
      </div>
    );

};
export default ItemDetailContainer;