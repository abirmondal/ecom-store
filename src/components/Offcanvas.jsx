import React, { useContext } from "react";
import CardCart from "./CardCart";
import CartContext from "../contexts/CartContext";

export default function Offcanvas() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title fs-4" id="cartOffcanvasLabel">
          Your Cart
        </h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CardCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} quantity={item.quantity} />)
        )}
      </div>
    </div>
  );
}
