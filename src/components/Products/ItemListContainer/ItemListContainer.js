
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react';
import data from '../../mock-data';
import { useParams } from 'react-router-dom';

import './ItemListStyles.css'


const ItemListContainer = () => { 
    const [items,setItems] = useState([]);
    const {productId} = useParams()
    
    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })

    useEffect(() => {
        getData.then(result => {
            if (productId) {
                const newProductos = result.filter(item => item.id === productId)
                setItems(newProductos)
            } else {
                setItems(result)
            }
        })
    },[productId])

    return( 
        <div className='itemListContainer'>
            <ItemList item={items}/>
        </div>
    )
}

export default ItemListContainer;
