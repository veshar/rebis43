import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (

    <div className="App" mx-auto>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element={<ItemListContainer />} />
          <Route path ="/category/:categoryId" element={<ItemListContainer />} />
          <Route path ="/ropa/:itemId" element={<ItemDetailContainer greeting="Detalle del producto" />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
