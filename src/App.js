

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import cartContainer from './components/Products/cartContainer/cartContainer';
import cartProvider  from './context/CartContext';


import {BrowserRouter,Route,Routes} from 'react-router-dom' 


function App() {
  return(
    <cartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path='/about-us' element={<AboutUs/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/products' element={<ItemListContainer/>}/> 
            <Route exact path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<cartContainer/>}/>          
           </Routes>
        </div>
      </BrowserRouter>
    </cartProvider>
  );
};

export default App;
