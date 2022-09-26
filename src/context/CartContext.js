import React , { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  let [productCartList, setProductCartList] = useState([]);

  const isInCart = (productId) => {
    const productExist = productCartList.some(item => item.id === productId)
    return productExist;
  }

  const addItem = (item, quantity) => {
    console.log("item: ", item, "quantity: ", quantity);
    const newProduct = {
        ...item,
        quantity
    }

    if (isInCart(item.id)) {
      const productPos = productCartList.findIndex(product => product.id === item.id)
      const newArreglo = [...productCartList]
      newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity
      newArreglo[productPos].quantityprice = newArreglo[productPos].quantity * newArreglo[productPos].price
      setProductCartList(newArreglo)
    } else {
      const newArreglo = [...productCartList]
      newProduct.quantityprice = newProduct.quantity * newProduct.price
      newArreglo.push(newProduct)
      setProductCartList(newArreglo)
    }
  }

  const removeItem = (itemId) => {
    const newArreglo = productCartList.filter(product => product.id !== itemId)
    setProductCartList(newArreglo)
  }

  const clear = () => {
    setProductCartList([])
  }

  const getTotalPrice = () => {
    const totalPrice = productCartList.reduce((acc,item) => acc + item.quantityprice,0)
    return totalPrice
  }

  const getTotalProducts = () => {
    const totalProducts = productCartList.reduce((acc,item) => acc + item.quantity,0)
    return totalProducts
  }

  return (
    <CartContext.Provider value={{ productCartList, addItem, removeItem, clear, isInCart, getTotalPrice, getTotalProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;