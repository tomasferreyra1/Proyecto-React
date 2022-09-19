import React, { useContext } from "react"
import { CartContext } from "../../../context/CartContext"


export const cartContainer = () => {
    const {productCartList, removeItem} = useContext(CartContext);
    
    return (
        <div>
            CartContainer
            <div>
                {productCartList.map(item => (
                    <>
                        <p>{item.title} - {item.quantity}</p>
                        <button onClick={()=> removeItem(item.id)}>Eliminar producto</button>
                    </>
                ))}
            </div>
        </div>
    )
}
