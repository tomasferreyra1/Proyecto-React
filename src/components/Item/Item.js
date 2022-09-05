
import './item.css'

const Item = ({id,name,description,price,image,stock}) => {
  return (
    <div className="item">
        <p>{id}</p>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>
  )
}

export default Item;


