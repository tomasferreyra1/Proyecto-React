
import './ItemListStyles.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => { 
    return( 
        <div className='item-list-container'>
            {greeting}
            <ItemCount stock={5} initial={0}/>
        </div>
    )
}

export default ItemListContainer;