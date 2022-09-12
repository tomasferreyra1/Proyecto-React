import { Link } from 'react-router-dom';
import './NavStyles.css';
import CartWidget from './CartWidget.js';

function NavBar()  {
    return(
        <div className='navbar-container'>
            <div className='title'>
                <Link to='/products'>
                    <a>Soni<i>DO</i> <i>RE</i>volucionario ♩</a>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/products'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-us'>About Us</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='cart'>
                <CartWidget/>
            </div>
            <div className='login-button'>
                <button>Login</button>
            </div>
        </div>
    );
};

export default NavBar; // Si no le colocamos el default en el archivo App.js debemos desestructurarlo.