import React from 'react';
import data from '../data.json';
import ProductItem from '../components/ProductItem/ProductItem';
import placeholder from '../assets/images/placeholder-img.png';
import './Products.scss';

function ProductsList() {
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      {data.map((item) => (
        <ProductItem
          key={item.id}
          name={item.name}
          price={item.price}
          size={item.size}
          image={item.img}
        />
      ))}
    </div>
  );
}

export default ProductsList;
