import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem/ProductItem';
import placeholder from '../assets/images/placeholder-img.png';
import './Products.scss';

const items = [
  {
    id: 1,
    img: placeholder,
    name: 'PRODUCT NAMEeee',
    price: '$1000',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    img: placeholder,
    name: 'PRODUCT NAMEe',
    price: '$10',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    img: placeholder,
    name: 'PRODUCT NAMEe',
    price: '$100000',
    size: ['S', 'M', 'L', 'XL'],
  },
];

function Products() {
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      {items.map((item) => (
        <ProductItem
          name={item.name}
          price={item.price}
          size={item.size}
          image={item.img}
        />
      ))}
    </div>
  );
}

export default Products;
