

import './NavStyles.css';
import CartWidget from './CartWidget.js';

function NavBar()  {
    return(
        <div className='navbar-container'>
            <div className='title'>
                <h3>Mi marca</h3>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About us</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='cart'>
                <CartWidget/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default NavBar; // Si no le colocamos el default en el archivo App.js debemos desestructurarlo.