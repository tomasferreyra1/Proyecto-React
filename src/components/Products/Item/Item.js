
import './item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id,name,price,image,stock}) => {
  return (
    <div className="item">
        <p>{id}</p>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Stock disponible: {stock}</p>
        <ItemCount stock={stock} initial={0}/> 
    </div>
  )
}

export default Item;


