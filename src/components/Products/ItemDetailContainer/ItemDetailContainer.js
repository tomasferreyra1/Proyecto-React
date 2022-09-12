import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Item/item.css'
import data from '../../mock-data'
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const {productId} = useParams();
  const [item, setItems] = useState([])

  const getData = (id) => {
    return new Promise((resolve, reject) => {
      const item = data.find( item => item.id === parseInt(id))
      setTimeout(() => {
        resolve(item)
      },[])
    })
  } 

  useEffect(() => {
    const getProducto = async()=> {
      const producto = await getData(productId);
      setItems(producto)
    }
    getProducto()
  },[productId])

  return (
    <div className="item-detail-container" key={productId}>
      <ItemDetail item={item}/>
    </div>
  )

}

export default ItemDetailContainer;