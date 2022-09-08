import { useState } from 'react'
import './ItemCount.css'


function ItemCount({stock, initial}) {
    const [count,setCount] = useState(initial);

    return(
        <div className='buttons'>               
            <button className='boton' onClick={() => setCount(count - 1)} disabled={count===0}> - </button>
            <p>Cantidad: {count}</p>
            <button className='boton' onClick={() => setCount(count + 1)} disabled={count===stock}> + </button>
        </div>
    );
};

export default ItemCount;