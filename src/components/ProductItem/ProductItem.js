import React from 'react';
import PropTypes from 'prop-types';

export default function ProductItem({ name, price, image }) {
  return (
    <div className="card-body">
      <img src={image} alt="clothing" className="card__image" />
      <h2 className="card__name">{name}</h2>
      <p className="card__price">${price}</p>
    </div>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.any,
};
