import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom'

function ItemDetail({item}) {
  //function handleOnAdd(){}
  //let navigate = useNavigate();
  const [cant, setCant] = useState(0);
  const onAdd = (cantidad) => {
    setCant(cantidad);
    //navigate('/cart');
  };
  return (
    <div className="container px-5 py-24 mx-auto flex sm: flex-nowrap flex-wrap">
      <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
      <img width="600" src={item.img} alt={item.name}/>
      </div>
      </div>   
      <div className='lg:w-1/3 md:w1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-5'>     
      <h3 className='text-3x1 text-gray-900 mt-2 mb-4 font-medium title-font'>{item.name}</h3>
      
      <p className='mt-5 mb-3 text-xs text-gray-500'>{item.description}</p>
      <p className='mt-4 text-green-700 text-md font-bold '>${item.price}</p>
      {cant === 0 ? (
        <ItemCount stock={item.stock} initial= {1} onAdd={onAdd} />
      ) : (
        <Link to="/cart"> Ir al carrito </Link>
      )}
      </div>
    </div>
  )
}

export default ItemDetail