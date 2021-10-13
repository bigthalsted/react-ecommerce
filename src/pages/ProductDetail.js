import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://fakestoreapi.com/products/';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [buttonText, setButtonText] = useState("ADD TO CART");

  const getProduct = async () => {
    try {
      const res = await fetch(BASE_URL + id);
      const newProduct = await res.json();
      setProduct(newProduct);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product.title) return null;

  return (
    <div>
      <img src={product.image} alt={`${product.title}`} />
      <h2>{product.title}</h2>
      <h2>{`$${product.price}`}</h2>
      <p>{product.description}</p>
      <button onClick={() => setButtonText("ADDED TO CART")}>{buttonText}</button>
    </div>
  );
}

export default ProductDetail;
