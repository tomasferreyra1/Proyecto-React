import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext"



const CartContainer = () => {
    const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
    
    return (
        <div>
            {            
                productCartList.length > 0 ?
                <div>
                {productCartList.map(item => (
                    <div>
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio unitario: ${item.price}usd</p>
                        <p>Precio productos: {item.quantityPrice}</p>
                        <button onClick={()=> removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
                <button onClick={clear}>Vaciar carrito</button>
                <p>Precio total: {getTotalPrice()}</p>
            </div>
            :
            <>
                <p>El carrito está vacio, agrega algún producto</p>
                <Link to='/products'>
                    Ir al listado de productos
                </Link>
            </>
            }
        </div>
    )
}

export default CartContainer