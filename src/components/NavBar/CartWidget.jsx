import React, {useContext} from 'react';
import cartContext from '../../context/CartContext';
import carticon from "../../images/carticon.png";

export default function CartWidget() {
  const {qntyInCart} = useContext(cartContext);
  return (
    <div>
      <img width = "36" src= {carticon} alt="cart widget icon"/>
      <span className='ml-2'>{qntyInCart()}</span>
    </div>
  )
}
