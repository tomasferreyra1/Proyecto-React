import '../Item/item.css'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState , useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)
  
  const [counter, setCounter] = useState(0)

  const onAdd = (dato) => {
    setCounter(dato)
    addItem(item,dato)
  }

  return (
    <div>
      <div className='contenedor-item'>
        <img className="imagen-instrumento" src={item.image}/>
        <p>{item.id}</p>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <br></br>
        <p>Cantidad disponible: {item.stock}</p>
        <p>{counter}</p>
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
      </div>
      {
        counter > 0 &&
        <Link to='/cart'>
          <button>Ir al carrito</button>
        </Link>
      }
    </div>
  )
}

export default ItemDetail;