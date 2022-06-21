import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return <>

    <div className="App">
    <NavBar />

  
    {/*<ItemListContainer greeting="Hola Mundo"/>*/}
        <ItemDetailContainer itemId={0} greeting ="Detalle del producto"/>
    </div>
    </>;
}

export default App;
