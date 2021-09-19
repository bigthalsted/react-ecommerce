import React from 'react';
import Placeholder from '../assets/images/placeholder-img.png';
import './Products.scss';

function Products() {
  return (
    <div className="wrapper">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={Placeholder} alt="clothing" className="card__image" />
        <h2 className="card__name">PRODUCT NAME</h2>
        <p className="card__price">$100</p>
      </div>
    </div>
  );
}

export default Products;
