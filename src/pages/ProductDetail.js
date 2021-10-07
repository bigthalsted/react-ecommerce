import React from 'react';
import { Button } from 'react-bootstrap';
import Placeholder from '../assets/images/placeholder-img.png';
import '../data.json';

function ProductDetail() {
  return (
    <div className="wrapper">
      <img src={Placeholder} alt="product" />
      <h2>PRODUCT NAME</h2>
      <h2>PRICE</h2>
      <Button>ADD TO CART</Button>
    </div>
  );
}

export default ProductDetail;
