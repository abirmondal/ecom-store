import React, { createContext, useState } from "react";
import { addToCart, getCartItemsCount, getCartItemIDCount, getCartItems } from "../actions/cartActions.js";

const CartContext = createContext();

export default CartContext;

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(getCartItemsCount());

  function addToCartContext(prodDetails) {
    addToCart(prodDetails);
    setCartCount(getCartItemsCount());
  }

  function getCartItemsContext() {
    return getCartItems();
  }

  function getCartItemIDCountContext(itemId) {
    return getCartItemIDCount(itemId);
  }

  return <CartContext.Provider value={{ cartCount, setCartCount, addToCartContext, getCartItemsContext, getCartItemIDCountContext }}>{children}</CartContext.Provider>;
}
