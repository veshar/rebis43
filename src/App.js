import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return (

    <div className="App" mx-auto>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element={<ItemListContainer/>} />
          <Route path ="/category/:categoryId" element={<ItemListContainer />} />
          <Route path ="/item/:itemId" element={<ItemDetailContainer greeting="Detalle del producto" />} />
          <Route path ="/cart" element={<Cart/>} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
