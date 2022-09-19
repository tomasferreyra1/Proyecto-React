import '../Item/item.css'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState , useContext } from 'react'
import { CartContext } from '../../../context/CartContext'


const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)
  
  const [counter, setCounter] = useState(0)

  const onAdd = (dato) => {
    setCounter(dato)
    addItem(item,dato)
  }

  return (
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
  )
}

export default ItemDetail;