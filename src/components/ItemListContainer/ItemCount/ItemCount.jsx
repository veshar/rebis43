import {useState} from 'react'


function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial);


    function add(){
        if (count < stock ){
        setCount(count + 1);}
    }
    function rest(){
        if (count > 1 ){
            setCount(count - 1);}
    }

  return (
    <div>
        <button onClick={rest}> - </button>
        <span> {count} </span>
        <button onClick={add}> + </button>
        <br />
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;