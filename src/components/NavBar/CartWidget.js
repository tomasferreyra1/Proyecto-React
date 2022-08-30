
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import './NavStyles.css';


function CartWidget() {
    return(
        <div className='cart-icon'>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            0
        </div>
    )
}

export default CartWidget;
