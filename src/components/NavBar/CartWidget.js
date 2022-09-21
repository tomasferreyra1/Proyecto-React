import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import './NavStyles.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


function CartWidget() {
    const {getTotalProducts} = useContext(CartContext)
    return(
        <div className='cart-icon'>
            <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                <span>{getTotalProducts()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;
