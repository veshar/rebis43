import {useState} from 'react'


function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);


    function add(){
        /*if (count < stock ){
        setCount(count + 1);}*/
        count !== stock && setCount(count + 1);
    }
    function rest(){
        /*if (count > 1 ){
            setCount(count - 1);}*/
        count !== initial && setCount (count -1);
    }

  return (
    <div className='count'>
      <div className='buttons'>
        <button onClick={add}> + </button>
        <span> {count} </span>
        <button onClick={rest}> - </button>
        </div>
        <div className='add-cart'>
        <button onClick={()=>onAdd()}>Add to Cart!</button>
        </div>
    </div>
  )
}

export default ItemCount;