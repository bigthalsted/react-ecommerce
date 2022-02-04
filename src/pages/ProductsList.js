import React, { useState, useEffect } from 'react';
import './ProductsList.scss';
import Product from '../components/ProductItem/Product';

const API_URL = 'https://fakestoreapi.com/products?limit=4';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const products = await res.json();
      setProducts(products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ul className="products-list">
        {products
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
