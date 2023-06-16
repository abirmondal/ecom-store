import React, { createContext, useState } from "react";
import { getCartItemsCount, getCartItems } from "../actions/cartActions.js";

const CartContext = createContext();

export default CartContext;

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(getCartItemsCount());
  const [cartItems, setCartItems] = useState(getCartItems());

  return <CartContext.Provider value={{ cartCount, cartItems, setCartCount, setCartItems }}>{children}</CartContext.Provider>;
}
