import './item.css'
import { Link } from 'react-router-dom';

const Item = ({id,name,price,image,stock}) => {
  return (
    <div className="item">
        <p>{id}</p>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Stock disponible: {stock}</p>
        <Link to={`/item/${id}`}>
          <button>Ver detalles</button>
        </Link>
    </div>
  )
}

export default Item;


