import React, { useContext } from "react";
import CardForCart from "./CardForCart";
import CartContext from "../contexts/CartContext";

export default function Offcanvas() {
  const { cartItems } = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
          <div>
            <p className="text-center fs-5 fw-medium">
              Total Amount: <span className="price-text">{totalAmount}</span>
            </p>
            {cartItems.map((item) => (
              <CardForCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} quantity={item.quantity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
