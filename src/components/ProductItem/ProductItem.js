import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductItem({ id, name, price, image }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card-body">
        <img src={image} alt="clothing" className="card__image" />
        <h2 className="card__name">{name}</h2>
        <p className="card__price">${price}</p>
      </div>
    </Link>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.any,
};
