import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext"
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";


const CartContainer = () => {
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

    const updateOrder = () => {
        const queryRef = doc(db,'orders','RCZVi8BVfSogo6bzCAoV')
        updateDoc(queryRef, {
            total:14
        }).then(response => console.log(response))
    }

    return (
        <div>
            { idOrder ?
                <>
                    <p>Su orden fue creada, id {idOrder}</p>
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
                        <form onSubmit={sendOrder}>
                            <label>Nombre: </label>
                            <input type='text'/>
                            <label>Telefono: </label>
                            <input type='text'/>
                            <label>Correo: </label>
                            <input type='email'/>
                            <button type="submit">Enviar orden</button>
                        </form>
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
            }
        </div>
    )
}

export default CartContainer