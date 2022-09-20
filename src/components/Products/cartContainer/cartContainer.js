import React, { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"


const CartContainer = () => {
    const {productCartList, removeItem} = useContext(CartContext);
    
    return (
        <div>
            CartContainer
            <div>
                {productCartList.map(item => (
                    <>
                        <p>{item.name} - {item.quantity}</p>
                        <button onClick={()=> removeItem(item.id)}>Eliminar producto</button>
                    </>
                ))}
            </div>
        </div>
    )
}

export default CartContainer