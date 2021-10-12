import React, { useState, useEffect } from 'react';
import Product from '../components/ProductItem/Product';
import Filter from '../Filter';

const API_URL = 'https://fakestoreapi.com/products';

export default function ProductsList() {
  const [filter, setFilter] = useState('');
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
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="products-list">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
