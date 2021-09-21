import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../assets/images/placeholder-img.png';
import './Products.scss';

function Products() {
  return (
    <div className="wrapper">
      <Link to="/product/TH01234">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Link>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={Placeholder} alt="clothing" className="card__image" />
        <p className="card__name">PRODUCT NAME</p>
        <p className="card__price">PRICE</p>
      </div>
    </div>
  );
}

export default Products;
