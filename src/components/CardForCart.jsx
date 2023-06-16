import React, { useContext } from "react";
import { addToCart, removeFromCart, getCartItemsCount, getCartItems } from "../actions/cartActions";
import CartContext from "../contexts/CartContext";

export default function CardForCart(props) {
  const { setCartCount, setCartItems } = useContext(CartContext);
  const { id, title, image, price, quantity } = props;

  function updateCartValues() {
    setCartItems(getCartItems());
    setCartCount(getCartItemsCount());
  }

  function handleAddToCart() {
    addToCart(props);
    updateCartValues();
  }

  function handleRemoveFromCart() {
    removeFromCart(id);
    updateCartValues();
  }

  return (
    <div className="card mb-2" id={"cartCard" + id}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text price-text">{price}</p>
        <div className="input-group w-75">
          <button className="btn btn-secondary btn-sm" onClick={handleRemoveFromCart}>
            -
          </button>
          <input type="text" className="form-control quantityCount" aria-label="Quantity of product" value={quantity} disabled />
          <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
