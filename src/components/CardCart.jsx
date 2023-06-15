import React, { useContext, useState } from "react";
import { addToCart, removeFromCart, getCartItemsCount, getCartItemIDCount } from "../actions/cartActions";
import CartContext from "../contexts/CartContext";

export default function CardCart(props) {
  const { setCartCount } = useContext(CartContext);
  const { id, title, image, price } = props;
  const [quantity, setQuantity] = useState(getCartItemIDCount(id));

  function handleAddToCart() {
    addToCart(props);
    setQuantity(getCartItemIDCount(id));
  }

  function handleRemoveFromCart() {
    removeFromCart(id);
    setCartCount(getCartItemsCount());
    setQuantity(getCartItemIDCount(id));
  }

  return (
    <div className="card" id={"cartCard" + id}>
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

CardCart.defaultProps = {
  title: "Product Name",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  price: 10.99,
  quantity: 1,
  id: 1,
};
