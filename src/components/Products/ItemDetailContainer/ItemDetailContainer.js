import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Item/item.css'
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const {productId} = useParams();
  const [item, setItem] = useState({})

  useEffect(()=>{
    const getProducto = async()=>{
        const queryRef = doc(db,"items",productId);
        const response = await getDoc(queryRef);
        const newItem = {
            id: response.id,
            ...response.data(),
        }
        console.log(newItem);
        setItem(newItem)
    }
    getProducto();
  },[productId])

  console.log('item:', item)

  return (
    <div className="item-detail-container">
      <ItemDetail item={item}/>
    </div>
  )

}

export default ItemDetailContainer;