
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../utils/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';

import './ItemListStyles.css'


const ItemListContainer = () => { 
    
    const {categoryId} = useParams();
    const [items,setItems] = useState([]);

    useEffect(() => {
        const queryref = !categoryId ? collection(db,'items') : query(collection(db,'items'),where('categoria','==',categoryId));
        getDocs(queryref).then(response => {
            const resultados = response.docs.map(doc => {
                const newItem = {
                    id:doc.id,
                    ...doc.data()
                }
                return newItem
            });
            setItems(resultados)
        })
    },[categoryId])

    return( 
        <div className='itemListContainer'>
            {
                items.length > 0 ? 
                (<ItemList item={items}/>)
                :
                (<div><h3>Cargando...</h3></div>)
            }
        </div>
    )
}

export default ItemListContainer;
