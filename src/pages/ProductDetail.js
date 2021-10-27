import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBasket } from '../redux/actions/addAction';

const BASE_URL = 'https://fakestoreapi.com/products/';

function ProductDetail(props) {
  console.log(props);
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const res = await fetch(BASE_URL + id);
      const newProduct = await res.json();
      setProduct(newProduct);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product.title) return null;

  return (
    <div>
      <img src={product.image} alt={`${product.title}`} />
      <h2>{product.title}</h2>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
      <button type="submit" onClick={() =>props.addBasket(`${product.id}`)}>Add to cart</button>
    </div>
  );
}

export default connect(null, { addBasket})(ProductDetail);
