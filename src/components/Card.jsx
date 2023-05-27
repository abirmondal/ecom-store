import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  const rateCeil = Math.round(product.rating.rate);
  const commaRateCount = product.price.toLocaleString("en-US");

  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/products/${product.id}`}>
          <div className="d-flex align-items-center" style={{ height: "40vh" }}>
            <img src={product.image} className="card-img-top px-5 px-sm-4 py-2" alt={"Product " + product.id + " thumbnail"} style={{ maxHeight: "100%" }} role="button" />
          </div>
        </Link>
        <div className="card-body">
          <Link className="card-link link-dark link-offset-1" to={`/products/${product.id}`}>
            <h1 className="card-title fs-5 text-truncate" title={product.title}>
              {product.title}
            </h1>
          </Link>
          <h2 className="card-subtitle mb-2 text-capitalize fs-6">{product.category}</h2>
          <div className="text-secondary" title={product.rating.rate}>
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} className={`fa-${i < rateCeil ? "solid" : "regular"} fa-star fa-sm text-warning`}></i>
            ))}
            &nbsp;&nbsp;
            {product.rating.count}
          </div>
          <p className="card-text">$ {commaRateCount}</p>
          <button className="btn btn-warning btn-sm" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
