import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Grid({ category }) {
  var URL = "https://fakestoreapi.com/products/";
  if (category != null) {
    URL = "https://fakestoreapi.com/products/category/" + category + "/";
  }
  
  const [products, setProduct] = useState(null);

  const fetchProduct = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setProduct(null);
    fetchProduct(URL);
  }, [URL]);

  if (!products) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="spinner-border text-success" style={{ width: "5rem", height: "5rem", borderWidth: "0.5rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
