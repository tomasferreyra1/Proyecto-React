import data from './mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


import './ItemListStyles.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => { 
    const [items,setItems] = useState([]);
    
    const getData = new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve(data)
        },2000)
    });
    
    useEffect (() => {
        getData.then((result) => {
            setItems(result)
        })
    },[])

    return( 
        <>
            <div className='itemListContainer'>
                {items.length > 0 ? (
                    <ItemList item={items}/>,
                    <ItemCount stock={data.stock} initial={0}/>
                ) : (
                    <div>Cargando...</div>
                )}
            </div>
        </>
    )
}

export default ItemListContainer;