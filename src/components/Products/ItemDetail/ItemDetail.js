import { useEffect, useState } from "react";
import '../Item/item.css'
import data from '../../mock-data'
import './ItemDetail.css'


const ItemDetail = () => {
    const [item, setItems] = useState([])

    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      },2000)
    })

    useEffect(() => {
      getData.then((result) => {
        setItems(result)
      })
    },[])

    return (
      item.map((element) => {
        if (element === data[0]) {
          return(
            <div className="contenedor-item">
              <p>{element.id}</p>
              <img className="imagen-instrumento" src={element.image}/>
              <h3>{element.name}</h3>
              <p>${element.price}</p>
              <button>Agregar al carrito</button>
              <br></br>
            </div>
          )
        }
      })
    )
}

export default ItemDetail;