

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Aqui ira el catalogo'}/>
      <ItemCount stock={5} initial={0}/>         
    </div>
  );
};

export default App;
