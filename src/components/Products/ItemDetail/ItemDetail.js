import '../Item/item.css'
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    return (
      <div className='contenedor-item'>
        <img className="imagen-instrumento" src={item.image}/>
        <p>{item.id}</p>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button>Agregar al carrito</button>
        <br></br>
      </div>
    )

}

export default ItemDetail;