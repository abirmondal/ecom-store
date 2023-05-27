import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const rateCeilRef = useRef(0);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        rateCeilRef.current = Math.round(data.rating.rate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct(id);
  }, [id]);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="spinner-border text-success" style={{ width: "5rem", height: "5rem", borderWidth: "0.5rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-sm-4 col-md-5">
        <img src={product.image} alt={product.title} className="img-fluid p-4" />
      </div>
      <div className="col-sm-8 col-md-7 g-4">
        <h1 className="fs-2">{product.title}</h1>
        <h2 className="text-capitalize fs-4 text-secondary">{product.category}</h2>
        <p className="fw-light">{product.description}</p>
        <div className="text-secondary" title={product.rating.rate}>
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={`fa-${i < rateCeilRef.current ? "solid" : "regular"} fa-star fa-sm text-warning`}></i>
          ))}
          &nbsp;&nbsp;
          {product.rating.count}
        </div>
        <h3>${product.price}</h3>
        <button className="btn btn-warning mt-3" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
