import data from './mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


import './ItemListStyles.css'


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

    console.log(items)
    return( 
        <>
            <div className='itemListCOntainer'>
                <ItemList item={items}/>
            </div>
        </>
    )
}

export default ItemListContainer;