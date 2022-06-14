import React from 'react'
import ItemCount from './ItemCount/ItemCount'

export default function ItemListContainer() {
  return (
    <div>
      ItemListContainer
      <ItemCount stock = {5} initial = {1}/>
    </div>
    
  )
}
