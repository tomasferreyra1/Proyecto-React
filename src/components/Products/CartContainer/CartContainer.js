import React, { useContext, useState } from "react"
import './CartContainer.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext"
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";


export const CartContainer = () => {
    const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState('');
    
    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            buyer: {
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items: productCartList,
            total: getTotalPrice()
        }
        const queryRef = collection(db,'orders');
        addDoc(queryRef, order).then(response => {
            setIdOrder(response.id)
            clear();
        });
    }

    return (
        <div>
            { idOrder ?
                <>
                    <p>Su orden fue creada, id: {idOrder}</p>
                    <Link to='/'>
                        Ir al listado de productos
                    </Link>
                </>
            :
            <div>
                {           
                    productCartList.length > 0 ?
                    <div>
                        {productCartList.map(item => (
                            <div className="item-cart-container">
                                <div className="item-cart">
                                    <p>{item.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio unitario: ${item.price} usd</p>
                                    <p>Precio productos: ${item.price*item.quantity} usd</p>
                                    <button onClick={()=> removeItem(item.id)}>Eliminar producto</button>
                                </div>
                            </div>
                        ))}
                        <button onClick={clear}>Vaciar carrito</button>
                        <p className="total-price">Precio total: ${getTotalPrice()} usd</p>
                        <form className="form" onSubmit={sendOrder}>
                            <label className="label">Nombre: </label>
                            <input type='text'/>
                            <label className="label">Telefono: </label>
                            <input type='text'/>
                            <label className="label">Correo: </label>
                            <input type='email'/>
                            <button type="submit">Enviar orden</button>
                        </form>
                    </div>
                    :
                    <>
                        <p className="cartTitle">El carrito está vacio, agrega algún producto</p>
                        <Link to='/products'>
                            Ir al listado de productos
                        </Link>
                    </>
                }
            </div>
            }
        </div>
    )
}
