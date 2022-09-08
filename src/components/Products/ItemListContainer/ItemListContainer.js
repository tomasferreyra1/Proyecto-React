
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react';
import data from '../../mock-data';

import './ItemListStyles.css'


const ItemListContainer = () => { 
    const [items,setItems] = useState([]);
    
    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })

    useEffect(() => {
        getData.then((result) => {
            setItems(result)
        })
    },[])

    return( 
        <>
            <div className='itemListContainer'>
                <ItemList item={items}/>
            </div>
        </>
    )
}

export default ItemListContainer;
