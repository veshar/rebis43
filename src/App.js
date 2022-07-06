import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { CartContextProvider } from './context/CartContext';
import CartView from "./components/CartView/CartView";



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
          <Route path ="/cart" element={<CartView/>} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
