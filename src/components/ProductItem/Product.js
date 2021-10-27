import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <li>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={`${product.title}`} />
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
      </Link>
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
