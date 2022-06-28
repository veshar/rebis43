import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (

    <div className="App" mx-auto>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element={<ItemListContainer/>} />
          <Route path ="/category/:categoryId" element={<ItemListContainer />} />
          <Route path ="/item/:itemId" element={<ItemDetailContainer greeting="Detalle del producto" />} />
          <Route path ="/cart" element={<Cart/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
