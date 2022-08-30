

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer/ItemListContainer';

function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Aqui ira el catalogo'}/>
    </div>
  );
};

export default App;
