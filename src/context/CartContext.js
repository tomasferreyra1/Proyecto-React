import React from "react";
import { createContext, useState } from "react";

export const CartContext = React.createContext();

export const cartProvider = ({ children }) => {
  let [productCartList, setProductCartList] = useState([]);

  const addItem = (item, quantity) => {
    console.log("item: ", item, "quantity: ", quantity);
    
    const newProduct = {
        ...item,
        quantity
    }

    const newArreglo = [...productCartList]
    newArreglo.push(newProduct)
    setProductCartList(newArreglo)
  };

    const removeItem = (itemId) => {
        const newArreglo = productCartList.filter(product => product.id !== itemId)
        setProductCartList(newArreglo)
    }

  return (
    <CartContext.Provider value={{ productCartList, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};