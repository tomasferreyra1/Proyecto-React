import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import './NavStyles.css';
import { Link } from 'react-router-dom';


function CartWidget() {
    return(
        <div className='cart-icon'>
            <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Link>
        </div>
    )
}

export default CartWidget;
