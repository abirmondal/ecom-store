import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { addToCart, getCartItemsCount, getCartItems } from "../actions/cartActions";
import CartContext from "../contexts/CartContext";

export default function Card({ product }) {
  const { setCartCount, setCartItems } = useContext(CartContext);
  const rateCeil = Math.round(product.rating.rate);
  const commaPrice = product.price.toLocaleString("en-US");
  const prodDetailsForCart = product;
  prodDetailsForCart.quantity = 1;

  function handleAddToCart() {
    addToCart(prodDetailsForCart);
    setCartCount(getCartItemsCount());
    setCartItems(getCartItems());
  }

  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="d-flex align-items-center" style={{ height: "40vh" }}>
          <img src={product.image} className="card-img-top px-5 px-sm-4 py-2" alt={"Product " + product.id + " thumbnail"} style={{ maxHeight: "100%" }} role="button" title={product.title} />
        </div>
        <div className="card-body">
          <Link className="card-link link-offset-1" to={`/products/${product.id}`}>
            <h1 className="card-title fs-5 text-truncate">{product.title}</h1>
          </Link>
          <h2 className="card-subtitle mb-2 text-capitalize fs-6">{product.category}</h2>
          <div title={product.rating.rate}>
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} className={`fa-${i < rateCeil ? "solid" : "regular"} fa-star fa-sm text-warning`}></i>
            ))}
            &nbsp;&nbsp;
            {product.rating.count}
          </div>
          <p className="card-text price-text">{commaPrice}</p>
          <button className="btn btn-primary btn-sm" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
