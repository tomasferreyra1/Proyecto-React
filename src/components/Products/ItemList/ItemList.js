
import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({item}) => {
  return (
    <>
        <div className="itemList">
            {item.map((producto) => {
                return (
                    <Item
                        id={producto.id} 
                        name={producto.name}
                        description={producto.description}
                        price={producto.price}
                        image={producto.image}
                        stock={producto.stock}
                        />
                        )
                    })}
        </div>
    </>
  )
}

export default ItemList;