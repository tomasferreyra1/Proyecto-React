

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';


import {BrowserRouter,Route,Routes} from 'react-router-dom' 


function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          
          <Route exact path='/about-us' element={<AboutUs/>}/>

          <Route exact path='/contact' element={<Contact/>}/>

          <Route exact path='/products' element={<ItemListContainer/>}/>
          
          <Route exact path='/item/:productId' element={<ItemDetailContainer/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
