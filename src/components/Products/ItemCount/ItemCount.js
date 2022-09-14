import { useState } from 'react'
import './ItemCount.css'


function ItemCount({stock, initial, onAdd}) {
    const [count,setCount] = useState(initial);

    return(
        <div>
            <div className='buttons'>               
                <button className='boton' onClick={() => setCount(count - 1)} disabled={count===0}> - </button>
                <p>Cantidad: {count}</p>
                <button className='boton' onClick={() => setCount(count + 1)} disabled={count===stock}> + </button>
                <br></br>
            </div>
            <button disabled={stock===0} className='boton-agregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;